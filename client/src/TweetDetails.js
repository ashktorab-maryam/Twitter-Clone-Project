import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState} from "react";
import React from 'react';
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";


const TweetDetails = (props) => {
const [updateFeed, setUpdateFeed]= useState("")

    const {tweetId} = useParams()
    const [currentTweets, setCurrentTweets] = React.useState(null);
    const [status, setStatus] = React.useState("loading");

    useEffect(() => {
        fetch (`/api/tweet/${tweetId}`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setCurrentTweets(data)
            setStatus("idle")
        })
    },[])

    if (!currentTweets)
return<CircularProgress/>

    return <>
    <Imgav src={currentTweets.tweet.author.avatarSrc} alt={currentTweets.tweet.author.handle}></Imgav>
        <p>{currentTweets.tweet.author.displayName}</p>   
        <p>{currentTweets.tweet.author.handle}</p>   
        <p>{currentTweets.tweet.status}</p>  
        {currentTweets.tweet.media.length>0 && <Img2 src={currentTweets.tweet.media[0]?.url} alt="img"></Img2>}
        </>;
  };

  const Text = styled.p`
font-size: 30px;
font-family: Poppins, sans-serif;
`;

const Imgav = styled.img`
border-radius:50%;
width:200px;
margin-top:10px;
margin-left:20px;
border: 5px solid white
`;


const Img2 = styled.img`
border-radius:10px;
width:600px;
`;

  
  export default TweetDetails;