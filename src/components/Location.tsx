import React from "react";

export const Location = () => {
  return (
    <div
      className=" rounded-md flex flex-col antialiased bg-white-50 items-center justify-center relative overflow-hidden"
      id="location"
    >
      {/* <h3 className="text-center text-neutral-800 text-4xl font-bold py-4">
        Our Location
      </h3>
      <p className="text-neutral-600 pb-8">
        Visit us to begin planning your perfect day{" "}
      </p> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.2422953242108!2d73.99393069999999!3d15.145032500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe4d74524c061f%3A0x6b3e4094f2c76f2!2sOmkar%20Events%20and%20Wedding%20Planners!5e0!3m2!1sen!2sin!4v1747289430325!5m2!1sen!2sin"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
