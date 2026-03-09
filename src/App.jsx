import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Button, Input, Modal, Form, Steps, message } from "antd";
import {
  CheckCircleOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import TreatmentDetailPage from "./pages/treatments/TreatmentDetailPage";
import ServiceDetailPage from "./pages/services/ServiceDetailPage";
import AIAssessmentPage from "./pages/AIAssessmentPage";
import HomePage from "./pages/HomePage";
import receptionImage from "./assets/images/Center/Reception .png";

// ============================================================================
// BOOKING MODAL COMPONENT
// ============================================================================
const BookingModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    category: "",
    treatment: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [form] = Form.useForm();
  const [validationStatus, setValidationStatus] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Booking categories and their treatments
  const bookingCategories = [
    {
      value: "hair",
      label: "Hair",
      description: "Hair fall, thinning, dandruff & scalp concerns",
      treatments: [
        "QR678",
        "Hair Growth Boosters",
        "GFC",
        "Exames",
        "Scalp Peel",
      ],
    },
    {
      value: "skin",
      label: "Skin",
      description:
        "Pigmentation, infections, moles, tags & overall skin health",
      treatments: [
        "Acne scars",
        "Xanthelasma",
        "Skin infections",
        "Melasma",
        "Mole Surgery",
        "Skin Tag",
        "Laser for Moles",
        "Cautery for warts",
        "Dermapen Treatment",
        "Stretch Marks",
      ],
    },
    {
      value: "acne-scars",
      label: "Acne & Scars",
      description: "Active acne, old marks and scar correction",
      treatments: [
        "Acne Peels",
        "Advanced Acne Treatments",
        "Carbon Peels",
        "Chemical Peels",
        "Derma roller",
        "Fractional Laser",
        "Radiofrequency Microneedling",
        "Acne Cleanup Facial",
        "Laser for Freckles",
        "Microneedling Radiofrequency for stretch Marks",
      ],
    },
    {
      value: "under-eye",
      label: "Under Eyes",
      description: "Dark circles, hollowness and tired-looking eyes",
      treatments: [
        "Dark Circles Removal",
        "Under Eye Rejuvenation",
        "Under Eye Boosters",
      ],
    },
    {
      value: "pigmentation",
      label: "Pigmentation",
      description: "Uneven tone, spots, freckles & melasma",
      treatments: [
        "Freckles",
        "Depigmentation Peels",
        "Cosmelan",
        "Glow Peel",
        "Dermapen 4 for Pigmentation",
        "PRP Vampire Facial",
        "Hydrafacial Basic",
        "HydraFacial Elite",
        "Skin Boosters",
      ],
    },
    {
      value: "medifacial",
      label: "MediFacials",
      description: "Glow, hydration and instant event-ready skin",
      treatments: [
        "Diamond Polishing",
        "OxyFacials",
        "Oxyglow",
        "InstaBright Rejuvenation",
        "Powerlift Medifacial",
        "Power Glow Facial",
        "IV Infusions for glow",
      ],
    },
    {
      value: "anti-aging",
      label: "Anti‑Aging",
      description: "Lines, wrinkles, sagging and skin tightening",
      treatments: [
        "Wrinkles Treatment",
        "Anti-aging Peels",
        "Collagen Boosters",
        "Skin Tightening",
      ],
    },
    {
      value: "laser",
      label: "Laser",
      description: "Laser hair reduction & other laser based treatments",
      treatments: [
        "Laser Hair Removal",
        "Laser Hair Reduction for Females",
        "Laser Hair Reduction for Males",
        "Birthmark removal",
        "Tattoo Removal",
        "Mole removal",
        "Wart Removal",
      ],
    },
    {
      value: "body-contouring",
      label: "Body Contouring",
      description: "Shaping, inch loss and stubborn fat pockets",
      treatments: [
        "Weight Loss Treatments",
        "Cellulite Treatment",
        "Cryolipolysis",
        "Body Shaping",
        "Fat Reduction",
      ],
    },
  ];

  const steps = [
    { title: "Category", description: "Choose concern area" },
    { title: "Treatment", description: "Select treatment" },
    { title: "Details", description: "Share contact details" },
  ];

  const handleCategorySelect = (category) => {
    setBookingData({ ...bookingData, category, treatment: "" });
    setCurrentStep(1);
  };

  const handleTreatmentSelect = (treatment) => {
    setBookingData({ ...bookingData, treatment });
    setCurrentStep(2);
  };

  const handleFormSubmit = (values) => {
    const finalData = { ...bookingData, ...values };
    setBookingData(finalData);

    // Here you would typically send the booking data to your backend
    message.success({
      content:
        "Thank you! Our team will reach out shortly to confirm your consultation.",
      duration: 5,
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
    });

    onClose();
    setCurrentStep(0);
    setBookingData({
      category: "",
      treatment: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
    });
    setValidationStatus({ name: "", phone: "", email: "" });
    form.resetFields();
  };

  // Enhanced validation functions
  const validateName = (value) => {
    if (!value) {
      setValidationStatus((prev) => ({ ...prev, name: "error" }));
      return false;
    }
    if (value.length < 2) {
      setValidationStatus((prev) => ({ ...prev, name: "error" }));
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setValidationStatus((prev) => ({ ...prev, name: "error" }));
      return false;
    }
    setValidationStatus((prev) => ({ ...prev, name: "success" }));
    return true;
  };

  const validatePhone = (value) => {
    if (!value) {
      setValidationStatus((prev) => ({ ...prev, phone: "error" }));
      return false;
    }
    // Remove any spaces, dashes, or parentheses
    const cleanPhone = value.replace(/[\s\-\(\)]/g, "");
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
      setValidationStatus((prev) => ({ ...prev, phone: "error" }));
      return false;
    }
    setValidationStatus((prev) => ({ ...prev, phone: "success" }));
    return true;
  };

  const validateEmail = (value) => {
    if (!value) {
      setValidationStatus((prev) => ({ ...prev, email: "error" }));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setValidationStatus((prev) => ({ ...prev, email: "error" }));
      return false;
    }
    setValidationStatus((prev) => ({ ...prev, email: "success" }));
    return true;
  };

  const handleFieldChange = (field, value) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));

    // Real-time validation
    switch (field) {
      case "name": {
        validateName(value);
        break;
      }
      case "phone": {
        validatePhone(value);
        break;
      }
      case "email": {
        validateEmail(value);
        break;
      }
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      bookingData.name &&
      bookingData.phone &&
      bookingData.email &&
      validationStatus.name === "success" &&
      validationStatus.phone === "success" &&
      validationStatus.email === "success"
    );
  };

  return (
    <>
      {/* Trigger Button - Can be placed anywhere */}
      <div style={{ display: "none" }} id="booking-trigger">
        <Button
          type="primary"
          size="large"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-8 py-6 text-lg font-semibold shadow-2xl"
        >
          <CalendarOutlined className="mr-2" />
          Book Appointment
        </Button>
      </div>

      <Modal
        title={
          <div className="text-center py-4">
            <h2 className="text-2xl font-light text-[#001b3d] tracking-wide">
              Book Your Transformation
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Schedule your personalized beauty journey
            </p>
          </div>
        }
        open={isOpen}
        onCancel={() => {
          onClose();
          setCurrentStep(0);
          form.resetFields();
        }}
        footer={null}
        width={1200}
        className="booking-modal"
        centered
      >
        <div className="py-2">
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
            <div className="relative hidden overflow-hidden rounded-[28px] bg-[#f7f1ea] lg:block">
              <img
                src={receptionImage}
                alt="Elaria reception"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081425]/84 via-[#0d1d33]/34 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-[24px] border border-white/12 bg-[linear-gradient(135deg,rgba(7,16,26,0.68),rgba(7,16,26,0.38))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#f3dfbc] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                    Elaria Space
                  </p>
                  <h3 className="mt-3 text-2xl font-medium leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                    A warm welcome before your consultation begins.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                    Experience a calm, premium environment designed to make every
                    visit feel personal and comfortable.
                  </p>
                </div>
              </div>
            </div>

            <div>
              {/* Enhanced Progress Steps */}
              <div className="mb-8">
                <Steps
                  current={currentStep}
                  items={steps.map((step, index) => ({
                    ...step,
                    status:
                      index < currentStep
                        ? "finish"
                        : index === currentStep
                        ? "process"
                        : "wait",
                    icon:
                      index < currentStep ? <CheckCircleOutlined /> : undefined,
                  }))}
                  className="mb-4"
                />

                {/* Step Progress Bar */}
                <div className="relative">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#efae4c] to-[#d89b3e] rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((currentStep + 1) / steps.length) * 100}%`,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    {steps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className={`w-2 h-2 rounded-full mb-1 ${
                            index <= currentStep ? "bg-[#efae4c]" : "bg-gray-300"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            index <= currentStep
                              ? "text-[#efae4c] font-medium"
                              : "text-gray-400"
                          }`}
                        >
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 1: Category Selection */}
              {currentStep === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-light text-[#001b3d] mb-6 text-center">
                    Choose Your Category
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bookingCategories.map((category) => {
                      const isSelected = bookingData.category === category.value;
                      return (
                        <motion.div
                          key={category.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleCategorySelect(category.value)}
                          className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-lg relative ${
                            isSelected
                              ? "border-[#efae4c] bg-[#efae4c]/5 shadow-lg"
                          : "border-gray-200 hover:border-[#efae4c]"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4
                          className={`font-semibold transition-colors ${
                            isSelected ? "text-[#efae4c]" : "text-[#001b3d]"
                          }`}
                        >
                          {category.label}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {category.description}
                      </p>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 text-xs text-[#efae4c] font-medium text-right"
                        >
                          Selected
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Treatment Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-light text-[#001b3d] mb-2">
                  Select Treatment
                </h3>
                <p className="text-gray-600 text-sm">
                  Based on your chosen category, pick the treatment you're most
                  interested in.
                </p>
              </div>

              {bookingData.category ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-6"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Treatments
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {bookingCategories
                      .find((c) => c.value === bookingData.category)
                      ?.treatments.map((treatment) => {
                        const isSelected = bookingData.treatment === treatment;
                        return (
                          <motion.div
                            key={treatment}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              onClick={() => handleTreatmentSelect(treatment)}
                              className={`w-full text-left transition-all duration-200 ${
                                isSelected
                                  ? "bg-[#efae4c]/10 border-[#efae4c] text-[#001b3d] shadow-sm"
                                  : "border-gray-200 hover:border-[#efae4c] hover:bg-[#efae4c]/5"
                              } rounded-lg px-3 py-2 text-sm`}
                              size="middle"
                            >
                              <span className="block truncate">
                                {treatment}
                              </span>
                            </Button>
                          </motion.div>
                        );
                      })}
                  </div>
                </motion.div>
              ) : (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-700">
                  Please select a category first.
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setCurrentStep(0)}
                  className="flex-1"
                  size="large"
                >
                  Back
                </Button>
                <Button
                  type="primary"
                  disabled={!bookingData.treatment}
                  onClick={() => bookingData.treatment && setCurrentStep(2)}
                  className={`flex-1 border-none ${
                    bookingData.treatment
                      ? "bg-[#efae4c] hover:bg-[#d89b3e]"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  size="large"
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-light text-[#001b3d] mb-2">
                  Your Information
                </h3>
                <p className="text-gray-600 text-sm">
                  We'll use this to confirm your appointment
                </p>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleFormSubmit}
                className="space-y-4"
              >
                <Form.Item
                  name="name"
                  label="Full Name"
                  validateStatus={validationStatus.name}
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    size="large"
                    placeholder="Enter your full name"
                    onChange={(e) => handleFieldChange("name", e.target.value)}
                    className={
                      validationStatus.name === "success"
                        ? "border-green-500"
                        : validationStatus.name === "error"
                        ? "border-red-500"
                        : ""
                    }
                  />
                </Form.Item>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    validateStatus={validationStatus.phone}
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <Input
                      prefix={<PhoneOutlined />}
                      size="large"
                      placeholder="+91 XXXXX XXXXX"
                      onChange={(e) =>
                        handleFieldChange("phone", e.target.value)
                      }
                      className={
                        validationStatus.phone === "success"
                          ? "border-green-500"
                          : validationStatus.phone === "error"
                          ? "border-red-500"
                          : ""
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email Address"
                    validateStatus={validationStatus.email}
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      size="large"
                      placeholder="your@email.com"
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value)
                      }
                      className={
                        validationStatus.email === "success"
                          ? "border-green-500"
                          : validationStatus.email === "error"
                          ? "border-red-500"
                          : ""
                      }
                    />
                  </Form.Item>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1"
                    size="large"
                  >
                    Back
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isFormValid()}
                    className={`flex-1 border-none ${
                      isFormValid()
                        ? "bg-[#efae4c] hover:bg-[#d89b3e]"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    size="large"
                  >
                    {isFormValid() ? (
                      <span className="flex items-center gap-2">
                        <CheckCircleOutlined />
                        Submit Request
                      </span>
                    ) : (
                      "Complete Form to Submit"
                    )}
                  </Button>
                </div>
              </Form>
            </motion.div>
          )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

// ============================================================================
// SCROLL TO TOP COMPONENT
// ============================================================================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBookAppointment = () => {
    setBookingModalOpen(true);
  };

  return (
    <>
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <ScrollToTop />

      <Navbar onBookAppointment={handleBookAppointment} />

      <Routes>
        <Route
          path="/"
          element={<HomePage onBookAppointment={handleBookAppointment} />}
        />
        <Route
          path="/treatment/:treatmentId"
          element={
            <TreatmentDetailPage onBookAppointment={handleBookAppointment} />
          }
        />
        <Route
          path="/service/:serviceId"
          element={
            <ServiceDetailPage onBookAppointment={handleBookAppointment} />
          }
        />
        <Route
          path="/ai-assessment"
          element={
            <AIAssessmentPage onBookAppointment={handleBookAppointment} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
