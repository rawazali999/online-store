import React from "react";
import Rating from "@mui/material/Rating";
import AddToFav from "./AddToFav";
import AddToCardButton from "./AddToCardButton";
import { useState } from "react";

export default function ProductPage({ product }) {
  const [size, setSize] = useState("MD");
  const [color, setColor] = useState("Black");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="product"
              className="w-1/3 h-auto mx-auto object-contain object-center rounded"
              src={product.image}
            />
            <div className=" lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 dark:text-gray-100  text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Rating
                    name="float-rating"
                    size="medium"
                    defaultValue={product.rating.rate}
                    precision={0.1}
                    readOnly
                  />
                  <span className="text-gray-600 dark:text-gray-100 ml-3">
                    {product.rating.count} Reviews
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200  space-x-2s">
                  <a className="text-gray-500 dark:text-gray-200 " href="#href">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500 dark:text-gray-200" href="#href">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500 dark:text-gray-200" href="#href">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed dark:text-gray-100">
                {product.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3 mt-2 dark:text-gray-100">Color</span>
                  <div className="relative">
                    <select
                      value={color}
                      onChange={handleColorChange}
                      className="rounded border appearance-none border-gray-300 py-2 text-base pl-3 pr-10"
                    >
                      <option>Black</option>
                      <option>White</option>
                      <option>Brown</option>
                      <option>Navy</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600  pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3 dark:text-gray-100">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={handleSizeChange}
                      className="rounded border appearance-none border-gray-300 py-2   text-base pl-3 pr-10"
                    >
                      <option>SM</option>
                      <option>MD</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600  pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="font-semibold text-2xl text-gray-900  dark:text-white">
                  $ {product.price}
                </span>
                <AddToCardButton product={product} size={size} color={color} />
                <button className="rounded-full w-10 h-10 bg-custom1  dark:bg-inherit inline-flex items-center justify-center ml-4">
                  <AddToFav product={product} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
