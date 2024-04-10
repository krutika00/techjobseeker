import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Config from "../../config/Config.json";
import classes from "./Register.module.css";

toast.configure();

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const success = await sendEmail();
      if (success) {
        toast.success(
          "Link has been sent to registered email for reset password!",
          { position: toast.POSITION.TOP_CENTER },
          { autoClose: 5000 }
        );
      } else {
        toast.success(
          "failed to sent email",
          { position: toast.POSITION.TOP_CENTER },
          { autoClose: 5000 }
        );
      }
    }
  };

  const validate = () => {
    let isValid = true;
    let error = {};

    if (!email) {
      isValid = false;
      error["email"] = "Please enter your email address.";
    } else {
      // Basic email validation
      const pattern = /^\S+@\S+\.\S+$/;
      if (!pattern.test(email)) {
        isValid = false;
        error["email"] = "Please enter a valid email address.";
      }
    }

    setErrors(error);
    return isValid;
  };

  const sendEmail = async () => {
    try {
      const dataSend = {
        email: email,
        subject: "Password Reset",
        message: "Your password reset link: http://192.168.0.114:3000/change-password",
      };
  
      const res = await fetch("http://localhost:8080/email/sendEmail", {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
  
      if (res.ok) {
        return true;
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertMessage("Failed to send email. Please try again later.");
      return false;
    }
  };
  return (
    <React.Fragment>
      <Header />
      <Container>
        <h1 className="text-primary mt-5 p-3 text-center rounded">
          Forgot your password
        </h1>
        <p className="text-primary mt-5 p-3 text-center rounded">
          No problem. Enter your Email here and we'll send you a link to reset
          it.
        </p>
        {alertMessage && (
          <div className="alert alert-info" role="alert">
            {alertMessage}
          </div>
        )}
        <div className="d-flex justify-content-center align-items-center">
          <Form
            className={`${classes.formContainer} ${classes.formWidth} rounded p-4 p-sm-3`}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Enter Registered Email <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p style={{ color: "red" }}> {errors.email} </p>
            </Form.Group>
            <Col className={classes.actions}>
              <Button
                onClick={handleSubmit}
                variant="success"
                className="mt-4"
              >
                Submit
              </Button>
              <Link to="/Login">
                <Button
                  variant="success"
                  className="mt-4"
                  style={{ marginLeft: "10px" }}
                >
                  Back to Login
                </Button>
              </Link>
            </Col>
          </Form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ForgotPassword;
