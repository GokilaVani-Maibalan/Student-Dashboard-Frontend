import { useNavigate } from "react-router-dom";
import learning from "../assets/learning.jpg";
import Button from "react-bootstrap/Button";
import favicon from "../assets/icons8-learning-50.png";

export const Banner = () => {
  let navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner-image">
        <img src={learning} alt="banner" style={{ maxHeight: "450px" }} />
      </div>
      <div className="banner-description">
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {" "}
          <img src={favicon} />
          <br></br>
          <h1 className="banner-name" style={{ color: "white" }}>
            {" "}
            Level Up
          </h1>
        </div>

        <br />
        <h4 className="banner-name" style={{ color: "#8c7569" }}>
          {" "}
          Learning Made Easy
        </h4>
        <p className="banner-exp"> Get Started Today!</p>

        <div className="btn-container">
          <Button
            className="signup"
            style={{
              backgroundColor: "#8c7569",
              border: "none",
              color: "white",

              fontFamily: "sans-serif",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          {"  "}
          <Button
            className="login"
            style={{
              backgroundColor: "#8c7569",
              border: "none",
              color: "white",

              fontFamily: "sans-serif",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};
