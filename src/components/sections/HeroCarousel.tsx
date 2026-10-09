"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronLeft, ChevronRight, Phone, MessageSquare, Award, ArrowRight, CheckCircle2 } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  altText: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Next-Generation High-Rise Safety &",
    highlight: "SS316 Architectural Invisible Grills",
    subtitle: "Safeguard your loved ones with structural-grade stainless steel wire systems and certified safety netting tailored for Bangalore's high-rise towers.",
    image: "/images/main-images/Balcony-Grills.jpg",
    altText: "Manikanta Safety Solutions custom SS316 marine-grade invisible balcony grills overlooking Bangalore skyline",
    ctaText: "Explore Invisible Grills",
    ctaLink: "/services/balcony-invisible-grills",
    badge: "10-Year Warranty • 100% Unobstructed Views",
  },
  {
    id: 2,
    title: "Engineered Child Fall Protection &",
    highlight: "Heavy-Duty Balcony Safety Nets",
    subtitle: "High-density UV-stabilized polymer nets secured with precision concrete anchoring to prevent toddler and pet mishaps without blocking fresh air.",
    image: "/images/hero/balconysafetynet.jpg",
    altText: "Manikanta Safety Solutions heavy-duty childproof balcony fall protection netting in Bangalore apartment",
    ctaText: "Discover Safety Nets",
    ctaLink: "/services/balcony-safety-nets",
    badge: "Tested 140kg+ Point Load Resistance",
  },
  {
    id: 3,
    title: "Humane Bird Control &",
    highlight: "Zero-Visibility Pigeon Netting",
    subtitle: "Stop pigeon nesting, foul droppings, and health hazards across balcony ledges and AC units with long-lasting, weather-resistant translucent mesh.",
    image: "/images/hero/pigeonnet.jpg",
    altText: "Manikanta Safety Solutions translucent anti-pigeon netting installed across residential utility balcony in Bangalore",
    ctaText: "Pigeon Netting Solutions",
    ctaLink: "/services/pigeon-safety-nets",
    badge: "Humane • Zero View Obstruction",
  },
  {
    id: 4,
    title: "Multi-Story Building Protection &",
    highlight: "Duct Shaft Safety Nets",
    subtitle: "Full vertical enclosure of internal ventilation shafts, plumbing chaseways, and open courtyards with certified industrial rigging.",
    image: "/images/main-images/Duct-Area-3.jpg",
    altText: "Manikanta Safety Solutions industrial duct area and building shaft safety net rigging in Bangalore",
    ctaText: "Duct Area Netting",
    ctaLink: "/services/duct-area-safety-nets",
    badge: "Certified Rope-Access Technicians",
  },
  {
    id: 5,
    title: "Effortless Ceiling Hoist Systems &",
    highlight: "Stainless Cloth Drying Hangers",
    subtitle: "Smooth dual-pulley SS304 drying rods that lift heavy laundry up to ceiling level, freeing up 100% of your usable balcony floor space.",
    image: "/images/main-images/cloth-Hangers3.jpg",
    altText: "Manikanta Safety Solutions ceiling-mounted stainless steel pulley cloth drying rack in Bangalore home",
    ctaText: "Explore Cloth Hangers",
    ctaLink: "/services/ceiling-cloth-hangers",
    badge: "Reclaims Full Balcony Space",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIsAutoPlay(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] bg-[#063333] overflow-hidden flex items-center">
      {/* Background Image Carousel with Smooth Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.altText}
            fill
            priority={slide.id === 1}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Enhanced Multi-stop Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#063333] via-[#063333]/85 to-[#0D5C5C]/50 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063333] via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-5 text-left">
            {/* Top Badge */}
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs"
            >
              <Award className="w-4 h-4 text-[#E8972F]" />
              <span>{slide.badge}</span>
            </motion.div>

            {/* Dynamic Main Headline */}
            <motion.div
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {slide.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8972F] via-[#F5B054] to-amber-200">
                  {slide.highlight}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              key={`desc-${slide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>

            {/* Key Value Propositions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-white/90 text-xs sm:text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8972F] shrink-0" />
                <span>Zero-Cost Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8972F] shrink-0" />
                <span>5 to 10 Yr Replacement Warranty</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#E8972F] shrink-0" />
                <span>Same-Day Installation</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Primary Action Button */}
              <Link
                href={slide.ctaLink}
                className="bg-gradient-to-r from-[#0D5C5C] to-[#4A9B9B] hover:from-[#4A9B9B] hover:to-[#0D5C5C] text-white font-extrabold px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_rgba(13,92,92,0.4)] hover:shadow-[0_15px_30px_rgba(13,92,92,0.6)] flex items-center gap-2 group cursor-pointer"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Direct Phone Call Button */}
              <a
                href="tel:+919550318183"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E8972F]" />
                <span>Call +91 95503 18183</span>
              </a>

              {/* WhatsApp Quick Quote */}
              <a
                href="https://wa.me/919550318183?text=Hi%20Manikanta%20Safety%20Solutions%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold p-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:scale-105 flex items-center justify-center"
                aria-label="WhatsApp Inquiry"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
            </motion.div>
          </div>

          {/* Quick Floating Metrics & Trust Indicator (Right Column Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="bg-[#063333]/70 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-white shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#0D5C5C] rounded-2xl text-[#E8972F]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Certified Protection</h3>
                  <p className="text-xs text-slate-300">Bangalore High-Rise Rigging Specialist</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-slate-200">
                <div className="flex justify-between items-center">
                  <span>Completed Installations</span>
                  <span className="font-bold text-[#E8972F] text-sm">3,850+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Satisfaction</span>
                  <span className="font-bold text-[#E8972F] text-sm">4.96 / 5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Coverage Scope</span>
                  <span className="font-bold text-[#E8972F] text-sm">Entire Bangalore</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full text-center bg-[#E8972F] hover:bg-[#F5B054] text-slate-900 font-extrabold text-xs py-3 rounded-xl transition-colors shadow-sm"
              >
                Book Doorstep Measurement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 z-20 flex items-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setIsAutoPlay(false);
              setCurrent(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-8 bg-[#E8972F]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
