//imports
import styles from "./Hero.module.scss";

import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Mini from "../Text/Mini";
import LearnMore from "../LearnMore";

import hero3 from "../../assets/images/blobs/hero3--export.svg";
import hero2mobile from "../../assets/images/blobs/hero2-mobile--export.svg";
import herologo from "../../assets/images/dsgt/square-logo.png";

/**
 * The hero (landing view) of the page
 * @param {*} params
 * @returns
 */
const Hero = (params) => {
    const [windowWidth, setWindowWidth] = useState(params.screen_width);
    //the width threshold for mobile elements
    const WIDTH_THRESHOLD = 1000;

    useEffect(() => {
        setWindowWidth(params.screen_width);
    }, [params.screen_width]);

    //take into account the page width
    return (
        <div {...params} id="hero" className={styles.hero}>
            {windowWidth >= WIDTH_THRESHOLD ? (
                <img className={styles.HeroBlob} src={hero3} alt="blob" />
            ) : (
                <img className={styles.HeroBlob} src={hero2mobile} alt="blob" />
            )}
            <div className={styles.HeroWrapper}>
                <div className={styles.HeroLeft}>
                    {/* <img className="hero-logo" src={herologo} /> */}
                    <h1 className={styles.HeroMajor}>
                        Data Science
                        <br />@ Georgia Tech
                    </h1>
                    <p className={styles.HeroMinor2}>Now accepting members Spring 2024!</p>
                    {/* <h1 className="hero-minor">Georgia Tech's largest data science organization</h1> */}
                    <div className={styles.HeroSep}></div>
                    {/* <button type="button" className="apply-button">Apply</button> */}
                    <div className={styles.AcceptingMembers}>
                        {/* <p className={styles.New}>
                            Now accepting members Fall 2023. Register 
                            {" "}
                            <a href="https://member.datasciencegt.org/register" target="_blank">
                                here.
                            </a>
                        </p> */}
                    </div>
                    <HashLink className={styles.LearnMore} smooth to="#about">
                        Learn More<span className={styles.arrow}>→</span>
                    </HashLink>
                    <HashLink className={styles.LearnMore} smooth to="/projects">
                        Advertise Research<span className={styles.arrow}>→</span>
                    </HashLink>
                    {/* <Mini>
                        <LearnMore to="/projects">Create a project application.</LearnMore>
                    </Mini> */}
                </div>
                <div className={styles.HeroRight}>
                    <img
                        className={styles.HeroLogo}
                        src={herologo}
                        alt="DSGT logo"
                    />
                </div>
            </div>
        </div>
    );
};
export default Hero;
