import React from 'react'
import { useState } from 'react';
import cont from '../assets/img/contact.png'

const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  
    return (
      <section className="contact-form" id='contact'>
        <div className='cnt-img'>
            <img src={cont} alt="" />
        </div>

        <div className='contact-box'>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-name">
                    <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-name">
                    <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                <button type="submit"><span>Send</span></button>
            </form>
        </div> 
      </section>
    );
  };
  
  export default ContactForm;