import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import CategorySection from "../components/homepage/CategorySection";
import TrustMetrics from "../components/homepage/TrustMetrics";
import TreatmentQuiz from "../components/homepage/TreatmentQuiz";
import CoreServices from "../components/homepage/CoreServices";
import TestimonialCarousel from "../components/homepage/TestimonialCarousel";
import ReviewSystem from "../components/homepage/ReviewSystem";
import GetInTouchSection from "../components/homepage/GetInTouchSection";
import ContactSection from "../components/homepage/ContactSection";
import FAQsSection from "../components/homepage/FAQsSection";
import Footer from "../components/homepage/Footer";

const HomePage = ({ onBookAppointment }) => {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .ant-input::placeholder {
          color: rgba(156, 163, 175, 0.6);
        }
        .ant-carousel .slick-dots li button {
          background: rgba(239, 174, 76, 0.3) !important;
          height: 2px !important;
          width: 40px !important;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #efae4c !important;
        }
        .booking-modal .ant-modal-content {
          border-radius: 20px;
          overflow: hidden;
        }
        .booking-modal .ant-modal-header {
          border-bottom: none;
          padding: 0;
        }
        .booking-modal .ant-modal-body {
          padding: 0;
        }
        .booking-modal .ant-modal-footer {
          border-top: none;
          padding: 0;
        }
      `}</style>
      <HeroSection onBookAppointment={onBookAppointment} />
      <CategorySection />
      <TrustMetrics />
      <TreatmentQuiz onBookAppointment={onBookAppointment} />
      {/* <CoreServices /> */}
      <TestimonialCarousel />
      <ReviewSystem />
      {/* Get in Touch & Contact Sections */}
      <GetInTouchSection />
      <ContactSection />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
