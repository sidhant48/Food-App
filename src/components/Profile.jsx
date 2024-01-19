import React, { useEffect, useState } from "react";

const Profile = () => {
  const [count] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste hello");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h2>Profile componenet</h2>
      <h2>Count:{count}</h2>
    </div>
  );
};

export default Profile;
