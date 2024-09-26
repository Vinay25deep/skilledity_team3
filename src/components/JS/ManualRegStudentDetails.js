import { useState } from "react";
import "../CSS/ManualRegStudentDetails.css";
import SidebarForm from "./SidebarForm";
import { useSelector } from 'react-redux';

const ManualStudentDetails = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const schoolName = useSelector((state) => state.auth.schoolName);
  const section = useSelector((state) => state.auth.section);
  const std_class = useSelector((state) => state.auth.std_class);
  const students = useSelector((state) => state.auth.students);
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
                <h1 className="schoolName">{schoolName}</h1>
                <h1 className="classSection">{std_class}th {section}</h1>
              </div>
            </div>
            <div className="containerDisplayStudents">
              <h1 className="students">Students</h1>
              {students.length === 0 ? (
                <p>No students have been added yet.</p>
              ) : (
                students.map((student, index) => (
                  <div key={index} className="widgetStudents">
                    <div className="smallWidgetName">{student.charAt(0)}</div>
                    <h1 className="studentName">{student}</h1>
                  </div>
                ))
              )}
            </div>
            <div className="addStudentsBtn" onClick={showForm}>
              <span className="plusIcon">+ </span> Add Student
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualStudentDetails;
