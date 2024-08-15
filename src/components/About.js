
// import React from "react";

// import UserClass from "./UserClass";

// class About extends React.Component {
//     constructor(props){
//         super(props);
  
        
//     }

//   render() {
  
    
//     return (
//       <div>
//         <h1>About</h1>
//         <h2>This is the food chef site built with the help of React</h2>
      
//         <UserClass name="Vansh (class)" location="Jaipur" />

//       </div>
//     );
//   }
// }

// export default About;






import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-page">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Welcome to Food Chef, your ultimate destination for delicious recipes and food inspiration!</p>
        </header>
        <section className="about-content">
          <div className="description">
            <h2>Our Mission</h2>
            <p>We aim to provide you with the best recipes from around the world, curated by top chefs and food enthusiasts.</p>
          </div>
          <div className="profile">
            <h2>Meet Our Team</h2>
            <UserClass name="Vansh (class)" location="Jaipur" />
          </div>
        </section>
        <section className="team-section">
          <h2>Our Amazing Team</h2>
          <div className="team-members">
            <div className="team-member">
             
              <h3>XYZ</h3>
              <p>Head Chef</p>
            </div>
            <div className="team-member">
              
              <h3>ABC</h3>
              <p>Pastry Chef</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </div>
    );
  }
}

export default About;
