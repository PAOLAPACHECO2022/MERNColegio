import '../index.css'; 

import {useSelector} from "react-redux";



const Dashboard = ({
  role,
  totalStudents,
  totalTeachers,
  totalGrades,
  totalCourses,
  
}) => {
 
const user = useSelector((state) => state.user);
  return (
    <div className="fondo p-5">
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        {role !== "Admin" && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className=" flex items-center justify-center h-24 rounded fondox">
              <p className="text-2xl text-center text-gray-400 dark:text-gray-500 uppercase"
               style={{
                color: ' rgb(249, 218, 47)',
                fontWeight: 'bold',
                border: '2px solid #056183',
                padding: '5px',
                borderRadius: '5px',
                display: 'inline-block',
              }}>
                Welcome {`${user.firstName} ${user.lastName}`}
              </p>
            </div>
          </div>
        )}

        {role === "Admin" && (
          <>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="fondox flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-gray-400 text-center dark:text-gray-500 uppercase"
               style={{
                color: ' rgb(249, 218, 47)',
                fontWeight: 'bold',
                border: '2px solid #056183',
                padding: '5px',
                borderRadius: '5px',
                display: 'inline-block',
              }}>
                  Welcome {`${user.firstName} ${user.lastName}`}
                </p>
              </div>
              <div className="fondox flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className=" text-gray-400 text-center dark:text-gray-500 uppercase d-flex"
                style={{
                  color: ' rgb(249, 218, 47)',
                  fontWeight: 'bold',
                  border: '2px solid #056183',
                  padding: '5px',
                  borderRadius: '5px',
                  display: 'inline-block',
                }}>
                  {`${totalStudents} ${
                  totalStudents > 1 ? "Students" : "Student"
                }`}</p>
              </div>
              <div className="fondox flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 d-flex">
                <p className="text-gray-400 text-center dark:text-gray-500 uppercase"
                style={{
                  color: ' rgb(249, 218, 47)',
                  fontWeight: 'bold',
                  border: '2px solid #056183',
                  padding: '5px',
                  borderRadius: '5px',
                  display: 'inline-block',
                }}>
                  {`${totalTeachers} ${
                  totalTeachers > 1 ? "Teachers" : "Teacher"
                }`}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="fondox flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 d-flex">
                <p className="text-gray-400 text-center  dark:text-gray-500 uppercase"
                style={{
                  color: ' rgb(249, 218, 47)',
                  fontWeight: 'bold',
                  border: '2px solid #056183',
                  padding: '5px',
                  borderRadius: '5px',
                  display: 'inline-block',
                }}>
                {`${totalGrades} ${
                  totalGrades > 1 ? "Grades" : "Grade"
                }`}</p>
              </div>
              <div className="fondox flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800 d-flex">
                <p className="text-gray-400 text-center  dark:text-gray-500 uppercase"
                style={{
                  color: ' rgb(249, 218, 47)',
                  fontWeight: 'bold',
                  border: '2px solid #056183',
                  padding: '5px',
                  borderRadius: '5px',
                  display: 'inline-block',
                }}>
                  {`${totalCourses} ${
                  totalCourses > 1 ? "Courses" : "Course"
                }`}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
