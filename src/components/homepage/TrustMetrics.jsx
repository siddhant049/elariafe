import React from "react";
import { motion } from "framer-motion";
import navroopPhoto from "../../assets/management/navroop.jpeg";
import akanshaPhoto from "../../assets/management/akansha.jpeg";
import kawalPhoto from "../../assets/management/kawal.jpeg";
import ourTeamPhoto from "../../assets/management/ourTeam.jpeg";

const experts = [
  {
    key: "cm",
    initials: "KB",
    name: "Kawaljit Bawa",
    photo: kawalPhoto,
    designation: "Center Head",
    experience: "15 Years of experience",
    note: "Center Manager supports clients with personalized cosmetology guidance focused on skin health, confidence, and everyday care.",
    accent: "Senior Cosmetologist",
  },
  {
    key: "doctor",
    initials: "DR",
    photo: navroopPhoto,
    name: "Dr Navroop Kaur ",
    designation: "Aesthetic Doctor",
    experience: "BAMS & Post Graduate Diploma in Dermatology",
    note: "Doctor leads the treatment planning with a refined, patient-first approach to aesthetic care.",
    accent: "Clinical Assessment And Treatment",
  },
  {
    key: "cosmetologist",
    initials: "CS",
    photo: akanshaPhoto,
    name: "Akansha Srivastava Khanna",
    designation: "Manager",
    experience: "Client experience specialist",
   
    note: "Akansha crafts a refined, effortless, and personalized experience for every client at Elaria, making each visit feel truly special.",

    accent: "Cosmetologist",
  },
];

const TrustMetrics = () => {
  return (
    <section className="relative overflow-hidden bg-[#10233f] px-6 py-16 text-white lg:py-20">
      <div className="absolute left-[8%] top-16 h-52 w-52 rounded-full bg-[rgba(214,179,132,0.14)] blur-3xl" />
      <div className="absolute bottom-10 right-[6%] h-64 w-64 rounded-full bg-[rgba(255,255,255,0.05)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "110px 110px",
      }} />

      <div className="relative mx-auto max-w-[1800px]">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <div className="flex justify-center">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#d6b384] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#d6b384]" />
              Meet Our Experts
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white md:text-4xl">
            The experts behind every calm, premium and result driven experience at Elaria
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/76">
            Meet the expert team behind your care - skilled professionals dedicated to delivering personalized, premium, and trustworthy aesthetic results.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:border-[#d6b384]/35 hover:shadow-[0_30px_80px_rgba(0,0,0,0.24)] md:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(214,179,132,0.15),rgba(214,179,132,0.9),rgba(214,179,132,0.15))]" />
              <div className="absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle_at_top_right,rgba(214,179,132,0.22),transparent_65%)] opacity-80" />
              <div className="absolute left-6 top-20 h-28 w-28 rounded-full bg-[rgba(214,179,132,0.10)] blur-2xl" />

              <div className="relative">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-[36px] border border-white/12 bg-[linear-gradient(160deg,rgba(214,179,132,0.28),rgba(255,255,255,0.1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    {expert.photo ? (
                      <img
                        src={expert.photo}
                        alt={expert.name}
                        className="h-[132px] w-[132px] rounded-[30px] border border-white/10 object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-[132px] w-[132px] items-center justify-center rounded-[30px] border border-white/10 bg-[rgba(8,18,30,0.62)] text-[1.55rem] font-medium tracking-[0.16em] text-[#d6b384]">
                        {expert.initials}
                      </div>
                    )}
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[9px] uppercase tracking-[0.24em] text-white/72">
                    {expert.designation}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[9px] uppercase tracking-[0.26em] text-[#d6b384]">
                    {expert.accent}
                  </p>
                  <h3 className="mt-2.5 text-[1.35rem] font-medium tracking-[-0.03em] text-white">
                    {expert.name}
                  </h3>
                  <p className="mt-2.5 text-sm font-medium text-white/88">
                    {expert.experience}
                  </p>
                </div>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,16,26,0.58),rgba(7,16,26,0.34))] px-4 py-4">
                  <p className="text-sm leading-6 text-white/78">{expert.note}</p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="h-[1px] flex-1 bg-[linear-gradient(90deg,rgba(214,179,132,0.7),rgba(255,255,255,0.05))]" />
                  <span className="ml-4 text-[9px] uppercase tracking-[0.24em] text-white/45">
                    Elaria Team
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-12"
        >
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <div className="flex justify-center">
              <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-[#d6b384] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#d6b384]" />
                Meet Our Team
              </p>
            </div>
           
           
          </div>

          <div className="mx-auto max-w-[980px] overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-5">
            <div className="overflow-hidden rounded-[30px]">
              <img
                src={ourTeamPhoto}
                alt="Elaria team"
                className="h-[320px] w-full object-cover object-center md:h-[420px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMetrics;
