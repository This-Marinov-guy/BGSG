import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ImageFb from "../ui/ImageFb";

const ContactTwo = () => {
  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">Contact us directly</h2>
            </div>
            <div className="form-wrapper">
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <ImageFb
                style={{ borderRadius: "50%" }}
                src="/assets/images/about/contact.webp"
                fallback="/assets/images/about/contact.jpg"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactTwo;
