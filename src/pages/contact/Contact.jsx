import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import Header from "../../components/header/Header";
import FormInput from "../../components/formInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import instagram from '../../assets/svg/instagram.svg'
import twitter from '../../assets/svg/twitter.svg'
import linkedin from '../../assets/svg/linkedin.svg'
import github from '../../assets/svg/github.svg'
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

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

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
    };
    useEffect(() => {
        document.title = "Contact Me";
    }, []);
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
                        <div className="social-icons">
                            <a href="https://www.instagram.com/odedeyiope/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" className="social-icon" />
                            </a>
                            <a href="https://twitter.com/Opeodedeyi" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/opeyemi-odedeyi/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" className="social-icon" />
                            </a>
                            <a href="https://github.com/opeodedeyi" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="Github" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact