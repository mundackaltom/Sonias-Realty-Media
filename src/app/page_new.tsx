"use client";

import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-[1920px] h-[7069px] bg-white">
      {/* Header Section */}
      <header className="absolute w-[1210px] h-[50px] left-[355px] top-[105px] flex flex-col items-start gap-[10px] isolate">
        {/* Logo and Title */}
        <div className="flex flex-row items-start gap-[7px] w-[466px] h-[50px]">
          <div className="w-[50px] h-[50px] relative">
            <div className="absolute left-[10.26%] right-[10.26%] top-[17.71%] bottom-[16.67%] bg-[#CDA274]"></div>
          </div>
          <div className="w-[409px] h-[50px] font-dm-serif font-normal text-[40px] leading-[125%] flex items-center text-[#292F36]">
            SONIA'S REALTY MEDIA
          </div>
        </div>

        {/* Menu Bar */}
        <nav className="absolute w-[644px] h-[25px] left-[566px] top-[17px] flex flex-row justify-end items-center gap-[31px] z-10">
          <div className="w-[534px] h-[25px] relative">
            <div className="absolute w-[534px] h-[25px] left-[58px] top-0 font-jost font-medium text-[20px] leading-[125%] flex items-center text-center text-[#C76904]">
              Home About us Services Projects Contact
            </div>
          </div>
          <div className="w-[21px] h-[21px] opacity-80 relative">
            <div className="absolute left-[96.74%] right-0 top-[8%] bottom-[8%] border-2 border-[#141414]"></div>
          </div>
        </nav>
      </header>

      {/* Hero Image */}
      <div className="absolute w-[1210px] h-[758px] left-[355px] top-[258px] rounded-tl-[100px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Hero"
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
      <button className="absolute w-[227px] h-[75px] left-[380px] top-[596px] bg-[#CDA274] shadow-[0px_10px_20px_rgba(192,192,192,0.35)] rounded-[18px] flex flex-col justify-center items-center px-12 py-6 gap-[10px]">
        <div className="flex flex-row justify-center items-center gap-[10px] w-[130px] h-[23px]">
          <span className="w-[105px] h-[23px] font-inter font-semibold text-[18px] leading-[125%] flex items-center text-center tracking-[0.02em] text-white">
            Get Started
          </span>
          <div className="w-[15px] h-[13px] border-2 border-white"></div>
        </div>
      </button>

      {/* Work Section */}
      <div className="absolute w-[1158px] h-[225px] left-[381px] top-[1111px] flex flex-row justify-center items-start gap-[42px]">
        {/* Project Plan */}
        <div className="flex flex-col items-center gap-[52px] w-[358px] h-[225px]">
          <div className="flex flex-col items-center gap-[20px] w-[358px] h-[150px]">
            <h2 className="w-[133px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center text-center text-[#292F36]">
              Project Plan
            </h2>
            <p className="w-[358px] h-[99px] font-jost font-normal text-[22px] leading-[150%] flex items-center text-center tracking-[0.01em] text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from available, majority.
            </p>
          </div>
          <button className="flex flex-row justify-center items-center gap-[12px] w-[120px] h-[23px]">
            <span className="w-[93px] h-[23px] font-jost font-semibold text-[18px] leading-[125%] flex items-center text-center tracking-[0.02em] text-[#4D5053]">
              Read More
            </span>
            <div className="w-[15px] h-[13px] border-2 border-black"></div>
          </button>
        </div>

        {/* Interior Work */}
        <div className="flex flex-col items-center gap-[52px] w-[358px] h-[225px]">
          <div className="flex flex-col items-center gap-[20px] w-[358px] h-[150px]">
            <h2 className="w-[152px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center text-center text-[#292F36]">
              Interior Work
            </h2>
            <p className="w-[358px] h-[99px] font-jost font-normal text-[22px] leading-[150%] flex items-center text-center tracking-[0.01em] text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from available, majority.
            </p>
          </div>
          <button className="flex flex-row justify-center items-center gap-[12px] w-[120px] h-[23px]">
            <span className="w-[93px] h-[23px] font-jost font-semibold text-[18px] leading-[125%] flex items-center text-center tracking-[0.02em] text-[#4D5053]">
              Read More
            </span>
            <div className="w-[15px] h-[13px] border-2 border-black"></div>
          </button>
        </div>

        {/* Realization */}
        <div className="flex flex-col items-center gap-[52px] w-[358px] h-[225px]">
          <div className="flex flex-col items-center gap-[20px] w-[358px] h-[150px]">
            <h2 className="w-[133px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center text-center text-[#292F36]">
              Realization
            </h2>
            <p className="w-[358px] h-[99px] font-jost font-normal text-[22px] leading-[150%] flex items-center text-center tracking-[0.01em] text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from available, majority.
            </p>
          </div>
          <button className="flex flex-row justify-center items-center gap-[12px] w-[120px] h-[23px]">
            <span className="w-[93px] h-[23px] font-jost font-semibold text-[18px] leading-[125%] flex items-center text-center tracking-[0.02em] text-[#4D5053]">
              Read More
            </span>
            <div className="w-[15px] h-[13px] border-2 border-black"></div>
          </button>
        </div>
      </div>

      {/* Side Image Section */}
      <div className="absolute w-[653px] h-[700px] left-[355px] top-[1490px] rounded-tr-[400px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Side Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Call and Button Section */}
      <div className="absolute w-[277px] h-[215px] left-[380px] top-[1909px] flex flex-col items-start gap-[47px]">
        {/* Call Section */}
        <div className="flex flex-row items-center gap-[15px] w-[277px] h-[93px]">
          <div className="w-[93px] h-[93px] relative">
            <div className="absolute w-[93px] h-[93px] left-0 top-0 bg-white/92 rounded-full"></div>
            <div className="absolute left-[10.83%] right-[77.62%] top-[32.26%] bottom-[33.33%] bg-white/92 border-2 border-[#CDA274]"></div>
          </div>
          <div className="flex flex-col justify-center items-start w-[169px] h-[64px]">
            <span className="w-[141px] h-[33px] font-jost font-bold text-[24px] leading-[150%] flex items-center tracking-[0.01em] text-white">
              012345678
            </span>
            <span className="w-[169px] h-[31px] font-jost font-medium text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-white">
              Call Us Anytime
            </span>
          </div>
        </div>

        {/* Get Free Estimate Button */}
        <button className="w-[247px] h-[75px] bg-[#CDA274] shadow-[0px_10px_20px_rgba(192,192,192,0.35)] rounded-[18px] flex flex-col justify-center items-center px-8 py-6 gap-[10px]">
          <div className="flex flex-row justify-center items-center gap-[10px] w-[185px] h-[23px]">
            <span className="w-[160px] h-[23px] font-inter font-medium text-[18px] leading-[125%] flex items-center text-center tracking-[0.02em] text-white">
              Get Free Estimate
            </span>
            <div className="w-[15px] h-[13px] border-2 border-white"></div>
          </div>
        </button>
      </div>

      {/* Description Text */}
      <p className="absolute w-[324px] h-[99px] left-[380px] top-[1790px] font-jost font-medium text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-white">
        There are many variations of the passages of lorem Ipsum from available, majority.
      </p>

      {/* We create art heading */}
      <h2 className="absolute w-[368px] h-[138px] left-[380px] top-[1632px] font-dm-serif font-normal text-[55px] leading-[125%] flex items-center text-white">
        We create art for modern life
      </h2>

      {/* Additional background shapes */}
      <div className="absolute w-[877px] h-[700px] left-[688px] top-[1490px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute w-[1037px] h-[700px] left-[529px] top-[1490px] bg-[#D9D9D9] rounded-tl-[250px]"></div>
      <div className="absolute w-[559px] h-[700px] left-[529px] top-[1490px] bg-[#D9D9D9] rounded-tl-[250px] rounded-tr-[400px]"></div>

      {/* Testimonial Section */}
      <div className="absolute w-[1210px] h-[679px] left-[355px] top-[2384px]">
        <div className="absolute w-[1210px] h-[679px] left-0 top-0 bg-[#D8A876] rounded-[70px]"></div>
        
        <div className="absolute w-[1161px] h-[503px] left-[379px] top-[88px] flex flex-col items-center gap-[38px]">
          <div className="w-[547px] h-[126px]">
            <h2 className="absolute w-[547px] h-[126px] left-[307px] top-0 font-dm-serif font-normal text-[50px] leading-[125%] flex items-center text-center tracking-[0.02em] text-white">
              What the People Thinks About Us
            </h2>
          </div>

          <div className="flex flex-row justify-center items-start gap-[20px] w-[1150px] h-[339px]">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center w-[370px] h-[339px]">
              <div className="w-[370px] h-[339px] bg-white rounded-lg"></div>
              <div className="absolute flex flex-col items-start px-0 pb-[54px] gap-[25px] w-[296px] h-[286px] top-[26px]">
                <div className="flex flex-row items-center gap-[23px] w-[257px] h-[77px]">
                  <div className="w-[77px] h-[77px] relative">
                    <div className="absolute w-[77px] h-[77px] left-0 top-0 bg-[#C4C4C4] rounded-full"></div>
                    <Image
                      src="/hero.jpg"
                      alt="Natasha"
                      width={171}
                      height={114}
                      className="absolute left-[-69px] top-0 object-cover"
                    />
                  </div>
                  <span className="w-[122px] h-[62px] font-dm-serif font-normal text-[25px] leading-[150%] flex items-center tracking-[0.01em] text-[#292F36]">
                    Natasha Moscow, Russia
                  </span>
                </div>
                <p className="w-[296px] h-[99px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
                  Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center w-[370px] h-[339px]">
              <div className="w-[370px] h-[339px] bg-white rounded-lg"></div>
              <div className="absolute flex flex-col items-start px-0 pb-[54px] gap-[25px] w-[296px] h-[286px] top-[26px]">
                <div className="flex flex-row items-center gap-[23px] w-[257px] h-[77px]">
                  <div className="w-[77px] h-[77px] relative">
                    <div className="absolute w-[77px] h-[77px] left-0 top-0 bg-[#C4C4C4] rounded-full"></div>
                    <Image
                      src="/hero.jpg"
                      alt="Raymond"
                      width={305}
                      height={204}
                      className="absolute left-[-194px] top-[-11px] object-cover"
                    />
                  </div>
                  <span className="w-[172px] h-[67px] font-dm-serif font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#292F36]">
                    Raymond Galario UK, London
                  </span>
                </div>
                <p className="w-[296px] h-[132px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
                  Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center w-[370px] h-[339px]">
              <div className="w-[370px] h-[339px] bg-white rounded-lg"></div>
              <div className="absolute flex flex-col items-start px-0 pb-[54px] gap-[25px] w-[296px] h-[286px] top-[26px]">
                <div className="flex flex-row items-center gap-[23px] w-[257px] h-[77px]">
                  <div className="w-[77px] h-[77px] relative">
                    <div className="absolute w-[77px] h-[77px] left-0 top-0 bg-[#C4C4C4] rounded-full"></div>
                    <Image
                      src="/hero.jpg"
                      alt="Benny"
                      width={314}
                      height={210}
                      className="absolute left-[-199px] top-[-3px] object-cover"
                    />
                  </div>
                  <span className="w-[147px] h-[67px] font-dm-serif font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#292F36]">
                    Benny Roll USA, New York
                  </span>
                </div>
                <p className="w-[296px] h-[99px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
                  Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="absolute w-[250px] h-[250px] left-[351px] top-[3183px]">
        <Image src="/hero.jpg" alt="Gallery 1" fill className="object-cover" />
      </div>
      <div className="absolute w-[250px] h-[250px] left-[673px] top-[3183px]">
        <Image src="/hero.jpg" alt="Gallery 2" fill className="object-cover" />
      </div>
      <div className="absolute w-[250px] h-[234px] left-[995px] top-[3191px]">
        <Image src="/hero.jpg" alt="Gallery 3" fill className="object-cover" />
      </div>
      <div className="absolute w-[250px] h-[121px] left-[1317px] top-[3247px]">
        <Image src="/hero.jpg" alt="Gallery 4" fill className="object-cover" />
      </div>

      {/* Follow Our Projects Heading */}
      <div className="absolute w-[737px] h-[209px] left-[591px] top-[3553px] flex flex-col items-center gap-[8px]">
        <h2 className="w-[541px] h-[75px] font-dm-serif font-normal text-[60px] leading-[125%] flex items-center text-center tracking-[0.02em] text-[#292F36]">
          Follow Our Projects
        </h2>
        <p className="w-[737px] h-[126px] font-jost font-normal text-[28px] leading-[150%] flex items-center text-center tracking-[0.01em] text-[#4D5053]">
          It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
        </p>
      </div>

      {/* Projects */}
      <div className="absolute w-[547px] h-[548px] left-[355px] top-[3876px] bg-[#D9D9D9] rounded-tr-[270px] overflow-hidden">
        <Image src="/hero.jpg" alt="Project 1" fill className="object-cover" />
      </div>
      <div className="absolute w-[547px] h-[548px] left-[1018px] top-[3876px] bg-[#D9D9D9] rounded-tr-[270px] overflow-hidden">
        <Image src="/hero.jpg" alt="Project 2" fill className="object-cover" />
      </div>

      {/* Project Titles */}
      <div className="absolute w-[547px] h-[70px] left-[355px] top-[4434px] flex flex-row items-center gap-[260px]">
        <div className="flex flex-col items-start gap-[4px] w-[217px] h-[31px]">
          <span className="w-[98px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center tracking-[0.02em] text-[#292F36]">
            Project 1
          </span>
        </div>
        <div className="w-[70px] h-[70px] relative">
          <div className="absolute w-[70px] h-[70px] left-[477px] top-0 bg-[#D8A876] rounded-full"></div>
          <div className="absolute left-[93.05%] right-[5.48%] top-[37.14%] bottom-[37.14%] bg-[#D8A876] border-2 border-white rotate-180"></div>
        </div>
      </div>

      <div className="absolute w-[547px] h-[70px] left-[1018px] top-[4434px] flex flex-row items-center gap-[260px]">
        <div className="flex flex-col items-start gap-[4px] w-[217px] h-[31px]">
          <span className="w-[102px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center tracking-[0.02em] text-[#292F36]">
            Project 2
          </span>
        </div>
        <div className="w-[70px] h-[70px] relative">
          <div className="absolute w-[70px] h-[70px] left-[477px] top-0 bg-[#D8A876] rounded-full"></div>
          <div className="absolute left-[93.05%] right-[5.48%] top-[37.14%] bottom-[37.14%] bg-[#D8A876] border-2 border-white rotate-180"></div>
        </div>
      </div>

      {/* Additional Projects */}
      <div className="absolute w-[547px] h-[548px] left-[355px] top-[4536px] bg-[#D9D9D9] rounded-tr-[270px] overflow-hidden">
        <Image src="/hero.jpg" alt="Project 3" fill className="object-cover" />
      </div>
      <div className="absolute w-[547px] h-[548px] left-[1018px] top-[4536px] bg-[#D9D9D9] rounded-tr-[270px] overflow-hidden">
        <Image src="/hero.jpg" alt="Project 4" fill className="object-cover" />
      </div>

      {/* Project 3 & 4 Titles */}
      <div className="absolute w-[547px] h-[70px] left-[355px] top-[5094px] flex flex-row items-center gap-[260px]">
        <div className="flex flex-col items-start gap-[4px] w-[217px] h-[31px]">
          <span className="w-[102px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center tracking-[0.02em] text-[#292F36]">
            Project 3
          </span>
        </div>
        <div className="w-[70px] h-[70px] relative">
          <div className="absolute w-[70px] h-[70px] left-[477px] top-0 bg-[#D8A876] rounded-full"></div>
          <div className="absolute left-[93.05%] right-[5.48%] top-[37.14%] bottom-[37.14%] bg-[#D8A876] border-2 border-white rotate-180"></div>
        </div>
      </div>

      <div className="absolute w-[547px] h-[70px] left-[1018px] top-[5094px] flex flex-row items-center gap-[260px]">
        <div className="flex flex-col items-start gap-[4px] w-[217px] h-[31px]">
          <span className="w-[103px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center tracking-[0.02em] text-[#292F36]">
            Project 4
          </span>
        </div>
        <div className="w-[70px] h-[70px] relative">
          <div className="absolute w-[70px] h-[70px] left-[477px] top-0 bg-[#D8A876] rounded-full"></div>
          <div className="absolute left-[93.05%] right-[5.48%] top-[37.14%] bottom-[37.14%] bg-[#D8A876] border-2 border-white rotate-180"></div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="absolute w-[1920px] h-[457px] left-0 top-[5337px]">
        <div className="absolute w-[1920px] h-[457px] left-0 top-0"></div>
        
        <div className="absolute w-[1082px] h-[155px] left-[419px] top-[151px] flex flex-row justify-center items-start gap-[76px]">
          {/* Counter 1 */}
          <div className="w-[246px] h-[155px] relative">
            <div className="absolute w-[130px] h-0 left-[246px] top-[18px] border border-[#CDA274] rotate-90"></div>
            <div className="absolute w-[192px] h-[155px] left-0 top-0 flex flex-col items-center gap-[16px]">
              <span className="w-[77px] h-[106px] font-dm-serif font-normal text-[85px] leading-[125%] flex items-center tracking-[0.02em] text-[#CDA274]">
                5
              </span>
              <span className="w-[192px] h-[33px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
                Years Of Experiance
              </span>
            </div>
          </div>

          {/* Counter 2 */}
          <div className="w-[223px] h-[155px] relative">
            <div className="absolute w-[130px] h-0 left-[223px] top-[12px] border border-[#CDA274] rotate-90"></div>
            <div className="absolute w-[147px] h-[155px] left-0 top-0 flex flex-col items-center gap-[16px]">
              <span className="w-[119px] h-[106px] font-dm-serif font-normal text-[85px] leading-[125%] flex items-center tracking-[0.02em] text-[#CDA274]">
                100
              </span>
              <span className="w-[131px] h-[33px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
                Success Sales
              </span>
            </div>
          </div>

          {/* Counter 3 */}
          <div className="w-[214px] h-[155px] relative">
            <div className="absolute w-[130px] h-0 left-[214px] top-[11px] border border-[#CDA274] rotate-90"></div>
            <div className="absolute w-[130px] h-[155px] left-0 top-0 flex flex-col items-center gap-[16px]">
              <span className="w-[46px] h-[106px] font-dm-serif font-normal text-[85px] leading-[125%] flex items-center tracking-[0.02em] text-[#CDA274]">
                5
              </span>
              <span className="w-[139px] h-[33px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
                Active Projects
              </span>
            </div>
          </div>

          {/* Counter 4 */}
          <div className="w-[171px] h-[155px]">
            <div className="absolute w-[171px] h-[155px] left-0 top-0 flex flex-col items-center gap-[16px]">
              <span className="w-[119px] h-[106px] font-dm-serif font-normal text-[85px] leading-[125%] flex items-center tracking-[0.02em] text-[#CDA274]">
                100
              </span>
              <span className="w-[171px] h-[33px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
                Happy CUstomers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Background */}
      <div className="absolute w-[1920px] h-[430px] left-0 top-[5967px] overflow-hidden">
        <Image src="/hero.jpg" alt="CTA Background" fill className="object-cover" />
      </div>

      {/* CTA Content */}
      <div className="absolute w-[569px] h-[214px] left-[675px] top-[6047px] flex flex-col items-center gap-[32px]">
        <div className="flex flex-col items-center gap-[11px] w-[569px] h-[107px]">
          <h2 className="w-[569px] h-[63px] font-dm-serif font-normal text-[50px] leading-[125%] text-center text-white">
            Wanna join the interno?
          </h2>
          <p className="w-[453px] h-[33px] font-jost font-medium text-[22px] leading-[150%] flex items-center text-center tracking-[0.01em] text-white">
            It is a long established fact will be distracted.
          </p>
        </div>

        <button className="w-[237px] h-[75px] bg-[#CDA274] shadow-[0px_10px_20px_#1F2022] rounded-[18px] flex flex-col justify-center items-center px-9 py-6 gap-[10px]">
          <div className="flex flex-row justify-center items-center gap-[11px] w-[163px] h-[23px]">
            <span className="w-[137px] h-[23px] font-jost font-semibold text-[18px] leading-[125%] flex items-center text-center tracking-[0.02em] text-white">
              Contact With Us
            </span>
            <div className="w-[15px] h-[13px] border-2 border-white"></div>
          </div>
        </button>
      </div>

      {/* Footer */}
      <div className="absolute w-[1210px] h-[370px] left-[355px] top-[6494px] flex flex-row items-start gap-[140px]">
        {/* Company Info */}
        <div className="flex flex-col items-start pb-[35px] gap-[31px] w-[393px] h-[188px]">
          <div className="flex flex-col items-start gap-[18px] w-[393px] h-[134px]">
            <div className="flex flex-row items-start gap-[7px] w-[466px] h-[50px]">
              <div className="w-[50px] h-[50px] relative">
                <div className="absolute left-[10.26%] right-[10.26%] top-[17.71%] bottom-[16.67%] bg-[#CDA274]"></div>
              </div>
              <div className="w-[409px] h-[50px] font-dm-serif font-normal text-[40px] leading-[125%] flex items-center text-[#292F36]">
                SONIA'S REALTY MEDIA
              </div>
            </div>
            <p className="w-[393px] h-[66px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
              It is a long established fact that a reader will be distracted lookings.
            </p>
          </div>
          <div className="flex flex-row items-center gap-[54px] w-[225px] h-[23px]">
            <span className="w-[12px] h-[22px] font-['Font_Awesome_5_Brands'] font-normal text-[18px] leading-[120%] text-center tracking-[0.055em] uppercase text-[#292F36]">
              
            </span>
            <span className="w-[18px] h-[22px] font-['Font_Awesome_5_Brands'] font-normal text-[18px] leading-[120%] text-center tracking-[0.055em] uppercase text-[#292F36]">
              
            </span>
            <span className="w-[16px] h-[22px] font-['Font_Awesome_5_Brands'] font-normal text-[18px] leading-[120%] text-center tracking-[0.055em] uppercase text-[#292F36]">
              
            </span>
            <span className="w-[17px] h-[23px] font-['Font_Awesome_5_Brands'] font-normal text-[19px] leading-[120%] text-center tracking-[0.055em] uppercase text-[#292F36]">
              
            </span>
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col items-start gap-[9px] w-[109px] h-[370px]">
          <h3 className="w-[109px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center text-[#292F36]">
            Pages
          </h3>
          <div className="w-[109px] h-[330px] font-jost font-normal text-[22px] leading-[300%] flex items-center tracking-[0.01em] text-[#4D5053]">
            About Us Services Projects Contact Us
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start gap-[9px] w-[120px] h-[304px]">
          <h3 className="w-[94px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center text-[#292F36]">
            Services
          </h3>
          <div className="w-[117px] h-[264px] font-jost font-normal text-[22px] leading-[300%] flex items-center tracking-[0.01em] text-[#4D5053]">
            Projects Consultation
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start gap-[26px] w-[258px] h-[338px]">
          <h3 className="w-[87px] h-[31px] font-dm-serif font-normal text-[25px] leading-[125%] flex items-center text-[#292F36]">
            Contact
          </h3>
          <div className="w-[258px] h-[281px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
            32031, B3 T2, Prestige Jindal City, Tumkur road, Nagasandra, Bangalore - 560073 soniajimmy@gmail.com 9036747821
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute w-[361px] h-[33px] left-[779px] top-[6961px] font-jost font-normal text-[22px] leading-[150%] flex items-center tracking-[0.01em] text-[#4D5053]">
        Copyright © SONIA'S REALTY MEDIA
      </div>
    </div>
  );
}
