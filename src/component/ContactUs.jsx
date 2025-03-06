import React from "react";

const ContactUs = () => {
  return (
    <div className="container-fluid w-full max-w-full font-sans">
      <div
        className="relative h-[60vh] flex items-center justify-center text-white bg-black bg-opacity-60 bg-cover bg-center w-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundAttachment: "fixed"
        }}
      >
         <div className="absolute h-[60vh] flex items-center justify-center text-white bg-black opacity-20 bg-cover bg-center w-full"></div>
        <div className="absolute text-center px-6 md:px-12">
          <h1 className="text-[4rem] md:text-6xl  text-black">Contact Us</h1>

        </div>
      </div>
      {/*  */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-gray-800">
        <h1 className="text-3xl  mb-8 text-pink-500">Hours & Appointments</h1>

        <div className="border-t border-gray-300 pt-8">
         
          <p className="italic text-2xl mb-[70px]">Call or email to book an appointment: 555-555-5555 or [ email address ]</p>
          <p className="mt-8 mb-5 text-[0.9rem]">Monday through Wednesday 9AM–6PM</p>
          <p className="mb-5 text-[0.9rem]">Thursday through Friday 9AM–8PM</p>
          <p className="mb-5 text-[0.9rem]">Saturday 9AM–6PM</p>
        </div>

        <div className="border-t  border-gray-300 pt-8 mt-[30px]">
          <h2 className="text-2xl text-pink-500 mb-10">Visit Us</h2>
          <p className="italic text-xl mb-20 pl-5 pr-5 m-auto ">We are located at 1234 Bleacher Ave. between 4th St. and 5th St. We're looking forward to your visit!</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6 w-full h-auto">
            <img 
              src="https://lh4.googleusercontent.com/gBRdN29VcnjqpV3Y9NSexa7JSasEdARRvBnLeKIQQsPsA8VBzzjaQJdL3x3jSyEhHDTJGvK3F_1wgEdAFqS2Kc0-ahoJ6V3FnX8T-RM1mfezfjKvjAUWjZzKKizeM37t1g=w1280"
              alt="Salon Interior"
              className="rounded-lg w-full object-cover"
            />
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.888403473788!2d-74.00597318459442!3d40.7127751793306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMTIuMCJX!5e0!3m2!1sen!2sus!4v1616781073659!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ContactUs;