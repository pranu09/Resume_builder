import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'react-feather';
import ReactToPrint from 'react-to-print';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

import './Body.css';

const Body = () => {
    const componentRef=useRef()

    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const [activeColor, setactiveColor] = useState(colors[0]);
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };

    const [resumeInfo, setresumeInfo] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: "",
        },
    });

    console.log(resumeInfo, 'ggg')
    return (
        <div className='body'>
            <p className="body_heading">
                Resume Builder
            </p>
            <div className="body_toolbar">
                <div className="body_colors" >
                    {colors.map((item, i) => (<span style={{ backgroundColor: item }} className={`body_color ${activeColor === item ? 'active' : ''} `} onClick={() => setactiveColor(item)}></span>))}
                </div>

                <ReactToPrint
                    trigger={() => <button>Download <ArrowDown /></button>}
                    content={() => componentRef.current}
                />
                {/* <ComponentToPrint ref={componentRef} /> */}


            </div>
            <div className="body_main">
                {/* {sections.map((it))<Editor />} */}
                <Editor sections
                    ={sections} resumeInfo={resumeInfo} setresumeInfo={setresumeInfo} />

                <Resume
                    ref={componentRef}
                    sections={sections}
                    information={resumeInfo}
                    activeColor={activeColor} />
            </div>
        </div>
    )
}

export default Body