import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  UserOutlined,
  SafetyOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import hairImage from "../../assets/images/hair.jpg";
import skinImage from "../../assets/images/skin.jpg";
import acneImage from "../../assets/images/acne.jpg";
import underEyesImage from "../../assets/images/under_eyes.png";
import pigmentationImage from "../../assets/images/pigmentation.png";
import medifacialImage from "../../assets/images/medifacial.png";
import antiAgingImage from "../../assets/images/anti_aging.png";
import laserImage from "../../assets/images/laser.png";
import bodyContouringImage from "../../assets/images/slimming.png";

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

const BEFORE_CARE_KEYWORDS = [
  "before",
  "prior",
  "come with",
  "bring",
  "inform",
  "discontinue",
  "patch test",
  "not recommended",
  "no active",
  "stable medical condition",
  "avoid alcohol",
  "avoid smoking",
];

const AFTER_CARE_KEYWORDS = [
  "post-treatment",
  "post treatment",
  "after treatment",
  "aftercare",
  "after",
  "avoid washing",
  "stay out",
  "no harsh",
  "follow-up",
  "follow up",
  "24 hours post",
  "48 hours",
  "1 week",
];

const CATEGORY_VISUALS = {
  "Hair Treatments": {
    image: hairImage,
    badge: "Hair Restoration Care",
    highlights: ["Scalp wellness", "Root support", "Regrowth planning"],
  },
  "Hair Thinning / Hair Fall": {
    image: hairImage,
    badge: "Targeted Hair Regrowth Care",
    highlights: ["Fall control", "Follicle support", "Density planning"],
  },
  Dandruff: {
    image: hairImage,
    badge: "Scalp Balance Care",
    highlights: ["Scalp reset", "Flake control", "Barrier comfort"],
  },
  "Skin Treatments": {
    image: skinImage,
    badge: "Skin Rejuvenation Care",
    highlights: ["Texture renewal", "Glow planning", "Barrier support"],
  },
  "Pigmentation Solutions": {
    image: pigmentationImage,
    badge: "Pigmentation Correction",
    highlights: ["Even tone", "Clarity focus", "Melasma support"],
  },
  Pigmentation: {
    image: pigmentationImage,
    badge: "Pigmentation Correction",
    highlights: ["Even tone", "Brightness", "Tone refinement"],
  },
  "Acne and Scars": {
    image: acneImage,
    badge: "Acne And Scar Revision",
    highlights: ["Scar care", "Texture repair", "Blemish control"],
  },
  "Under Eyes Services": {
    image: underEyesImage,
    badge: "Under-Eye Rejuvenation",
    highlights: ["Dark circles", "Hollowness", "Eye refresh"],
  },
  Medifacial: {
    image: medifacialImage,
    badge: "Medical Facial Care",
    highlights: ["Glow renewal", "Hydration", "Event-ready finish"],
  },
  "Anti Aging": {
    image: antiAgingImage,
    badge: "Age-Refinement Care",
    highlights: ["Firmness", "Fine lines", "Collagen support"],
  },
  Laser: {
    image: laserImage,
    badge: "Precision Laser Care",
    highlights: ["Technology-led", "Targeted care", "Refined results"],
  },
  Ayurveda: {
    image: skinImage,
    badge: "Ayurvedic Wellness Care",
    highlights: ["Deep relaxation", "Traditional ritual", "Restorative balance"],
  },
  "Body Contouring": {
    image: bodyContouringImage,
    badge: "Body Contouring Care",
    highlights: ["Shape refinement", "Contour support", "Non-invasive care"],
  },
  "Weight Loss Program": {
    image: bodyContouringImage,
    badge: "Weight Management Contouring",
    highlights: ["Slimming focus", "Inch loss", "Reduction planning"],
  },
  "Body Shaping and Targeted Weight Loss Program": {
    image: bodyContouringImage,
    badge: "Targeted Sculpting Care",
    highlights: ["Shape definition", "Target zones", "Contour refinement"],
  },
  default: {
    image: skinImage,
    badge: "Signature Aesthetic Care",
    highlights: ["Personalized plan", "Expert guidance", "Refined results"],
  },
};

// Service data with detailed information
const SERVICE_DATA = {
  // Hair Treatments
  "qr678-treatment": {
    name: "QR678 Treatment",
    category: "Hair Thinning / Hair Fall",
    categoryPath: "/treatment/hair-thinning-hair-fall",
    description:
      "QR678 is a revolutionary peptide-based hair restoration treatment that uses advanced biotechnology to combat hair loss at the cellular level. This innovative therapy targets the root causes of hair thinning and baldness by stimulating dormant hair follicles and promoting healthy hair growth cycles.",
    duration: "45-60 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.9,
    reviews: 156,
    purpose:
      "Designed specifically for individuals experiencing androgenetic alopecia (pattern hair loss), telogen effluvium, or general hair thinning. The treatment works by reactivating dormant hair follicles and strengthening existing hair roots to prevent further loss and promote regrowth.",
    procedure:
      "The QR678 treatment involves the application of a specialized peptide solution directly to the scalp using advanced delivery methods. Low-level light therapy is then used to enhance the absorption and effectiveness of the peptides. The treatment is painless and requires no downtime.",
    benefits: [
      "Stimulates dormant hair follicles back to active growth phase",
      "Promotes natural hair growth cycles (anagen phase extension)",
      "Strengthens existing hair roots and prevents miniaturization",
      "Improves overall hair density and thickness",
      "Reduces hair loss progression significantly",
      "Safe for both men and women of all ages",
      "No systemic side effects or hormonal changes",
      "Compatible with other hair restoration treatments",
      "Long-lasting results with proper maintenance",
      "Improves scalp health and reduces inflammation",
    ],
    process: [
      "Comprehensive scalp analysis and hair loss assessment",
      "Customized treatment plan based on individual hair loss pattern",
      "Application of QR678 peptide complex to affected areas",
      "Low-level light therapy (LLLT) stimulation for enhanced absorption",
      "Post-treatment scalp massage for better circulation",
      "Detailed aftercare instructions and product recommendations",
      "Follow-up consultation to monitor progress",
      "Treatment adjustment based on individual response",
    ],
    precautions: [
      "Not recommended during pregnancy or breastfeeding",
      "Avoid washing hair for 24 hours post-treatment to allow absorption",
      "Stay out of direct sunlight and avoid tanning for 48 hours",
      "No harsh chemical treatments, coloring, or perming for 1 week",
      "Discontinue use of minoxidil or other topical treatments 48 hours prior",
      "Inform doctor of any medications or medical conditions",
      "Not suitable for individuals with active scalp infections",
      "Avoid alcohol consumption 24 hours before treatment",
    ],
    results:
      "Most clients notice reduced hair shedding within 4-6 weeks. Visible hair regrowth typically begins at 3-4 months with continued improvement over 6-12 months. Full results are usually achieved after completing the recommended treatment course.",
    maintenance:
      "Maintenance sessions every 4-6 months after initial treatment course. Home care regimen including specialized shampoos, serums, and supplements to maintain results. Regular follow-up consultations to monitor hair health.",
    whatItDoes:
      "QR678 works by delivering bio-active peptides directly to the hair follicle cells, stimulating cellular metabolism and protein synthesis. This reactivates the natural growth cycle, increases blood circulation to the scalp, and strengthens the hair shaft from within. Unlike traditional treatments, QR678 addresses the root cause rather than just symptoms.",
  },
  "prp-hair-treatment": {
    name: "PRP Hair Treatment",
    category: "Hair Thinning / Hair Fall",
    categoryPath: "/treatment/hair-thinning-hair-fall",
    description:
      "PRP hair treatment uses platelet-rich plasma from your own blood to support follicle activity, reduce shedding, and encourage healthier regrowth in thinning areas.",
    duration: "45-60 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.8,
    reviews: 149,
    purpose:
      "Ideal for early to moderate hair fall, reduced density, and weakened follicles that need regenerative support without a surgical route.",
    procedure:
      "A small blood sample is processed to isolate platelet-rich plasma, which is then introduced into targeted scalp zones using precise delivery techniques.",
    benefits: [
      "Helps reduce active hair shedding",
      "Supports healthier follicle function",
      "Improves scalp nourishment",
      "Encourages stronger root anchoring",
      "Can enhance overall hair density",
      "Uses your body's own growth factors",
    ],
    process: [
      "Scalp and hair loss assessment",
      "Blood draw and PRP preparation",
      "Target-area scalp cleansing",
      "PRP application to thinning zones",
      "Post-treatment calming care",
      "Aftercare guidance and follow-up planning",
    ],
    precautions: [
      "Avoid blood-thinning medication only with medical approval",
      "Inform the clinic about scalp infections or active inflammation",
      "Do not wash hair for 24 hours after treatment",
      "Avoid alcohol and smoking 24 hours before and after the session",
      "Delay harsh chemical hair services for a few days",
    ],
    results:
      "Reduced shedding is typically noticed first, followed by gradual improvement in hair quality and visible density over the next few months.",
    maintenance:
      "Periodic maintenance sessions and scalp-supportive home care help sustain gains after the initial PRP plan.",
    whatItDoes:
      "PRP delivers concentrated growth factors back into the scalp to support circulation, follicle signaling, and a healthier environment for regrowth.",
  },
  "exosome-hair-treatment": {
    name: "Exosome Hair Treatment",
    category: "Hair Thinning / Hair Fall",
    categoryPath: "/treatment/hair-thinning-hair-fall",
    description:
      "Exosome hair treatment offers advanced regenerative scalp support to improve follicle signaling, recovery, and the overall conditions needed for stronger regrowth.",
    duration: "50-75 mins",
    sessions: "4-6 sessions recommended",
    rating: 4.9,
    reviews: 121,
    purpose:
      "Recommended for clients seeking next-generation support for persistent thinning, reduced density, or weakened scalp recovery.",
    procedure:
      "After scalp assessment, targeted exosome-based regenerative actives are delivered into treatment areas to support cellular communication and scalp repair.",
    benefits: [
      "Supports follicle regeneration",
      "Improves scalp recovery response",
      "May enhance overall hair quality",
      "Helps create a healthier regrowth environment",
      "Useful in modern combination regrowth plans",
      "Targets thinning with regenerative technology",
    ],
    process: [
      "Clinical assessment and treatment mapping",
      "Preparation of the scalp and target zones",
      "Precision exosome delivery",
      "Supportive calming protocol",
      "Aftercare briefing and progress plan",
    ],
    precautions: [
      "Avoid treatment during active scalp irritation or infection",
      "Pause harsh exfoliating scalp products before the session",
      "Do not wash hair for 24 hours after treatment",
      "Avoid intense sweating and direct heat briefly after care",
      "Follow the advised session schedule for best results",
    ],
    results:
      "Improvement develops gradually as scalp recovery and follicle signaling strengthen, with visible hair quality and density changes building over time.",
    maintenance:
      "Maintenance is individualized and may include combination care, supportive scalp products, and periodic review sessions.",
    whatItDoes:
      "Exosome therapy supports cell-to-cell signaling around the follicle, helping improve repair activity and scalp conditions that influence healthier growth cycles.",
  },
  "hair-growth-boosters": {
    name: "Hair Growth Boosters",
    category: "Hair Thinning / Hair Fall",
    categoryPath: "/treatment/hair-thinning-hair-fall",
    description:
      "Advanced hair growth acceleration treatment combining potent nutrient formulations, growth factors, and cutting-edge delivery systems to stimulate dormant follicles and promote rapid, healthy hair regeneration.",
    duration: "30-45 mins",
    sessions: "8-12 sessions recommended",
    rating: 4.8,
    reviews: 203,
    purpose:
      "Specifically formulated for individuals experiencing slow hair growth, thinning hair, post-pregnancy hair loss, or those seeking to accelerate their natural hair growth cycle. Ideal for both men and women looking to achieve thicker, fuller hair in a shorter timeframe.",
    procedure:
      "This treatment involves the application of specialized growth-boosting serums containing peptides, vitamins, minerals, and botanical extracts. Micro-needling creates micro-channels in the scalp to enhance absorption, followed by LED light therapy to stimulate cellular activity. The process is comfortable and requires no downtime.",
    benefits: [
      "Accelerates natural hair growth by up to 200%",
      "Significantly improves hair density and volume",
      "Strengthens hair follicles from root to tip",
      "Reduces hair thinning and miniaturization",
      "Enhances scalp microcirculation and health",
      "Promotes thicker, stronger, and shinier hair",
      "Safe for all hair types and colors",
      "Compatible with other hair treatments",
      "Long-lasting results with proper maintenance",
      "Improves overall scalp condition and reduces dandruff",
    ],
    process: [
      "Comprehensive scalp analysis and hair condition assessment",
      "Deep cleansing to remove buildup and prepare scalp",
      "Application of multi-phase growth-boosting serums",
      "Micro-needling treatment for enhanced product penetration",
      "LED light therapy to stimulate follicle activity",
      "Scalp massage for improved circulation",
      "Post-treatment protective barrier application",
      "Detailed home care regimen and product recommendations",
    ],
    precautions: [
      "Patch test recommended for sensitive skin",
      "Not recommended during pregnancy or breastfeeding",
      "Avoid washing hair for 24 hours post-treatment",
      "Stay out of direct sunlight and avoid tanning for 48 hours",
      "No harsh chemical treatments for 1 week",
      "Discontinue retinoid use 48 hours prior",
      "Avoid blood-thinning medications if possible",
      "No alcohol consumption 24 hours before treatment",
    ],
    results:
      "Most clients notice accelerated hair growth within 4-6 weeks. Significant improvement in hair thickness and density is typically visible within 2-3 months, with optimal results achieved after completing the full treatment course of 8-12 sessions.",
    maintenance:
      "Monthly or bi-monthly maintenance treatments after initial course. Daily home care regimen including specialized shampoos, conditioners, and scalp serums. Regular follow-up consultations to monitor progress and adjust treatment plan.",
    whatItDoes:
      "Hair Growth Boosters work by delivering a synergistic blend of growth factors, peptides, and nutrients directly to the hair follicle cells. This stimulates the dermal papilla cells, extends the growth phase of hair cycles, and promotes the production of thicker, healthier hair shafts. Unlike traditional minoxidil treatments, this method provides comprehensive scalp nourishment and cellular-level stimulation for superior results.",
  },
  "gfc-therapy": {
    name: "GFC Therapy",
    category: "Hair Thinning / Hair Fall",
    categoryPath: "/treatment/hair-thinning-hair-fall",
    description:
      "GFC (Growth Factor Concentrate) Therapy represents the pinnacle of regenerative hair restoration, utilizing advanced stem cell-derived growth factors to rejuvenate aging hair follicles and stimulate natural hair regeneration at the cellular level.",
    duration: "50-70 mins",
    sessions: "6-10 sessions recommended",
    rating: 4.9,
    reviews: 178,
    purpose:
      "Specifically designed for individuals with advanced hair loss, weakened follicles, or those who have not responded well to traditional treatments. Particularly effective for androgenetic alopecia, alopecia areata, and age-related hair thinning. This therapy targets the root cause of hair loss rather than just symptoms.",
    procedure:
      "GFC Therapy involves the precise application of concentrated growth factor proteins derived from stem cells. The treatment combines micro-needling for enhanced penetration, specialized delivery systems for optimal absorption, and LED photobiomodulation to maximize cellular response. Each session is customized based on individual scalp condition and hair loss pattern.",
    benefits: [
      "Rejuvenates and reactivates dormant hair follicles",
      "Strengthens hair root structure and anchorage",
      "Significantly improves scalp microcirculation",
      "Reduces chronic scalp inflammation and oxidative stress",
      "Promotes regeneration of new, healthy hair growth",
      "Long-lasting results extending beyond traditional treatments",
      "Improves hair shaft quality and tensile strength",
      "Reduces hair follicle miniaturization",
      "Enhances natural hair growth cycles",
      "Compatible with other advanced hair restoration methods",
    ],
    process: [
      "Detailed scalp mapping and hair loss pattern analysis",
      "Comprehensive medical history and scalp condition assessment",
      "Preparation of personalized GFC concentrate formulation",
      "Deep cleansing and scalp preparation protocol",
      "Precise application of growth factor concentrate",
      "Micro-needling treatment for enhanced product delivery",
      "LED photobiomodulation therapy for cellular activation",
      "Post-treatment scalp conditioning and protection",
      "Comprehensive aftercare instructions and product regimen",
      "Follow-up consultation and progress monitoring",
    ],
    precautions: [
      "Not recommended during pregnancy or breastfeeding",
      "Discontinue blood-thinning medications 5-7 days prior",
      "No active scalp infections or inflammatory conditions",
      "Patch test required 48 hours before first treatment",
      "Avoid retinoids and exfoliating agents 1 week prior",
      "No recent chemical treatments or coloring (4 weeks)",
      "Inform doctor of autoimmune conditions or allergies",
      "Avoid alcohol and smoking 48 hours before treatment",
      "No immunosuppressive medications without medical clearance",
      "Stable medical condition required for treatment",
    ],
    results:
      "Initial improvements in hair quality and scalp health are typically visible within 4-6 weeks. Significant hair regrowth and density improvement occurs between 3-6 months. Optimal results are achieved after completing 6-10 treatment sessions, with continued improvement up to 12 months post-treatment.",
    maintenance:
      "Maintenance protocol consists of quarterly or bi-annual treatment sessions depending on individual response. Daily home care regimen including specialized growth factor serums, nourishing shampoos, and scalp conditioning products. Regular monitoring and adjustment of maintenance schedule based on hair growth response.",
    whatItDoes:
      "GFC Therapy works by delivering concentrated growth factors directly to the hair follicle stem cells, stimulating cellular regeneration and DNA repair mechanisms. This process reactivates the natural hair growth cycle, strengthens the follicle structure, and creates an optimal microenvironment for sustained hair growth. Unlike topical treatments, GFC addresses the fundamental cellular aging and damage that causes permanent hair loss.",
  },
  "specialized-hair-exams": {
    name: "Specialized Hair Exams",
    category: "Hair Thinning / Hair Fall",
    categoryPath: "/treatment/hair-thinning-hair-fall",
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

    purpose:
      "Comprehensive diagnostic assessment for individuals experiencing hair loss, thinning, or scalp concerns. Essential for accurate diagnosis and personalized treatment planning.",
    procedure:
      "Advanced scalp analysis using dermoscopic examination, hair pull tests, and microscopic evaluation to assess follicle health and identify underlying causes of hair concerns.",
    whatItDoes:
      "Detailed examination of scalp condition, hair follicle density, hair shaft quality, and growth patterns to diagnose conditions like androgenetic alopecia, telogen effluvium, or scalp disorders.",
    results:
      "Detailed diagnosis and personalized treatment plan within 24 hours",
    maintenance: "Follow-up consultations every 3 months",
  },
  "scalp-peel-treatment": {
    name: "Scalp Peel Treatment",
    category: "Dandruff",
    categoryPath: "/treatment/dandruff",
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

    purpose:
      "Medical-grade scalp exfoliation for individuals with scalp buildup, dandruff, or compromised scalp health that prevents optimal hair growth.",
    procedure:
      "Professional chemical exfoliation treatment that removes dead skin cells, excess sebum, and product buildup from the scalp to create an optimal environment for hair growth.",
    whatItDoes:
      "Controlled chemical exfoliation dissolves scalp buildup and stimulates cellular turnover, improving scalp health and creating better conditions for hair follicle function.",
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

    purpose:
      "Advanced scar revision for individuals with acne scarring, post-acne marks, or skin texture irregularities seeking smoother, more even skin.",
    procedure:
      "Combination treatment approach using laser resurfacing, chemical peels, microneedling, or dermal fillers to reduce scar appearance and improve skin texture.",
    whatItDoes:
      "Multiple treatment modalities work synergistically to break down scar tissue, stimulate collagen production, and promote skin regeneration for improved texture and appearance.",
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

    purpose:
      "Safe and effective removal of cholesterol deposits around the eyes for individuals with xanthelasma or similar eyelid deposits.",
    procedure:
      "Precision surgical or laser removal of fatty deposits around the eye area with meticulous attention to eyelid anatomy and function.",
    whatItDoes:
      "Targeted removal of cholesterol-laden deposits while preserving eyelid function and achieving optimal cosmetic results with minimal scarring.",
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

    purpose:
      "Safe and effective freckle reduction using laser technology or chemical treatments.",
    procedure:
      "Targeted treatment approach using laser energy or chemical agents to reduce freckle pigmentation.",
    whatItDoes:
      "Selective destruction or inhibition of melanin-producing cells in freckles while preserving normal skin.",
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

    purpose:
      "Medical-grade chemical peels for pigmentation concerns including melasma and sun damage.",
    procedure:
      "Controlled application of depigmenting agents to regulate melanin production and exfoliate pigmented skin.",
    whatItDoes:
      "Chemical exfoliation combined with melanin inhibitors to gradually reduce pigmentation and even skin tone.",
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

    purpose:
      "Professional depigmentation treatment for stubborn pigmentation including melasma.",
    procedure:
      "Multi-step treatment involving intensive depigmenting mask followed by maintenance skincare.",
    whatItDoes:
      "Powerful melanin inhibitors combined with skin renewal to address deep-seated pigmentation issues.",
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

    purpose:
      "Gentle exfoliation treatment for skin brightening and radiance improvement.",
    procedure:
      "Mild chemical exfoliation combined with brightening agents for gradual skin improvement.",
    whatItDoes:
      "Surface exfoliation removes dull skin cells while brightening agents enhance skin luminosity.",
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

    purpose:
      "Microneedling treatment with targeted pigmentation solutions for localized pigment concerns.",
    procedure:
      "Microneedling creates channels for pigment-regulating serums to penetrate deeper skin layers.",
    whatItDoes:
      "Micro-channels enhance delivery of depigmenting agents while stimulating collagen for skin renewal.",
    results: "Visible improvement in pigmentation within 4-6 weeks",
    maintenance: "Maintenance sessions every 3-6 months",
  },
  "prp-vampire-facial": {
    name: "PRP Vampire Facial",
    category: "Pigmentation Solutions",
    categoryPath: "/treatment/pigmentation",
    description:
      "PRP (Platelet-Rich Plasma) Vampire Facial is a revolutionary natural skin rejuvenation treatment that harnesses your body's own healing powers. This treatment uses concentrated platelets from your blood to stimulate collagen production, tissue regeneration, and overall skin renewal for a youthful, radiant complexion.",
    duration: "75-90 mins",
    sessions: "3-4 sessions recommended",
    rating: 4.8,
    reviews: 189,
    purpose:
      "Ideal for individuals seeking natural skin rejuvenation without synthetic fillers or toxins. Perfect for addressing fine lines, dull skin, uneven tone, acne scars, and signs of aging. Particularly effective for those wanting to improve skin quality using their body's own regenerative capabilities. Suitable for all skin types and ages.",
    procedure:
      "The PRP Vampire Facial involves drawing a small amount of your blood, which is then processed to concentrate the platelet-rich plasma. This nutrient-rich serum is either applied topically after microneedling or injected into targeted areas. The treatment stimulates your skin's natural healing and regenerative processes.",
    benefits: [
      "100% natural skin rejuvenation using your own blood plasma",
      "Significant improvement in skin tone, texture, and radiance",
      "Reduction of fine lines and wrinkles through collagen stimulation",
      "Enhanced skin elasticity and firmness",
      "Brightening and evening of skin complexion",
      "Improvement in acne scars and post-inflammatory hyperpigmentation",
      "Long-lasting youthful appearance (6-12 months)",
      "Stimulation of natural hyaluronic acid production",
      "Reduction in pore size and improved skin smoothness",
      "Enhanced skin barrier function and moisture retention",
      "Natural alternative to synthetic dermal fillers",
      "Progressive improvement over time with cumulative benefits",
    ],
    process: [
      "Comprehensive skin consultation and treatment planning",
      "Medical history review and blood work screening if needed",
      "Blood draw (10-20ml) from arm using sterile technique",
      "Centrifugation to separate platelet-rich plasma from blood",
      "Preparation of PRP serum with calcium chloride activation",
      "Skin cleansing and numbing cream application (if needed)",
      "Microneedling treatment to create micro-channels (optional)",
      "PRP serum application via microneedling or direct topical application",
      "LED photobiomodulation therapy to enhance cellular response",
      "Post-treatment soothing mask and protective barrier application",
      "Detailed aftercare instructions and product recommendations",
      "Scheduling of follow-up sessions (4-6 weeks apart)",
    ],
    precautions: [
      "Good overall health and stable medical condition required",
      "Discontinue blood-thinning medications 7-10 days prior",
      "Avoid anti-inflammatory medications (NSAIDs) 5-7 days before",
      "No active skin infections, cold sores, or inflammatory conditions",
      "Stay well-hydrated before and after treatment",
      "Avoid alcohol consumption 48 hours prior to treatment",
      "No recent chemical peels, laser treatments, or microdermabrasion (2-4 weeks)",
      "Inform practitioner of any bleeding disorders or autoimmune conditions",
      "Pregnancy and breastfeeding require medical clearance",
      "Temporary bruising, swelling, or redness may occur",
      "Strict sun protection mandatory during healing period",
      "Avoid strenuous exercise and saunas for 48 hours post-treatment",
    ],
    results:
      "Initial improvements in skin glow and texture are visible within 3-7 days. Progressive collagen stimulation leads to continued improvement over 4-6 weeks. Optimal results with significant reduction in fine lines, improved skin tone, and enhanced firmness are typically achieved after completing 3-4 treatment sessions spaced 4-6 weeks apart.",
    maintenance:
      "Maintenance treatments every 6-12 months to sustain collagen production and skin quality. Annual or bi-annual sessions are typically sufficient for most clients. Daily skin care regimen with recommended products helps maintain and enhance results between treatments.",
    whatItDoes:
      "PRP Vampire Facial works by harnessing your body's natural healing mechanisms. Platelets contain over 1,500 bioactive proteins including growth factors (VEGF, EGF, FGF, PDGF) that stimulate cellular regeneration. When applied to the skin, these growth factors activate fibroblasts, increase collagen and elastin production, and promote tissue repair and renewal at the cellular level.",
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

    purpose:
      "Comprehensive treatment for bacterial, fungal, or viral skin infections requiring medical intervention and professional care.",
    procedure:
      "Medical assessment followed by appropriate antimicrobial therapy, either topical, oral, or combination treatment based on infection type and severity.",
    whatItDoes:
      "Evidence-based antimicrobial treatment that eliminates infection-causing organisms while supporting skin healing and preventing recurrence.",
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

    purpose:
      "Specialized treatment for hormonal pigmentation (melasma) that is resistant to conventional skincare and requires medical-grade interventions.",
    procedure:
      "Combination therapy approach using topical medications, chemical peels, laser treatments, and sun protection to regulate melanin production.",
    whatItDoes:
      "Multi-modal treatment that addresses hormonal triggers, inhibits melanin production, and prevents UV-induced pigmentation worsening.",
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

    purpose:
      "Surgical removal of moles for cosmetic improvement or medical necessity, performed by qualified medical professionals.",
    procedure:
      "Precision surgical excision using sterile techniques, with appropriate closure methods based on mole size, location, and type.",
    whatItDoes:
      "Complete removal of mole tissue with careful attention to achieving clear margins while minimizing scarring and preserving function.",
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

    purpose:
      "Safe removal of skin tags and benign skin growths for cosmetic improvement and comfort.",
    procedure:
      "Non-surgical removal using cryotherapy, electrocautery, or surgical excision depending on size and location.",
    whatItDoes:
      "Precise removal of unwanted skin growths with minimal discomfort and excellent cosmetic outcomes.",
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

    purpose:
      "Non-surgical laser removal of moles and skin lesions for patients preferring scarless treatment options.",
    procedure:
      "Advanced laser technology that targets pigment in moles, breaking down tissue for natural elimination by the body.",
    whatItDoes:
      "Selective photothermolysis targets melanin in mole tissue, causing fragmentation and absorption without damaging surrounding skin.",
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

    purpose:
      "Effective removal of warts caused by HPV infection, using electrocautery for complete eradication.",
    procedure:
      "Controlled electrocautery treatment that destroys wart tissue while stimulating immune response to prevent recurrence.",
    whatItDoes:
      "Heat energy destroys wart tissue and triggers immune response against HPV, reducing likelihood of future wart formation.",
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

    purpose:
      "Microneedling treatment for various skin concerns including scarring, aging, and texture improvement.",
    procedure:
      "Automated microneedling device creates micro-channels in skin to enhance product absorption and stimulate collagen production.",
    whatItDoes:
      "Controlled micro-injuries trigger wound healing cascade, increasing collagen and elastin production for skin renewal and repair.",
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

    purpose:
      "Comprehensive treatment for stretch marks and striae distensae to improve appearance and skin texture.",
    procedure:
      "Combination treatments using laser therapy, microneedling, and topical treatments to rebuild skin structure.",
    whatItDoes:
      "Stimulates collagen remodeling and skin regeneration to reduce stretch mark appearance and improve skin elasticity.",
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

    purpose:
      "Medical-grade chemical peels specifically formulated for acne-prone skin to reduce breakouts and improve skin clarity.",
    procedure:
      "Controlled application of salicylic acid or glycolic acid peels to exfoliate acne-prone skin and regulate oil production.",
    whatItDoes:
      "Chemical exfoliation unclogs pores, reduces bacterial colonization, and normalizes skin cell turnover to prevent acne formation.",
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

    purpose:
      "Comprehensive acne treatment combining multiple therapeutic modalities for severe or resistant acne cases.",
    procedure:
      "Multi-step treatment protocol including medications, extractions, light therapy, and maintenance skincare.",
    whatItDoes:
      "Addresses all acne-causing factors including excess oil production, bacterial infection, inflammation, and abnormal cell turnover.",
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

    purpose:
      "Advanced laser treatment combined with carbon mask for deep pore cleansing and acne reduction.",
    procedure:
      "Carbon solution applied to skin, followed by laser activation to create photomechanical exfoliation.",
    whatItDoes:
      "Laser energy creates acoustic waves that deeply cleanse pores and destroy acne-causing bacteria while stimulating collagen.",
    results:
      "Improved skin clarity within 1-2 weeks with optimal results after 4-6 sessions",
    maintenance: "Monthly maintenance treatments",
  },

  "chemical-peels-acne": {
    name: "Chemical Peels for Acne",
    category: "Acne and Scars",
    categoryPath: "/treatment/acne-scars",
    description:
      "Advanced chemical peeling treatments specifically formulated for acne-prone skin, utilizing medical-grade acids to exfoliate dead skin cells, unclog pores, reduce inflammation, and promote cellular regeneration for clearer, healthier skin.",
    duration: "30-45 mins",
    sessions: "4-8 sessions recommended",
    rating: 4.7,
    reviews: 134,
    purpose:
      "Designed for individuals struggling with acne, clogged pores, post-acne marks, and uneven skin texture. Particularly effective for comedonal acne, mild to moderate inflammatory acne, and acne-prone skin that hasn't responded well to topical treatments alone.",
    procedure:
      "Chemical peels involve the controlled application of medical-grade acids to the skin surface. The treatment penetrates the epidermis to dissolve dead skin cells, unclog pores, and stimulate collagen production. The process is carefully monitored and neutralized to ensure optimal results with minimal discomfort.",
    benefits: [
      "Deep exfoliation that removes built-up dead skin cells",
      "Effective pore unclogging to prevent comedones and blackheads",
      "Significant reduction in active acne breakouts",
      "Improvement in post-acne hyperpigmentation and marks",
      "Stimulation of collagen production for smoother skin",
      "Enhanced penetration of topical acne medications",
      "Regulation of sebum production and oil control",
      "Reduction in acne-related inflammation",
      "Improved skin texture and overall clarity",
      "Long-term prevention of new acne formation",
    ],
    process: [
      "Comprehensive skin analysis and acne assessment",
      "Determination of appropriate peel strength and formulation",
      "Pre-treatment skin preparation and cleansing",
      "Application of pre-peel priming solution",
      "Controlled application of chemical peel solution",
      "Monitoring of skin response and timing",
      "Neutralization of peel acids with appropriate solutions",
      "Application of post-peel soothing and protective products",
      "Detailed aftercare instructions and product recommendations",
      "Scheduling of follow-up treatments and maintenance plan",
    ],
    precautions: [
      "Strict sun avoidance and SPF 50+ daily use essential",
      "Discontinue retinoid products 5-7 days prior to treatment",
      "Patch test required 48 hours before first treatment",
      "Not recommended during pregnancy or breastfeeding",
      "Avoid waxing, depilatory creams 1 week prior",
      "No recent laser treatments or microdermabrasion (2 weeks)",
      "Inform doctor of herpes simplex history (prophylaxis may be needed)",
      "Active acne lesions may temporarily worsen before improving",
      "Temporary redness, peeling, and sensitivity are normal",
      "Hydration and gentle skincare routine during recovery",
    ],
    results:
      "Noticeable improvement in skin clarity and reduction of active acne within 1-2 weeks. Significant reduction in pore size and improvement in skin texture occurs within 4-6 weeks. Optimal results with complete skin transformation are typically achieved after 4-8 treatment sessions spaced 2-4 weeks apart.",
    maintenance:
      "Maintenance peels every 4-6 weeks to sustain results and prevent acne recurrence. Daily home care regimen including gentle cleansing, appropriate moisturizers, and targeted acne treatments. Regular follow-up consultations to monitor skin response and adjust treatment plan.",
    whatItDoes:
      "Chemical peels work by creating controlled chemical exfoliation that penetrates the skin's surface layers. The acids dissolve the bonds between dead skin cells, unclogging pores and removing the top layer of damaged skin. This process stimulates cellular turnover, reduces bacterial colonization, and triggers collagen synthesis for long-term skin improvement.",
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

    purpose:
      "Microneedling treatment specifically adapted for acne-prone skin to improve texture and reduce scarring.",
    procedure:
      "Sterile roller with fine needles creates micro-channels to enhance product penetration and stimulate healing.",
    whatItDoes:
      "Micro-injuries trigger collagen production and improve delivery of acne treatments to deeper skin layers.",
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

    purpose:
      "Laser resurfacing treatment for acne scars and active acne reduction through controlled tissue ablation.",
    procedure:
      "Fractional laser creates microscopic treatment zones to resurface skin and stimulate collagen remodeling.",
    whatItDoes:
      "Precise laser energy removes damaged skin layers and triggers wound healing response for scar reduction and skin renewal.",
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

    purpose:
      "Combination treatment using radiofrequency energy and microneedling for acne scar improvement and skin tightening.",
    procedure:
      "Microneedles deliver radiofrequency energy to deeper skin layers for collagen contraction and remodeling.",
    whatItDoes:
      "Thermal energy causes collagen contraction while microneedling enhances product delivery and stimulates tissue repair.",
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

    purpose:
      "Therapeutic facial treatment focused on deep cleansing, extraction, and calming of acne-prone skin.",
    procedure:
      "Multi-step facial including cleansing, steaming, extractions, treatments, and calming mask application.",
    whatItDoes:
      "Comprehensive skin cleansing and treatment that removes impurities, reduces inflammation, and supports skin healing.",
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

    purpose:
      "Precision laser treatment for freckle reduction and pigmentation correction.",
    procedure:
      "Targeted laser energy specifically absorbed by melanin in freckles for selective destruction.",
    whatItDoes:
      "Photothermolysis targets melanin pigment in freckles while sparing surrounding normal skin tissue.",
    results:
      "Lightening in 2-4 weeks with optimal results after full treatment course",
    maintenance: "Maintenance sessions as needed",
  },

  "microneedling-radiofrequency-stretch-marks": {
    name: "Microneedling Radiofrequency for Stretch Marks",
    category: "Stretch Marks Removal",
    categoryPath: "/treatment/stretch-marks-removal",
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

    purpose:
      "Advanced treatment combining microneedling and radiofrequency for stretch mark reduction.",
    procedure:
      "Microneedles deliver radiofrequency energy to stretch mark areas for collagen stimulation and remodeling.",
    whatItDoes:
      "Thermal energy and micro-injuries work together to rebuild dermal structure and reduce stretch mark appearance.",
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

    purpose:
      "Comprehensive treatment addressing multiple causes of dark circles including pigmentation, vascular issues, and volume loss.",
    procedure:
      "Multi-modal approach using topical treatments, fillers, laser therapy, and lifestyle optimization.",
    whatItDoes:
      "Addresses root causes of dark circles through pigment regulation, vascular improvement, and structural support.",
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

    purpose:
      "Complete eye area treatment combining hydration, firming, and brightening for comprehensive rejuvenation.",
    procedure:
      "Combination therapy including peels, fillers, laser treatments, and specialized skincare for eye area.",
    whatItDoes:
      "Multi-faceted approach that improves skin quality, restores volume, and enhances eye area appearance.",
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

    purpose:
      "Volume restoration and skin quality improvement for the delicate under-eye area using hyaluronic acid fillers.",
    procedure:
      "Precision injection of hyaluronic acid fillers into tear trough area with careful anatomical consideration.",
    whatItDoes:
      "Hyaluronic acid restores lost volume and improves skin hydration, reducing shadows and hollowing under eyes.",
    results: "Immediate plumping with optimal results in 2 weeks",
    maintenance: "Maintenance treatments every 6-12 months",
  },

  // Additional Pigmentation Treatments
  "hydrafacial-basic": {
    name: "HydraFacial Basic",
    category: "Pigmentation",
    categoryPath: "/treatment/pigmentation",
    description:
      "HydraFacial is a revolutionary, non-invasive skin resurfacing treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously. This patented Vortex-Fusion delivery system provides deeper product penetration and superior results compared to traditional facials.",
    duration: "30-45 mins",
    sessions: "Monthly recommended",
    rating: 4.7,
    reviews: 203,
    purpose:
      "Ideal for individuals seeking immediate skin improvement without downtime. Perfect for addressing dull skin, enlarged pores, mild hyperpigmentation, and dehydration. Suitable for all skin types including sensitive skin. Excellent for maintaining skin health between more intensive treatments.",
    procedure:
      "The HydraFacial uses a specialized handpiece that creates a vortex to simultaneously cleanse, exfoliate, and infuse the skin with nourishing serums. The treatment involves a multi-step process that removes impurities while delivering hydration and antioxidants deep into the skin layers.",
    benefits: [
      "Deep cleansing that removes 99% of impurities and oil",
      "Intense hydration that improves skin moisture levels by 70%",
      "Gentle exfoliation that smooths skin texture",
      "Reduction in pore appearance and blackheads",
      "Immediate radiant glow and improved skin tone",
      "Stimulation of collagen and elastin production",
      "Safe and effective for all skin types including sensitive skin",
      "No downtime - return to normal activities immediately",
      "Painless procedure with comfortable suction sensation",
      "Cumulative benefits with regular treatments",
    ],
    process: [
      "Comprehensive skin analysis and consultation",
      "Activation and hydration of skin with Vortex-Fusion serum",
      "Gentle exfoliation using soft-tip extraction to remove impurities",
      "Deep cleansing with painless hydradermabrasion",
      "Intense hydration infusion with proprietary serums",
      "Application of protective HydraFacial booster serum",
      "Post-treatment skin conditioning and SPF application",
      "Detailed skincare recommendations and home care plan",
    ],
    precautions: [
      "Mild suction sensation during extraction phase",
      "No downtime required - can return to work immediately",
      "Safe for sensitive skin and all Fitzpatrick skin types",
      "Can be performed during pregnancy with doctor approval",
      "Avoid retinoid use 48 hours prior to treatment",
      "No recent chemical peels or laser treatments (2 weeks)",
      "Inform practitioner of any active skin infections",
      "Temporary redness may occur but resolves quickly",
      "Can be combined with other treatments safely",
      "Suitable for makeup application immediately after",
    ],
    results:
      "Immediate visible improvements including radiant glow, smoother texture, and reduced pore appearance. Skin appears more hydrated and youthful within minutes. Cumulative benefits develop over time with improved skin tone, reduced fine lines, and enhanced overall skin health. Optimal results achieved with monthly treatments.",
    maintenance:
      "Monthly HydraFacial treatments recommended for maintaining optimal skin health and preventing signs of aging. Can be combined with quarterly deeper treatments for comprehensive skin rejuvenation. Daily home care regimen with recommended HydraFacial products enhances and prolongs results.",
    whatItDoes:
      "HydraFacial uses patented Vortex-Fusion technology to create a vortex that simultaneously removes impurities while infusing nourishing serums deep into the skin. This spiral suction technology provides superior product penetration compared to traditional topical application, delivering active ingredients to where they are most effective for maximum results.",
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

    purpose:
      "Advanced hydradermabrasion with enhanced serums and boosters for superior skin transformation.",
    procedure:
      "Multi-step hydradermabrasion treatment with premium serums, boosters, and lymphatic drainage.",
    whatItDoes:
      "Enhanced hydradermabrasion protocol with specialized serums provides deeper cleansing and more comprehensive skin benefits.",
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

    purpose:
      "Vitamin and antioxidant infusions to brighten skin and protect against pigmentation-causing factors.",
    procedure:
      "Intradermal delivery of brightening agents and antioxidants through micro-injection technique.",
    whatItDoes:
      "Direct delivery of skin-brightening compounds enhances cellular protection and regulates melanin production.",
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

    purpose:
      "Crystal-free microdermabrasion for gentle skin exfoliation and texture improvement.",
    procedure:
      "Diamond-encrusted tips gently exfoliate skin surface while vacuum suction removes dead cells.",
    whatItDoes:
      "Mechanical exfoliation removes surface debris and stimulates circulation without abrasive crystals.",
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

    purpose:
      "Oxygen-infused treatment for skin hydration, oxygenation, and nutrient delivery.",
    procedure:
      "Pressurized oxygen delivery system infuses vitamins and nutrients deep into skin tissues.",
    whatItDoes:
      "Super-oxygenated serums penetrate deeply to enhance cellular metabolism and skin function.",
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

    purpose:
      "Advanced oxygen therapy combined with LED light for comprehensive skin rejuvenation.",
    procedure:
      "Oxygen infusion treatment enhanced with specific wavelength LED light therapy.",
    whatItDoes:
      "Oxygen and light energy work synergistically to improve cellular function and skin appearance.",
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

    purpose:
      "Instant skin brightening treatment using vitamin C derivatives and gentle exfoliation.",
    procedure:
      "Vitamin C infusion combined with mild chemical exfoliation for immediate radiance.",
    whatItDoes:
      "Antioxidant treatment neutralizes free radicals while exfoliation removes dull surface cells.",
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

    purpose:
      "Anti-aging facial with lifting peptides and collagen stimulation for skin firming.",
    procedure:
      "Peptide-rich treatment combined with massage techniques for facial muscle toning.",
    whatItDoes:
      "Bioactive peptides stimulate collagen production and improve facial muscle tone.",
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

    purpose:
      "Intensive brightening treatment combining multiple technologies for dramatic skin improvement.",
    procedure:
      "Multi-step treatment protocol combining exfoliation, infusion, and light therapy.",
    whatItDoes:
      "Comprehensive approach addresses multiple skin concerns for enhanced radiance and texture.",
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

    purpose:
      "Intravenous nutrient delivery for systemic skin health and radiance improvement.",
    procedure:
      "IV administration of vitamins, minerals, and antioxidants for whole-body skin nourishment.",
    whatItDoes:
      "Direct nutrient delivery bypasses digestive system for maximum bioavailability and skin benefits.",
    results: "Progressive internal glow with enhanced skin radiance over time",
    maintenance: "Regular infusions for sustained benefits",
  },

  // Anti Aging Treatments
  "wrinkles-treatment": {
    name: "Wrinkles Treatment",
    category: "Anti Aging",
    categoryPath: "/treatment/anti-aging",
    description:
      "Advanced wrinkle reduction treatment using FDA-approved neuromodulators (Botox/Dysport) to temporarily relax facial muscles that cause dynamic wrinkles. This non-surgical treatment smooths frown lines, crow's feet, and forehead wrinkles while maintaining natural facial expressions and preventing new wrinkle formation.",
    duration: "45-60 mins",
    sessions: "Varies by treatment type",
    rating: 4.8,
    reviews: 234,
    purpose:
      "Designed for individuals with dynamic wrinkles caused by repetitive facial muscle movements. Ideal for treating forehead lines, frown lines (11's), crow's feet, and brow furrows. Perfect for both preventive treatment (early 20s-30s) and corrective treatment (30s-60s). Not suitable for static wrinkles caused by skin aging or volume loss.",
    procedure:
      "Neuromodulator treatment involves precise injection of botulinum toxin into targeted facial muscles using fine-gauge needles. The treatment temporarily blocks nerve signals to the muscles, causing them to relax and allowing the skin to smooth out. The procedure is quick, virtually painless, and requires no downtime.",
    benefits: [
      "Dramatic reduction of dynamic facial wrinkles and fine lines",
      "Prevention of new wrinkle formation in treated areas",
      "Natural-looking results that maintain facial expressiveness",
      "Quick treatment sessions with immediate return to activities",
      "Long-lasting effects (3-6 months) with regular maintenance",
      "Non-surgical alternative to facelift procedures",
      "Improved skin smoothness and youthful appearance",
      "Reduction of tension headaches caused by muscle strain",
      "Enhanced confidence and psychological well-being",
      "Cost-effective compared to surgical alternatives",
      "Minimal discomfort during and after treatment",
      "Compatible with other cosmetic treatments",
    ],
    process: [
      "Comprehensive facial assessment and wrinkle mapping",
      "Medical history review and contraindication screening",
      "Photography for treatment planning and progress tracking",
      "Skin preparation with gentle cleansing",
      "Application of topical numbing cream (optional)",
      "Precise injection planning using anatomical landmarks",
      "Administration of neuromodulator using fine-gauge needles",
      "Multiple injection points for optimal muscle relaxation",
      "Post-treatment skin soothing and ice application",
      "Detailed aftercare instructions and activity restrictions",
      "Follow-up appointment scheduling (2 weeks post-treatment)",
      "Results assessment and touch-up injections if needed",
    ],
    precautions: [
      "Medical consultation required to assess candidacy",
      "Discontinue blood-thinning medications 7-10 days prior",
      "Avoid alcohol consumption 24 hours before treatment",
      "No active skin infections or inflammatory conditions",
      "Pregnancy and breastfeeding require medical clearance",
      "Avoid strenuous exercise for 24 hours post-treatment",
      "No lying down or inversion poses for 4-6 hours",
      "Avoid facial massages or treatments for 2 weeks",
      "Stay upright and avoid rubbing the treated areas",
      "Temporary mild bruising or swelling may occur",
      "Results not immediate - full effect in 7-14 days",
      "Avoid extreme heat or cold exposure temporarily",
    ],
    results:
      "Initial muscle relaxation begins within 24-72 hours with progressive improvement over 5-7 days. Optimal results are visible at 10-14 days post-treatment. Effects typically last 3-6 months depending on individual metabolism, dosage, and treatment area. Regular maintenance treatments help prevent wrinkle recurrence and may lead to longer-lasting results over time.",
    maintenance:
      "Maintenance treatments every 3-6 months depending on individual response and desired level of wrinkle prevention. Most clients find that regular treatments lead to longer-lasting results as facial muscles become trained to relax. Annual or bi-annual treatments are sufficient for many clients once optimal results are achieved.",
    whatItDoes:
      "Neuromodulator treatments work by temporarily blocking the nerve signals that cause facial muscles to contract. The botulinum toxin binds to nerve endings, preventing the release of acetylcholine, which is the chemical messenger that triggers muscle contraction. This causes the targeted muscles to relax, smoothing out the overlying skin and preventing the formation of dynamic wrinkles. The treatment is completely reversible and wears off naturally over time.",
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

    purpose:
      "Medical-grade chemical peels designed for mature skin to stimulate collagen and reduce aging signs.",
    procedure:
      "Controlled chemical exfoliation using age-appropriate acids for skin renewal and firmness.",
    whatItDoes:
      "Exfoliation removes damaged skin layers while stimulating collagen production for youthful appearance.",
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

    purpose:
      "Bioactive collagen stimulation treatment to restore skin elasticity and reduce fine lines.",
    procedure:
      "Collagen-building peptides and nutrients delivered through various application methods.",
    whatItDoes:
      "Stimulates natural collagen production and strengthens skin structure from within.",
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

    purpose:
      "Non-surgical skin tightening using advanced technologies to lift and firm aging skin.",
    procedure:
      "Thermal energy delivery to deeper skin layers causing collagen contraction and remodeling.",
    whatItDoes:
      "Controlled heating stimulates collagen production and immediate tissue contraction for firmer skin.",
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
      "Professional laser hair removal using advanced diode laser technology to permanently reduce unwanted hair growth. The laser targets melanin in hair follicles, destroying them at the root while leaving surrounding skin undamaged.",
    duration: "30-60 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.7,
    reviews: 312,
    purpose:
      "Ideal for individuals seeking permanent hair reduction on face, body, or bikini areas. Effective for all skin types and hair colors (except white/light gray hair). Particularly beneficial for those tired of frequent shaving, waxing, or plucking. Not suitable for pregnant women or individuals with certain medical conditions.",
    procedure:
      "Laser hair removal uses concentrated light energy that is absorbed by the melanin in hair follicles. This energy converts to heat, damaging the follicle and inhibiting future hair growth. The procedure is performed with cooling mechanisms to minimize discomfort and protect the skin surface.",
    benefits: [
      "Permanent reduction of unwanted hair growth (up to 90%)",
      "Precision targeting of individual hair follicles",
      "Safe and effective for most skin types (Fitzpatrick I-VI)",
      "Minimal discomfort with advanced cooling systems",
      "Fast treatment sessions covering large areas efficiently",
      "Long-lasting results with proper treatment course completion",
      "Smooth, hair-free skin without stubble or irritation",
      "Reduced risk of ingrown hairs and razor bumps",
      "Cost-effective compared to lifetime shaving/waxing",
      "Improved skin texture and reduced folliculitis",
    ],
    process: [
      "Comprehensive consultation and medical history review",
      "Treatment area assessment and hair growth evaluation",
      "Skin type determination using Fitzpatrick scale",
      "Patch test to assess skin response and optimal settings",
      "Pre-treatment shaving of the area (24-48 hours prior)",
      "Application of cooling gel for skin protection",
      "Laser handpiece calibration for individual parameters",
      "Systematic treatment of the area with overlapping pulses",
      "Real-time skin monitoring and comfort adjustment",
      "Post-treatment cooling and soothing measures",
      "Detailed aftercare instructions and sun protection guidance",
      "Scheduling of follow-up sessions (4-6 weeks apart)",
    ],
    precautions: [
      "Avoid sun exposure and tanning 4 weeks before and after treatment",
      "Discontinue plucking, waxing, or depilatory creams 4-6 weeks prior",
      "Shave the treatment area 24-48 hours before session",
      "Patch test required for all new clients",
      "Avoid retinoids, antibiotics, and photosensitizing medications",
      "Not recommended during pregnancy or breastfeeding",
      "No recent chemical peels or laser treatments (2-4 weeks)",
      "Inform practitioner of herpes simplex history in treatment area",
      "Temporary redness, swelling, and sensitivity are normal",
      "Strict sun protection (SPF 50+) mandatory post-treatment",
    ],
    results:
      "Noticeable hair reduction after 3-4 sessions with progressive improvement. Most clients achieve 70-90% permanent hair reduction after completing 6-8 treatment sessions. Results vary based on hair color, skin type, and hormonal factors. Touch-up sessions may be needed annually for optimal long-term results.",
    maintenance:
      "Annual or bi-annual touch-up sessions to maintain results. Most clients require only 1-2 maintenance treatments per year after completing the initial treatment course. Continued sun protection and gentle skin care help preserve results.",
    whatItDoes:
      "Laser hair removal works by emitting concentrated light energy that is selectively absorbed by the melanin pigment in hair follicles. This energy transforms into heat, damaging the follicle's growth center and preventing future hair production. The laser's wavelength and cooling systems ensure the treatment is safe for the skin while effectively targeting hair roots.",
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

    purpose:
      "Specialized laser hair removal designed for female hormonal patterns and hair growth.",
    procedure:
      "Gender-specific laser parameters and treatment protocols for optimal female hair reduction.",
    whatItDoes:
      "Targets female pattern hair growth with appropriate energy levels and treatment intervals.",
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

    purpose:
      "Advanced laser hair removal for male pattern hair growth including back and chest areas.",
    procedure:
      "High-energy laser treatment adapted for thicker male hair and larger treatment areas.",
    whatItDoes:
      "Powerful laser energy effectively treats coarse male hair while maintaining skin safety.",
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

    purpose:
      "Safe laser removal of congenital birthmarks for cosmetic improvement.",
    procedure:
      "Precision laser treatment targeting birthmark pigment with careful energy selection.",
    whatItDoes:
      "Selective pigment destruction breaks down birthmark tissue for gradual fading and removal.",
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

    purpose:
      "Professional laser tattoo removal using advanced Q-switched technology.",
    procedure:
      "High-energy laser pulses fragment tattoo ink for body elimination over multiple sessions.",
    whatItDoes:
      "Photomechanical effect breaks down ink particles into smaller fragments the body can remove.",
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

    purpose:
      "Non-surgical laser treatment for mole removal with superior cosmetic results.",
    procedure:
      "Precision laser ablation of mole tissue with minimal surrounding tissue damage.",
    whatItDoes:
      "Laser energy vaporizes mole tissue while preserving adjacent healthy skin.",
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

    purpose:
      "Laser treatment for wart removal with minimal scarring and high success rates.",
    procedure:
      "Focused laser energy destroys wart tissue and stimulates immune response.",
    whatItDoes:
      "Thermal destruction of wart tissue combined with immune stimulation prevents recurrence.",
    results: "Complete removal with healing in 1-2 weeks",
    maintenance: "Low recurrence with proper care",
  },

  // Body Contouring Treatments
  "potli-massage": {
    name: "Potli Massage",
    category: "Ayurveda",
    categoryPath: "/treatment/ayurveda",
    description:
      "Potli Massage is a traditional warm herbal pouch massage designed to ease body stiffness, relax tired muscles, and create a deeply grounding wellness experience.",
    duration: "60-75 mins",
    sessions: "As needed or in wellness packages",
    rating: 4.8,
    reviews: 96,
    benefits: [
      "Helps ease body heaviness",
      "Supports deep muscle relaxation",
      "Creates a soothing wellness experience",
      "Encourages better body comfort",
      "Traditional herbal warmth support",
      "Ideal for stress-relief routines",
    ],
    process: [
      "Wellness consultation and body assessment",
      "Selection of massage oils and herbal potli",
      "Warm pouch massage across target areas",
      "Relaxation-focused finishing sequence",
      "Post-session rest and hydration guidance",
    ],
    precautions: [
      "Share any active inflammation or skin sensitivity before treatment",
      "Avoid the session during acute fever or infection",
      "Hydration after the massage is recommended",
      "Pressure and warmth should be adjusted to comfort",
    ],
    purpose:
      "Designed for clients seeking traditional warmth-led body relaxation and relief from everyday physical fatigue.",
    procedure:
      "Warm herbal pouches are prepared and used in a rhythmic massage sequence across selected body areas with supportive oils.",
    whatItDoes:
      "It combines heat, herbs, and massage strokes to create a more relaxed, eased, and comfort-focused body experience.",
    results:
      "Most clients feel lighter, calmer, and more relaxed immediately after the session, with comfort benefits often building with regular care.",
    maintenance: "Can be repeated as part of a regular wellness and relaxation routine.",
  },
  "shirodhara-treatment": {
    name: "Shirodhara",
    category: "Ayurveda",
    categoryPath: "/treatment/ayurveda",
    description:
      "Shirodhara is a traditional Ayurvedic relaxation ritual involving a steady stream of warm oil over the forehead to promote calmness and mental stillness.",
    duration: "45-60 mins",
    sessions: "Typically advised in a wellness series",
    rating: 4.9,
    reviews: 104,
    benefits: [
      "Promotes deep relaxation",
      "Helps quiet mental fatigue",
      "Supports a calm sensory experience",
      "Encourages restorative stillness",
      "Traditional stress-relief ritual",
      "Pairs well with broader wellness care",
    ],
    process: [
      "Consultation and comfort review",
      "Preparation for the forehead oil ritual",
      "Steady warm oil flow during the session",
      "Rest phase after the treatment",
      "Post-care guidance for calm recovery",
    ],
    precautions: [
      "Inform the clinic about scalp sensitivity or allergies",
      "Avoid immediate exposure to cold air after treatment",
      "Resting briefly after the session is recommended",
      "Oil-based care may require post-session hair cleansing",
    ],
    purpose:
      "Best suited for clients looking for a deeply calming ritual that supports relaxation and mental rest.",
    procedure:
      "A continuous stream of warm therapeutic oil is directed over the forehead in a controlled, comfort-focused sequence.",
    whatItDoes:
      "Shirodhara creates a calm, restorative sensory environment that helps the body shift into a slower, more relaxed state.",
    results:
      "Clients usually feel calmer, more rested, and mentally lighter after the session, especially when included in a repeated wellness plan.",
    maintenance: "Often repeated across wellness programs for a more cumulative calming effect.",
  },
  "full-body-massage": {
    name: "Full Body Massage",
    category: "Ayurveda",
    categoryPath: "/treatment/ayurveda",
    description:
      "Full Body Massage is a restorative Ayurvedic wellness treatment focused on easing physical tension, supporting circulation, and improving overall relaxation.",
    duration: "60-90 mins",
    sessions: "As needed or in recurring care plans",
    rating: 4.8,
    reviews: 112,
    benefits: [
      "Eases overall body tension",
      "Promotes a more relaxed body state",
      "Supports circulation and comfort",
      "Helps reduce day-to-day fatigue",
      "Creates a restorative wellness pause",
      "Improves the feeling of physical ease",
    ],
    process: [
      "Comfort consultation and focus-area review",
      "Selection of suitable massage oils",
      "Full-body massage treatment",
      "Relaxation and finishing sequence",
      "Hydration and post-care advice",
    ],
    precautions: [
      "Pressure should be adjusted based on comfort",
      "Inform the team about any acute pain or injury",
      "Avoid treatment with open skin irritation",
      "Adequate rest and hydration are advised afterward",
    ],
    purpose:
      "Created for clients who want a complete relaxation-led body treatment that eases muscular fatigue and supports general wellness.",
    procedure:
      "Therapeutic oils and massage techniques are used across the full body in a structured restorative session.",
    whatItDoes:
      "It helps release body tension, improve comfort, and create a calmer, more balanced physical state.",
    results:
      "Most clients feel relaxed, refreshed, and physically lighter after the session, with benefits improving through regular care.",
    maintenance: "Can be scheduled regularly to support an ongoing wellness routine.",
  },
  "udwarthanam-treatment": {
    name: "Udwarthanam",
    category: "Ayurveda",
    categoryPath: "/treatment/ayurveda",
    description:
      "Udwarthanam is a traditional herbal powder massage that energizes the body, refreshes the skin surface, and supports a lighter overall feel.",
    duration: "45-60 mins",
    sessions: "Often advised in a wellness series",
    rating: 4.7,
    reviews: 88,
    benefits: [
      "Creates an energizing body ritual",
      "Refreshes the skin surface",
      "Supports a lighter body feel",
      "Encourages traditional wellness balance",
      "Adds variety to Ayurvedic care routines",
      "Works well in structured wellness programs",
    ],
    process: [
      "Consultation and body-comfort review",
      "Preparation of herbal powder blend",
      "Targeted powder massage sequence",
      "Warm cleansing and post-session rest",
      "Wellness follow-up guidance",
    ],
    precautions: [
      "Avoid treatment on broken or highly sensitive skin",
      "Share any herb-related allergy concerns beforehand",
      "Temporary dryness may require post-care moisturization",
      "Best performed under guided professional care",
    ],
    purpose:
      "Suitable for clients looking for a more invigorating Ayurvedic body ritual with a traditional herbal approach.",
    procedure:
      "A specially prepared herbal powder blend is used in a massage technique designed to stimulate and refresh the body.",
    whatItDoes:
      "It combines friction and herbal application to create a more energized, refreshed, and wellness-focused body experience.",
    results:
      "Clients often feel more refreshed and activated after the session, with better results when included in a planned wellness series.",
    maintenance: "Usually repeated in a guided Ayurveda wellness schedule for sustained benefit.",
  },
  "fds-treatment": {
    name: "FDS",
    category: "Weight Loss Program",
    categoryPath: "/treatment/weight-loss-program",
    description:
      "FDS is a slimming-focused body contouring treatment designed to support localized reduction, improve contour transitions, and build a more structured inch-loss plan.",
    duration: "45-60 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.7,
    reviews: 118,
    benefits: [
      "Supports localized inch-loss goals",
      "Improves visible contour smoothness",
      "Helps refine selected body zones",
      "Works well inside structured slimming plans",
      "Non-surgical body refinement support",
      "Can complement broader weight-management care",
    ],
    process: [
      "Body-area consultation and measurements",
      "Suitability review for slimming goals",
      "Targeted treatment application",
      "Progress tracking across sessions",
      "Aftercare and lifestyle guidance",
    ],
    precautions: [
      "Treatment planning should be individualized",
      "Consistency across sessions improves outcomes",
      "Lifestyle support helps maintain results",
      "Not a substitute for major medical weight-loss needs",
    ],
    purpose:
      "Designed for clients seeking a more focused slimming treatment to support contour improvement and inch-loss planning.",
    procedure:
      "The treatment is applied to selected body areas using a structured protocol intended to improve contour response over a planned session cycle.",
    whatItDoes:
      "FDS supports localized body refinement by focusing on selected areas where visible reduction and smoother contour transitions are desired.",
    results:
      "Visible change usually develops progressively over multiple sessions, with more noticeable contour refinement as the plan continues.",
    maintenance: "Periodic review sessions and healthy lifestyle support help maintain results.",
  },
  "nms-treatment": {
    name: "NMS",
    category: "Weight Loss Program",
    categoryPath: "/treatment/weight-loss-program",
    description:
      "NMS is a guided body-management treatment approach aimed at supporting reduction-focused body contouring and more defined slimming plans.",
    duration: "45-60 mins",
    sessions: "6-10 sessions recommended",
    rating: 4.7,
    reviews: 111,
    benefits: [
      "Supports guided body-management goals",
      "Helps target selected concern areas",
      "Builds structure into slimming plans",
      "Can improve visible contour balance",
      "Pairs well with broader reduction programs",
      "Non-surgical contour support",
    ],
    process: [
      "Goal assessment and body review",
      "Treatment-area planning",
      "Session-based contour protocol",
      "Progress monitoring",
      "Maintenance and aftercare guidance",
    ],
    precautions: [
      "Best results depend on session consistency",
      "Healthy routine support is recommended",
      "Results vary based on body goals and starting point",
      "Professional evaluation is important before treatment",
    ],
    purpose:
      "Built for clients who want a more guided reduction-focused contour plan with attention to selected body areas.",
    procedure:
      "NMS follows a planned treatment cycle targeting body areas that need more structured slimming and contour support.",
    whatItDoes:
      "It supports visible body refinement by focusing on selected reduction goals and improving the overall contour strategy.",
    results:
      "Contour improvements typically appear progressively over the course of treatment, with better definition after consistent sessions.",
    maintenance: "Review-led maintenance and supportive lifestyle habits help prolong visible results.",
  },
  "lipo-laser-treatment": {
    name: "Lipo Laser",
    category: "Weight Loss Program",
    categoryPath: "/treatment/weight-loss-program",
    description:
      "Lipo Laser is a non-surgical body contouring treatment that uses laser-based support for inch loss and visible refinement in localized stubborn areas.",
    duration: "45-75 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.8,
    reviews: 146,
    benefits: [
      "Supports non-surgical inch loss",
      "Targets selected stubborn zones",
      "Helps refine contour lines",
      "No major downtime",
      "Works well in slimming-focused treatment plans",
      "Can improve confidence in fitted clothing",
    ],
    process: [
      "Area assessment and goal review",
      "Laser treatment planning",
      "Targeted lipo-laser session",
      "Measurement and progress review",
      "Aftercare guidance",
    ],
    precautions: [
      "Best suited for localized contour goals",
      "Results improve with repeated sessions",
      "Hydration and movement may support outcomes",
      "Not intended as a substitute for surgical intervention where indicated",
    ],
    purpose:
      "Ideal for clients looking for a non-surgical route to inch-loss support and visible contour refinement in specific areas.",
    procedure:
      "Laser-based contouring is applied to the selected area using a structured protocol aimed at reduction support and smoother body lines.",
    whatItDoes:
      "Lipo Laser supports localized contour improvement by focusing on targeted body areas that need non-surgical reduction-led refinement.",
    results:
      "Visible inch-loss and contour changes often develop over a planned session course, with cumulative improvement over time.",
    maintenance: "Maintenance sessions and stable body habits help preserve the contouring benefit.",
  },
  "tummy-tuck-treatment": {
    name: "Tummy Tuck",
    category: "Weight Loss Program",
    categoryPath: "/treatment/weight-loss-program",
    description:
      "Tummy Tuck is an abdomen-focused contour correction option designed for clients seeking a more defined, refined, and flatter midsection appearance.",
    duration: "60-120 mins",
    sessions: "Treatment plan varies by need",
    rating: 4.7,
    reviews: 103,
    benefits: [
      "Focuses on midsection refinement",
      "Supports a more defined abdominal profile",
      "Targets visible contour irregularity",
      "Can improve confidence in the waistline area",
      "Built around abdomen-specific goals",
      "Creates a clearer contour plan",
    ],
    process: [
      "Abdominal assessment and planning",
      "Suitability discussion based on goals",
      "Personalized treatment-path selection",
      "Procedure or session-based intervention",
      "Recovery and follow-up guidance",
    ],
    precautions: [
      "Requires individualized suitability evaluation",
      "Recovery guidance depends on the chosen approach",
      "Results vary based on skin, contour, and baseline condition",
      "Follow-up care is essential",
    ],
    purpose:
      "Created for clients focused on abdomen-specific contour correction and a more refined tummy profile.",
    procedure:
      "The treatment approach is planned around abdominal contour goals and may involve a more structured correction pathway than routine non-surgical shaping.",
    whatItDoes:
      "It concentrates on improving abdominal contour definition and reducing the appearance of fullness or irregularity in the midsection.",
    results:
      "Visible refinement depends on the starting condition and treatment path, with contour improvement becoming clearer as recovery or sessions progress.",
    maintenance: "Maintenance depends on the plan chosen and long-term body-weight stability.",
  },
  "muscle-sculpt-treatment": {
    name: "Muscle Sculpt",
    category: "Body Shaping and Targeted Weight Loss Program",
    categoryPath: "/treatment/body-shaping-and-targeted-weight-loss-program",
    description:
      "Muscle Sculpt is a definition-focused body shaping treatment designed to support a firmer, more athletic-looking contour in selected areas.",
    duration: "45-60 mins",
    sessions: "6-8 sessions recommended",
    rating: 4.8,
    reviews: 132,
    benefits: [
      "Supports visible body definition",
      "Helps create a firmer contour look",
      "Targets shape-focused aesthetic goals",
      "Works well for selective sculpting zones",
      "Enhances tone-focused body planning",
      "Non-surgical shaping support",
    ],
    process: [
      "Definition-goal consultation",
      "Target-zone assessment",
      "Muscle sculpt session planning",
      "Treatment delivery",
      "Progress review and maintenance guidance",
    ],
    precautions: [
      "Best results come with session consistency",
      "Healthy fitness habits can complement results",
      "Treatment is goal-specific, not generalized weight loss",
      "Professional suitability review is advised",
    ],
    purpose:
      "Designed for clients who want more visible definition and contour shaping in selected body areas.",
    procedure:
      "The treatment follows a structured sculpting protocol aimed at improving the look of firmness and contour in targeted zones.",
    whatItDoes:
      "Muscle Sculpt supports a more defined body appearance by focusing on shape-led refinement and firmer contour presentation.",
    results:
      "Shape definition builds progressively through a planned course of sessions, with a firmer look becoming more noticeable over time.",
    maintenance: "Periodic follow-up sessions and consistent fitness habits help maintain the sculpted appearance.",
  },
  "cryo-sculpt-treatment": {
    name: "Cryo Sculpt",
    category: "Body Shaping and Targeted Weight Loss Program",
    categoryPath: "/treatment/body-shaping-and-targeted-weight-loss-program",
    description:
      "Cryo Sculpt is a cooling-based contour treatment created to refine selected stubborn pockets and support a cleaner, more sculpted body shape.",
    duration: "45-75 mins",
    sessions: "3-6 sessions recommended",
    rating: 4.8,
    reviews: 127,
    benefits: [
      "Targets localized stubborn areas",
      "Supports a more sculpted silhouette",
      "Improves visible contour transitions",
      "Non-surgical shaping support",
      "Helps refine selected body pockets",
      "Can fit into targeted sculpting plans",
    ],
    process: [
      "Area mapping and contour review",
      "Cooling-treatment planning",
      "Cryo sculpt application",
      "Post-session assessment",
      "Follow-up and maintenance planning",
    ],
    precautions: [
      "Best suited for localized contouring goals",
      "Results develop over time rather than immediately",
      "Healthy maintenance supports longevity of results",
      "Professional review is needed before starting care",
    ],
    purpose:
      "Intended for clients who want cooling-based support for refining selected pockets and improving body shape definition.",
    procedure:
      "Cryo Sculpt uses a structured cooling-led contour protocol on targeted areas selected during treatment planning.",
    whatItDoes:
      "It supports visible sculpting by focusing on small, resistant contour zones that need more selective refinement.",
    results:
      "Visible sculpting develops gradually over the treatment course, with contour lines appearing more refined over time.",
    maintenance: "Maintenance sessions may be advised depending on the area treated and long-term body goals.",
  },
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

    purpose:
      "Medical weight management combining hormonal balancing, metabolism optimization, and lifestyle guidance.",
    procedure:
      "Comprehensive assessment followed by personalized treatment plan with medications, supplements, and lifestyle modifications.",
    whatItDoes:
      "Addresses hormonal imbalances, metabolic issues, and behavioral factors contributing to weight gain.",
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

    purpose:
      "Advanced cellulite reduction combining multiple therapies for smoother skin texture.",
    procedure:
      "Multi-modal treatment addressing fat herniation, fibrous bands, and skin quality improvement.",
    whatItDoes:
      "Breaks down fibrous septae, reduces fat protrusion, and improves dermal thickness for cellulite reduction.",
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

    purpose:
      "Non-surgical fat reduction using controlled cooling technology to eliminate stubborn fat deposits.",
    procedure:
      "Cryolipolysis applicators deliver controlled cooling to target fat areas for natural elimination.",
    whatItDoes:
      "Induces apoptosis in fat cells through controlled cooling, allowing natural elimination over weeks.",
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

    purpose:
      "Non-invasive body contouring using advanced technologies for fat reduction and skin tightening.",
    procedure:
      "Combination of fat reduction modalities with skin tightening treatments for comprehensive body shaping.",
    whatItDoes:
      "Reduces fat volume while improving skin elasticity for enhanced body contours.",
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

    purpose:
      "Targeted fat reduction treatments for specific body areas resistant to diet and exercise.",
    procedure:
      "Precision treatments targeting localized fat deposits using various reduction technologies.",
    whatItDoes:
      "Selectively reduces fat cells in targeted areas while preserving surrounding tissues.",
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
      <div className="flex min-h-screen items-center justify-center bg-[#fcfaf7] px-6">
        <div className="rounded-[32px] border border-[#e5d8c7] bg-white px-10 py-12 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">
            Service Not Found
          </h2>
          <p className="mx-auto max-w-md text-sm leading-7 text-slate-600">
            The service you are looking for could not be found. Please return to
            the treatment pages and choose another service.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#10233f] px-6 py-3 text-sm font-medium tracking-[0.18em] text-white transition hover:bg-[#0c1b2f]"
          >
            GO HOME
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

  const categoryVisual = CATEGORY_VISUALS[service.category] || CATEGORY_VISUALS.default;
  const snapshotSummary =
    service.purpose || service.whatItDoes || service.procedure || service.description;
  const overviewCards = [
    service.purpose && {
      title: "Purpose & Indications",
      eyebrow: "Why this treatment",
      content: service.purpose,
    },
    service.whatItDoes && {
      title: "How It Works",
      eyebrow: "Science-led care",
      content: service.whatItDoes,
    },
    service.procedure && {
      title: "Procedure Overview",
      eyebrow: "What to expect",
      content: service.procedure,
    },
  ].filter(Boolean);

  const whyChooseCards = [
    {
      eyebrow: "Targeted care",
      title: "Designed around your concern",
      content: service.purpose || service.description,
    },
    {
      eyebrow: "Thoughtful method",
      title: "Science-led treatment planning",
      content: service.whatItDoes || service.procedure || service.description,
    },
    {
      eyebrow: "Visible payoff",
      title: "Built for refined outcomes",
      content: service.results || service.maintenance || service.description,
    },
  ].filter((item) => Boolean(item.content));

  const classifiedCare = (service.precautions || []).reduce(
    (accumulator, precaution) => {
      const normalizedPrecaution = precaution.toLowerCase();
      const matchesAfter = AFTER_CARE_KEYWORDS.some((keyword) =>
        normalizedPrecaution.includes(keyword)
      );
      const matchesBefore = BEFORE_CARE_KEYWORDS.some((keyword) =>
        normalizedPrecaution.includes(keyword)
      );

      if (matchesAfter && !matchesBefore) {
        accumulator.after.push(precaution);
      } else if (matchesBefore) {
        accumulator.before.push(precaution);
      } else {
        accumulator.before.push(precaution);
      }

      return accumulator;
    },
    { before: [], after: [] }
  );

  if (classifiedCare.after.length === 0 && classifiedCare.before.length > 1) {
    const splitIndex = Math.ceil(classifiedCare.before.length / 2);
    classifiedCare.after = classifiedCare.before.slice(splitIndex);
    classifiedCare.before = classifiedCare.before.slice(0, splitIndex);
  }

  return (
    <div className="mt-10 min-h-screen bg-[#fcfaf7]">
      <section className="relative overflow-hidden bg-[#07101a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${categoryVisual.image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,14,24,0.96),rgba(8,18,30,0.92),rgba(8,18,30,0.82))]" />
        <div className="absolute left-[8%] top-[16%] h-60 w-60 rounded-full bg-[rgba(214,179,132,0.16)] blur-3xl" />
        <div className="absolute bottom-[8%] right-[7%] h-72 w-72 rounded-full bg-[rgba(16,35,63,0.45)] blur-3xl" />

        <div className="relative mx-auto max-w-[1800px] px-6 pb-20 pt-28 lg:px-8 lg:pb-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-end xl:gap-14"
          >
            <div className="max-w-4xl">
              <Link
                to={service.categoryPath}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-white/90 backdrop-blur-xl transition hover:border-[#d6b384]/45 hover:text-white"
              >
                <ArrowLeftOutlined />
                Back To {service.category}
              </Link>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-5 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#d6b384]" />
                <span className="text-[11px] uppercase tracking-[0.34em] text-[rgb(246_243_239)]">
                  {categoryVisual.badge}
                </span>
              </div>

              <h1 className="mt-8 text-5xl font-light leading-[0.92] tracking-[-0.06em] text-white md:text-7xl xl:text-[6rem]">
                {service.name}
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)] md:text-[1.12rem]">
                {service.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center rounded-full bg-[#d6b384] px-8 py-4 text-sm font-medium tracking-[0.18em] text-[#0b1727] transition hover:bg-[#c9a26f]"
                >
                  BOOK CONSULTATION
                </button>
                <Link
                  to={service.categoryPath}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium tracking-[0.18em] text-white transition hover:border-[#d6b384] hover:text-[#d6b384]"
                >
                  EXPLORE CATEGORY
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {categoryVisual.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.26em] text-white/90 backdrop-blur-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(9,19,33,0.9)]">
                  <div className="absolute inset-0">
                    <img
                      src={categoryVisual.image}
                      alt={service.name}
                      className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,17,30,0.4),rgba(8,17,30,0.86))]" />
                  </div>

                  <div className="relative p-6 md:p-8">
                    <p className="text-[10px] uppercase tracking-[0.34em] text-[rgb(246_243_239)]">
                      Signature Service Snapshot
                    </p>
                    <h2 className="mt-4 text-2xl font-light text-white md:text-[2rem]">
                      Personalized planning, refined execution, visible confidence.
                    </h2>

                    <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 px-5 py-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/75">
                        Treatment Category
                      </p>
                      <p className="mt-2 text-lg font-medium text-white">
                        {service.category}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)]">
                        {snapshotSummary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_380px] xl:gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {overviewCards.length > 0 && (
                <div className="grid gap-6 xl:grid-cols-3">
                  {overviewCards.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="rounded-[34px] border border-[#e7dccd] bg-white p-7 shadow-[0_20px_55px_rgba(17,24,39,0.06)]"
                    >
                      <p className="text-[11px] uppercase tracking-[0.34em] text-[#9a7b52]">
                        {item.eyebrow}
                      </p>
                      <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-slate-900">
                        {item.title}
                      </h2>
                      <p className="mt-4 text-sm leading-8 text-slate-700">
                        {item.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}

              {service.benefits?.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  className="rounded-[38px] border border-[#e7dccd] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(250,245,239,0.98))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
                        Benefits
                      </p>
                      <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-slate-900 md:text-4xl">
                        Key benefits designed around visible, refined results.
                      </h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#10233f] text-[#d6b384]">
                      <TrophyOutlined className="text-xl" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 rounded-[22px] border border-[#ede2d5] bg-white/90 px-4 py-4"
                      >
                        <CheckCircleOutlined className="mt-1 text-[#d6b384]" />
                        <span className="text-sm leading-7 text-slate-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {whyChooseCards.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  className="rounded-[38px] border border-[#e7dccd] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
                        Why Choose This Treatment
                      </p>
                      <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-slate-900 md:text-4xl">
                        A more thoughtful approach to visible, lasting improvement.
                      </h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#10233f] text-[#d6b384]">
                      <TrophyOutlined className="text-xl" />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    {whyChooseCards.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[26px] border border-[#eadfd1] bg-[#fcfaf7] px-5 py-5"
                      >
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#9a7b52]">
                          {item.eyebrow}
                        </p>
                        <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-700">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {(classifiedCare.before.length > 0 || classifiedCare.after.length > 0) && (
                <motion.div
                  variants={fadeUp}
                  className="rounded-[38px] border border-[#d7dfe8] bg-[#10233f] p-8 shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
                >
                  <div className="mb-8">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#d6b384]">
                      Before / After Care
                    </p>
                    <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] text-white md:text-4xl">
                      Guidance for a smoother treatment experience.
                    </h2>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-[28px] border border-white/10 bg-white/6 px-5 py-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6b384]">
                        Before Your Appointment
                      </p>
                      <ul className="mt-5 space-y-4">
                        {classifiedCare.before.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#d6b384]" />
                            <span className="text-sm leading-7 text-white">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-white/6 px-5 py-5">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#d6b384]">
                        After Your Appointment
                      </p>
                      <ul className="mt-5 space-y-4">
                        {classifiedCare.after.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#d6b384]" />
                            <span className="text-sm leading-7 text-white">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {service.results && (
                  <motion.div
                    variants={fadeUp}
                    className="rounded-[34px] border border-[#e7dccd] bg-white p-8 text-center shadow-[0_20px_55px_rgba(17,24,39,0.06)]"
                  >
                    <TrophyOutlined className="text-3xl text-[#d6b384]" />
                    <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-slate-900">
                      Expected Results
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-slate-700">
                      {service.results}
                    </p>
                  </motion.div>
                )}

                {service.maintenance && (
                  <motion.div
                    variants={fadeUp}
                    className="rounded-[34px] border border-[#e7dccd] bg-white p-8 text-center shadow-[0_20px_55px_rgba(17,24,39,0.06)]"
                  >
                    <UserOutlined className="text-3xl text-[#d6b384]" />
                    <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-slate-900">
                      Maintenance
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-slate-700">
                      {service.maintenance}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="space-y-6 lg:sticky lg:top-28 lg:self-start"
            >
              {service.precautions?.length > 0 && (
                <div className="rounded-[34px] border border-[#d7dfe8] bg-[#10233f] p-7 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
                  <div className="flex items-center gap-3">
                    <SafetyOutlined className="text-[#d6b384]" />
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#d6b384]">
                      Important Precautions
                    </p>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {service.precautions.map((precaution) => (
                      <li key={precaution} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#d6b384]" />
                        <span className="text-sm leading-7 text-white">{precaution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-[34px] border border-[#e7dccd] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,239,0.98))] p-7 shadow-[0_20px_55px_rgba(17,24,39,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
                  Need Guidance?
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-slate-900">
                  Let our team help you choose the right care plan.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  If you are unsure whether this service matches your concern, book
                  a consultation and we will guide you to the most suitable option.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleBookAppointment}
                    className="inline-flex items-center justify-center rounded-full bg-[#10233f] px-6 py-4 text-sm font-medium tracking-[0.18em] text-white transition hover:bg-[#0c1b2f]"
                  >
                    BOOK CONSULTATION
                  </button>
                  <a
                    href="tel:+919266511393"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d9cbb9] px-6 py-4 text-sm font-medium tracking-[0.18em] text-slate-800 transition hover:border-[#10233f] hover:text-[#10233f]"
                  >
                    <PhoneOutlined />
                    CALL ELARIA
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
