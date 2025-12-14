import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Card, Row, Col, Steps, Avatar, Rate } from "antd";
import {
  ArrowLeftOutlined,
  RobotOutlined,
  CheckCircleOutlined,
  StarFilled,
  PhoneOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import Navbar from "../components/Navbar";

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

const AIAssessmentPage = ({ onBookAppointment }) => {
  const handleBookAppointment = () => {
    if (onBookAppointment) {
      onBookAppointment();
    }
  };

  const assessmentSteps = [
    {
      title: "Personal Information",
      description: "Age, gender, skin type, and concerns",
      icon: "👤",
    },
    {
      title: "Lifestyle Analysis",
      description: "Daily routine, diet, and habits",
      icon: "🏃‍♀️",
    },
    {
      title: "Skin Assessment",
      description: "Current skin condition and goals",
      icon: "🔍",
    },
    {
      title: "Treatment Recommendations",
      description: "Personalized treatment plan",
      icon: "💡",
    },
  ];

  const features = [
    {
      title: "Smart Analysis",
      description: "AI-powered algorithm analyzes your unique profile",
      icon: "🧠",
    },
    {
      title: "Personalized Results",
      description: "Tailored recommendations based on your specific needs",
      icon: "🎯",
    },
    {
      title: "Expert Validation",
      description: "All recommendations reviewed by certified specialists",
      icon: "👩‍⚕️",
    },
    {
      title: "Treatment Timeline",
      description: "Structured plan with realistic expectations",
      icon: "📅",
    },
  ];

  const testimonials = [
    {
      name: "Priya S.",
      rating: 5,
      text: "The AI assessment was incredibly accurate! It recommended treatments I never considered and the results exceeded my expectations.",
      treatment: "HydraFacial & Pigmentation Treatment",
    },
    {
      name: "Rahul M.",
      rating: 5,
      text: "Saved me so much time and confusion. The personalized plan was exactly what I needed for my skin concerns.",
      treatment: "Laser Hair Removal & Anti-Aging",
    },
    {
      name: "Kavita R.",
      rating: 5,
      text: "The assessment understood my skin type perfectly and suggested treatments that actually worked for me.",
      treatment: "MediFacial & Under Eye Treatment",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onBookAppointment={handleBookAppointment} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#001b3d] to-[#002b5d]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center text-white"
          >
            <Link
              to="/"
              className="inline-flex items-center text-[#efae4c] hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftOutlined className="mr-2" />
              Back to Home
            </Link>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#efae4c]/20 rounded-full flex items-center justify-center">
                <RobotOutlined className="text-4xl text-[#efae4c]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🤖 AI Assessment
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect beauty treatment with our advanced
              AI-powered assessment. Get personalized recommendations tailored
              to your unique skin profile and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Our intelligent assessment takes just 5 minutes and provides you
              with scientifically-backed treatment recommendations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Steps
              current={0}
              direction="vertical"
              className="max-w-2xl mx-auto"
              items={assessmentSteps.map((step, index) => ({
                title: (
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="font-semibold text-gray-800">
                      {step.title}
                    </span>
                  </div>
                ),
                description: step.description,
                icon: (
                  <span className="text-[#efae4c] font-bold">{index + 1}</span>
                ),
              }))}
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              >
                Why Choose AI Assessment?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Advanced technology meets expert dermatological knowledge for
                the best results.
              </motion.p>
            </div>

            <Row gutter={[32, 32]}>
              {features.map((feature, index) => (
                <Col xs={24} md={12} lg={6} key={index}>
                  <motion.div variants={fadeUp}>
                    <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Real experiences from people who transformed their skin with
              AI-guided treatments.
            </motion.p>
          </motion.div>

          <Row gutter={[32, 32]}>
            {testimonials.map((testimonial, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div variants={fadeUp}>
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center mb-4">
                      <Rate
                        disabled
                        defaultValue={testimonial.rating}
                        className="mb-2"
                      />
                      <Avatar
                        size={48}
                        className="bg-[#efae4c] text-[#001b3d] font-bold mx-auto mb-3"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#efae4c] font-medium">
                        {testimonial.treatment}
                      </p>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#001b3d] to-[#002b5d]">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover Your Perfect Treatment?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take our 5-minute AI assessment and get personalized treatment
              recommendations from our expert dermatologists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                type="primary"
                size="large"
                onClick={() => (window.location.href = "/#ai-assessment")}
                className="bg-[#efae4c] hover:bg-[#d89b3e] border-none h-12 px-8 font-semibold"
              >
                <QuestionCircleOutlined className="mr-2" />
                Start AI Assessment
              </Button>
              <Button
                size="large"
                onClick={handleBookAppointment}
                className="border-white text-white hover:bg-white hover:text-[#001b3d] h-12 px-8 font-semibold"
              >
                <PhoneOutlined className="mr-2" />
                Book Consultation Instead
              </Button>
            </div>
            <div className="mt-6 text-gray-400">
              ✓ Free assessment • ✓ Expert recommendations • ✓ No commitment
              required
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAssessmentPage;
