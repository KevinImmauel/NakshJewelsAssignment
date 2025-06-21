import React from 'react'

function Footer() {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://images.unsplash.com/photo-1686538246844-f3ca82434d95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Naksh Jewellers Store"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs tracking-wide text-gray-500 uppercase"> Reach Us </span>
          <a href="tel:+911234567890" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
            +91 12345 67890
          </a>
        </p>

        <ul className="mt-4 text-sm text-gray-700 space-y-1">
          <li>Mon – Fri: 10:00 AM – 6:00 PM</li>
          <li>Sat – Sun: 11:00 AM – 5:00 PM</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          {/* Add relevant links */}
          <li><a href="#" className="text-gray-700 hover:opacity-75" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#" className="text-gray-700 hover:opacity-75" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#" className="text-gray-700 hover:opacity-75" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="text-gray-700 hover:opacity-75" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a></li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Collections</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Engagement Rings </a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Wedding Bands </a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Daily Wear </a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Men’s Jewellery </a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Custom Orders </a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">About Us</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Our Story </a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Craftsmanship </a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75"> Customer Testimonials </a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li><a href="#" className="text-gray-500 hover:opacity-75"> Terms & Conditions </a></li>
          <li><a href="#" className="text-gray-500 hover:opacity-75"> Privacy Policy </a></li>
          <li><a href="#" className="text-gray-500 hover:opacity-75"> Return Policy </a></li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; {new Date().getFullYear()} Naksh Jewellers. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer