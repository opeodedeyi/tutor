import React, { useState } from "react";
import Header from "../../components/header/Header";
import FormInput from "../../components/formInput/FormInput";
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
    };
    return (
        <>
            <Header />

            <div className="contact-body">
                <div className="contact-body-content">
                    <form className="contact-body-content-main" action="https://formsubmit.co/opeyemiodedeyi@gmail.com" method="post">

                        <p className="contact-body-title">Let's Chat!</p>

                        <p className="contact-body-text">Got a burning question, a brilliant idea, or just want to chat about the mysteries of life and the universe? Don't hesitate, reach out, and let's get the conversation rolling! Remember, a good conversation is like a fine wine – it only gets better with time.</p>
                        
                        <FormInput 
                            type="text" 
                            placeholder="What should we call you?" 
                            input="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        
                        <FormInput 
                            type="email" 
                            placeholder="Where can we reach you? (Email, please!)" 
                            input="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                        <FormInput
                            type="textarea"
                            placeholder="Spill the beans! (Your message here)"
                            input="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}/>

                    </form>
                    <div className="contact-body-content-socials">
                        <p className="contact-body-subtitle">Follow me</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact