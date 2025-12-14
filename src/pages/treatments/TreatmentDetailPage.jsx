import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Card, Col, Row } from "antd";
import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  StarFilled,
  PhoneOutlined,
} from "@ant-design/icons";
import Navbar from "../../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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

// Treatment data - same as in Services.jsx but expanded
const TREATMENT_DATA = {
  hair: {
    title: "Hair Treatments",
    description:
      "Comprehensive hair care solutions including QR678, Hair Growth Boosters, GFC, Scalp Peel, and specialized exams for optimal hair health.",
    icon: "hair",
    duration: "30-60 mins",
    benefits: [
      "Stimulates hair growth",
      "Strengthens follicles",
      "Prevents hair loss",
      "Improves scalp health",
      "Restores hair vitality",
    ],
    subServices: [
      {
        name: "QR678 Treatment",
        description:
          "Advanced peptide therapy that stimulates hair follicles and promotes natural hair growth cycles.",
      },
      {
        name: "Hair Growth Boosters",
        description:
          "Nutrient-rich formulations designed to accelerate hair growth and improve hair density.",
      },
      {
        name: "GFC Therapy",
        description:
          "Growth Factor Concentrate treatment that rejuvenates hair follicles and strengthens hair roots.",
      },
      {
        name: "Specialized Hair Exams",
        description:
          "Comprehensive scalp analysis and hair health assessment to identify underlying causes.",
      },
      {
        name: "Scalp Peel Treatment",
        description:
          "Medical-grade exfoliation treatment that removes buildup and promotes healthy scalp environment.",
      },
    ],
    rating: 4.8,
    reviews: 245,
  },
  skin: {
    title: "Skin Treatments",
    description:
      "Advanced solutions for acne scars, xanthelasma, skin infections, melasma, mole surgery, skin tags, and comprehensive skin rejuvenation.",
    icon: "skin",
    duration: "45-90 mins",
    benefits: [
      "Treats skin imperfections",
      "Reduces scars and marks",
      "Improves skin texture",
      "Enhances skin health",
      "Restores natural glow",
    ],
    subServices: [
      {
        name: "Acne Scar Treatment",
        description:
          "Advanced scar revision techniques including laser therapy, chemical peels, and microneedling to reduce acne scarring.",
      },
      {
        name: "Xanthelasma Removal",
        description:
          "Safe and effective removal of cholesterol deposits around the eyes using advanced surgical techniques.",
      },
      {
        name: "Skin Infection Treatment",
        description:
          "Comprehensive treatment for bacterial, fungal, and viral skin infections with appropriate medical interventions.",
      },
      {
        name: "Melasma Therapy",
        description:
          "Targeted treatment for hormonal pigmentation using combination therapies including peels and laser treatments.",
      },
      {
        name: "Mole Surgery",
        description:
          "Precise surgical removal of moles with minimal scarring using advanced excision techniques.",
      },
      {
        name: "Skin Tag Removal",
        description:
          "Quick and painless removal of skin tags using cryotherapy, electrocautery, or surgical excision.",
      },
      {
        name: "Laser Mole Treatment",
        description:
          "Non-surgical laser treatment for mole removal with precise targeting and minimal downtime.",
      },
      {
        name: "Wart Cautery",
        description:
          "Electrocautery treatment for wart removal ensuring complete eradication and preventing recurrence.",
      },
      {
        name: "Dermapen Treatment",
        description:
          "Microneedling therapy that stimulates collagen production and improves skin texture and tone.",
      },
      {
        name: "Stretch Mark Reduction",
        description:
          "Advanced treatments including laser therapy and topical solutions to minimize the appearance of stretch marks.",
      },
    ],
    rating: 4.9,
    reviews: 312,
  },
  "acne-scars": {
    title: "Acne & Scars",
    description:
      "Specialized treatments for acne and scar reduction including peels, lasers, microneedling, and advanced therapies.",
    icon: "skin",
    duration: "45-90 mins",
    benefits: [
      "Reduces acne breakouts",
      "Minimizes scar appearance",
      "Controls oil production",
      "Improves skin clarity",
      "Prevents future acne",
    ],
    subServices: [
      {
        name: "Acne Chemical Peels",
        description:
          "Medical-grade chemical exfoliation that unclogs pores, reduces inflammation, and prevents future breakouts.",
      },
      {
        name: "Advanced Acne Therapy",
        description:
          "Comprehensive acne treatment combining topical medications, oral antibiotics, and advanced procedures.",
      },
      {
        name: "Carbon Laser Peels",
        description:
          "Q-switched laser treatment combined with carbon mask for deep cleansing and pore reduction.",
      },
      {
        name: "Professional Chemical Peels",
        description:
          "Customized acid peels (salicylic, glycolic, TCA) for acne control and skin renewal.",
      },
      {
        name: "Dermarolling Treatment",
        description:
          "Microneedling procedure that creates micro-channels to enhance product absorption and collagen production.",
      },
      {
        name: "Fractional CO2 Laser",
        description:
          "Advanced laser resurfacing that targets acne scars and promotes new collagen formation.",
      },
      {
        name: "RF Microneedling",
        description:
          "Radiofrequency energy combined with microneedling for scar reduction and skin tightening.",
      },
      {
        name: "Acne Deep Cleansing Facial",
        description:
          "Therapeutic facial treatment focusing on extraction, anti-inflammatory products, and calming masks.",
      },
      {
        name: "Freckle Laser Treatment",
        description:
          "Precision laser therapy to reduce or eliminate freckles and pigmentation spots.",
      },
      {
        name: "RF Microneedling for Scars",
        description:
          "Specialized treatment combining radiofrequency and microneedling specifically for stretch mark reduction.",
      },
    ],
    rating: 4.7,
    reviews: 198,
  },
  "under-eye": {
    title: "Under Eye Services",
    description:
      "Targeted treatments to reduce dark circles, rejuvenate delicate under-eye area, and restore youthful appearance.",
    icon: "skin",
    duration: "30-45 mins",
    benefits: [
      "Reduces dark circles",
      "Minimizes puffiness",
      "Hydrates delicate skin",
      "Brightens under-eye area",
      "Restores youthful look",
    ],
    subServices: [
      {
        name: "Dark Circle Reduction",
        description:
          "Comprehensive treatment addressing pigmentation, vascular issues, and volume loss around the eyes.",
      },
      {
        name: "Under Eye Rejuvenation",
        description:
          "Complete eye area treatment including skin tightening, wrinkle reduction, and brightness enhancement.",
      },
      {
        name: "Dermal Fillers for Eyes",
        description:
          "Hyaluronic acid fillers to restore volume, reduce hollowing, and smooth fine lines around the eyes.",
      },
    ],
    rating: 4.6,
    reviews: 156,
  },
  pigmentation: {
    title: "Pigmentation Solutions",
    description:
      "Comprehensive pigmentation treatments including freckles, depigmentation, and advanced facial therapies.",
    icon: "skin",
    duration: "45-75 mins",
    benefits: [
      "Reduces pigmentation",
      "Evens skin tone",
      "Treats freckles and spots",
      "Improves skin brightness",
      "Restores natural complexion",
    ],
    subServices: [
      {
        name: "Freckle Treatment",
        description:
          "Advanced laser and chemical treatments to reduce or eliminate freckles and sun spots.",
      },
      {
        name: "Depigmentation Peels",
        description:
          "Medical-grade chemical peels designed to lighten pigmentation and even out skin tone.",
      },
      {
        name: "Cosmelan Depigmentation",
        description:
          "Professional depigmentation treatment that inhibits melanin production and brightens the skin.",
      },
      {
        name: "Glow Brightening Peel",
        description:
          "Gentle exfoliating treatment that removes dead skin cells and reveals brighter, more radiant skin.",
      },
      {
        name: "Dermapen for Pigmentation",
        description:
          "Microneedling treatment with targeted serums to address localized pigmentation issues.",
      },
      {
        name: "PRP Vampire Facial",
        description:
          "Platelet-rich plasma facial that rejuvenates skin and improves overall complexion.",
      },
      {
        name: "HydraFacial Basic",
        description:
          "Multi-step hydrating facial that cleanses, exfoliates, and nourishes the skin.",
      },
      {
        name: "HydraFacial Elite",
        description:
          "Advanced hydrafacial with additional serums and boosters for enhanced skin transformation.",
      },
      {
        name: "Skin Brightening Boosters",
        description:
          "Vitamin C and antioxidant infusions that brighten skin and protect against environmental damage.",
      },
    ],
    rating: 4.8,
    reviews: 223,
  },
  medifacial: {
    title: "MediFacials",
    description:
      "Advanced medical-grade facials for deep cleansing, rejuvenation, and radiant skin transformation.",
    icon: "skin",
    duration: "60-90 mins",
    benefits: [
      "Deep skin cleansing",
      "Stimulates collagen production",
      "Improves skin elasticity",
      "Reduces fine lines",
      "Achieves radiant complexion",
    ],
    subServices: [
      {
        name: "Diamond Microdermabrasion",
        description:
          "Crystal-free exfoliation using diamond tips to gently remove dead skin cells and improve texture.",
      },
      {
        name: "Oxygen Facials",
        description:
          "Oxygen-infused treatment that delivers nutrients deep into the skin for hydration and brightness.",
      },
      {
        name: "Oxyglow Facial",
        description:
          "Advanced oxygen therapy combined with LED light for maximum skin rejuvenation and glow.",
      },
      {
        name: "InstaBright Treatment",
        description:
          "Instant skin brightening treatment using vitamin C derivatives and gentle exfoliation.",
      },
      {
        name: "Powerlift Medical Facial",
        description:
          "Anti-aging facial with lifting peptides, collagen stimulation, and skin tightening elements.",
      },
      {
        name: "Power Glow Facial",
        description:
          "Intensive brightening treatment combining multiple technologies for dramatic skin improvement.",
      },
      {
        name: "IV Vitamin Infusions",
        description:
          "Intravenous delivery of vitamins and antioxidants for systemic skin health and radiance.",
      },
    ],
    rating: 4.9,
    reviews: 287,
  },
  "anti-aging": {
    title: "Anti-Aging",
    description:
      "Comprehensive wrinkle reduction and anti-aging treatments to restore youthful skin texture and appearance.",
    icon: "skin",
    duration: "45-75 mins",
    benefits: [
      "Reduces wrinkles and fine lines",
      "Improves skin firmness",
      "Boosts collagen production",
      "Restores youthful appearance",
      "Enhances skin elasticity",
    ],
    subServices: [
      {
        name: "Wrinkle Reduction Therapy",
        description:
          "Comprehensive treatment combining neuromodulators, dermal fillers, and skin resurfacing for wrinkle reduction.",
      },
      {
        name: "Anti-Aging Chemical Peels",
        description:
          "Medical-grade peels that stimulate collagen production and reduce the appearance of fine lines and wrinkles.",
      },
      {
        name: "Collagen Induction Therapy",
        description:
          "Microneedling and radiofrequency treatments that boost natural collagen production for firmer skin.",
      },
      {
        name: "Skin Tightening Procedures",
        description:
          "Advanced technologies including ultrasound and radiofrequency for non-surgical skin tightening.",
      },
    ],
    rating: 4.7,
    reviews: 189,
  },
  laser: {
    title: "Laser Treatments",
    description:
      "Precision laser technology for hair removal, tattoo removal, birthmark removal, and various skin concerns.",
    icon: "laser",
    duration: "30-60 mins",
    benefits: [
      "Permanent hair reduction",
      "Safe tattoo removal",
      "Precise treatment",
      "Minimal discomfort",
      "Long-lasting results",
    ],
    subServices: [
      {
        name: "Full Body Laser Hair Removal",
        description:
          "Comprehensive hair removal treatment covering all desired areas for long-term hair reduction.",
      },
      {
        name: "Female Hair Reduction",
        description:
          "Specialized laser treatments designed for female hair patterns and hormonal considerations.",
      },
      {
        name: "Male Hair Reduction",
        description:
          "Advanced laser treatments for male pattern hair growth, including back and chest areas.",
      },
      {
        name: "Targeted Hair Removal",
        description:
          "Precision laser treatment for specific unwanted hair areas like upper lip, chin, or sides.",
      },
      {
        name: "Arm Hair Laser Treatment",
        description:
          "Complete hair removal from forearms, upper arms, and underarms for smooth, hair-free arms.",
      },
      {
        name: "Leg Hair Laser Treatment",
        description:
          "Full leg hair removal including thighs, calves, and knees for completely smooth legs.",
      },
      {
        name: "Excessive Hair Growth Treatment",
        description:
          "Medical treatment for hirsutism and excessive hair growth caused by hormonal imbalances.",
      },
      {
        name: "Bikini Area Laser",
        description:
          "Sensitive area hair removal with specialized techniques for comfort and precision.",
      },
      {
        name: "Facial Hair Laser",
        description:
          "Precision laser treatment for unwanted facial hair including upper lip, sideburns, and chin.",
      },
      {
        name: "Underarm Laser Treatment",
        description:
          "Quick and effective hair removal from underarm areas with minimal discomfort.",
      },
      {
        name: "Birthmark Laser Removal",
        description:
          "Advanced laser treatment for safe and effective removal of congenital birthmarks.",
      },
      {
        name: "Professional Tattoo Removal",
        description:
          "Q-switched laser technology for safe tattoo removal with minimal scarring.",
      },
      {
        name: "Laser Mole Removal",
        description:
          "Precision laser treatment for mole removal with superior cosmetic results.",
      },
      {
        name: "Wart Laser Treatment",
        description:
          "Advanced laser therapy for complete wart removal and prevention of recurrence.",
      },
    ],
    rating: 4.8,
    reviews: 334,
  },
  "body-contouring": {
    title: "Body Contouring",
    description:
      "Advanced body shaping treatments including weight loss programs, cellulite reduction, and cryolipolysis.",
    icon: "slimming",
    duration: "45-120 mins",
    benefits: [
      "Reduces body fat",
      "Shapes body contours",
      "Improves skin texture",
      "Reduces cellulite",
      "Enhances body confidence",
    ],
    subServices: [
      {
        name: "Medical Weight Loss Program",
        description:
          "Comprehensive weight management program combining medical treatments, nutrition, and lifestyle guidance.",
      },
      {
        name: "Cellulite Reduction Therapy",
        description:
          "Advanced treatments combining massage, radiofrequency, and topical therapies to reduce cellulite appearance.",
      },
      {
        name: "Cryolipolysis (CoolSculpting)",
        description:
          "Non-surgical fat freezing technology that reduces stubborn fat deposits without surgery or downtime.",
      },
      {
        name: "Body Shaping Treatments",
        description:
          "Non-invasive body contouring using ultrasound, radiofrequency, and laser technologies.",
      },
      {
        name: "Targeted Fat Reduction",
        description:
          "Focused treatments for specific areas like abdomen, thighs, arms, and love handles.",
      },
    ],
    rating: 4.6,
    reviews: 167,
  },
};

const TreatmentDetailPage = ({ onBookAppointment }) => {
  const { treatmentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const treatment = TREATMENT_DATA[treatmentId];

  // Handle loading when treatmentId changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loader for 1 second

    return () => clearTimeout(timer);
  }, [treatmentId]);

  const handleBookAppointment = () => {
    if (onBookAppointment) {
      onBookAppointment();
    }
  };

  // Wellness-themed loader component
  const WellnessLoader = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#003d7a] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#efae4c]/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#efae4c]/30 rounded-full blur-md"></div>
      </div>

      {/* Loader Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Spinning wellness symbols */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-[#efae4c]/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border-4 border-transparent border-t-[#efae4c] rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-4xl text-[#efae4c]">🧘‍♀️</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Preparing Your Wellness Journey
          </h2>
          <p className="text-gray-300 text-lg">
            Loading personalized treatment information...
          </p>
        </motion.div>

        {/* Animated dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center gap-2 mt-8"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-3 h-3 bg-[#efae4c] rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );

  // Show loader during loading state
  if (isLoading) {
    return <WellnessLoader />;
  }

  // Show not found page if treatment doesn't exist
  if (!treatment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Treatment Not Found
          </h2>
          <Link to="/">
            <Button type="primary">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onBookAppointment={handleBookAppointment} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#003d7a]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#efae4c]/10 to-transparent"></div>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#efae4c]/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#efae4c]/30 rounded-full blur-md"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#efae4c] hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ArrowLeftOutlined className="mr-2" />
                Back to Home
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#efae4c]/20 rounded-full mb-6 backdrop-blur-sm border border-[#efae4c]/30">
                <span className="text-2xl">✨</span>
                <span className="text-sm font-medium text-[#efae4c]">
                  Premium Treatment
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              {treatment.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              {treatment.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <ClockCircleOutlined className="text-[#efae4c]" />
                  <span className="font-medium">{treatment.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <StarFilled className="text-yellow-400" />
                  <span className="font-medium">
                    {treatment.rating} ({treatment.reviews} reviews)
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#efae4c]/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#001b3d]/5 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <Row gutter={[40, 40]}>
            {/* Main Content */}
            <Col xs={24} lg={16}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Overview Card */}
                <motion.div variants={fadeUp} className="mb-12">
                  <Card className="shadow-2xl border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
                    {/* Header Section */}
                    <div className="relative bg-gradient-to-r from-[#001b3d] to-[#002952] p-8 text-white">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#efae4c]/20 rounded-full blur-2xl -translate-y-8 translate-x-8"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-[#efae4c]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-[#efae4c]/30">
                              <span className="text-4xl">✨</span>
                            </div>
                            <div>
                              <h2 className="text-3xl font-bold mb-2">
                                Treatment Overview
                              </h2>
                              <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                  <ClockCircleOutlined className="text-[#efae4c]" />
                                  <span>{treatment.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                                  <StarFilled className="text-yellow-400" />
                                  <span>
                                    {treatment.rating} ({treatment.reviews}{" "}
                                    reviews)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-12">
                      {/* Key Benefits - Full Width Prominent Section */}
                      <motion.div variants={fadeUp} className="relative">
                        <div className="bg-gradient-to-r from-[#efae4c]/10 via-[#efae4c]/5 to-transparent p-8 rounded-3xl border border-[#efae4c]/20">
                          {/* Background decorative elements */}
                          <div className="absolute top-4 right-4 w-24 h-24 bg-[#efae4c]/20 rounded-full blur-2xl"></div>
                          <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#001b3d]/10 rounded-full blur-xl"></div>

                          <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                              <div className="w-12 h-12 bg-gradient-to-br from-[#efae4c] to-[#d89b3e] rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-2xl text-white">✓</span>
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                                  Key Benefits
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  Discover what makes this treatment exceptional
                                </p>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {treatment.benefits.map((benefit, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  whileHover={{ y: -2 }}
                                  className="group"
                                >
                                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-white/90">
                                    <div className="flex items-start gap-4">
                                      <div className="w-3 h-3 bg-gradient-to-r from-[#efae4c] to-[#d89b3e] rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                                      <span className="text-gray-800 font-medium leading-relaxed">
                                        {benefit}
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Available Services - Enhanced Grid Layout */}
                      <motion.div variants={fadeUp}>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#001b3d] to-[#002952] rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl text-white">⚡</span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">
                              Available Services
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Explore our comprehensive range of specialized
                              treatments
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {treatment.subServices.map((service, index) => {
                            // Create URL-friendly slug from service name
                            const serviceSlug = service.name
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/(^-|-$)/g, "");

                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: index * 0.1,
                                  duration: 0.5,
                                }}
                                whileHover={{ y: -4 }}
                                className="group"
                              >
                                <Link
                                  to={`/service/${serviceSlug}`}
                                  className="block h-full"
                                >
                                  <Card className="h-full border-2 border-gray-100 hover:border-[#efae4c] transition-all duration-300 bg-gradient-to-br from-white to-gray-50/30 overflow-hidden relative">
                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#efae4c]/10 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />

                                    <div className="relative z-10">
                                      {/* Icon circle */}
                                      <motion.div
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#efae4c]/20 to-[#efae4c]/5 flex items-center justify-center mb-4 group-hover:from-[#efae4c] group-hover:to-[#d69a3c] transition-all duration-300"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                      >
                                        <ArrowLeftOutlined className="text-[#efae4c] transform rotate-180 group-hover:text-white transition-colors duration-300" />
                                      </motion.div>

                                      <h4 className="font-bold text-gray-900 text-xl leading-tight mb-3 group-hover:text-[#001b3d] transition-colors duration-300">
                                        {service.name}
                                      </h4>

                                      {/* Divider line */}
                                      <motion.div
                                        className="h-0.5 bg-gradient-to-r from-[#efae4c] to-transparent mb-4 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{
                                          delay: index * 0.1 + 0.3,
                                          duration: 0.5,
                                        }}
                                      />

                                      <motion.div
                                        className="flex items-center text-[#efae4c] text-sm font-semibold group-hover:text-[#001b3d] transition-colors duration-300"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <span>Explore Service</span>
                                        <motion.span
                                          className="ml-2"
                                          animate={{ x: [0, 4, 0] }}
                                          transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                          }}
                                        >
                                          →
                                        </motion.span>
                                      </motion.div>
                                    </div>

                                    {/* Bottom gradient accent */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#efae4c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </Card>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>

            {/* Sidebar */}
            <Col xs={24} lg={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="sticky top-24 space-y-6">
                  {/* Main Booking Card */}
                  <Card className="shadow-2xl border-0 overflow-hidden bg-gradient-to-br from-[#001b3d] to-[#002952] text-white">
                    <div className="relative p-8 text-center">
                      {/* Background decorative elements */}
                      <div className="absolute top-0 left-0 w-20 h-20 bg-[#efae4c]/20 rounded-full blur-xl"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-[#efae4c]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#efae4c]/30">
                          <PhoneOutlined className="text-2xl text-[#efae4c]" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4">
                          Ready to Transform?
                        </h3>
                        <p className="text-gray-200 mb-8 leading-relaxed">
                          Book a consultation and discover how{" "}
                          <span className="text-[#efae4c] font-semibold">
                            {treatment.title.toLowerCase()}
                          </span>{" "}
                          can help you achieve your beauty goals.
                        </p>

                        <Button
                          type="primary"
                          size="large"
                          onClick={handleBookAppointment}
                          className="w-full bg-[#efae4c] hover:bg-[#d89b3e] border-none h-14 font-bold text-lg mb-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <PhoneOutlined className="mr-2" />
                          Book Consultation
                        </Button>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <div className="text-sm text-gray-200 mb-2 font-medium">
                            ✨ Free initial consultation
                          </div>
                          <div className="text-xs text-gray-300">
                            No obligation • Personalized assessment
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Additional Info Card */}
                  <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#efae4c]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Why Choose Us?
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#efae4c] rounded-full"></div>
                          Expert medical professionals
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#efae4c] rounded-full"></div>
                          State-of-the-art technology
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#efae4c] rounded-full"></div>
                          Personalized treatment plans
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#efae4c] rounded-full"></div>
                          Proven results & satisfaction
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetailPage;
