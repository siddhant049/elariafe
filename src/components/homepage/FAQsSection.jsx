import React, { useState } from "react";
import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const FAQsSection = () => {
  const [activeFaq, setActiveFaq] = useState(-1);
  const faqs = [
    {
      question: "Are the treatments safe and FDA approved?",
      answer:
        "Yes, all our treatments are performed using FDA-approved equipment and techniques. Our medical professionals ensure the highest safety standards are maintained throughout your treatment journey.",
    },
    {
      question: "How long do the results typically last?",
      answer:
        "Results vary depending on the treatment and individual factors. Most aesthetic treatments provide results lasting 6-18 months, while some surgical procedures offer permanent results. We'll discuss realistic expectations during your consultation.",
    },
    {
      question: "What is the recovery time for treatments?",
      answer:
        "Recovery time depends on the specific treatment. Non-invasive procedures like Botox typically require minimal downtime (1-2 days), while more comprehensive treatments may need 1-2 weeks for full recovery. We'll provide detailed aftercare instructions.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible financing options and payment plans to make treatments accessible. We accept major credit cards, and our team can help you explore financing solutions that fit your budget.",
    },
    {
      question: "What should I expect during my first consultation?",
      answer:
        "Your first consultation includes a comprehensive assessment of your concerns, medical history review, and personalized treatment recommendations. We'll discuss your goals, answer questions, and create a customized treatment plan.",
    },
    {
      question: "Are there any age restrictions for treatments?",
      answer:
        "Most treatments are suitable for adults 18 and older. Some procedures may have different age guidelines based on individual circumstances. We'll assess your eligibility during the consultation and recommend the most appropriate treatments.",
    },
    {
      question: "How do I know which treatment is right for me?",
      answer:
        "You don’t need to decide on your own. During your consultation, our experts will assess your concerns, skin or hair type, lifestyle, and goals, then recommend a customized treatment plan that suits you best.",
    },
    {
      question:
        "Do I need to stop my current skincare or medications before treatment?",
      answer:
        "In some cases, we may ask you to pause certain products or medications, such as retinoids or blood thinners, before a procedure. Our doctor will review your current routine and medical history and give you clear pre-treatment instructions.",
    },
    {
      question: "How soon will I see results after my treatment?",
      answer:
        "Some treatments show visible improvement immediately or within a few days, while others work gradually over several weeks as your skin or hair regenerates. During your consultation, we’ll explain the expected timeline and how many sessions you may need.",
    },
    // {
    //   question: "Can I combine multiple treatments in one treatment plan?",
    //   answer:
    //     "Yes, in many cases treatments can be combined to address multiple concerns more effectively. During your consultation, our experts will recommend a safe and personalized plan based on your goals, skin or hair condition, and recovery requirements.",
    // },
  ];

  return (
    <section className="border-t border-[#eee2d4] bg-[#fcfaf7] px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-light tracking-[-0.03em] text-[#10233f] md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600"
          >
            Find answers to common questions about our treatments and services
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setActiveFaq(index)}
              onMouseLeave={() => setActiveFaq(-1)}
              className="group relative h-[300px] [perspective:1400px]"
            >
              <motion.div
                animate={{ rotateY: activeFaq === index ? 180 : 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 overflow-hidden rounded-[28px] border border-[#e9dfd2] bg-white p-6 shadow-[0_16px_40px_rgba(17,24,39,0.04)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#d6b384] via-[#b8925f] to-[#d6b384] opacity-75" />
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f1ea] text-[#9a7b52]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  
                  </div>
                  <div className="flex h-[calc(100%-3.5rem)] flex-col justify-between">
                    <h3 className="max-w-xl text-xl font-medium leading-8 text-[#10233f]">
                      {faq.question}
                    </h3>
                    <div className="flex items-center justify-between border-t border-[#efe4d7] pt-4">
                      <span className="text-sm text-slate-500">Read answer</span>
                      <span className="text-lg text-[#b8925f]">↗</span>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 overflow-hidden rounded-[28px] border border-[#27486f] bg-[linear-gradient(180deg,#173154,#10233f)] p-6 text-white shadow-[0_22px_50px_rgba(16,35,63,0.24)]"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#d6b384] via-[#f0d7ac] to-[#d6b384]" />
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/10 text-[#f3dfbc]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#f3dfbc]">
                      Answer
                    </span>
                  </div>
                  <div className="flex h-[calc(100%-3.5rem)] flex-col justify-between">
                    <p className="text-base leading-7 text-white/90">{faq.answer}</p>
                    
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsSection;
