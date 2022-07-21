import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const RutaAdmin = ({children}) => {
    const { user} = useContext(UserContext);
    return user.email === "juliogon@tys.com" ? children : <Navigate to = "/"/>

}

export default RutaAdmin