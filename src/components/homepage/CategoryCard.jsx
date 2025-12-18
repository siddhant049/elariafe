import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const CategoryCard = ({ title, description, image, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Map category titles to treatment IDs for navigation
  const getCategoryPath = (categoryTitle) => {
    const categoryMap = {
      HAIR: "/treatment/hair",
      SKIN: "/treatment/skin",
      "ACNE AND SCARS": "/treatment/acne-scars",
      "UNDER EYES SERVICES": "/treatment/under-eye",
      PIGMENTATION: "/treatment/pigmentation",
      MEDIFACIAL: "/treatment/medifacial",
      "ANTI AGING": "/treatment/anti-aging",
      LASER: "/treatment/laser",
      "BODY CONTOURING": "/treatment/body-contouring",
    };
    return categoryMap[categoryTitle] || "/";
  };

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
      "RF Microneedling for Scars":
        "microneedling-radiofrequency-stretch-marks",

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

    return (
      treatmentToServiceMap[treatmentName] ||
      treatmentName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    );
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
          "PRP Vampire Facial",
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
        <Link to={getCategoryPath(title)}>
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative h-96 bg-white border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl"
          >
            {/* Hover reveal background image */}
            {image && (
              <motion.div
                animate={{
                  opacity: isHovered ? 0.15 : 0,
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            )}

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
        </Link>

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
    </>
  );
};

export default CategoryCard;
