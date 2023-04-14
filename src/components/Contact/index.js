import React from "react"

import {SiMinutemailer} from 'react-icons/si'

import './index.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="cc-card-1">
                <h1 className="c-head-1"> We are all in this together <br />
                    For a better tomorrow</h1>
                <p className="c-para-1">Have questions or need any help? We've got you covered..</p>
                <p className="c-para-2">+91 7799996255</p>
                <div className="c-card-2">
                    <SiMinutemailer className="c-icon" />
                    <p className="c-para-1">support@recykal.com</p>
                </div>
                <img src="https://recykal.com/wp-content/uploads/2022/03/Or.png" className="c-img" alt="or" />
                <br />
                <button type="button" className="s-1-button c-button">Send a message</button>
            </div>
        </div>
    )
}

export default Contact