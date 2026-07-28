import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getPublicNotifications } from "../../utils/api";

const NotificationPopup = ({ onBookAppointment }) => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLegal, setShowLegal] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer;

    (async () => {
      try {
        const data = await getPublicNotifications();
        const list = Array.isArray(data?.notifications)
          ? data.notifications
          : [];

        if (cancelled || list.length === 0) return;

        setNotifications(list);
        timer = window.setTimeout(() => {
          if (!cancelled) setOpen(true);
        }, 600);
      } catch (error) {
        console.error("Failed to load notifications from DB:", error.message);
      }
    })();

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const close = () => {
    setOpen(false);
  };

  const active = notifications[activeIndex];
  const total = notifications.length;

  if (!active) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close notifications"
            className="absolute inset-0 bg-[#001b3d]/55 backdrop-blur-[2px]"
            onClick={close}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="notification-offer-title"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-[28px] bg-[#fbf8f3] shadow-[0_30px_80px_rgba(0,27,61,0.35)]"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-[#001b3d] via-[#0a2f5c] to-[#123a6b] px-7 pb-8 pt-7 text-white">
              <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#efae4c]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 left-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#efae4c]">
                    Elaria Offers
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    {total > 1
                      ? `${activeIndex + 1} of ${total} announcements`
                      : "Latest announcement"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-white/20 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.28 }}
                  className="relative mt-7"
                >
                  <h2
                    id="notification-offer-title"
                    className="font-[Playfair_Display,serif] text-3xl leading-tight text-white md:text-[2.15rem]"
                  >
                    {active.title}
                  </h2>
                  <p className="mt-3 text-lg font-medium text-[#efae4c]">
                    {active.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="px-7 py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`body-${active.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-[15px] leading-7 text-[#334155]">
                    {active.info}
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowLegal((prev) => !prev)}
                    className="mt-4 text-sm font-semibold text-[#001b3d] underline decoration-[#efae4c]/70 underline-offset-4"
                  >
                    {showLegal
                      ? "Hide disclaimer & terms"
                      : "View disclaimer & terms"}
                  </button>

                  <AnimatePresence>
                    {showLegal && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 rounded-2xl border border-[#001b3d]/08 bg-white px-4 py-4">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#efae4c]">
                              Disclaimer
                            </p>
                            <p className="mt-1.5 text-sm leading-6 text-[#64748b]">
                              {active.disclaimer}
                            </p>
                          </div>
                          <div className="border-t border-[#001b3d]/06 pt-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#efae4c]">
                              Terms & Conditions
                            </p>
                            <p className="mt-1.5 text-sm leading-6 text-[#64748b]">
                              {active.termsAndConditions}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>

              {total > 1 && (
                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={activeIndex === 0}
                    onClick={() => {
                      setShowLegal(false);
                      setActiveIndex((i) => Math.max(0, i - 1));
                    }}
                    className="rounded-full border border-[#001b3d]/15 px-4 py-2 text-sm font-medium text-[#001b3d] transition enabled:hover:bg-[#001b3d]/5 disabled:opacity-35"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    {notifications.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        aria-label={`Show offer ${index + 1}`}
                        onClick={() => {
                          setShowLegal(false);
                          setActiveIndex(index);
                        }}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeIndex
                            ? "w-7 bg-[#efae4c]"
                            : "w-2.5 bg-[#001b3d]/20 hover:bg-[#001b3d]/35"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    disabled={activeIndex === total - 1}
                    onClick={() => {
                      setShowLegal(false);
                      setActiveIndex((i) => Math.min(total - 1, i + 1));
                    }}
                    className="rounded-full border border-[#001b3d]/15 px-4 py-2 text-sm font-medium text-[#001b3d] transition enabled:hover:bg-[#001b3d]/5 disabled:opacity-35"
                  >
                    Next
                  </button>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    close();
                    onBookAppointment?.();
                  }}
                  className="flex-1 rounded-full bg-[#efae4c] px-5 py-3.5 text-sm font-semibold text-[#001b3d] transition hover:bg-[#d89b3e]"
                >
                  Book an appointment
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="flex-1 rounded-full border border-[#001b3d]/15 px-5 py-3.5 text-sm font-semibold text-[#001b3d] transition hover:bg-white"
                >
                  Continue browsing
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPopup;
