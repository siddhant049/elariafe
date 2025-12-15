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

  // Missing Skin Treatments
  "skin-infections-treatment": {
    name: "Skin Infections Treatment",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Comprehensive treatment for bacterial, fungal, and viral skin infections with appropriate medical interventions and advanced therapies.",
    duration: "30-45 mins",
    sessions: "Varies based on infection type",
    rating: 4.7,
    reviews: 89,
    benefits: [
      "Eliminates harmful bacteria and fungi",
      "Reduces inflammation and redness",
      "Prevents infection spread",
      "Promotes healthy skin healing",
      "Restores skin barrier function",
      "Prevents scarring",
    ],
    process: [
      "Skin assessment and infection diagnosis",
      "Appropriate antimicrobial treatment",
      "Anti-inflammatory therapy",
      "Wound care and dressing",
      "Home care instructions",
    ],
    precautions: [
      "Medical consultation required",
      "May require lab tests",
      "Avoid self-medication",
      "Keep area clean and dry",
    ],
    results:
      "Improvement within 3-7 days with complete resolution in 1-4 weeks",
    maintenance: "Follow-up visits as needed",
  },

  "melasma-treatment": {
    name: "Melasma Treatment",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Targeted treatment for hormonal pigmentation using combination therapies including chemical peels, laser treatments, and topical medications.",
    duration: "45-60 mins",
    sessions: "6-12 sessions recommended",
    rating: 4.6,
    reviews: 134,
    benefits: [
      "Reduces dark patches and discoloration",
      "Balances skin tone",
      "Treats hormonal pigmentation",
      "Improves skin texture",
      "Prevents pigmentation recurrence",
      "Safe for sensitive skin",
    ],
    process: [
      "Skin analysis and melasma assessment",
      "Custom treatment plan development",
      "Combination therapy application",
      "Home care regimen prescription",
      "Progress monitoring",
    ],
    precautions: [
      "Sun protection essential",
      "Avoid hormonal triggers",
      "Patch test recommended",
      "Not during pregnancy",
    ],
    results:
      "Visible improvement in 4-8 weeks with continued progress over 3-6 months",
    maintenance: "Maintenance treatments every 3-6 months",
  },

  "mole-surgery": {
    name: "Mole Surgery",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Precise surgical removal of moles with minimal scarring using advanced excision techniques and cosmetic closure methods.",
    duration: "30-45 mins",
    sessions: "Single session usually sufficient",
    rating: 4.8,
    reviews: 167,
    benefits: [
      "Complete mole removal",
      "Minimal scarring",
      "Cosmetic closure techniques",
      "Pathology testing available",
      "Quick recovery time",
      "Professional medical care",
    ],
    process: [
      "Mole examination and assessment",
      "Local anesthesia application",
      "Surgical excision",
      "Wound closure with fine sutures",
      "Post-operative care instructions",
    ],
    precautions: [
      "Medical evaluation required",
      "Avoid blood thinners",
      "Keep wound clean and dry",
      "Follow aftercare instructions",
    ],
    results: "Complete removal with healing in 1-2 weeks",
    maintenance: "Regular skin checks recommended",
  },

  "skin-tag-removal": {
    name: "Skin Tag Removal",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Quick and painless removal of skin tags using cryotherapy, electrocautery, or surgical excision with minimal discomfort and downtime.",
    duration: "15-30 mins",
    sessions: "Single session usually sufficient",
    rating: 4.7,
    reviews: 98,
    benefits: [
      "Painless removal procedure",
      "Minimal scarring",
      "Quick recovery",
      "Safe and effective methods",
      "No stitches required",
      "Immediate results",
    ],
    process: [
      "Skin tag assessment",
      "Local anesthesia if needed",
      "Removal using preferred method",
      "Wound care application",
      "Aftercare instructions",
    ],
    precautions: [
      "Avoid picking at treated area",
      "Keep clean and dry",
      "Use recommended ointments",
      "Avoid sun exposure initially",
    ],
    results: "Complete removal with healing in 3-7 days",
    maintenance: "Rare recurrence, regular monitoring advised",
  },

  "laser-mole-treatment": {
    name: "Laser Mole Treatment",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Non-surgical laser treatment for mole removal with precise targeting and minimal downtime using advanced laser technology.",
    duration: "20-40 mins",
    sessions: "1-3 sessions depending on mole type",
    rating: 4.6,
    reviews: 112,
    benefits: [
      "Non-surgical procedure",
      "Precise targeting",
      "Minimal scarring",
      "Quick treatment time",
      "Minimal downtime",
      "Safe for most skin types",
    ],
    process: [
      "Mole evaluation",
      "Laser parameter selection",
      "Precise laser application",
      "Post-treatment care",
      "Follow-up assessment",
    ],
    precautions: [
      "Medical consultation required",
      "Avoid sun exposure",
      "Use sun protection",
      "Follow aftercare regimen",
    ],
    results: "Complete removal with healing in 1-2 weeks",
    maintenance: "Regular skin monitoring recommended",
  },

  "wart-cautery": {
    name: "Wart Cautery",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Electrocautery treatment for wart removal ensuring complete eradication and preventing recurrence using controlled heat application.",
    duration: "15-30 mins",
    sessions: "1-2 sessions usually sufficient",
    rating: 4.5,
    reviews: 76,
    benefits: [
      "Effective wart removal",
      "Prevents recurrence",
      "Quick procedure",
      "Minimal discomfort",
      "Safe treatment method",
      "High success rate",
    ],
    process: [
      "Wart assessment",
      "Local anesthesia",
      "Electrocautery application",
      "Wound dressing",
      "Aftercare instructions",
    ],
    precautions: [
      "Keep area clean",
      "Avoid touching other areas",
      "Use prescribed medications",
      "Monitor for infection",
    ],
    results: "Complete removal with healing in 1-2 weeks",
    maintenance: "Follow-up if needed",
  },

  "dermapen-skin-treatment": {
    name: "Dermapen Treatment",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Advanced microneedling treatment using automated pen technology to rejuvenate skin, reduce scars, and improve skin texture.",
    duration: "45-60 mins",
    sessions: "3-6 sessions recommended",
    rating: 4.8,
    reviews: 145,
    benefits: [
      "Stimulates collagen production",
      "Reduces fine lines and wrinkles",
      "Improves skin texture",
      "Minimizes pore size",
      "Treats acne scars",
      "Enhances product absorption",
    ],
    process: [
      "Skin preparation and numbing",
      "Dermapen treatment application",
      "Serum infusion",
      "Calming mask application",
      "Post-care instructions",
    ],
    precautions: [
      "Avoid sun exposure",
      "No retinoids 3 days prior",
      "Not suitable for active acne",
      "Pregnancy consultation required",
    ],
    results:
      "Progressive improvement over 4-6 weeks with optimal results at 3 months",
    maintenance: "Maintenance sessions every 6-12 months",
  },

  "stretch-marks-treatment": {
    name: "Stretch Marks Treatment",
    category: "Skin Treatments",
    categoryPath: "/treatment/skin",
    description:
      "Comprehensive treatment for stretch marks using combination therapies including microneedling, laser, and topical treatments.",
    duration: "45-75 mins",
    sessions: "4-8 sessions recommended",
    rating: 4.6,
    reviews: 123,
    benefits: [
      "Reduces stretch mark appearance",
      "Improves skin texture",
      "Stimulates collagen production",
      "Smoothens affected areas",
      "Enhances skin elasticity",
      "Boosts confidence",
    ],
    process: [
      "Stretch mark assessment",
      "Custom treatment plan",
      "Combination therapy application",
      "Home care regimen",
      "Progress monitoring",
    ],
    precautions: [
      "Realistic expectations",
      "Sun protection essential",
      "Avoid harsh products",
      "Patience required for results",
    ],
    results:
      "Visible improvement in 6-8 weeks with continued progress over 4-6 months",
    maintenance: "Maintenance treatments as needed",
  },

  // Acne and Scars Treatments
  "acne-peels": {
    name: "Acne Peels",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Medical-grade chemical peels specifically formulated for acne treatment, helping to unclog pores, reduce breakouts, and improve skin clarity.",
    duration: "30-45 mins",
    sessions: "4-8 sessions recommended",
    rating: 4.7,
    reviews: 156,
    benefits: [
      "Unclogs pores and reduces breakouts",
      "Controls excess oil production",
      "Reduces acne scarring",
      "Improves skin texture",
      "Balances skin pH",
      "Prevents future acne",
    ],
    process: [
      "Skin assessment and sensitivity test",
      "Pre-peel preparation",
      "Chemical peel application",
      "Neutralization and calming",
      "Post-peel care instructions",
    ],
    precautions: [
      "Sun protection essential",
      "Avoid retinoids 3 days prior",
      "Not during active infection",
      "Patch test recommended",
    ],
    results:
      "Clearer skin within 2-4 weeks with optimal results after full treatment course",
    maintenance: "Monthly maintenance peels recommended",
  },

  "advanced-acne-treatments": {
    name: "Advanced Acne Treatments",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Comprehensive acne treatment combining multiple modalities including extractions, light therapy, and targeted medications for severe acne cases.",
    duration: "45-60 mins",
    sessions: "6-12 sessions recommended",
    rating: 4.8,
    reviews: 189,
    benefits: [
      "Treats all types of acne",
      "Reduces inflammation",
      "Prevents scarring",
      "Controls bacterial growth",
      "Balances sebum production",
      "Improves skin healing",
    ],
    process: [
      "Comprehensive acne assessment",
      "Custom treatment protocol",
      "Combination therapy application",
      "Extractions and deep cleansing",
      "Home care regimen",
    ],
    precautions: [
      "Medical consultation required",
      "May require lab tests",
      "Avoid certain medications",
      "Sun protection mandatory",
    ],
    results:
      "Significant improvement in 4-6 weeks with continued progress over 3 months",
    maintenance: "Maintenance visits every 1-3 months",
  },

  "carbon-peels": {
    name: "Carbon Peels",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Laser-assisted carbon peel treatment that deeply cleanses pores, reduces oil production, and improves skin texture using carbon particles and laser energy.",
    duration: "30-45 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.6,
    reviews: 98,
    benefits: [
      "Deep pore cleansing",
      "Reduces oil production",
      "Improves skin texture",
      "Treats mild acne",
      "Minimizes enlarged pores",
      "Brightens complexion",
    ],
    process: [
      "Carbon application",
      "Laser energy application",
      "Deep cleansing",
      "Calming treatment",
      "Sun protection application",
    ],
    precautions: [
      "Avoid sun exposure",
      "No makeup for 24 hours",
      "Mild redness expected",
      "Stay hydrated",
    ],
    results:
      "Improved skin clarity within 1-2 weeks with optimal results after 4-6 sessions",
    maintenance: "Monthly maintenance treatments",
  },

  "chemical-peels-acne": {
    name: "Chemical Peels for Acne",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Specialized chemical peels formulated for acne-prone skin to exfoliate, unclog pores, and promote cellular turnover for clearer skin.",
    duration: "30-45 mins",
    sessions: "4-8 sessions recommended",
    rating: 4.7,
    reviews: 134,
    benefits: [
      "Exfoliates dead skin cells",
      "Unclogs pores",
      "Reduces acne breakouts",
      "Improves skin tone",
      "Stimulates collagen",
      "Enhances product absorption",
    ],
    process: [
      "Skin analysis and peel selection",
      "Pre-treatment preparation",
      "Controlled peel application",
      "Neutralization process",
      "Post-peel care regimen",
    ],
    precautions: [
      "Sun avoidance essential",
      "Retinoid pause required",
      "Patch test recommended",
      "Not during pregnancy",
    ],
    results:
      "Clearer skin in 2-4 weeks with progressive improvement over treatment course",
    maintenance: "Maintenance peels every 4-6 weeks",
  },

  "derma-roller-acne": {
    name: "Derma Roller for Acne",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Microneedling treatment using sterile rollers to create micro-channels that improve product absorption and stimulate skin healing for acne treatment.",
    duration: "45-60 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.5,
    reviews: 87,
    benefits: [
      "Improves product penetration",
      "Stimulates collagen production",
      "Reduces acne scarring",
      "Enhances skin healing",
      "Minimizes pore appearance",
      "Promotes cellular turnover",
    ],
    process: [
      "Skin preparation and numbing",
      "Sterile roller application",
      "Serum infusion",
      "Calming treatment",
      "Aftercare instructions",
    ],
    precautions: [
      "Avoid active breakouts",
      "No retinoids 3 days prior",
      "Sun protection essential",
      "Mild redness expected",
    ],
    results: "Improved texture in 4-6 weeks with optimal results at 3 months",
    maintenance: "Maintenance sessions every 3-6 months",
  },

  "fractional-laser-acne": {
    name: "Fractional Laser for Acne",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Advanced fractional laser technology that targets acne scars and active breakouts, promoting skin regeneration and collagen production.",
    duration: "45-60 mins",
    sessions: "3-5 sessions recommended",
    rating: 4.8,
    reviews: 167,
    benefits: [
      "Reduces acne scarring",
      "Improves skin texture",
      "Stimulates collagen",
      "Treats active acne",
      "Minimizes pore size",
      "Promotes skin healing",
    ],
    process: [
      "Skin assessment",
      "Laser parameter setting",
      "Fractional laser application",
      "Cooling and calming",
      "Post-treatment care",
    ],
    precautions: [
      "Sun protection mandatory",
      "Avoid tanning",
      "Not during pregnancy",
      "Mild downtime expected",
    ],
    results:
      "Visible improvement in 4-6 weeks with continued progress over 3-6 months",
    maintenance: "Maintenance treatments as needed",
  },

  "radiofrequency-microneedling": {
    name: "Radiofrequency Microneedling",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Advanced treatment combining microneedling with radiofrequency energy to treat acne scars, improve skin texture, and stimulate deep collagen production.",
    duration: "60-75 mins",
    sessions: "3-4 sessions recommended",
    rating: 4.9,
    reviews: 145,
    benefits: [
      "Deep collagen stimulation",
      "Significant scar reduction",
      "Improves skin elasticity",
      "Treats deep acne scars",
      "Long-lasting results",
      "Minimal downtime",
    ],
    process: [
      "Topical anesthesia application",
      "RF microneedling treatment",
      "Cooling and soothing",
      "Post-treatment care",
      "Recovery instructions",
    ],
    precautions: [
      "Not suitable for all skin types",
      "Avoid blood thinners",
      "Sun protection essential",
      "Mild swelling expected",
    ],
    results:
      "Progressive improvement over 3-6 months with optimal results at 6-12 months",
    maintenance: "Annual maintenance treatments",
  },

  "acne-cleanup-facial": {
    name: "Acne Cleanup Facial",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Specialized facial treatment designed for acne-prone skin, combining deep cleansing, extractions, and therapeutic products to control breakouts.",
    duration: "60-75 mins",
    sessions: "Weekly or bi-weekly recommended",
    rating: 4.6,
    reviews: 112,
    benefits: [
      "Deep pore cleansing",
      "Professional extractions",
      "Reduces breakouts",
      "Calms inflamed skin",
      "Hydrates and balances",
      "Prevents future acne",
    ],
    process: [
      "Skin analysis",
      "Deep cleansing",
      "Steam and extractions",
      "Treatment application",
      "Mask and massage",
      "Home care advice",
    ],
    precautions: [
      "Gentle approach for sensitive skin",
      "Avoid picking at skin",
      "Use recommended products",
      "Sun protection advised",
    ],
    results:
      "Clearer skin after first session with cumulative benefits over time",
    maintenance: "Regular facials for acne control",
  },

  "laser-freckles-treatment": {
    name: "Laser for Freckles",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Precision laser treatment targeting freckles and pigmentation, using specific wavelengths to break down melanin deposits for even skin tone.",
    duration: "20-40 mins",
    sessions: "2-4 sessions recommended",
    rating: 4.7,
    reviews: 98,
    benefits: [
      "Targets freckles specifically",
      "Reduces pigmentation",
      "Even skin tone",
      "Minimal damage to surrounding skin",
      "Quick treatment sessions",
      "Long-lasting results",
    ],
    process: [
      "Pigmentation assessment",
      "Laser calibration",
      "Precise laser application",
      "Cooling treatment",
      "Aftercare instructions",
    ],
    precautions: [
      "Sun avoidance essential",
      "Not for tanned skin",
      "Patch test recommended",
      "Mild redness expected",
    ],
    results:
      "Lightening in 2-4 weeks with optimal results after full treatment course",
    maintenance: "Maintenance sessions as needed",
  },

  "microneedling-radiofrequency-stretch-marks": {
    name: "Microneedling Radiofrequency for Stretch Marks",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Advanced combination treatment using radiofrequency energy with microneedling to treat stretch marks and improve skin texture and elasticity.",
    duration: "60-75 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.8,
    reviews: 134,
    benefits: [
      "Reduces stretch mark appearance",
      "Stimulates deep collagen",
      "Improves skin elasticity",
      "Treats old stretch marks",
      "Enhances skin texture",
      "Long-lasting improvement",
    ],
    process: [
      "Stretch mark evaluation",
      "Anesthesia application",
      "RF microneedling treatment",
      "Cooling and recovery",
      "Post-treatment care",
    ],
    precautions: [
      "Realistic expectations",
      "Multiple sessions required",
      "Mild discomfort expected",
      "Sun protection essential",
    ],
    results:
      "Visible improvement in 6-8 weeks with continued progress over 4-6 months",
    maintenance: "Maintenance treatments every 6-12 months",
  },

  // Under Eyes Treatments
  "dark-circles-removal": {
    name: "Dark Circles Removal",
    category: "Under Eyes Services",
    categoryPath: "/treatment/under-eyes",
    description:
      "Comprehensive treatment targeting dark circles under eyes using advanced techniques including laser therapy, chemical peels, and topical treatments.",
    duration: "30-45 mins",
    sessions: "4-8 sessions recommended",
    rating: 4.7,
    reviews: 156,
    benefits: [
      "Reduces dark circles appearance",
      "Brightens under eye area",
      "Improves skin tone",
      "Reduces puffiness",
      "Enhances eye appearance",
      "Boosts confidence",
    ],
    process: [
      "Eye area assessment",
      "Custom treatment plan",
      "Targeted therapy application",
      "Gentle massage techniques",
      "Home care regimen",
    ],
    precautions: [
      "Gentle eye area care",
      "Avoid rubbing eyes",
      "Sun protection for area",
      "Patch test recommended",
    ],
    results:
      "Visible brightening in 2-4 weeks with optimal results after 2-3 months",
    maintenance: "Monthly maintenance treatments",
  },

  "under-eye-rejuvenation": {
    name: "Under Eye Rejuvenation",
    category: "Under Eyes Services",
    categoryPath: "/treatment/under-eyes",
    description:
      "Complete under eye rejuvenation treatment combining multiple modalities to reduce wrinkles, dark circles, and signs of aging around the delicate eye area.",
    duration: "45-60 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.8,
    reviews: 189,
    benefits: [
      "Reduces fine lines and wrinkles",
      "Brightens dark circles",
      "Firms loose skin",
      "Reduces puffiness",
      "Improves skin texture",
      "Youthful eye appearance",
    ],
    process: [
      "Comprehensive eye assessment",
      "Multi-modal treatment approach",
      "Gentle application techniques",
      "LED light therapy",
      "Recovery and aftercare",
    ],
    precautions: [
      "Avoid eye makeup initially",
      "Gentle cleansing only",
      "Sun protection essential",
      "No harsh products",
    ],
    results:
      "Progressive improvement over 4-6 weeks with optimal results at 3 months",
    maintenance: "Maintenance sessions every 3-6 months",
  },

  "under-eye-boosters": {
    name: "Under Eye Boosters",
    category: "Under Eyes Services",
    categoryPath: "/treatment/under-eyes",
    description:
      "Specialized injectable treatments using hyaluronic acid and vitamins to plump, hydrate, and rejuvenate the under eye area for a refreshed appearance.",
    duration: "30-45 mins",
    sessions: "2-3 sessions recommended",
    rating: 4.6,
    reviews: 134,
    benefits: [
      "Plumps hollow under eyes",
      "Hydrates delicate skin",
      "Reduces dark circles",
      "Smoothens fine lines",
      "Improves skin elasticity",
      "Natural-looking results",
    ],
    process: [
      "Eye area consultation",
      "Treatment planning",
      "Precise injection technique",
      "Cooling and massage",
      "Post-treatment care",
    ],
    precautions: [
      "Medical consultation required",
      "Avoid blood thinners",
      "Mild bruising possible",
      "Ice application helpful",
    ],
    results: "Immediate plumping with optimal results in 2 weeks",
    maintenance: "Maintenance treatments every 6-12 months",
  },

  // Additional Pigmentation Treatments
  "hydrafacial-basic": {
    name: "HydraFacial Basic",
    category: "Pigmentation",
    categoryPath: "/treatment/pigmentation",
    description:
      "Gentle yet effective hydradermabrasion treatment that cleanses, exfoliates, and infuses hydration to improve skin tone and texture.",
    duration: "30-45 mins",
    sessions: "Monthly recommended",
    rating: 4.7,
    reviews: 203,
    benefits: [
      "Deep cleansing and exfoliation",
      "Intense hydration",
      "Improved skin tone",
      "Reduced pore appearance",
      "Enhanced glow",
      "Suitable for all skin types",
    ],
    process: [
      "Skin analysis",
      "Hydradermabrasion cleansing",
      "Gentle exfoliation",
      "Serum infusion",
      "Hydrating mask",
    ],
    precautions: [
      "Mild suction sensation",
      "No downtime",
      "Safe for sensitive skin",
      "Immediate return to activities",
    ],
    results: "Instant glow with cumulative benefits over time",
    maintenance: "Monthly treatments for optimal results",
  },

  "hydrafacial-elite": {
    name: "HydraFacial Elite",
    category: "Pigmentation",
    categoryPath: "/treatment/pigmentation",
    description:
      "Advanced hydradermabrasion treatment with lymphatic drainage and booster serums for comprehensive skin rejuvenation and brightening.",
    duration: "45-60 mins",
    sessions: "Bi-weekly to monthly",
    rating: 4.8,
    reviews: 167,
    benefits: [
      "Advanced cleansing technology",
      "Lymphatic drainage",
      "Customizable booster serums",
      "Deep hydration",
      "Brightening effects",
      "Anti-aging benefits",
    ],
    process: [
      "Comprehensive skin assessment",
      "Multi-step hydradermabrasion",
      "Lymphatic massage",
      "Booster serum infusion",
      "LED therapy",
    ],
    precautions: [
      "No makeup for 24 hours",
      "Sun protection advised",
      "Mild redness possible",
      "Stay hydrated",
    ],
    results: "Immediate radiance with progressive improvement over sessions",
    maintenance: "Regular treatments for sustained benefits",
  },

  "skin-boosters-pigmentation": {
    name: "Skin Boosters for Pigmentation",
    category: "Pigmentation",
    categoryPath: "/treatment/pigmentation",
    description:
      "Injectable skin boosters containing hyaluronic acid and brightening agents to hydrate, plump, and reduce pigmentation from within.",
    duration: "30-45 mins",
    sessions: "3-4 sessions recommended",
    rating: 4.6,
    reviews: 145,
    benefits: [
      "Deep hydration",
      "Pigmentation reduction",
      "Improved skin texture",
      "Natural brightening",
      "Collagen stimulation",
      "Long-lasting effects",
    ],
    process: [
      "Skin condition assessment",
      "Treatment planning",
      "Precise injection technique",
      "Cooling application",
      "Aftercare instructions",
    ],
    precautions: [
      "Medical consultation required",
      "Mild bruising possible",
      "Avoid strenuous exercise",
      "Sun protection essential",
    ],
    results:
      "Progressive brightening over 4-6 weeks with optimal results at 3 months",
    maintenance: "Maintenance sessions every 6-12 months",
  },

  // Medifacial Treatments
  "diamond-polishing": {
    name: "Diamond Polishing",
    category: "Medifacial",
    categoryPath: "/treatment/medifacial",
    description:
      "Advanced diamond tip microdermabrasion treatment that gently exfoliates dead skin cells, revealing smoother, brighter, and more radiant skin.",
    duration: "45-60 mins",
    sessions: "Bi-weekly to monthly",
    rating: 4.7,
    reviews: 178,
    benefits: [
      "Gentle yet effective exfoliation",
      "Removes dead skin cells",
      "Improves skin texture",
      "Enhances product absorption",
      "Stimulates circulation",
      "Safe for sensitive skin",
    ],
    process: [
      "Skin preparation",
      "Diamond tip exfoliation",
      "Vacuum extraction",
      "Serum infusion",
      "Calming treatment",
    ],
    precautions: [
      "Mild suction sensation",
      "Temporary redness",
      "Sun protection advised",
      "Stay hydrated",
    ],
    results: "Immediate smoothness with cumulative glow over time",
    maintenance: "Regular treatments for maintained results",
  },

  "oxy-facials": {
    name: "OxyFacials",
    category: "Medifacial",
    categoryPath: "/treatment/medifacial",
    description:
      "Oxygen-infused facial treatment that delivers concentrated oxygen and nutrients deep into the skin for rejuvenation and brightening effects.",
    duration: "45-60 mins",
    sessions: "Weekly to bi-weekly",
    rating: 4.6,
    reviews: 145,
    benefits: [
      "Oxygen infusion for skin health",
      "Deep hydration",
      "Improved circulation",
      "Enhanced collagen production",
      "Brightening effects",
      "Anti-aging benefits",
    ],
    process: [
      "Oxygen level assessment",
      "Infusion preparation",
      "Oxygen delivery",
      "Nutrient application",
      "Relaxing massage",
    ],
    precautions: [
      "Avoid heavy makeup",
      "Stay hydrated",
      "Sun protection recommended",
      "Mild tingling sensation",
    ],
    results: "Immediate freshness with progressive improvement over sessions",
    maintenance: "Regular sessions for optimal oxygenation",
  },

  "oxyglow-treatment": {
    name: "Oxyglow Treatment",
    category: "Medifacial",
    categoryPath: "/treatment/medifacial",
    description:
      "Premium oxygen facial combining oxygen infusion with brightening serums and LED therapy for maximum skin illumination and rejuvenation.",
    duration: "60-75 mins",
    sessions: "Weekly recommended",
    rating: 4.8,
    reviews: 189,
    benefits: [
      "Maximum oxygen delivery",
      "Intense brightening",
      "LED light therapy",
      "Deep nourishment",
      "Radiant glow",
      "Anti-inflammatory effects",
    ],
    process: [
      "Comprehensive skin analysis",
      "Oxygen infusion setup",
      "Brightening serum application",
      "LED therapy session",
      "Spa-like relaxation",
    ],
    precautions: [
      "Premium treatment pricing",
      "Advanced technology",
      "Professional supervision",
      "Results-oriented approach",
    ],
    results: "Dramatic glow improvement with continued enhancement over time",
    maintenance: "Weekly treatments for sustained radiance",
  },

  "instabright-rejuvenation": {
    name: "InstaBright Rejuvenation",
    category: "Medifacial",
    categoryPath: "/treatment/medifacial",
    description:
      "Instant brightening facial treatment using advanced formulations and techniques to deliver immediate radiance and long-term skin improvement.",
    duration: "50-65 mins",
    sessions: "Bi-weekly recommended",
    rating: 4.7,
    reviews: 156,
    benefits: [
      "Instant brightening results",
      "Vitamin C infusion",
      "Antioxidant protection",
      "Hydration boost",
      "Even skin tone",
      "Youthful appearance",
    ],
    process: [
      "Brightening assessment",
      "Vitamin-rich preparation",
      "Layered treatment application",
      "Massage techniques",
      "Instant glow enhancement",
    ],
    precautions: [
      "Patch test recommended",
      "Sun protection essential",
      "Avoid retinoids temporarily",
      "Stay hydrated",
    ],
    results: "Immediate radiance with cumulative brightening effects",
    maintenance: "Regular treatments for maintained glow",
  },

  "powerlift-medifacial": {
    name: "Powerlift Medifacial",
    category: "Medifacial",
    categoryPath: "/treatment/medifacial",
    description:
      "Advanced lifting facial treatment combining peptides, firming agents, and massage techniques for instant and progressive skin tightening effects.",
    duration: "75-90 mins",
    sessions: "Weekly to bi-weekly",
    rating: 4.9,
    reviews: 203,
    benefits: [
      "Instant lifting effect",
      "Peptide technology",
      "Improved skin firmness",
      "Reduced fine lines",
      "Enhanced contours",
      "Professional results",
    ],
    process: [
      "Skin elasticity assessment",
      "Lifting preparation",
      "Peptide application",
      "Specialized massage",
      "Firming mask",
    ],
    precautions: [
      "Premium treatment",
      "Professional technique",
      "Results vary by age",
      "Maintenance required",
    ],
    results: "Immediate lift with progressive firming over 4-6 weeks",
    maintenance: "Regular sessions for sustained lifting effects",
  },

  "power-glow-facial": {
    name: "Power Glow Facial",
    category: "Medifacial",
    categoryPath: "/treatment/medifacial",
    description:
      "High-performance facial treatment combining multiple brightening technologies and ingredients for maximum skin illumination and health.",
    duration: "60-75 mins",
    sessions: "Weekly recommended",
    rating: 4.8,
    reviews: 178,
    benefits: [
      "Maximum glow enhancement",
      "Multi-technology approach",
      "Vitamin infusion",
      "Antioxidant boost",
      "Deep nourishment",
      "Radiant complexion",
    ],
    process: [
      "Glow assessment",
      "Multi-step treatment",
      "Technology application",
      "Vitamin delivery",
      "Relaxation techniques",
    ],
    precautions: [
      "Advanced treatment",
      "Professional care required",
      "Sun protection mandatory",
      "Hydration essential",
    ],
    results: "Exceptional radiance with progressive skin health improvement",
    maintenance: "Weekly treatments for optimal glow maintenance",
  },

  "iv-infusions-glow": {
    name: "IV Infusions for Glow",
    category: "Medifacial",
    categoryPath: "/treatment/medifacial",
    description:
      "Intravenous vitamin and nutrient infusions designed to enhance skin glow, health, and vitality from the inside out for comprehensive beauty benefits.",
    duration: "45-60 mins",
    sessions: "Weekly to monthly",
    rating: 4.7,
    reviews: 145,
    benefits: [
      "Internal skin nourishment",
      "Vitamin delivery system",
      "Enhanced glow from within",
      "Improved skin health",
      "Antioxidant protection",
      "Overall wellness boost",
    ],
    process: [
      "Health assessment",
      "IV cocktail preparation",
      "Sterile infusion",
      "Monitoring during treatment",
      "Post-infusion care",
    ],
    precautions: [
      "Medical supervision required",
      "Health screening necessary",
      "Mild discomfort possible",
      "Hydration focus",
    ],
    results: "Progressive internal glow with enhanced skin radiance over time",
    maintenance: "Regular infusions for sustained benefits",
  },

  // Anti Aging Treatments
  "wrinkles-treatment": {
    name: "Wrinkles Treatment",
    category: "Anti Aging",
    categoryPath: "/treatment/anti-aging",
    description:
      "Comprehensive wrinkle reduction treatment combining neuromodulators, dermal fillers, and skin resurfacing techniques for youthful skin restoration.",
    duration: "45-60 mins",
    sessions: "Varies by treatment type",
    rating: 4.8,
    reviews: 234,
    benefits: [
      "Reduces fine lines and wrinkles",
      "Restores facial volume",
      "Improves skin texture",
      "Enhances facial contours",
      "Youthful appearance",
      "Natural-looking results",
    ],
    process: [
      "Facial assessment",
      "Custom treatment plan",
      "Precision application",
      "Relaxation techniques",
      "Aftercare instructions",
    ],
    precautions: [
      "Medical consultation required",
      "Avoid blood thinners",
      "Mild bruising possible",
      "Sun protection essential",
    ],
    results:
      "Visible improvement in 1-2 weeks with optimal results at 2-4 weeks",
    maintenance: "Maintenance treatments every 3-6 months",
  },

  "anti-aging-peels": {
    name: "Anti-aging Peels",
    category: "Anti Aging",
    categoryPath: "/treatment/anti-aging",
    description:
      "Medical-grade chemical peels specifically formulated for mature skin to stimulate collagen production, reduce wrinkles, and improve skin elasticity.",
    duration: "45-60 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.7,
    reviews: 189,
    benefits: [
      "Stimulates collagen production",
      "Reduces fine lines",
      "Improves skin elasticity",
      "Enhances skin texture",
      "Brightens complexion",
      "Anti-aging effects",
    ],
    process: [
      "Skin maturity assessment",
      "Peel strength selection",
      "Controlled application",
      "Neutralization process",
      "Recovery care plan",
    ],
    precautions: [
      "Downtime expected",
      "Sun protection mandatory",
      "Retinoid preparation",
      "Hydration essential",
    ],
    results:
      "Progressive improvement over 4-6 weeks with optimal results after full course",
    maintenance: "Maintenance peels every 3-6 months",
  },

  "collagen-boosters": {
    name: "Collagen Boosters",
    category: "Anti Aging",
    categoryPath: "/treatment/anti-aging",
    description:
      "Advanced collagen-stimulating treatments including injectables, microneedling, and topical therapies to restore skin firmness and elasticity.",
    duration: "45-75 mins",
    sessions: "3-6 sessions recommended",
    rating: 4.8,
    reviews: 203,
    benefits: [
      "Boosts collagen production",
      "Improves skin firmness",
      "Reduces sagging",
      "Enhances elasticity",
      "Fills fine lines",
      "Youthful skin restoration",
    ],
    process: [
      "Skin condition evaluation",
      "Collagen assessment",
      "Treatment application",
      "Stimulation techniques",
      "Home care regimen",
    ],
    precautions: [
      "Realistic expectations",
      "Multiple sessions needed",
      "Sun protection essential",
      "Healthy lifestyle support",
    ],
    results:
      "Progressive firming over 4-8 weeks with optimal results at 3-6 months",
    maintenance: "Maintenance treatments every 6-12 months",
  },

  "skin-tightening-treatment": {
    name: "Skin Tightening Treatment",
    category: "Anti Aging",
    categoryPath: "/treatment/anti-aging",
    description:
      "Non-invasive skin tightening using radiofrequency, ultrasound, or laser technologies to lift and firm sagging skin for a more youthful appearance.",
    duration: "45-75 mins",
    sessions: "3-5 sessions recommended",
    rating: 4.9,
    reviews: 245,
    benefits: [
      "Lifts sagging skin",
      "Improves facial contours",
      "Reduces jowls",
      "Tightens neck skin",
      "Non-invasive procedure",
      "Natural-looking results",
    ],
    process: [
      "Skin laxity assessment",
      "Technology selection",
      "Treatment application",
      "Cooling techniques",
      "Post-treatment care",
    ],
    precautions: [
      "Mild discomfort possible",
      "Temporary redness",
      "Sun protection essential",
      "Results vary by age",
    ],
    results:
      "Progressive tightening over 2-6 months with optimal results at 3-6 months",
    maintenance: "Annual maintenance treatments",
  },

  // Laser Treatments
  "laser-hair-removal": {
    name: "Laser Hair Removal",
    category: "Laser",
    categoryPath: "/treatment/laser",
    description:
      "Advanced laser technology for permanent hair reduction, targeting hair follicles with precision to eliminate unwanted hair growth safely and effectively.",
    duration: "30-60 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.7,
    reviews: 312,
    benefits: [
      "Permanent hair reduction",
      "Precision targeting",
      "Safe for most skin types",
      "Minimal discomfort",
      "Fast treatment sessions",
      "Long-lasting results",
    ],
    process: [
      "Area assessment and mapping",
      "Skin type evaluation",
      "Laser parameter setting",
      "Treatment application",
      "Cooling and comfort measures",
    ],
    precautions: [
      "Avoid sun exposure",
      "No plucking or waxing",
      "Shave treatment area",
      "Patch test recommended",
    ],
    results:
      "Visible reduction after 3-4 sessions with optimal results after full course",
    maintenance: "Annual touch-up sessions",
  },

  "laser-hair-reduction-females": {
    name: "Laser Hair Reduction for Females",
    category: "Laser",
    categoryPath: "/treatment/laser",
    description:
      "Specialized laser hair removal treatments designed specifically for female patients, addressing common areas of concern with gender-specific protocols.",
    duration: "45-75 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.8,
    reviews: 267,
    benefits: [
      "Female-specific protocols",
      "Addresses common areas",
      "Hormone-aware treatment",
      "Gentle on sensitive skin",
      "Comprehensive coverage",
      "Confidence boost",
    ],
    process: [
      "Comprehensive consultation",
      "Area-specific planning",
      "Gentle laser application",
      "Comfort-focused techniques",
      "Follow-up care",
    ],
    precautions: [
      "Hormonal considerations",
      "Skin sensitivity awareness",
      "Sun protection essential",
      "Proper aftercare",
    ],
    results:
      "Progressive hair reduction with optimal feminine smoothing achieved",
    maintenance: "Maintenance sessions as needed",
  },

  "laser-hair-reduction-males": {
    name: "Laser Hair Reduction for Males",
    category: "Laser",
    categoryPath: "/treatment/laser",
    description:
      "Advanced laser hair removal treatments tailored for male patients, addressing thicker hair and larger treatment areas with powerful, effective technology.",
    duration: "60-90 mins",
    sessions: "8-10 sessions recommended",
    rating: 4.7,
    reviews: 198,
    benefits: [
      "Powerful laser technology",
      "Handles thicker hair",
      "Large area coverage",
      "Masculine skin tolerance",
      "Comprehensive treatment",
      "Professional results",
    ],
    process: [
      "Thorough skin assessment",
      "Power setting calibration",
      "Strategic treatment approach",
      "Cooling techniques",
      "Progress monitoring",
    ],
    precautions: [
      "Higher energy tolerance",
      "Larger treatment areas",
      "Thicker hair considerations",
      "Proper cooling essential",
    ],
    results: "Significant reduction with optimal masculine grooming achieved",
    maintenance: "Periodic maintenance for sustained results",
  },

  "birthmark-removal": {
    name: "Birthmark Removal",
    category: "Laser",
    categoryPath: "/treatment/laser",
    description:
      "Precision laser treatment for safe and effective removal of various types of birthmarks, using advanced laser technology for optimal cosmetic results.",
    duration: "30-60 mins",
    sessions: "Multiple sessions based on birthmark type",
    rating: 4.6,
    reviews: 145,
    benefits: [
      "Safe birthmark removal",
      "Precision targeting",
      "Minimal scarring",
      "Various birthmark types",
      "Cosmetic improvement",
      "Professional care",
    ],
    process: [
      "Birthmark evaluation",
      "Laser type selection",
      "Test treatment",
      "Full treatment sessions",
      "Healing monitoring",
    ],
    precautions: [
      "Medical evaluation required",
      "Multiple sessions needed",
      "Skin type considerations",
      "Realistic expectations",
    ],
    results: "Progressive fading with optimal removal over treatment course",
    maintenance: "Follow-up monitoring recommended",
  },

  "tattoo-removal": {
    name: "Tattoo Removal",
    category: "Laser",
    categoryPath: "/treatment/laser",
    description:
      "Advanced laser tattoo removal using Q-switched lasers to break down tattoo ink particles, allowing the body to naturally eliminate them over time.",
    duration: "30-60 mins",
    sessions: "6-12 sessions or more",
    rating: 4.5,
    reviews: 167,
    benefits: [
      "Effective ink removal",
      "Various tattoo types",
      "Professional results",
      "Safe procedure",
      "Minimal scarring",
      "Body natural elimination",
    ],
    process: [
      "Tattoo assessment",
      "Laser parameter setting",
      "Treatment application",
      "Aftercare instructions",
      "Progress tracking",
    ],
    precautions: [
      "Multiple sessions required",
      "Discomfort during treatment",
      "Skin protection essential",
      "Realistic time frame",
    ],
    results:
      "Progressive fading with complete removal possible over 12-18 months",
    maintenance: "Patience and consistency required",
  },

  "laser-mole-removal": {
    name: "Laser Mole Removal",
    category: "Laser",
    categoryPath: "/treatment/laser",
    description:
      "Non-surgical laser treatment for mole removal using precise laser energy to safely eliminate moles with minimal scarring and downtime.",
    duration: "20-40 mins",
    sessions: "1-3 sessions usually sufficient",
    rating: 4.7,
    reviews: 134,
    benefits: [
      "Non-surgical procedure",
      "Minimal scarring",
      "Quick recovery",
      "Precise targeting",
      "Safe technique",
      "Professional results",
    ],
    process: [
      "Mole examination",
      "Laser calibration",
      "Precise treatment",
      "Wound care",
      "Follow-up assessment",
    ],
    precautions: [
      "Medical consultation",
      "Biopsy if needed",
      "Sun protection",
      "Gentle care",
    ],
    results: "Complete removal with healing in 1-2 weeks",
    maintenance: "Regular skin checks advised",
  },

  "wart-removal-laser": {
    name: "Wart Removal Laser",
    category: "Laser",
    categoryPath: "/treatment/laser",
    description:
      "Advanced laser treatment for wart removal using focused laser energy to destroy wart tissue while preserving surrounding healthy skin.",
    duration: "15-30 mins",
    sessions: "1-2 sessions usually sufficient",
    rating: 4.6,
    reviews: 98,
    benefits: [
      "Effective wart elimination",
      "Precision treatment",
      "Minimal damage to healthy skin",
      "Quick procedure",
      "Low recurrence rate",
      "Safe method",
    ],
    process: [
      "Wart assessment",
      "Laser targeting",
      "Precise application",
      "Post-treatment care",
      "Healing monitoring",
    ],
    precautions: [
      "Local anesthesia",
      "Minor discomfort",
      "Keep area clean",
      "Follow care instructions",
    ],
    results: "Complete removal with healing in 1-2 weeks",
    maintenance: "Low recurrence with proper care",
  },

  // Body Contouring Treatments
  "weight-loss-treatments": {
    name: "Weight Loss Treatments",
    category: "Body Contouring",
    categoryPath: "/treatment/body-contouring",
    description:
      "Comprehensive weight loss treatment combining advanced technologies, nutritional guidance, and lifestyle modifications for sustainable fat reduction.",
    duration: "60-90 mins",
    sessions: "Weekly recommended",
    rating: 4.7,
    reviews: 234,
    benefits: [
      "Targeted fat reduction",
      "Metabolic enhancement",
      "Body contouring",
      "Improved body composition",
      "Sustainable results",
      "Holistic approach",
    ],
    process: [
      "Body composition analysis",
      "Custom treatment plan",
      "Technology application",
      "Nutritional guidance",
      "Lifestyle coaching",
    ],
    precautions: [
      "Medical consultation required",
      "Realistic goal setting",
      "Healthy lifestyle commitment",
      "Regular monitoring",
    ],
    results:
      "Progressive weight loss with optimal body shaping over 3-6 months",
    maintenance: "Ongoing lifestyle maintenance",
  },

  "cellulite-treatment": {
    name: "Cellulite Treatment",
    category: "Body Contouring",
    categoryPath: "/treatment/body-contouring",
    description:
      "Advanced cellulite reduction treatment using combination therapies including massage, radiofrequency, and topical treatments to smooth skin texture.",
    duration: "45-75 mins",
    sessions: "8-12 sessions recommended",
    rating: 4.6,
    reviews: 189,
    benefits: [
      "Reduces cellulite appearance",
      "Smooths skin texture",
      "Improves circulation",
      "Enhances skin elasticity",
      "Body confidence boost",
      "Non-invasive approach",
    ],
    process: [
      "Cellulite assessment",
      "Treatment combination",
      "Massage techniques",
      "Technology application",
      "Home care regimen",
    ],
    precautions: [
      "Multiple sessions needed",
      "Maintenance required",
      "Healthy lifestyle support",
      "Realistic expectations",
    ],
    results:
      "Visible improvement in 4-6 weeks with optimal results after full course",
    maintenance: "Regular maintenance sessions",
  },

  "cryolipolysis-treatment": {
    name: "Cryolipolysis Treatment",
    category: "Body Contouring",
    categoryPath: "/treatment/body-contouring",
    description:
      "Non-invasive fat freezing technology that targets and eliminates stubborn fat cells through controlled cooling, resulting in permanent fat reduction.",
    duration: "45-75 mins",
    sessions: "1-3 sessions per area",
    rating: 4.8,
    reviews: 267,
    benefits: [
      "Permanent fat reduction",
      "Non-invasive procedure",
      "No downtime",
      "Targeted fat elimination",
      "Natural-looking results",
      "Safe and effective",
    ],
    process: [
      "Area assessment",
      "Applicator placement",
      "Cooling treatment",
      "Massage completion",
      "Recovery monitoring",
    ],
    precautions: [
      "Mild discomfort possible",
      "Temporary numbness",
      "Results take time",
      "Healthy candidates only",
    ],
    results: "Visible reduction in 4-6 weeks with optimal results at 3 months",
    maintenance: "Healthy lifestyle maintenance",
  },

  "body-shaping-treatment": {
    name: "Body Shaping Treatment",
    category: "Body Contouring",
    categoryPath: "/treatment/body-contouring",
    description:
      "Comprehensive body contouring treatment combining multiple technologies and techniques to sculpt and shape the body for desired proportions.",
    duration: "75-120 mins",
    sessions: "6-10 sessions recommended",
    rating: 4.7,
    reviews: 203,
    benefits: [
      "Comprehensive body sculpting",
      "Multiple technology approach",
      "Customized results",
      "Improved proportions",
      "Enhanced body confidence",
      "Professional guidance",
    ],
    process: [
      "Body analysis and goals",
      "Treatment plan development",
      "Multi-modal application",
      "Progress tracking",
      "Adjustment as needed",
    ],
    precautions: [
      "Realistic expectations",
      "Commitment to sessions",
      "Healthy lifestyle",
      "Professional supervision",
    ],
    results:
      "Progressive shaping over 8-12 weeks with optimal results after full course",
    maintenance: "Regular maintenance for sustained results",
  },

  "fat-reduction-treatment": {
    name: "Fat Reduction Treatment",
    category: "Body Contouring",
    categoryPath: "/treatment/body-contouring",
    description:
      "Advanced fat reduction treatment using ultrasound, radiofrequency, or injection technologies to eliminate stubborn fat deposits safely and effectively.",
    duration: "45-90 mins",
    sessions: "3-6 sessions per area",
    rating: 4.6,
    reviews: 178,
    benefits: [
      "Targeted fat elimination",
      "Multiple technology options",
      "Safe procedures",
      "Minimal downtime",
      "Natural-looking results",
      "Body contouring",
    ],
    process: [
      "Fat assessment",
      "Technology selection",
      "Treatment application",
      "Safety monitoring",
      "Aftercare instructions",
    ],
    precautions: [
      "Area-specific limitations",
      "Health screening",
      "Realistic expectations",
      "Lifestyle factors",
    ],
    results:
      "Progressive reduction over 6-8 weeks with optimal results at 3-4 months",
    maintenance: "Healthy maintenance lifestyle",
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
