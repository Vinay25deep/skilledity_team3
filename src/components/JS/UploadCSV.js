import React,{useState} from 'react';
import axios from 'axios';
import '../CSS/UploadCSV.css';

function UploadCSV()
{
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
    
      const handleFileUpload = async () => {
        if (!file) {
          setUploadStatus('Please select a CSV file first.');
          return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await axios.post('http://ec2-52-66-8-80.ap-south-1.compute.amazonaws.com:3000/school/upload-csv', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response)
          // Handle success response
          if (response.data && response.data.success) {
            setUploadStatus('File uploaded successfully!');
          } else {
            setUploadStatus(response.data.message || 'Failed to upload file. Try uploading again.');
          }
        } catch (error) {
          // Handle error from backend
          setUploadStatus('Error uploading file. Please try again later.');
        }
      };


    return (
        <div className="upload-csv-container">
            <div className='csv-header'>
                <h1>Register <span>student!</span></h1>
                <p>Register your students by uploading a CSV file.</p>
            </div>
            <div className='upload-content'>
                <p id='p1'>Upload CSV </p>
                <div className="upload-box">
                    <input type="file" id="file-upload" accept=".csv" onChange={handleFileChange} hidden/>
                    <label htmlFor="file-upload" className="file-upload-label">
                      {file ? (<p>{file.name}</p>) : (
                        <>
                            <img src='./SVGs/Frame 75.svg'className='upload-image' alt=''></img>
                          <p id='p2'>Select a CSV file to upload</p>
                          <p id='p3'>Drag or drop your file here</p>
                        </>
                        )}
                        </label>
                </div>
            <div className='btn-container'>
              <button className='btn-upload' onClick={handleFileUpload}>Upload</button>
            </div>  
          {uploadStatus && <p className="upload-status">{uploadStatus}</p>} {/* Status message */}
        </div>
      </div>
      );

}

export default UploadCSV;