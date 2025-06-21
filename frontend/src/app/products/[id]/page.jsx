"use client";

import React, { useState, useEffect, use } from "react";

import axios from "axios";

import BaseLeftBtn from "@/components/BaseLeftBtn";
import BaseOutlineBtn from "@/components/BaseOutlineBtn";
import Features from "@/components/Features";

export default function ProductPage({ params }) {
  const [data, setData] = useState(null);
  const { id } = use(params);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Api err", err);
      });
  }, []);

  console.log(data);
  return (
    <div>
      {data && (
        <div className="m-16 grid grid-cols-1 sm:grid-cols-2">
          <div className="group block overflow-hidden">
            <div className="border border-gray-300 rounded-xl relative h-[350px] sm:h-[700px] w-[90%]">
              <img
                src={data.imageUrl}
                alt={data.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="my-4">
            <p className="mb-4 text-3xl font-bold">{data.name}</p>
            <p className="mb-4 text-2xl">₹ {data.price}</p>
            <span className="flex items-center">
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>
            <div className="my-6 flow-root">
              <dl className="-my-3 divide-y divide-gray-200 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Metal Quality</dt>

                  <dd className="text-gray-700 sm:col-span-2">18K</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Metal Color</dt>

                  <dd className="text-gray-700 sm:col-span-2">
                  White Gold
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Diamond Quality & Tone</dt>

                  <dd className="text-gray-700 sm:col-span-2">VS-EF</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Product Details</dt>

                  <dd className="text-gray-700 sm:col-span-2">This 1.25 carat Brilliant Round Halo Ring is born. A breathtaking round-cut diamond commands attention at the center, its brilliance magnified by a radiant halo of sparkling diamonds that gracefully frame it like a crown of light.</dd>
                </div>
              </dl>
            </div>
            <span className="flex items-center my-6">
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>
            <div className="flex justify-around">
            <BaseLeftBtn title={'Add to Cart'} />
            <BaseOutlineBtn title={'Buy Now'} />
            </div>
            <span className="flex items-center my-6">
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>
            <Features />
           </div>
        </div>
      )}
    </div>
  );
}
