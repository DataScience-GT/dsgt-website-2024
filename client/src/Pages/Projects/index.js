import styles from "./Projects.module.scss";

import { useState, useEffect } from "react";

import { submitProjectInfo } from "../../api/ProjectApps";
import imageCompressor from 'image-compressor';

import Background from "../../Components/Background";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SmallHero from "../../Components/SmallHero";
import Section from "../../Components/Section";
import InputField from "../../Components/InputField";
import InlineRadioInput from "../../Components/InlineRadioInput/InlineRadioInput";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = (params) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [FR, setFR] = useState(new FileReader());
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
    const [showOther1, setShowOther1] = useState(false);
    const [showOther2, setShowOther2] = useState(false);
    const [imgData, setImgData] = useState("");

    useEffect(() => {
        FR.addEventListener("load", loadImageData);
        return () => {
            FR.removeEventListener("load", loadImageData);
        };
    }, []);

    const loadImageData = (e) => {
        if (e.target && e.target.result) {
            setImgData(e.target.result.toString());
        }
    };

    const handleFields = (e) => {
        if (e.currentTarget.checked && e.currentTarget.id) {
            if (!fields.includes(e.currentTarget.id)) {
                setFields([...fields, e.currentTarget.id]);
            }
        } else {
            setFields(fields.filter((id) => id !== e.currentTarget.id));
        }
    }

    const handleSkills = (e) => {
        if (e.currentTarget.checked && e.currentTarget.id) {
            if (!skills.includes(e.currentTarget.id)) {
                setSkills([...skills, e.currentTarget.id]);
            }
        } else {
            setSkills(skills.filter((id) => id !== e.currentTarget.id));
        }
    }

    /**
     * Submits project infor based on form params.
     */
    const handleSubmit = async () => {
        if (!(
            name && location && hosts && contactEmail && fields && description 
            && numStudents && term && compensation
            && startDate && skills && imgData
        )) {
            setError("Missing one or more required fields.");
            setSuccess("");
            return;
        } else if (fields.length < 1 || skills.length < 1) {
            setError("You must select at least one related field and one desired skill.");
            setSuccess("");
            return;
        }

        console.log(name, location, hosts, contactEmail, fields.join(", "), fieldOther,
            imgData, description, numStudents, term, compensation, startDate, skills.join(", "),
            skillOther);

        await submitProjectInfo(
            name,
            location,
            hosts,
            contactEmail,
            fields.join(", "),
            fieldOther,
            imgData,
            description,
            numStudents,
            term,
            compensation,
            startDate,
            skills.join(", "),
            skillOther,
            (data) => {
                if (data.ok) {
                    setSuccess("Successfully submitted! " + name, location, hosts, contactEmail, fields, fieldOther,
                    imgData, description, numStudents, term, compensation, startDate, skills,
                    skillOther);
                    setError("");
                }
            }
        ).catch((err) => {
            setError(err.message);
            setSuccess("");
        });
    };

    return (
        <div {...params} id={styles.ProjectsPageContainer}>
            <Navbar screen_width={windowWidth} />
            <Background />
            <div className={styles.ProjectsPage}>
                <SmallHero
                    title="Submit a Project Application"
                    desc="Get students matched with your project. DSGT will filter these projects and,
                    if you have contacted us, will post your proejct exclusively to our club members
                    on our portal alongside relevant
                    project application questions."
                />
                <Section id="project-application" makefull="yes">
                    <div className={styles.ProjectFormFlex}>
                        <InputField
                            type="text"
                            placeholder="Project Name"
                            extraPlaceholder="e.g. ML Techniques"
                            width="100%"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <InputField
                            type="text"
                            placeholder="Project Location (building/room if applicable)"
                            extraPlaceholder="e.g. Klaus 1440"
                            width="100%"
                            onChange={(e) => {
                                setLocation(e.target.value);
                            }}
                        />
                        <InputField
                            type="text"
                            placeholder="Project Hosts or Authors"
                            extraPlaceholder="e.g. Vicente Miranda"
                            width="100%"
                            onChange={(e) => {
                                setHosts(e.target.value);
                            }}
                        />
                        <InputField
                            type="text"
                            placeholder="Project Contact Email"
                            extraPlaceholder="e.g. vmiranda6@gatech.edu"
                            width="100%"
                            onChange={(e) => {
                                setContactEmail(e.target.value);
                            }}
                        />
                        <div className={styles.Radio}>
                            <p className={styles.RadioP}>Related Fields of Research</p>
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="AI/Machine Learning"
                                value="1"
                                onChange={handleFields}
                                checked={fields.includes("AI/Machine Learning")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Financial"
                                value="2"
                                onChange={handleFields}
                                checked={fields.includes("Financial")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Biomedical"
                                value="3"
                                onChange={handleFields}
                                checked={fields.includes("Biomedical")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Chemical"
                                value="4"
                                onChange={handleFields}
                                checked={fields.includes("Chemical")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Pharmaceutical"
                                value="5"
                                onChange={handleFields}
                                checked={fields.includes("Pharmaceutical")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Electrical"
                                value="6"
                                onChange={handleFields}
                                checked={fields.includes("Electrical")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Materials"
                                value="7"
                                onChange={handleFields}
                                checked={fields.includes("Materials")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Physics/Quantum"
                                value="8"
                                onChange={handleFields}
                                checked={fields.includes("Physics/Quantum")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Other"
                                value="9"
                                onChange={(e) => {
                                    setShowOther1(!showOther1);
                                }}
                                checked={showOther1}
                            />
                            <input
                                className={showOther1 ? "" : styles.OtherInactive}
                                type={"text"}
                                placeholder=" "
                                autoComplete="other"
                                onChange={(e) => {
                                    setFieldOther(e.target.value);
                                }}
                            />
                        </div>
                        <div className={styles.SubmitImage}>
                            <p>Submit an image to go along your project</p>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.currentTarget.files && e.currentTarget.files[0]) {
                                        let file = e.currentTarget.files[0];
                                        FR.readAsDataURL(file);
                                    }
                                }}
                                required
                            />
                        </div>
                        <InputField
                            type="date"
                            placeholder="Start date"
                            width="50%"
                            onChange={(e) => {
                                setStartDate(e.target.value);
                            }}
                        />
                        <InputField
                            type="textarea"
                            placeholder="Project Description"
                            extraPlaceholder="Give a description of your project here..."
                            width="100%"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                        <InputField
                            type="number"
                            placeholder="Desired number of students"
                            width="50%"
                            extraPlaceholder="e.g. 4"
                            onChange={(e) => {
                                e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
                                setNumStudents(e.target.value);
                            }}
                        />
                        <InputField
                            type="number"
                            placeholder="Estimated compensation (hourly)"
                            extraPlaceholder="e.g. 20"
                            width="50%"
                            onChange={(e) => {
                                e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.+_\- ]/g, "");
                                setCompensation(e.target.value);
                            }}
                        />
                        <div className={styles.Radio}>
                            <p className={styles.RadioP}>Rough Project Term Length (Select 1)</p>
                            <InlineRadioInput
                                color="#fff"
                                label="1 month"
                                value="1"
                                onChange={(e) => {
                                    setTerm(e.currentTarget.id);
                                }}
                                checked={term === "1 month"}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="2 months"
                                value="2"
                                onChange={(e) => {
                                    setTerm(e.currentTarget.id);
                                }}
                                checked={term === "2 months"}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="3 months"
                                value="3"
                                onChange={(e) => {
                                    setTerm(e.currentTarget.id);
                                }}
                                checked={term === "3 months"}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="6 months"
                                value="4"
                                onChange={(e) => {
                                    setTerm(e.currentTarget.id);
                                }}
                                checked={term === "6 months"}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="1 year"
                                value="5"
                                onChange={(e) => {
                                    setTerm(e.currentTarget.id);
                                }}
                                checked={term === "1 year"}
                            />
                            <InlineRadioInput
                                color="#fff"
                                label="More than 1 year"
                                value="6"
                                onChange={(e) => {
                                    setTerm(e.currentTarget.id);
                                }}
                                checked={term === "More than 1 year"}
                            />
                        </div>
                        <div className={styles.Radio}>
                            <p className={styles.RadioP}>Desired Skills</p>
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Databases"
                                value="1"
                                onChange={handleSkills}
                                checked={skills.includes("Databases")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Information Retrieval"
                                value="2"
                                onChange={handleSkills}
                                checked={skills.includes("Information Retrieval")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Graphics"
                                value="3"
                                onChange={handleSkills}
                                checked={skills.includes("Graphics")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Data Analysis"
                                value="4"
                                onChange={handleSkills}
                                checked={skills.includes("Data Analysis")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Web Developing"
                                value="5"
                                onChange={handleSkills}
                                checked={skills.includes("Web Developing")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Machine/Model Training"
                                value="6"
                                onChange={handleSkills}
                                checked={skills.includes("Machine/Model Training")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Theory/Mathematics"
                                value="7"
                                onChange={handleSkills}
                                checked={skills.includes("Theory/Mathematics")}
                            />
                            <InlineRadioInput
                                color="#fff"
                                type="checkbox"
                                label="Other Option"
                                value="8"
                                onChange={(e) => {
                                    setShowOther2(!showOther2);
                                }}
                                checked={showOther2}
                            />
                            <input
                                className={showOther2 ? "" : styles.OtherInactive}
                                type={"text"}
                                placeholder=" "
                                autoComplete="other"
                                onChange={(e) => {
                                    setSkillOther(e.target.value);
                                }}
                            />
                        </div>
                        <InputField
                            type={"submit"}
                            placeholder="Submit"
                            width="fit-content"
                            onClick={handleSubmit}
                        />
                        <p className={styles.Error}>
                            {error}
                        </p>
                        <p className={styles.Success}>
                            {success}
                        </p>
                    </div>
                </Section>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;