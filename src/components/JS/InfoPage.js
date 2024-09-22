import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../CSS/InfoPage.css';

function InfoPage(){
    const navigate = useNavigate();
    return(
        <div className="info-page-container">
    <div className="student-info-card">
        <div className="student-avatar">
            <img src="#" alt="" className="prof-img"/>
            <h3>S Chandramouli</h3>
        </div>
        <div className="student-details-1">
            <p><span className='blue-bold'>Admission Number:</span> XXXXXXXXXX</p>
            <p><span className='blue-bold'>Email:</span> Chandramouli@example.com</p>
            <p><span className='blue-bold'>DOB:</span> dd/mm/yy</p>
        </div>
        <div className="student-details-2">
            <p><span className='blue-bold'>Phone Number:</span> +91XXXXXXXXXX</p>
            <p><span className='blue-bold'>School:</span> Apeejay School, NOIDA</p>
            <p><span className='blue-bold'>Class & Section:</span> 6-A</p>
        </div>
    </div>

    <div className="cards-container">
        
    <div className="performance-card">
    <div className="perf-header">
        <h3 className="perf-title">Performance</h3>
    </div>
    <div className="perf-content">
        <div className="performance-graph"></div>
        <div className='perf-data'>
            <p><span className='blue-bold'>Total Marks</span><br/>120</p>
            <p><span className='blue-bold'>Total Marks Scored</span><br/>100</p>
            <p><span className='blue-bold'>Performance</span><br/>Excellent</p>
        </div>
    </div>
</div>

        <div className="attendance-card">
            <div className="attendance-title">Attendance</div>
            <div className="attendance-graph">
                <div className="course-progress">
                    <div className="progress-circle"></div>
                    <p>Course 1</p>
                </div>
                <div className="course-progress">
                    <div className="progress-circle"></div>
                    <p>Technical Course 1</p>
                </div>
            </div>
        </div>
    </div>
    <button className="go-back-btn" onClick={() => navigate(-1)}>
        Go back
      </button>
</div>

    );

}

export default InfoPage;