import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-200 h-full min-h-[320px]">
          <iframe
            title="Elaria Esthetique Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.911568566786!2d77.04987607545611!3d28.421925093613467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2360b5981ebd%3A0x863c8d3f8a6fe161!2sElaria%20Esthetique!5e0!3m2!1sen!2sin!4v1766164104142!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className="pointer-events-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#001b3d] mb-4 tracking-wide">
            Contact us
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our centre or reach out to us directly for appointments,
            queries, and support.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">
                Clinic address
              </h3>
              <p className="text-sm leading-relaxed">
                Elaria Esthetique
                <br />
                1st Floor, Sector 47, Malibu Town 
                <br />
                Sector 47, Gurgaon, Haryana 122002
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">Call us</h3>
              <p className="text-sm">
                Phone: <a href="tel:+919999999999">+91 92665 11393</a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">Email</h3>
              <p className="text-sm">
                <a href="mailto:care@elariaesthetique.com">
                  care@elariaesthetique.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">
                Clinic hours
              </h3>
              <p className="text-sm">
                Monday – Sunday: 11:00 AM to 7:00 PM
                <br />
                 By Prior Appointments only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
