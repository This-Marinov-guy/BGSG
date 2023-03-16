import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};
function ContactForm({ props }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qe2hxvz",
        "template_vqqttji",
        e.target,
        "lRbVp83O-XLTy-jKk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input type="text" name="fullname" placeholder="Your Name" required />
      </div>

      <div className="rn-form-group">
        <input type="email" name="email" placeholder="Your Email" required />
      </div>

      <div className="rn-form-group">
        <input type="text" name="subject" placeholder="Subject" required />
      </div>

      <div className="rn-form-group">
        <textarea name="message" placeholder="Your Message" required></textarea>
      </div>

      <div className="rn-form-group">
        <button
          className="rn-button-style--2 btn-solid"
          type="submit"
          value="submit"
          name="submit"
          id="mc-embedded-subscribe"
        >
          Submit Now
        </button>
      </div>

      <div className="rn-form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
