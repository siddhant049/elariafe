import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  RadarChartOutlined,
  SafetyCertificateOutlined,
  ScanOutlined,
} from "@ant-design/icons";
import skinImage from "../../assets/images/skin.jpg";

const keyMetrics = [
  { value: "15K+", label: "Consultations", icon: RadarChartOutlined },
  { value: "50+", label: "Aesthetic Treatments", icon: ScanOutlined },
  { value: "98%", label: "Client Satisfaction", icon: SafetyCertificateOutlined },
];

const featureTags = [
  "Personalized skin and hair care",
  "Luxury clinic experience",
];

const HeroSection = ({ onBookAppointment }) => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const scrollToTreatments = () => {
    const section = document.getElementById("treatments-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dynamicStyles = useMemo(
    () => ({
      background: {
        transform: `scale(1.05) translate(${pointer.x * 10}px, ${pointer.y * 10}px)`,
      },
      visualCard: {
        transform: `translate(${pointer.x * -10}px, ${pointer.y * -10}px)`,
      },
      accentCard: {
        transform: `translate(${pointer.x * 8}px, ${pointer.y * 8}px)`,
      },
    }),
    [pointer]
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07101a]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
        setPointer({ x, y });
      }}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${skinImage})`,
          filter: "blur(18px) brightness(0.22) saturate(0.75)",
          ...dynamicStyles.background,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(4,9,17,0.96),rgba(8,18,30,0.9),rgba(8,18,30,0.76))]" />
      <div
        className="absolute inset-0 opacity-25"
          style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />
      <div className="absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-[rgba(214,179,132,0.14)] blur-3xl" />
      <div className="absolute bottom-[12%] right-[8%] h-72 w-72 rounded-full bg-[rgba(21,48,78,0.4)] blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center px-6 pb-12 pt-[148px] lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#d6b384]" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-white/80">
                Wellness And Aesthetic Care
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-light leading-[0.9] tracking-[-0.065em] text-white md:text-7xl xl:text-[6.1rem]">
              Feel Beautiful.
              <span className="block text-[#d6b384]">Be Elaria.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white md:text-[1.14rem]">
              Discover expert-led skin, hair and wellness-focused aesthetic care
              in a calming clinic environment designed around refined results,
              comfort and confidence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d6b384] px-8 py-4 text-sm font-medium tracking-[0.18em] text-[#0b1727] transition hover:bg-[#c9a26f]"
              >
                <CalendarOutlined />
                BOOK CONSULTATION
              </button>

              <button
                type="button"
                onClick={scrollToTreatments}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium tracking-[0.18em] text-white transition hover:border-[#d6b384] hover:text-[#d6b384]"
              >
                EXPLORE TREATMENTS
                <ArrowRightOutlined />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {featureTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              {keyMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                    className="rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-5 py-5 backdrop-blur-xl"
                  >
                    <Icon className="text-base text-[#d6b384]" />
                    <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-white/60">
                      {metric.label}
                    </p>
              </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative"
            style={dynamicStyles.visualCard}
          >
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(9,19,33,0.88)]">
                <div className="absolute inset-0">
                  <img
                    src={skinImage}
                    alt="Elaria premium treatment experience"
                    className="h-full w-full object-cover opacity-28"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,17,30,0.3),rgba(8,17,30,0.82))]" />
                </div>

                <motion.div
                  animate={{ y: ["-8%", "92%"] }}
                  transition={{ duration: 4.8, repeat: Infinity, repeatType: "loop", ease: "linear" }}
                  className="pointer-events-none absolute left-6 right-6 top-0 h-20 bg-[linear-gradient(180deg,rgba(214,179,132,0),rgba(214,179,132,0.28),rgba(214,179,132,0))] blur-xl"
                />

                <div className="relative p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.34em] text-[#d6b384]">
                        Signature Care Journey
                      </p>
                      <h2 className="mt-3 text-2xl font-light text-white md:text-[2rem]">
                        Personalized Aesthetic Planning
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.26em] text-white/80">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.72)]" />
                      Live
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                        Consultation First
                      </p>
                      <p className="mt-4 text-3xl font-semibold text-white">01</p>
                      <p className="mt-3 text-sm leading-6 text-white/80">
                        Every journey begins with understanding your concerns,
                        lifestyle and goals before suggesting the right treatment.
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-[rgba(214,179,132,0.2)] bg-[linear-gradient(135deg,rgba(214,179,132,0.12),rgba(255,255,255,0.05))] p-5 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#d6b384]">
                        Tailored Results
                      </p>
                      <p className="mt-4 text-3xl font-semibold text-white">02</p>
                      <p className="mt-3 text-sm leading-6 text-white/80">
                        From skin rejuvenation to hair restoration, treatments
                        are selected to suit you naturally and precisely.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[24px] border border-white/10 bg-[rgba(7,16,26,0.7)] p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                        Care Philosophy
                      </p>
                      <p className="text-sm font-medium text-white">98% Satisfaction</p>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="h-full rounded-full bg-[linear-gradient(90deg,#d6b384,#f1dfc4)]"
                      />
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
                      Thoughtful consultations, advanced aesthetic solutions and
                      a warm premium experience come together to help you look
                      refreshed, confident and naturally radiant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={dynamicStyles.accentCard}
              className="absolute -right-3 top-10 hidden rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] px-5 py-4 backdrop-blur-xl lg:block"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d6b384]">
                Elaria Experience
              </p>
              <p className="mt-3 text-xl font-medium text-white">Calm. Refined. Personal.</p>
              <p className="mt-2 text-sm text-white/70">Designed to feel like a modern premium aesthetics clinic.</p>
            </motion.div>
          </motion.div>
        </div>
          </div>
    </section>
  );
};

export default HeroSection;
