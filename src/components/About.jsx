import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is namaste react course 🚀</p>
        {/* <ProfileClass name={"Sidhant"} xyz="abc" /> */}
        <Profile />
      </div>
    );
  }
}

export default About;
