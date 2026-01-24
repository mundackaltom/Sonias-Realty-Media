"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import SearchModal from "../../components/SearchModal";
import InteractiveMap from "../../components/InteractiveMap";
import BackToTopButton from "../../components/BackToTopButton";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // Honeypot field - should remain empty
  });
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  // Timeout refs for delayed closing
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const projectsTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300);
  };

  const handleProjectsMouseEnter = () => {
    if (projectsTimeoutRef.current) {
      clearTimeout(projectsTimeoutRef.current);
    }
    setProjectsDropdownOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 300);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field as user edits
    setFieldErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validateForm = () => {
    const errors: typeof fieldErrors = {};

    // Name validation - must be at least 2 characters
    if (!formData.name.trim()) {
      errors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name must be less than 100 characters.";
    }

    // Email validation - stricter regex
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    } else if (formData.email.length > 254) {
      errors.email = "Email address is too long.";
    }

    // Phone validation - Indian numbers (10 digits) or international
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      errors.phone = "Please enter your phone number.";
    } else if (phoneDigits.length < 10) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    } else if (phoneDigits.length > 15) {
      errors.phone = "Phone number is too long.";
    }

    // Message validation - minimum and maximum length
    if (!formData.message.trim()) {
      errors.message = "Please enter a short message about your requirements.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    } else if (formData.message.trim().length > 2000) {
      errors.message = "Message must be less than 2000 characters.";
    }

    setFieldErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Honeypot check - if filled, it's likely a bot
    if (formData.website) {
      // Silently pretend success to not alert the bot
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent.",
      });
      setFormData({ name: "", email: "", phone: "", message: "", website: "" });
      return;
    }

    // Client-side validation
    const isValid = validateForm();
    if (!isValid) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        type: "success",
        message: `Thank you ${formData.name}! Your message has been sent.`,
      });
      setFormData({ name: "", email: "", phone: "", message: "", website: "" });
      setFieldErrors({});
    } catch (error) {
      console.error("Contact form error", error);
      setStatus({
        type: "error",
        message:
          "Sorry, something went wrong while sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F4F0EC] px-4 py-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#CDA274] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Sonia's Realty Media Logo"
                  width={360}
                  height={360}
                  className="object-contain rounded-full scale-125"
                />
              </div>
              <h1 className="font-dm-serif text-sm sm:text-base md:text-lg lg:text-xl text-[#292F36] font-bold whitespace-nowrap">
                SONIA'S REALTY MEDIA
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition"
              >
                About us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1 group"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    } group-hover:text-[#C76904]`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      href="/services/property-search"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Property Search
                    </Link>
                    <Link
                      href="/services/financial-planning"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Financial Planning
                    </Link>
                    <Link
                      href="/services/real-estate-investment"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Real Estate Investment
                    </Link>
                    <Link
                      href="/services/asset-management"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Asset Management
                    </Link>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleProjectsMouseEnter}
                onMouseLeave={handleProjectsMouseLeave}
              >
                <button
                  className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition flex items-center gap-1 group"
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                >
                  Projects
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      projectsDropdownOpen ? "rotate-180" : ""
                    } group-hover:text-[#C76904]`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {projectsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      href="/projects"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      All Projects
                    </Link>
                    <Link
                      href="/projects"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Upcoming Projects
                    </Link>
                    <Link
                      href="/projects"
                      className="block px-4 py-2 font-jost text-sm text-[#292F36] hover:bg-[#F4F0EC] hover:text-[#C76904] transition"
                    >
                      Completed Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="font-jost text-base text-[#C76904] font-medium hover:text-[#292F36] transition"
              >
                Contact us
              </Link>
            </nav>

            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-8 h-8 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-6 h-6 flex flex-col justify-center items-center flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#292F36]"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-jost text-lg text-[#292F36]">
                Home
              </Link>
              <Link href="/about" className="font-jost text-lg text-[#292F36]">
                About us
              </Link>
              <Link href="/services" className="font-jost text-lg text-[#292F36]">
                Services
              </Link>
              <Link href="/projects" className="font-jost text-lg text-[#292F36]">
                Projects
              </Link>
              <Link
                href="/contact"
                className="font-jost text-lg text-[#C76904] font-medium"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] overflow-hidden bg-white">
        <div className="relative overflow-hidden mx-auto shadow-2xl h-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero.jpg"
              alt="Contact Us Hero"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-dm-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8">
                Contact Us
              </h1>
              <p className="font-jost text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Ready to start your real estate journey? Get in touch with our expert team today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-[#F4F0EC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <h2 className="font-dm-serif text-2xl sm:text-3xl text-[#292F36] font-bold mb-6 sm:mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Honeypot field - hidden from users, catches bots */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block font-jost font-medium text-base sm:text-lg text-[#292F36] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full border-2 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 font-jost text-base sm:text-lg focus:outline-none transition ${
                      fieldErrors.name
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#E7E7E7] focus:border-[#CDA274]"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-600 font-jost">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-jost font-medium text-lg text-[#292F36] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border-2 rounded-2xl px-6 py-4 font-jost text-lg focus:outline-none transition ${
                      fieldErrors.email
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#E7E7E7] focus:border-[#CDA274]"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-600 font-jost">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-jost font-medium text-lg text-[#292F36] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-[#E7E7E7] rounded-2xl px-6 py-4 font-jost text-lg focus:border-[#CDA274] focus:outline-none transition"
                    placeholder="Enter your phone number"
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1 text-sm text-red-600 font-jost">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-jost font-medium text-lg text-[#292F36] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full border-2 rounded-2xl px-6 py-4 font-jost text-lg focus:outline-none transition resize-none ${
                      fieldErrors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-[#E7E7E7] focus:border-[#CDA274]"
                    }`}
                    placeholder="Tell us about your requirements"
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-600 font-jost">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#CDA274] hover:bg-[#B8956A] disabled:opacity-70 disabled:cursor-not-allowed text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {status.type && (
                <div
                  className={`mt-6 rounded-2xl border px-4 py-3 text-sm font-jost ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-dm-serif text-3xl text-[#292F36] font-bold mb-8">
                  Get in Touch
                </h2>
                <p className="font-jost text-xl text-[#4D5053] leading-relaxed mb-8">
                  We're here to help you with all your real estate needs. Contact us through any of the following methods.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      Office Address
                    </h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      Prestige Jindal City,<br />
                      Bengaluru, Karnataka 560073
                    </p>
                    <Link
                      href="https://maps.app.goo.gl/DBv4EdFhmXWRxT1R7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 font-jost text-lg text-[#CDA274] hover:text-[#B8956A] transition duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      View on Google Maps
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      Phone Number
                    </h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      +91 90367 47821
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      Email Address
                    </h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      soniasrealtymedia@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#CDA274] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-dm-serif text-xl text-[#292F36] font-bold mb-2">
                      Office Hours
                    </h3>
                    <p className="font-jost text-lg text-[#4D5053] leading-relaxed">
                      Anytime — we're always reachable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
              Find Our Office
            </h2>
            <p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
              Visit us at our conveniently located office for personalized consultation and assistance.
            </p>
            <div className="mt-6">
              <Link
                href="https://maps.app.goo.gl/DBv4EdFhmXWRxT1R7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#CDA274] hover:bg-[#B8956A] text-white font-inter font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Get Directions
              </Link>
            </div>
          </div>

          {/* Interactive Map Component - pinned to Prestige Jindal City */}
          <InteractiveMap
            address="Prestige Jindal City, Bengaluru"
            businessName="Prestige Jindal City"
          />
        </div>
        </section>

        {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <BackToTopButton />
    </div>
  );
}
