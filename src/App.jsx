import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button, Input, Carousel, Avatar, Tooltip, Rate, Card } from "antd";
import {
  SearchOutlined,
  ArrowRightOutlined,
  StarFilled,
  CalendarOutlined,
  PlayCircleOutlined,
  HeartFilled,
  HeartOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Navbar from "./components/Navbar";

// ============================================================================
// ANIMATION VARIANTS - Refined, sophisticated motion patterns
// ============================================================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ============================================================================
// HERO SECTION - Minimalist, elegant with subtle parallax
// ============================================================================
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageReveal = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

const HeroSection = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-12 lg:pb-20 container mx-auto px-6 relative z-10">
      {/* Background Blobs (for visual flair) */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-[#efae4c]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-40 right-[-10%] w-[400px] h-[400px] bg-[#001b3d]/30 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
          >
            Feel Beautiful, <br />
            <span className="text-[#efae4c] relative">
              Be Elaria
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Premium skin, hair and aesthetic treatments designed to enhance your
            natural beauty. Discover your radiant transformation today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
          >
            <Button
              type="primary"
              size="large"
              icon={<CalendarOutlined />}
              className="bg-[#efae4c] hover:bg-[#d89b3e] border-none h-14 px-8 text-lg rounded-full shadow-lg shadow-[#efae4c]/30"
            >
              Book Consultation
            </Button>
            <Button
              size="large"
              icon={<PlayCircleOutlined />}
              className="h-14 px-8 text-lg rounded-full text-gray-700 border-gray-300 hover:text-[#efae4c] hover:border-[#efae4c]"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center lg:justify-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl w-fit border border-white mx-auto lg:mx-0 shadow-sm"
          >
            <Avatar.Group maxCount={4}>
              <Avatar src="https://i.pravatar.cc/150?u=1" />
              <Avatar src="https://i.pravatar.cc/150?u=2" />
              <Avatar src="https://i.pravatar.cc/150?u=3" />
              <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
                2k+
              </Avatar>
            </Avatar.Group>
            <div className="flex flex-col items-start">
              <Rate
                disabled
                defaultValue={5}
                style={{ fontSize: 14, color: "#FBBF24" }}
              />
              <span className="text-xs text-gray-500 font-semibold">
                "Changed my life!"
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image (Treatment Focused) */}
        <motion.div
          className="flex-1 relative w-full max-w-[600px] lg:max-w-none"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Physiotherapy Treatment"
              className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Floating Card: Recovery Status */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 -left-6 lg:-left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-[#efae4c]/20"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
              ✨
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                Results
              </p>
              <p className="text-lg font-bold text-gray-800">Radiant Glow</p>
            </div>
          </motion.div>

          {/* Floating Card: Heart Rate */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-12 -right-4 lg:-right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-red-50 w-48"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-gray-500">
                Skin Vitality
              </span>
              <div className="w-3 h-3 bg-[#efae4c] rounded-full animate-pulse"></div>
            </div>
            <div className="h-10 flex items-end justify-between gap-1">
              {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 bg-[#efae4c] rounded-full"
                  style={{ height: `${h}%`, opacity: 0.6 }}
                ></div>
              ))}
            </div>
            <p className="mt-2 text-center text-sm font-bold text-gray-800">
              Healthy & Vibrant
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// ============================================================================
// CATEGORY CARDS - Sophisticated, minimal design
// ============================================================================
const CategoryCard = ({ title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      transition={{ delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer group"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-96 bg-white border border-gray-100 overflow-hidden"
      >
        {/* Golden accent line */}
        <motion.div
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-px bg-[#efae4c] origin-left"
        />

        <div className="relative z-10 h-full flex flex-col justify-between p-10">
          <div>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#001b3d] mb-8"
            >
              <div className="w-12 h-px bg-[#efae4c] mb-6"></div>
              <h3 className="text-3xl font-light tracking-wide mb-4">
                {title}
              </h3>
            </motion.div>
            <p className="text-gray-600 text-base leading-relaxed font-light">
              {description}
            </p>
          </div>

          <motion.div
            animate={{
              x: isHovered ? 8 : 0,
              color: isHovered ? "#efae4c" : "#001b3d",
            }}
            className="flex items-center gap-3 text-sm font-light tracking-widest"
          >
            EXPLORE <ArrowRightOutlined className="text-xs" />
          </motion.div>
        </div>

        {/* Subtle hover overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 0.02 : 0 }}
          className="absolute inset-0 bg-[#efae4c]"
        />
      </motion.div>
    </motion.div>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "SKIN CARE",
      description:
        "Advanced dermatological treatments for rejuvenation, clarity, and timeless radiance. Experience the transformative power of professional skin care.",
    },
    {
      title: "HAIR BEAUTY",
      description:
        "Restorative solutions combining medical expertise with personalized care for optimal hair vitality and luxurious appearance.",
    },
    {
      title: "BODY AESTHETICS",
      description:
        "Precision sculpting and contouring treatments tailored to your aesthetic vision. Achieve the body confidence you deserve.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <div className="w-16 h-px bg-[#efae4c] mx-auto mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-light text-[#001b3d] mb-6 tracking-tight">
            Your Beauty Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light tracking-wide">
            Discover personalized aesthetic treatments tailored to your unique
            beauty goals and lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// TRUST METRICS - Refined, minimal presentation
// ============================================================================
const TrustMetrics = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const targets = { years: 15, clients: 15000, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "YEARS EXPERIENCE", value: counters.years + "+" },
    {
      label: "SATISFIED CLIENTS",
      value: counters.clients.toLocaleString() + "+",
    },
    { label: "SATISFACTION RATE", value: counters.satisfaction + "%" },
    { label: "FDA APPROVED", value: "100%" },
  ];

  return (
    <section className="py-24 bg-[#001b3d] relative overflow-hidden">
      {/* Subtle golden line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#efae4c] to-transparent"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={scaleIn}
              className="text-center"
            >
              <div className="text-5xl font-light text-[#efae4c] mb-4 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs text-gray-400 tracking-widest font-light">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#efae4c] to-transparent"></div>
    </section>
  );
};

// ============================================================================
// TESTIMONIAL CAROUSEL - Elegant, minimal testimonials
// ============================================================================
const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Sophia Chen",
      role: "Skin Rejuvenation",
      text: "The transformation has been incredible. My skin glows naturally and I feel confident in my own skin for the first time in years.",
      initials: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "Hair Restoration",
      text: "Professional excellence combined with genuine care. The results exceeded my expectations and restored my confidence completely.",
      initials: "MR",
    },
    {
      name: "Isabella Thompson",
      role: "Body Contouring",
      text: "Sophisticated approach to beauty enhancement. The team understood my vision perfectly and delivered outstanding results.",
      initials: "IT",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
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
          variants={scaleIn}
        >
          <Carousel
            autoplay
            autoplaySpeed={6000}
            dotPosition="bottom"
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

// ============================================================================
// AI SERVICE FINDER - Minimalist search interface
// ============================================================================
// const AIServiceFinder = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const suggestions = [
//     "Facial rejuvenation treatments",
//     "Anti-aging skin solutions",
//     "Hair restoration therapy",
//     "Body contouring procedures",
//     "Laser skin resurfacing",
//     "Dermal fillers and injectables",
//     "Acne scar treatment",
//     "Hydrafacial therapy",
//   ];

//   const filteredSuggestions = suggestions.filter((s) =>
//     s.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   return (
//     <section className="py-32 px-6 bg-[#001b3d] relative overflow-hidden">
//       {/* Geometric accent */}
//       <div className="absolute top-0 right-0 w-64 h-64 border border-[#efae4c] opacity-10 rounded-full"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#efae4c] opacity-5 rounded-full"></div>

//       <div className="max-w-4xl mx-auto relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center mb-16"
//         >
//           <div className="inline-block mb-6 px-6 py-2 border border-[#efae4c] text-[#efae4c] text-xs font-light tracking-widest">
//             AI-POWERED
//           </div>
//           <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
//             Discover Your Treatment
//           </h2>
//           <p className="text-lg text-gray-400 font-light tracking-wide">
//             Intelligent guidance to your perfect beauty solution
//           </p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={scaleIn}
//           className="relative"
//         >
//           <motion.div
//             animate={{
//               borderColor: isFocused ? "#efae4c" : "rgba(239, 174, 76, 0.3)",
//             }}
//             transition={{ duration: 0.3 }}
//             className="bg-white/5 backdrop-blur-sm border-2 overflow-hidden"
//           >
//             <Input
//               size="large"
//               placeholder="Search treatments, concerns, or goals..."
//               prefix={<SearchOutlined className="text-xl text-[#efae4c]" />}
//               value={searchValue}
//               onChange={(e) => {
//                 setSearchValue(e.target.value);
//                 setShowSuggestions(e.target.value.length > 0);
//               }}
//               onFocus={() => {
//                 setIsFocused(true);
//                 setShowSuggestions(searchValue.length > 0);
//               }}
//               onBlur={() => {
//                 setIsFocused(false);
//                 setTimeout(() => setShowSuggestions(false), 200);
//               }}
//               className="text-base py-6 bg-transparent text-white border-none font-light tracking-wide placeholder-gray-500"
//             />
//           </motion.div>

//           <AnimatePresence>
//             {showSuggestions && filteredSuggestions.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute w-full mt-2 bg-white/10 backdrop-blur-md border border-[#efae4c]/30 overflow-hidden z-20"
//               >
//                 {filteredSuggestions.map((suggestion, index) => (
//                   <motion.div
//                     key={suggestion}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     whileHover={{
//                       backgroundColor: "rgba(239, 174, 76, 0.1)",
//                       x: 4,
//                     }}
//                     className="px-6 py-4 cursor-pointer border-b border-white/10 last:border-none transition-all duration-300"
//                     onMouseDown={() => setSearchValue(suggestion)}
//                   >
//                     <div className="flex items-center gap-4">
//                       <SearchOutlined className="text-[#efae4c]" />
//                       <span className="text-gray-300 font-light tracking-wide">
//                         {suggestion}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const CoreServices = () => {
  const specialties = [
    {
      icon: <HeartOutlined className="text-4xl text-teal-600" />,
      title: "Holistic Wellness Plans",
      description:
        "Integrated programs focusing on nutrition, mindfulness, and physical health for long-term vitality.",
      link: "#plans",
    },
    {
      icon: <SolutionOutlined className="text-4xl text-teal-600" />,
      title: "Specialized Pain Therapy",
      description:
        "Targeted physiotherapy and osteopathy to treat chronic pain, injuries, and post-operative conditions.",
      link: "#paintherapy",
    },
    {
      icon: <UsergroupAddOutlined className="text-4xl text-teal-600" />,
      title: "Mind-Body Balance",
      description:
        "Counseling, stress management, and therapeutic massage to achieve complete mental and emotional well-being.",
      link: "#mindbody",
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            Our Pillars of Care
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Expertise That Heals
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {specialties.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card
                hoverable
                className="h-full border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-6"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors mt-4"
                  >
                    Learn More <ArrowRightOutlined className="ml-2 text-sm" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// FOOTER - Minimal, elegant footer
// ============================================================================
const Footer = () => {
  return (
    <footer className="bg-[#001b3d] text-white py-20 px-6 border-t border-[#efae4c]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-light mb-6 text-[#efae4c] tracking-wide">
              ELARIA ESTHETIQUE
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed tracking-wide">
              Premium aesthetic treatments for timeless beauty and confidence
            </p>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              SERVICES
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Skin Treatments
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Hair Restoration
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Body Contouring
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              COMPANY
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Our Team
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              LEGAL
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs font-light tracking-widest">
              © 2024 ELARIA ESTHETIQUE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6">
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">IN</span>
              </div>
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">FB</span>
              </div>
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .ant-input::placeholder {
          color: rgba(156, 163, 175, 0.6);
        }
        .ant-carousel .slick-dots li button {
          background: rgba(239, 174, 76, 0.3) !important;
          height: 2px !important;
          width: 40px !important;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #efae4c !important;
        }
      `}</style>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <TrustMetrics />
      {/* <AIServiceFinder /> */}
      <CoreServices />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default App;
