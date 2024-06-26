"use client";

import React from "react";
import choose from "@/data/choose";
import Image from "next/image";

function Choose() {
  return (
    <div className="px-5 py-10 lg:p-16 text-black flex flex-col lg:flex-row relative overflow-hidden gap-y-6">
      <div className="left lg:w-1/2 z-50">
        <div className="flex items-center gap-x-4">
          <h2 className="text-xl lg:text-2xl">why choose me ?</h2>
          <div className="h-[1px] bg-black w-32 lg:w-[20rem]"></div>
        </div>
      </div>

      <div className="right lg:w-1/2 pl-5 lg:pl-10 z-50">
        <ul className="choose-list">
          {choose.map((item, index) => (
            <li key={index} className="text-2xl lg:text-3xl py-1">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-img absolute top-0 right-0 hidden lg:block">
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719153530/jayrai-june/awl1xiralfmbanegeka7.svg"
          }
          alt="semi-circle-bg"
          height={418}
          width={700}
        />
      </div>

      <div className="bg-img absolute bottom-0 right-0 block lg:hidden">
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719153530/jayrai-june/awl1xiralfmbanegeka7.svg"
          }
          alt="semi-circle-bg"
          height={218}
          width={400}
        />
      </div>

      {/* VS Code iconm  */}
      <div className="vs-icon absolute hidden lg:block -bottom-16 -left-[5.5rem]">
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1719153122/jayrai-june/wi7rj3oq0qc3jnq241bz.svg"
          }
          alt="vs-code-icon"
          height={237}
          width={237}
        />
      </div>
    </div>
  );
}

export default Choose;
