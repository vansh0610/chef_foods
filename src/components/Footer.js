// // Footer component for footer section
// const Footer = () => {
 
//     return (
//         <div className="footer">

//         </div>
//     )
// };
  
//   export default Footer;







import React from 'react';

import { LOGO_URL } from '../utils/constants';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <h2>Company</h2>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Chef Food One</a></li>
                    <li><a href="#">Chef Food Instamart</a></li>
                    <li><a href="#">Chef Food Genie</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Contact us</h2>
                <ul>
                    <li><a href="#">Help & Support</a></li>
                    <li><a href="#">Partner with us</a></li>
                    <li><a href="#">Ride with us</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>We deliver to:</h2>
                <ul>
                    <li>Bangalore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <li>589 cities</li>
                </ul>
            </div>
            <div className="footer-section">
                <h2>Legal</h2>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Investor Relations</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <div className="footer-logo">
                    <img src={LOGO_URL} alt="Chef Food" />
                </div>
                <p>© 2024 Vansh Technologies Pvt. Ltd</p>
            </div>
        </div>
    );
};

export default Footer;
