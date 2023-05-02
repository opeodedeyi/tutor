import React from "react";
import "./Formfield.css";

const Formfield = (props) => {
    return (
        <>
            <input type={props.type} placeholder={props.placeholder} />
        </>
    )
}

export default Formfield
