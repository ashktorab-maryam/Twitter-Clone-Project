// import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

const Profile = (props) => {
    const {
        currentUser,
        //  status,
      } = useContext(CurrentUserContext);
      if (!currentUser)
      return <div>loading</div>

      return (<div>
    <Imgban src={currentUser.profile.bannerSrc} alt={currentUser.profile.handle}></Imgban>
    <Imgav src={currentUser.profile.avatarSrc} alt={currentUser.profile.handle}></Imgav>
    <p>{currentUser.profile.displayName}</p>
    <p>@{currentUser.profile.handle}</p>
    <p>{currentUser.profile.bio}</p>
    <p>{currentUser.profile.location} {currentUser.profile.joined}</p>
    <p>{currentUser.profile.numFollowing} Following {currentUser.profile.numFollowers} Followers</p>
    </div>);
};

// const Text = styled.p`
// font-size: 40px;
// font-weight:bold;
// font-family: Poppins, sans-serif;
// `;
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

export default Profile;