import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Header from "../../components/header/Header";

import html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import javascript from '../../assets/svg/javascript.svg';
import node from '../../assets/svg/node.svg';
import vue from '../../assets/svg/vue.svg';
import nuxt from '../../assets/svg/nuxt.svg';
import react from '../../assets/svg/react.svg';
import python from '../../assets/svg/python.svg';
import django from '../../assets/svg/django.svg';
import flask from '../../assets/svg/flask.svg';

import './Portfolio.css';


const PortfolioCard = (props) => {
    return (
        <div className="portfolio-card">
            <div className="portfolio-card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="portfolio-card-body">
                <p className="portfolio-card-title">{props.title}</p>
                <div className="portfolio-card-skills">
                    {props.skills.map((skill, index) => (
                        <img key={index} src={skill} alt="" />
                    ))}
                </div>
            </div>
        </div>
    );
}

const Portfolio = () => {
    const portfolioResult = [
        {
            id: 1,
            image: "https://i.ibb.co/M8nf5XF/clearview.webp",
            title: "ClearView Research Website Redesign and Development",
            description: "",
            skills: [nuxt, css, javascript],
            githubRepo: "https"
        },
        {
            id: 2,
            image: "https://i.ibb.co/rfjTqMt/clubbera.webp",
            title: "Clubbera Website Design and Development",
            description: "",
            skills: [react, css, node],
            githubRepo: "https"
        },
        {
            id: 3,
            image: "https://i.ibb.co/0DdzMHd/tripz.webp",
            title: "Tripz Website Development",
            description: "",
            skills: [html, css, javascript],
            githubRepo: "https"
        },
        {
            id: 4,
            image: "https://i.ibb.co/9wXCK9J/peexo.webp",
            title: "Peexo Frontend Development",
            description: "",
            skills: [html, css, javascript],
            githubRepo: "https"
        }
    ]

    // useEffect(() => {
    //     document.title = "Portfolio";
    // }, []);

    return (
        <>
            <Header />

            <div className="portfolio-body">
                <div className="portfolio-body-content">
                    <p className="portfolio-body-content-title">A few of my Works</p>
                    <div className="portfolio-cards">
                            {portfolioResult.map((card, index) => (
                                <PortfolioCard
                                    key={card.id}
                                    image={card.image}
                                    title={card.title}
                                    description={card.description}
                                    skills={card.skills}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio