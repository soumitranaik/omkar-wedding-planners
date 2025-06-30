import { label } from "motion/react-client";
import { useState, useEffect } from "react";

export const ContactModal = ({ isOpen, onClose }) => {
  const Services = [
    {
      id: "decoration",
      label: "Wedding Decoration",
    },
    {
      id: "Catering",
      label: "Catering",
    },
    {
      id: "Photography-Videography",
      label: "Photography & Videography",
    },
    {
      id: "Haldi-Menendi",
      label: "Haldi & Mehndi",
    },
     {
      id: "Pyro-Fireworks",
      label: "Pyro & Fireworks",
    },
     {
      id: "Large Screen Display",
      label: "Large Screen Display",
    },
    {
      id: "Floral & Decoration",
      label: "Floral & Decoration",
    },
     {
      id: "Corporate Event",
      label: "Corporate Event",
    },
     {
      id: "Sports Event",
      label: "Sports Event",
    },
     {
      id: "Complete Event",
      label: "Complete Event",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    phone: "",
    address: "",
    services: "",
    additional: "",
  });

  // Load JotForm script when modal opens
  useEffect(() => {
    if (isOpen) {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="jotfor.ms"]');
      if (existingScript) return;

      const script = document.createElement('script');
      script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
      script.async = true;
      
      script.onload = () => {
        if (window.jotformEmbedHandler) {
          window.jotformEmbedHandler(
            "iframe[id='JotFormIFrame-251804894180057']", 
            "https://form.jotform.com/"
          );
        }
      };

      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    onClose(); // Close modal after submit
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        {/* Modal Container - Made larger for iframe */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-semibold text-red-800">
              Book your Services
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body - JotForm Iframe */}
          <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
            <iframe
              id="JotFormIFrame-251804894180057"
              title="Book Your Services"
              onLoad={() => window.parent.scrollTo(0, 0)}
              allowTransparency="true"
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/251804894180057"
              frameBorder="0"
              style={{
                minWidth: '100%',
                width: '100%',
                height: '600px',
                border: 'none'
              }}
              scrolling="no"
            />
          </div>

          {/* Original Form (Commented out but keeping for reference) */}
          {/* <div className="p-6">
            <form method="POST" name="contact" data-netlify="true" className="space-y-4">
              <div>
                <input type="hidden" name="form-name" value="contact" />  
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="venue"
                  className="block text-md font-medium text-gray-700 mb-1"
                >
                  Venue
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-md font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  id="phone"
                  placeholder="9888888888"
                  inputMode="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  required
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Services
                </label>
                <div className="grid grid-cols-2  ">
                {Services.map((service) => (
                  <div key={service.id} className="flex gap-1 items-start float-right">
                    <input
                      type="checkbox"
                      id="services"
                      name="services[]"
                      value={service.id}
                      onChange={handleChange}
                      className="px-4 py-2 border border-gray-300 accent-red-800 rounded-md focus:outline-none "
                    
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={service.id}>{service.label}</label>
                  </div>
                ))}
                </div>
              </div>

                 <div>
                <label
                  htmlFor="address"
                  className="block text-md font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="additional"
                  className="block text-md font-medium text-gray-700 mb-1"
                >
                  Additional Services
                </label>
                <textarea
                  id="additional"
                  name="additional"
                  rows="2"
                  value={formData.additional}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div> */}
          
        </div>
      </div>
    </>
  );
};