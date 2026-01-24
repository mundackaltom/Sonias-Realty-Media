"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import SearchModal from "../../components/SearchModal";
import BackToTopButton from "../../components/BackToTopButton";
import BrochureModal from "../../components/BrochureModal";
import DownloadTest from "../../components/DownloadTest";

const projects = [
	{
		id: "1",
		title: "Brigade Valencia",
		location: "Devanahalli, Bengaluru",
		status: "Upcoming",
		description:
			"Premium residential project with world-class amenities and modern architecture.",
		image: "/images/brigade_valencia/brigade_valencia_2.jpeg",
		brochureUrl: "/brochures/Brigade Valencia.pdf",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
	{
		id: "2",
		title: "Brigade Avalon",
		location: "Electronic City, Bengaluru",
		status: "Upcoming",
		description:
			"Luxury residential development with premium amenities and strategic location near IT hubs.",
		image: "/images/brigade_avalon/brigade_avalon_1.jpeg",
		brochureUrl: "/brochures/Brigade Avalon.pdf",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
	{
		id: "3",
		title: "Brigade Eternia",
		location: "Whitefield, Bengaluru",
		status: "Ready to Move",
		description:
			"Premium residential project offering spacious apartments with modern amenities and excellent connectivity.",
		image: "/images/brigade_eternia/brigade_eternia_1.jpeg",
		brochureUrl: "/brochures/Brigade Eternia.pdf",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
	{
		id: "4",
		title: "Godrej Tiara",
		location: "Yeshwantpur, Bengaluru",
		status: "Upcoming",
		description:
			"Elegant residential towers with luxury amenities and prime location near business districts.",
		image: "/images/godrej_tiara/godrej_tiara_1.jpeg",
		brochureUrl: "/brochures/Godrej Tiara.pdf",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
	{
		id: "5",
		title: "Prestige Raintree Park",
		location: "Whitefield, Bengaluru",
		status: "Ready to Move",
		description:
			"Sprawling residential community with villas and apartments, surrounded by lush greenery.",
		image: "/images/hero.jpg",
		brochureUrl: "/brochures/Prestige Raintree Park.pdf",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
	{
		id: "6",
		title: "Century Marathahalli",
		location: "Marathahalli, Bengaluru",
		status: "Upcoming",
		description:
			"Modern residential project in Marathahalli with excellent connectivity to IT corridors and premium amenities.",
		image: "/images/hero.jpg",
		brochureUrl: "#",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
	{
		id: "7",
		title: "Century Regalia",
		location: "Cunningham Road, Bengaluru",
		status: "Upcoming",
		description:
			"Luxury high-rise development offering premium residences in the heart of the city.",
		image: "/images/hero.jpg",
		brochureUrl: "#",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
	{
		id: "8",
		title: "Century Serraya",
		location: "Marathahalli, Bengaluru",
		status: "Upcoming",
		description:
			"Elegant residential towers with contemporary design and world-class amenities in the vibrant Marathahalli locale.",
		image: "/images/hero.jpg",
		brochureUrl: "#",
		youtubeUrl: "https://youtu.be/Uk87MZBi1KA?si=GNQH4RJN3jLTy8xf",
	},
];

export default function Projects() {
	const [isClient, setIsClient] = useState(false);
	const [showServicesDropdown, setShowServicesDropdown] = useState(false);
	const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [filterStatus, setFilterStatus] = useState("All");
	
	// Brochure modal state
	const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<{title: string, brochureUrl: string} | null>(null);

	// Timeout refs for delayed closing
	const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const projectsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleServicesMouseEnter = () => {
		if (servicesTimeoutRef.current) {
			clearTimeout(servicesTimeoutRef.current);
		}
		setShowServicesDropdown(true);
	};

	const handleServicesMouseLeave = () => {
		servicesTimeoutRef.current = setTimeout(() => {
			setShowServicesDropdown(false);
		}, 300);
	};

	const handleProjectsMouseEnter = () => {
		if (projectsTimeoutRef.current) {
			clearTimeout(projectsTimeoutRef.current);
		}
		setShowProjectsDropdown(true);
	};

	const handleProjectsMouseLeave = () => {
		projectsTimeoutRef.current = setTimeout(() => {
			setShowProjectsDropdown(false);
		}, 300);
	};

	const filteredProjects =
		filterStatus === "All"
			? projects
			: projects.filter((project) => project.status === filterStatus);

	// Handle brochure modal opening
	const handleBrochureClick = (projectTitle: string, brochureUrl: string) => {
		setSelectedProject({ title: projectTitle, brochureUrl });
		setIsBrochureModalOpen(true);
	};

	const handleBrochureModalClose = () => {
		setIsBrochureModalOpen(false);
		setSelectedProject(null);
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
									onClick={() =>
										setShowServicesDropdown(!showServicesDropdown)
									}
								>
									Services
									<svg
										className={`w-4 h-4 transition-transform duration-200 ${
											showServicesDropdown ? "rotate-180" : ""
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
								{showServicesDropdown && isClient && (
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
									className="font-jost text-base text-[#C76904] font-medium hover:text-[#292F36] transition flex items-center gap-1 group"
									onClick={() =>
										setShowProjectsDropdown(!showProjectsDropdown)
									}
								>
									Projects
									<svg
										className={`w-4 h-4 transition-transform duration-200 ${
											showProjectsDropdown ? "rotate-180" : ""
										} group-hover:text-[#292F36]`}
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
								{showProjectsDropdown && isClient && (
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
								className="font-jost text-base text-[#292F36] hover:text-[#C76904] transition"
							>
								Contact us
							</Link>
						</nav>

						{/* Search Icon */}
						<button
							onClick={() => setIsSearchOpen(true)}
							className="w-8 h-8 border-2 border-[#292F36] rounded-full flex items-center justify-center hover:bg-[#292F36] hover:text-white transition flex-shrink-0"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>

						{/* Mobile Menu Button */}
						<button
							className="lg:hidden w-6 h-6 flex flex-col justify-center items-center flex-shrink-0"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							<div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
							<div className="w-6 h-0.5 bg-[#292F36] mb-1"></div>
							<div className="w-6 h-0.5 bg-[#292F36]"></div>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && isClient && (
					<div className="lg:hidden mt-4 pb-4">
						<div className="flex flex-col space-y-4">
							<Link
								href="/"
								className="font-jost text-lg text-[#292F36]"
							>
								Home
							</Link>
							<Link
								href="/about"
								className="font-jost text-lg text-[#292F36]"
							>
								About us
							</Link>
							<Link
								href="/services"
								className="font-jost text-lg text-[#292F36]"
							>
								Services
							</Link>
							<Link
								href="/projects"
								className="font-jost text-lg text-[#C76904] font-medium"
							>
								Projects
							</Link>
							<Link
								href="/contact"
								className="font-jost text-lg text-[#292F36]"
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
							alt="Our Projects Hero"
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
								Our Projects
							</h1>
							<p className="font-jost text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
								Discover our exceptional real estate projects designed to create lasting value and beautiful living spaces.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="pt-8 pb-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					{/* Filter Buttons */}
					<div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 px-2">
						{["All", "Upcoming", "Ready to Move"].map((status) => (
							<button
								key={status}
								onClick={() => setFilterStatus(status)}
								className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-jost font-semibold text-sm sm:text-lg transition duration-300 ${
									filterStatus === status
										? "bg-[#CDA274] text-white"
										: "bg-[#F4F0EC] text-[#292F36] hover:bg-[#CDA274] hover:text-white"
								}`}
							>
								{status === "All" ? "All Projects" : status}
							</button>
						))}
					</div>

					{/* Projects Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{filteredProjects.map((project) => (
							<ProjectCard
								key={project.id}
								id={project.id}
								title={project.title}
								location={project.location}
								status={project.status}
								description={project.description}
								image={project.image}
								brochureUrl={project.brochureUrl}
								youtubeUrl={project.youtubeUrl}
								onBrochureClick={handleBrochureClick}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Our Projects Section */}
			<section className="py-20 bg-[#F4F0EC]">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="font-dm-serif text-3xl md:text-5xl text-[#292F36] font-bold mb-6">
							Why Choose Our Projects?
						</h2>
						<p className="font-jost text-xl text-[#4D5053] max-w-3xl mx-auto leading-relaxed">
							Every project is built with attention to detail, quality materials,
							and modern design principles.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-3xl p-8 shadow-lg text-center">
							<div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
									/>
								</svg>
							</div>
							<h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
								Premium Quality
							</h3>
							<p className="font-jost text-lg text-[#4D5053] leading-relaxed">
								Built with the finest materials and superior craftsmanship for
								lasting value.
							</p>
						</div>

						<div className="bg-white rounded-3xl p-8 shadow-lg text-center">
							<div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-white"
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
							<h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
								Prime Locations
							</h3>
							<p className="font-jost text-lg text-[#4D5053] leading-relaxed">
								Strategically located in desirable neighborhoods with excellent
								connectivity.
							</p>
						</div>

						<div className="bg-white rounded-3xl p-8 shadow-lg text-center">
							<div className="w-16 h-16 bg-[#CDA274] rounded-2xl flex items-center justify-center mx-auto mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
							<h3 className="font-dm-serif text-2xl text-[#292F36] font-bold mb-4">
								Modern Amenities
							</h3>
							<p className="font-jost text-lg text-[#4D5053] leading-relaxed">
								Contemporary facilities and smart home features for comfortable
								living.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Search Modal */}
			<SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

			{/* Brochure Modal */}
			{selectedProject && (
				<BrochureModal
					isOpen={isBrochureModalOpen}
					onClose={handleBrochureModalClose}
					projectTitle={selectedProject.title}
					brochureUrl={selectedProject.brochureUrl}
				/>
			)}

			<BackToTopButton />
		</div>
	);
}
