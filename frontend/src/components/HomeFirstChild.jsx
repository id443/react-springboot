import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeFirstChild = () => {
    const navigate = useNavigate();

    return (
        <>
            <p> Home child 1 component</p>
            <button className="btn btn-primary" onClick={() => navigate('/home')}>Redirect to Home </button>
        </>
    )
}