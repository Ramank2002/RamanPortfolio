//components
import Circles from "/components/Circles";
//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [inputvalue, setInputvalue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(inputvalue);

  const getValue = (e) => {
    const { name, value } = e.target;
    setInputvalue((prevInputValue) => {
      return {
        ...prevInputValue,
        [name]: value,
      };
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = inputvalue;
    if (name == "") {
      toast.error("Name is required");
    } else if (email == "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid Email");
    } else if (subject == "") {
    } else {
      try {
        const res = await fetch("http://localhost:6002/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          if (data.status == 201) {
            toast.success("Your response has been submitted");
            setInputvalue({
              ...inputvalue,
              name,
              email,
              subject,
              message,
            });
          }
          toast.success("Email sent successfully ");
        } else {
          toast.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Error sending email");
      }
    }
  };
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12">
            Let's <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* input group */}
            <div className="flex gap-x-6">
              <input
                name="name"
                type="text"
                required="true"
                placeholder="name"
                className="input"
                value={inputvalue.name}
                onChange={getValue}
              />
              <input
                name="email"
                type="email"
                // unique="true"
                className="input text-transform: lowercase"
                placeholder="Email"
                value={inputvalue.email}
                onChange={getValue}
              />
            </div>
            <input
              name="subject"
              type="text "
              placeholder="subject"
              className="input"
              value={inputvalue.subject}
              onChange={getValue}
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea text-transform: lowercase"
              value={inputvalue.message}
              onChange={getValue}
            ></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              onClick={sendEmail}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk{" "}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
