"use client";

import Image from "next/image";
import React from "react";

const offers = [
  "FREE Domain (One Time)",
  "FREE Hosting (Life Time)",
  "FREE SSL Certificate (Life Time)",
  "FREE Bonuses Worth ₹6000",
];
function Offer() {
  return (
    <div className="px-5 lg:px-16 py-10 lg:pt-16 bg-white text-black relative max-w-screen overflow-hidden" id="offer">
      <div className="flex flex-col lg:flex-row gap-y-10">
        <div className="left z-50 relative lg:min-w-[45%] lg:max-w-[45%] overflow-hidden">
          <div className="absolute text-center mx-auto w-full">
            <h2 className="text-4xl lg:text-5xl capitalize font-bold text-center">
              limited time offer
            </h2>
          </div>

          <div className="">
            <Image
              src={
                "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719372041/jayrai-june/oei74gyg5rvkglk73hv1.svg"
              }
              alt="profile-image"
              height={480}
              width={480}
              className="mx-auto -mb-10"
            />
          </div>
        </div>

        <div className="right z-50 lg:pl-10 lg:w-[55%] text-2xl lg:text-3xl flex flex-col gap-y-7 lg:gap-y-10">
          <p className="lg:w-[85%]">
            Order your business website now and receive an incredible package of
            benefits, includes:
          </p>

          <div className="pl-5 lg:pl-10">
            <ul className="offer-list flex flex-col gap-y-1">
              {offers.map((item, index) => (
                <li className="text-2xl lg:text-3xl" key={`offer ${index + 1}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-img hidden lg:block absolute top-0 right-0">
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719153530/jayrai-june/awl1xiralfmbanegeka7.svg"
          }
          alt="semi-circle-bg"
          height={318}
          width={700}
        />
      </div>
    </div>
  );
}

export default Offer;
