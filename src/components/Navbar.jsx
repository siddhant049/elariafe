import React, { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import elariaLogo from "../assets/images/Elaria Logo.png";

const categoryLinks = [
  { key: "hair", label: "Hair Treatments", path: "/treatment/hair" },
  { key: "skin", label: "Skin Treatments", path: "/treatment/skin" },
  { key: "acne-scars", label: "Acne & Scars", path: "/treatment/acne-scars" },
  { key: "under-eye", label: "Under Eye Services", path: "/treatment/under-eye" },
  { key: "pigmentation", label: "Pigmentation", path: "/treatment/pigmentation" },
  { key: "medifacial", label: "MediFacials", path: "/treatment/medifacial" },
  { key: "anti-aging", label: "Anti-Aging", path: "/treatment/anti-aging" },
  { key: "mole-surgery", label: "Mole Removal", path: "/treatment/mole-surgery"}, 
  { key: "stretch-marks-removal", label: "Stretch Marks Removal", path: "/treatment/stretch-marks-removal"},
  { key: "skin-infection-treatment", label: "Skin Infection Treatment", path: "/treatment/skin-infection-treatment"},
  { key: "laser", label: "Laser Treatments", path: "/treatment/laser" },
  { key: "body-contouring", label: "Body Contouring", path: "/treatment/body-contouring" },
  { key: "ayurveda", label: "Ayurveda", path: "/treatment/ayurveda" },
];

const mainCategoryLinks = categoryLinks.filter((category) =>
  [].includes(category.key)
);

const hairCategoryLinks = [
  {
    key: "hair-thinning-hair-fall",
    label: "Hair thinning / hair fall",
    path: "/treatment/hair-thinning-hair-fall",
  },
  {
    key: "dandruff",
    label: "Dandruff",
    path: "/treatment/dandruff",
  },
];

const hairNestedServiceLinks = {
  "hair-thinning-hair-fall": [
    { label: "PRP Hair Treatment", path: "/service/prp-hair-treatment" },
    { label: "GFC Therapy", path: "/service/gfc-therapy" },
    { label: "QR678 Treatment", path: "/service/qr678-treatment" },
    { label: "Exosome Hair Treatment", path: "/service/exosome-hair-treatment" },
  ],
  dandruff: [{ label: "Scalp Peel Treatment", path: "/service/scalp-peel-treatment" }],
};

const laserCategoryLinks = [
  {
    key: "laser-hair",
    label: "Hair",
    path: "/treatment/laser",
  },
  {
    key: "laser-skin",
    label: "Skin",
    path: "/treatment/laser",
  },
];

const laserNestedServiceLinks = {
  "laser-hair": [
    {
      label: "Laser Hair Reduction for Males",
      path: "/service/laser-hair-reduction-males",
    },
    {
      label: "Laser Hair Reduction for Females",
      path: "/service/laser-hair-reduction-females",
    },
  ],
  "laser-skin": [
    { label: "Birthmark Removal", path: "/service/birthmark-removal" },
    { label: "Tattoo Removal", path: "/service/tattoo-removal" },
  ],
};

const bodyContouringCategoryLinks = [
  {
    key: "weight-loss-program",
    label: "Weight Loss Program",
    path: "/treatment/weight-loss-program",
  },
  {
    key: "body-shaping-and-targeted-weight-loss-program",
    label: "Body Shaping and Targeted Weight Loss Program",
    path: "/treatment/body-shaping-and-targeted-weight-loss-program",
  },
];

const bodyContouringNestedServiceLinks = {
  "weight-loss-program": [
    { label: "FDS", path: "/service/fds-treatment" },
    { label: "NMS", path: "/service/nms-treatment" },
    { label: "Lipo Laser", path: "/service/lipo-laser-treatment" },
    { label: "Tummy Tuck", path: "/service/tummy-tuck-treatment" },
  ],
  "body-shaping-and-targeted-weight-loss-program": [
    { label: "Muscle Sculpt", path: "/service/muscle-sculpt-treatment" },
    { label: "Cryo Sculpt", path: "/service/cryo-sculpt-treatment" },
  ],
};

const ayurvedaServices = [
  { label: "Potli Massage", path: "/service/potli-massage" },
  { label: "Shirodhara", path: "/service/shirodhara-treatment" },
  { label: "Full Body Massage", path: "/service/full-body-massage" },
  { label: "Udwarthanam", path: "/service/udwarthanam-treatment" },
];

const skinCategoryLinks = categoryLinks.filter((category) =>
  ["skin", "acne-scars", "under-eye", "pigmentation", "medifacial", "anti-aging", "mole-surgery","stretch-marks-removal","skin-infection-treatment"].includes(
    category.key
  )
);

const skinDirectServiceLinks = [
  // { label: "Acne Scar Treatment", path: "/service/acne-scar-treatment" },
  // { label: "Xanthelasma Removal", path: "/service/xanthelasma-removal" },
  // { label: "Skin Infection Treatment", path: "/service/skin-infections-treatment" },
  // { label: "Melasma Therapy", path: "/service/melasma-treatment" },
  // { label: "Mole Surgery", path: "/service/mole-surgery" },
  // { label: "Stretch Marks Removal", path: "/service/stretch-marks-removal" },
  // { label: "Skin Tag Removal", path: "/service/skin-tag-removal" },
  // { label: "Laser Mole Treatment", path: "/service/laser-mole-treatment" },
  // { label: "Wart Cautery", path: "/service/wart-cautery" },
  // { label: "Dermapen Treatment", path: "/service/dermapen-skin-treatment" },
  // { label: "Stretch Mark Reduction", path: "/service/stretch-marks-treatment" },
];

const skinNestedServiceLinks = {
  "acne-scars": [
    { label: "Acne Peels", path: "/service/acne-peels" },
    { label: "Advanced Acne Treatments", path: "/service/advanced-acne-treatments" },
    { label: "Carbon Peels", path: "/service/carbon-peels" },
    { label: "Chemical Peels for Acne", path: "/service/chemical-peels-acne" },
    { label: "Derma Roller for Acne", path: "/service/derma-roller-acne" },
    { label: "Fractional Laser for Acne", path: "/service/fractional-laser-acne" },
    { label: "Radiofrequency Microneedling", path: "/service/radiofrequency-microneedling" },
    { label: "Acne Cleanup Facial", path: "/service/acne-cleanup-facial" },
    { label: "Laser for Freckles", path: "/service/laser-freckles-treatment" },
    {
      label: "Microneedling Radiofrequency for Stretch Marks",
      path: "/service/microneedling-radiofrequency-stretch-marks",
    },
  ],
  "under-eye": [
    { label: "Dark Circles Removal", path: "/service/dark-circles-removal" },
    { label: "Under Eye Rejuvenation", path: "/service/under-eye-rejuvenation" },
    { label: "Under Eye Boosters", path: "/service/under-eye-boosters" },
  ],
  pigmentation: [
    { label: "Freckle Treatment", path: "/service/freckle-treatment" },
    { label: "Depigmentation Peels", path: "/service/depigmentation-peels" },
    { label: "Cosmelan Depigmentation", path: "/service/cosmelan-depigmentation" },
    { label: "Glow Brightening Peel", path: "/service/glow-brightening-peel" },
    { label: "Dermapen for Pigmentation", path: "/service/dermapen-for-pigmentation" },
    { label: "PRP Vampire Facial", path: "/service/prp-vampire-facial" },
    { label: "HydraFacial Basic", path: "/service/hydrafacial-basic" },
    { label: "HydraFacial Elite", path: "/service/hydrafacial-elite" },
    { label: "Skin Boosters for Pigmentation", path: "/service/skin-boosters-pigmentation" },
  ],
  medifacial: [
    { label: "Diamond Polishing", path: "/service/diamond-polishing" },
    { label: "OxyFacials", path: "/service/oxy-facials" },
    { label: "Oxyglow Treatment", path: "/service/oxyglow-treatment" },
    { label: "InstaBright Rejuvenation", path: "/service/instabright-rejuvenation" },
    { label: "Powerlift Medifacial", path: "/service/powerlift-medifacial" },
    { label: "Power Glow Facial", path: "/service/power-glow-facial" },
    { label: "IV Infusions for Glow", path: "/service/iv-infusions-glow" },
  ],
  "anti-aging": [
    { label: "Wrinkles Treatment", path: "/service/wrinkles-treatment" },
    { label: "Anti-aging Peels", path: "/service/anti-aging-peels" },
    { label: "Collagen Boosters", path: "/service/collagen-boosters" },
    { label: "Skin Tightening Treatment", path: "/service/skin-tightening-treatment" },
  ],
  "mole-surgery": [
    {label: "Skin Tag Removal", path: "/service/skin-tag-removal"},
    { label: "Wart Cautery", path: "/service/wart-cautery" },
    { label: "Xanthelasma Removal", path: "/service/xanthelasma-removal" },
    { label: "Laser Mole Treatment", path: "/service/laser-mole-treatment" },
  ],
  "stretch-marks-removal": [
    {
      label: "Microneedling Radiofrequency for Stretch Marks",
      path: "/service/microneedling-radiofrequency-stretch-marks",
    },
  ],
  "skin-infection-treatment": [
    { label: "Skin Infections Treatment", path: "/service/skin-infections-treatment" },
  ],

};


const treatmentDropdownConfigs = {
  ayurveda: {
    key: "ayurveda",
    navLabel: "Ayurveda",
    path: "/treatment/ayurveda",
    widthClassName: "w-[320px]",
    treatments: ayurvedaServices,
  },
};

const navVariants = {
  hidden: { y: -16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

const Navbar = ({ onBookAppointment }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHairCategory, setActiveHairCategory] = useState(
    "hair-thinning-hair-fall"
  );
  const [activeLaserCategory, setActiveLaserCategory] = useState("laser-hair");
  const [activeBodyContouringCategory, setActiveBodyContouringCategory] =
    useState("weight-loss-program");
  const [activeSkinCategory, setActiveSkinCategory] = useState("acne-scars");
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 120);
  };

  const skinMenuItems = [
    {
      key: "menu-grid",
      style: { padding: 0, background: "transparent", border: "none" },
      label: (
        <div className="w-[860px] overflow-hidden rounded-[24px] border border-[#e7dccd] bg-[linear-gradient(180deg,#fffdfa,#f8f1e7)] shadow-[0_22px_50px_rgba(17,24,39,0.12)]">
          <div className="grid grid-cols-[1.08fr_0.92fr]">
            <div className="border-r border-[#eadfce] px-2 py-2">
              <div className="border-b border-[#eadfce] py-1">
                {skinCategoryLinks
                  .filter((category) => category.key !== "skin")
                  .map((category) => (
                    <button
                      key={category.key}
                      type="button"
                      onClick={() => navigate(category.path)}
                      onMouseEnter={() => setActiveSkinCategory(category.key)}
                      className={`flex w-full items-center justify-between rounded-[14px] px-5 py-3 text-left text-sm font-medium transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                        activeSkinCategory === category.key
                          ? "bg-[#f6ead8] text-black"
                          : "text-[#9a7b52]"
                      }`}
                    >
                      {category.label}
                      <span className="text-xs">{">"}</span>
                    </button>
                  ))}
              </div>

              <div className="grid grid-cols-2 gap-1 py-2">
                {skinDirectServiceLinks.map((service) => (
                  <button
                    key={service.label}
                    type="button"
                    onClick={() => navigate(service.path)}
                    onMouseEnter={() => setActiveSkinCategory(null)}
                    className="rounded-[14px] px-4 py-3 text-left text-sm font-medium text-[#9a7b52] transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[420px] px-2 py-2">
              {activeSkinCategory ? (
                <div className="max-h-[404px] overflow-y-auto">
                  {skinNestedServiceLinks[activeSkinCategory]?.map((service, index) => (
                    <button
                      key={service.label}
                      type="button"
                      onClick={() => navigate(service.path)}
                      className={`block w-full border-b border-[#f0e5d9] px-5 py-4 text-left text-sm font-medium text-[#9a7b52] transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                        index === skinNestedServiceLinks[activeSkinCategory].length - 1
                          ? "last:border-b-0"
                          : ""
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex h-full min-h-[404px] items-center justify-center px-8 text-center text-sm leading-7 text-[#9a7b52]">
                  Hover a skin subcategory to see its detailed services here.
                </div>
              )}
            </div>
          </div>
        </div>
      ),
    },
  ];

  const hairMenuItems = [
    {
      key: "menu-grid",
      style: { padding: 0, background: "transparent", border: "none" },
      label: (
        <div className="w-[760px] overflow-hidden rounded-[24px] border border-[#e7dccd] bg-[linear-gradient(180deg,#fffdfa,#f8f1e7)] shadow-[0_22px_50px_rgba(17,24,39,0.12)]">
          <div className="grid grid-cols-[0.95fr_1.05fr]">
            <div className="border-r border-[#eadfce] px-2 py-2">
              {hairCategoryLinks.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => navigate(category.path)}
                  onMouseEnter={() => setActiveHairCategory(category.key)}
                  className={`flex w-full items-center justify-between rounded-[14px] px-5 py-4 text-left text-sm font-medium transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                    activeHairCategory === category.key
                      ? "bg-[#f6ead8] text-black"
                      : "text-[#9a7b52]"
                  }`}
                >
                  {category.label}
                  <span className="text-xs">{">"}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[220px] px-2 py-2">
              <div className="max-h-[204px] overflow-y-auto">
                {hairNestedServiceLinks[activeHairCategory]?.map((service, index) => (
                  <button
                    key={service.label}
                    type="button"
                    onClick={() => navigate(service.path)}
                    className={`block w-full border-b border-[#f0e5d9] px-5 py-4 text-left text-sm font-medium text-[#9a7b52] transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                      index === hairNestedServiceLinks[activeHairCategory].length - 1
                        ? "last:border-b-0"
                        : ""
                    }`}
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const laserMenuItems = [
    {
      key: "menu-grid",
      style: { padding: 0, background: "transparent", border: "none" },
      label: (
        <div className="w-[720px] overflow-hidden rounded-[24px] border border-[#e7dccd] bg-[linear-gradient(180deg,#fffdfa,#f8f1e7)] shadow-[0_22px_50px_rgba(17,24,39,0.12)]">
          <div className="grid grid-cols-[0.9fr_1.1fr]">
            <div className="border-r border-[#eadfce] px-2 py-2">
              {laserCategoryLinks.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => navigate(category.path)}
                  onMouseEnter={() => setActiveLaserCategory(category.key)}
                  className={`flex w-full items-center justify-between rounded-[14px] px-5 py-4 text-left text-sm font-medium transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                    activeLaserCategory === category.key
                      ? "bg-[#f6ead8] text-black"
                      : "text-[#9a7b52]"
                  }`}
                >
                  {category.label}
                  <span className="text-xs">{">"}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[220px] px-2 py-2">
              <div className="max-h-[204px] overflow-y-auto">
                {laserNestedServiceLinks[activeLaserCategory]?.map(
                  (service, index) => (
                    <button
                      key={service.label}
                      type="button"
                      onClick={() => navigate(service.path)}
                      className={`block w-full border-b border-[#f0e5d9] px-5 py-4 text-left text-sm font-medium text-[#9a7b52] transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                        index ===
                        laserNestedServiceLinks[activeLaserCategory].length - 1
                          ? "last:border-b-0"
                          : ""
                      }`}
                    >
                      {service.label}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const bodyContouringMenuItems = [
    {
      key: "menu-grid",
      style: { padding: 0, background: "transparent", border: "none" },
      label: (
        <div className="w-[800px] overflow-hidden rounded-[24px] border border-[#e7dccd] bg-[linear-gradient(180deg,#fffdfa,#f8f1e7)] shadow-[0_22px_50px_rgba(17,24,39,0.12)]">
          <div className="grid grid-cols-[1fr_1fr]">
            <div className="border-r border-[#eadfce] px-2 py-2">
              {bodyContouringCategoryLinks.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => navigate(category.path)}
                  onMouseEnter={() => setActiveBodyContouringCategory(category.key)}
                  className={`flex w-full items-center justify-between rounded-[14px] px-5 py-4 text-left text-sm font-medium transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                    activeBodyContouringCategory === category.key
                      ? "bg-[#f6ead8] text-black"
                      : "text-[#9a7b52]"
                  }`}
                >
                  {category.label}
                  <span className="text-xs">{">"}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[260px] px-2 py-2">
              <div className="max-h-[244px] overflow-y-auto">
                {bodyContouringNestedServiceLinks[
                  activeBodyContouringCategory
                ]?.map((service, index) => (
                  <button
                    key={service.label}
                    type="button"
                    onClick={() => navigate(service.path)}
                    className={`block w-full border-b border-[#f0e5d9] px-5 py-4 text-left text-sm font-medium text-[#9a7b52] transition-all duration-200 hover:bg-[#f3e4cf] hover:text-black ${
                      index ===
                      bodyContouringNestedServiceLinks[activeBodyContouringCategory]
                        .length -
                        1
                        ? "last:border-b-0"
                        : ""
                    }`}
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const getTreatmentMenuItems = (config) => [
    {
      key: `${config.key}-menu`,
      style: { padding: 0, background: "transparent", border: "none" },
      label: (
        <div
          className={`${config.widthClassName} overflow-hidden rounded-[24px] border border-[#e7dccd] bg-[linear-gradient(180deg,#fffdfa,#f8f1e7)] shadow-[0_22px_50px_rgba(17,24,39,0.12)]`}
        >
          <div className="max-h-[360px] overflow-y-auto py-2">
            {config.treatments.map((treatment) => (
              <button
                key={treatment.label}
                type="button"
                onClick={() => navigate(treatment.path)}
                className="block w-full border-b border-[#f0e5d9] px-5 py-4 text-left text-sm font-medium text-[#9a7b52] transition-all duration-200 last:border-b-0 hover:bg-[#f3e4cf] hover:text-black"
              >
                {treatment.label}
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="bg-[#10233f] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] uppercase tracking-[0.28em] lg:px-8">
          <div className="flex items-center gap-2 text-white/80">
            <PhoneOutlined />
            <span>Call us: +91-92665 11393</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/70">
            <MailOutlined />
            <span>elariaesthetique@gmail.com            </span>
          </div>
        </div>
      </div>

      <motion.nav className="border-b border-[#eadfce] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
          >
            <img
              src={elariaLogo}
              alt="Elaria Esthetique"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-base font-semibold tracking-[0.12em] text-slate-900">
                ELARIA
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a7b52]">
                Esthetique
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-10 lg:flex">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
            >
              Home
            </button>

            <Dropdown
              menu={{
                items: skinMenuItems,
                style: {
                  padding: 0,
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                },
              }}
              trigger={["hover"]}
              placement="bottomCenter"
              overlayClassName="!bg-transparent !shadow-none"
            >
              <button
                type="button"
                onClick={() => navigate("/treatment/skin")}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
              >
                Skin
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            <Dropdown
              menu={{
                items: hairMenuItems,
                style: {
                  padding: 0,
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                },
              }}
              trigger={["hover"]}
              placement="bottomCenter"
              overlayClassName="!bg-transparent !shadow-none"
            >
              <button
                type="button"
                onClick={() => navigate("/treatment/hair")}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
              >
                Hair
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            <Dropdown
              menu={{
                items: laserMenuItems,
                style: {
                  padding: 0,
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                },
              }}
              trigger={["hover"]}
              placement="bottomCenter"
              overlayClassName="!bg-transparent !shadow-none"
            >
              <button
                type="button"
                onClick={() => navigate("/treatment/laser")}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
              >
                Laser
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            <Dropdown
              menu={{
                items: bodyContouringMenuItems,
                style: {
                  padding: 0,
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                },
              }}
              trigger={["hover"]}
              placement="bottomCenter"
              overlayClassName="!bg-transparent !shadow-none"
            >
              <button
                type="button"
                onClick={() => navigate("/treatment/body-contouring")}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
              >
                Body Contouring
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            <Dropdown
              menu={{
                items: getTreatmentMenuItems(treatmentDropdownConfigs.ayurveda),
                style: {
                  padding: 0,
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                },
              }}
              trigger={["hover"]}
              placement="bottomCenter"
              overlayClassName="!bg-transparent !shadow-none"
            >
              <button
                type="button"
                onClick={() => navigate("/treatment/ayurveda")}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
              >
                Ayurveda
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
            >
              Contact
            </button>
          </div>

          <div className="hidden lg:block">
            <Button
              type="primary"
              onClick={onBookAppointment}
              className="h-11 rounded-full border-none bg-[#b8925f] px-6 font-medium text-white shadow-none hover:!bg-[#a78454]"
            >
              Book Consultation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-full border border-[#eadfce] p-2 text-slate-700 lg:hidden"
          >
            <MenuOutlined />
          </button>
        </div>
      </motion.nav>

      <Drawer
        placement="right"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        closeIcon={<CloseOutlined />}
        title={
          <div className="flex items-center gap-3">
            <img
              src={elariaLogo}
              alt="Elaria Esthetique"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-base font-semibold tracking-[0.08em] text-slate-900">
                ELARIA
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a7b52]">
                Esthetique
              </p>
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl bg-[#f7f1ea] p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a7b52]">
              Contact
            </p>
            <p className="mt-2 text-sm text-slate-700">+91-92665 11393</p>
            <p className="mt-1 text-sm text-slate-600">elariaesthetique@gmail.com</p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection("home");
              }}
              className="text-left text-base font-medium text-slate-800"
            >
              Home
            </button>

            <div>
              <p className="mb-3 text-base font-medium text-slate-800">Categories</p>

              <div className="mb-4 rounded-3xl border border-[#eadfce] bg-[#fcfaf7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-800">Hair</p>
                </div>

                <div className="grid gap-4">
                  {hairCategoryLinks.map((category) => (
                    <div key={category.key} className="rounded-2xl border border-[#efe3d3] bg-white/70 p-3">
                      <Link
                        to={category.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm font-medium text-slate-800 transition-colors hover:text-[#9a7b52]"
                      >
                        {category.label}
                      </Link>

                      <div className="mt-3 grid gap-2">
                        {hairNestedServiceLinks[category.key].map((service) => (
                          <Link
                            key={service.label}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-[#fcfaf7] hover:text-[#9a7b52]"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 rounded-3xl border border-[#eadfce] bg-[#fcfaf7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-800">Laser</p>
                </div>

                <div className="grid gap-4">
                  {laserCategoryLinks.map((category) => (
                    <div
                      key={category.key}
                      className="rounded-2xl border border-[#efe3d3] bg-white/70 p-3"
                    >
                      <Link
                        to={category.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm font-medium text-slate-800 transition-colors hover:text-[#9a7b52]"
                      >
                        {category.label}
                      </Link>

                      <div className="mt-3 grid gap-2">
                        {laserNestedServiceLinks[category.key].map((service) => (
                          <Link
                            key={service.label}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-[#fcfaf7] hover:text-[#9a7b52]"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 rounded-3xl border border-[#eadfce] bg-[#fcfaf7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-800">
                    Body Contouring
                  </p>
                </div>

                <div className="grid gap-4">
                  {bodyContouringCategoryLinks.map((category) => (
                    <div
                      key={category.key}
                      className="rounded-2xl border border-[#efe3d3] bg-white/70 p-3"
                    >
                      <Link
                        to={category.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm font-medium text-slate-800 transition-colors hover:text-[#9a7b52]"
                      >
                        {category.label}
                      </Link>

                      <div className="mt-3 grid gap-2">
                        {bodyContouringNestedServiceLinks[category.key].map(
                          (service) => (
                            <Link
                              key={service.label}
                              to={service.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-[#fcfaf7] hover:text-[#9a7b52]"
                            >
                              {service.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 rounded-3xl border border-[#eadfce] bg-[#fcfaf7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <Link
                    to="/treatment/ayurveda"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-slate-800 transition-colors hover:text-[#9a7b52]"
                  >
                    Ayurveda
                  </Link>
                </div>

                <div className="grid gap-2">
                  {ayurvedaServices.map((service) => (
                    <Link
                      key={service.label}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-white hover:text-[#9a7b52]"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mb-4 rounded-3xl border border-[#eadfce] bg-[#fcfaf7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-800">Skin</p>
                </div>

                <div className="grid gap-2">
                  {skinCategoryLinks
                    .filter((category) => category.key !== "skin")
                    .map((category) => (
                      <Link
                        key={category.key}
                        to={category.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-white hover:text-[#9a7b52]"
                      >
                        {category.label}
                      </Link>
                    ))}
                </div>

                <div className="mt-4 grid gap-2">
                  {skinDirectServiceLinks.map((service) => (
                    <Link
                      key={service.label}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-white hover:text-[#9a7b52]"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                {mainCategoryLinks.map((category) => (
                  <Link
                    key={category.key}
                    to={category.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl bg-[#fcfaf7] px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#f8f5f0] hover:text-[#9a7b52]"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection("contact");
              }}
              className="text-left text-base font-medium text-slate-800"
            >
              Contact
            </button>
          </div>

          <Button
            type="primary"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookAppointment();
            }}
            className="h-12 rounded-full border-none bg-[#b8925f] font-medium text-white hover:!bg-[#a78454]"
          >
            Book Consultation
          </Button>
        </div>
      </Drawer>
    </motion.header>
  );
};

export default Navbar;
