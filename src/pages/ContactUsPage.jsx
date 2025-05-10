import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800">Contact Soham Dave</h1>
      <p className="mt-4 text-gray-600 text-center">
        Thank you for visiting E-Mall! If you have any questions, feedback, or would like to get in touch, feel free to reach out using the contact details below.
      </p>

      <div className="mt-6 space-y-6">
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-gray-800">📧 Email:</span>
          <a href="mailto:davesohamm@gmail.com" className="text-blue-600 hover:underline">davesohamm@gmail.com</a>
        </div>

        <div className="flex items-center space-x-3">
          <span className="font-semibold text-gray-800">💻 GitHub:</span>
          <a href="https://github.com/davesohamm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">davesohamm</a>
        </div>

        <div className="flex items-center space-x-3">
          <span className="font-semibold text-gray-800">✍️ Medium:</span>
          <a href="https://medium.com/@davesohamm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">davesohamm</a>
        </div>

        <div className="flex items-center space-x-3">
          <span className="font-semibold text-gray-800">🔗 LinkedIn:</span>
          <a href="https://in.linkedin.com/in/davesohamm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">davesohamm</a>
        </div>

        <div className="flex items-center space-x-3">
          <span className="font-semibold text-gray-800">🌐 Live Demo:</span>
          <a href="https://e-mall-live.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">E-Mall Live Demo</a>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-600">
        Looking forward to hearing from you! 😊
      </p>
    </div>
  );
};

export default ContactUsPage;
