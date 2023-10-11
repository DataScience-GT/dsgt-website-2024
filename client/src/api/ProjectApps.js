export const submitProjectInfo = async (
    name,
    location,
    hosts,
    contactEmail,
    fields,
    fieldOther,
    description,
    numStudents,
    term,
    compensation,
    startDate,
    skills,
    skillOther,
    callback
) => {
    await fetch("https://member.datasciencegt.org/api/projects/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            projectName: name,
            projectLocation: location,
            projectHosts: hosts,
            projectContactEmail: contactEmail,
            relatedFields: fields,
            relatedFieldOther: fieldOther,
            projectDescription: description,
            numStudentsDesired: numStudents,
            termLength: term,
            compensationHour: compensation,
            startDate: startDate,
            skillsDesired: skills,
            skillDesiredOther: skillOther
        })
    }).then(async (res) => {
        const json = await res.json();
        if (!json.ok && json.error) {
            throw new Error(json.error)
        } else {
            callback(json);
        }
    }) 
}