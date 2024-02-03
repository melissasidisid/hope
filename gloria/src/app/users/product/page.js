"use client";

import React from "react";
import { useState, useEffect } from "react";
import Product from "@/app/component/product";
import Footer from "@/app/component/footer";
import Nav from "@/app/component/Nav";
import Link from "next/link";
export default function Products() {
  const [imageIndex] = useState(0);
  const images = [
    "/unsalon.png",
    "/meuble.png",
    "/livingroom.png",
    "/kitchen2.png",
    "/kitchen.png",
  ];
  return (
    <div>
      <Nav />
      <Product />
      {/**About */}
      <div className="flex flex-col md:flex-row mx-10 xl:mx-20 space-x-0 md:space-x-6 space-y-2 md:space-y-0 items-center justify-center">
        <div className="flex p-1 sm:p-4 md:w-1/2 md:h-2/5">
          <img
            className="w-full h-full sm:rounded-3xl"
            src={images[imageIndex]}
            alt="no pîcture"
          />
        </div>
        <div className="flex flex-col md:w-1/2 space-y-4 md:space-y-6 ">
          <div className="py-3 text-4xl text-center rounded-b-3xl border-b-2 border-x-2 border-solid border-red-500">
            About
          </div>
          <p className="text-center text-s ">
            <p>
              We are Woody, a company specialized in making and selling trendy
              and cozy wooden furniture. We offer you quality products, with a
              modern and authentic design, suitable for all interior styles.
              Whether you are looking for a table, a chair, a sofa, or a
              bookshelf, you will find what you need on our website. Our
              furniture is made of recycled wood, giving them a vintage and
              eco-friendly touch. You can also customize your order according to
              your preferences and needs. Woody is more than just a furniture
              store, it is a lifestyle. Join us and discover our cozy world.
            </p>
          </p>
          <div className="py-3 text-4xl text-center rounded-t-3xl border-t-2 border-x-2 border-solid border-red-500">
            <Link href="/Certificate" className="text-black no-underline">
              Our Diplomes
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
