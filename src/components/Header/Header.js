import React from 'react'

import './Header.css'


const Header = () => {
    return (
        <div className='container'>
            <div className="left_side">
                <p className="heading">
                    A <span>Resume</span> that stands out!
                </p>
                <p className="heading">
                    Make your own resume. <span>It's Free</span>
                </p>
            </div>
            <div className="right_side">
                <img src="/Images/undraw_resume_folder_re_e0bi.svg" alt="" />

            </div>
        </div>

    )
}

export default Header;