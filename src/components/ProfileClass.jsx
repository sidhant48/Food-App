import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //we create state here
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Profile Class componenet</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default ProfileClass;
