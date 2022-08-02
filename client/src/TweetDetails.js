import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState} from "react";
import React from 'react';
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Likes from "./Likes";
import moment from "moment";


const TweetDetails = (props) => {
    const [updateFeed, setUpdateFeed]= useState("")
    const history = useHistory();
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
        .catch(()=> history.push("/error")) 
    },[])

    if (!currentTweets)
return<CircularProgress/>

    return <>
    <DivWholeBox>
    <DivF>
    <Imgav src={currentTweets.tweet.author.avatarSrc} alt={currentTweets.tweet.author.handle}></Imgav>
        <BoldS>{currentTweets.tweet.author.displayName}</BoldS> 
    </DivF>     
        <GrayS2>@{currentTweets.tweet.author.handle}</GrayS2>   
        <Pstyle>{currentTweets.tweet.status}</Pstyle>  
        {currentTweets.tweet.media.length>0 && <Img2 src={currentTweets.tweet.media[0]?.url} alt="img"></Img2>}
        <Pstyle>{moment(currentTweets.tweet.timestamp).format('LT - MMM D  YYYY')}. Critter web app</Pstyle> 
        <Likes tweet= {currentTweets.tweet} onLiked= {(isliked)=>{
                    console.log(isliked);
                    currentTweets.tweet.numLikes+= isliked? 1 : -1
                    currentTweets.tweet.isLiked=isliked
                    setCurrentTweets({...currentTweets})
                }} 
                onRetweet= {(isRetweeted)=>{
                    console.log(isRetweeted);
                    currentTweets.tweet.numRetweets+= isRetweeted? 1 : -1
                    currentTweets.tweet.isRetweeted=isRetweeted
                    setCurrentTweets({...currentTweets})
                }}/>
        </DivWholeBox>
        </>;
};
const Pstyle = styled.p`
margin-left:40px;
font-size:20px;
`;
const DivF = styled.div`
margin-left:20px;
display:flex;
`;
const GrayS2 = styled.p`
color:gray;
margin-left:135px;
margin-top:-40px;
`;

const BoldS = styled.p`
font-weight:bold;
`;
const Text = styled.p`
font-size: 30px;
font-family: Poppins, sans-serif;
`;

const Imgav = styled.img`
border-radius:50%;
width:80px;
margin-top:10px;
margin-left:20px;
border: 5px solid white
`;


const Img2 = styled.img`
border-radius:10px;
width:600px;
margin-left:30px;
`;
const DivWholeBox = styled.div`
border:1px solid lightgray;
width:720px;
`;

  
  export default TweetDetails;