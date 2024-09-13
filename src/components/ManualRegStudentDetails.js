import { Link } from "react-router-dom";
import "./ManualRegStudentDetails.css";

const ManualStudentDetails = () => {
  return (
    <div className="container">
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
            </div>
          </div>
          <Link to="/">
            <div className="addStudentsBtn">
              <span className="plusIcon">+ </span> Add Student
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManualStudentDetails;
