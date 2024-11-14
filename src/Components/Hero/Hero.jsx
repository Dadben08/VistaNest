import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import Typical from "react-typical";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper" id="hero">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"

            }}
            >

              VistaNest 
            </motion.h1>
            <motion.h1 className="primaryText2"
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
            duration: 2,
            type: "spring"}}
            >
              <Typical className="Type font-size-40"
              style={{ color: "#ffb36c" }}
                steps={[
                  
                  "Most Sweetable...", 5000,
                  "Most Safest...", 5000,
                  "Most Affordable...", 5000,
                  "Most Secure...", 5000,
                  "Most Reliable...", 5000,
                  "Most Trusted...", 5000,
                  "Most Luxurious...", 5000
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span className="secondaryText">Discover your next home.</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker className="icon" color="var(--blue)" size={40} />
            <input type="text" placeholder="Enter your location" />
            <button className="button">Search</button> 

          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span> 
                </span>
              <span >Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp start={1950} end={2000} duration={4} />
              <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
            <span><CountUp  end={28} />
              <span>+</span></span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div className="image-container"
           initial={{x: "7rem", opacity: 0}}
           animate={{x: 0, opacity: 1}}
           transition={{
             duration: 2,
             type: "spring"
           }}
          >
            <img src="./hero-image2.jpg" alt="hero" className="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
