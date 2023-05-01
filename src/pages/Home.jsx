import React from "react";
import Header from "../components/header/Header";
import Vertiline from "../components/design/Vertiline";
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />

            <div className="background-image"></div>
            
            <div className="home-container">
                <p className="home-container-introduction">Hi, I am <br /> <span className="home-container-introduction-special-color">Opeyemi</span></p>
                <p className="home-container-subtitle">Web <br /> Developer</p>
            </div>

            <Vertiline />
        </>
    )
}

export default Home
