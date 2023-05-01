import React from "react";
import Header from "../../components/header/Header"
import Vertiline from "../../components/design/Vertiline";
import Skill from "../../components/skill/Skill";
import './About.css';

const About = () => {
    return (
        <>
            <Header />

            <div className="about-background-image"></div>

            <div className="about-body">
                <div className="about-body-content">
                    <p className="about-body-title">About me</p>
                    <p className="about-body-text">Opeyemi David Odedeyi is a highly skilled Full-stack Engineer with a strong background in Economics and a Master's degree in Applied Artificial Intelligence and Data Analytics. He has cultivated expertise in a wide range of programming languages and frameworks, including HTML, CSS, JavaScript, Python, NodeJS, VueJs, Nuxt, React, and Django among others. Opeyemi's passion for creating visually appealing and user-friendly websites has propelled him to excel in the field of web development.
                    Opeyemi's commitment to producing high-quality work, coupled with his sharp eye for detail, ensures that each project he undertakes meets and exceeds customer expectations. As a dedicated professional who excels in both front-end and back-end development, Opeyemi David Odedeyi is well-equipped to create innovative and scalable web applications that deliver outstanding performance and cater to the unique needs of each client.</p>

                    <Skill />
                </div>
            </div>

            <Vertiline />
        </>
    )
}

export default About