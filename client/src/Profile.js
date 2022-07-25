// // import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { useContext } from "react";
// import { CurrentUserContext } from "./CurrentUserContext";
// import { useState} from "react";
// import React from 'react';
// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const Profile = (props) => {
//     const {
//         currentUser,
//         //  status,
//       } = useContext(CurrentUserContext);
//       const history = useHistory();
//       const {profileId} = useParams()
//     const [currentTweets, setCurrentTweets] = React.useState(null);
//     const [status, setStatus] = React.useState("loading");
//     const [updateFeed, setUpdateFeed]= useState("")

//     useEffect(() => {
//       fetch (`/api/${profileId}/feed`)
//       .then (res => res.json())
//       .then (data => {
//           console.log(data)
//           setCurrentTweets(data)
//           setStatus("idle")
//       })
//       .catch(()=> history.push("/error")) 
//   },[updateFeed])

//       if (!currentUser || !currentTweets)
//       return <div>loading</div>

//       return (<div>
//     <Imgban src={currentUser.profile.bannerSrc} alt={currentUser.profile.handle}></Imgban>
//     <Imgav src={currentUser.profile.avatarSrc} alt={currentUser.profile.handle}></Imgav>
//     <p>{currentUser.profile.displayName}</p>
//     <p>@{currentUser.profile.handle}</p>
//     <p>{currentUser.profile.bio}</p>
//     <p>{currentUser.profile.location} {currentUser.profile.joined}</p>
//     <p>{currentUser.profile.numFollowing} Followingggggg {currentUser.profile.numFollowers} Followers</p>
//     <p>{currentUser.profile.numFollowing} Following {currentUser.profile.numFollowers} Followers</p>


//     {currentTweets.tweetIds.map(id => {
//         return <>
//             {currentTweets.tweetsById[id].retweetFrom && <p>{currentTweets.tweetsById[id].retweetFrom.displayName}Retweeted</p>}
//             <Img src={currentTweets.tweetsById[id].author.avatarSrc} />
//             <p>{currentTweets.tweetsById[id].author.displayName}</p>
//             <p>@{currentTweets.tweetsById[id].author.handle} {currentTweets.tweetsById[id].author.joined}</p>
//             <p>{currentTweets.tweetsById[id].status}</p>
//                 {currentTweets.tweetsById[id].media.length>0 && <Img2 src={currentTweets.tweetsById[id].media[0]?.url} alt="img"/>}
//         </>

//     })}
//     </div>);
// };


// const Imgav = styled.img`
// border-radius:50%;
// width:200px;
// margin-top:-100px;
// margin-left:20px;
// border: 5px solid white
// `;

// const Imgban = styled.img`
// width:100%;
// `;

// const Img = styled.img`
// border-radius:50%;
// width:100px;
// `;

// const Img2 = styled.img`
// border-radius:10px;
// width:600px;
// `;

// export default Profile;