import React from "react";
import ContactForm from "@/components/conatctform";

const Contact = () => {
  return (
    <>
      <section className="contact text-white">
        <h2 className="text-center font-bold text-2xl mt-5 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions, suggestions, or feedback, we&apos;d love to
          hear from you. Reach out to us using the contact form below.
        </p>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
