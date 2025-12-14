import React from "react";

const SERVICES = [
  {
    id: "hair",
    title: "Hair Treatments",
    desc: "Comprehensive hair care solutions including QR678, Hair Growth Boosters, GFC, Scalp Peel, and specialized exams for optimal hair health.",
    icon: "hair",
    subServices: [
      "QR678",
      "Hair Growth Boosters",
      "GFC",
      "Exams",
      "Scalp Peel",
    ],
  },
  {
    id: "skin",
    title: "Skin Treatments",
    desc: "Advanced solutions for acne scars, xanthelasma, skin infections, melasma, mole surgery, skin tags, and comprehensive skin rejuvenation.",
    icon: "skin",
    subServices: [
      "Acne Scars",
      "Xanthelasma",
      "Skin Infections",
      "Melasma",
      "Mole Surgery",
      "Skin Tag",
      "Laser for Moles",
      "Cautery for Warts",
      "Dermapen Treatment",
      "Stretch Marks",
    ],
  },
  {
    id: "acne-scars",
    title: "Acne & Scars",
    desc: "Specialized treatments for acne and scar reduction including peels, lasers, microneedling, and advanced therapies.",
    icon: "skin",
    subServices: [
      "Acne Peels",
      "Advanced Acne Treatments",
      "Carbon Peels",
      "Chemical Peels",
      "Derma Roller",
      "Fractional Laser",
      "Radiofrequency Microneedling",
      "Acne Cleanup Facial",
      "Laser for Freckles",
      "Microneedling Radiofrequency for Stretch Marks",
    ],
  },
  {
    id: "under-eye",
    title: "Under Eye Services",
    desc: "Targeted treatments to reduce dark circles, rejuvenate delicate under-eye area, and restore youthful appearance.",
    icon: "skin",
    subServices: [
      "Dark Circles Removal",
      "Under Eye Rejuvenation",
      "Under Eye Boosters",
    ],
  },
  {
    id: "pigmentation",
    title: "Pigmentation Solutions",
    desc: "Comprehensive pigmentation treatments including freckles, depigmentation, and advanced facial therapies.",
    icon: "skin",
    subServices: [
      "Freckles",
      "Depigmentation Peels",
      "Cosmelan",
      "Glow Peel",
      "Dermapen 4 for Pigmentation",
      "Vampire Facial",
      "HydraFacial Basic",
      "HydraFacial Elite",
      "Skin Boosters",
    ],
  },
  {
    id: "medifacial",
    title: "MediFacials",
    desc: "Advanced medical-grade facials for deep cleansing, rejuvenation, and radiant skin transformation.",
    icon: "skin",
    subServices: [
      "Diamond Polishing",
      "OxyFacials",
      "Oxyglow",
      "InstaBright Rejuvenation",
      "Powerlift MediFacial",
      "Power Glow Facial",
      "IV Infusions for Glow",
    ],
  },
  {
    id: "anti-aging",
    title: "Anti-Aging",
    desc: "Comprehensive wrinkle reduction and anti-aging treatments to restore youthful skin texture and appearance.",
    icon: "skin",
    subServices: ["Wrinkles Treatment"],
  },
  {
    id: "laser",
    title: "Laser Treatments",
    desc: "Precision laser technology for hair removal, tattoo removal, birthmark removal, and various skin concerns.",
    icon: "laser",
    subServices: [
      "Laser Hair Removal",
      "Laser Hair Reduction for Females",
      "Laser Hair Reduction for Males",
      "Laser Hair Reduction for Unwanted Hair Growth",
      "Laser Hair Reduction for Arms",
      "Laser Hair Reduction for Legs",
      "Unwanted Hair Growth Treatment",
      "Bikini Laser Hair Reduction",
      "Face Laser Hair Reduction",
      "Underarm Laser Hair Reduction",
      "Birthmark Removal",
      "Tattoo Removal",
      "Mole Removal",
      "Wart Removal",
    ],
  },
  {
    id: "body-contouring",
    title: "Body Contouring",
    desc: "Advanced body shaping treatments including weight loss programs, cellulite reduction, and cryolipolysis.",
    icon: "slimming",
    subServices: [
      "Weight Loss Programs",
      "Cellulite Treatment",
      "Cryolipolysis",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="site-inner">
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">
          Tailored treatments to bring out your best self.
        </p>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.id} aria-labelledby={s.id}>
              <div className="service-icon" aria-hidden>
                {s.icon === "skin" && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C9 2 4 4 4 9c0 5 8 11 8 11s8-6 8-11c0-5-5-7-8-7z"
                      stroke="#001b3d"
                      strokeWidth="1.2"
                      fill="white"
                    />
                  </svg>
                )}
                {s.icon === "hair" && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12c0-4 4-8 8-8s8 4 8 8"
                      stroke="#001b3d"
                      strokeWidth="1.2"
                      fill="white"
                    />
                  </svg>
                )}
                {s.icon === "laser" && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#001b3d"
                      strokeWidth="1.2"
                      fill="white"
                    />
                  </svg>
                )}
                {s.icon === "ayurveda" && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2s6 3 6 8-6 12-6 12S6 13 6 10 12 2 12 2z"
                      stroke="#001b3d"
                      strokeWidth="1.2"
                      fill="white"
                    />
                  </svg>
                )}
                {s.icon === "transplant" && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="3"
                      stroke="#001b3d"
                      strokeWidth="1.2"
                      fill="white"
                    />
                  </svg>
                )}
                {s.icon === "laser-hair" && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12h18"
                      stroke="#001b3d"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                {s.icon === "slimming" && (
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2c2 4 6 6 6 10s-4 6-6 10c-2-4-6-6-6-10s4-6 6-10z"
                      stroke="#001b3d"
                      strokeWidth="1.2"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 id={s.id}>{s.title}</h3>
                <p>{s.desc}</p>
                {s.subServices && (
                  <div
                    className="service-sub-list"
                    style={{ marginTop: "12px" }}
                  >
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {s.subServices.slice(0, 5).map((subService, index) => (
                        <li
                          key={index}
                          style={{
                            fontSize: "0.9em",
                            color: "#666",
                            marginBottom: "4px",
                          }}
                        >
                          • {subService}
                        </li>
                      ))}
                      {s.subServices.length > 5 && (
                        <li
                          style={{
                            fontSize: "0.9em",
                            color: "#666",
                            fontStyle: "italic",
                          }}
                        >
                          • +{s.subServices.length - 5} more services
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                <div style={{ marginTop: 8 }}>
                  <a className="btn ghost" href={`#${s.id}`}>
                    Learn more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
