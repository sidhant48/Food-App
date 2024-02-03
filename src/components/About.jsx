import React from "react";
import { Outlet } from "react-router-dom";
// import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">
                Logged In User:{loggedInUser}
              </h1>
            )}
          </UserContext.Consumer>
        </div>
        <p className="text-2xl font-bold">Other details coming soon!!!</p>
        {/* <ProfileClass name={"Sidhant"} xyz="abc" /> */}
        <Profile />
      </div>
    );
  }
}

export default About;
