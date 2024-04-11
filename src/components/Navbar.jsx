import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = ({ role }) => {
  const [nav, setNav] = useState(false)
  const [more, setMore] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleMore = () => {
    setMore(!more)
  }

  return (
    <div className="sticky top-0 bg-black bg-opacity-10 backdrop-blur-md px-8 py-4 lg:px-12 lg:py-6 flex justify-between items-center text-white">
      <h1 className="text-2xl lg:text-3xl font-bold">
        <Link to="/">UrbanRoost</Link>
      </h1>
      <ul className="hidden lg:flex">
        <li className="px-4 py-2 hover:bg-slate-700 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 hover:bg-slate-700 rounded-md">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="px-4 py-2 hover:bg-slate-700 rounded-md">
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li className="px-4 py-2 hover:bg-slate-700 rounded-md">
          <Link to="/signup">Sign Up / Sign In</Link>
        </li>
        <li className="px-4 py-2 hover:bg-slate-700 rounded-md">
          <Link to="/signout">Sign Out</Link>
        </li>
        {role === 'admin' && (
          <li className="px-4 py-2 hover:bg-slate-700 rounded-md">
            <Link to="/admin_dashboard">Admin Dashboard</Link>
          </li>
        )}
        {(role === 'admin' || role === 'broker' || role === 'allie' || role === 'secretary' || role === 'owner') && (
          <li className="relative">
            <div className="px-4 py-2 hover:bg-slate-700 rounded-md cursor-pointer" onClick={handleMore}>
              More
            </div>
            {more && (
              <ul className="absolute top-full left-0 bg-gray-500 border-t border-r border-l border-gray-700 z-10">
                {role === 'broker' && (
                  <>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Buyer_view_properties">View Properties</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/View_services">View Services</Link>
                    </li>
                  </>
                )}
                {role === 'allie' && (
                  <>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Allie_dashboard">Allie dashboard</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Buyer_view_properties">View Properties</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/View_services">View Services</Link>
                    </li>
                  </>
                )}
                {(role === 'secretary' || role === 'admin') && (
                  <>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Allie_dashboard">Allie dashboard</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Buyer_view_properties">View Properties</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/View_services">View Services</Link>
                    </li>
                  </>
                )}
                {role === 'owner' && (
                  <>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/Buyer_view_properties">View Properties</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-700">
                      <Link to="/View_services">View Services</Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
        )}
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <RxCross1 size={20} /> : <FiMenu size={20} />}
      </div>
    </div>
  )
}

export default Navbar
