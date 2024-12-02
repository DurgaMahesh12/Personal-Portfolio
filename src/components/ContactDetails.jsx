import React, { useState } from "react";
import { Element } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lnp8ks9", 
        "template_mv6fnuc", 
        formData, 
        "ojkADX8bTijO0v3GC" 
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <>
      <Element name="contact" className="bg-gray-900 text-gray-400 body-font relative" spy={true}>
        <section className="py-24 px-5">
          <div className="container mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl title-font mb-4 text-cyan-500 text-3xl md:text-4xl font-bold">
                Contact Me
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                Feel free to reach out to me through this form.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-xl text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-xl text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-xl text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {successMessage && (
                <div className="mt-4 text-center text-white">
                  <p>{successMessage}</p>
                </div>
              )}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a href="mailto:durgamaheshvanum123@gmail.com" className="text-purple-400">
                  durgamaheshvanum123@gmail.com
                </a>
                <p className="leading-normal my-5 text-white">
                  Durga Mahesh, 3-99.
                  <br />
                  Kalavacherla, Konaeema, Andhra Pradesh <b>Pin: 533232</b>
                </p>
                <span className="inline-flex">
                  <a
                    href="https://github.com/DurgaMahesh12/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/durgamahesh-vanum/"
                    className="ml-4 text-gray-500 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </Element>
    </>
  );
};

export default ContactDetails;
