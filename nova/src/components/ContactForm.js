import React, { useState } from "react";
import { Grid } from "@mui/material";
import monkey from "../images/monkey.svg"
import Input from '@mui/material/Input';
// or


const FORM_ENDPOINT = "https://public.herotofu.com/v1/f639fea0-1962-11ef-90b8-b52fc5a15495"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <form
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
              className="text-left"
            >
              <p className=" " style={{color:"#2d1c14", fontSize:"50px", paddingBottom:"30px" }}>Contact</p>
              <p className=" " style={{color:"#2d1c14", fontSize:"25px", }}>Contact us to see if we can start working together!</p>
              <a href="mailto:dylan@cocoahaven.com" type="email" style={{marginBottom:"30px", color:"#8b91fa", fontSize:"25px"}} >dylan@cocoahaven.com</a>
              <p   style={{marginBottom:"30px", marginTop:"10px", fontSize:"25px", color:"#2d1c14"}} >(808)-725-8227</p>
              <div className="mb-3 pt-0" style={{paddingTop:"100px"}}>
                <Input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  style={{ backgroundColor:"#ffe0d1"}}
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  style={{ backgroundColor:"#ffe0d1"}}
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <div className="mb-3 pt-0">
                <textarea
                  placeholder="Your message"
                  name="message"
                  style={{ backgroundColor:"#ffe0d1"}}
                  className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                  rows="5"
                  cols="50"
                />
              </div>
              <div className="mb-3 pt-0">
                <button
                style={{ backgroundColor:"#8b91fa"}}
                  className=" text-blue active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Send a message
                </button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Replace the placeholder with your image */}
            <img
              src={monkey}
              style={{ width: "600px", height: "700px",objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ContactForm;
