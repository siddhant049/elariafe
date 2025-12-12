import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const navLinks = ["Home", "Treatments", "Specialists", "Stories", "Contact"];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#efae4c] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#efae4c] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Button
            type="primary"
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
          {navLinks.map((item) => (
            <a
              key={`mobile-${item}`}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button
            type="primary"
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
