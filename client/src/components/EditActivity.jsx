import Sidebar from "./Sidebar";
import Aside from "./Aside";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FormEditActivity from "./FormEditActivity";

const EditActivity = () => {
    const token = useSelector((state) => state.token);
    const {courseId, gradeId, activityId} = useParams();
    const [activityData, setActivityData] = useState(null);

    const getActivity = async () => {
        const response = await fetch(`http://localhost:3003/activities/${activityId}/activity`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
        });
        const data = await response.json();
        setActivityData(data);
    };

    useEffect(() => {
        getActivity();
    }, []); // eslint-disable-line

    if (!activityData) return null;

    return(
        <>
            <Sidebar />
            <Aside />
            <FormEditActivity activityData={activityData} setActivityData={setActivityData} courseId={courseId} gradeId={gradeId} />
        </>
    )
};

export default EditActivity;