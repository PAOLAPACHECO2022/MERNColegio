import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivities } from "state";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { useNavigate, useParams } from "react-router-dom";
import '../index.css'; 

const ActivitiesByCourse = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const token = useSelector((state) => state.token);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const { courseId, gradeId } = useParams();

  const [searchTerm, setSearchTerm] = useState(""); // Para el término de búsqueda

  const getActivities = async () => {
    const response = await fetch(
      `http://localhost:3003/activities/${courseId}/course`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setActivities({ activities: data }));
  };

  useEffect(() => {
    getActivities();
  }, [courseId]); // eslint-disable-line

  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(activities.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const handleDelete = async (activityId) => {
    const response = await fetch(
      `http://localhost:3003/activities/${activityId}/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log("Activity deleted");
    getActivities();
  };

  // Filtrar los Activities por "studentName" usando el término de búsqueda
  const filteredActivities = activities.filter((activity) =>
  activity.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function dateFormated(date) {
    let dateObj = new Date(date);
    let formattedDate = dateObj.toISOString().slice(0, 10);
    return formattedDate;
  }


  const activitiesToDisplay = filteredActivities
    .slice(offset, offset + PER_PAGE)
    .map((activity) => (
      <tr key={activity._id}>
        <td className="border px-4 py-2">{activity.studentName}</td>
        <td className="border px-4 py-2">{activity.courseName}</td>
        <td className="border px-4 py-2">{activity.area}</td>
        <td className="border px-4 py-2">{activity.indicator}</td>
        <td className="border px-4 py-2">{activity.actity}</td>
        <td className="border px-4 py-2">{activity.statea}</td>
        <td className="border px-4 py-2">{dateFormated(activity.date)}</td>

        <td className="border px-4 py-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => navigate(`/editActivity/${courseId}/${gradeId}/${activity._id}`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(activity._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  return (
    <>
      <div className="p-4 sm:ml-64"> 
        <div className="fondoy fondoy-wrap p-5">
          <Sidebar />
          <Aside />
          <div className="p-4 sm:ml-64">
            <div className="bg-white p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className="flex flex-row justify-between mb-4">
                <h1 className="text-3xl font-bold mb-4">Activities</h1>
                <input
                  type="text"
                  placeholder="Search by student name..."
                  value={searchTerm} // Conectado al estado
                  onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado cuando se escribe
                  className="border-4 border-black px-4 py-2 rounded"
                />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => navigate(`/newActivity/${courseId}/${gradeId}`)}
                >
                  New Activity
                </button>
              </div>
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Student Name</th>
                    <th className="px-4 py-2">Course Name</th>
                    <th className="px-4 py-2">Area</th>
                    <th className="px-4 py-2">Indicator</th>
                    <th className="px-4 py-2">Activity</th>
                    <th className="px-4 py-2">State</th>
                    <th class="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>{activitiesToDisplay}</tbody>
              </table>
              <div className="flex justify-center mt-4">
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  previousLinkClassName={"previous_page"}
                  nextLinkClassName={"next_page"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesByCourse;