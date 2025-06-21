'use client'
import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLink } from 'react-icons/fa';
import { FiTruck, FiAward, FiHeart, FiGrid } from 'react-icons/fi'; // Outline-style icons

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      {/* Social Icons */}
      <div className="flex gap-6 text-2xl text-black">
        <FaFacebookF className="cursor-pointer hover:text-gray-600" />
        <FaTwitter className="cursor-pointer hover:text-gray-600" />
        <FaPinterestP className="cursor-pointer hover:text-gray-600" />
        <FaLink className="cursor-pointer hover:text-gray-600" />
      </div>

      {/* Feature Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mt-6">
        <div>
          <FiTruck className="mx-auto text-3xl mb-2" />
          <p className="text-sm">Free Shipping & Returns</p>
        </div>
        <div>
          <FiAward className="mx-auto text-3xl mb-2" />
          <p className="text-sm">Certified Jewellery</p>
        </div>
        <div>
          <FiHeart className="mx-auto text-3xl mb-2" />
          <p className="text-sm">Committed to give back</p>
        </div>
        <div>
          <FiGrid className="mx-auto text-3xl mb-2" />
          <p className="text-sm">Great Collection</p>
        </div>
      </div>
    </div>
  );
}
