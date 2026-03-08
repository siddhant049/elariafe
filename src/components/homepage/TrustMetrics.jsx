import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { value: "15+", label: "Years of Expertise" },
  { value: "15K+", label: "Consultations Conducted" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "Advanced", label: "Technology-led Care" },
];

const TrustMetrics = () => {
  return (
    <section className="bg-[#10233f] px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#d6b384]">
              Why Elaria
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.03em] text-white md:text-4xl">
              Clinical precision with a premium experience.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/70">
            A calmer, more elevated treatment experience built around safety,
            personalization and results that feel polished, not overdone.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm"
            >
              <p className="text-3xl font-medium text-[#d6b384]">{metric.value}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/70">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
