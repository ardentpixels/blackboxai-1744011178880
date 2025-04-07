import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <ContactForm onSuccess={() => setSubmitted(true)} />
          )}
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <Map />
            <div className="mt-4 space-y-2">
              <p><strong>Address:</strong> 123 Business Street, City, Country</p>
              <p><strong>Email:</strong> contact@company.com</p>
              <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;