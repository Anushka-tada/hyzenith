

// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import "../globals.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <div className='navbar-outer d-flex py-3 justify-content-between align-items-center'>
//         <div className='logo'>
//           <Link href="/">
//             <img src='/assets/logo.png' alt='logo' className='logo-img' />
//           </Link>
//         </div>

//         {/* Hamburger icon for small screens */}
//         <div className='hamburger d-md-none' onClick={toggleMenu}>
//           <img src='https://cdn-icons-png.flaticon.com/128/1828/1828859.png' alt='menu' />
//         </div>

//         {/* Nav Links */}
//         <ul className={`nav-links list-unstyled mb-0 ${menuOpen ? 'open' : ''}`}>
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/bulk-order">Bulk Order</Link></li>
//           <li><Link href="/blog">Blog</Link></li>
//           <li><Link href="/about">About</Link></li>
//         </ul>

//         <div className='nav-icons d-flex gap-3 align-items-center'>
//           <img src='https://cdn-icons-png.flaticon.com/128/6051/6051092.png' alt='icon1' />
//        <Link href="/signup" >   <img src='https://cdn-icons-png.flaticon.com/128/15494/15494722.png' alt='icon2' /></Link>
//           <img src='https://cdn-icons-png.flaticon.com/128/18695/18695999.png' alt='icon3' />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


"use client";
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoggedDataContext } from '../context/Context';
import "../globals.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loggedUserData } = useContext(LoggedDataContext); 
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 🔁 Conditional navigation logic
  const handleProfileClick = () => {
       console.log(loggedUserData)
   if (loggedUserData) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <div className='navbar-outer d-flex py-3 justify-content-between align-items-center'>
        {/* 🔷 Logo */}
        <div className='logo'>
          <Link href="/">
            <img src='/assets/logo.jpg' alt='logo' className='logo-img' />
          </Link>
        </div>

        {/* 🔷 Hamburger icon for mobile */}
        <div className='hamburger d-md-none' onClick={toggleMenu}>
          <img src='https://cdn-icons-png.flaticon.com/128/1828/1828859.png' alt='menu' />
        </div>

        {/* 🔷 Main Nav Links */}
        <ul className={`nav-links list-unstyled mb-0 ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/bulk-order">Bulk Order</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>

        {/* 🔷 Right-side Icons */}
        <div className='nav-icons d-flex gap-3 align-items-center'>
          {/* Example cart or other icons */}
          <img
            src='https://cdn-icons-png.flaticon.com/128/6051/6051092.png'
            alt='cart-icon'
          />

          {/* 🔁 Profile icon with conditional redirect */}
        {/* 🔁 Profile icon with conditional redirect */}
{loggedUserData && loggedUserData.profilePic ? (
  <img
    src={loggedUserData.profilePic}
    alt="user-profile"
    className="rounded-circle"
    title="Go to Profile"
    onClick={handleProfileClick}
    style={{
      cursor: "pointer",
      width: "35px",
      height: "35px",
      objectFit: "cover",
      borderRadius: "50%",
    }}
  />
) : (
  <img
    src="https://cdn-icons-png.flaticon.com/128/15494/15494722.png"
    alt="profile-icon"
    title="Sign Up / Login"
    onClick={handleProfileClick}
    style={{ cursor: "pointer", width: "30px", height: "30px" }}
  />
)}


          {/* Another icon if needed */}
          <img
            src='https://cdn-icons-png.flaticon.com/128/18695/18695999.png'
            alt='other-icon'
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
