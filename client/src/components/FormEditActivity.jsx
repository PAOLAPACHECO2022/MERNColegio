import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../index.css'; 

const FormEditActivity = ({ activityData, setActivityData, courseId, gradeId }) => {
  const navigate = useNavigate();



  const token = useSelector((state) => state.token);
  const [area, setArea] = useState(activityData.area);
  const [indicator, setIndicator] = useState(activityData.indicator);
  const [actity, setActity] = useState(activityData.actity);
  const [statea, setStatea] = useState(activityData.statea);
  const [date, setDate] = useState(activityData.date);




  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("area", area);

    const response = await fetch(
      `http://localhost:3003/activities/${activityData._id}/edit`,
      {
        method: "PATCH",
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
          studentId: activityData.studentId,
          courseId: courseId,
          period: activityData.period,
        }),
      }
    );

    const updatedActivity = await response.json();
    setActivityData(updatedActivity);
    console.log("Activity updated");
    navigate(`/activitiesByCourse/${courseId}/${gradeId}`);
  };


  return (
  <div className="fondoy fondoy-wrap p-5">
    <div className="p-4 sm:ml-64">
      <div className="fondox p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="flex flex-row justify-between mb-4">
          <h1 className="text-3xl font-bold mb-4">Edit Activity</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Student
              </label>
              <input
                type="text"
                readOnly
                value={activityData.studentName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
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
                  placeholder="flowbite.com"
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
                rows={2} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Describes the indicator"
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
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  placeholder="Describe the Activity"
  required
  value={actity}
  onChange={(e) => setActity(e.target.value)}
  rows={2} // Define el número de filas inicial
/>

            </div>
            
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Date the Activity"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
          <div className="grid gap-6 mb-6 md:grid-cols-2">
  
          
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
  );
};

export default FormEditActivity;
