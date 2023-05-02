import React from "react";
import Header from "../../components/header/Header";
import Vertiline from "../../components/design/Vertiline";
import Formfield from "../../components/formfield/Formfield";
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Header />

            <div className="contact-body">
                <div className="contact-body-content">
                    <div className="contact-body-content-main">
                        <p className="contact-body-title">Let's Chat!</p>
                        <p className="contact-body-text">Got a burning question, a brilliant idea, or just want to chat about the mysteries of life and the universe? Don't hesitate, reach out, and let's get the conversation rolling! Remember, a good conversation is like a fine wine – it only gets better with time.</p>
                        <Formfield />
                    </div>
                    <div className="contact-body-content-socials">
                        <p className="contact-body-subtitle">Follow me</p>
                    </div>
                </div>
            </div>

            <Vertiline />
        </>
    )
}

export default Contact