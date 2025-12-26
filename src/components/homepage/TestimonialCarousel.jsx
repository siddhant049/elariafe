import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import { StarFilled, LeftOutlined, RightOutlined } from "@ant-design/icons";

const TestimonialCarousel = () => {
  const carouselRef = useRef();

  // Custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
      aria-label="Previous testimonial"
    >
      <LeftOutlined className="text-[#001b3d] text-lg group-hover:text-[#efae4c] transition-colors duration-300" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
      aria-label="Next testimonial"
    >
      <RightOutlined className="text-[#001b3d] text-lg group-hover:text-[#efae4c] transition-colors duration-300" />
    </button>
  );

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
      "name": "Devanshi Gupta",
      "role": "Skin Rejuvenation",
      "text": "I was amazed by the results of my skin rejuvenation treatment. The team listened carefully to my concerns and delivered a natural, glowing transformation that exceeded my expectations.",
      "initials": "DG"
    },
    {
      "name": "Priya Sharma",
      "role": "Facial Aesthetics",
      "text": "My facial aesthetics treatment was handled with such precision and artistry. The results look subtle yet transformative, and I couldn’t be happier with the experience.",
      "initials": "PS"
    }
    
    
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
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
          className="text-center mb-20"
        >
          <div className="w-16 h-px bg-[#efae4c] mx-auto mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-light text-[#001b3d] mb-6 tracking-tight">
            Beauty Transformations
          </h2>
          <p className="text-lg text-gray-600 font-light tracking-wide">
            Real stories from clients who discovered their radiance
          </p>
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
            arrows={true}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
            className="testimonial-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-gray-50 border border-gray-100 p-16 mx-4">
                  <div className="flex gap-1 justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <StarFilled key={i} className="text-[#efae4c] text-lg" />
                    ))}
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center font-light italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-center gap-6">
                    <div className="w-16 h-16 bg-[#001b3d] flex items-center justify-center">
                      <span className="text-[#efae4c] text-lg font-light tracking-wider">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-light text-[#001b3d] tracking-wide">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 font-light tracking-wider">
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
