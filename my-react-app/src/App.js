import React from 'react';
import './App.css';
// import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";
import { db } from './firebase'; 
function App() {
  const handleFormSubmit = (event) => {
    event.preventDefault();


      const problem = event.target.elements.problem.value;
      const location = event.target.elements.location.value;
      const identity = event.target.elements.identity.value;
      

    // Save data to Firestore
    db.collection('reports').add({
      problem,
      location,
      identity,
    })
    .then(() => {
      console.log('Data saved successfully!');
      // Reset form or show success message
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  };

  const handleFileUpload = () => {

    const fileInput = document.getElementById('file-upload');
    fileInput.click(); // Trigger file input click when the plus button is clicked
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // You can handle the uploaded file here
    console.log('Uploaded file:', file);
  };
  return (
    <div className="App">
      <div className="page">
        <div className="navbar">
          <div className="privateReporting">
            Private reporting
          </div>
        </div>
        <div className="main-box">
           <div className="main-box1">
           <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-label">
              Problem
            </div>
            <input
              type="text" name="problem"
              className="input-text"
              placeholder="Describe the problem..."
            />
            <div className="form-label">
              Location of Misbehave
            </div>
            <input
              type="text" name="location"
              className="input-text1"
              placeholder="Enter location..."
            />
            <div className="form-label">
              Any Identity of Person
            </div>
            <input
              type="text" name="identity"
              className="input-text1"
              placeholder="Enter identity..."
            />
            {/* <button type="submit">Submit</button> */}
            <div className="doc-container">
            <div className="doc-label form-label">
              <p>Supporting Document</p>
            </div>
            <div className="doc-image">
              {/* <div className="icon">
                  <div className='icon1'><FaPlus /></div>
              </div> */}
                <div className="icon" onClick={handleFileUpload}>
          <div className='icon1'><FaPlus /></div>
          <input
            id="file-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
            </div>
          </div>
          <div className="report-container">
            <div className="report-svg">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="43"
                viewBox="0 0 256 43"
                fill="none"
              >
                <rect width="256" height="43" rx="8" fill="#7D68FF" />
                
              </svg> */}
              
              <div className="report-text form-label butn"><button type="submit">Report</button></div>
            </div>
          </div>
            </form>
          </div>

           </div>

        </div>
        <div className="footer">
          <div className="icon">
          <div className='icon1'><GoHome /></div>
            
          </div>
          <div className="icon">
          <div className='icon1'><LuMessageCircle /></div>
          </div>
          <div className="icon">
          <div className='icon1'><FaMapMarkedAlt /></div>
          </div>
          <div className="icon">
          <div className='icon1'><IoLogoMicrosoft /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
