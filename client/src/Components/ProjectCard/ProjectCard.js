import React, { FC } from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({
    pid,
    pname,
    plocation,
    relatedFields,
    pdescription,
    numStudents,
    termLength,
    compensationHour,
    startDate,
    desiredSkills,
    phosts,
    contactEmail,
    deletable,
    applyable,
    onDelete,
    onApply,
}) => {

    return (
        <div className={styles.ProjectCard} data-testid="ProjectCard">
            <div className={styles.ProjectCardInfo}>
                <div className={styles.FlexColumn}>
                    <h3 className={styles.Major}>{pname}</h3>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Start date</span> 
                        {startDate}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Description</span> 
                        {pdescription}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Length of project</span> 
                        {termLength}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Hourly compensation</span> 
                        {compensationHour}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Location</span> 
                        {plocation}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Number of openings</span> 
                        {numStudents}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Related fields</span> 
                        {relatedFields}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Desired skills</span> 
                        {desiredSkills}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Project hosts</span> 
                        {phosts}
                    </p>
                    <p className={styles.ProjectInfo}> 
                        <span className={styles.Span}>Contact email</span> 
                        {contactEmail}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;