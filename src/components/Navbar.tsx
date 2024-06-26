"use client";

import React from "react";
import Image from "next/image";
import navLinks from "@/data/navlinks.js";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="px-5 hidden lg:flex z-50 absolute w-full top-0 lg:px-16 py-4 justify-between items-center text-white">
      <div className="logo">
        <Link href={"/"}>
        <Image
          src={
            "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1718557396/jayrai-june/aa10n94irhpqiedzgur2.png"
          }
          alt="logo"
          height={60}
          width={60}
          className="border border-black rounded-full"
          />
          </Link>
      </div>

      <div className="links">
        <ul className="flex gap-x-8">
          {navLinks.map((link, index) => (
            <Link href={link.slug} key={index}>
              <li className="hover:scale-110 text-lg text-[#]">{link.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
