import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
      }
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/vansh0610");
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo: {
          name: json.name || "Vansh Rawat",
          location: json.location || "Jaipur",
          avatar_url: json.avatar_url ,
        }
      });
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  }
componentWillUnmount(){
    console.log("component will unmount");
    
}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}

export default UserClass;
