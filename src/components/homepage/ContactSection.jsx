import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="min-h-[420px] overflow-hidden rounded-[32px] border border-[#eadfce] bg-gray-200 shadow-[0_18px_50px_rgba(17,24,39,0.08)]">
          <iframe
            title="Elaria Esthetique Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.911568566786!2d77.04987607545611!3d28.421925093613467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2360b5981ebd%3A0x863c8d3f8a6fe161!2sElaria%20Esthetique!5e0!3m2!1sen!2sin!4v1766164104142!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center rounded-[32px] bg-[#f8f4ef] p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
            Contact Us
          </p>
          <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] text-[#10233f] md:text-5xl">
            Contact us
          </h2>
          <p className="mb-8 mt-4 text-lg leading-8 text-slate-600">
            Visit our centre or reach out to us directly for appointments,
            queries, and support.
          </p>

          <div className="space-y-5 text-slate-700">
            <div className="rounded-[24px] border border-[#e6dbcd] bg-white p-5">
              <h3 className="mb-2 text-[11px] uppercase tracking-[0.32em] text-[#9a7b52]">
                Clinic address
              </h3>
              <p className="text-sm leading-7">
                Elaria Esthetique
                <br />
                1st Floor, Sector 47, Malibu Town 
                <br />
                Sector 47, Gurgaon, Haryana 122002
              </p>
            </div>

            <div className="rounded-[24px] border border-[#e6dbcd] bg-white p-5">
              <h3 className="mb-2 text-[11px] uppercase tracking-[0.32em] text-[#9a7b52]">Call us</h3>
              <p className="text-sm leading-7">
                Phone: <a href="tel:+919999999999">+91 92665 11393</a>
              </p>
            </div>

            <div className="rounded-[24px] border border-[#e6dbcd] bg-white p-5">
              <h3 className="mb-2 text-[11px] uppercase tracking-[0.32em] text-[#9a7b52]">Email</h3>
              <p className="text-sm leading-7">
                <a href="mailto:care@elariaesthetique.com">
                  care@elariaesthetique.com
                </a>
              </p>
            </div>

            <div className="rounded-[24px] border border-[#e6dbcd] bg-white p-5">
              <h3 className="mb-2 text-[11px] uppercase tracking-[0.32em] text-[#9a7b52]">
                Clinic hours
              </h3>
              <p className="text-sm leading-7">
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
