"use client";

import React from "react";
import Image from "next/image";

function Certificate() {
  return (
    <div className="bg-white px-5 py-10 lg:p-16 text-black">
      <div className="flex flex-col-reverse lg:flex-row gap-y-10">
        <div className="left lg:w-[40%] flex justify-center flex-col gap-y-6 lg:gap-y-8">
          <div className="image hidden lg:block">
            <Image
              src={
                "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719318018/jayrai-june/i8dwbayhadikcimv8ila.svg"
              }
              alt="rank-badge"
              height={201}
              width={170}
              className="mx-auto"
            />
          </div>
          <div className="image lg:hidden block">
            <Image
              src={
                "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719318018/jayrai-june/i8dwbayhadikcimv8ila.svg"
              }
              alt="rank-badge"
              height={201}
              width={130}
              className="mx-auto"
            />
          </div>
          <div className="title text-center capitalize font-bold text-4xl lg:text-5xl lg:leading-[3.4rem]">
            rank in <br />{" "}
            <span className="text-[#00b9bc]"> full stack course</span> <br />{" "}
            from PW <br />
            <span className="text-[#00b9bc]">
            physics wallah
            </span>
          </div>
        </div>

        <div className="right lg:w-[60%]">
          <Image
            src={
              "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1717560109/jayraiweb/home/cupzijqnmjewgokjiny9.png"
            }
            alt="certificate-image"
            height={400}
            width={700}
            className="ml-auto shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificate;
