import React from "react";
import "./hero-section.css";
import Button from "../buttons/Button";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="best">Best Cakes In Town</p>
          <h1 className="taste my-3">Taste the rich flavor of high quality CAKES</h1>
          <p className="serve">
            We only use the five star quality for our menu, come and get the
            richness in every food we serve.
          </p>

          <Button className={"button-glow"} divClass={`button-action my-5`}>GO TO MENU</Button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
