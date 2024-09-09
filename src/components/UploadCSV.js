import React,{useState} from 'react';
import './UploadCSV.css';

function UploadCSV()
{
    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
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
          <button className='btn-upload'>Upload</button>
          </div>        
        </div>
        </div>
      );

}

export default UploadCSV;