import React, { useEffect } from "react";
import Header from "../../components/header/Header"
import Vertiline from "../../components/design/Vertiline";
import './Portfolio.css';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Portfolio";
    }, []);
    return (
        <>
            <Header />

            <div className="portfolio-body">
                My portfolio page is in the works, please wait for future updates
            </div>

            <Vertiline />
        </>
    )
}

export default Portfolio