import React, { useState } from "react";
import { Button, Drawer, Dropdown } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  DownOutlined,
  RightOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import elariaLogo from "../assets/images/Elaria Logo.png";

const categoryLinks = [
  { key: "hair", label: "Hair Treatments", path: "/treatment/hair" },
  { key: "skin", label: "Skin Treatments", path: "/treatment/skin" },
  { key: "acne-scars", label: "Acne & Scars", path: "/treatment/acne-scars" },
  { key: "under-eye", label: "Under Eye Services", path: "/treatment/under-eye" },
  { key: "pigmentation", label: "Pigmentation", path: "/treatment/pigmentation" },
  { key: "medifacial", label: "MediFacials", path: "/treatment/medifacial" },
  { key: "anti-aging", label: "Anti-Aging", path: "/treatment/anti-aging" },
  { key: "laser", label: "Laser Treatments", path: "/treatment/laser" },
  { key: "body-contouring", label: "Body Contouring", path: "/treatment/body-contouring" },
];

const mainCategoryLinks = categoryLinks.filter((category) =>
  ["hair", "laser", "body-contouring"].includes(category.key)
);

const skinCategoryLinks = categoryLinks.filter((category) =>
  ["skin", "acne-scars", "under-eye", "pigmentation", "medifacial", "anti-aging"].includes(
    category.key
  )
);

const navVariants = {
  hidden: { y: -16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

const Navbar = ({ onBookAppointment }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 120);
  };

  const skinMenuItems = [
    {
      key: "menu-grid",
      label: (
        <div className="w-[420px] rounded-[30px] border border-[#e9dfd2] bg-white p-5 shadow-[0_30px_80px_rgba(17,24,39,0.12)]">
          <div className="mb-5 rounded-[24px] bg-[#f7f1ea] px-5 py-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
              Skin Categories
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Explore skin-focused concerns, facials and anti-aging solutions.
            </p>
          </div>
          <div className="rounded-[24px] border border-[#ece1d4] bg-[#fffdfa] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a7b52]">
                  Skin
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Browse advanced aesthetic care for skin-related concerns.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate("/treatment/skin")}
                className="rounded-full border border-[#e7d9c7] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-700 transition-colors hover:border-[#d8c1a0] hover:text-[#9a7b52]"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {skinCategoryLinks
                .filter((category) => category.key !== "skin")
                .map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => navigate(category.path)}
                  className="rounded-2xl px-3 py-3 text-left text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#f8f5f0] hover:text-[#9a7b52]"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="bg-[#10233f] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] uppercase tracking-[0.28em] lg:px-8">
          <div className="flex items-center gap-2 text-white/80">
            <PhoneOutlined />
            <span>Call us: +91-92665 11393</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/70">
            <MailOutlined />
            <span>care@elariaesthetique.com</span>
          </div>
        </div>
      </div>

      <motion.nav className="border-b border-[#eadfce] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
          >
            <img
              src={elariaLogo}
              alt="Elaria Esthetique"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-lg font-semibold tracking-[0.08em] text-slate-900">
                ELARIA
              </p>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
                Esthetique
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-10 lg:flex">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => navigate("/treatment/hair")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
            >
              Hair
            </button>

            <Dropdown
              menu={{ items: skinMenuItems }}
              trigger={["hover"]}
              placement="bottomCenter"
              overlayClassName="!bg-transparent !shadow-none"
            >
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
              >
                Skin
                <DownOutlined className="text-xs" />
              </button>
            </Dropdown>

            <button
              type="button"
              onClick={() => navigate("/treatment/laser")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
            >
              Laser
            </button>

            <button
              type="button"
              onClick={() => navigate("/treatment/body-contouring")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
            >
              Body Contouring
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-[#9a7b52]"
            >
              Contact
            </button>
          </div>

          <div className="hidden lg:block">
            <Button
              type="primary"
              onClick={onBookAppointment}
              className="h-11 rounded-full border-none bg-[#b8925f] px-6 font-medium text-white shadow-none hover:!bg-[#a78454]"
            >
              Book Consultation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="rounded-full border border-[#eadfce] p-2 text-slate-700 lg:hidden"
          >
            <MenuOutlined />
          </button>
        </div>
      </motion.nav>

      <Drawer
        placement="right"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        closeIcon={<CloseOutlined />}
        title={
          <div className="flex items-center gap-3">
            <img
              src={elariaLogo}
              alt="Elaria Esthetique"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-base font-semibold tracking-[0.08em] text-slate-900">
                ELARIA
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a7b52]">
                Esthetique
              </p>
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl bg-[#f7f1ea] p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a7b52]">
              Contact
            </p>
            <p className="mt-2 text-sm text-slate-700">+91-92665 11393</p>
            <p className="mt-1 text-sm text-slate-600">care@elariaesthetique.com</p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection("home");
              }}
              className="text-left text-base font-medium text-slate-800"
            >
              Home
            </button>

            <div>
              <p className="mb-3 text-base font-medium text-slate-800">Categories</p>
              <div className="grid gap-2">
                {mainCategoryLinks.map((category) => (
                  <Link
                    key={category.key}
                    to={category.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl bg-[#fcfaf7] px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#f8f5f0] hover:text-[#9a7b52]"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-3xl border border-[#eadfce] bg-[#fcfaf7] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-800">Skin</p>
                  <Link
                    to="/treatment/skin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[11px] uppercase tracking-[0.24em] text-[#9a7b52]"
                  >
                    View All
                  </Link>
                </div>

                <div className="grid gap-2">
                  {skinCategoryLinks
                    .filter((category) => category.key !== "skin")
                    .map((category) => (
                      <Link
                        key={category.key}
                        to={category.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="rounded-2xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-white hover:text-[#9a7b52]"
                      >
                        {category.label}
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection("contact");
              }}
              className="text-left text-base font-medium text-slate-800"
            >
              Contact
            </button>
          </div>

          <Button
            type="primary"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onBookAppointment();
            }}
            className="h-12 rounded-full border-none bg-[#b8925f] font-medium text-white hover:!bg-[#a78454]"
          >
            Book Consultation
          </Button>
        </div>
      </Drawer>
    </motion.header>
  );
};

export default Navbar;
