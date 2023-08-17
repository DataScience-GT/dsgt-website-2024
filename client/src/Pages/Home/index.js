//imports
import styles from "./Home.module.scss";

import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

import Background from "../../Components/Background";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Section from "../../Components/Section";
import Major from "../../Components/Text/Major";
import Mini from "../../Components/Text/Mini";
import Minor from "../../Components/Text/Minor";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";

//import chart data
import { ClassData, MajorData } from "../../assets/Data/demographics";

//import images
import dlp4 from "../../assets/images/logos/dlp4.png";
import furnichanter from "../../assets/images/logos/furnichanter_logo.jpg";
import birdclef from "../../assets/images/logos/birdclef.png";
import gtaa from "../../assets/images/logos/gtaa.png";
import shepcenter from "../../assets/images/logos/shepcenter.jpeg";

import slide1 from "../../assets/images/slides/slide1.jpg";
import slide6 from "../../assets/images/slides/slide6.jpg";
import slide7 from "../../assets/images/slides/slide7.jpg";
import slide8 from "../../assets/images/slides/slide8.jpg";
import slide2 from "../../assets/images/slides/2023/slide2.JPG";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import LearnMore from "../../Components/LearnMore";
import EventCard from "../../Components/EventCard";
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = (params) => {
    //the width of the window
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        //show all page
        document.getElementsByTagName("body")[0].style.overflow = "auto";

        //handle the resizing of the window to render desktop vs mobile elements
        function handleResize(e) {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    }, []);

    let chartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let sum = 0;
                        for (var x of context.dataset.data) {
                            sum += x;
                        }
                        let percent =
                            Math.round((context.parsed * 1000) / sum) / 10;
                        if (context.parsed !== percent) {
                            return ` ${context.label}: ${context.parsed} (${percent}%)`;
                        }
                        return ` ${context.label}: ${context.parsed}%`;
                    },
                },
            },
        },
        color: "#fff",
    };

    return (
        <div {...params} id="home-page">
            <Background />
            {/* load the navbar */}
            <Navbar screen_width={windowWidth} page="home" />
            <Hero screen_width={windowWidth} />
            <Section id="about">
                <div
                    className={styles.FlexRow}
                    style={{ flexWrap: "wrap-reverse" }}
                >
                    <div className={styles.SectionHalf}>
                        <Major type="a">About Us</Major>
                        <Mini>
                            As the largest student-run data science organization
                            on campus, we are dedicated to developing technical
                            skills in data science through various activities
                            and events such as club projects, workshops, guest
                            speakers and professors. Our organization serves as
                            a platform for undergraduate and graduate students
                            of all majors at Georgia Tech to learn about and
                            practice data science and analytics. We are a
                            focused club with three main components: projects,
                            bootcamps, and Hacklytics.
                        </Mini>
                        <br />
                        <Mini>
                            <LearnMore to="about">Meet the Team</LearnMore>
                        </Mini>
                    </div>
                    <div className={styles.SectionHalf}>
                        <img
                            className={styles.SectionImage}
                            src={slide2}
                            alt="The DSGT Exec Team"
                        />
                    </div>
                </div>
            </Section>
            <Section id="stats">
                <Major type="b">Who We Are</Major>
                <Mini>
                    In the spring 2023 semester, we had 504 dedicated DSGT
                    members. Here's how we look like in class and major demographics:
                </Mini>
                <br></br>
                <div className={styles.ChartsFlex}>
                    <div className={styles.ChartCard}>
                        <Minor>CLASS DEMOGRAPHICS</Minor>
                        <div className={styles.PieChart}>
                            <Pie data={ClassData} options={chartOptions} />
                        </div>
                    </div>
                    <div className={styles.ChartCard}>
                        <Minor type="b">MAJOR DEMOGRAPHICS</Minor>
                        <div className={styles.PieChart}>
                            <Pie data={MajorData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </Section>
            <Section id="bootcamp">
                <div
                    className={styles.FlexRow}
                    style={{ flexWrap: "wrap-reverse" }}
                >
                    <div className={styles.SectionHalf}>
                        <Major type="a">Bootcamp</Major>
                        <Mini>
                            We teach our members core data science skills
                            through a bootcamp that takes our members on a
                            start-to-finish journey, touching on essentials such
                            as cleaning data to more advanced concepts, such as
                            feature engineering. Workshops are project-based and
                            all members leave bootcamp with a fully polished,
                            professional data science project.
                        </Mini>
                        <br />
                        <Mini>
                            <LearnMore to="https://dsgtbootcamp.netlify.app/">
                                Learn more at our Bootcamp site
                            </LearnMore>
                        </Mini>
                    </div>
                    <div className={styles.SectionHalf}>
                        <img
                            className={styles.SectionImage}
                            src={slide8}
                            alt="Hacklytics"
                        />
                    </div>
                </div>
            </Section>
            <Section id="hacklytics">
                <div className={styles.FlexRow}>
                    <div className={styles.SectionHalf}>
                        <img
                            className={styles.SectionImage}
                            src={slide6}
                            alt="Hacklytics"
                        />
                    </div>
                    <div className={styles.SectionHalf}>
                        <Major type="b">Hacklytics</Major>
                        <Mini>
                            Hacklytics is Georgia Tech’s 36 hour datathon
                            brought to you by Data Science at Georgia Tech,
                            Georgia Tech's largest community of student data
                            scientists! Our goal is to give students an
                            opportunity to get hands-on experience with data
                            science, collaborating on projects that make a real
                            impact. As the world is becoming increasingly
                            dependent on data, our theme for Hacklytics 2024 is
                            "Around the World". We look forward to seeing
                            innovative projects inspired by using data as
                            building blocks for a better world. Hacklytics 2024
                            will be held in an in person format between Feburary 9
                            through 11, 2024.
                        </Mini>
                        <br />
                        <Mini>
                            <LearnMore to="https://hacklytics.io">
                                Learn more about the upcoming Hacklytics 2024
                            </LearnMore>
                        </Mini>
                    </div>
                </div>
            </Section>
            <Section id="projects">
                <Major type="a">Projects</Major>
                <Mini>
                    Keeping with our motto, “data science with a focus on the
                    community,” projects enable members to give back to the
                    community while gaining hands-on data science experience. We
                    showcase our projects each semester through our project
                    expo. Here are some of the projects we are currently working
                    on:
                </Mini>
                <div className={styles.ProjectCards}>
                    <Card img={dlp4} heading="Deep Learning Playground" linkUrl="https://datasciencegt-dlp.com/">
                        Deep Learning Playground is a user-friendly web application 
                        designed to provide an interactive and accessible introduction 
                        to the world of Machine Learning and Deep Learning.
                    </Card>
                    <Card img={birdclef} heading="Kaggle birdCLEF">
                        BirdCLEF is a cutting-edge data science competition held on the 
                        Kaggle platform, with a primary objective of advancing the field 
                        by crafting and refining machine learning algorithms that possess 
                        the capability to detect and classify avian 
                        vocalizations within uninterrupted soundscape data. 
                    </Card>
                    <Card img={gtaa} heading="GT Athletics">
                        The GT Basketball Scheduling Assistant project aims to enhance 
                        Georgia Tech basketball's prospects of consistently making it to 
                        the NCAA championship by strategically managing the selection of
                        their non-conference opponents.
                    </Card>
                    <Card img={shepcenter} heading="Medical Data Analysis w/ REAR Lab">
                        This project is an ambitious endeavor aimed at harnessing the power 
                        of data analysis to gain crucial insights from the SCIMS Dataset, 
                        a cornerstone of spinal cord injury research since 1973.
                    </Card>
                    <Card img={furnichanter} heading="Furnichanter" linkUrl="https://nucleusfox.github.io/furnichanter.html">
                        Furnichanter is an innovative project that seamlessly combines technology 
                        with interior design. It aims to empower users with a unique experience 
                        by enabling them to effortlessly search for furniture through images and 
                        generate custom pieces from text descriptions using advanced AI models.
                    </Card>
                </div>
            </Section>
            <Section id="getinvolved">
                <Major type="b">Get Involved</Major>
                <Mini>Check out these opportunities to get involved:</Mini>
                <div className={styles.Cards}>
                    <EventCard
                        img={slide1}
                        heading="Join DSGT"
                        button_text="Learn More"
                        button_to="https://member.datasciencegt.org"
                    >
                        Take part in the largest data science organization at
                        Georgia Tech!
                    </EventCard>
                    <EventCard
                        img={slide7}
                        heading="Apply for Leadership Positions"
                        button_text="Learn More"
                        button_to="https://member.datasciencegt.org/portal/forms"
                    >
                        Join one of the many executive teams that help run DSGT!
                    </EventCard>
                    <EventCard
                        img={slide6}
                        heading="Hacklytics"
                        when="feb 9-11 2024"
                        button_text="Learn More"
                        button_to="#hacklytics"
                    >
                        Hacklytics is Georgia Tech’s 36 hour datathon brought to
                        you by Data Science at Georgia Tech, Georgia Tech's
                        largest community of student data scientists!
                    </EventCard>
                </div>
            </Section>
            <Footer screen_width={windowWidth} />
        </div>
    );
};
export default Home;
