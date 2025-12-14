import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import {
  Button,
  Input,
  Carousel,
  Avatar,
  Tooltip,
  Rate,
  Card,
  Modal,
  DatePicker,
  TimePicker,
  Form,
  Select,
  Radio,
  Steps,
  message,
} from "antd";
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
  ClockCircleOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CheckCircleOutlined,
  UploadOutlined,
  CloseOutlined,
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

const HeroSection = ({ onBookAppointment }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [currentWord, setCurrentWord] = useState(0);

  const floatingWords = ["Radiant", "Confident", "Beautiful", "Timeless"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % floatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Enhanced parallax
  const yBg = useTransform(scrollY, [0, 500], [0, -50]);
  const yContent = useTransform(scrollY, [0, 500], [0, 25]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / (rect.width / 2),
      y: (e.clientY - rect.top - rect.height / 2) / (rect.height / 2),
    });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(135deg, #fdfbf7 0%, #f7f2ed 50%, #faf8f5 100%)",
            "linear-gradient(135deg, #faf8f5 0%, #f5efe8 50%, #fdfbf7 100%)",
            "linear-gradient(135deg, #fdfbf7 0%, #f7f2ed 50%, #faf8f5 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80)`,
            filter: "blur(1.5px) brightness(1.08) saturate(0.95)",
            transform: "scale(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-amber-50/45 to-white/70" />
      </motion.div>

      {/* Enhanced Floating Orbs with More Variety */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Primary Gold Orb */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(239, 174, 76, 0.18) 0%, rgba(239, 174, 76, 0.08) 40%, transparent 70%)",
            transform: `translate(${mousePosition.x * 40}px, ${
              mousePosition.y * 40
            }px)`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Navy Accent Orb */}
        <motion.div
          className="absolute bottom-[12%] right-[5%] w-[550px] h-[550px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 27, 61, 0.12) 0%, rgba(0, 27, 61, 0.05) 45%, transparent 70%)",
            transform: `translate(${-mousePosition.x * 30}px, ${
              -mousePosition.y * 30
            }px)`,
          }}
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Soft Center Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,251,235,0.6) 0%, rgba(239,174,76,0.08) 35%, transparent 65%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sparkle Effects */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#efae4c] rounded-full"
            style={{
              top: `${15 + i * 7}%`,
              left: `${10 + i * 8}%`,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 py-16 md:py-24 lg:py-32"
        style={{ y: yContent }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8 lg:space-y-12">
          {/* Premium Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-2xl border-2 border-white/60 rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(239,174,76,0.15)] transition-all duration-500 hover:scale-105">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#efae4c] to-[#d89b3e]" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#efae4c]"
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-xs font-semibold text-gray-700 tracking-[0.15em] uppercase">
                Est. 2009 • Award-Winning Care
              </span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#efae4c] to-[#d89b3e] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Headline - More Dynamic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-3"
          >
            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                type: "spring",
                stiffness: 50,
              }}
            >
              Feel{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: -90 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-[#efae4c] via-[#d89b3e] to-[#efae4c] bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% auto" }}
                >
                  {floatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            {/* Sub Title with Elegant Animation */}
            <div className="relative inline-block">
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <span className="relative inline-block">
                  <span className="text-[#001b3d]">Be </span>
                  <motion.span
                    className="relative inline-block"
                    style={{
                      background:
                        "linear-gradient(135deg, #efae4c 0%, #d89b3e 50%, #efae4c 100%)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    animate={{
                      backgroundPosition: [
                        "0% center",
                        "200% center",
                        "0% center",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Elaria
                  </motion.span>
                </span>
              </motion.h2>

              {/* Sophisticated Multi-Layer Underline */}
              <motion.div className="absolute -bottom-3 left-1/2 w-full -translate-x-1/2 flex flex-col gap-1">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-[#efae4c] to-transparent opacity-40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
                />
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-transparent via-[#d89b3e] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.8 }}
                  transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Tagline - More Poetic */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
          >
            Where cutting-edge science embraces timeless artistry.
            <br className="hidden sm:block" />
            Discover treatments that honor your unique beauty journey and
            <span className="text-[#efae4c] font-medium">
              {" "}
              transform from within
            </span>
            .
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
          >
            <motion.button
              onClick={onBookAppointment}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-5 w-full sm:w-auto bg-gradient-to-r from-[#efae4c] via-[#d89b3e] to-[#c8892f] text-white font-semibold rounded-2xl shadow-2xl shadow-[#efae4c]/30 overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#d89b3e] to-[#efae4c]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                <CalendarOutlined className="text-lg" />
                Book Your Transformation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              onClick={onBookAppointment}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 w-full sm:w-auto bg-white/60 backdrop-blur-2xl text-[#001b3d] font-semibold rounded-2xl border-2 border-white/70 hover:border-[#efae4c]/50 transition-all duration-300 shadow-xl relative overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#efae4c]/10 via-[#efae4c]/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                <PlayCircleOutlined className="text-lg" />
                Explore Treatments
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Trust Metrics */}
          <motion.div
            className="pt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12">
              {/* Avatars with Enhanced Design */}
              <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="relative w-11 h-11 rounded-full border-3 border-white shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
                      whileHover={{ scale: 1.15, zIndex: 10, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={`https://i.pravatar.cc/100?u=${i}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    className="w-11 h-11 rounded-full border-3 border-white bg-gradient-to-br from-[#efae4c] to-[#d89b3e] flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                  >
                    2k+
                  </motion.div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.8 + i * 0.1, type: "spring" }}
                      >
                        <StarFilled className="text-[#FBBF24] text-sm drop-shadow" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-semibold">
                    Trusted by thousands
                  </span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

              {/* Stats Grid */}
              <div className="flex gap-8 px-6 py-4 bg-white/50 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl">
                {[
                  { value: "15+", label: "Years" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "100%", label: "FDA Approved" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <div className="text-2xl font-light bg-gradient-to-r from-[#001b3d] to-[#efae4c] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-600 font-medium uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Corner Decorations */}
      {[
        { top: 8, left: 8, rotate: 0 },
        { top: 8, right: 8, rotate: 90 },
        { bottom: 8, left: 8, rotate: -90 },
        { bottom: 8, right: 8, rotate: 180 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: corner.top,
            bottom: corner.bottom,
            left: corner.left,
            right: corner.right,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: corner.rotate - 45 }}
          animate={{ opacity: 1, scale: 1, rotate: corner.rotate }}
          transition={{ delay: 2 + i * 0.1, duration: 0.6, type: "spring" }}
        >
          <div className="relative w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#efae4c] to-transparent" />
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#efae4c] to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
// ============================================================================
// CATEGORY CARDS - Sophisticated, minimal design
// ============================================================================
const CategoryCard = ({ title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Enhanced service details based on category
  const getServiceDetails = (title) => {
    const details = {
      HAIR: {
        treatments: [
          "QR678",
          "Hair Growth Boosters",
          "GFC",
          "Exames",
          "Scalp Peel",
        ],
        duration: "30-60 mins",
        benefits: [
          "Stimulates hair growth",
          "Strengthens follicles",
          "Reduces hair loss",
          "Improves scalp health",
        ],
        icon: "💇‍♀️",
      },
      SKIN: {
        treatments: [
          "Acne scars",
          "Xanthelasma",
          "Skin infections",
          "Melasma",
          "Mole Surgery",
          "Skin Tag",
          "Laser for Moles",
          "Cautery for warts",
          "Dermapen Treatment",
          "Stretch Marks",
        ],
        duration: "30-90 mins",
        benefits: [
          "Clear complexion",
          "Remove imperfections",
          "Treat skin conditions",
          "Improve skin texture",
        ],
        icon: "✨",
      },
      "ACNE AND SCARS": {
        treatments: [
          "Acne Peels",
          "Advanced Acne Treatments",
          "Carbon Peels",
          "Chemical Peels",
          "Derma roller",
          "Fractional Laser",
          "Radiofrequency Microneedling",
          "Acne Cleanup Facial",
          "Laser for Freckles",
          "Microneedling Radiofrequency for stretch Marks",
        ],
        duration: "45-90 mins",
        benefits: [
          "Clear acne",
          "Reduce scars",
          "Smooth skin texture",
          "Prevent future breakouts",
        ],
        icon: "🧴",
      },
      "UNDER EYES SERVICES": {
        treatments: [
          "Dark Circles Removal",
          "Under Eye Rejuvenation",
          "Under Eye Boosters",
        ],
        duration: "30-45 mins",
        benefits: [
          "Brighten under eyes",
          "Reduce dark circles",
          "Hydrate delicate skin",
          "Youthful appearance",
        ],
        icon: "👁️",
      },
      PIGMENTATION: {
        treatments: [
          "Freckles",
          "Depigmentation Peels",
          "Cosmelan",
          "Glow Peel",
          "Dermapen 4 for Pigmentation",
          "Vampire Facial",
          "Hydrafacial Basic",
          "HydraFacial Elite",
          "Skin Boosters",
        ],
        duration: "45-75 mins",
        benefits: [
          "Even skin tone",
          "Reduce pigmentation",
          "Brighten complexion",
          "Improve skin radiance",
        ],
        icon: "🌟",
      },
      MEDIFACIAL: {
        treatments: [
          "Diamond Polishing",
          "OxyFacials",
          "Oxyglow",
          "InstaBright Rejuvenation",
          "Powerlift Medifacial",
          "Power Glow Facial",
          "IV Infusions for glow",
        ],
        duration: "60-90 mins",
        benefits: [
          "Deep cleansing",
          "Skin rejuvenation",
          "Improved texture",
          "Radiant glow",
        ],
        icon: "💎",
      },
      "ANTI AGING": {
        treatments: [
          "Wrinkles Treatment",
          "Anti-aging Peels",
          "Collagen Boosters",
          "Skin Tightening",
        ],
        duration: "45-75 mins",
        benefits: [
          "Reduce wrinkles",
          "Firm skin",
          "Boost collagen",
          "Youthful appearance",
        ],
        icon: "⏳",
      },
      LASER: {
        treatments: [
          "Laser Hair Removal",
          "Laser Hair Reduction for Females",
          "Laser Hair Reduction for Males",
          "Birthmark removal",
          "Tattoo Removal",
          "Mole removal",
          "Wart Removal",
        ],
        duration: "30-60 mins",
        benefits: [
          "Permanent hair removal",
          "Remove unwanted marks",
          "Precision treatment",
          "Minimal downtime",
        ],
        icon: "⚡",
      },
      "BODY CONTOURING": {
        treatments: [
          "Weight Loss Treatments",
          "Cellulite Treatment",
          "Cryolipolysis",
          "Body Shaping",
          "Fat Reduction",
        ],
        duration: "45-120 mins",
        benefits: [
          "Targeted fat reduction",
          "Body shaping",
          "Cellulite reduction",
          "Improved contours",
        ],
        icon: "🏃‍♀️",
      },
    };
    return (
      details[title] || {
        treatments: [],
        duration: "Varies",
        benefits: [],
        icon: "✨",
      }
    );
  };

  const serviceDetails = getServiceDetails(title);

  return (
    <>
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
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative h-96 bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl"
          onClick={() => setIsExpanded(true)}
        >
          {/* Multiple animated accent lines */}
          <motion.div
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-px bg-[#efae4c] origin-left"
          />
          <motion.div
            animate={{ scaleX: isHovered ? 0.8 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-0 left-0 w-full h-px bg-[#efae4c] origin-left opacity-60"
          />

          {/* Floating icon */}
          <motion.div
            animate={{
              y: isHovered ? -10 : 0,
              rotate: isHovered ? 5 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute top-6 right-6 w-12 h-12 bg-[#efae4c]/10 rounded-full flex items-center justify-center text-2xl"
          >
            {serviceDetails.icon}
          </motion.div>

          <div className="relative z-10 h-full flex flex-col justify-between p-10">
            <div>
              <motion.div
                animate={{ x: isHovered ? 6 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#001b3d] mb-8"
              >
                <div className="w-12 h-px bg-[#efae4c] mb-6"></div>
                <h3 className="text-3xl font-light tracking-wide mb-4 group-hover:text-[#efae4c] transition-colors">
                  {title}
                </h3>
              </motion.div>

              <motion.p
                animate={{ opacity: isHovered ? 0.8 : 1 }}
                className="text-gray-600 text-base leading-relaxed font-light mb-6"
              >
                {description}
              </motion.p>

              {/* Service highlights */}
            </div>

            {/* Enhanced CTA with animation */}
            <motion.div
              animate={{
                x: isHovered ? 12 : 0,
                color: isHovered ? "#efae4c" : "#001b3d",
              }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3 text-sm font-light tracking-widest">
                LEARN MORE <ArrowRightOutlined className="text-xs" />
              </div>

              {/* Quick action buttons */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                className="flex gap-2"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-[#efae4c]/20 rounded-full flex items-center justify-center text-[#efae4c] text-xs hover:bg-[#efae4c] hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(true);
                    setTimeout(() => setShowTooltip(false), 3000);
                  }}
                >
                  ?
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced hover overlay with gradient */}
          <motion.div
            animate={{ opacity: isHovered ? 0.05 : 0 }}
            className="absolute inset-0 bg-gradient-to-br from-[#efae4c] to-transparent"
          />

          {/* Animated border effect */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1 : 0.95,
            }}
            className="absolute inset-0 border-2 border-[#efae4c] rounded-lg pointer-events-none"
          />
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-20 shadow-lg"
            >
              Click to explore detailed information
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Expanded Modal */}
      <Modal
        title={
          <div className="flex items-center gap-3 text-2xl">
            <span>{serviceDetails.icon}</span>
            <span className="text-[#001b3d]">{title.trim()}</span>
          </div>
        }
        open={isExpanded}
        onCancel={() => setIsExpanded(false)}
        footer={[
          <Button
            key="book"
            type="primary"
            className="bg-[#efae4c] hover:bg-[#d89b3e] border-none"
            onClick={() => {
              setIsExpanded(false);
              // Trigger booking modal
              document.querySelector("[data-booking-trigger]")?.click();
            }}
          >
            Book Consultation
          </Button>,
          <Button key="close" onClick={() => setIsExpanded(false)}>
            Close
          </Button>,
        ]}
        width={700}
        className="service-modal"
      >
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">{description}</p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#001b3d] mb-3 flex items-center gap-2">
                <span className="text-[#efae4c]">💰</span> Pricing & Duration
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Session Duration:</strong> {serviceDetails.duration}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#001b3d] mb-3 flex items-center gap-2">
                <span className="text-[#efae4c]">✨</span> Key Benefits
              </h4>
              <ul className="space-y-1 text-gray-600">
                {serviceDetails.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#efae4c] rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#001b3d] mb-3 flex items-center gap-2">
              <span className="text-[#efae4c]">🏥</span> Available Treatments
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {serviceDetails.treatments.map((treatment, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 border border-gray-100 hover:border-[#efae4c] transition-colors cursor-pointer"
                >
                  {treatment}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#efae4c]/5 p-4 rounded-lg border-l-4 border-[#efae4c]">
            <p className="text-sm text-gray-600">
              <strong>Ready to transform?</strong> Our expert consultants will
              create a personalized treatment plan tailored to your specific
              needs and goals.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "HAIR",
      description:
        "Comprehensive hair care solutions including growth boosters, scalp treatments, and restoration therapies for healthy, vibrant hair.",
    },
    {
      title: "SKIN",
      description:
        "Advanced dermatological treatments for acne scars, skin conditions, mole removal, and various skin imperfections.",
    },
    {
      title: "ACNE AND SCARS",
      description:
        "Specialized treatments for acne control, scar reduction, and comprehensive skin clearing solutions.",
    },
    {
      title: "UNDER EYES SERVICES",
      description:
        "Targeted treatments for dark circles, under-eye rejuvenation, and delicate eye area enhancement.",
    },
    {
      title: "PIGMENTATION",
      description:
        "Effective pigmentation treatments including freckles, melasma, and skin brightening procedures.",
    },
    {
      title: "MEDIFACIAL",
      description:
        "Professional medical facials for deep cleansing, rejuvenation, and achieving radiant, healthy skin.",
    },
    {
      title: "ANTI AGING",
      description:
        "Advanced anti-aging treatments focusing on wrinkle reduction and skin rejuvenation.",
    },
    {
      title: "LASER",
      description:
        "Precision laser treatments for hair removal, tattoo removal, birthmark treatment, and skin rejuvenation.",
    },
    {
      title: "BODY CONTOURING",
      description:
        "Body shaping and weight loss treatments including cellulite reduction and fat contouring procedures.",
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
// INTERACTIVE REVIEW SYSTEM - Star ratings and photo uploads
// ============================================================================
const ReviewSystem = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    treatment: "",
    rating: 0,
    review: "",
    photos: [],
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const treatments = [
    "HydraFacial",
    "Laser Hair Removal",
    "Botox",
    "PRP Therapy",
    "Chemical Peel",
    "Body Contouring",
    "Hair Transplant",
    "Ayurvedic Massage",
  ];

  const handleRatingClick = (rating) => {
    setReviewData((prev) => ({ ...prev, rating }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file),
    }));
    setReviewData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...newPhotos].slice(0, 3), // Max 3 photos
    }));
  };

  const removePhoto = (photoId) => {
    setReviewData((prev) => ({
      ...prev,
      photos: prev.photos.filter((photo) => photo.id !== photoId),
    }));
  };

  const handleSubmitReview = async () => {
    if (
      !reviewData.name ||
      !reviewData.treatment ||
      reviewData.rating === 0 ||
      !reviewData.review
    ) {
      message.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newReview = {
      id: Date.now(),
      ...reviewData,
      date: new Date().toLocaleDateString(),
      initials: reviewData.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
      verified: true,
    };

    setSubmittedReviews((prev) => [newReview, ...prev]);
    setReviewData({
      name: "",
      treatment: "",
      rating: 0,
      review: "",
      photos: [],
    });
    setIsReviewModalOpen(false);
    setIsSubmitting(false);

    message.success(
      "Thank you for your review! It will be published after moderation."
    );
  };

  return (
    <>
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-[#efae4c] mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#001b3d] mb-6 tracking-tight">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600 font-light tracking-wide mb-8">
              Your review helps others discover their confidence journey
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => setIsReviewModalOpen(true)}
              className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
            >
              <StarFilled className="mr-2" />
              Write a Review
            </Button>
          </motion.div>

          {/* Recent Reviews */}
          {submittedReviews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light text-[#001b3d] text-center mb-8">
                Recent Reviews
              </h3>
              {submittedReviews.slice(0, 3).map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#001b3d] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#efae4c] font-semibold">
                        {review.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-[#001b3d]">
                          {review.name}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <StarFilled
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-[#efae4c]"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{review.treatment}</p>
                      <p className="text-gray-700 italic">"{review.review}"</p>
                      {review.photos.length > 0 && (
                        <div className="flex gap-2 mt-4">
                          {review.photos.slice(0, 3).map((photo) => (
                            <img
                              key={photo.id}
                              src={photo.url}
                              alt="Review photo"
                              className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Review Modal */}
      <Modal
        title={
          <div className="text-center py-4">
            <h2 className="text-2xl font-light text-[#001b3d] tracking-wide">
              Share Your Experience
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Help others discover their beauty journey
            </p>
          </div>
        }
        open={isReviewModalOpen}
        onCancel={() => setIsReviewModalOpen(false)}
        footer={null}
        width={600}
        centered
        className="review-modal"
      >
        <div className="space-y-6">
          <Form layout="vertical" className="space-y-4">
            <Form.Item label="Your Name" required>
              <Input
                size="large"
                placeholder="Enter your full name"
                value={reviewData.name}
                onChange={(e) =>
                  setReviewData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </Form.Item>

            <Form.Item label="Treatment Received" required>
              <Select
                size="large"
                placeholder="Select the treatment you received"
                value={reviewData.treatment || undefined}
                onChange={(value) =>
                  setReviewData((prev) => ({ ...prev, treatment: value }))
                }
              >
                {treatments.map((treatment) => (
                  <Select.Option key={treatment} value={treatment}>
                    {treatment}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="Your Rating" required>
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => handleRatingClick(star)}
                    >
                      <StarFilled
                        className={`text-2xl transition-colors ${
                          star <= (hoverRating || reviewData.rating)
                            ? "text-[#efae4c]"
                            : "text-gray-300"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  {reviewData.rating > 0 &&
                    `${reviewData.rating} star${
                      reviewData.rating > 1 ? "s" : ""
                    }`}
                </div>
              </div>
            </Form.Item>

            <Form.Item label="Your Review" required>
              <Input.TextArea
                rows={4}
                placeholder="Share your experience, results, and what you loved about the treatment..."
                value={reviewData.review}
                onChange={(e) =>
                  setReviewData((prev) => ({ ...prev, review: e.target.value }))
                }
                maxLength={500}
                showCount
              />
            </Form.Item>

            <Form.Item label="Share Photos (Optional)">
              <div className="space-y-3">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#efae4c] transition-colors"
                >
                  <UploadOutlined className="text-gray-400 text-xl" />
                  <div>
                    <div className="font-medium text-gray-700">
                      Upload Before/After Photos
                    </div>
                    <div className="text-sm text-gray-500">
                      Max 3 photos • JPG, PNG up to 5MB each
                    </div>
                  </div>
                </label>

                {reviewData.photos.length > 0 && (
                  <div className="grid grid-cols-3 gap-3">
                    {reviewData.photos.map((photo) => (
                      <div key={photo.id} className="relative">
                        <img
                          src={photo.url}
                          alt="Upload preview"
                          className="w-full h-20 object-cover rounded-lg border border-gray-200"
                        />
                        <Button
                          size="small"
                          type="text"
                          className="absolute -top-2 -right-2 bg-red-500 text-white border-none rounded-full w-6 h-6 p-0 hover:bg-red-600"
                          onClick={() => removePhoto(photo.id)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Form.Item>
          </Form>

          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={() => setIsReviewModalOpen(false)}
              className="flex-1"
              size="large"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleSubmitReview}
              loading={isSubmitting}
              disabled={
                !reviewData.name ||
                !reviewData.treatment ||
                reviewData.rating === 0 ||
                !reviewData.review
              }
              className="flex-1 bg-[#efae4c] hover:bg-[#d89b3e] border-none"
              size="large"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

// ============================================================================
// INTERACTIVE TREATMENT QUIZ - Personalized recommendations
// ============================================================================
const TreatmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const quizQuestions = [
    {
      question: "What's your primary skin concern?",
      options: [
        { text: "Aging & Fine Lines", value: "aging", icon: "👵" },
        { text: "Acne & Breakouts", value: "acne", icon: "🧴" },
        { text: "Uneven Skin Tone", value: "pigmentation", icon: "🌟" },
        { text: "Dryness & Dehydration", value: "dryness", icon: "💧" },
        { text: "Hair Loss", value: "hair", icon: "💇‍♀️" },
        { text: "Body Contouring", value: "body", icon: "🏃‍♀️" },
      ],
    },
    {
      question: "What's your age range?",
      options: [
        { text: "18-25", value: "young", icon: "🌱" },
        { text: "26-35", value: "adult", icon: "💼" },
        { text: "36-45", value: "mature", icon: "🌟" },
        { text: "46+", value: "senior", icon: "👑" },
      ],
    },
    {
      question: "How would you describe your skin type?",
      options: [
        { text: "Oily", value: "oily", icon: "🛢️" },
        { text: "Dry", value: "dry", icon: "🏜️" },
        { text: "Combination", value: "combination", icon: "⚖️" },
        { text: "Normal", value: "normal", icon: "✅" },
        { text: "Sensitive", value: "sensitive", icon: "🌸" },
      ],
    },
    {
      question: "What's your preferred treatment level?",
      options: [
        { text: "Essential Care", value: "budget", icon: "💰" },
        { text: "Premium Experience", value: "premium", icon: "💎" },
        { text: "Luxury Treatments", value: "luxury", icon: "👑" },
      ],
    },
    {
      question: "How much downtime are you comfortable with?",
      options: [
        { text: "Minimal (1-2 days)", value: "minimal", icon: "⚡" },
        { text: "Moderate (3-7 days)", value: "moderate", icon: "⏳" },
        { text: "Extended (1-2 weeks)", value: "extended", icon: "🛌" },
      ],
    },
  ];

  const treatmentRecommendations = {
    aging: {
      young: ["HydraFacial", "Chemical Peels"],
      adult: ["Botox", "Dermal Fillers", "Laser Resurfacing"],
      mature: ["Thread Lift", "PRP Therapy", "Stem Cell Treatment"],
      senior: ["PRP Therapy", "Stem Cell Treatment", "Ayurvedic Rejuvenation"],
    },
    acne: {
      young: ["Laser Acne Treatment", "Chemical Peels", "Microdermabrasion"],
      adult: ["CO2 Laser", "PRP for Acne Scars", "Ayurvedic Detox"],
      mature: ["PRP Therapy", "Laser Resurfacing", "Ayurvedic Treatments"],
      senior: ["Gentle Laser", "Ayurvedic Healing", "PRP Therapy"],
    },
    pigmentation: {
      young: ["Chemical Peels", "Laser Toning", "Microdermabrasion"],
      adult: ["Q-Switched Laser", "Chemical Peels", "PRP Therapy"],
      mature: ["Laser Toning", "PRP Therapy", "Stem Cell Treatment"],
      senior: ["Gentle Laser", "PRP Therapy", "Ayurvedic Brightening"],
    },
    dryness: {
      young: ["HydraFacial", "Microdermabrasion", "Chemical Peels"],
      adult: ["PRP Therapy", "Stem Cell Treatment", "Laser Resurfacing"],
      mature: ["PRP Therapy", "Stem Cell Treatment", "Ayurvedic Oils"],
      senior: ["PRP Therapy", "Ayurvedic Treatments", "Stem Cell"],
    },
    hair: {
      young: ["PRP Hair Therapy", "Mesotherapy", "Low-Level Laser"],
      adult: ["Hair Transplant", "PRP Therapy", "Stem Cell Treatment"],
      mature: ["Hair Transplant", "PRP Therapy", "Stem Cell Treatment"],
      senior: ["PRP Therapy", "Stem Cell Treatment", "Ayurvedic Hair Care"],
    },
    body: {
      young: ["CoolSculpting", "Body Contouring", "RF Treatment"],
      adult: ["Body Contouring", "CoolSculpting", "Laser Lipolysis"],
      mature: ["Body Contouring", "PRP for Skin Tightening", "Stem Cell"],
      senior: ["Gentle Body Contouring", "PRP Therapy", "Ayurvedic Massage"],
    },
  };

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });

    if (questionIndex < quizQuestions.length - 1) {
      setTimeout(() => setCurrentStep(questionIndex + 1), 300);
    } else {
      // Generate recommendations
      const primaryConcern = answers[0]?.value;
      const ageRange = answers[1]?.value;
      const skinType = answers[2]?.value;
      const budget = answers[3]?.value;
      const downtime = answers[4]?.value;

      let recs = [];
      if (primaryConcern && ageRange) {
        recs = treatmentRecommendations[primaryConcern]?.[ageRange] || [];
      }

      // Filter based on budget and downtime preferences
      if (budget === "budget") {
        recs = recs.filter((treatment) =>
          [
            "HydraFacial",
            "Chemical Peels",
            "Microdermabrasion",
            "Ayurvedic Treatments",
          ].includes(treatment)
        );
      } else if (budget === "premium") {
        recs = recs.filter(
          (treatment) =>
            !["Stem Cell Treatment", "Hair Transplant"].includes(treatment) ||
            treatment.includes("PRP") ||
            treatment.includes("Laser")
        );
      }

      if (downtime === "minimal") {
        recs = recs.filter((treatment) =>
          [
            "HydraFacial",
            "Botox",
            "Dermal Fillers",
            "PRP Therapy",
            "Ayurvedic Treatments",
          ].includes(treatment)
        );
      }

      setRecommendations(recs.slice(0, 3)); // Top 3 recommendations
      setTimeout(() => setIsCompleted(true), 500);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
    setRecommendations([]);
  };

  if (isCompleted) {
    return (
      <section className="py-32 px-6 bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#001b3d] relative overflow-hidden">
        {/* Background effects */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23efae4c' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6 px-6 py-2 border border-[#efae4c] text-[#efae4c] text-xs font-light tracking-widest rounded-full">
              ✨ YOUR PERSONALIZED RECOMMENDATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Your Perfect Treatment Journey
            </h2>
            <p className="text-lg text-gray-300 font-light tracking-wide">
              Based on your answers, here are our top recommendations for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {recommendations.map((treatment, index) => (
              <motion.div
                key={treatment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-6xl mb-4">💫</div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                  {treatment}
                </h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                  {treatment === "HydraFacial" &&
                    "Deep cleansing and hydration treatment for radiant skin"}
                  {treatment === "Botox" &&
                    "Minimally invasive wrinkle reduction treatment"}
                  {treatment === "PRP Therapy" &&
                    "Natural rejuvenation using your own platelet-rich plasma"}
                  {treatment === "Chemical Peels" &&
                    "Exfoliation treatment for skin renewal"}
                  {treatment === "Laser Resurfacing" &&
                    "Advanced laser technology for skin texture improvement"}
                  {treatment === "Stem Cell Treatment" &&
                    "Cutting-edge regenerative therapy"}
                  {treatment === "Hair Transplant" &&
                    "Permanent solution for hair restoration"}
                  {treatment === "Ayurvedic Treatments" &&
                    "Holistic wellness approach to beauty"}
                  {treatment === "Dermal Fillers" &&
                    "Volume restoration and contour enhancement"}
                  {treatment === "CO2 Laser" &&
                    "Powerful acne scar and wrinkle treatment"}
                  {treatment === "Q-Switched Laser" &&
                    "Pigmentation and tattoo removal specialist"}
                  {treatment === "Thread Lift" &&
                    "Non-surgical facelift with PDO threads"}
                  {treatment === "CoolSculpting" &&
                    "Non-invasive fat reduction treatment"}
                  {treatment === "Body Contouring" &&
                    "Advanced body shaping and toning"}
                  {![
                    "HydraFacial",
                    "Botox",
                    "PRP Therapy",
                    "Chemical Peels",
                    "Laser Resurfacing",
                    "Stem Cell Treatment",
                    "Hair Transplant",
                    "Ayurvedic Treatments",
                    "Dermal Fillers",
                    "CO2 Laser",
                    "Q-Switched Laser",
                    "Thread Lift",
                    "CoolSculpting",
                    "Body Contouring",
                  ].includes(treatment) &&
                    "Premium treatment for your beauty goals"}
                </p>
                <Button
                  type="primary"
                  className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-6 py-2 text-[#001b3d] font-semibold"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <Button
              onClick={resetQuiz}
              className="bg-white/10 hover:bg-white/20 border border-white/30 rounded-full px-8 py-3 text-white font-light tracking-wider mr-4"
            >
              Retake Quiz
            </Button>
            <Button
              type="primary"
              className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-8 py-3 text-[#001b3d] font-semibold"
            >
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  const currentQuestion = quizQuestions[currentStep];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#001b3d] relative overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23efae4c' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6 px-6 py-2 border border-[#efae4c] text-[#efae4c] text-xs font-light tracking-widest rounded-full">
            🤖 AI ASSESSMENT
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Find Your Perfect Treatment
          </h2>
          <p className="text-lg text-gray-300 font-light tracking-wide">
            Answer a few questions and discover personalized recommendations
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-center mb-4">
            {quizQuestions.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${
                  index <= currentStep ? "bg-[#efae4c]" : "bg-white/30"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
          <div className="text-center text-gray-400 text-sm font-light">
            Question {currentStep + 1} of {quizQuestions.length}
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-light text-white text-center mb-12 tracking-wide">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(currentStep, option)}
                className="group bg-white/5 hover:bg-white/15 border border-white/20 hover:border-[#efae4c]/50 rounded-2xl p-6 text-left transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <div className="text-white font-light tracking-wide group-hover:text-[#efae4c] transition-colors">
                  {option.text}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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
// INTERACTIVE BOOKING MODAL - Complete appointment system
// ============================================================================
const BookingModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    service: "",
    date: null,
    time: null,
    consultationType: "in-person",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [form] = Form.useForm();
  const [validationStatus, setValidationStatus] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [fieldProgress, setFieldProgress] = useState({
    name: 0,
    phone: 0,
    email: 0,
  });

  const services = [
    {
      value: "facial",
      label: "Facial Treatment",
      duration: "60 min",
    },
    {
      value: "laser",
      label: "Laser Treatment",
      duration: "45 min",
    },
    {
      value: "hair-restoration",
      label: "Hair Restoration",
      duration: "90 min",
    },
    {
      value: "body-contouring",
      label: "Body Contouring",
      duration: "120 min",
    },
    {
      value: "ayurvedic",
      label: "Ayurvedic Treatment",
      duration: "75 min",
    },
    {
      value: "consultation",
      label: "Free Consultation",
      duration: "30 min",
    },
  ];

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];

  const steps = [
    { title: "Service", description: "Choose treatment" },
    { title: "Schedule", description: "Pick date & time" },
    { title: "Details", description: "Your information" },
    { title: "Confirm", description: "Review & book" },
  ];

  const handleServiceSelect = (service) => {
    setBookingData({ ...bookingData, service });
    setCurrentStep(1);
  };

  const handleDateSelect = (date) => {
    setBookingData({ ...bookingData, date });
  };

  const handleTimeSelect = (time) => {
    setBookingData({ ...bookingData, time });
    setCurrentStep(2);
  };

  const handleFormSubmit = (values) => {
    setBookingData({ ...bookingData, ...values });
    setCurrentStep(3);
  };

  // Enhanced validation functions
  const validateName = (value) => {
    if (!value) {
      setValidationStatus((prev) => ({ ...prev, name: "error" }));
      setFieldProgress((prev) => ({ ...prev, name: 0 }));
      return false;
    }
    if (value.length < 2) {
      setValidationStatus((prev) => ({ ...prev, name: "error" }));
      setFieldProgress((prev) => ({ ...prev, name: 25 }));
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setValidationStatus((prev) => ({ ...prev, name: "error" }));
      setFieldProgress((prev) => ({ ...prev, name: 50 }));
      return false;
    }
    setValidationStatus((prev) => ({ ...prev, name: "success" }));
    setFieldProgress((prev) => ({ ...prev, name: 100 }));
    return true;
  };

  const validatePhone = (value) => {
    if (!value) {
      setValidationStatus((prev) => ({ ...prev, phone: "error" }));
      setFieldProgress((prev) => ({ ...prev, phone: 0 }));
      return false;
    }
    // Remove any spaces, dashes, or parentheses
    const cleanPhone = value.replace(/[\s\-\(\)]/g, "");
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
      setValidationStatus((prev) => ({ ...prev, phone: "error" }));
      setFieldProgress((prev) => ({
        ...prev,
        phone: cleanPhone.length > 0 ? 50 : 0,
      }));
      return false;
    }
    setValidationStatus((prev) => ({ ...prev, phone: "success" }));
    setFieldProgress((prev) => ({ ...prev, phone: 100 }));
    return true;
  };

  const validateEmail = (value) => {
    if (!value) {
      setValidationStatus((prev) => ({ ...prev, email: "error" }));
      setFieldProgress((prev) => ({ ...prev, email: 0 }));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setValidationStatus((prev) => ({ ...prev, email: "error" }));
      setFieldProgress((prev) => ({
        ...prev,
        email: value.includes("@") ? 50 : 25,
      }));
      return false;
    }
    setValidationStatus((prev) => ({ ...prev, email: "success" }));
    setFieldProgress((prev) => ({ ...prev, email: 100 }));
    return true;
  };

  const handleFieldChange = (field, value) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));

    // Real-time validation
    switch (field) {
      case "name":
        validateName(value);
        break;
      case "phone":
        validatePhone(value);
        break;
      case "email":
        validateEmail(value);
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      validateName(bookingData.name) &&
      validatePhone(bookingData.phone) &&
      validateEmail(bookingData.email)
    );
  };

  const handleBookingConfirm = () => {
    // Here you would typically send the booking data to your backend
    message.success({
      content:
        "Appointment booked successfully! You will receive a confirmation email and SMS shortly.",
      duration: 5,
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
    });
    onClose();
    setCurrentStep(0);
    setBookingData({
      service: "",
      date: null,
      time: null,
      consultationType: "in-person",
      name: "",
      phone: "",
      email: "",
      notes: "",
    });
    setValidationStatus({ name: "", phone: "", email: "" });
    setFieldProgress({ name: 0, phone: 0, email: 0 });
    form.resetFields();
  };

  const disabledDate = (current) => {
    // Disable past dates and weekends
    return (
      current &&
      (current < new Date().setHours(0, 0, 0, 0) || current.day() === 0)
    );
  };

  const selectedService = services.find((s) => s.value === bookingData.service);

  return (
    <>
      {/* Trigger Button - Can be placed anywhere */}
      <div style={{ display: "none" }} id="booking-trigger">
        <Button
          type="primary"
          size="large"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
        >
          <CalendarOutlined className="mr-2" />
          Book Appointment
        </Button>
      </div>

      <Modal
        title={
          <div className="text-center py-4">
            <h2 className="text-2xl font-light text-[#001b3d] tracking-wide">
              Book Your Transformation
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Schedule your personalized beauty journey
            </p>
          </div>
        }
        open={isOpen}
        onCancel={() => {
          onClose();
          setCurrentStep(0);
          form.resetFields();
        }}
        footer={null}
        width={800}
        className="booking-modal"
        centered
      >
        <div className="py-6">
          {/* Enhanced Progress Steps */}
          <div className="mb-8">
            <Steps
              current={currentStep}
              items={steps.map((step, index) => ({
                ...step,
                status:
                  index < currentStep
                    ? "finish"
                    : index === currentStep
                    ? "process"
                    : "wait",
                icon: index < currentStep ? <CheckCircleOutlined /> : undefined,
              }))}
              className="mb-4"
            />

            {/* Step Progress Bar */}
            <div className="relative">
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#efae4c] to-[#d89b3e] rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-2 h-2 rounded-full mb-1 ${
                        index <= currentStep ? "bg-[#efae4c]" : "bg-gray-300"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        index <= currentStep
                          ? "text-[#efae4c] font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-light text-[#001b3d] mb-6 text-center">
                Choose Your Treatment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => {
                  const isSelected = bookingData.service === service.value;
                  return (
                    <motion.div
                      key={service.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceSelect(service.value)}
                      className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg relative ${
                        isSelected
                          ? "border-[#efae4c] bg-[#efae4c]/5 shadow-lg"
                          : "border-gray-200 hover:border-[#efae4c]"
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-2 right-2 w-6 h-6 bg-[#efae4c] rounded-full flex items-center justify-center"
                        >
                          <CheckCircleOutlined className="text-white text-xs" />
                        </motion.div>
                      )}

                      <div className="flex justify-between items-start mb-2">
                        <h4
                          className={`font-semibold transition-colors ${
                            isSelected ? "text-[#efae4c]" : "text-[#001b3d]"
                          }`}
                        >
                          {service.label}
                        </h4>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <ClockCircleOutlined />
                          {service.duration}
                        </span>
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 text-xs text-[#efae4c] font-medium"
                        >
                          ✓ Selected for your appointment
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-light text-[#001b3d] mb-2">
                  Select Date & Time
                </h3>
                <p className="text-gray-600 text-sm">
                  {selectedService?.label} • {selectedService?.duration}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <DatePicker
                    disabledDate={disabledDate}
                    onChange={handleDateSelect}
                    className="w-full"
                    size="large"
                    placeholder="Select date"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Type
                  </label>
                  <Radio.Group
                    value={bookingData.consultationType}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        consultationType: e.target.value,
                      })
                    }
                    className="w-full"
                  >
                    <div className="flex flex-col gap-2">
                      <Radio value="in-person" className="text-sm">
                        <span className="flex items-center gap-2">
                          <UserOutlined />
                          In-Person Visit
                        </span>
                      </Radio>
                      <Radio value="virtual" className="text-sm">
                        <span className="flex items-center gap-2">
                          <PlayCircleOutlined />
                          Virtual Consultation
                        </span>
                      </Radio>
                    </div>
                  </Radio.Group>
                </div>
              </div>

              {bookingData.date && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = bookingData.time === time;
                      return (
                        <motion.div
                          key={time}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            onClick={() => handleTimeSelect(time)}
                            className={`w-full transition-all duration-200 ${
                              isSelected
                                ? "bg-[#efae4c] border-[#efae4c] text-white shadow-lg"
                                : "border-gray-300 hover:border-[#efae4c] hover:bg-[#efae4c]/5"
                            } rounded-lg`}
                            size="small"
                          >
                            <span className="flex items-center gap-1">
                              {isSelected && (
                                <CheckCircleOutlined className="text-xs" />
                              )}
                              {time}
                            </span>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>

                  {bookingData.time && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <div className="flex items-center gap-2 text-green-700 text-sm">
                        <CheckCircleOutlined />
                        <span>
                          <strong>
                            {bookingData.date?.format("MMM DD, YYYY")}
                          </strong>{" "}
                          at <strong>{bookingData.time}</strong> -{" "}
                          {bookingData.consultationType === "virtual"
                            ? "Virtual"
                            : "In-Person"}{" "}
                          Consultation
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-light text-[#001b3d] mb-2">
                  Your Information
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll use this to confirm your appointment
                </p>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleFormSubmit}
                className="space-y-6"
              >
                <Form.Item
                  name="name"
                  label={
                    <div className="flex items-center justify-between">
                      <span>Full Name</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[#efae4c] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${fieldProgress.name}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        {fieldProgress.name === 100 && (
                          <CheckCircleOutlined className="text-green-500 text-sm" />
                        )}
                      </div>
                    </div>
                  }
                  validateStatus={validationStatus.name}
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    size="large"
                    placeholder="Enter your full name"
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    className={
                      validationStatus.name === "success"
                        ? "border-green-500"
                        : validationStatus.name === "error"
                        ? "border-red-500"
                        : ""
                    }
                  />
                </Form.Item>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Form.Item
                    name="phone"
                    label={
                      <div className="flex items-center justify-between">
                        <span>Phone Number</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-[#efae4c] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${fieldProgress.phone}%` }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                          {fieldProgress.phone === 100 && (
                            <CheckCircleOutlined className="text-green-500 text-sm" />
                          )}
                        </div>
                      </div>
                    }
                    validateStatus={validationStatus.phone}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <Input
                      prefix={<PhoneOutlined />}
                      size="large"
                      placeholder="+91 XXXXX XXXXX"
                      onChange={(e) =>
                        handleFieldChange("phone", e.target.value)
                      }
                      className={
                        validationStatus.phone === "success"
                          ? "border-green-500"
                          : validationStatus.phone === "error"
                          ? "border-red-500"
                          : ""
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label={
                      <div className="flex items-center justify-between">
                        <span>Email Address</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-[#efae4c] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${fieldProgress.email}%` }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                          {fieldProgress.email === 100 && (
                            <CheckCircleOutlined className="text-green-500 text-sm" />
                          )}
                        </div>
                      </div>
                    }
                    validateStatus={validationStatus.email}
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      size="large"
                      placeholder="your@email.com"
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value)
                      }
                      className={
                        validationStatus.email === "success"
                          ? "border-green-500"
                          : validationStatus.email === "error"
                          ? "border-red-500"
                          : ""
                      }
                    />
                  </Form.Item>
                </div>

                <Form.Item name="notes" label="Special Notes (Optional)">
                  <Input.TextArea
                    rows={3}
                    placeholder="Any specific concerns or preferences..."
                    className="resize-none"
                  />
                </Form.Item>

                {/* Form Progress Indicator */}
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Form Completion
                    </span>
                    <span className="text-sm text-gray-500">
                      {Object.values(fieldProgress).reduce((a, b) => a + b, 0) /
                        3}
                      %
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#efae4c] to-[#d89b3e] rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          Object.values(fieldProgress).reduce(
                            (a, b) => a + b,
                            0
                          ) / 3
                        }%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Name: {fieldProgress.name}%</span>
                    <span>Phone: {fieldProgress.phone}%</span>
                    <span>Email: {fieldProgress.email}%</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1"
                    size="large"
                  >
                    Back
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isFormValid()}
                    className={`flex-1 border-none ${
                      isFormValid()
                        ? "bg-[#efae4c] hover:bg-[#d89b3e]"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    size="large"
                  >
                    {isFormValid() ? (
                      <span className="flex items-center gap-2">
                        <CheckCircleOutlined />
                        Continue to Confirmation
                      </span>
                    ) : (
                      "Complete Form to Continue"
                    )}
                  </Button>
                </div>
              </Form>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleOutlined className="text-2xl text-green-600" />
              </div>

              <h3 className="text-xl font-light text-[#001b3d]">
                Confirm Your Appointment
              </h3>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4 text-left max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{selectedService?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {bookingData.date?.format("MMMM DD, YYYY")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{bookingData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium capitalize">
                    {bookingData.consultationType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">
                    {selectedService?.duration}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-sm text-blue-800">
                  📧 A confirmation email will be sent to{" "}
                  <strong>{bookingData.email}</strong>
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1"
                  size="large"
                >
                  Back
                </Button>
                <Button
                  type="primary"
                  onClick={handleBookingConfirm}
                  className="flex-1 bg-[#efae4c] hover:bg-[#d89b3e] border-none"
                  size="large"
                >
                  Confirm Booking
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </Modal>
    </>
  );
};

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
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBookAppointment = () => {
    setBookingModalOpen(true);
  };

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
        .booking-modal .ant-modal-content {
          border-radius: 20px;
          overflow: hidden;
        }
        .booking-modal .ant-modal-header {
          border-bottom: none;
          padding: 0;
        }
        .booking-modal .ant-modal-body {
          padding: 0;
        }
        .booking-modal .ant-modal-footer {
          border-top: none;
          padding: 0;
        }
      `}</style>
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
      <Navbar onBookAppointment={handleBookAppointment} />
      <HeroSection onBookAppointment={handleBookAppointment} />
      <CategorySection />
      <TrustMetrics />
      <TreatmentQuiz />
      <CoreServices />
      <TestimonialCarousel />
      <ReviewSystem />
      <Footer />
    </div>
  );
};

export default App;
