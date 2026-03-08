import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    title: "Elegant reception experience",
    description: "A welcoming first impression with a calm, refined atmosphere.",
    span: "lg:col-span-7",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    title: "Private consultation rooms",
    description: "Spaces designed for personal conversations and treatment planning.",
    span: "lg:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    title: "Modern treatment spaces",
    description: "Clean, professional treatment rooms shaped around comfort and care.",
    span: "lg:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    title: "Comfort-focused interiors",
    description: "A premium environment that feels serene from arrival to aftercare.",
    span: "lg:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1580281658629-0d5b47f2b4f2?auto=format&fit=crop&w=1200&q=80",
    title: "Thoughtful clinical detailing",
    description: "Luxury aesthetics balanced with trust, hygiene and modern technology.",
    span: "lg:col-span-4",
  },
];

const CentreGallerySection = () => {
  return (
    <section className="bg-[#f8f4ef] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
              Our Centre
            </p>
            <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] text-slate-900 md:text-5xl">
              A clinic environment that feels premium, calm and personal.
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              This section is ready for your real clinic photographs. For now,
              I have used sample premium interiors so you can see how a centre
              gallery will look on the homepage.
            </p>
          </div>
        </motion.div>

        <div className="mb-6 grid gap-6 lg:grid-cols-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group relative min-h-[280px] overflow-hidden rounded-[30px] shadow-[0_20px_55px_rgba(17,24,39,0.07)] ${image.span}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/72 via-[#10233f]/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">
                  Elaria Space
                </p>
                <h3 className="mt-3 max-w-sm text-xl font-medium text-white md:text-2xl">
                  {image.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="grid gap-6 rounded-[34px] border border-[#e9dfd2] bg-white p-8 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
              Sample Gallery Placeholder
            </p>
            <h3 className="mt-4 text-2xl font-medium text-slate-900">
              Replace these with your actual centre photos anytime.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Once you share your clinic images, I can place them here in the same
              layout or redesign this into a full luxury gallery, slider, or
              before-you-visit visual story.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:min-w-[300px]">
            {[
              "Reception",
              "Consultation Room",
              "Treatment Room",
              "Waiting Area",
              "Equipment",
              "Team Moments",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f8f4ef] px-4 py-3 text-center text-[11px] uppercase tracking-[0.24em] text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CentreGallerySection;

