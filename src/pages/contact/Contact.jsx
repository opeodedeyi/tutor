import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Header from "../../components/header/Header";
import FormInput from "../../components/formInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Send message');

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isDisabled = !name || !email || !message || !isEmailValid(email) || buttonText!="Send message";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending message...');

        // send the actual message
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };
        // console.log({ name, email, message });

        try {
            await emailjs.send(
              'service_f8e7q9x',
              'template_ckaajip',
              templateParams,
              'JdVIYOlNVbEzzXVF4'
            );
      
            setButtonText('Message delivered ✓');
            setTimeout(() => setButtonText('Send message'), 2000);
        } catch (error) {
            console.error('Failed to send the message:', error);
            setButtonText('Send message');
        }

        // setButtonText('Message delivered ✓');
        // setTimeout(() => setButtonText('Send message'), 2000);
    };
    return (
        <>
            <Header />

            <div className="contact-body">
                <div className="contact-body-content">
                    <form className="contact-body-content-main" action="https://formsubmit.co/opeyemiodedeyi@gmail.com" method="post">

                        <p className="contact-body-title">Let's Chat!</p>

                        <p className="contact-body-text">Got a burning question, a brilliant idea, or just want to chat about the mysteries of life and the universe? Don't hesitate, reach out, and let's get the conversation rolling!</p>
                        
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

                        <CustomButton  onClick={handleSubmit} disabled={isDisabled}>{buttonText}</CustomButton>
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