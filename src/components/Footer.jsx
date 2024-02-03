import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">
        &copy; 2024 Dish-Dash Food Order App. All rights reserved.
      </p>
      <p className="text-sm">
        Contact us at:{" "}
        <a href="mailto:support@example.com" className="underline">
          dishDash@example.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
