import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div className='container'>
      <h1>Contact Us Page</h1>
      <div className="button-group">
        <button onClick={() => navigate('/contact/info')} className="btn btn-info">
          Contact Info
        </button>
        <button onClick={() => navigate('/contact/form')} className="btn btn-form">
          Contact Form
        </button>
      </div>
    </div>
  );
};

export default Contact;