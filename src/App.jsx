import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
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
import TreatmentDetailPage from "./pages/treatments/TreatmentDetailPage";
import ServiceDetailPage from "./pages/services/ServiceDetailPage";
import AIAssessmentPage from "./pages/AIAssessmentPage";

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
          {/* <motion.div
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
          </motion.div> */}

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
              onClick={() => {
                const section = document.getElementById("treatments-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
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
  // Mapping of treatment names to their service IDs for routing
  const getTreatmentServiceId = (treatmentName, categoryTitle) => {
    const treatmentToServiceMap = {
      // Hair treatments
      QR678: "qr678-treatment",
      "Hair Growth Boosters": "hair-growth-boosters",
      GFC: "gfc-therapy",
      Exames: "specialized-hair-exams",
      "Scalp Peel": "scalp-peel-treatment",

      // Skin treatments
      "Acne scars": "acne-scar-treatment",
      Xanthelasma: "xanthelasma-removal",
      "Skin infections": "skin-infections-treatment",
      Melasma: "melasma-treatment",
      "Mole Surgery": "mole-surgery",
      "Skin Tag": "skin-tag-removal",
      "Laser for Moles": "laser-mole-treatment",
      "Cautery for warts": "wart-cautery",
      "Dermapen Treatment": "dermapen-skin-treatment",
      "Stretch Marks": "stretch-marks-treatment",

      // Acne and Scars treatments
      "Acne Chemical Peels": "acne-peels",
      "Advanced Acne Therapy": "advanced-acne-treatments",
      "Carbon Laser Peels": "carbon-peels",
      "Professional Chemical Peels": "chemical-peels-acne",
      "Dermarolling Treatment": "derma-roller-acne",
      "Fractional CO2 Laser": "fractional-laser-acne",
      "RF Microneedling": "radiofrequency-microneedling",
      "Acne Deep Cleansing Facial": "acne-cleanup-facial",
      "Freckle Laser Treatment": "laser-freckles-treatment",
      "RF Microneedling for Scars": "microneedling-radiofrequency-stretch-marks",

      // Under Eyes treatments
      "Dark Circle Reduction": "dark-circles-removal",
      "Under Eye Rejuvenation": "under-eye-rejuvenation",
      "Dermal Fillers for Eyes": "under-eye-boosters",

      // Pigmentation treatments
      "Freckle Treatment": "freckle-treatment",
      "Depigmentation Peels": "depigmentation-peels",
      "Cosmelan Depigmentation": "cosmelan-depigmentation",
      "Glow Brightening Peel": "glow-brightening-peel",
      "Dermapen for Pigmentation": "dermapen-for-pigmentation",
      "PRP Vampire Facial": "prp-vampire-facial",
      "HydraFacial Basic": "hydrafacial-basic",
      "HydraFacial Elite": "hydrafacial-elite",
      "Skin Brightening Boosters": "skin-boosters-pigmentation",

      // Medifacial treatments
      "Diamond Microdermabrasion": "diamond-polishing",
      "Oxygen Facials": "oxy-facials",
      "Oxyglow Facial": "oxyglow-treatment",
      "InstaBright Treatment": "instabright-rejuvenation",
      "Powerlift Medical Facial": "powerlift-medifacial",
      "Power Glow Facial": "power-glow-facial",
      "IV Vitamin Infusions": "iv-infusions-glow",

      // Anti Aging treatments
      "Wrinkle Reduction Therapy": "wrinkles-treatment",
      "Anti-Aging Chemical Peels": "anti-aging-peels",
      "Collagen Induction Therapy": "collagen-boosters",
      "Skin Tightening Procedures": "skin-tightening-treatment",

      // Laser treatments
      "Full Body Laser Hair Removal": "laser-hair-removal",
      "Female Hair Reduction": "laser-hair-reduction-females",
      "Male Hair Reduction": "laser-hair-reduction-males",
      "Targeted Hair Removal": "laser-hair-removal",
      "Arm Hair Laser Treatment": "laser-hair-removal",
      "Leg Hair Laser Treatment": "laser-hair-removal",
      "Excessive Hair Growth Treatment": "laser-hair-removal",
      "Bikini Area Laser": "laser-hair-removal",
      "Facial Hair Laser": "laser-hair-removal",
      "Underarm Laser Treatment": "laser-hair-removal",
      "Birthmark Laser Removal": "birthmark-removal",
      "Professional Tattoo Removal": "tattoo-removal",
      "Laser Mole Removal": "laser-mole-removal",
      "Wart Laser Treatment": "wart-removal-laser",

      // Body Contouring treatments
      "Medical Weight Loss Program": "weight-loss-treatments",
      "Cellulite Reduction Therapy": "cellulite-treatment",
      "Cryolipolysis (CoolSculpting)": "cryolipolysis-treatment",
      "Body Shaping Treatments": "body-shaping-treatment",
      "Targeted Fat Reduction": "fat-reduction-treatment",
    };

    return treatmentToServiceMap[treatmentName] || treatmentName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

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

          <div className="">
            <div>
              <h4 className="font-semibold text-[#001b3d] mb-3 flex items-center gap-2">
                <span className="text-[#efae4c]">✨</span> Key Benefits
              </h4>
              <ul className="space-y-1 text-gray-600 grid grid-cols-2">
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
                <Link
                  key={idx}
                  to={`/service/${getTreatmentServiceId(treatment, title)}`}
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700 border border-gray-100 hover:border-[#efae4c] transition-colors cursor-pointer"
                  >
                    {treatment}
                  </motion.div>
                </Link>
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
    <section id="treatments-section" className="py-32 px-6 bg-gray-50">
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
    fdaApprMach: 0,
  });

  useEffect(() => {
    const targets = {
      years: 15,
      clients: 15000,
      satisfaction: 98,
      fdaApprMach: 100,
    };
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
        fdaApprMach: Math.floor(targets.fdaApprMach * progress),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "CERTIFIED SPECIALISTS", value: counters.years + "+" },
    {
      label: "WELLNESS SESSIONS CONDUCTED",
      value: counters.clients.toLocaleString() + "+",
    },
    { label: "SATISFACTION RATE", value: counters.satisfaction + "%" },
    { label: "FDA APPROVED MACHINES", value: counters.fdaApprMach + "%" },
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
const TreatmentQuiz = ({ onBookAppointment }) => {
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
      question: "What's your preferred treatment level?",
      options: [
        {
          text: "Essential Care",
          value: "budget",
          icon: "💰",
          description:
            "Basic, effective treatments focusing on essential skin/hair care. Includes fundamental procedures like basic facials, simple peels, and standard laser sessions. Perfect for maintenance and first-time clients seeking affordable solutions.",
        },
        {
          text: "Premium Experience",
          value: "premium",
          icon: "💎",
          description:
            "Advanced treatments using premium products and techniques. Features medical-grade procedures, specialized therapies, and combination treatments. Ideal for clients wanting noticeable improvements with professional-grade results.",
        },
        {
          text: "Luxury Treatments",
          value: "luxury",
          icon: "👑",
          description:
            "Comprehensive, high-end wellness experiences combining multiple advanced therapies. Includes VIP consultations, personalized treatment plans, premium recovery protocols, and exclusive aftercare. Designed for maximum transformation and ultimate pampering.",
        },
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
      young: [
        "HydraFacial",
        "Chemical Peels",
        "Anti-aging Peels",
        "Collagen Boosters",
      ],
      adult: [
        "Botox",
        "Dermal Fillers",
        "Laser Resurfacing",
        "Skin Tightening",
      ],
      mature: [
        "Thread Lift",
        "PRP Therapy",
        "Stem Cell Treatment",
        "Wrinkles Treatment",
      ],
      senior: ["PRP Therapy", "Stem Cell Treatment", "Ayurvedic Rejuvenation"],
    },
    acne: {
      young: [
        "Acne Peels",
        "Advanced Acne Treatments",
        "Chemical Peels",
        "Acne Cleanup Facial",
      ],
      adult: [
        "Carbon Peels",
        "Fractional Laser",
        "Radiofrequency Microneedling",
        "Laser for Freckles",
      ],
      mature: [
        "PRP Therapy",
        "Laser Resurfacing",
        "Ayurvedic Treatments",
        "Derma roller",
      ],
      senior: [
        "Gentle Laser",
        "Ayurvedic Healing",
        "PRP Therapy",
        "Microneedling Radiofrequency for stretch Marks",
      ],
    },
    pigmentation: {
      young: [
        "Freckles",
        "Depigmentation Peels",
        "Chemical Peels",
        "Laser Toning",
      ],
      adult: [
        "Cosmelan",
        "Glow Peel",
        "Dermapen 4 for Pigmentation",
        "Q-Switched Laser",
      ],
      mature: [
        "Vampire Facial",
        "Laser Toning",
        "PRP Therapy",
        "Stem Cell Treatment",
      ],
      senior: [
        "Hydrafacial Basic",
        "HydraFacial Elite",
        "Gentle Laser",
        "Ayurvedic Brightening",
      ],
    },
    dryness: {
      young: [
        "HydraFacial",
        "Microdermabrasion",
        "Chemical Peels",
        "Skin Boosters",
      ],
      adult: [
        "PRP Therapy",
        "Stem Cell Treatment",
        "Laser Resurfacing",
        "Diamond Polishing",
      ],
      mature: [
        "PRP Therapy",
        "Stem Cell Treatment",
        "Ayurvedic Oils",
        "OxyFacials",
      ],
      senior: ["PRP Therapy", "Ayurvedic Treatments", "Stem Cell", "Oxyglow"],
    },
    hair: {
      young: ["QR678", "Hair Growth Boosters", "GFC", "Scalp Peel"],
      adult: [
        "Hair Transplant",
        "PRP Therapy",
        "Stem Cell Treatment",
        "Exames",
      ],
      mature: [
        "Hair Transplant",
        "PRP Therapy",
        "Stem Cell Treatment",
        "Scalp Peel",
      ],
      senior: [
        "PRP Therapy",
        "Stem Cell Treatment",
        "Ayurvedic Hair Care",
        "Hair Growth Boosters",
      ],
    },
    body: {
      young: [
        "CoolSculpting",
        "Body Contouring",
        "Laser Lipolysis",
        "Weight Loss Treatments",
      ],
      adult: [
        "Body Contouring",
        "CoolSculpting",
        "Laser Lipolysis",
        "Cellulite Treatment",
      ],
      mature: [
        "Body Contouring",
        "PRP for Skin Tightening",
        "Stem Cell",
        "Cryolipolysis",
      ],
      senior: [
        "Gentle Body Contouring",
        "PRP Therapy",
        "Ayurvedic Massage",
        "Body Shaping",
      ],
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
      const budget = answers[2]?.value;
      const downtime = answers[3]?.value;

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
            "Acne Peels",
            "Freckles",
            "Depigmentation Peels",
            "Scalp Peel",
            "QR678",
            "Hair Growth Boosters",
            "GFC",
            "Exames",
            "Weight Loss Treatments",
          ].includes(treatment)
        );
      } else if (budget === "premium") {
        recs = recs.filter(
          (treatment) =>
            ![
              "Stem Cell Treatment",
              "Hair Transplant",
              "CoolSculpting",
              "Cryolipolysis",
            ].includes(treatment) ||
            treatment.includes("PRP") ||
            treatment.includes("Laser") ||
            treatment.includes("Fractional") ||
            treatment.includes("Radiofrequency")
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
            "Chemical Peels",
            "Laser for Freckles",
            "Scalp Peel",
            "QR678",
            "Hair Growth Boosters",
            "GFC",
            "Exames",
            "Freckles",
            "Depigmentation Peels",
            "Acne Peels",
            "Acne Cleanup Facial",
            "Diamond Polishing",
            "OxyFacials",
            "Oxyglow",
            "Skin Boosters",
            "Under Eye Boosters",
            "Dark Circles Removal",
            "Under Eye Rejuvenation",
          ].includes(treatment)
        );
      }

      setRecommendations(recs.slice(0, 3)); // Top 3 recommendations
      setTimeout(() => setIsCompleted(true), 500);
    }
  };

  // Mapping quiz result treatment names to service pages
  const getQuizResultServiceLink = (treatmentName) => {
    const quizToServiceMap = {
      // Direct service mappings
      "HydraFacial": "/service/hydrafacial-basic",
      "Botox": "/treatment/anti-aging", // No specific Botox page, link to category
      "PRP Therapy": "/service/prp-vampire-facial",
      "Chemical Peels": "/service/chemical-peels-acne",
      "Laser Resurfacing": "/service/fractional-laser-acne",
      "Stem Cell Treatment": "/treatment/anti-aging", // Link to category
      "Hair Transplant": "/treatment/hair", // Link to category
      "Ayurvedic Treatments": "/treatment/medifacial", // Link to category
      "Dermal Fillers": "/treatment/anti-aging", // Link to category
      "CO2 Laser": "/service/fractional-laser-acne",
      "Q-Switched Laser": "/service/laser-freckles-treatment",
      "Thread Lift": "/treatment/anti-aging", // Link to category
      "CoolSculpting": "/service/cryolipolysis-treatment",
      "Body Contouring": "/treatment/body-contouring",

      // Acne treatments
      "Acne Peels": "/service/acne-peels",
      "Advanced Acne Treatments": "/service/advanced-acne-treatments",
      "Carbon Peels": "/service/carbon-peels",
      "Fractional Laser": "/service/fractional-laser-acne",
      "Radiofrequency Microneedling": "/service/radiofrequency-microneedling",
      "Laser for Freckles": "/service/laser-freckles-treatment",
      "Acne Cleanup Facial": "/service/acne-cleanup-facial",
      "Derma roller": "/service/derma-roller-acne",
      "Microneedling Radiofrequency for stretch Marks": "/service/microneedling-radiofrequency-stretch-marks",

      // Pigmentation treatments
      "Freckles": "/service/freckle-treatment",
      "Depigmentation Peels": "/service/depigmentation-peels",
      "Cosmelan": "/service/cosmelan-depigmentation",
      "Glow Peel": "/service/glow-brightening-peel",
      "Dermapen 4 for Pigmentation": "/service/dermapen-for-pigmentation",
      "Vampire Facial": "/service/prp-vampire-facial",
      "Hydrafacial Basic": "/service/hydrafacial-basic",
      "HydraFacial Elite": "/service/hydrafacial-elite",

      // Anti-aging treatments
      "Anti-aging Peels": "/service/anti-aging-peels",
      "Collagen Boosters": "/service/collagen-boosters",
      "Skin Tightening": "/service/skin-tightening-treatment",
      "Wrinkles Treatment": "/service/wrinkles-treatment",

      // Hair treatments
      "QR678": "/service/qr678-treatment",
      "Hair Growth Boosters": "/service/hair-growth-boosters",

      // Laser treatments
      "Laser Hair Removal": "/service/laser-hair-removal",
      "Tattoo Removal": "/service/tattoo-removal",

      // Body contouring
      "Weight Loss Treatments": "/service/weight-loss-treatments",
      "Cellulite Treatment": "/service/cellulite-treatment",
      "Fat Reduction": "/service/fat-reduction-treatment",
    };

    return quizToServiceMap[treatmentName] || "/"; // Fallback to home if no mapping found
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
                <Link to={getQuizResultServiceLink(treatment)}>
                  <Button
                    type="primary"
                    className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-6 py-2 text-[#001b3d] font-semibold"
                  >
                    Learn More
                  </Button>
                </Link>
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
              onClick={onBookAppointment}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Link to="/ai-assessment">
              <Button
                type="primary"
                className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-8 py-3 text-[#001b3d] font-semibold"
              >
                Learn More <ArrowRightOutlined className="ml-2 text-sm" />
              </Button>
            </Link>
          </motion.div>
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
                {option.description && (
                  <div className="text-white/70 text-sm mt-3 leading-relaxed group-hover:text-white/90 transition-colors">
                    {option.description}
                  </div>
                )}
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
    category: "",
    treatment: "",
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

  // Booking categories and their treatments
  const bookingCategories = [
    {
      value: "hair",
      label: "Hair",
      description: "Hair fall, thinning, dandruff & scalp concerns",
      treatments: ["QR678", "Hair Growth Boosters", "GFC", "Exames", "Scalp Peel"],
    },
    {
      value: "skin",
      label: "Skin",
      description: "Pigmentation, infections, moles, tags & overall skin health",
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
    },
    {
      value: "acne-scars",
      label: "Acne & Scars",
      description: "Active acne, old marks and scar correction",
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
    },
    {
      value: "under-eye",
      label: "Under Eyes",
      description: "Dark circles, hollowness and tired-looking eyes",
      treatments: [
        "Dark Circles Removal",
        "Under Eye Rejuvenation",
        "Under Eye Boosters",
      ],
    },
    {
      value: "pigmentation",
      label: "Pigmentation",
      description: "Uneven tone, spots, freckles & melasma",
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
    },
    {
      value: "medifacial",
      label: "MediFacials",
      description: "Glow, hydration and instant event-ready skin",
      treatments: [
        "Diamond Polishing",
        "OxyFacials",
        "Oxyglow",
        "InstaBright Rejuvenation",
        "Powerlift Medifacial",
        "Power Glow Facial",
        "IV Infusions for glow",
      ],
    },
    {
      value: "anti-aging",
      label: "Anti‑Aging",
      description: "Lines, wrinkles, sagging and skin tightening",
      treatments: [
        "Wrinkles Treatment",
        "Anti-aging Peels",
        "Collagen Boosters",
        "Skin Tightening",
      ],
    },
    {
      value: "laser",
      label: "Laser",
      description: "Laser hair reduction & other laser based treatments",
      treatments: [
        "Laser Hair Removal",
        "Laser Hair Reduction for Females",
        "Laser Hair Reduction for Males",
        "Birthmark removal",
        "Tattoo Removal",
        "Mole removal",
        "Wart Removal",
      ],
    },
    {
      value: "body-contouring",
      label: "Body Contouring",
      description: "Shaping, inch loss and stubborn fat pockets",
      treatments: [
        "Weight Loss Treatments",
        "Cellulite Treatment",
        "Cryolipolysis",
        "Body Shaping",
        "Fat Reduction",
      ],
    },
  ];

  const steps = [
    { title: "Category", description: "Choose concern area" },
    { title: "Treatment", description: "Select treatment" },
    { title: "Details", description: "Share contact details" },
  ];

  const handleCategorySelect = (category) => {
    setBookingData({ ...bookingData, category, treatment: "" });
    setCurrentStep(1);
  };

  const handleTreatmentSelect = (treatment) => {
    setBookingData({ ...bookingData, treatment });
    setCurrentStep(2);
  };

  const handleFormSubmit = (values) => {
    const finalData = { ...bookingData, ...values };
    setBookingData(finalData);

    // Here you would typically send the booking data to your backend
    message.success({
      content:
        "Thank you! Our team will reach out shortly to confirm your consultation.",
      duration: 5,
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
    });

    onClose();
    setCurrentStep(0);
    setBookingData({
      category: "",
      treatment: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
    });
    setValidationStatus({ name: "", phone: "", email: "" });
    setFieldProgress({ name: 0, phone: 0, email: 0 });
    form.resetFields();
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
      case "name": {
        validateName(value);
        break;
      }
      case "phone": {
        validatePhone(value);
        break;
      }
      case "email": {
        validateEmail(value);
        break;
      }
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      bookingData.name &&
      bookingData.phone &&
      bookingData.email &&
      validationStatus.name === "success" &&
      validationStatus.phone === "success" &&
      validationStatus.email === "success"
    );
  };

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
        width={900}
        className="booking-modal"
        centered
      >
        <div className="py-4">
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

          {/* Step 1: Category Selection */}
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-light text-[#001b3d] mb-6 text-center">
                Choose Your Category
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {bookingCategories.map((category) => {
                  const isSelected = bookingData.category === category.value;
                  return (
                    <motion.div
                      key={category.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCategorySelect(category.value)}
                      className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg relative ${
                        isSelected
                          ? "border-[#efae4c] bg-[#efae4c]/5 shadow-lg"
                          : "border-gray-200 hover:border-[#efae4c]"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4
                          className={`font-semibold transition-colors ${
                            isSelected ? "text-[#efae4c]" : "text-[#001b3d]"
                          }`}
                        >
                          {category.label}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {category.description}
                      </p>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 text-xs text-[#efae4c] font-medium text-right"
                        >
                          Selected
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Treatment Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-light text-[#001b3d] mb-2">
                  Select Treatment
                </h3>
                <p className="text-gray-600 text-sm">
                  Based on your chosen category, pick the treatment you're most
                  interested in.
                </p>
              </div>

              {bookingData.category ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Treatments
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {bookingCategories
                      .find((c) => c.value === bookingData.category)
                      ?.treatments.map((treatment) => {
                        const isSelected = bookingData.treatment === treatment;
                      return (
                        <motion.div
                          key={treatment}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            onClick={() => handleTreatmentSelect(treatment)}
                            className={`w-full text-left transition-all duration-200 ${
                              isSelected
                                ? "bg-[#efae4c]/10 border-[#efae4c] text-[#001b3d] shadow-sm"
                                : "border-gray-200 hover:border-[#efae4c] hover:bg-[#efae4c]/5"
                            } rounded-lg px-3 py-2 text-sm`}
                            size="middle"
                          >
                            <span className="block truncate">{treatment}</span>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-700">
                  Please select a category first.
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setCurrentStep(0)}
                  className="flex-1"
                  size="large"
                >
                  Back
                </Button>
                <Button
                  type="primary"
                  disabled={!bookingData.treatment}
                  onClick={() => bookingData.treatment && setCurrentStep(2)}
                  className={`flex-1 border-none ${
                    bookingData.treatment
                      ? "bg-[#efae4c] hover:bg-[#d89b3e]"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  size="large"
                >
                  Continue
                </Button>
              </div>
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
                className="space-y-4"
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
                        Submit Request
                      </span>
                    ) : (
                      "Complete Form to Submit"
                    )}
                  </Button>
                </div>
              </Form>
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
// FAQs SECTION - Interactive flip cards
// ============================================================================
const FAQsSection = () => {
  const faqs = [
    {
      question: "Are the treatments safe and FDA approved?",
      answer:
        "Yes, all our treatments are performed using FDA-approved equipment and techniques. Our medical professionals ensure the highest safety standards are maintained throughout your treatment journey.",
    },
    {
      question: "How long do the results typically last?",
      answer:
        "Results vary depending on the treatment and individual factors. Most aesthetic treatments provide results lasting 6-18 months, while some surgical procedures offer permanent results. We'll discuss realistic expectations during your consultation.",
    },
    {
      question: "What is the recovery time for treatments?",
      answer:
        "Recovery time depends on the specific treatment. Non-invasive procedures like Botox typically require minimal downtime (1-2 days), while more comprehensive treatments may need 1-2 weeks for full recovery. We'll provide detailed aftercare instructions.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible financing options and payment plans to make treatments accessible. We accept major credit cards, and our team can help you explore financing solutions that fit your budget.",
    },
    {
      question: "What should I expect during my first consultation?",
      answer:
        "Your first consultation includes a comprehensive assessment of your concerns, medical history review, and personalized treatment recommendations. We'll discuss your goals, answer questions, and create a customized treatment plan.",
    },
    {
      question: "Are there any age restrictions for treatments?",
      answer:
        "Most treatments are suitable for adults 18 and older. Some procedures may have different age guidelines based on individual circumstances. We'll assess your eligibility during the consultation and recommend the most appropriate treatments.",
    },
    {
      question: "How do I know which treatment is right for me?",
      answer:
        "You don’t need to decide on your own. During your consultation, our experts will assess your concerns, skin or hair type, lifestyle, and goals, then recommend a customized treatment plan that suits you best.",
    },
    {
      question: "Do I need to stop my current skincare or medications before treatment?",
      answer:
        "In some cases, we may ask you to pause certain products or medications, such as retinoids or blood thinners, before a procedure. Our doctor will review your current routine and medical history and give you clear pre-treatment instructions.",
    },
    {
      question: "How soon will I see results after my treatment?",
      answer:
        "Some treatments show visible improvement immediately or within a few days, while others work gradually over several weeks as your skin or hair regenerates. During your consultation, we’ll explain the expected timeline and how many sessions you may need.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-light text-[#001b3d] mb-4 tracking-wide"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Find answers to common questions about our treatments and services
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group h-64 [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#efae4c]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#efae4c] text-xl font-bold">?</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#001b3d] leading-tight">
                    {faq.question}
                  </h3>
                  <div className="mt-4 text-[#efae4c] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Hover to reveal answer →
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#001b3d] to-[#002952] rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center text-white">
                  <div className="w-12 h-12 bg-[#efae4c]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#efae4c] text-xl font-bold">✓</span>
                  </div>
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                  <div className="mt-4 text-[#efae4c] text-sm font-medium">
                    ← Back to question
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// GET IN TOUCH SECTION - Callback form
// ============================================================================
const GetInTouchSection = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);

    // Here you would normally send data to your backend / CRM
    setTimeout(() => {
      message.success(
        "Thank you! Our team will call you back shortly to discuss your concerns."
      );
      form.resetFields();
      setSubmitting(false);
    }, 800);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#001b3d]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
            Get in touch
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Share your details and our clinic team will call you back to guide
            you on the right treatments for your concerns.
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Quick call-back from our care team</li>
            <li>Help choosing the right category and treatments</li>
            <li>No obligation – just honest guidance</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-xl font-semibold text-[#001b3d] mb-4">
            Request a call back
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Fill in your basic details and select the category you are
            interested in.
          </p>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your full name" size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: "Please enter your phone" }]}
            >
              <Input placeholder="+91 XXXXX XXXXX" size="large" />
            </Form.Item>

            <Form.Item
              name="category"
              label="Service category you’re interested in"
              rules={[
                { required: true, message: "Please select a service category" },
              ]}
            >
              <Select
                placeholder="Select a category"
                size="large"
                options={[
                  { value: "hair", label: "Hair" },
                  { value: "skin", label: "Skin" },
                  { value: "acne-scars", label: "Acne & Scars" },
                  { value: "under-eye", label: "Under Eye" },
                  { value: "pigmentation", label: "Pigmentation" },
                  { value: "medifacial", label: "Medifacial" },
                  { value: "anti-aging", label: "Anti-aging" },
                  { value: "laser", label: "Laser" },
                  { value: "body-contouring", label: "Body Contouring" },
                  { value: "other", label: "Not sure / Other" },
                ]}
              />
            </Form.Item>

            <Form.Item name="notes" label="Any specific concern (optional)">
              <Input.TextArea
                rows={3}
                placeholder="Tell us briefly what you’d like help with..."
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              className="w-full bg-[#efae4c] hover:bg-[#d89b3e] border-none h-12 font-semibold text-[#001b3d] mt-2"
              size="large"
            >
              Request call back
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// CONTACT SECTION - Map and clinic details
// ============================================================================
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-200 h-full min-h-[320px]">
          <iframe
            title="Elaria Esthetique Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610193525!2d72.772987!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU2LjAiTiA3MsKwNDYnMzIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className="pointer-events-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#001b3d] mb-4 tracking-wide">
            Contact us
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our centre or reach out to us directly for appointments,
            queries, and support.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">Clinic address</h3>
              <p className="text-sm leading-relaxed">
                Elaria Esthetique
                <br />
                123 Wellness Avenue, 2nd Floor
                <br />
                Bandra (W), Mumbai, Maharashtra 400050
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">Call us</h3>
              <p className="text-sm">
                Phone: <a href="tel:+919999999999">+91 99999 99999</a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">Email</h3>
              <p className="text-sm">
                <a href="mailto:care@elariaesthetique.com">
                  care@elariaesthetique.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#001b3d] mb-1">Clinic hours</h3>
              <p className="text-sm">
                Monday – Saturday: 10:00 AM to 8:00 PM
                <br />
                Sunday: By prior appointment only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SCROLL TO TOP COMPONENT
// ============================================================================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================
const HomePage = ({ onBookAppointment }) => {
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
      <Navbar onBookAppointment={onBookAppointment} />
      <HeroSection onBookAppointment={onBookAppointment} />
      <CategorySection />
      <TrustMetrics />
      <TreatmentQuiz onBookAppointment={onBookAppointment} />
      <CoreServices />
      <TestimonialCarousel />
      <ReviewSystem />
      {/* Get in Touch & Contact Sections */}
      <GetInTouchSection />
      <ContactSection />
      <FAQsSection />
      <Footer />
    </div>
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
    <>
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

      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<HomePage onBookAppointment={handleBookAppointment} />}
        />
        <Route
          path="/treatment/:treatmentId"
          element={
            <TreatmentDetailPage onBookAppointment={handleBookAppointment} />
          }
        />
        <Route
          path="/service/:serviceId"
          element={
            <ServiceDetailPage onBookAppointment={handleBookAppointment} />
          }
        />
        <Route
          path="/ai-assessment"
          element={
            <AIAssessmentPage onBookAppointment={handleBookAppointment} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
