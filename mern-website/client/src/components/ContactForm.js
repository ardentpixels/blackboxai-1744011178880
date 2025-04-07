import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">
          <FaPaperPlane /> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;