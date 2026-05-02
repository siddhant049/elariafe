import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white px-6 py-20 lg:py-22">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <div className="min-h-[370px] overflow-hidden rounded-[30px] border border-[#eadfce] bg-gray-200 shadow-[0_18px_50px_rgba(17,24,39,0.08)] lg:min-h-[420px]">
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

        <div className="flex flex-col justify-center rounded-[30px] bg-[#f8f4ef] p-7 md:p-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
            Contact Us
          </p>
          <h2 className="mt-4 text-[2rem] font-light tracking-[-0.03em] text-[#10233f] md:text-[2.5rem]">
            Contact us
          </h2>
          <p className="mb-7 mt-3 text-[1.02rem] leading-7 text-slate-600">
            Visit our centre or reach out to us directly for appointments,
            queries, and support.
          </p>

          <div className="grid gap-4 text-slate-700 md:grid-cols-2">
            <div className="rounded-[22px] border border-[#e6dbcd] bg-white p-4 md:col-span-2 md:p-5">
              <h3 className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#9a7b52]">
                Clinic address
              </h3>
              <p className="text-sm leading-6">
                Elaria Esthetique
                <br />
                1st Floor, Malibu shopping arcade, Malibu Town 
                <br />
                Sector 47, Gurgaon, Haryana 122002
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e6dbcd] bg-white p-4 md:p-5">
              <h3 className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#9a7b52]">Call for appointments</h3>
              <p className="text-sm leading-6">
                Phone: <a href="tel:+919999999999">+91 92665 11393</a>
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e6dbcd] bg-white p-4 md:p-5">
              <h3 className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#9a7b52]">Email</h3>
              <p className="break-words text-sm leading-6">
                <a href="mailto:elariaesthetique@gmail.com">
                  elariaesthetique@gmail.com
                </a>
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e6dbcd] bg-white p-4 md:p-5">
              <h3 className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#9a7b52]">
                Clinic hours
              </h3>
              <p className="text-sm leading-6">
                Monday – Sunday: 11:00 AM to 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
