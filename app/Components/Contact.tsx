import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">
          Have questions or want to place an order? Reach out to us!
        </p>
        <form className="mt-8 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your message"
            className="w-full p-4 mb-4 border border-gray-300 rounded-lg"
            // rows="5"
          />
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
