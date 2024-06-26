"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "@/data/projects_data.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import whatsappLink from "@/data/socialLinks";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Screen width below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Screen width below 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className="py-10 lg:py-16 bg-[#f4f4f4] text-black max-w-screen overflow-hidden relative"
      id="creations"
    >
      <div className="px-5 lg:px-16">
        <h2 className="capitalize text-4xl lg:text-5xl font-bold">
          recent creations
        </h2>
      </div>

      <div className="down mt-4 lg:mt-8 pr-7">
        <Slider {...settings} className="">
          {projects.projects.map((item, index) => (
            <div
              className="project bg-white mx-4 border-[16px] border-[#f4f4f4]"
              key={`project ${index + 1}`}
            >
              <div className="image">
                <Image
                  src={item.imgUrl}
                  alt="project-image"
                  height={400}
                  width={320}
                  className="mx-auto"
                />
              </div>
              <div className="content p-4 flex flex-col gap-y-5">
                <div className="keywords flex gap-x-4">
                  {item.techStack.map((stack, index) => (
                    <div
                      className="capitalize border-2 border-themeTurquoise inline-flex px-3 py-1"
                      key={`stack word ${index + 1}`}
                    >
                      {stack}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-y-3">
                  <div className="title capitalize font-bold text-xl flex gap-x-4 text-left">
                    {item.name}{" "}
                    <span className="capiatlize text-[#727374] font-semibold text-lg">
                      {item.industryType}
                    </span>
                  </div>

                  <p className="min-h-[14vh]">{item.description}</p>
                </div>

                <Link
                  href={item.link}
                  className="text-lg bg-themeTurquoise w-[20%] text-white hover:bg-darkThemeTurquoise"
                >
                  <button className="flex items-center gap-x-3 px-3 py-1">
                    Visit <FaLongArrowAltRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-16 flex justify-center">
        <Link href={whatsappLink} className="mx-auto">
          <button className="border-2 border-themeTurquoise bg-themeTurquoise p-3 hover:bg-darkThemeTurquoise px-4 text-white text-lg">
            Whatsapp Now
          </button>
        </Link>
      </div>

      <div className="absolute hidden lg:block -bottom-16 -left-16">
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719316810/jayrai-june/qmr1r3111sluuvclfi3m.svg"
          }
          alt="js-icon"
          height={209}
          width={209}
        />
      </div>

      {/* mobile  */}
      <div className="absolute lg:hidden block -bottom-7 -left-6">
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719316810/jayrai-june/qmr1r3111sluuvclfi3m.svg"
          }
          alt="js-icon"
          height={109}
          width={109}
        />
      </div>
    </div>
  );
}

export default Projects;
