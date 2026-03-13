import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import happyClientOne from "../../assets/videos/Happy clients/Happyclients1.mp4";
import happyClientTwo from "../../assets/videos/Happy clients/Happyclients2.mp4";
import happyClientThree from "../../assets/videos/Happy clients/Happyclients3.mp4";

const videos = [
  {
    src: happyClientOne,
    title: "Real client moments",
    description: "Visible confidence and happy post-treatment reactions.",
  },
  {
    src: happyClientTwo,
    title: "Trusted client experiences",
    description: "A closer look at real results and genuine satisfaction.",
  },
  {
    src: happyClientThree,
    title: "Happy client highlights",
    description: "More real smiles, candid reactions, and moments of confidence.",
  },
];

const HappyClientsSection = () => {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        videoRefs.current.forEach((video) => {
          if (!video) {
            return;
          }

          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#10233f] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-[#d6b384]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6b384]" />
            Happy Clients
          </div>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-white md:text-4xl">
            Happy client stories and moments of confidence.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            A quick look at genuine moments, visible joy, and the confidence
            our treatments are designed to bring out.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-[82rem] gap-8 md:grid-cols-2 xl:grid-cols-3 xl:justify-center xl:gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="w-full max-w-[410px] justify-self-center overflow-hidden rounded-[30px] border border-[#e7dccd] bg-white p-3 shadow-[0_18px_44px_rgba(17,24,39,0.08)]"
            >
              <div className="overflow-hidden rounded-[22px] bg-[#0f2037]">
                <video
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  className="aspect-[10/12] w-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>

              <div className="px-3 pb-3 pt-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a7b52]">
                  Client Story
                </p>
                <h3 className="mt-3 text-2xl font-medium text-slate-900">
                  {video.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClientsSection;
