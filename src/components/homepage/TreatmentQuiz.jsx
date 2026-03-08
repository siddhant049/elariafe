import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

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
        "PRP Vampire Facial",
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
      HydraFacial: "/service/hydrafacial-basic",
      Botox: "/treatment/anti-aging", // No specific Botox page, link to category
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
      CoolSculpting: "/service/cryolipolysis-treatment",
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
      "Microneedling Radiofrequency for stretch Marks":
        "/service/microneedling-radiofrequency-stretch-marks",

      // Pigmentation treatments
      Freckles: "/service/freckle-treatment",
      "Depigmentation Peels": "/service/depigmentation-peels",
      Cosmelan: "/service/cosmelan-depigmentation",
      "Glow Peel": "/service/glow-brightening-peel",
      "Dermapen 4 for Pigmentation": "/service/dermapen-for-pigmentation",
      "PRP Vampire Facial": "/service/prp-vampire-facial",
      "Hydrafacial Basic": "/service/hydrafacial-basic",
      "HydraFacial Elite": "/service/hydrafacial-elite",

      // Anti-aging treatments
      "Anti-aging Peels": "/service/anti-aging-peels",
      "Collagen Boosters": "/service/collagen-boosters",
      "Skin Tightening": "/service/skin-tightening-treatment",
      "Wrinkles Treatment": "/service/wrinkles-treatment",

      // Hair treatments
      QR678: "/service/qr678-treatment",
      "Hair Growth Boosters": "/service/hair-growth-boosters",
      GFC: "/service/gfc-therapy",
      Exames: "/service/specialized-hair-exams",

      // Skin treatments
      Xanthelasma: "/service/xanthelasma-removal",
      Melasma: "/service/melasma-treatment",

      // Under Eyes treatments
      "Dark Circles Removal": "/service/dark-circles-removal",
      "Under Eye Boosters": "/service/under-eye-boosters",

      // Pigmentation treatments
      "Skin Boosters": "/service/skin-boosters-pigmentation",

      // Medifacial treatments
      "Diamond Polishing": "/service/diamond-polishing",
      OxyFacials: "/service/oxy-facials",
      Oxyglow: "/service/oxyglow-treatment",
      "InstaBright Rejuvenation": "/service/instabright-rejuvenation",
      "Powerlift Medifacial": "/service/powerlift-medifacial",
      "IV Infusions for glow": "/service/iv-infusions-glow",

      // Laser treatments
      "Laser Hair Removal": "/service/laser-hair-removal",
      "Laser Hair Reduction for Females":
        "/service/laser-hair-reduction-females",
      "Laser Hair Reduction for Males": "/service/laser-hair-reduction-males",
      "Tattoo Removal": "/service/tattoo-removal",
      "Birthmark removal": "/service/birthmark-removal",
      "Mole removal": "/service/laser-mole-removal",
      "Wart Removal": "/service/wart-removal-laser",

      // Body contouring
      "Weight Loss Treatments": "/service/weight-loss-treatments",
      "Cellulite Treatment": "/service/cellulite-treatment",
      "Fat Reduction": "/service/fat-reduction-treatment",
      Cryolipolysis: "/service/cryolipolysis-treatment",
      "Body Shaping": "/service/body-shaping-treatment",
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
      <section className="bg-[#f8f4ef] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 text-center"
          >
            <div className="inline-block rounded-full border border-[#dcc8ad] bg-white px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-[#9a7b52]">
              Your Personalized Recommendations
            </div>
            <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-slate-900 md:text-5xl">
              Your Perfect Treatment Journey
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Based on your answers, here are our top recommendations for you
            </p>
          </motion.div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recommendations.map((treatment, index) => (
              <motion.div
                key={treatment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="rounded-[28px] border border-[#e7dccf] bg-white p-8 text-left shadow-[0_18px_45px_rgba(17,24,39,0.05)]"
              >
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#9a7b52]">
                  Recommendation {index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-medium text-slate-900">
                  {treatment}
                </h3>
                <p className="mb-7 mt-4 text-sm leading-7 text-slate-600">
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
                    className="h-11 rounded-full border-none bg-[#10233f] px-6 font-medium text-white hover:!bg-[#0d1d34]"
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
              className="mr-4 h-11 rounded-full border border-[#d7c4ab] bg-transparent px-8 font-medium tracking-[0.2em] text-slate-700 hover:!border-[#9a7b52] hover:!text-[#9a7b52]"
            >
              Retake Quiz
            </Button>
            <Button
              type="primary"
              onClick={onBookAppointment}
              className="h-11 rounded-full border-none bg-[#b8925f] px-8 font-medium tracking-[0.14em] text-white hover:!bg-[#a78454]"
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
    <section className="bg-[#10233f] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <div className="inline-block rounded-full border border-white/20 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-[#d6b384]">
            Consultation Finder
          </div>
          <h2 className="mt-6 text-4xl font-light tracking-[-0.03em] text-white md:text-5xl">
            Find your ideal treatment path.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A more guided way to shortlist treatments before your consultation.
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
                className="h-11 rounded-full border-none bg-[#d6b384] px-8 font-medium text-[#10233f] hover:!bg-[#c79f6c]"
              >
                Learn More <ArrowRightOutlined className="ml-2 text-sm" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="mb-10">
          <div className="mb-4 flex justify-center">
            {quizQuestions.map((_, index) => (
              <motion.div
                key={index}
                className={`mx-2 h-2.5 w-10 rounded-full ${
                  index <= currentStep ? "bg-[#d6b384]" : "bg-white/15"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
          <div className="text-center text-sm text-white/60">
            Question {currentStep + 1} of {quizQuestions.length}
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="rounded-[32px] border border-white/10 bg-white/6 p-8 backdrop-blur-md md:p-12"
        >
          <h3 className="mb-12 text-center text-2xl font-light tracking-wide text-white md:text-3xl">
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
                className="group rounded-[24px] border border-white/10 bg-white/5 p-6 text-left transition-all duration-300 hover:border-[#d6b384]/45 hover:bg-white/10"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-medium text-[#d6b384]">
                  {index + 1}
                </div>
                <div className="font-light tracking-wide text-white transition-colors group-hover:text-[#d6b384]">
                  {option.text}
                </div>
                {option.description && (
                  <div className="mt-3 text-sm leading-relaxed text-white/70 transition-colors group-hover:text-white/90">
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

export default TreatmentQuiz;
