import React from "react";
import Header from "../../components/header/Header"
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div class="contact-body">
                You can call me on my cell phone +2348125580085 or email me at <a href="mailto:opeyemiodedeyi@gmail.com" target="_blank">opeyemiodedeyi@gmail.com</a>
            </div>
        </>
    )
}

export default Contact