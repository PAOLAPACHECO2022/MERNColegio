import { useNavigate } from "react-router-dom";
import '../index.css'; 
import Card from 'react-bootstrap/Card';

const CardCourseA = ({ courseId, courseName, teacherName, gradeId }) => {
  const navigate = useNavigate();

  return (
    <>
     
      <Card border="primary"     
      className="fondox max-w-sm rounded overflow-hidden shadow-lg m-5 px-4 py-4"
      key={courseId}
      role="button"
      onClick={() => navigate(`/activitiesByCourse/${courseId}/${gradeId}`)}
      >
        <Card.Header>Activities</Card.Header>
        <Card.Body>
          <Card.Title className="font-bold text-xl mb-2">{courseName}</Card.Title>
          <Card.Text className="text-gray-700 text-base">
            Teacher: {teacherName}
           
          </Card.Text>
        </Card.Body>
      </Card>
      <br />


    
    </>
  );




};

export default CardCourseA;