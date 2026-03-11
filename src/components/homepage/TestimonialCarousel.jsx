import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import { StarFilled, LeftOutlined, RightOutlined } from "@ant-design/icons";

const TestimonialCarousel = () => {
  const carouselRef = useRef();

  const testimonials = [
    {
      name: "Sharul Saxena",
      role: "Skin Rejuvenation",
      text: "The transformation has been incredible. My skin glows naturally and I feel confident in my own skin for the first time in years.",
      initials: "SS",
    },
    {
      name: "Akul Varshney",
      role: "Hair Restoration",
      text: "Professional excellence combined with genuine care. The results exceeded my expectations and restored my confidence completely.",
      initials: "AV",
    },
    {
      name: "Kaashvi Malhotra",
      role: "Body Contouring",
      text: "Sophisticated approach to beauty enhancement. The team understood my vision perfectly and delivered outstanding results.",
      initials: "KM",
    },
    {
      name: "Devanshi Gupta",
      role: "Skin Rejuvenation",
      text: "I was amazed by the results of my skin rejuvenation treatment. The team listened carefully to my concerns and delivered a natural, glowing transformation that exceeded my expectations.",
      initials: "DG",
    },
    {
      name: "Priya Sharma",
      role: "Facial Aesthetics",
      text: "My facial aesthetics treatment was handled with such precision and artistry. The results look subtle yet transformative, and I couldn’t be happier with the experience.",
      initials: "PS",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
              Testimonials
            </p>
            <h2 className="mt-5 text-4xl font-light tracking-[-0.03em] text-slate-900 md:text-5xl">
              Client testimonials shaped by their trust and our professional care.
            </h2>
          </div>
          <div className="flex items-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={() => carouselRef.current?.prev()}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e5d8c7] text-slate-700 transition hover:border-[#b8925f] hover:text-[#9a7b52]"
              aria-label="Previous testimonial"
            >
              <LeftOutlined />
            </button>
            <button
              type="button"
              onClick={() => carouselRef.current?.next()}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#e5d8c7] text-slate-700 transition hover:border-[#b8925f] hover:text-[#9a7b52]"
              aria-label="Next testimonial"
            >
              <RightOutlined />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8 },
            },
          }}
        >
          <Carousel
            ref={carouselRef}
            autoplay
            autoplaySpeed={6000}
            dotPosition="bottom"
            className="testimonial-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="mx-2 overflow-hidden rounded-[32px] border border-[#e7ddcf] bg-[#fbf8f4] p-10 md:p-14">
                  <div className="mb-8 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarFilled key={i} className="text-[#d6b384] text-base" />
                    ))}
                  </div>

                  <p className="mb-12 max-w-4xl text-2xl font-light leading-relaxed text-slate-700 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10233f]">
                      <span className="text-lg font-medium tracking-[0.15em] text-[#d6b384]">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-medium text-[#10233f]">
                        {testimonial.name}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-slate-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
