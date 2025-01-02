import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData); // Form data is valid, proceed with submission
      console.log('Successfully submiiteed');
    } else {
      setErrors(validationErrors); // Set the errors to display them
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validateForm = (data) => {
    const errors = {};
    
    if (!data.firstname) {
      errors.firstname = "First Name is Required";
    }
    if (!data.email) {
      errors.email = "Email is Required";
    }
    // Add other validation checks as needed

    return errors;
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='firstname'
          placeholder='First Name' 
          onChange={handleChange} 
          value={formData.firstname}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
        <br/>
        <input 
          type='email' 
          name='email'
          placeholder='Email' 
          onChange={handleChange} 
          value={formData.email}
        />
        {errors.email && <p>{errors.email}</p>}
        <br/>
        <textarea 
          name='message' 
          placeholder='Message' 
          onChange={handleChange} 
          value={formData.message || ''}
        ></textarea>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm;
