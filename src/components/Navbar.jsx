import React, { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const navLinks = ["Home", "Treatments", "Specialists", "Stories", "Contact"];

const treatments = [
  { key: "hair", label: "Hair Treatments", path: "/treatment/hair" },
  { key: "skin", label: "Skin Treatments", path: "/treatment/skin" },
  { key: "acne-scars", label: "Acne & Scars", path: "/treatment/acne-scars" },
  {
    key: "under-eye",
    label: "Under Eye Services",
    path: "/treatment/under-eye",
  },
  {
    key: "pigmentation",
    label: "Pigmentation Solutions",
    path: "/treatment/pigmentation",
  },
  { key: "medifacial", label: "MediFacials", path: "/treatment/medifacial" },
  { key: "anti-aging", label: "Anti-Aging", path: "/treatment/anti-aging" },
  { key: "laser", label: "Laser Treatments", path: "/treatment/laser" },
  {
    key: "body-contouring",
    label: "Body Contouring",
    path: "/treatment/body-contouring",
  },
];

const Navbar = ({ onBookAppointment }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Treatments dropdown rendered as a compact two-column grid
  const treatmentsMenuItems = [
    {
      key: "treatments-grid",
      label: (
        <div className="px-4 py-4 bg-white">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {treatments.map((treatment) => (
              <button
                key={treatment.key}
                type="button"
                onClick={() => navigate(treatment.path)}
                className="flex items-center justify-between text-left text-[0.95rem] text-[#001b3d] hover:text-[#d89b3e] transition-colors py-1"
              >
                <span className="truncate">{treatment.label}</span>
                <RightOutlined className="ml-2 text-[10px] text-[#efae4c] opacity-70" />
              </button>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const handleNavClick = (item) => {
    if (item === "Home") {
      navigate("/");
      // Scroll to top
      window.scrollTo(0, 0);
    } else if (item !== "Treatments") {
      // For other sections, scroll to the section on the home page
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full z-50 bg-[#001b3d]/95 backdrop-blur-md border-b border-[#efae4c]/20"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Name / Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-[#efae4c] rounded-lg flex items-center justify-center text-white text-xl">
            ✨
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Elaria<span className="text-[#efae4c]">Esthetique</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">
          {navLinks.map((item) => {
            if (item === "Treatments") {
              return (
                <Dropdown
                  key={item}
                  menu={{
                    items: treatmentsMenuItems,
                    className: "custom-treatments-dropdown",
                  }}
                  trigger={["hover"]}
                  placement="bottomLeft"
                  overlayClassName="!bg-[#001b3d]/95 !backdrop-blur-sm !border !border-white/10 !rounded-lg !shadow-lg"
                  overlayStyle={{
                    minWidth: "380px",
                    padding: 0,
                  }}
                >
                  <span className="hover:text-[#efae4c] transition-colors relative group cursor-pointer">
                    {item} <DownOutlined className="text-xs ml-1" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#efae4c] transition-all group-hover:w-full"></span>
                  </span>
                </Dropdown>
              );
            }
            return (
              <a
                key={item}
                onClick={() => handleNavClick(item)}
                className="hover:text-[#efae4c] transition-colors relative group cursor-pointer"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#efae4c] transition-all group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button
            type="primary"
            onClick={onBookAppointment}
            className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-6 h-10 font-semibold"
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-2xl text-gray-300 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuOutlined />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        closeIcon={<CloseOutlined />}
      >
        <div className="flex flex-col gap-6 text-lg font-medium text-gray-200">
          {navLinks.map((item) => {
            if (item === "Treatments") {
              return (
                <div key={`mobile-${item}`} className="flex flex-col gap-3">
                  <div className="font-semibold text-[#efae4c]">{item}</div>
                  <div className="ml-4 flex flex-col gap-2">
                    {treatments.map((treatment) => (
                      <Link
                        key={`mobile-${treatment.key}`}
                        to={treatment.path}
                        className="text-gray-300 hover:text-white transition-colors duration-200 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {treatment.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={`mobile-${item}`}
                onClick={() => {
                  handleNavClick(item);
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-[#efae4c] transition-colors"
              >
                {item}
              </a>
            );
          })}
          <Button
            type="primary"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookAppointment();
            }}
            className="bg-[#efae4c] w-full h-12 rounded-lg mt-4"
          >
            Book Consultation
          </Button>
        </div>
      </Drawer>
    </motion.nav>
  );
};

export default Navbar;
