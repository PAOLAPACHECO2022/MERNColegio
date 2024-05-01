import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setStudents } from "state";
import '../index.css'; 

const NewActivity = () => {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const { courseId, gradeId } = useParams();
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  
  const [area, setArea] = useState('');
  const [indicator, setIndicator] = useState('');
  const [actity, setActity] = useState('');
  const [statea, setStatea] = useState('');
  const [date, setDate] = useState('');
  const [studentId, setStudentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const savedActivityResponse = await fetch(
      "http://localhost:3003/activities/createActivity",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
 
        body: JSON.stringify({
          area: area,
          indicator: indicator,
          actity: actity,
          statea: statea,
          date: date,
          studentId: studentId,
          courseId: courseId,
          period: new Date().getFullYear(),
        }),
      }
    );

    const savedActivity = await savedActivityResponse.json();

    if (savedActivity) {
      navigate(`/activitiesByCourse/${courseId}/${gradeId}`);
    }
  };

  const getStudents = async () => {
    const response = await fetch(`http://localhost:3003/students/${gradeId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setStudents({ students: data }));
  };



  useEffect(() => {
    getStudents();
  }, []); // eslint-disable-line


  return (
    <>
       
    <div className="fondoy fondoy-wrap p-5">
      <Sidebar />
      <Aside />
      <div className="p-4 sm:ml-64">
        <div className="fondox p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="flex flex-row justify-between mb-4">
            <h1 className="text-3xl font-bold mb-4">New Activity</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Student
                </label>
                <select
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Select a student:</option>
                  {students.map((student) => (
                    <option key={student._id} value={student._id}>
                      {`${student.firstName} ${student.lastName}`}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Area
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Area"
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Indicator
                </label>
                <textarea
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describes the Indicator"
                  required
              
                  value={indicator}
                  onChange={(e) => setIndicator(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Activity
                </label>
                <textarea
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describes the Activity"
                  required
                  value={actity}
                  onChange={(e) => setActity(e.target.value)}
                />
              </div>
              
            </div>

       <div className="grid gap-6 mb-6 md:grid-cols-2">

              <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Date
                </label>
                <input
                  type="date" // Campo de tipo date para un calendario nativo
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                State
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Activity status"
                  required
                  value={statea}
                  onChange={(e) => setStatea(e.target.value)}
                />
              </div>
             
            
          
            </div>


       
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default NewActivity;