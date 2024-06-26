"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import whatsappLink from "@/data/socialLinks";

function AboutMe() {
  return (
    <div className="px-5 pt-10 lg:p-16 text-black overflow-hidden max-w-screen" id="about">
      <div className="flex flex-col lg:flex-row">
        <div className="left lg:w-[55%] flex flex-col gap-y-8 relative">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold capitalize">
              let&apos;s talk about me
            </h2>

            <div className="flex items-center gap-x-4 capitalize text-2xl">
              a small intro <div className="h-[1px] w-[40%] lg:w-[30%] bg-black"></div>
            </div>
          </div>

          <div className="text-xl pt-2 lg:pt-6 lg:pr-32 flex flex-col gap-y-7">
            <p>From Learning Commerce to Building Top-Notch Websites:</p>
            <p>
              After completing my 11th and 12th in commerce, I was fascinated by
              how the digital world could transform businesses.
            </p>
            <p>
              I Mastered full stack development through various platforms and
              videos.
            </p>
            <p>
              Over two years, I honed my skills and achieved 2nd rank in the
              Full Stack Web Development course from PW (Physics Wallah).
            </p>
            <p>
              I Started freelancing last year, successfully delivered 10+
              SEO-ranked, high-quality websites.
            </p>
            <p>
              Contact now to build your online presence and scale your business.
            </p>
          </div>

          <div className="mt-4">
            <Link href={whatsappLink}>
              <button className="border-2 border-themeTurquoise bg-themeTurquoise p-3 hover:bg-darkThemeTurquoise px-4 text-white text-lg">
                Whatsapp Now
              </button>
            </Link>
          </div>

          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719238104/jayrai-june/lhcg8lchjqh0ymn7jpzc.svg"
            }
            alt="react-icon"
            height={229}
            width={229}
            className="absolute hidden lg:block -bottom-[9.5rem] left-[15rem]"
          />

          {/* mobile  */}
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719238104/jayrai-june/lhcg8lchjqh0ymn7jpzc.svg"
            }
            alt="react-icon"
            height={129}
            width={129}
            className="absolute lg:hidden block -bottom-[6rem] left-[19rem]"
          />
        </div>

        <div className="right lg:w-[45%] flex justify-center items-center">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719414111/jayrai-june/ixrgcsxcqqw6raiwrayp.svg"
            }
            alt="profile-image"
            height={700}
            width={600}
            className="lg:-mt-24"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
