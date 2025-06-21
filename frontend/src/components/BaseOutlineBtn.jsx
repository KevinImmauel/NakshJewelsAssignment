import React from "react";

function BaseOutlineBtn({ title }) {
  return (
    <a
      className="inline-block rounded-sm border border-gray-600 px-12 py-3 text-sm font-medium text-gray-600 hover:bg-gray-600 hover:text-white focus:ring-3 focus:outline-hidden"
      href="#"
    >
      {title}
    </a>
  );
}

export default BaseOutlineBtn;
