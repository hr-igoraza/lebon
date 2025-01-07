import React from "react";
import "./heroSection.css";
import Button from "../../components/buttons/Button";
import NavBar from "../../components/navBar/NavBar";
const HeroSection = () => {
  return (
    <>

      <section className="hero-section">

        <div className="hero-content">
          <p className="overline mt-5">Best Cakes In Town</p>
          <h1 className="taste my-3">
            Taste the rich flavor of high quality CAKES
          </h1>
          <p className="bottomline my-3">
            We only use the five star quality for our menu, come and get the
            richness in every food we serve.
          </p>
          <Button
            className={"button "}
            stroke={"#000000"}
            divClass={`bt-container txt-black bt-ct-yellow mt-6`}
          >
            GO TO MENU
          </Button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
