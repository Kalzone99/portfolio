import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwppwljb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          How to Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-5">
              Let&apos;s Talk
            </h3>
            <p>I am looking for an internship or entry-level development job</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:kselvais99@gmail.com" className="hover:underline">
                kselvais99@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaGithub className="inline-block text-green-400 mr-2" />
              <a
                href="https://github.com/Kalzone99"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/Kalzone99
              </a>
            </div>
            <div className="mb-4">
              <FaLinkedin className="inline-block text-green-400 mr-2" />
              <a
                href="https://www.linkedin.com/in/kevin-selvais"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                https://www.linkedin.com/in/kevin-selvais
              </a>
            </div>
            <div className="mb-4">
              <FaMapMarkerAlt className="inline-block text-green-400 mr-2" />
              <span>Brussels, Belgium</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-500 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-500 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-500 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-10 py-2 rounded-full ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
