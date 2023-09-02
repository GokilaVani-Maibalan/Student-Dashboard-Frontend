import React from "react";
import user from "../assets/user.png";

export const Header = ({ title }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <img
          src={user}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "white",
            borderRadius: "25px",
          }}
        />{" "}
        <h2>{sessionStorage.getItem("name")}</h2>{" "}
      </div>
    </header>
  );
};
