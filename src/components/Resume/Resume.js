import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from 'react-feather';

import './Resume.css';



const Resume = forwardRef((props,ref) => {
  const [column, setcolumn] = useState([[], []]);
  const [source, setsource] = useState("");
  const [target, settarget] = useState("");
  const resumeRef = useRef();
  // console.log(source,target)

  const information = props.information;
  console.log(information, 'fg')
  const sections = props.sections;
  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };
  console.log(info.achievement.sectionTitle, 'kkk')

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/ ${date.getFullYear()}`;

  }

  const sectionDiv = {
    [sections.workExp]: (
      <div

        draggable
        onDragOver={() => settarget(info?.workExp?.id)}
        onDragEnd={() => setsource(info?.workExp?.id)}
        className={`section ${info.achievement.sectionTitle ? "" : "hidden"}`}>
        <div className={'sectionTitle'}>{info.workExp.sectionTitle}</div>
        <div className={'content'}>
          {info.workExp?.details?.map((item) => (
            <div className={'item'} key={item.title}>
              {item.title ? (
                <p className={'title'}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={'subTitle'}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={'link'} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={'date'}>
                  <Calendar />{getFormattedDate(item.startDate)}-{getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={'date'}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={'points'}>
                  {item.points?.map((elem, index) => (
                    <li className={'point'} key={elem + index}>
                      ele
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        draggable
        onDragOver={() => settarget(info?.project?.id)}
        onDragEnd={() => setsource(info?.project?.id)}
        key={"project"}

        className={`section ${info.achievement.sectionTitle ? "" : "hidden"}`}
      >
        <div className={'sectionTitle'}>{info.project.sectionTitle}</div>
        <div className={'content'}>
          {info.project?.details?.map((item) => (
            <div className={'item'}>
              {item.title ? (
                <p className={'title'}>
                  project
                </p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={'link'} href={item.link}>
                  <Paperclip />
                  link
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={'link'} href={item.github}>
                  <GitHub />
                  github
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={'overview'}>overview </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={'points'}>
                  {item.points?.map((elem, index) => (
                    <li className={'point'} key={elem + index}>
                      elee
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        draggable
        key={"education"}
        onDragOver={() => settarget(info?.education?.id)}
        onDragEnd={() => setsource(info?.education?.id)}
        className={`section ${info.education.sectionTitle ? "" : "hidden"}`}
      >
        <div className={'sectionTitle'}>
          {info.education.sectionTitle}
        </div>
        <div className={'content'}>
          {info.education?.details?.map((item) => (
            <div className={item}>
              {item.title ? (
                <p className={'title'}>title</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={'subTitle'}>Some college name</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={'date'}>
                  <Calendar />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        draggable
        key={"achievement"}
        onDragOver={() => settarget(info?.achievement?.id)}
        onDragEnd={() => setsource(info?.achievement?.id)}
        className={`section ${info.achievement.sectionTitle ? "" : "hidden"}`}
      >
        <div className={'sectionTitle'}>
          {info.achievement.sectionTitle}
        </div>
        <div className={'content'}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={'numbered'}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={'point'} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => settarget(info?.summary?.id)}
        onDragEnd={() => setsource(info?.summary?.id)}
        className={`section ${info.summary.sectionTitle ? "" : "hidden"}`}
      >
        <div className={'sectionTitle'}>{info.summary.sectionTitle}</div>
        <div className={'content'}>
          <p className={'overview'}>Summary detail</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => settarget(info?.other?.id)}
        onDragEnd={() => setsource(info?.other?.id)}
        className={`section ${info.other.sectionTitle ? "" : "hidden"}`}
      >
        <div className={'sectionTitle'}>{info.other.sectionTitle}</div>
        <div className={'content'}>
          <p className={'overview'}>Other content</p>
        </div>
      </div>
    ),
  };

  const swap = (source, target) => {
    if (!source || !target) return;

    const tempColumns = [[...column[0]], [...column[1]]]
    let sourceRowIndex = column[0].findIndex(item => item === source);
    let sourceColumnIndex = 0;

    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = column[1].findIndex(item => item === source)
    }
    let targetRowIndex = column[0].findIndex(item => item === target);
    let targetColumnIndex = 0;

    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = column[1].findIndex(item => item === target)
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex]
    // let tempTarget = tempColumns[targetColumnIndex][targetRowIndex]

    // Swap code
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setcolumn(tempColumns);
  }


  useEffect(() => {
    setcolumn([[sections.project, sections.education, sections.summary],
    [sections.workExp, sections.achievement, sections.other],])
  }, [])
  useEffect(() => {
    swap(source, target);

  }, [source])

  useEffect(() => {
    const resume = resumeRef.current;
    if (!props.activeColor || !resume) return;
    resume.style.setProperty("--color", props.activeColor)
  }, [props.activeColor])
  return (
    <div ref={ref}>
      <div className='resume' ref={resumeRef}>
        <div className="resume_header">
          <p className='resume_heading'>{info.basicInfo?.detail?.name}</p>
          <p className='resume_subHeading'>{info.basicInfo?.detail?.title}</p>
          <div className="links">
            <div className="link"><AtSign />{info.basicInfo?.detail?.email}</div>
            <div className="link"><Phone /> {info.basicInfo?.detail?.phone}</div>
            <div className="link"><Linkedin /> {info.basicInfo?.detail?.linkedin}</div>
            <div className="link"><GitHub />{info.basicInfo?.detail?.github}</div>
          </div>
          <div className={'main'}>
            <div className={'col1'}>
              {column[0].map((item) => sectionDiv[item])}
            </div>
            <div className={'col2'}>
              {column[1].map((item) => sectionDiv[item])}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Resume;