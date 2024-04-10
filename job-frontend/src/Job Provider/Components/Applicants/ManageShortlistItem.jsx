import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./ApplicantItem.module.css";
import Config from "../../../config/Config.json";

const ShortlistItem = ({ setAction, applicantItem, token }) => {
  const [emailMessage, setEmailMessage] = useState("");

  const applicantItemId = applicantItem._id;

  const viewResumeHandler = () => {
    axios
      .get(`${Config.SERVER_URL}provider/applicants/view-resume/${applicantItemId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
        responseType: "blob",
      })
      .then((res) => {
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileUrl = URL.createObjectURL(file);
        window.open(fileUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const baseUrl = "http://localhost:8080";

  const sendEmail = async () => {
    try {
      let dataSend = {
        email: applicantItem.userId.email,
        subject: "Your Application is Shortlist",
        message: message,
      };
  
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
  
     
      // Check if the email was sent successfully
      if (res.status >= 200 && res.status < 300) {
        // Display success alert
        // toast.success(
        //   "Link has been sent to registered email!",
        //   { position: toast.POSITION.TOP_CENTER },
        //   { autoClose: 5000 }
        // )
        window.alert("Email sent successfully!");
        // Reload the page
        window.location.reload();
      } else {
        // Display error alert if sending email failed
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };
  return (
    <tr className={classes.row}>
      <td>{applicantItem.userId.name}</td>
      <td>{applicantItem.userId.email}</td>
      <td>
        <button className={classes.button} onClick={viewResumeHandler}>
          View Resume
        </button>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter message "
          
          onChange={(e) => setMessage(e.target.value)}
          
        />
        </td>
        <td>
        <button className={classes.button}  onClick={() => sendEmail()}>
       
          Send Email
        </button>
      </td>
    </tr>
  );
};

export default ShortlistItem;
