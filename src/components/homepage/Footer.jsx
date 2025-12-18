import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001b3d] text-white py-20 px-6 border-t border-[#efae4c]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-light mb-6 text-[#efae4c] tracking-wide">
              ELARIA ESTHETIQUE
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed tracking-wide">
              Premium aesthetic treatments for timeless beauty and confidence
            </p>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              SERVICES
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Skin Treatments
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Hair Restoration
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Body Contouring
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              COMPANY
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Our Team
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              LEGAL
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs font-light tracking-widest">
              © 2025 ELARIA ESTHETIQUE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6">
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">IN</span>
              </div>
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">FB</span>
              </div>
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
