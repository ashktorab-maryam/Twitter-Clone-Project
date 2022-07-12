import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState} from "react";
import React from 'react';
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";


const ProfileDetails = (props) => {
const [updateFeed, setUpdateFeed]= useState("")

    const {profileId} = useParams()
    const [currentProfiles, setCurrentProfiles] = React.useState(null);
    const [status, setStatus] = React.useState("loading");

    useEffect(() => {
        fetch (`/api/${profileId}/profile`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setCurrentProfiles(data)
            setStatus("idle")
        })
    },[])

if (!currentProfiles)
return<CircularProgress/>

    return <>
<div>
    <Imgban src={currentProfiles.profile.bannerSrc} alt={currentProfiles.profile.handle}></Imgban>
    <Imgav src={currentProfiles.profile.avatarSrc} alt={currentProfiles.profile.handle}></Imgav>
    <p>{currentProfiles.profile.displayName}</p>
    <p>@{currentProfiles.profile.handle}</p>
    <p>{currentProfiles.profile.bio}</p>
    <p>{currentProfiles.profile.location} {currentProfiles.profile.joined}</p>
    <p>{currentProfiles.profile.numFollowing} Following {currentProfiles.profile.numFollowers} Followers</p>
    {/* {currentProfiles.profile.map((id) => {
            return <div>
                        {currentProfiles.profile[id].media.length>0 && <img src={currentProfiles.profile[id].media[0]?.url} alt="img"></img>}

                </div>;
          })} */}
    </div>
        </>;
  };

  const Text = styled.p`
font-size: 30px;
font-family: Poppins, sans-serif;
`;
const Imgav = styled.img`
border-radius:50%;
width:200px;
margin-top:-100px;
margin-left:20px;
border: 5px solid white
`;

const Imgban = styled.img`
width:100%;
`;

  
  export default ProfileDetails;