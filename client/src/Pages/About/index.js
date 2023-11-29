//imports
import styles from "./About.module.scss";

import { useState, useEffect } from "react";

import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import SmallHero from "../../Components/SmallHero";
import TeamCard from "../../Components/TeamCard";

import Shreiyas from "../../assets/images/portraits/2022/Shreiyas.png";
import Adith from "../../assets/images/portraits/2023/Adith.jpg";
import Archie from "../../assets/images/portraits/2023/Archie.jpg";
import Aryan from "../../assets/images/portraits/2023/Aryan.jpg";
import Bradley from "../../assets/images/portraits/2023/Bradley.jpg";
import Emma from "../../assets/images/portraits/2023/Emma.jpeg";
import Krishi from "../../assets/images/portraits/2023/Krishi.jpg";
import Pennon from "../../assets/images/portraits/2023/Pennon.png";
import Smera from "../../assets/images/portraits/2023/Smera.jpeg";
import Vicente from "../../assets/images/portraits/2023/Vicente.png";

const About = (params) => {
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
    return (
        <div {...params} className={styles.AboutPage}>
            <Background />
            <Navbar screen_width={windowWidth} />
            <SmallHero
                title="Meet The Team"
                desc="The people who make DSGT what it is"
            />
            <Section id="teams" makefull="yes">
                <div className={styles.TeamFlex}>
                    <TeamCard
                        name="Krishi Manek"
                        title="President"
                        img={Krishi}
                    >
                        The executive board is in charge of the functioning of 
                        Data Science at Georgia Tech - from administering the bootcamp, running
                        projects, holding super cool events with companies like
                        Amazon and Accenture as well as our annual data science
                        hackathon, Hacklytics, every year!
                    </TeamCard>
                    <TeamCard
                        name="Shreiyas Saraf"
                        title="Director of External Affairs"
                        img={Shreiyas}
                    >
                        External Affairs is responsible for communicating with corporations 
                        for representation at meetings and sponsorship for large club events. 
                        All special events such as the Hackathon also fall within the duties 
                        of External Affairs.
                    </TeamCard>
                    <TeamCard
                        name="Archie Goli"
                        title="Co-Director of Hacklytics"
                        img={Archie}
                    >
                        The Hacklytics team works to organize and conduct DSGT’s
                        flagship hackathon every Spring. This is a great way to
                        network with sponsors and develop strong communication
                        and management skills. Plus, you get to meet many new
                        people every year!
                    </TeamCard>
                    <TeamCard
                        name="Emma Lawton"
                        title="Co-Director of Hacklytics"
                        img={Emma}
                    >
                        The Hacklytics team works to organize and conduct DSGT’s
                        flagship hackathon every Spring. This is a great way to
                        network with sponsors and develop strong communication
                        and management skills. Plus, you get to meet many new
                        people every year!
                    </TeamCard>
                    <TeamCard
                        name="Vicente Miranda"
                        title="Director of Technology"
                        img={Vicente}
                        wide
                    >
                        The Technology Team specializes in frontend
                        web-development as well as backend systems. We work on
                        the many websites used by DSGT and Hacklytics, most
                        notibly being this site and the Membership Portal.
                    </TeamCard>
                    <TeamCard
                        name="Adith Devakonda"
                        title="Director of Content"
                        img={Adith}
                    >
                        The content team manages the Bootcamp and Udemy courses,
                        where we teach our members core data science skills on a
                        start-to-finish journey. We provide workshops on
                        beginner-friendly data science and machine learning
                        topics and help members complete a fully polished and
                        professional data science project by the end of
                        Bootcamp. We are also actively working to improve our
                        course materials, our website, and students' learning
                        experience through an exciting collaboration with
                        Deepnote.
                    </TeamCard>
                    <TeamCard
                        name="Pennon Shue"
                        title="Director of Marketing"
                        img={Pennon}
                    >
                        The marketing team focuses on social media initiatives,
                        graphic design, newsletters, outreach, and more to
                        increase engagement with DSGT both on and off campus.
                        Our work consists of creating digital and in-person
                        marketing strategies for both DSGT and Hacklytics!
                    </TeamCard>
                    <TeamCard
                        name="Smera Bhatia"
                        title="Director of Marketing"
                        img={Smera}
                        wide
                    >
                        The marketing team focuses on social media initiatives,
                        graphic design, newsletters, outreach, and more to
                        increase engagement with DSGT both on and off campus.
                        Our work consists of creating digital and in-person
                        marketing strategies for both DSGT and Hacklytics!
                    </TeamCard>
                    <TeamCard
                        name="Bradley Friedrich"
                        title="Director of Internal Affairs"
                        img={Bradley}
                        top
                    >
                        The Internal Affairs Team manages membership moderation
                        and develops ideas to improve the membership experience.
                        We also act as an “internal health check” for the club
                        by analyzing club data to see where DSGT is succeeding
                        and where it could do better.
                    </TeamCard>
                    <TeamCard
                        name="Aryan Verma"
                        title="Director of Finance"
                        img={Aryan}
                        zoom
                        top
                    >
                        The Finance Team's focus is to most efficiently utilize
                        DSGT's resources. We focus on fundraising, budgeting,
                        and keeping a check on the club's spending. All of these
                        jobs are essential to develop management skills and are
                        a great way to connect with individuals in all types of
                        industries beyond just data science and technology.
                    </TeamCard>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
export default About;
