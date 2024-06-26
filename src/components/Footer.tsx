"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="bg-[#26292f] text-white lg:h-[50vh] max-w-screen overflow-hidden">
        <div className="flex">
          <div className="left w-[45%] flex justify-center items-center h-full">
            <h2 className=" lg:pl-16 py-10 lg:pt-20 text-[2.25rem] lg:text-[10rem] capitalize font-bold">
              jay rai
            </h2>
          </div>
          <div className="right w-[55%] relative">
            <div className="absolute hidden lg:block -top-16 -right-20">
              <Image
                src={
                  "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719399219/jayrai-june/dz3tai4aycfnwngp4zja.svg"
                }
                alt="footer-image"
                height={610}
                width={823}
              />
            </div>

            {/* mobile  */}
            <div className="absolute lg:hidden block -top-4 -right-14">
              <Image
                src={
                  "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719399219/jayrai-june/dz3tai4aycfnwngp4zja.svg"
                }
                alt="footer-image"
                height={710}
                width={1023}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#26292f] text-white flex flex-col lg:flex-row lg:justify-between justify-center items-center capitalize py-3 lg:py-2 px-5 lg:px-16">
        <div className="">
          &copy; 2023-2024 | <span className="uppercase">jay rai web </span>{" "}
          <span className="hidden lg:inline-block">- all rights reserved</span>
        </div>
        <div className="">
          developed by{" "}
          <Link href={"https://www.jayraiweb.com"}>
            <span className="hover:text-themeTurquoise capitalize cursor-pointer">
              jay rai web
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
