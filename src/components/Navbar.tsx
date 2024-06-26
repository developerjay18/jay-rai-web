"use client";

import React from "react";
import Image from "next/image";
import navLinks from "@/data/navLinks_data.json";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
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
            {navLinks.navLinks.map((link, index) => (
              <Link href={link.slug} key={index}>
                <li className="hover:scale-110 text-lg text-[#]">
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      {/* mobile  */}
      <div className="relative w-full bg-[#f4f4f4]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Image
              src={
                "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1718557396/jayrai-june/aa10n94irhpqiedzgur2.png"
              }
              alt="navbar-icon"
              height={50}
              width={50}
            />
          </div>

          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <Image
                        src={
                          "https://res.cloudinary.com/remind-cents-cloud/image/upload/v1718557396/jayrai-june/aa10n94irhpqiedzgur2.png"
                        }
                        alt="navbar-icon"
                        height={50}
                        width={50}
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {navLinks.navLinks.map((item) => (
                        <a
                          key={item.title}
                          href={item.slug}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.title}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
