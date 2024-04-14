// import React, { useEffect, useState } from 'react'
// import { FiMenu } from 'react-icons/fi'
// import { RxCross1 } from 'react-icons/rx'
// import { Link } from 'react-router-dom'

// const Navbar = ({ state.role }) => {
//   const [nav, setNav] = useState(false)
//   const [more, setMore] = useState(false)

//   const handleNav = () => {
//     setNav(!nav)
//   }

//   const handleMore = () => {
//     setMore(!more)
//   }

//   return (
//     <div className="z-50 sticky top-0 bg-black bg-opacity-10 backdrop-blur-md p-12 w-full flex justify-between items-center h-24 mx-auto px-auto text-white">
//       <h1 className="w-10 text-4xl text-amber-400 font-extrabold">
//         <Link to="/">UrbanRoost</Link>
//       </h1>
//       <ul className="hidden lg:flex flex-grow justify-end">
//         <li className="p-4 hover:bg-slate-700 rounded-md">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="p-4 hover:bg-slate-700 rounded-md">
//           <Link to="/aboutus">About Us</Link>
//         </li>
//         <li className="p-4 hover:bg-slate-700 rounded-md">
//           <Link to="/contactus">Contact Us</Link>
//         </li>
//         <li className="p-4 hover:bg-slate-700 rounded-md">
//           <Link to="/signup">Sign Up / Sign In</Link>
//         </li>
//         {console.log(state.role)}
//         <li className="p-4 hover:bg-slate-700 rounded-md">
//           <Link to="/signout">Sign Out</Link>
//         </li>
//         {state.role === 'admin' && (
//           <li className="p-4 hover:bg-slate-700 rounded-md">
//             <Link to="/admin_dashboard">Admin Dashboard</Link>
//           </li>
//         )}
//         {(state.role === 'admin' || state.role === 'broker' || state.role === 'allie' || state.role === 'secretary' || state.role === 'owner') && (
//           <li className="relative">
//             <div className="p-4 hover:bg-slate-700 rounded-md cursor-pointer" onClick={handleMore}>
//               More
//             </div>
//             {more && (
//               <ul className="absolute top-full left-0 bg-gray-500 border-t border-r border-l border-gray-700 z-10">
//                 {state.role === 'broker' && (
//                   <>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Buyer_view_properties">View Properties</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/View_services">View Services</Link>
//                     </li>
//                   </>
//                 )}
//                 {state.role === 'allie' && (
//                   <>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Allie_dashboard">Allie dashboard</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Buyer_view_properties">View Properties</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/View_services">View Services</Link>
//                     </li>
//                   </>
//                 )}
//                 {(state.role === 'secretary' || state.role === 'admin') && (
//                   <>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Allie_dashboard">Allie dashboard</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Buyer_view_properties">View Properties</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/View_services">View Services</Link>
//                     </li>
//                   </>
//                 )}
//                 {state.role === 'owner' && (
//                   <>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/Buyer_view_properties">View Properties</Link>
//                     </li>
//                     <li className="p-4 hover:bg-slate-700">
//                       <Link to="/View_services">View Services</Link>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             )}
//           </li>
//         )}
//       </ul>
//       <div onClick={handleNav} className="block lg:hidden">
//         {nav ? <RxCross1 size={20} /> : <FiMenu size={20} />}
//       </div>

//       <div
//         className={
//           !nav
//             ? 'fixed left-[-100%]'
//             : 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-500 bg-gray-500 ease-in-out duration-300'
//         }
//       >
//         <div className="flex side-block ">
//           <div className="inline-block">
//             <h1 className="w-auto  text-amber-400 font-extrabold m-auto p-auto">UrbanRoost</h1>
//           </div>
//         </div>
//         <ul className="uppercase p-4">
//           <li className="text-black p-4 border-b border-b-gray-600">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="text-black p-4 border-b border-b-gray-600">
//             <Link to="/aboutus">About Us</Link>
//           </li>
//           <li className="text-black p-4 border-b border-b-gray-600">
//             <Link to="/contactus">Contact Us</Link>
//           </li>
//           <li className="text-black p-4 border-b border-b-gray-600">
//             <Link to="/signup">Sign Up / Sign In</Link>
//           </li>
//           <li className="text-black p-4 border-b border-b-gray-600">
//             <Link to="/signout">Sign Out</Link>
//           </li>

//           {state.role === 'admin' && (
//             <li className="p-4 hover:bg-slate-700 rounded-md">
//               <Link to="/admin_dashboard">Admin Dashboard</Link>
//             </li>
//           )}
//           {(state.role === 'admin' || state.role === 'broker' || state.role === 'allie' || state.role === 'secretary' || state.role === 'owner') && (
//             <li className="relative">
//               <div className="p-4 hover:bg-slate-700 rounded-md cursor-pointer" onClick={handleMore}>
//                 More
//               </div>
//               {more && (
//                 <ul className="absolute top-full left-0 bg-gray-500 border-t border-r border-l border-gray-700 z-10">
//                   {state.role === 'broker' && (
//                     <>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Buyer_view_properties">View Properties</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/View_services">View Services</Link>
//                       </li>
//                     </>
//                   )}
//                   {state.role === 'allie' && (
//                     <>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Allie_dashboard">Allie dashboard</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Buyer_view_properties">View Properties</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/View_services">View Services</Link>
//                       </li>
//                     </>
//                   )}
//                   {(state.role === 'secretary' || state.role === 'admin') && (
//                     <>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Allie_dashboard">Allie dashboard</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Buyer_view_properties">View Properties</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/View_services">View Services</Link>
//                       </li>
//                     </>
//                   )}
//                   {state.role === 'owner' && (
//                     <>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Pg_owner_dashboard">Owner dashboard</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/Buyer_view_properties">View Properties</Link>
//                       </li>
//                       <li className="p-4 hover:bg-slate-700">
//                         <Link to="/View_services">View Services</Link>
//                       </li>
//                     </>
//                   )}
//                 </ul>
//               )}
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { stateAtom } from './atom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [more, setMore] = useState(false)

  const state = useRecoilValue(stateAtom)
  console.log('Here..................', state)
  const handleNav = () => {
    setNav(!nav)
  }

  const handleMore = () => {
    setMore(!more)
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
          <Link to="/signup">Sign Up / Sign In</Link>
        </li>
        {console.log(state.role)}
        <li className="p-4 hover:bg-slate-700 rounded-md">
          <Link to="/signout">Sign Out</Link>
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
      </ul>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <RxCross1 size={20} /> : <FiMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-[-100%]'
            : 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-500 bg-gray-500 ease-in-out duration-300'
        }
      >
        <div className="flex side-block ">
          <div className="inline-block">
            <h1 className="w-auto  text-amber-400 font-extrabold m-auto p-auto">UrbanRoost</h1>
          </div>
        </div>
        <ul className="uppercase p-4">
          <li className="text-black p-4 border-b border-b-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="text-black p-4 border-b border-b-gray-600">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="text-black p-4 border-b border-b-gray-600">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="text-black p-4 border-b border-b-gray-600">
            <Link to="/signup">Sign Up / Sign In</Link>
          </li>
          <li className="text-black p-4 border-b border-b-gray-600">
            <Link to="/signout">Sign Out</Link>
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
        </ul>
      </div>
    </div>
  )
}

export default Navbar
