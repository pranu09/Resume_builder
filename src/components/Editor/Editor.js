import React, { useEffect, useState } from 'react'
import { X } from 'react-feather';
import InputControl from '../InputControl/InputControl';
// import { Key } from 'react-feather';
import './Editor.css'

const Editor = (props) => {
    console.log(props)
    const sections = props.sections;
    const [activeSectionKey, setactiveSectionKey] = useState(Object.keys(sections)[0]);
    const info = props.resumeInfo;
    console.log(info);

    const [activeInformation, setactiveInformation] = useState(info[sections[Object.keys(sections)[0]]])
    const [sectionTitle, setsectionTitle] = useState(Object.keys(sections)[0]);

    const [activeDeteailIndex, setactiveDeteailIndex] = useState(0);


    const [values, setvalues] = useState({
        name: activeInformation?.details?.name || "",
        title: activeInformation?.details?.title || "",
        linkedin: activeInformation?.details?.linkedin || "",
        github: activeInformation?.details?.github || "",
        phone: activeInformation?.details?.phone || "",
        email: activeInformation?.details?.email || "",
    });
    // console.log(activeSectionKey)
    // console.log(sections)
    // console.log(activeInformation?.detail)
    console.log(values)

    const handlePointUpdate = (value, index) => {
        const tempValues = { ...values }
        if (!Array.isArray(tempValues.points)) tempValues.points = []         // we can't change value directly
        tempValues.points[index] = value;          // if not points exist then create it
        setvalues(tempValues)
    }

    const workExpBody = (
        <div className="workExpBody">
            <div className="workExpBody_row">
                <InputControl label="Title" placeholder="Enter title eg. Frontend Developer"
                    value={values.title}
                    onChange={(e) => setvalues((prev) => ({ prev, title: e.target.value }))} />
                <InputControl label="Company Name" placeholder="Enter company Name eg. amazon " value={values.companyName}
                    onChange={(e) => setvalues((prev) => { return ({ prev, companyName: e.target.value }); })} />

            </div>
            <div className="workExpBody_row">
                <InputControl
                    label="Certificate Link"
                    placeholder="Enter certificate link"

                    onChange={(e) => setvalues((prev) => { console.log(prev); return ({ prev, certificationLink: e.target.value }); })}
                    value={values.certificationLink}

                />

                <InputControl
                    label="Location"
                    placeholder="Enter location eg. Remote"
                    value={values.location}
                    onChange={(event) => setvalues((prev) => ({ ...prev, location: event.target.value }))
                    }
                />
            </div>
            <div className="workExpBody_row">
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    value={values.startDate}
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, startDate: event.target.value }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                    value={values.endDate}
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, endDate: event.target.value }))
                    }
                />
            </div>

            <div className='workExpBody_column'>
                <label>Enter work description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    );
    const projectBody = (
        <div className="workExpBody">
            <div className="workExpBody_row">
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter title eg. Chat app"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <InputControl
                label="Overview"
                value={values.overview}
                placeholder="Enter basic overview of project"
                onChange={(event) =>
                    setvalues((prev) => ({ ...prev, overview: event.target.value }))
                }
            />
            <div className="workExpBody_row">
                <InputControl
                    label="Deployed Link"
                    value={values.link}
                    placeholder="Enter deployed link of project"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, link: event.target.value }))
                    }
                />
                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter github link of project"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, github: event.target.value }))
                    }
                />
            </div>
            <div className="workExpBody_column">
                <label>Enter project description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );
    const educationBody = (
        <div className="workExpBody">
            <div className="workExpBody_row">
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter title eg. B-tech"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <InputControl
                label="College/School Name"
                value={values.college}
                placeholder="Enter name of your college/school"
                onChange={(event) =>
                    setvalues((prev) => ({ ...prev, college: event.target.value }))
                }
            />
            <div className="workExpBody_row">
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, startDate: event.target.value }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={values.endDate}
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, endDate: event.target.value }))
                    }
                />
            </div>
        </div>
    );
    const basicInfoBody = (

        <div className="workExpBody">
            <div className="workExpBody_row">
                <InputControl
                    label="Name"
                    placeholder="Enter your full name eg. Aashu"
                    value={values.name}
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, name: event.target.value }))
                    }
                />
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter your title eg. Frontend developer"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <div className="workExpBody_row">
                <InputControl
                    label="Linkedin Link"
                    value={values.linkedin}
                    placeholder="Enter your linkedin profile link"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, linkedin: event.target.value }))
                    }
                />
                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter your github profile link"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, github: event.target.value }))
                    }
                />
            </div>
            <div className="workExpBody_row">
                <InputControl
                    label="Email"
                    value={values.email}
                    placeholder="Enter your email"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, email: event.target.value }))
                    }
                />
                <InputControl
                    label="Enter phone"
                    value={values.phone}
                    placeholder="Enter your phone number"
                    onChange={(event) =>
                        setvalues((prev) => ({ ...prev, phone: event.target.value }))
                    }
                />
            </div>
        </div>
    );
    const achievementsBody = (
        <div className="workExpBody">
            <div className="workExpBody_column">
                <label>List your achievements</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => handlePointUpdate(event.target.value, 3)}
                />
            </div>
        </div>
    );
    const summaryBody = (
        <div className="workExpBody">
            <InputControl
                label="Summary"
                value={values.summary}
                placeholder="Enter your objective/summary"
                onChange={(event) =>
                    setvalues((prev) => ({ ...prev, summary: event.target.value }))
                }
            />
        </div>
    );
    const otherBody = (

        <div className="workExpBody">
            <InputControl
                label="Other"
                value={values.other}
                placeholder="Enter something"
                onChange={(event) =>
                    setvalues((prev) => ({ ...prev, other: event.target.value }))
                }
            />
        </div>
    )
    const generateBody = () => {
        switch (sections[activeSectionKey]) {
            case sections.basicInfo: return basicInfoBody;
                break;
            case sections.workExp: return workExpBody;
                break;
            case sections.project: return projectBody;
                break;
            case sections.education: return educationBody;
                break;
            case sections.achievement: return achievementsBody;
                break;
            case sections.summary: return summaryBody;
                break;
            case sections.other: return otherBody;
                break;

        }
    }

    const handleSubmit = () => {
        console.log(values, 'ppp')
        console.log(sectionTitle, 'ppp')


        switch (sections[activeSectionKey]) {
            case sections.basicInfo: {
                const tempDetail = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                };

                props.setresumeInfo((prev) => ({
                    ...prev,
                    [sections.basicInfo]: {
                        ...prev[sections.basicInfo],
                        detail: tempDetail,
                        sectionTitle
                    },
                }));
                break;
            }
            case sections.workExp: {
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                };
                const tempDetails = [...info[sections.workExp]?.details];
                tempDetails[activeDeteailIndex] = tempDetail;

                props.setresumeInfo((prev) => ({
                    ...prev,
                    [sections.workExp]: {
                        ...prev[sections.workExp],
                        details: tempDetails,
                        sectionTitle
                    },
                }));
                break;
            }
            case sections.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                };
                const tempDetails = [...info[sections.project]?.details];
                tempDetails[activeDeteailIndex] = tempDetail;

                props.setresumeInfo((prev) => ({
                    ...prev,
                    [sections.project]: {
                        ...prev[sections.project],
                        details: tempDetails,
                        sectionTitle
                    },
                }));
                break;
            }
            case sections.education: {
                const tempDetail = {
                    title: values.title,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,
                };
                const tempDetails = [...info[sections.education]?.details];
                tempDetails[activeDeteailIndex] = tempDetail;

                props.setresumeInfo((prev) => ({
                    ...prev,
                    [sections.education]: {
                        ...prev[sections.education],
                        details: tempDetails,
                        sectionTitle
                    },
                }));
                break;
            }
            case sections.achievement: {
                const tempPoints = values.points;

                props.setresumeInfo((prev) => ({
                    ...prev,
                    [sections.achievement]: {
                        ...prev[sections.achievement],
                        points: tempPoints,
                        sectionTitle
                    },
                }));
                break;
            }
            case sections.summary: {
                const tempDetail = values.summary;

                props.setresumeInfo((prev) => ({
                    ...prev,
                    [sections.summary]: {
                        ...prev[sections.summary],
                        detail: tempDetail,
                        sectionTitle
                    },
                }));
                break;
            }
            case sections.other: {
                const tempDetail = values.other;

                props.setresumeInfo((prev) => ({
                    ...prev,
                    [sections.other]: {
                        ...prev[sections.other],
                        detail: tempDetail,
                        sectionTitle
                    },
                }));
                break;
            }
        }
    };

    const newAdd = () => {
        console.log('add');
        // setactiveInformation("")
        const details = activeInformation?.details;
        // console.log(detail,'ppp')
        if (!details) return;


        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details?.push({})

        // console.log(lastDetail,'ppp')
        props.setresumeInfo((prev) => ({
            ...prev, [sections[activeSectionKey]]: {
                ...info[sections[activeSectionKey]], details: details,
            },

        }));
        setactiveDeteailIndex(details?.length - 1);
    }
    const removeItem = (i) => {
        const details = activeInformation?.details
            ? [...activeInformation?.details]
            : "";
        if (!details) return;
        details.splice(i, 1);
        props.setresumeInfo((prev) => ({
            ...prev,
            [sections[activeSectionKey]]: {
                ...info[sections[activeSectionKey]],
                details: details,
            },
        }));

        setactiveDeteailIndex((prev) => (prev === i ? 0 : prev - 1));
    };
    useEffect(() => {
        const activeInfo = info[sections[activeSectionKey]];
        console.log(activeInfo, 'jkj')
        setactiveInformation(activeInfo);
        setsectionTitle(sections[activeSectionKey]);
        setactiveDeteailIndex(0);
        setvalues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details
                ? activeInfo.details[0]?.overview || ""
                : "",
            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            certificationLink: activeInfo?.details
                ? activeInfo.details[0]?.certificationLink || ""
                : "",
            companyName: activeInfo?.details
                ? activeInfo.details[0]?.companyName || ""
                : "",
            college: activeInfo?.details
                ? activeInfo.details[0]?.college || ""
                : "",
            location: activeInfo?.details
                ? activeInfo.details[0]?.location || ""
                : "",
            startDate: activeInfo?.details
                ? activeInfo.details[0]?.startDate || ""
                : "",
            endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo?.points
                    ? [...activeInfo.points]
                    : "",
            title: activeInfo?.details
                ? activeInfo.details[0]?.title || ""
                : activeInfo?.detail?.title || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details
                ? activeInfo.details[0]?.github || ""
                : activeInfo?.detail?.github || "",
            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",
            summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
            other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
        });
    }, [activeSectionKey]);

    useEffect(() => {
        setactiveInformation(info[sections[activeSectionKey]])
    }, [info])


    useEffect(() => {
        const details = activeInformation?.details;
        if (!details) return;

        const activeInfo = info[sections[activeSectionKey]];
        setvalues({
            overview: activeInfo.details[activeDeteailIndex]?.overview || "",
            link: activeInfo.details[activeDeteailIndex]?.link || "",
            certificationLink:
                activeInfo.details[activeDeteailIndex]?.certificationLink || "",
            companyName: activeInfo.details[activeDeteailIndex]?.companyName || "",
            location: activeInfo.details[activeDeteailIndex]?.location || "",
            startDate: activeInfo.details[activeDeteailIndex]?.startDate || "",
            endDate: activeInfo.details[activeDeteailIndex]?.endDate || "",
            points: activeInfo.details[activeDeteailIndex]?.points || "",
            title: activeInfo.details[activeDeteailIndex]?.title || "",
            linkedin: activeInfo.details[activeDeteailIndex]?.linkedin || "",
            github: activeInfo.details[activeDeteailIndex]?.github || "",
            college: activeInfo.details[activeDeteailIndex]?.college || "",
        });
    }, [activeDeteailIndex]);

    return (
        <div className='editor'>
            <div className="editor_header">
                {Object.keys(sections)?.map((key, i) => (<div onClick={() => setactiveSectionKey(key)} className={`editor_section ${activeSectionKey === key ? "active" : ""}`} key={i}>{sections[key]}</div>))}


            </div>

            <div className="editor_body">
                <InputControl label="Title" placeholder="Enter Section title" value={sectionTitle} onChange={(e) => setsectionTitle(e.target.value)} />
                <div className="chips" >

                    {activeInformation?.details ? activeInformation?.details.map((item, index) => (<div className={`chip ${activeDeteailIndex === index ? 'active' : ""}`} key={item.title + index} onClick={() => setactiveDeteailIndex(index)}>
                        <p>{sections[activeSectionKey]} {index + 1}</p>
                        <X onClick={(e) => {
                            console.log('eventbub', e)
                            e.stopPropagation();
                            removeItem(index);
                        }} />
                    </div>)
                    ) : ""}

                    {activeInformation?.details && activeInformation?.details.length > 0 ? (<div className='new_buttton' onClick={newAdd}>+ New</div>
                    ) : ""}

                </div>
                {generateBody()}
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default Editor;