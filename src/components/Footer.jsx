import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white">© 2023 Your Website. All rights reserved.</p>
        <ul className="flex space-x-4 text-white">
          <li><a href="/about" className="text-sm  hover:bg-gray-700 hover:text-white">About Us</a></li>
          <li><a href="/contact" className="text-sm  hover:bg-gray-700 hover:text-white">Contact</a></li>
          {/* Add more footer links as needed */}
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
