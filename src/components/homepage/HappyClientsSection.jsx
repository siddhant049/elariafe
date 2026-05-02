import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import happyClientOne from "../../assets/videos/Happy clients/Happyclients1.mp4";
import BF1 from "../../assets/images/beforeAfter/BF1.png";
import BF2 from "../../assets/images/beforeAfter/BF2.png";
import BF4 from "../../assets/images/beforeAfter/BF4.png";
import BF5 from "../../assets/images/beforeAfter/BF5.png";
import BF6 from "../../assets/images/beforeAfter/BF6.png";
import BF8 from "../../assets/images/beforeAfter/BF8.png";
import BF9 from "../../assets/images/beforeAfter/BF9.png";

const videos = [
  {
    videoSrc: happyClientOne,
    title: "Real client moments",
    description: "Visible confidence and happy post-treatment reactions.",
  },
  {
    embedUrl:
      "https://www.youtube-nocookie.com/embed/BN5ZYRzZxyM?autoplay=1&mute=1&loop=1&playlist=BN5ZYRzZxyM&playsinline=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3",
    title: "Trusted client experiences",
    description: "A closer look at real results and genuine satisfaction.",
  },
  {
    embedUrl:
      "https://www.youtube-nocookie.com/embed/LTf-_XhQvMM?autoplay=1&mute=1&loop=1&playlist=LTf-_XhQvMM&playsinline=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3",
    title: "Happy client highlights",
    description: "More real smiles, candid reactions, and moments of confidence.",
  },
  {
    embedUrl:
      "https://www.youtube-nocookie.com/embed/7otbXQI7UDs?autoplay=1&mute=1&loop=1&playlist=7otbXQI7UDs&playsinline=1&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&iv_load_policy=3",
    title: "Client reactions",
    description: "Another happy client moment captured during the Elaria experience.",
  },
];

const beforeAfterCases = [
  {
    title: "Before and after case 1",
    image: BF1,
  },
  {
    title: "Before and after case 2",
    image: BF2,
  },
  {
    title: "Before and after case 3",
    image: BF4,
  },
  {
    title: "Before and after case 4",
    image: BF5,
  },
  {
    title: "Before and after case 5",
    image: BF6,
  },
  {
    title: "Before and after case 6",
    image: BF8,
  },
  {
    title: "Before and after case 7",
    image: BF9,
  },
];

const BEFORE_AFTER_VISIBLE_COUNT = 4;
const BEFORE_AFTER_GAP = 24;
const BEFORE_AFTER_AUTO_SCROLL_MS = 3200;

const HappyClientsSection = () => {
  const [beforeAfterStartIndex, setBeforeAfterStartIndex] = useState(
    BEFORE_AFTER_VISIBLE_COUNT
  );
  const [beforeAfterSlideWidth, setBeforeAfterSlideWidth] = useState(0);
  const [beforeAfterTransitionEnabled, setBeforeAfterTransitionEnabled] =
    useState(true);
  const beforeAfterViewportRef = useRef(null);
  const beforeAfterResetTimeoutRef = useRef(null);
  const carouselBeforeAfterCases = useMemo(
    () => [
      ...beforeAfterCases.slice(-BEFORE_AFTER_VISIBLE_COUNT),
      ...beforeAfterCases,
      ...beforeAfterCases.slice(0, BEFORE_AFTER_VISIBLE_COUNT),
    ],
    []
  );

  useEffect(() => {
    const updateBeforeAfterSlideWidth = () => {
      if (!beforeAfterViewportRef.current) {
        return;
      }

      const viewportWidth = beforeAfterViewportRef.current.offsetWidth;
      const nextSlideWidth =
        (viewportWidth - BEFORE_AFTER_GAP * (BEFORE_AFTER_VISIBLE_COUNT - 1)) /
        BEFORE_AFTER_VISIBLE_COUNT;

      setBeforeAfterSlideWidth(nextSlideWidth);
    };

    updateBeforeAfterSlideWidth();
    window.addEventListener("resize", updateBeforeAfterSlideWidth);

    return () => {
      window.removeEventListener("resize", updateBeforeAfterSlideWidth);
    };
  }, []);

  useEffect(() => {
    const autoScrollTimer = window.setInterval(() => {
      setBeforeAfterStartIndex((currentIndex) => currentIndex + 1);
    }, BEFORE_AFTER_AUTO_SCROLL_MS);

    return () => window.clearInterval(autoScrollTimer);
  }, []);

  useEffect(() => {
    window.clearTimeout(beforeAfterResetTimeoutRef.current);

    if (
      beforeAfterStartIndex >=
      beforeAfterCases.length + BEFORE_AFTER_VISIBLE_COUNT
    ) {
      beforeAfterResetTimeoutRef.current = window.setTimeout(() => {
        setBeforeAfterTransitionEnabled(false);
        setBeforeAfterStartIndex(BEFORE_AFTER_VISIBLE_COUNT);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setBeforeAfterTransitionEnabled(true);
          });
        });
      }, 700);
    } else if (beforeAfterStartIndex < BEFORE_AFTER_VISIBLE_COUNT) {
      beforeAfterResetTimeoutRef.current = window.setTimeout(() => {
        setBeforeAfterTransitionEnabled(false);
        setBeforeAfterStartIndex(
          beforeAfterCases.length + beforeAfterStartIndex
        );
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setBeforeAfterTransitionEnabled(true);
          });
        });
      }, 700);
    }

    return () => window.clearTimeout(beforeAfterResetTimeoutRef.current);
  }, [beforeAfterStartIndex]);

  const showPreviousBeforeAfter = () => {
    setBeforeAfterStartIndex((currentIndex) => currentIndex - 1);
  };

  const showNextBeforeAfter = () => {
    setBeforeAfterStartIndex((currentIndex) => currentIndex + 1);
  };

  return (
    <section className="relative overflow-hidden bg-[#10233f] px-6 py-24">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-[#d6b384]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6b384]" />
            Happy Clients
          </div>
          <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-white md:text-4xl">
            Happy client stories and moments of confidence.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            A quick look at genuine moments, visible joy, and the confidence
            our treatments are designed to bring out.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-[96rem] gap-8 md:grid-cols-2 xl:grid-cols-4 xl:justify-center xl:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="w-full max-w-[430px] justify-self-center overflow-hidden rounded-[30px] border border-[#e7dccd] bg-white p-3 shadow-[0_18px_44px_rgba(17,24,39,0.08)]"
            >
              <div className="relative overflow-hidden rounded-[22px] bg-[#0f2037]">
                {video.videoSrc ? (
                  <video
                    src={video.videoSrc}
                    className="aspect-[10/12] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[142%] w-[470%] -translate-x-1/2 -translate-y-1/2 border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
                {!video.videoSrc ? (
                  <div className="aspect-[10/12] w-full" />
                ) : null}
              </div>

              <div className="px-3 pb-3 pt-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a7b52]">
                  Client Story
                </p>
                <h3 className="mt-3 text-2xl font-medium text-slate-900">
                  {video.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-16 max-w-[104rem]"
        >
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-[#d6b384]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6b384]" />
              Before & Afters
            </div>
            <h3 className="mt-5 text-3xl font-light tracking-[-0.03em] text-white md:text-4xl">
              Before and after transformations.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
              A curated look at real treatment progress and visible refinement
              captured through original client before and after results.
            </p>
          </div>

          <div className="relative px-4">
            <button
              type="button"
              onClick={showPreviousBeforeAfter}
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#10233f]/85 text-lg text-white transition-all duration-200 hover:border-[#d6b384] hover:bg-[#10233f]"
              aria-label="Show previous before and after photos"
            >
              ←
            </button>

            <div ref={beforeAfterViewportRef} className="overflow-hidden">
              <div
                className="flex gap-6"
                style={{
                  transform: `translateX(-${
                    beforeAfterStartIndex * (beforeAfterSlideWidth + BEFORE_AFTER_GAP)
                  }px)`,
                  transition: beforeAfterTransitionEnabled
                    ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)"
                    : "none",
                }}
              >
                {carouselBeforeAfterCases.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="shrink-0 overflow-hidden rounded-[30px] border border-[#e7dccd] bg-white shadow-[0_18px_44px_rgba(17,24,39,0.08)]"
                    style={{
                      width: beforeAfterSlideWidth
                        ? `${beforeAfterSlideWidth}px`
                        : `calc((100% - ${BEFORE_AFTER_GAP * 3}px) / 4)`,
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="aspect-[1/1] w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={showNextBeforeAfter}
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#10233f]/85 text-lg text-white transition-all duration-200 hover:border-[#d6b384] hover:bg-[#10233f]"
              aria-label="Show next before and after photos"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HappyClientsSection;
