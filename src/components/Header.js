
// import React, { useState,useEffect } from 'react';
// import { LOGO_URL } from "../utils/constants";
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// const Header = () => {
//   const [btnName, setBtnName] = useState("Log In");

//   const handleButtonClick = () => {
//     setBtnName((prevBtnName) => (prevBtnName === "Log In" ? "Log Out" : "Log In"));
//     console.log(btnName);
//   };

//   useEffect(()=>{

//   },[]);

//   // subscribing to the store using the selector

//   const cartItems = useSelector((store) =>store.cart.items );

//   return (
//     <div className="header">
//       <div className="logo">
//         <img src={LOGO_URL} alt="Logo" />
//       </div>
//       <div className="nav-item">
//         <ul>
//           <li><Link to="/">Home</Link> </li>
//           <li> <Link to="/aboutus"   >AboutUs</Link> </li>
//           <li> <Link to="/contactus" >Contact Us</Link> </li>
//        <li> <Link to="/cart">Cart ({cartItems.length} items) </Link> </li>   
//           <button className="login" onClick={handleButtonClick}>
//             {btnName}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;









import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Log In');

  const handleButtonClick = () => {
    setBtnName((prevBtnName) => (prevBtnName === 'Log In' ? 'Log Out' : 'Log In'));
  };

  useEffect(() => {
    // This effect runs once after the initial render
    console.log('Header component mounted');
  }, []);

  // Subscribing to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <button className="login" onClick={handleButtonClick}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
