import { createContext,useState } from "react";
// import avatar from "../assets/carmen-sandiego.png";
// import moment from "moment";
import React from 'react';
import { useEffect } from "react";



export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState("loading");

  // Fetch the user data from the API (/api/me/profile)
useEffect(() => {
    fetch ('/api/me/profile')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        setCurrentUser(data)
        setStatus("idle")
    })

},[])
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`


    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
      </CurrentUserContext.Provider>
    )
};

export default CurrentUserProvider;