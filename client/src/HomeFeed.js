import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import React from 'react';
import { useEffect } from "react";
import { useState} from "react";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Likes from "./Likes";
import { FiRepeat } from "react-icons/fi";
import moment from "moment";


// import handleAfterPublishTweet from "./handleAfterPublishTweet";
// import moment from "moment";

const HomeFeed = (props) => {
    const [currentTweets, setCurrentTweets] = React.useState(null);
    const [status, setStatus] = React.useState("loading");
    const [updateFeed, setUpdateFeed]= useState("")
    const [count, setCount] = useState(280);
    let vcolor="gray"
    if (count < 55){
        vcolor= "orange"
    }
    if (count < 0){
        vcolor= "red"
    }
    const history = useHistory();


useEffect(() => {
    fetch ('/api/me/home-feed')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        setCurrentTweets(data)
        setStatus("idle")
    })
    .catch(()=> history.push("/error")) 
},[updateFeed])

const [fname, setFname] = useState("")    
const handleChange = (e) => {
    setFname(e.target.value)
    setCount(280 - e.target.value.length)
}


const PostTweet = () => {
    fetch('/api/tweet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({status : fname})})
        .then(res => res.json())
        .then(data => {
        setUpdateFeed(data)
        setFname("")
        setCount(280)
        })
        .catch(()=> history.push("/error")) 
    }

    const {
        currentUser,
        //  status,
    } = useContext(CurrentUserContext);
    if (!currentUser || !currentTweets 
        )
    return <CircularProgress/>

    return (<div>
        <Text>Home</Text>
        <Div>
        <Img src={currentUser.profile.avatarSrc} alt={currentUser.profile.handle}></Img>
        <label>
            {" "}
            <TextArea type="text" placeholder="What's happening?" value={fname} onChange={(e)=>handleChange(e)} />
        </label>
        <Counter style={{color: vcolor}}>{count}</Counter>
        <Button onClick={PostTweet} disabled= {count===280 || count<0}>Meow</Button>
        </Div>
        {currentTweets.tweetIds.map(id => {
            function handleClickWB(ev) {
                ev.stopPropagation()
                history.push(`/tweet/${id}`);
            }
            function handleClickTC(ev) {
                ev.stopPropagation()
                history.push(`/profile/${currentTweets.tweetsById[id].author.handle}`);
            }
            return <DivWholeBox><WholeBox onClick={handleClickWB}>
                <GrayS>{currentTweets.tweetsById[id].retweetFrom && <p><SpanSt><FiRepeat /></SpanSt>{currentTweets.tweetsById[id].retweetFrom.displayName} Retweeted</p>}</GrayS>
                <TweetCharact onClick={handleClickTC}>
                <DivF>
                <Img src={currentTweets.tweetsById[id].author.avatarSrc} />
                <BoldS>{currentTweets.tweetsById[id].author.displayName}</BoldS>
                <GrayS2>@{currentTweets.tweetsById[id].author.handle} {moment(currentTweets.tweetsById[id].author.joined).format(' MMM Do ')}</GrayS2>
                </DivF>
                <Pstyle>{currentTweets.tweetsById[id].status}</Pstyle>
                </TweetCharact> 
                {currentTweets.tweetsById[id].media.length>0 && <Img2 src={currentTweets.tweetsById[id].media[0]?.url} alt="img"/>}
                </WholeBox>
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
                }}
                />
                {/* <ActionBar/> */}
               </DivWholeBox> 
        })}
    </div>);
};
  



const Text = styled.p`
font-size: 40px;
font-weight:bold;
font-family: Poppins, sans-serif;
border:1px solid lightgray;
width:670px;
height:50px;
margin-bottom:0;
padding:25px;
`;
const SpanSt= styled.span`
font-size:20px;
padding:5px;
`;

const Img = styled.img`
border-radius:50%;
width:80px;
margin-right:30px;

`;

const Img2 = styled.img`
border-radius:10px;
width:600px;
margin-left:100px;
`;

const Div = styled.div`
height:300px;
width:700px;
padding: 10px;
border:1px solid lightgray;
`;
const TextArea = styled.textarea`
font-size:20px;
border:none;
font-family: Poppins, sans-serif;
margin-left:50px;
`;

const Button = styled.button`
display:block;
margin-Left: 580px;
margin-top:-50px;
font-size: 15px;
font-family: Poppins, sans-serif;
font-weight:bold;
color:white;
padding: 10px 20px;
background-color: blueviolet;
cursor: pointer;
width:70px;
border-radius: 30px;
border:none;
&:disabled {
    background-color: gray;
    border:none;
  }
/* :hover {
background-color: #CBC3E3;
border-radius:30px;
} */

`;

  
const Counter = styled.p`
margin-Left: 500px;
margin-top:140px;
`;
const GrayS = styled.p`
color:gray;
margin-left:50px;
`;
const GrayS2 = styled.p`
color:gray;
margin-left:2px;
`;
const BoldS = styled.p`
font-weight:bold;
`;


const TweetCharact = styled.div`
/* border:4px solid red; */
`;

const DivF = styled.div`
margin-left:20px;
display:flex;
`;

const Pstyle = styled.p`
margin-left:130px;
margin-top:-30px;
`;

const WholeBox = styled.div`
width:720px;
`;
const DivWholeBox = styled.div`
border:1px solid lightgray;
width:720px;
`;


export default HomeFeed;