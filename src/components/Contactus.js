// const Contactus=() => {
  
//     return(
//         <div>
//             <h1> hii you can contact us on 7891009682</h1>
//         </div>
//     )
// }

// export default Contactus;



import React from 'react';


const Contactus = () => {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Phone: <a href="tel:7891009682">7891009682</a></p>
                <p>Email: <a href="mailto:vanshrawat012345@gmail.com">info@cheffood.com</a></p>
                <div className="social-media">
                    <a href="https://www.instagram.com/VANSH_0610_"><img src="svg.svg" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/VANSH_0610_"><img src="twitter-icon.png" alt="Twitter" /></a>
                    <a href="https://www.instagram.com/VANSH_0610_"><img src="https://icons8.com/icon/PxI9IPCyBAOD/instagram-reels" alt="Instagram" /></a>
                </div>
            </div>

            <div className="contact-form">
                <h2>Send us a message</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contactus;
