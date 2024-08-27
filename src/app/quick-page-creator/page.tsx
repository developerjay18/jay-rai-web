"use client";

import Link from "next/link";
import React from "react";

const QuickPageCreatorPage = () => {
  return (
    <div className="min-h-screen py-28 px-16 flex flex-col gap-y-10 justify-center items-center bg-slate-800 text-white">
      <h1 className="capitalize font-bold text-5xl text-center leading-[3.2rem] lg:leading-0">
        Big <span className="text-themeTurquoise uppercase"> Offers </span>{" "}
        coming soon...
      </h1>
      <div className="font-semibold text-xl capitalize text-center">
        Till then enjoy on{" "}
        <span className="lowercase text-themeTurquoise hover:text-darkThemeTurquoise">
          <Link href={"/"}>jayraiweb.com</Link>
        </span>
      </div>
    </div>
  );
};

export default QuickPageCreatorPage;
