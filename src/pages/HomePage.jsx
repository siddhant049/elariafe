import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import CentreGallerySection from "../components/homepage/CentreGallerySection";
import CategorySection from "../components/homepage/CategorySection";
import TrustMetrics from "../components/homepage/TrustMetrics";
import HappyClientsSection from "../components/homepage/HappyClientsSection";
import TreatmentQuiz from "../components/homepage/TreatmentQuiz";
import TestimonialCarousel from "../components/homepage/TestimonialCarousel";
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
          background: rgba(184, 146, 95, 0.25) !important;
          height: 3px !important;
          width: 36px !important;
          border-radius: 999px !important;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #b8925f !important;
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
      <CentreGallerySection />
      <TreatmentQuiz onBookAppointment={onBookAppointment} />
      <HappyClientsSection />
      <TestimonialCarousel />
      <GetInTouchSection />
      <ContactSection />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
