"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certifiedFrom from "@/data/certifiedFrom";
import workedWith from "@/data/workedWith";

function CertifiedFrom() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#26292f] text-white pt-10 max-w-screen overflow-hidden">
      <div className="up px-5 lg:px-16">
        <h2 className="capitalize text-4xl lg:text-5xl font-bold">certified from</h2>
      </div>

      <div className="down pt-3 lg:pt-5 pb-2 lg:pb-4">
        <div className="logos">
          <div className="logos-slide carousel-container">
            <Slider {...settings}>
              {certifiedFrom.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <Image
                    src={image}
                    alt={`Company ${index + 1}`}
                    height={100}
                    width={250}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertifiedFrom;
