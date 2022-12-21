import React from 'react';

import { StyleContact } from "./Components/Styles/Contact.styled";

const Contact = () => {
  return (
    <StyleContact>
      <div className="form-table">
        <h1>Contact Us</h1>
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xeqdkyow"
              method="POST"
              className="contact-inputs">
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="Enter you message"></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <h1>Our Location</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7066.390540764973!2d85.37558000000001!3d27.680359000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1665144715373!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="myFrame"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </StyleContact>
  )
}

export default Contact