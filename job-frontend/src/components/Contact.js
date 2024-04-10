import React from "react";
import { Navbar } from "react-bootstrap";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Header from "../login/Components/Header";
const Contact = () => {
  return (
  
   
      <div className="row contactus ">
       
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
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about jobportal feel free to call anytime we 24X7
        avilabel
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@jobportal.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
     
     
   
  );
};

export default Contact;
