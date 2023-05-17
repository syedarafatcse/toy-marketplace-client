import { Link } from "react-router-dom";
import navLogo from '../../../../public/images/siteLogo/toy-kingdom.jpg'
import { useState } from "react";



const Navbar = () => {
   const [user, setUser] = useState([true])

   const handleLogout = () => {
      console.log('ok')
   }

   const navItems = <div className="flex flex-col lg:flex-row gap-3">
      <div className="hover:bg-red-500 hover:text-white p-1 hover:rounded"> <Link to='/'>Home</Link> </div>

      {user?.email ?
         <>
            <div onClick={handleLogout} className="hover:bg-red-500 hover:text-white p-1 hover:rounded "> <Link to='/'>logout</Link> </div>
            <div className="hover:bg-red-500 hover:text-white p-1 hover:rounded"> <Link to='/bookings'>My Bookings</Link> </div>


         </>
         : <div className="hover:bg-red-500 hover:text-white p-1 hover:rounded"> <Link to='/login'>Login</Link> </div>}
   </div>



   return (
      <div className="navbar bg-base-100 h-28 mb-4">
         <div className="navbar-start">

            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
               </ul>
            </div>

            <Link to='/' className="btn btn-ghost normal-case text-xl">
               <img className="w-[150px] h-[60px]" src={navLogo} alt="" />
            </Link>

         </div>

         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navItems}
            </ul>
         </div>

         {user &&
            <> <li tabIndex={0}>
               <a>
                  <label tabIndex={0} className="avatar">
                     <div className="w-6 rounded-full">
                        <img src={user && user?.photoURL} />
                     </div>
                  </label>
               </a>

               <ul className="text-sm bg-base-100 ">
                  <li className=''><a><small>{user && user?.displayName}</small></a></li>
               </ul>
            </li>
            </>}
      </div>
   );
};

export default Navbar;