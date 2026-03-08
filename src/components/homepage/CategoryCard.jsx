import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const CategoryCard = ({ title, description, image, delay }) => {
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

  return (
    <Link to={getCategoryPath(title)}>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -8 }}
        className="group overflow-hidden rounded-[28px] border border-[#e8ddd0] bg-white shadow-[0_18px_50px_rgba(17,24,39,0.06)] transition-all duration-300 hover:shadow-[0_26px_60px_rgba(17,24,39,0.12)]"
      >
        <div className="relative h-72 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10233f]/72 via-[#10233f]/10 to-transparent" />
          <div className="absolute left-6 top-6 rounded-full border border-white/35 bg-white/10 px-4 py-2 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white">
              Treatment Category
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="max-w-xs text-2xl font-medium tracking-[0.02em] text-white">
              {title}
            </h3>
          </div>
        </div>

        <div className="p-7">
          <p className="text-sm leading-7 text-slate-600">{description}</p>

          <div className="mt-7 flex items-center justify-between border-t border-[#efe7dd] pt-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#9a7b52]">
              Explore Treatments
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5d6c3] text-[#9a7b52] transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRightOutlined />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default CategoryCard;
