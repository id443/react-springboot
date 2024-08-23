import React from "react";
import { useParams } from "react-router-dom";

export const HomeSecondChild = () => {
    const param = useParams();

    return (
        <>
            <p> Home child 2 component</p>
            <p> Param : {param.id}</p>
        </>
    )
}