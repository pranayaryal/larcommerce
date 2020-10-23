import React from 'react'

const Navbar = props => {
  return (
    <div className="px-20">
      <ul className="flex my-6 text-lg">
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800 px-4 py-2" href="#">Home</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800 px-4 py-2" href="#">Links</a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
      </ul>

    </div>
  )
};

export default Navbar;