import React from "react";
import Header from "../login/Components/Header";
import { Navbar } from "react-bootstrap";

const About = () => {
  return (
    <div>
    
    <Navbar.Brand className=" text-primary font-italic " href="/login">
            {/* <i className="bi bi-search"></i> */}
            <span className="d-flex">
              <i
                className="bi bi-search"
                style={{ fontSize: "1.75rem", margin: "0px 6px" }}
              ></i>
              <h1>JOB PORTAL </h1>
            </span>
          </Navbar.Brand>
    
    
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p color="primary" className=" text-dark font-italic">
           
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          A job portal is an online place where various companies post  
              their job vacancies so that the associated users can apply for them. 
              These portals are very useful for job seekers and help them to choose jobs of their convictions.
         </p>
        </div>
      </div>
      </div>
     
   
  );
};

export default About;
