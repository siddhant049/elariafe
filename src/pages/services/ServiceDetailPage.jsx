import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Card, Row, Col, Tag, Rate, Avatar } from "antd";
import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  StarFilled,
  PhoneOutlined,
  UserOutlined,
  ExperimentOutlined,
  SafetyOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

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

// Service data with detailed information
const SERVICE_DATA = {
  // Hair Treatments
  "qr678-treatment": {
    name: "QR678 Treatment",
    category: "Hair Treatments",
    categoryPath: "/treatment/hair",
    description:
      "Advanced peptide therapy that stimulates hair follicles and promotes natural hair growth cycles using cutting-edge biotechnology.",
    duration: "45-60 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.9,
    reviews: 156,
    benefits: [
      "Stimulates dormant hair follicles",
      "Promotes natural hair growth cycles",
      "Strengthens existing hair roots",
      "Improves hair density and thickness",
      "Reduces hair loss progression",
      "Safe for both men and women",
    ],
    process: [
      "Initial consultation and scalp analysis",
      "Application of QR678 peptide solution",
      "Low-level light therapy stimulation",
      "Post-treatment care instructions",
      "Follow-up assessments",
    ],
    precautions: [
      "Not recommended during pregnancy",
      "Avoid washing hair for 24 hours post-treatment",
      "Stay out of direct sunlight for 48 hours",
      "No harsh chemical treatments for 1 week",
    ],
    results:
      "Visible results within 3-4 months with continued improvement over 6-12 months",
    maintenance:
      "Maintenance sessions every 4-6 months after initial treatment course",
  },
  "hair-growth-boosters": {
    name: "Hair Growth Boosters",
    category: "Hair Treatments",
    categoryPath: "/treatment/hair",
    description:
      "Nutrient-rich formulations designed to accelerate hair growth and improve hair density through targeted supplementation.",
    duration: "30-45 mins",
    sessions: "8-12 sessions recommended",
    rating: 4.8,
    reviews: 203,
    benefits: [
      "Accelerates natural hair growth",
      "Improves hair density and volume",
      "Strengthens hair follicles",
      "Reduces hair thinning",
      "Enhances scalp health",
      "Promotes thicker, healthier hair",
    ],
    process: [
      "Scalp condition assessment",
      "Application of growth booster serum",
      "Massage and stimulation techniques",
      "LED light therapy application",
      "Home care regimen guidance",
    ],
    precautions: [
      "Patch test recommended for sensitive skin",
      "Avoid if allergic to any ingredients",
      "No immediate hair washing after treatment",
      "Limit heat styling for 48 hours",
    ],
    results: "Noticeable improvement in hair density within 2-3 months",
    maintenance: "Monthly maintenance sessions recommended",
  },
  "gfc-therapy": {
    name: "GFC Therapy",
    category: "Hair Treatments",
    categoryPath: "/treatment/hair",
    description:
      "Growth Factor Concentrate treatment that rejuvenates hair follicles and strengthens hair roots using advanced stem cell technology.",
    duration: "50-70 mins",
    sessions: "6-10 sessions recommended",
    rating: 4.9,
    reviews: 178,
    benefits: [
      "Rejuvenates dormant hair follicles",
      "Strengthens hair root structure",
      "Improves scalp microcirculation",
      "Reduces inflammation",
      "Promotes new hair growth",
      "Long-lasting results",
    ],
    process: [
      "Comprehensive scalp analysis",
      "Application of GFC concentrate",
      "Microneedling for better absorption",
      "LED therapy for stimulation",
      "Post-care instructions",
    ],
    precautions: [
      "Not suitable during pregnancy",
      "Avoid blood thinning medications",
      "No scalp treatments for 1 week prior",
      "Inform doctor of medical conditions",
    ],
    results: "Significant improvement in hair quality within 3-6 months",
    maintenance: "Maintenance every 3-6 months",
  },
  "specialized-hair-exams": {
    name: "Specialized Hair Exams",
    category: "Hair Treatments",
    categoryPath: "/treatment/hair",
    description:
      "Comprehensive scalp analysis and hair health assessment to identify underlying causes of hair loss and scalp conditions.",
    duration: "45-60 mins",
    sessions: "Initial consultation + follow-ups",
    rating: 4.7,
    reviews: 145,
    benefits: [
      "Detailed scalp condition analysis",
      "Identification of hair loss causes",
      "Personalized treatment recommendations",
      "Early detection of scalp conditions",
      "Comprehensive health assessment",
      "Treatment progress monitoring",
    ],
    process: [
      "Medical history review",
      "Visual scalp examination",
      "Dermatoscopic analysis",
      "Hair pull and density tests",
      "Blood work recommendations if needed",
      "Treatment plan development",
    ],
    precautions: [
      "Come with clean, dry hair",
      "Bring current medications list",
      "Inform of recent illnesses",
      "No hair products on exam day",
    ],
    results:
      "Detailed diagnosis and personalized treatment plan within 24 hours",
    maintenance: "Follow-up consultations every 3 months",
  },
  "scalp-peel-treatment": {
    name: "Scalp Peel Treatment",
    category: "Hair Treatments",
    categoryPath: "/treatment/hair",
    description:
      "Medical-grade exfoliation treatment that removes buildup and promotes healthy scalp environment for optimal hair growth.",
    duration: "40-50 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.6,
    reviews: 134,
    benefits: [
      "Removes scalp buildup and impurities",
      "Promotes healthy scalp environment",
      "Improves hair follicle function",
      "Reduces scalp inflammation",
      "Enhances product absorption",
      "Prevents scalp conditions",
    ],
    process: [
      "Scalp cleansing and preparation",
      "Application of medical-grade peel solution",
      "Controlled exfoliation process",
      "Neutralization and calming treatment",
      "Post-peel care instructions",
    ],
    precautions: [
      "Patch test 48 hours before treatment",
      "No recent chemical treatments",
      "Avoid if scalp is irritated or infected",
      "No sun exposure for 1 week post-treatment",
    ],
    results: "Cleaner, healthier scalp within 1-2 weeks",
    maintenance: "Quarterly maintenance peels recommended",
  },

  // Skin Treatments
  "acne-scar-treatment": {
    name: "Acne Scar Treatment",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Advanced scar revision techniques including laser therapy, chemical peels, and microneedling to reduce acne scarring and improve skin texture.",
    duration: "60-90 mins",
    sessions: "6-12 sessions recommended",
    rating: 4.8,
    reviews: 267,
    benefits: [
      "Reduces appearance of acne scars",
      "Improves skin texture and tone",
      "Stimulates collagen production",
      "Minimizes pore size",
      "Enhances skin smoothness",
      "Boosts confidence and self-esteem",
    ],
    process: [
      "Skin assessment and scar evaluation",
      "Choice of treatment modality",
      "Application of numbing cream if needed",
      "Treatment application",
      "Post-care instructions and products",
    ],
    precautions: [
      "No active acne breakouts",
      "Avoid sun exposure before treatment",
      "No retinoids 1 week prior",
      "Inform doctor of skin conditions",
    ],
    results:
      "Noticeable improvement in 4-6 weeks with optimal results in 3-6 months",
    maintenance: "Maintenance treatments every 6-12 months",
  },
  "xanthelasma-removal": {
    name: "Xanthelasma Removal",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Safe and effective removal of cholesterol deposits around the eyes using advanced surgical and non-surgical techniques.",
    duration: "45-60 mins",
    sessions: "1-2 sessions usually sufficient",
    rating: 4.7,
    reviews: 98,
    benefits: [
      "Complete removal of xanthelasma deposits",
      "Minimal scarring",
      "Improved appearance around eyes",
      "Safe and precise procedure",
      "Quick recovery time",
      "Long-lasting results",
    ],
    process: [
      "Pre-treatment consultation",
      "Local anesthesia application",
      "Surgical or laser removal",
      "Wound closure and dressing",
      "Post-operative care instructions",
    ],
    precautions: [
      "Medical clearance if high cholesterol",
      "Avoid blood thinners 1 week prior",
      "No smoking 2 weeks before/after",
      "Follow post-care instructions strictly",
    ],
    results:
      "Complete removal with minimal scarring, results visible immediately",
    maintenance: "Monitor cholesterol levels to prevent recurrence",
  },
  "freckle-treatment": {
    name: "Freckle Treatment",
    category: "Pigmentation Solutions",
    categoryPath: "/treatment/pigmentation",
    description:
      "Advanced laser and chemical treatments to reduce or eliminate freckles and sun spots, restoring even skin tone.",
    duration: "30-45 mins",
    sessions: "3-6 sessions recommended",
    rating: 4.8,
    reviews: 189,
    benefits: [
      "Reduces or eliminates freckles",
      "Lightens sun spots and pigmentation",
      "Improves skin tone uniformity",
      "Safe for facial skin",
      "Minimal downtime",
      "Long-lasting results with sun protection",
    ],
    process: [
      "Skin type and freckle assessment",
      "Application of topical numbing cream",
      "Laser treatment application",
      "Cooling and soothing treatment",
      "Sun protection recommendations",
    ],
    precautions: [
      "Avoid sun exposure 2 weeks before treatment",
      "No tanning or self-tanning products",
      "Use SPF 50+ daily after treatment",
      "Avoid retinoids and exfoliants 1 week prior",
    ],
    results: "50-80% reduction in freckles after complete treatment course",
    maintenance: "Annual maintenance treatments and strict sun protection",
  },
  "depigmentation-peels": {
    name: "Depigmentation Peels",
    category: "Pigmentation Solutions",
    categoryPath: "/treatment/pigmentation",
    description:
      "Medical-grade chemical peels designed to lighten pigmentation and even out skin tone through controlled exfoliation.",
    duration: "45-60 mins",
    sessions: "4-8 sessions recommended",
    rating: 4.7,
    reviews: 156,
    benefits: [
      "Lightens hyperpigmentation",
      "Evens out skin tone",
      "Reduces melasma and sun spots",
      "Stimulates cell turnover",
      "Improves skin texture",
      "Enhances skin brightness",
    ],
    process: [
      "Skin analysis and peel selection",
      "Pre-peel preparation",
      "Controlled application of peeling solution",
      "Neutralization and removal",
      "Post-peel care and protection",
    ],
    precautions: [
      "Patch test 48 hours before",
      "No recent facial treatments",
      "Avoid if pregnant or breastfeeding",
      "Strict sun avoidance post-treatment",
    ],
    results:
      "Visible lightening in 2-4 weeks with optimal results in 2-3 months",
    maintenance: "Monthly maintenance peels and daily SPF use",
  },
  "cosmelan-depigmentation": {
    name: "Cosmelan Depigmentation",
    category: "Pigmentation Solutions",
    categoryPath: "/treatment/pigmentation",
    description:
      "Professional depigmentation treatment that inhibits melanin production and brightens the skin using advanced formulations.",
    duration: "60-90 mins (initial) + home care",
    sessions: "1 intensive treatment + 4-6 months home care",
    rating: 4.9,
    reviews: 203,
    benefits: [
      "Significantly reduces melanin production",
      "Treats melasma and hyperpigmentation",
      "Brightens and evens skin tone",
      "Long-lasting results",
      "Professional medical supervision",
      "Comprehensive skin transformation",
    ],
    process: [
      "Detailed skin assessment",
      "Cosmelan mask application",
      "Home care product prescription",
      "Regular follow-up visits",
      "Maintenance regimen guidance",
    ],
    precautions: [
      "Not suitable during pregnancy",
      "Avoid sun exposure throughout treatment",
      "Strict adherence to home care routine",
      "Regular follow-up appointments required",
    ],
    results:
      "Significant skin brightening in 1-2 months with continued improvement",
    maintenance: "Maintenance products and periodic touch-ups as needed",
  },
  "glow-brightening-peel": {
    name: "Glow Brightening Peel",
    category: "Pigmentation Solutions",
    categoryPath: "/treatment/pigmentation",
    description:
      "Gentle exfoliating treatment that removes dead skin cells and reveals brighter, more radiant skin through controlled chemical exfoliation.",
    duration: "45-60 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.6,
    reviews: 145,
    benefits: [
      "Removes dead skin cells",
      "Reveals brighter skin",
      "Improves skin texture",
      "Reduces dullness",
      "Enhances radiance",
      "Gentle and safe treatment",
    ],
    process: [
      "Skin preparation and cleansing",
      "Application of brightening peel solution",
      "Controlled timing for optimal results",
      "Neutralization and removal",
      "Soothing and hydrating mask",
    ],
    precautions: [
      "Patch test 48 hours before treatment",
      "Avoid sun exposure 1 week before/after",
      "No harsh skincare products 1 week prior",
      "Use SPF 50+ daily after treatment",
    ],
    results: "Immediate glow with progressive brightening over 4-6 weeks",
    maintenance: "Monthly maintenance peels recommended",
  },
  "dermapen-for-pigmentation": {
    name: "Dermapen for Pigmentation",
    category: "Pigmentation Solutions",
    categoryPath: "/treatment/pigmentation",
    description:
      "Microneedling treatment with targeted serums to address localized pigmentation issues and improve skin tone.",
    duration: "60-75 mins",
    sessions: "4-8 sessions recommended",
    rating: 4.7,
    reviews: 167,
    benefits: [
      "Targets localized pigmentation",
      "Improves skin tone uniformity",
      "Stimulates collagen production",
      "Enhances product absorption",
      "Reduces pigmentation depth",
      "Improves overall skin texture",
    ],
    process: [
      "Skin preparation and numbing",
      "Dermapen treatment with pigmentation serum",
      "LED light therapy for enhanced results",
      "Calming and hydrating mask",
      "Post-care instructions",
    ],
    precautions: [
      "No active infections or cold sores",
      "Avoid retinoids 1 week before treatment",
      "No recent chemical peels or laser treatments",
      "Strict sun protection post-treatment",
    ],
    results: "Visible improvement in pigmentation within 4-6 weeks",
    maintenance: "Maintenance sessions every 3-6 months",
  },
  "prp-vampire-facial": {
    name: "PRP Vampire Facial",
    category: "Pigmentation Solutions",
    categoryPath: "/treatment/pigmentation",
    description:
      "Platelet-rich plasma facial that rejuvenates skin and improves overall complexion using your body's own healing properties.",
    duration: "75-90 mins",
    sessions: "3-4 sessions recommended",
    rating: 4.8,
    reviews: 189,
    benefits: [
      "Natural skin rejuvenation",
      "Improves skin tone and texture",
      "Reduces fine lines and wrinkles",
      "Enhances collagen production",
      "Brightens and evens complexion",
      "Long-lasting youthful appearance",
    ],
    process: [
      "Blood draw and PRP preparation",
      "Microneedling or injection application",
      "PRP serum application",
      "LED light therapy",
      "Post-treatment care instructions",
    ],
    precautions: [
      "Good overall health required",
      "Avoid blood thinners 1 week prior",
      "No active skin infections",
      "Stay hydrated before treatment",
    ],
    results:
      "Progressive improvement over 4-6 weeks with optimal results at 3 months",
    maintenance: "Annual maintenance treatments recommended",
  },
};

const ServiceDetailPage = ({ onBookAppointment }) => {
  const { serviceId } = useParams();
  const service = SERVICE_DATA[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h2>
          <Link to="/">
            <Button type="primary">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBookAppointment = () => {
    if (onBookAppointment) {
      onBookAppointment();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#001b3d] to-[#002b5d]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Link
                to={service.categoryPath}
                className="inline-flex items-center text-[#efae4c] hover:text-white transition-colors"
              >
                <ArrowLeftOutlined className="mr-2" />
                Back to {service.category}
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {service.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ClockCircleOutlined />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <StarFilled className="text-yellow-500" />
                <span>
                  {service.rating} ({service.reviews} reviews)
                </span>
              </div>
              <Tag color="#efae4c" className="text-white">
                {service.sessions}
              </Tag>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Row gutter={[48, 48]}>
            {/* Main Content */}
            <Col xs={24} lg={16}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Key Benefits */}
                <Card
                  className="mb-8 shadow-lg"
                  title={
                    <div className="flex items-center gap-2">
                      <TrophyOutlined className="text-[#efae4c]" />
                      <span>Key Benefits</span>
                    </div>
                  }
                >
                  <motion.div variants={fadeUp}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircleOutlined className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </Card>

                {/* Treatment Process */}
                <Card
                  className="mb-8 shadow-lg"
                  title={
                    <div className="flex items-center gap-2">
                      <ExperimentOutlined className="text-[#efae4c]" />
                      <span>Treatment Process</span>
                    </div>
                  }
                >
                  <motion.div variants={fadeUp}>
                    <div className="space-y-4">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-[#efae4c] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 mt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </Card>

                {/* Results & Maintenance */}
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={12}>
                    <Card className="shadow-lg h-full">
                      <div className="text-center">
                        <TrophyOutlined className="text-3xl text-[#efae4c] mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Expected Results
                        </h3>
                        <p className="text-gray-600">{service.results}</p>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={24} md={12}>
                    <Card className="shadow-lg h-full">
                      <div className="text-center">
                        <UserOutlined className="text-3xl text-[#efae4c] mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Maintenance
                        </h3>
                        <p className="text-gray-600">{service.maintenance}</p>
                      </div>
                    </Card>
                  </Col>
                </Row>
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
                {/* Precautions */}
                <Card
                  className="shadow-lg"
                  title={
                    <div className="flex items-center gap-2">
                      <SafetyOutlined className="text-[#efae4c]" />
                      <span>Important Precautions</span>
                    </div>
                  }
                >
                  <ul className="space-y-2">
                    {service.precautions.map((precaution, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-[#efae4c] mt-1">•</span>
                        {precaution}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
