"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import whatsappLink from "@/data/socialLinks";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row lg:max-h-screen overflow-hidden relative pt-24 pb-10 home-hero-bg text-white">
      <div className="left lg:w-1/2 pl-5 pr-5 lg:pl-16 pb-10 lg:pb-20 flex flex-col justify-center gap-y-4">
        <h1 className="capitalize text-5xl lg:text-6xl text-center lg:text-left font-bold lg:w-[80%]">
          build your <br /> online presence via website
        </h1>
        <p className="lg:w-[75%] text-center lg:text-left text-lg">
          I Help Business Build Stronger Online Presence with their Business
          Websites.
        </p>
        <div className="flex gap-x-6 mt-6 text-lg">
          <Link href={whatsappLink}>
            <button className="border-2 border-themeTurquoise bg-themeTurquoise p-3 hover:bg-darkThemeTurquoise px-3 lg:px-4">
              Whatsapp Now
            </button>
          </Link>

          <Link href="#creations">
            <button className="border-2 border-themeTurquoise py-3 px-4 lg:px-6 hover:border-darkThemeTurquoise">
              View Projects
            </button>
          </Link>
        </div>
      </div>

      <div className="right lg:w-1/2 z-20 lg:pr-20 relative">
        {/* profile image with icons  */}
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719150887/jayrai-june/i5aoiv5ugwmsmijz6umr.svg"
          }
          alt="hero-sec-image"
          width={761}
          height={708}
          className="-ml-5 lg:-ml-0 -mb-16 lg:-mb-0"
        />

        {/* arrow left side  */}
        <div className="z-50 absolute top-[200px] hidden lg:block left-24">
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1718689092/jayrai-june/zvzgzaoijmstcyeihhhq.svg"
            }
            alt="left arrow"
            height={73}
            width={82}
          />
        </div>

        {/* arrow left side mobile  */}
        <div className="z-50 absolute top-[100px] lg:hidden block left-14">
          {" "}
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1718689092/jayrai-june/zvzgzaoijmstcyeihhhq.svg"
            }
            alt="left arrow"
            height={33}
            width={52}
          />
        </div>

        {/* arrow title left side  */}
        <div className="z-50 absolute top-[154px] hidden lg:block left-[50px] -rotate-[22deg]">
          {" "}
          <h3 className="text-2xl font-semibold">Jay Rai</h3>
        </div>

        {/* arrow title left side mobile  */}
        <div className="z-50 absolute top-[64px] lg:hidden block left-[15px] -rotate-[22deg]">
          {" "}
          <h3 className="text-xl font-semibold">Jay Rai</h3>
        </div>

        {/* arrow right side  */}
        <div className="z-50 absolute top-[200px] hidden lg:block rotate-180 right-[160px]">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719146040/jayrai-june/jxv7p6mwmzancf9miwne.svg"
            }
            alt="left arrow"
            height={73}
            width={82}
            className="rotate-180"
          />
        </div>

        {/* arrow right side mobile  */}
        <div className="z-50 absolute top-[100px] lg:hidden block rotate-180 right-[60px]">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719146040/jayrai-june/jxv7p6mwmzancf9miwne.svg"
            }
            alt="left arrow"
            height={73}
            width={52}
            className="rotate-180"
          />
        </div>

        {/* arrow title right side  */}
        <div className="z-50 absolute top-[115px] hidden lg:block rotate-12 right-[90px]">
          <h3 className="text-2xl font-semibold">
            Full Stack <br /> Developer
          </h3>
        </div>

        {/* arrow title right side mobile  */}
        <div className="z-50 absolute top-[30px] lg:hidden block rotate-12 right-[30px]">
          <h3 className="text-xl font-semibold">
            Full Stack <br /> Developer
          </h3>
        </div>
      </div>

      <div className="cloud-image absolute bottom-0 w-full z-20">
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1718685797/jayrai-june/nzczbifufhyddxh9mb5j.png"
          }
          alt="cloud-image"
          height={137}
          width={1600}
          className="cover"
        />
      </div>
    </div>
  );
}

export default Hero;
