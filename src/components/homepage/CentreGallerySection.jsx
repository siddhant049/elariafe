import React from "react";
import { motion } from "framer-motion";
import ayurvedaImage from "../../assets/images/Center/Ayurveda.png";
import doctorRoomImage from "../../assets/images/Center/DoctorRoom.png";
import receptionImage from "../../assets/images/Center/Reception .png";
import waitingAreaImage from "../../assets/images/Center/waitingArea.png";

const portraitGalleryImages = [
  {
    src: receptionImage,
    title: "Elegant reception experience",
    description: "A welcoming first impression with a calm, refined atmosphere.",
    label: "Arrival",
    objectPosition: "center top",
  },
  {
    src: ayurvedaImage,
    title: "Thoughtful clinical detailing",
    description: "Luxury aesthetics balanced with trust, hygiene and modern technology.",
    label: "Wellness",
    objectPosition: "center center",
  },
  {
    src: doctorRoomImage,
    title: "Private consultation rooms",
    description: "Spaces designed for personal conversations and treatment planning.",
    label: "Consultation",
    objectPosition: "center center",
  },
  {
    src: waitingAreaImage,
    title: "Comfortable waiting area",
    description: "A calm, polished space designed to make every visit feel relaxed.",
    label: "Waiting Area",
    objectPosition: "center center",
  },
];

const CentreGallerySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f4ef] px-6 py-24 lg:py-28">
      <div className="absolute left-[-8%] top-20 h-64 w-64 rounded-full bg-[#e7d2b7]/40 blur-3xl" />
      <div className="absolute bottom-10 right-[-6%] h-72 w-72 rounded-full bg-[#d8e0ea]/55 blur-3xl" />

      <div className="relative mx-auto max-w-[118rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
            Inside Elaria
          </p>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-slate-900 md:text-4xl">
            A glimpse into the calm, elegant spaces where your treatment journey
            begins.
          </h2>
        </motion.div>

        <div className="mb-8 overflow-hidden rounded-[40px] border border-[#e7dccd] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,245,239,0.97))] p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-4 lg:p-5">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {portraitGalleryImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[28px] border border-[#efe5d8] bg-white shadow-[0_20px_55px_rgba(17,24,39,0.07)] ${
                  index === 1 ? "sm:mt-10 lg:mt-12" : ""
                }`}
              >
                <div className="p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#f6efe7]">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: image.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/35 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center rounded-full border border-white/50 bg-white/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-slate-700 backdrop-blur-md">
                      {image.label}
                      </span>
                    </div>
                  </div>

                  <div className="px-2 pb-2 pt-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a7b52]">
                      Elaria Space
                    </p>
                    <h3 className="mt-3 text-xl font-medium text-slate-900 md:text-[1.65rem]">
                      {image.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="grid gap-6 rounded-[34px] border border-[#e9dfd2] bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-sm lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
              Centre Gallery
            </p>
            <h3 className="mt-4 text-2xl font-medium text-slate-900">
              Your current centre images are live in this section.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              As you add more centre photos later, this layout can easily grow
              into a larger gallery, slider, or a more editorial visual story.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:min-w-[300px]">
            {[
              "Reception",
              "Consultation Room",
              "Treatment Room",
              "More Images Coming",
              "Future Gallery",
              "Expanded Spaces",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f8f4ef] px-4 py-3 text-center text-[11px] uppercase tracking-[0.24em] text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CentreGallerySection;

