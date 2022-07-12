import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import React from 'react';
import { useEffect } from "react";
import { useState} from "react";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import ActionBar from "./ActionBar";
import { TweetContext } from "./TweetContex";

// import handleAfterPublishTweet from "./handleAfterPublishTweet";
// import moment from "moment";

const HomeFeed = (props) => {
    const [currentTweets, setCurrentTweets] = React.useState(null);
    const [status, setStatus] = React.useState("loading");

    const [updateFeed, setUpdateFeed]= useState("")
    const [count, setCount] = useState('280');
    let vcolor="gray"
    if (count < 55){
        vcolor= "orange"
    }
    if (count < 0){
        vcolor= "red"
    }

    // const {
    //     isLikedByCurrentUser,
    //     isRetweetedByCurrentUser,
    //   } = useContext(TweetContext);

useEffect(() => {
    fetch ('/api/me/home-feed')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        setCurrentTweets(data)
        setStatus("idle")
    })
},[updateFeed])

const [fname, setFname] = useState("")    
const handleChange = e => {
    setFname(e.target.value)
    setCount("280"-e.target.value.length)
  }


const PostTweet = () => {
    fetch('/api/tweet', {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({status : fname})}) //???
        .then(res => res.json())
        .then(data => {
        setUpdateFeed(data)
        setFname("")
        setCount("280")

        })
    }


// const shoot = () => {
//     setCont(cont => currentUser.profile.displayName + fname + cont);  
//     setFname("")   
// }

// let history = useHistory();
// function handleClick() {
//     ev.stopPropagation().history.push("/home");
//   }


    const {
        currentUser,
        //  status,
    } = useContext(CurrentUserContext);
    if (!currentUser || !currentTweets)
    return <CircularProgress/>

    return (<div>

        <Text>Home</Text>
        <Div>
        <Img src={currentUser.profile.avatarSrc} alt={currentUser.profile.handle}></Img>
    
        <label>
            {" "}
            <textarea type="text" value={fname} onChange={handleChange} />
        </label>
        <Counter style={{color: vcolor}}>{count}</Counter>
        <Button onClick={PostTweet}>Meow</Button>
        <div>
        </div>
        </Div>

        {/* ev.stopPropagation();



  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
 */}

{currentTweets.tweetIds.map(id => {
    return <div> 
        <StyledLink to={`/tweet/${id}`}>
        <div >
        <StyledLink to={`/profile/${currentTweets.tweetsById[id].author.handle}`}>
        <Img src={currentTweets.tweetsById[id].author.avatarSrc} ></Img>
        <p>{currentTweets.tweetsById[id].author.displayName}</p>
        <p>@{currentTweets.tweetsById[id].author.handle} {currentTweets.tweetsById[id].author.joined}</p>
        </StyledLink>
        </div>
        <p>{currentTweets.tweetsById[id].status}</p>
        {currentTweets.tweetsById[id].media.length>0 && <Img2 src={currentTweets.tweetsById[id].media[0]?.url} alt="img"></Img2>}
        {/* <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
      /> */}
        
        {/* {currentTweets.tweetsById[id].retweetFrom.handle} */}

        {/* {moment().format('- MMMM Do')} */}   
        {/* {currentTweets.tweetsById[id].status} */}
        {/* <Tweet /> --> currentTweets.tweetsById[id] */}
        </StyledLink>
            </div>
})}
        </div>);
    // console.log(currentUser)
    
};
const Text = styled.p`
font-size: 40px;
font-weight:bold;
font-family: Poppins, sans-serif;
`;

const Img = styled.img`
border-radius:50%;
width:100px;
`;

const Img2 = styled.img`
border-radius:10px;
width:600px;
`;

const Div = styled.div`
height:380px;
width:700px;
padding: 10px;
border:1px solid lightgray;

`;

const Button = styled.div`
display:block;
margin-Left: 580px;
margin-top:0;
font-size: 24px;
font-family: Poppins, sans-serif;
font-weight:bold;
color:white;
padding: 10px 20px;
background-color: blueviolet;
cursor: pointer;
width:70px;
border-radius: 30px;
:hover {
background-color: #CBC3E3;
border-radius:30px;
}
`;

const StyledLink  = styled(Link)`

text-decoration: none;
color: black;

`;
  
const Counter = styled.p`
margin-Left: 500px;
margin-top:140px;
`;


export default HomeFeed;