"use client";

import React, { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";
import whatsappLink from "@/data/socialLinks";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Thank you for your message. We'll contact you soon");
          },
          (error) => {
            console.log(error.text);
            toast.error("Error while sending message");
          }
        );
    }
    form.current.reset();
  };

  return (
    <div className="px-5 py-10 lg:p-16 bg-[#f4f4f4]" id="contact">
      <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-0">
        <div className="left lg:w-1/2 flex flex-col gap-y-6 lg:gap-y-8">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl">
              Want Business Website For your Business ??{" "}
            </p>
            <h3 className="text-[2rem] lg:text-5xl capitalize font-bold">
              Drop Me A Message
            </h3>
          </div>

          <p className="text-lg lg:pr-28 text-[#4a4e4f]">
            Ready to elevate your online presence? Contact me below for
            questions, consultations, or to start your project. Let&apos;s
            achieve your business goals together.
          </p>

          <div className="inline-flex mt-2 lg:mt-0 flex-col gap-y-6 w-[95%] lg:w-[55%]">
            <Link href={whatsappLink}>
              <div className="capiatlize flex gap-x-6 lg:gap-x-8 items-center text-xl hover:scale-[1.01] transition-all">
                <div className="text-5xl w-[10%]">
                  <FaWhatsapp />
                </div>
                <div className="border w-[90%] text-center capitalize cursor-pointer hover:border-themeTurquoise border-black hover:text-themeTurquoise px-4 py-2">
                  whatsapp now
                </div>
              </div>
            </Link>

            <Link href={"https://www.instagram.com/jayrai.web"}>
              <div className=" flex gap-x-6 lg:gap-x-8 items-center text-xl hover:scale-[1.01] transition-all">
                <div className="text-5xl w-[10%]">
                  <FaInstagram />
                </div>
                <div className="border w-[90%] text-center cursor-pointer hover:border-themeTurquoise border-black hover:text-themeTurquoise px-4 py-2">
                  Instagram | @jayrai.web
                </div>
              </div>
            </Link>

            <Link href={"tel:+916351468706"}>
              <div className="capiatlize flex gap-x-6 lg:gap-x-8 items-center text-xl hover:scale-[1.01] transition-all">
                <div className="text-5xl w-[10%]">
                  <BiSolidPhoneCall />
                </div>
                <div className="border w-[90%] text-center capitalize cursor-pointer hover:border-themeTurquoise border-black hover:text-themeTurquoise px-4 py-2">
                  +91 6351 4687 06
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="right lg:w-1/2 flex justify-start items-end">
          <form
            action="#"
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-y-6 lg:w-[90%]"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="bg-transparent px-3 capitalize py-2 focus:outline-none border-b border-[#646565] text-[#646565]"
            />
            <input
              type="text"
              name="number"
              id="number"
              required
              placeholder="mobile number"
              className="bg-transparent px-3 py-2 focus:outline-none border-b border-[#646565] capitalize text-[#646565]"
            />
            <input
              type="text"
              name="email"
              id="email"
              required
              placeholder="Email Address"
              className="bg-transparent px-3 py-2 focus:outline-none border-b border-[#646565] text-[#646565]"
            />
            <textarea
              name="message"
              id="message"
              rows={5}
              cols={10}
              required
              className="bg-transparent px-3 capitalize py-2 focus:outline-none border-b text-[#646565] border-[#646565]"
            >
              Message
            </textarea>

            <button
              type="submit"
              className="bg-themeTurquoise w-[50%] lg:w-[30%] py-2 capitalize text-white text-lg"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
