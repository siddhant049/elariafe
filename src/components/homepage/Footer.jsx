import React from "react";
import { Link } from "react-router-dom";
import elariaLogo from "../../assets/images/Elaria Logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                  <img
                    src={elariaLogo}
                    alt="Elaria Esthetique"
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Elaria</h3>
                  <p className="text-sm text-accent-gold font-medium">Esthetique</p>
                </div>
              </div>
              <p className="text-secondary-400 text-sm leading-relaxed mb-6">
                Premium aesthetic treatments for timeless beauty and confidence. Experience the art of transformation.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-secondary-900 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">IN</span>
                </div>
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-secondary-900 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">FB</span>
                </div>
                <div className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-secondary-900 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">IG</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/treatment/skin" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Skin Treatments
                  </Link>
                </li>
                <li>
                  <Link to="/treatment/hair" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Hair Restoration
                  </Link>
                </li>
                <li>
                  <Link to="/treatment/body-contouring" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Body Contouring
                  </Link>
                </li>
                <li>
                  <Link to="/treatment/laser" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Laser Treatments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#treatments-section" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary-400 hover:text-accent-gold transition-colors text-sm">
                    Book Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-secondary-400">
                <p>+91-92665 11393</p>
                <p>elariaesthetique@gmail.com</p>
                <p className="leading-relaxed">
                  1st Floor, Sector 47, Malibu Town
                  <br />
                  Gurgaon, Haryana 122002
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Section */}
        <div className="border-t border-secondary-800 py-8">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Payment & Refund Policy</h4>
            <div className="text-secondary-400 text-sm leading-relaxed space-y-3">
              <p>
                All payments made for treatments, sessions, packages, or services at Elaria Esthetique are non-refundable and non-transferable.
              </p>
              <p>
                In rare and exceptional circumstances where a refund may be considered at the sole discretion of the management, the following terms will apply:
              </p>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>The cost of sessions already completed will be calculated at the standard per-session rate, not the discounted package rate.</li>
                <li>Any applicable taxes, consultation fees, or administrative charges will be non-refundable.</li>
                <li>The remaining balance, if any, will be processed after deducting the full per-session charges.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-500 text-sm">
              © 2025 Elaria Esthetique. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-secondary-500">
              <a href="#privacy" className="hover:text-accent-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-accent-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
