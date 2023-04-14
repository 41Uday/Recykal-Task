import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import * as Yup from "yup";

import "./index.css";

const initialValues = {
  fullName: "",
  compName: "",
  emailId: "",
  mobNo: "",
  clientType: "",
  servReq: "",
  queries: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z]{3,}$/, "Only alphabets accepted")
    .required("Name is required"),
  compName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabets accepted")
    .required("Company name is required"),
  emailId: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number required"),
  clientType: Yup.string().required("Please select an option"),
  servReq: Yup.string().required("Please select an option"),
  queries: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://192.168.1.85:8095/addContact", values)
      .then((res) => {
        console.log(res);
        console.log(res.status);
        if (res.status === 200) {
          toast.success("Successfully sent your query", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((res) => {
        toast.error("Number/email already exists", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });

    console.log(values);
    resetForm();
  };

  const toastMethod = () => (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );

  return (
    <div className="cf-container">
      <h1 className="cf-head-1">Contact Us</h1>
      <p className="cf-para-1">
        If you wish to reach out to us, please fill in your details. <br />
        Our team will get back to you soon{" "}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-container">
          <div className="input-container">
            <Field
              type="text"
              className="input-1"
              placeholder="Full Name"
              name="fullName"
            />
            <div className="error">
              <ErrorMessage name="fullName" />
            </div>
          </div>
          <div className="input-container">
            <Field
              type="text"
              className="input-1"
              placeholder="Company Name"
              name="compName"
            />

            <div className="error">
              <ErrorMessage name="compName" />
            </div>
          </div>
          <div className="input-container">
            <Field
              type="email"
              className="input-1"
              placeholder="Email Id"
              name="emailId"
            />
            <div className="error">
              <ErrorMessage name="emailId" />
            </div>
          </div>
          <div className="input-container">
            <Field
              type="tel"
              className="input-1"
              placeholder="Mobile Number"
              name="mobNo"
            />
            <div className="error">
              <ErrorMessage name="mobNo" />
            </div>
          </div>
          <div className="input-container input-container-dropdown">
            <Field
              as="select"
              className="cf-select-container-2"
              name="clientType"
            >
              <option>I am...</option>
              <option>Seller</option>
              <option>Buyer</option>
              <option>Producers, Importers, and Brand Owners</option>
              <option>ULB</option>
              <option>PCB/PCC</option>
              <option>Others</option>
            </Field>
            <div className="error">
              <ErrorMessage name="clientType" />
            </div>
          </div>

          <div className="input-container">
            <Field as="select" className="cf-select-container-2" name="servReq">
              <option>I need help with?</option>
              <option>EPR</option>
              <option>Buy/Sell Recyclables</option>
              <option>Digitising Waste Center</option>
              <option>Careers</option>
              <option>Others</option>
            </Field>
            <div className="error">
              <ErrorMessage name="servReq" />
            </div>
          </div>
          <div className="cf-ta-container">
            <Field
              as="textarea"
              className="textarea-container"
              placeholder="Message / Questions"
              name="queries"
            />
            <div className="error">
              <ErrorMessage name="queries" />
            </div>
          </div>
          <button className="cf-button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      {toastMethod()}
    </div>
  );
};

export default ContactForm;
