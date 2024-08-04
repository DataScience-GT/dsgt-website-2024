//imports
import styles from "./About.module.scss";

import { useState, useEffect } from "react";

// Shreya Dudeja - Co-Director of Marketing
// Lavan Vivekanandasarma - Director of Technology
// Om Rajpal - Co-Director of Events
// Archie Goli - President
// Harsha Gaddipati - Director of Projects
// Nikita Agnihotri - Director of Logistics
// Ryna Lundqvist - Co-Director of Content
// Emma Lawton - Director of Hacklytics/Vice President
// Smera Bhatia - Co-Director of Marketing
// Aditi KoratPallikar - Co-Director of Content
// Dhruv Shah - Co-Director of Events
// Shreiyas Saraf - Director of External Affairs

import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Section from "../../Components/Section";
import SmallHero from "../../Components/SmallHero";
import TeamCard from "../../Components/TeamCard";

import Shreiyas from "../../assets/images/portraits/2022/Shreiyas.png";
import Archie from "../../assets/images/portraits/2024/Archie.jpg";
import Emma from "../../assets/images/portraits/2024/Emma.jpeg";
import Smera from "../../assets/images/portraits/2023/Smera.jpeg";
import Harsha from "../../assets/images/portraits/2024/Harsha.jpeg";
import Lavan from "../../assets/images/portraits/2024/Lavan.jpeg";
import Nikita from "../../assets/images/portraits/2024/Nikita.jpeg";
import Ryan from "../../assets/images/portraits/2024/Ryan.jpeg";
import Shreya from "../../assets/images/portraits/2024/Shreya.jpg";
import Dhruv from "../../assets/images/portraits/2024/Dhruv.jpeg";
import Aditi from "../../assets/images/portraits/2024/Aditi.jpeg";
import Om from "../../assets/images/portraits/2024/Om.jpeg";

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
        <div {...params} id="about-page">
            <Background />
            <Navbar screen_width={windowWidth} />
            <div style={{ marginBottom: "100px" }}></div>
            <SmallHero
                title="Meet The Team"
                desc="The people who make DSGT what it is"
            />
            <Section id="teams" makefull="yes">
                <div className={styles.TeamFlex}>
                    <TeamCard name="Archie Goli" title="President" img={Archie}>
                        The executive board is in charge of the functioning of
                        Data Science at Georgia Tech - from administering the
                        bootcamp, running projects, holding super cool events
                        with companies like Amazon and Accenture as well as our
                        annual data science hackathon, Hacklytics, every year!
                    </TeamCard>
                    <TeamCard
                        name="Shreiyas Saraf"
                        title="Director of External Affairs"
                        img={Shreiyas}
                    >
                        External Affairs is responsible for communicating with
                        corporations for representation at meetings and
                        sponsorship for large club events. All special events
                        such as the Hackathon also fall within the duties of
                        External Affairs.
                    </TeamCard>
                    <TeamCard
                        name="Emma Lawton"
                        title="Director of Hacklytics"
                        img={Emma}
                    >
                        The Hacklytics team works to organize and conduct DSGT’s
                        flagship hackathon every Spring. This is a great way to
                        network with sponsors and develop strong communication
                        and management skills. Plus, you get to meet many new
                        people every year!
                    </TeamCard>
                    <TeamCard
                        name="Nikita Agnihotri"
                        title="Director of Logistics"
                        img={Nikita}
                    >
                        The Logistics team coordinates and manages the logistics
                        for DSGT and our annual flagship hackathon held every
                        Spring. Engaging in this event provides an excellent
                        opportunity to collaborate with sponsors, enhance
                        communication and management proficiencies, as well as
                        connect with a diverse range of individuals each year.
                    </TeamCard>
                    <TeamCard
                        name="Lavan Vivekanandasarma"
                        title="Director of Technology"
                        img={Lavan}
                        wide
                    >
                        The Technology Team specializes in frontend
                        web-development as well as backend systems. We work on
                        the many websites used by DSGT and Hacklytics, most
                        notably being this site and the Membership Portal.
                    </TeamCard>
                    <TeamCard
                        name="Aditi Koratpallikar"
                        title="Co-Director of Content"
                        img={Aditi}
                    >
                        The content team manages Bootcamp and Udemy courses,
                        teaching core data science skills from start to finish.
                        We offer workshops on beginner-friendly data science and
                        machine learning topics, helping members complete
                        professional projects by the end of Bootcamp.
                    </TeamCard>
                    <TeamCard
                        name="Ryan Lundqvist"
                        title="Co-Director of Content"
                        img={Ryan}
                    >
                        The content team manages the Bootcamp and Udemy courses,
                        where we teach our members core data science skills on a
                        start-to-finish journey. We provide workshops on
                        beginner-friendly data science and machine learning
                        topics and help members complete a fully polished and
                        professional data science project by the end of
                        Bootcamp.
                    </TeamCard>
                    <TeamCard
                        name="Shreya Dudeja"
                        title="Co-Director of Marketing"
                        img={Shreya}
                    >
                        The marketing team focuses on social media initiatives,
                        graphic design, newsletters, outreach, and more to
                        increase engagement with DSGT both on and off campus.
                        Our work consists of creating digital and in-person
                        marketing strategies for both DSGT and Hacklytics!
                    </TeamCard>
                    <TeamCard
                        name="Smera Bhatia"
                        title="Co-Director of Marketing"
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
                        name="Dhruv Shah"
                        title="Co-Director of Events"
                        img={Dhruv}
                        wide
                    >
                        The Directors of Events manage event logistics,
                        including room bookings, decor, and food arrangements.
                        Responsibilities include handling invoices, grocery and
                        storage locker runs, and coordinating volunteers. They
                        also liaise with external parties to ensure smooth
                        execution of events, organize booths, workshops, and
                        banners, and create application and RSVP forms.
                    </TeamCard>
                    <TeamCard
                        name="Om Rajpal"
                        title="Co-Director of Events"
                        img={Om}
                        wide
                    >
                        {" "}
                        The Directors of Events manage event logistics,
                        including room bookings, decor, and food arrangements.
                        Responsibilities include handling invoices, grocery and
                        storage locker runs, and coordinating volunteers. They
                        also liaise with external parties to ensure smooth
                        execution of events, organize booths, workshops, and
                        banners, and create application and RSVP forms.
                    </TeamCard>
                    <TeamCard
                        name="Harsha Gaddipati"
                        title="Director of Projects"
                        img={Harsha}
                        wide
                    >
                        The Director of Projects oversees project logistics,
                        regularly meeting with leads for updates and managing
                        the project portal. They set up new projects with
                        professors and industry professionals, ensure around six
                        active projects per semester, and oversee the project
                        application process. Additionally, they maintain the
                        projects spreadsheet.
                    </TeamCard>
                </div>
            </Section>
            <Footer />
        </div>
    );
};
export default About;
