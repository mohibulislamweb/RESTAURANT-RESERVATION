import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div 
          className="container" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "50px",
            flexWrap: "wrap" 
          }}
        >
          {}
          <div className="banner" style={{ flex: "1 1 450px", maxWidth: "550px" }}>
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Authentic Bangladeshi Flavors, Made with Love.</p>
            </div>
            <p className="mid">
              Welcome to TastyBites, where traditional Bangladeshi heritage meets rich, authentic flavor. We are passionate about serving delicious, hygienic, and home-style dishes made from fresh local ingredients and natural spices. From our special mouth-watering Biryani to traditional daily meals, every bite brings you the genuine taste of Bangladeshi hospitality.
            </p>
           <Link 
  to={"/"} 
  style={{ 
    display: "inline-block", 
    marginTop: "35px"
  }}
>
  Explore Menu{" "}
  <span>
    <HiOutlineArrowRight />
  </span>
</Link>
          </div>

          {}
          <div className="banner" style={{ flex: "1 1 380px", maxWidth: "420px" }}>
            <img 
              src="about.png" 
              alt="about" 
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }} 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;