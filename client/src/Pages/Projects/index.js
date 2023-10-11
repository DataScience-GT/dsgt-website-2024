import styles from "./Projects.module.scss";

import { useState, useEffect } from "react";

import { submitProjectInfo } from "../../api/ProjectApps";

import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SmallHero from "../../Components/SmallHero";
import Section from "../../Components/Section";
import InputField from "../../Components/InputField";
import InlineRadioInput from "../../Components/InlineRadioInput/InlineRadioInput";

const Projects = (params) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [error, setError] = useState("");

    useEffect(() => {
        //show all page
        document.getElementsByTagName("body")[0].style.overflow = "auto";

        //handle the resizing of the window to render desktop vs mobile elements
        function handleResize(e) {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    }, []);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [fields, setFields] = useState([]);
    const [fieldOther, setFieldOther] = useState("");
    const [description, setDescription] = useState("");
    const [numStudents, setNumStudents] = useState(0);
    const [term, setTerm] = useState("");
    const [compensation, setCompensation] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [skills, setSkills] = useState([]);
    const [skillOther, setSkillOther] = useState("");
    const [hosts, setHosts] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const handleChange_name = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setName(e.target.value);
    };

    const handleChange_location = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setLocation(e.target.value);
    };

    const handleChange_hosts = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setHosts(e.target.value);
    };

    const handleChange_contactEmail = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setContactEmail(e.target.value);
    };

    const handleChange_field = (e) => {
        if (e.currentTarget.checked && e.currentTarget.id) {
            if (!fields.includes(e.currentTarget.id)) {
                setFields([...fields, e.currentTarget.id]);
            }
        } else {
            setFields(fields.filter((id) => id !== e.currentTarget.id));
        }
    }

    const handleChange_fieldOther = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setFieldOther(e.target.value);
    }

    const handleChange_description = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setDescription(e.target.value);
    };

    const handleChange_numStudents = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setNumStudents(e.target.value);
    };

    const handleChange_compensation = (e) => {
        setCompensation(e.target.value);
    };

    const handleChange_term = (e) => {
        setTerm(e.target.id);
    }

    const handleChange_startDate = (e) => {
        setStartDate(e.target.value);
    };

    const handleChange_skills = (e) => {
        if (e.currentTarget.checked) {
            if (!skills.includes(e.currentTarget.id)) {
                setSkills([...skills, e.currentTarget.id]);
            }
        } else {
            setSkills(skills.filter((id) => id !== e.currentTarget.id));
        }
    }

    const handleChange_skillOther = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
        setSkillOther(e.target.value);
    }

    const handle_onSubmit = async (e) => {

        console.log(name, location, hosts, contactEmail, fields, fieldOther,
            description, numStudents, term, compensation, startDate, skills, skillOther);

        if (!(
            name && location && hosts && contactEmail && fields && description 
            && numStudents && term && compensation
            && startDate && skills
        )) {
            setError("Missing one or more required fields.");
            return;
        } else if (fields.length < 1 || skills.length < 1) {
            setError("You must select at least one related field and one desired skill.");
            return;
        }

        await submitProjectInfo(
            name,
            location,
            hosts,
            contactEmail,
            fields.join(", "),
            fieldOther,
            description,
            numStudents,
            term,
            compensation,
            startDate,
            skills.join(", "),
            skillOther,
            (data) => {
                if (data.ok) {
                    window.location.href = "/";
                }
            }
        ).catch((err) => {
            setError(err.message)
        });
    };

    return (
        <div {...params} id={styles.ProjectsPageContainer}>
            <Navbar screen_width={windowWidth} />
            <Background />
            <div className={styles.ProjectsPage}>
                <SmallHero
                    title="Submit a Project Application"
                    desc="Get students matched with your project."
                />
                <Section id="project-application" makefull="yes">
                    <div className={styles.ProjectFormFlex}>
                        <InputField
                            type="text"
                            placeholder="Project Name"
                            width="100%"
                            onChange={handleChange_name}
                        />
                        <InputField
                            type="text"
                            placeholder="Project Location (building/room if applicable)"
                            width="100%"
                            onChange={handleChange_location}
                        />
                        <InputField
                            type="text"
                            placeholder="Project Hosts or Authors"
                            width="100%"
                            onChange={handleChange_hosts}
                        />
                        <InputField
                            type="text"
                            placeholder="Project Contact Email"
                            width="100%"
                            onChange={handleChange_contactEmail}
                        />
                        <div className={styles.Radio}>
                            <p>Related Fields of Research</p>
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="AI/Machine Learning"
                                value="1"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("AI/Machine-Learning-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Financial"
                                value="2"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Financial-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Biomedical"
                                value="3"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Biomedical-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Chemical"
                                value="4"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Chemical-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Pharmaceutical"
                                value="5"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Pharmaceutical-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Electrical"
                                value="6"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Electrical-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Materials"
                                value="7"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Materials-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Physics/Quantum"
                                value="8"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Physics/Quantum-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Other"
                                value="9"
                                name="Option"
                                onChange={handleChange_field}
                                checked={fields.includes("Other-Option")}
                            />
                            <input
                                className={fields.includes("Other-Option") ? "" : styles.OtherInactive}
                                type={"text"}
                                placeholder=" "
                                autoComplete="other"
                                onChange={handleChange_fieldOther}
                            />
                        </div>
                        <InputField
                            type="text"
                            placeholder="Start date (MM/DD/YYYY)"
                            width="50%"
                            onChange={handleChange_startDate}
                        />
                        <InputField
                            type="textarea"
                            placeholder="Project Description"
                            width="100%"
                            onChange={handleChange_description}
                        />
                        <InputField
                            type="number"
                            placeholder="Desired number of students"
                            width="50%"
                            onChange={handleChange_numStudents}
                        />
                        <InputField
                            type="number"
                            placeholder="Estimated compensation (hourly)"
                            width="50%"
                            onChange={handleChange_compensation}
                        />
                        <div className={styles.Radio}>
                            <p>Project Term Length</p>
                            <InlineRadioInput
                                color="#fff"
                                label="1 month"
                                value="1"
                                name="Option"
                                onChange={handleChange_term}
                                checked={term === "1-month-Option"}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="6 months"
                                value="2"
                                name="Option"
                                onChange={handleChange_term}
                                checked={term === `6-months-Option`}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="1 year"
                                value="3"
                                name="Option"
                                onChange={handleChange_term}
                                checked={term === "1-year-Option"}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="More than 1 year"
                                value="4"
                                name="Option"
                                onChange={handleChange_term}
                                checked={term === "More-than-1-year-Option"}
                            />
                        </div>
                        <div className={styles.Radio}>
                            <p>Desired Skills</p>
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Databases"
                                value="1"
                                name="Option"
                                onChange={handleChange_skills}
                                checked={skills.includes("Databases-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Information Retrieval"
                                value="2"
                                name="Option"
                                onChange={handleChange_skills}
                                checked={skills.includes("Information-Retrieval-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Graphics"
                                value="3"
                                name="Option"
                                onChange={handleChange_skills}
                                checked={skills.includes("Graphics-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Data-Analysis"
                                value="4"
                                name="Option"
                                onChange={handleChange_skills}
                                checked={skills.includes("Data-Analysis-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Web-Developing"
                                value="5"
                                name="Option"
                                onChange={handleChange_skills}
                                checked={skills.includes("Web-Developing-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Machine/Model Training"
                                value="6"
                                name="Option"
                                onChange={handleChange_skills}
                                checked={skills.includes("Machine/Model-Training-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Theory/Mathematics"
                                value="7"
                                name="Option"
                                onChange={handleChange_skills}
                                checked={skills.includes("Theory/Mathematics-Option")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Other"
                                value="8"
                                name="Option2"
                                onChange={handleChange_skills}
                                checked={skills.includes("Other-Option2")}
                            />
                            <input
                                className={skills.includes("Other-Option2") ? "" : styles.OtherInactive}
                                type={"text"}
                                placeholder=" "
                                autoComplete="other"
                                onChange={handleChange_skillOther}
                            />
                        </div>
                        <InputField
                            type={"submit"}
                            placeholder="Submit"
                            width="fit-content"
                            onClick={handle_onSubmit}
                        />
                        <p className={styles.Error}>
                            {error}
                        </p>
                    </div>
                </Section>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;