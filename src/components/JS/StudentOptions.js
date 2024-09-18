import { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/StudentOptions.css";
import SidebarForm from "./SidebarForm";

const StudentOptions = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => setIsFormVisible(true);
  const hideForm = () => setIsFormVisible(false);

  return (
    <div className="containerManualRegStudentDetails">
      {isFormVisible && <SidebarForm onClose={hideForm} />}
      <div className="container-students">
        <div className="containerContent">
          <h1 className="studentDetails">
            Student <span className="detailsSpan">Details!</span>
          </h1>
          <div className="containerSubContent">
            <div className="containerDesc">
              <h1 className="schoolNameTitle">School Name</h1>
              <div className="containerSchoolClassSection">
                <h1 className="schoolName">Apeejay School, NOIDA</h1>
                <h1 className="classSection">Class & Section</h1>
              </div>
            </div>
            <div className="containerDisplayStudents">
              <h1 className="students">Students</h1>
              <div className="widgetStudents">
                <div className="smallWidgetName">S</div>
                <h1 className="studentName">S Chandramouli</h1>
                <button className="infoButton">Info</button>
              </div>
              <div className="widgetStudents">
                <div className="smallWidgetName">S</div>
                <h1 className="studentName">S Sitaraman</h1>
                <button className="infoButton">Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOptions;