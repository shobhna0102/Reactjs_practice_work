
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
const User = () => {
    const { fname } = useParams();
    const nav = useNavigate();
    return (
        <>
            <h1>hiii {fname} User </h1>
            <button onClick={() => nav(-1)}>back</button>
        </>
    );

}

export default User;
