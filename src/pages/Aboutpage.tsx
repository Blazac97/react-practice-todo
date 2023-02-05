import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
export const AboutPage:  React.FC =()=>{
    const navigate = useNavigate()
    return(
        <>
        <h1> Information page </h1>
        <p>This ToDo app made with using React, TypeScript and Materialize framework . </p>
        <button className="btn" onClick={()=>navigate('/')}>Return</button>
        </>
    )
}
