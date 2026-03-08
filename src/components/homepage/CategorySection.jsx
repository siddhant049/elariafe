import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import hair from "../../assets/images/hair.jpg";
import skin from "../../assets/images/skin.jpg";
import acne from "../../assets/images/acne.jpg";
import under_eyes from "../../assets/images/under_eyes.png";
import pigmentation from "../../assets/images/pigmentation.png";
import medifacial from "../../assets/images/medifacial.png";
import anti_aging from "../../assets/images/anti_aging.png";
import laser from "../../assets/images/laser.png";
import slimming from "../../assets/images/slimming.png";

const categories = [
  {
    title: "HAIR",
    short: "Hair",
    description:
      "Advanced hair restoration treatments for healthy, voluminous hair growth and scalp wellness.",
    image: hair,
    path: "/treatment/hair",
    highlights: ["Hair fall", "Scalp wellness", "Regrowth support"],
    subtitle: "Targeted scalp and hair restoration care",
  },
  {
    title: "SKIN",
    short: "Skin",
    description:
      "Comprehensive skin care solutions addressing pigmentation, acne, aging, and overall skin health.",
    image: skin,
    path: "/treatment/skin",
    highlights: ["Pigmentation", "Texture", "Glow renewal"],
    subtitle: "Advanced solutions for healthier-looking skin",
  },
  {
    title: "ACNE AND SCARS",
    short: "Acne & Scars",
    description:
      "Targeted treatments for active acne, acne scars, and blemishes for clear, smooth skin.",
    image: acne,
    path: "/treatment/acne-scars",
    highlights: ["Acne control", "Scar revision", "Texture repair"],
    subtitle: "Smooth, clearer skin with expert-led correction",
  },
  {
    title: "UNDER EYES SERVICES",
    short: "Under Eyes",
    description:
      "Specialized treatments for dark circles, hollowness, and rejuvenation of delicate under-eye area.",
    image: under_eyes,
    path: "/treatment/under-eye",
    highlights: ["Dark circles", "Hollowness", "Eye rejuvenation"],
    subtitle: "Refresh and brighten the under-eye area",
  },
  {
    title: "PIGMENTATION",
    short: "Pigmentation",
    description:
      "Effective solutions for uneven skin tone, melasma, freckles, and pigmentation concerns.",
    image: pigmentation,
    path: "/treatment/pigmentation",
    highlights: ["Melasma", "Freckles", "Even tone"],
    subtitle: "Clearer, brighter and more even skin tone",
  },
  {
    title: "MEDIFACIAL",
    short: "Medifacial",
    description:
      "Medical-grade facials combining advanced technology with expert care for radiant skin.",
    image: medifacial,
    path: "/treatment/medifacial",
    highlights: ["Hydration", "Instant glow", "Event-ready skin"],
    subtitle: "Luxury facials with visible glow and hydration",
  },
  {
    title: "ANTI AGING",
    short: "Anti Aging",
    description:
      "Cutting-edge anti-aging treatments for wrinkles, fine lines, and skin rejuvenation.",
    image: anti_aging,
    path: "/treatment/anti-aging",
    highlights: ["Fine lines", "Firmness", "Collagen boost"],
    subtitle: "Refined anti-aging care for graceful rejuvenation",
  },
  {
    title: "LASER",
    short: "Laser",
    description:
      "Precision laser treatments for hair removal, tattoo removal, and skin resurfacing.",
    image: laser,
    path: "/treatment/laser",
    highlights: ["Hair reduction", "Resurfacing", "Precision care"],
    subtitle: "Technology-led laser treatments with precision",
  },
  {
    title: "BODY CONTOURING",
    short: "Body",
    description:
      "Non-invasive body shaping and fat reduction treatments for your ideal silhouette.",
    image: slimming,
    path: "/treatment/body-contouring",
    highlights: ["Body shaping", "Fat reduction", "Contour refinement"],
    subtitle: "Shape and refine with non-invasive contouring",
  },
];

const CategorySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeIndex = useMemo(
    () => (hoveredIndex === null ? selectedIndex : hoveredIndex),
    [hoveredIndex, selectedIndex]
  );

  return (
    <section id="treatments-section" className="bg-[#fcfaf7] px-4 py-24 lg:px-6 lg:py-32">
      <div className="mx-auto max-w-[1800px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-[#9a7b52]">
              Treatments
            </p>
            <h2 className="mt-5 text-4xl font-light leading-[0.98] tracking-[-0.04em] text-slate-900 md:text-6xl">
              Explore treatment categories through an immersive showcase.
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              A more visual, editorial layout inspired by premium clinic design,
              where categories reveal themselves in a cleaner and more aesthetic
              way.
            </p>
          </div>
        </motion.div>

        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-[42px] border border-[#ddd1c2] bg-[#0f2037] shadow-[0_30px_90px_rgba(17,24,39,0.12)]">
            <div className="flex min-h-[760px] xl:min-h-[820px]">
              {categories.map((category, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={category.title}
                    layout
                    style={{ flex: isActive ? 3 : 1 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="relative min-w-0 border-r border-white/12 last:border-r-0"
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(index)}
                      onBlur={() => setHoveredIndex(null)}
                      onClick={() => setSelectedIndex(index)}
                      className="relative h-full w-full text-left"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${category.image})` }}
                      />
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          isActive
                            ? "bg-[linear-gradient(180deg,rgba(12,24,41,0.14),rgba(12,24,41,0.28),rgba(12,24,41,0.88))]"
                            : "bg-[linear-gradient(180deg,rgba(12,24,41,0.46),rgba(12,24,41,0.44),rgba(12,24,41,0.88))]"
                        }`}
                      />

                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35 }}
                          className="relative flex h-full flex-col justify-between p-8 xl:p-10"
                        >
                          <div className="rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur-md w-fit">
                            <p className="text-[11px] uppercase tracking-[0.34em] text-white/80">
                              {category.short}
                            </p>
                          </div>

                          <div className="max-w-xl">
                            <p className="text-[11px] uppercase tracking-[0.34em] text-[#d6b384]">
                              {category.subtitle}
                            </p>
                            <h3 className="mt-4 text-4xl font-light tracking-[-0.04em] text-white xl:text-5xl">
                              {category.title}
                            </h3>
                            <p className="mt-5 max-w-lg text-base leading-8 text-white/82">
                              {category.description}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                              {category.highlights.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/82 backdrop-blur-md"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>

                            <Link
                              to={category.path}
                              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md transition hover:bg-white/15"
                            >
                              Explore Treatments
                              <ArrowRightOutlined />
                            </Link>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="relative h-full">
                          <div className="absolute inset-x-0 top-[20%] bottom-[20%] flex items-center justify-center">
                            <span
                              className="text-lg font-bold uppercase tracking-[0.3em] text-white"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                              }}
                            >
                              {category.short}
                            </span>
                          </div>
                        </div>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="-mx-4 overflow-x-auto px-4 pb-2">
            <div className="flex w-max gap-4">
              {categories.map((category, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`overflow-hidden rounded-[30px] border text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#d6c3ab] shadow-[0_18px_35px_rgba(17,24,39,0.08)]"
                        : "border-[#eadfce]"
                    }`}
                  >
                    <div
                      className="relative h-[360px] w-[280px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/88 via-[#10233f]/18 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="text-[11px] uppercase tracking-[0.34em] text-[#d6b384]">
                          {category.short}
                        </p>
                        <h3 className="mt-4 text-2xl font-light text-white">
                          {category.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/80">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
