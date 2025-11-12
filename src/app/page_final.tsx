"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative w-[1920px] h-[7069px] bg-white mx-auto">
      {/* Header Section - Frame 1 */}
      <header className="absolute w-[1210px] h-[50px] left-[355px] top-[105px] flex flex-col items-start p-0 gap-[10px] z-10">
        {/* SELHONO */}
        <div className="flex flex-row items-start p-0 gap-[7px] w-[466px] h-[50px] order-0 flex-none">
          {/* material-symbols-light:other-houses */}
          <div className="w-[50px] h-[50px] bg-[#CDA274] rounded-full flex items-center justify-center order-0 flex-none">
            <span className="text-white text-3xl">🏠</span>
          </div>
          {/* SONIA'S REALTY MEDIA */}
          <span className="w-[409px] h-[50px] font-dm-serif text-[40px] leading-[125%] flex items-center text-[#292F36] order-1 flex-none">
            SONIA'S REALTY MEDIA
          </span>
        </div>

        {/* Menubar */}
        <nav className="absolute w-[644px] h-[25px] left-[566px] top-[17px] flex flex-row justify-end items-center p-0 gap-[31px] order-1 flex-none z-[1]">
          {/* Menu */}
          <div className="w-[534px] h-[25px] order-0 flex-none">
            {/* Home About us Services Projects Contact */}
            <ul className="absolute w-[534px] h-[25px] left-[58px] top-0 font-jost font-medium text-[20px] leading-[125%] flex items-center text-center text-[#C76904] gap-8">
              <li><Link href="/" className="hover:text-[#292F36] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#292F36] transition">About us</Link></li>
              <li><Link href="/services" className="hover:text-[#292F36] transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#292F36] transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#292F36] transition">Contact us</Link></li>
            </ul>
          </div>
          
          {/* Search */}
          <button className="w-[21px] h-[21px] opacity-80 border-2 border-[#141414] rounded order-1 flex-none flex items-center justify-center">
            <span className="text-[#141414] text-sm">🔍</span>
          </button>
        </nav>
      </header>

      {/* Hero Image */}
      <div className="absolute w-[1210px] h-[758px] left-[355px] top-[258px] rounded-[100px_0_0_0] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Text */}
      <h1 className="absolute w-[425px] h-[162px] left-[380px] top-[331px] font-dm-serif font-normal text-[65px] leading-[125%] flex items-center text-white">
        Let's find your home together
      </h1>

      {/* Get Started Button */}
      <button className="absolute w-[227px] h-[75px] left-[380px] top-[596px] bg-[#CDA274] rounded-[18px] shadow-[0px_10px_20px_rgba(192,192,192,0.35)] flex flex-row items-center justify-center gap-2">
        <span className="font-inter font-semibold text-[18px] leading-[22px] text-white">Get Started</span>
        <div className="w-[15px] h-[13px] border-2 border-white"></div>
      </button>

      {/* Work Section */}
      <div className="absolute w-[1158px] h-[225px] left-[381px] top-[1111px] flex flex-row items-start gap-[42px]">
        {/* Project Plan */}
        <div className="flex flex-col items-center gap-[52px] w-[358px] h-[225px]">
          <div className="flex flex-col items-center gap-[20px] w-[358px] h-[150px]">
            <h3 className="font-dm-serif font-normal text-[25px] leading-[125%] text-center text-[#292F36]">
              Project Plan
            </h3>
            <p className="w-[317px] font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from available, majority.
            </p>
          </div>
          <button className="flex flex-row items-center gap-[12px] w-[120px] h-[23px]">
            <span className="font-jost font-semibold text-[18px] leading-[26px] text-[#4D5053]">Read More</span>
            <div className="w-[15px] h-[13px] border-2 border-[#292F36]"></div>
          </button>
        </div>

        {/* Interior Work */}
        <div className="flex flex-col items-center gap-[52px] w-[358px] h-[225px]">
          <div className="flex flex-col items-center gap-[20px] w-[358px] h-[150px]">
            <h3 className="font-dm-serif font-normal text-[25px] leading-[125%] text-center text-[#292F36]">
              Interior Work
            </h3>
            <p className="w-[317px] font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from available, majority.
            </p>
          </div>
          <button className="flex flex-row items-center gap-[12px] w-[120px] h-[23px]">
            <span className="font-jost font-semibold text-[18px] leading-[26px] text-[#4D5053]">Read More</span>
            <div className="w-[15px] h-[13px] border-2 border-[#292F36]"></div>
          </button>
        </div>

        {/* Realization */}
        <div className="flex flex-col items-center gap-[52px] w-[358px] h-[225px]">
          <div className="flex flex-col items-center gap-[20px] w-[358px] h-[150px]">
            <h3 className="font-dm-serif font-normal text-[25px] leading-[125%] text-center text-[#292F36]">
              Realization
            </h3>
            <p className="w-[317px] font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from available, majority.
            </p>
          </div>
          <button className="flex flex-row items-center gap-[12px] w-[120px] h-[23px]">
            <span className="font-jost font-semibold text-[18px] leading-[26px] text-[#4D5053]">Read More</span>
            <div className="w-[15px] h-[13px] border-2 border-[#292F36]"></div>
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="absolute w-[1210px] h-[679px] left-[355px] top-[2384px] bg-[#F4F0EC] rounded-[70px]">
        <h2 className="absolute w-[547px] h-[130px] left-[331px] top-[88px] font-dm-serif font-normal text-[50px] leading-[125%] text-center text-[#292F36]">
          What the People Thinks About Us
        </h2>
        
        {/* Testimonial Cards */}
        <div className="absolute w-[1160px] h-[461px] left-[25px] top-[176px] flex flex-row items-start gap-[27px]">
          {/* Card 1 */}
          <div className="w-[370px] h-[339px] bg-white rounded-lg p-6 shadow-lg">
            <div className="flex flex-row items-center gap-[23px] mb-4">
              <div className="w-[77px] h-[77px] bg-[#C4C4C4] rounded-full overflow-hidden">
                <Image src="/images/hero.jpg" alt="Natasha" width={77} height={77} className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-dm-serif text-[25px] text-[#292F36]">Natasha</h4>
                <span className="font-jost text-[18px] text-[#4D5053]">Moscow, Russia</span>
              </div>
            </div>
            <p className="font-jost text-[22px] leading-[33px] text-[#4D5053]">
              Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[370px] h-[339px] bg-white rounded-lg p-6 shadow-lg">
            <div className="flex flex-row items-center gap-[23px] mb-4">
              <div className="w-[77px] h-[77px] bg-[#C4C4C4] rounded-full overflow-hidden">
                <Image src="/images/hero.jpg" alt="Raymond" width={77} height={77} className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-dm-serif text-[25px] text-[#292F36]">Raymond Galario</h4>
                <span className="font-jost text-[18px] text-[#4D5053]">UK, London</span>
              </div>
            </div>
            <p className="font-jost text-[22px] leading-[33px] text-[#4D5053]">
              Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[370px] h-[339px] bg-white rounded-lg p-6 shadow-lg">
            <div className="flex flex-row items-center gap-[23px] mb-4">
              <div className="w-[77px] h-[77px] bg-[#C4C4C4] rounded-full overflow-hidden">
                <Image src="/images/hero.jpg" alt="Benny" width={77} height={77} className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-dm-serif text-[25px] text-[#292F36]">Benny Roll</h4>
                <span className="font-jost text-[18px] text-[#4D5053]">USA, New York</span>
              </div>
            </div>
            <p className="font-jost text-[22px] leading-[33px] text-[#4D5053]">
              Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.
            </p>
          </div>
        </div>
      </div>

      {/* Follow Our Projects Section */}
      <h2 className="absolute w-[737px] h-[75px] left-[591px] top-[3553px] font-dm-serif font-normal text-[60px] leading-[125%] text-center text-[#292F36]">
        Follow Our Projects
      </h2>
      <p className="absolute w-[811px] h-[132px] left-[554px] top-[3630px] font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">
        It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
      </p>

      {/* Project Images */}
      <div className="absolute w-[547px] h-[548px] left-[355px] top-[3876px] rounded-tr-[123px] overflow-hidden">
        <Image src="/images/hero.jpg" alt="Modern Kitchan" fill className="object-cover" />
      </div>
      <div className="absolute w-[547px] h-[548px] left-[1018px] top-[3876px] rounded-tr-[123px] overflow-hidden">
        <Image src="/images/hero.jpg" alt="Modern Bedroom" fill className="object-cover" />
      </div>

      {/* Project Titles */}
      <div className="absolute w-[547px] h-[70px] left-[355px] top-[4434px] flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-dm-serif text-[25px] text-[#292F36]">Modern Kitchan</h3>
          <span className="font-jost text-[22px] text-[#4D5053]">Decor / Artchitecture</span>
        </div>
        <div className="w-[70px] h-[70px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
          <span className="text-[#292F36] text-2xl">→</span>
        </div>
      </div>
      <div className="absolute w-[547px] h-[70px] left-[1018px] top-[4434px] flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-dm-serif text-[25px] text-[#292F36]">Modern Bedroom</h3>
          <span className="font-jost text-[22px] text-[#4D5053]">Decor / Artchitecture</span>
        </div>
        <div className="w-[70px] h-[70px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
          <span className="text-[#292F36] text-2xl">→</span>
        </div>
      </div>

      {/* Statistics/Counter Section */}
      <div className="absolute w-[1000px] h-[155px] left-[460px] top-[5488px] flex flex-row items-start gap-[76px]">
        <div className="flex flex-col items-center w-[192px] h-[155px]">
          <span className="font-dm-serif font-normal text-[85px] leading-[125%] text-[#CDA274]">12</span>
          <span className="font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">Years Of Experiance</span>
        </div>
        <div className="flex flex-col items-center w-[192px] h-[155px]">
          <span className="font-dm-serif font-normal text-[85px] leading-[125%] text-[#CDA274]">85</span>
          <span className="font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">Success Project</span>
        </div>
        <div className="flex flex-col items-center w-[192px] h-[155px]">
          <span className="font-dm-serif font-normal text-[85px] leading-[125%] text-[#CDA274]">15</span>
          <span className="font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">Active Project</span>
        </div>
        <div className="flex flex-col items-center w-[192px] h-[155px]">
          <span className="font-dm-serif font-normal text-[85px] leading-[125%] text-[#CDA274]">95</span>
          <span className="font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">Happy CusTomer</span>
        </div>
      </div>

      {/* News Section */}
      <div className="absolute w-[737px] h-[209px] left-[591px] top-[5973px] flex flex-col items-center gap-[8px]">
        <h2 className="font-dm-serif font-normal text-[50px] leading-[125%] text-center text-[#292F36]">
          Articles & News
        </h2>
        <p className="w-[811px] font-jost font-normal text-[22px] leading-[33px] text-center text-[#4D5053]">
          It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="absolute w-[1920px] h-[417px] left-0 top-[6652px] bg-[#292F36] flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 text-white">
          <div className="flex flex-row items-center gap-7">
            <div className="w-[50px] h-[50px] bg-[#CDA274] rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">🏠</span>
            </div>
            <span className="font-dm-serif text-[40px] text-white">
              SONIA'S REALTY MEDIA
            </span>
          </div>
          <p className="font-jost text-[22px] text-center text-[#C4C4C4] max-w-[600px]">
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
          </p>
          <div className="flex flex-row gap-8 mt-8">
            <div className="w-[54px] h-[54px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
              <span className="text-[#292F36] text-xl">f</span>
            </div>
            <div className="w-[54px] h-[54px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
              <span className="text-[#292F36] text-xl">t</span>
            </div>
            <div className="w-[54px] h-[54px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
              <span className="text-[#292F36] text-xl">in</span>
            </div>
            <div className="w-[54px] h-[54px] bg-[#F4F0EC] rounded-full flex items-center justify-center">
              <span className="text-[#292F36] text-xl">ig</span>
            </div>
          </div>
          <div className="absolute bottom-8 w-full text-center">
            <span className="font-jost text-[22px] text-[#C4C4C4]">
              Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
