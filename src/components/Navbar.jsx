import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { stateAtom } from './atom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [more, setMore] = useState(false)
  const [state, setState] = useRecoilState(stateAtom)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleMore = () => {
    setMore(!more)
  }

  const handleSignOut = () => {
    setState({
      ...state,
      role: '',
    })
    alert('User Logged Out')
  }

  return (
    <div className="z-50 sticky top-0 bg-black bg-opacity-10 backdrop-blur-md p-12 w-full flex justify-between items-center h-24 mx-auto px-auto text-white">
      <h1 className="w-10 text-4xl text-amber-400 font-extrabold">
        <Link to="/">UrbanRoost</Link>
      </h1>
      <ul className="hidden lg:flex flex-grow justify-end">
        <li className="p-4 hover:bg-slate-700 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:bg-slate-700 rounded-md">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="p-4 hover:bg-slate-700 rounded-md">
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li className="p-4 hover:bg-slate-700 rounded-md">
          <Link to="/signup">Register</Link>
        </li>
        {state.role && (
          <>
            <li className="p-4 hover:bg-slate-700 rounded-md">
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
            {state.role === 'admin' && (
              <li className="p-4 hover:bg-slate-700 rounded-md">
                <Link to="/admin_dashboard">Admin Dashboard</Link>
              </li>
            )}
            {(state.role === 'admin' ||
              state.role === 'broker' ||
              state.role === 'allie' ||
              state.role === 'secretary' ||
              state.role === 'owner') && (
              <li className="relative">
                <div className="p-4 hover:bg-slate-700 rounded-md cursor-pointer" onClick={handleMore}>
                  More
                </div>
                {more && (
                  <ul className="absolute top-full left-0 bg-gray-500 border-t border-r border-l border-gray-700 z-10">
                    {state.role === 'broker' && (
                      <>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Buyer_view_properties">View Properties</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/View_services">View Services</Link>
                        </li>
                      </>
                    )}
                    {state.role === 'allie' && (
                      <>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Allie_dashboard">Allie dashboard</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Buyer_view_properties">View Properties</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/View_services">View Services</Link>
                        </li>
                      </>
                    )}
                    {(state.role === 'secretary' || state.role === 'admin') && (
                      <>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Allie_dashboard">Allie dashboard</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Buyer_view_properties">View Properties</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/View_services">View Services</Link>
                        </li>
                      </>
                    )}
                    {state.role === 'owner' && (
                      <>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/Buyer_view_properties">View Properties</Link>
                        </li>
                        <li className="p-4 hover:bg-slate-700">
                          <Link to="/View_services">View Services</Link>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            )}
          </>
        )}
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <RxCross1 size={20} /> : <FiMenu size={20} />}
      </div>
      {/*--------------------------------------------------------------------------------------------------------------------------*/}
      <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-14 w-full h-full ease-in-out duration-300'}>
        <div className="flex side-block ">
          {/* <div className="inline-block">
            <h1 className="w-auto  text-amber-400 font-extrabold m-auto p-auto">UrbanRoost</h1>
          </div> */}
        </div>
        <div className="bg-black opacity-30 backdrop-filter backdrop-blur-md z-10">
          <div>
            <ul className="uppercase opacity-100 p-4 text-center text-white z-20">
              <li className="py-2 border-b border-gray-600">
                <Link to="/" className="hover:text-amber-400">
                  Home
                </Link>
              </li>
              <li className="py-2 border-b border-gray-600">
                <Link to="/aboutus" className="hover:text-amber-400">
                  About Us
                </Link>
              </li>
              <li className="py-2 border-b border-gray-600">
                <Link to="/contactus" className="hover:text-amber-400">
                  Contact Us
                </Link>
              </li>
              <li className="py-2 border-b border-gray-600">
                <Link to="/signup" className="hover:text-amber-400">
                  Sign Up / Sign In
                </Link>
              </li>
              {state.role && (
                <li className="py-2 border-b border-gray-600">
                  <button onClick={handleSignOut} className="hover:text-amber-400">
                    Sign Out
                  </button>
                </li>
              )}
              {state.role === 'admin' && (
                <li className="py-2 border-b border-gray-600">
                  <Link to="/admin_dashboard" className="hover:text-amber-400">
                    Admin Dashboard
                  </Link>
                </li>
              )}
              {(state.role === 'admin' ||
                state.role === 'broker' ||
                state.role === 'allie' ||
                state.role === 'secretary' ||
                state.role === 'owner') && (
                <li className="relative py-2 border-b border-gray-600">
                  <div onClick={handleMore} className="hover:text-amber-400 cursor-pointer">
                    More
                  </div>
                  {more && (
                    <ul className="absolute top-full left-0 bg-gray-500 border-t border-r border-l border-gray-700 z-10">
                      {state.role === 'broker' && (
                        <>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Buyer_view_properties" className="hover:text-amber-400">
                              View Properties
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/View_services" className="hover:text-amber-400">
                              View Services
                            </Link>
                          </li>
                        </>
                      )}
                      {state.role === 'allie' && (
                        <>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Allie_dashboard" className="hover:text-amber-400">
                              Allie dashboard
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Buyer_view_properties" className="hover:text-amber-400">
                              View Properties
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/View_services" className="hover:text-amber-400">
                              View Services
                            </Link>
                          </li>
                        </>
                      )}
                      {(state.role === 'secretary' || state.role === 'admin') && (
                        <>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Pg_owner_dashboard" className="hover:text-amber-400">
                              Owner dashboard
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Allie_dashboard" className="hover:text-amber-400">
                              Allie dashboard
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Buyer_view_properties" className="hover:text-amber-400">
                              View Properties
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/View_services" className="hover:text-amber-400">
                              View Services
                            </Link>
                          </li>
                        </>
                      )}
                      {state.role === 'owner' && (
                        <>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Pg_owner_dashboard" className="hover:text-amber-400">
                              Owner dashboard
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/Buyer_view_properties" className="hover:text-amber-400">
                              View Properties
                            </Link>
                          </li>
                          <li className="py-2 hover:bg-slate-700">
                            <Link to="/View_services" className="hover:text-amber-400">
                              View Services
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
