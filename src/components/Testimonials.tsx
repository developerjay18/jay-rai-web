"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import testimonials from "@/data/testimonials_data.json";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="bg-[#f4f4f4] px-5 py-10 lg:p-16">
      <div className="up">
        <h2 className="capitalize text-4xl text-center lg:text-left lg:text-5xl font-bold">customer experiences</h2>
      </div>

      <div className="down mt-10">
        <Slider {...settings}>
          {testimonials.testimonials.map((item, index) => (
            <div
              className="test-card p-4 bg-white w-[30%] border-[10px] border-[#f4f4f4] flex flex-col"
              key={`testimonial ${index + 1}`}
            >
              <div className="upper flex gap-x-4">
                <div className="image">
                  <Image
                    src={item.imgUrl || ""}
                    alt="testimonial-icon"
                    height={60}
                    width={60}
                    className="rounded-full bg-[#f4f4f4]"
                  />
                </div>

                <div className="info">
                  <h3 className="capitalize font-semibold text-xl">
                    {item.name}
                  </h3>

                  <div className="capitalize mt-1">
                    <h3 className="text-[#4a4e4f]">{item.profession}</h3>
                    <h4 className="text-[#3291cf]">{item.industryType}</h4>
                  </div>
                </div>
              </div>

              <div className="middle my-6 min-h-[17vh]">
                <p className="text-[#4a4e4f]">{item.testimonial}</p>
              </div>

              <div className="lower mb-3">
                <div className="stars text-[#f2ab19] text-xl flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
