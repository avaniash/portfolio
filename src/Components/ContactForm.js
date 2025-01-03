import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form successfully submitted!");
      setFormData({ firstname: "", lastname: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstname.trim()) {
      errors.firstname = "First name is required.";
    }

    if (!data.lastname.trim()) {
      errors.lastname = "Last name is required.";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      errors.email = "Invalid email address.";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required.";
    }

    return errors;
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
            className={`form-input ${errors.firstname ? "error" : ""}`}
          />
          {errors.firstname && <span className="error-text">{errors.firstname}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
            className={`form-input ${errors.lastname ? "error" : ""}`}
          />
          {errors.lastname && <span className="error-text">{errors.lastname}</span>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className={`form-input ${errors.email ? "error" : ""}`}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            className={`form-textarea ${errors.message ? "error" : ""}`}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
