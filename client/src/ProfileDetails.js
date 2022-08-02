import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState} from "react";
import React from 'react';
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import { FiMapPin, FiRepeat } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import Likes from "./Likes";
import moment from "moment";



const ProfileDetails = (props) => {
const [updateFeed, setUpdateFeed]= useState("")
const history = useHistory();
const {profileId} = useParams()
const {handle} = useParams()
const [currentProfiles, setCurrentProfiles] = React.useState(null);
const [currentTweets, setCurrentTweets] = React.useState(null);
const [status, setStatus] = React.useState("loading");

useEffect(() => {
    fetch (`/api/${profileId}/profile`)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        setCurrentProfiles(data)
        getTweetFeed(data.profile.handle)
        setStatus("idle")

    })
    .catch(()=> history.push("/error")) 
},[])

const getTweetFeed= (handler)=>{
    fetch (`/api/${handler}/feed`)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        setCurrentTweets(data)
        setStatus("idle")
    })
    .catch(()=> history.push("/error")) 
} 




if (!currentProfiles || !currentTweets)
return<CircularProgress/>

    return <>
<Border>
    <Imgban src={currentProfiles.profile.bannerSrc} alt={currentProfiles.profile.handle}></Imgban>
    <Imgav src={currentProfiles.profile.avatarSrc} alt={currentProfiles.profile.handle}></Imgav>
    <BoldS>{currentProfiles.profile.displayName}</BoldS>
    <GrayS>@{currentProfiles.profile.handle}</GrayS>
    <p>{currentProfiles.profile.bio}</p>
    <GrayS><FiMapPin/>  {currentProfiles.profile.location}     <FiCalendar/>Joined  {moment(currentProfiles.profile.joined).format(' MMMM YYYY')} </GrayS>
    <p>{currentProfiles.profile.numFollowing} <GrayS>Following</GrayS> {currentProfiles.profile.numFollowers} <GrayS>Followers</GrayS></p>
    <Div>
        <Pstyle1>Tweets</Pstyle1>
        <Pstyle2>Media</Pstyle2>
        <Pstyle3>Likes</Pstyle3>
    </Div>
    {/* <p>hiiiiiiiiiii</p> */}
    {currentTweets.tweetIds.map(id => {
        return <>
        <DivWholeBox>
            <GrayS3>{currentTweets.tweetsById[id].retweetFrom && <p> <SpanSt><FiRepeat /></SpanSt>{currentTweets.tweetsById[id].retweetFrom.displayName}Retweeted</p>}</GrayS3>
            <DivF>
            <Img src={currentTweets.tweetsById[id].author.avatarSrc} />
            <BoldS>{currentTweets.tweetsById[id].author.displayName}</BoldS>
            <GrayS2>@{currentTweets.tweetsById[id].author.handle} . {moment(currentTweets.tweetsById[id].author.joined).format(' MMM Do')}</GrayS2>
            </DivF>
            <Pstyle>{currentTweets.tweetsById[id].status}</Pstyle>
            <p> {currentTweets.tweetsById[id].media.length>0 && <Img2 src={currentTweets.tweetsById[id].media[0]?.url} alt="img"/>}</p>
            <Likes tweet= {currentTweets.tweetsById[id]} onLiked= {(isliked)=>{
                    console.log(isliked);
                    currentTweets.tweetsById[id].numLikes+= isliked? 1 : -1
                    currentTweets.tweetsById[id].isLiked=isliked
                    setCurrentTweets({...currentTweets})
                }} 
                onRetweet= {(isRetweeted)=>{
                    console.log(isRetweeted);
                    currentTweets.tweetsById[id].numRetweets+= isRetweeted? 1 : -1
                    currentTweets.tweetsById[id].isRetweeted=isRetweeted
                    setCurrentTweets({...currentTweets})
                }}/>
            </DivWholeBox>
        </>

    })}

    {/* {currentProfiles.profile.map((id) => {
            return <div>
                        {currentProfiles.profile[id].media.length>0 && <img src={currentProfiles.profile[id].media[0]?.url} alt="img"></img>}

                </div>;
          })} */}
    </Border>
        </>;
};
const SpanSt= styled.span`
font-size:20px;
padding:5px;
`;
const GrayS3 = styled.p`
color:gray;
margin-left:50px;
`;
const GrayS2 = styled.p`
color:gray;
margin-left:2px;
`;

const DivF = styled.div`
margin-left:20px;
display:flex;
`;

const Pstyle = styled.p`
margin-left:130px;
margin-top:-30px;
`;

const Pstyle1 = styled.p`
margin-left:50px;
margin-right:200px;
color:blueviolet;
font-weight:bold;
border-bottom:2px solid blueviolet;
width:200px;
padding-bottom:20px;
margin-bottom:0;
/* position: absolute; */
`;
const Pstyle2 = styled.p`
margin-right:200px;
font-weight:bold;
`;
const Pstyle3 = styled.p`
margin-right:200px;
font-weight:bold;
`;

const BoldS = styled.p`
font-weight:bold;
`;
const GrayS = styled.span`
color:gray;
`;

const Div = styled.div`
display:flex;
`;

const Border = styled.div`
display:block;
width:700px;
`;

const Text = styled.p`
font-size: 30px;
font-family: Poppins, sans-serif;
`;
const Imgav = styled.img`
border-radius:50%;
width:140px;
margin-top:-70px;
margin-left:20px;
border: 5px solid white
`;

const Imgban = styled.img`
width:100%;
`;

const Img = styled.img`
border-radius:50%;
width:80px;
`;

const Img2 = styled.img`
border-radius:10px;
width:600px;
margin-left:100px;
`;
const DivWholeBox = styled.div`
border:1px solid lightgray;
width:720px;
`;

export default ProfileDetails;