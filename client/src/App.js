import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";
import HomeFeed from "./HomeFeed";
// import Profile from "./Profile";
import Notifications from "./Notifications";
import styled from "styled-components";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import ProfileDetails from "./ProfileDetails";
import ErrorScreen from "./ErrorScreen";
// import AddTripButton from "./AddTripButton";

// import CurrentUserProvider from "./CurrentUserContext";




const App = (props) => {
  

  return (

    <Router>
    <Sidebar />
        <Switch>
          <>
            <Route exact path="/"><Style><HomeFeed/></Style></Route>
            <Route exact path="/notifications"><Style><Notifications/></Style></Route>
            <Route exact path="/bookmarks"> <Style><Bookmarks/></Style></Route>
            <Route exact path="/tweet/:tweetId"> <Style><TweetDetails/></Style></Route>
            {/* <Route exact path="/profile/me"> <Style><Profile/></Style></Route> */}
            <Route exact path="/profile/:profileId"> <Style><ProfileDetails/></Style></Route>
            <Route exact path="/error"><Style><ErrorScreen/></Style></Route>
            {/* <Route path="/items/:itemId"><ItemDetails/></Route> */}

            </>
        </Switch>
</Router>

  );
};

const Style = styled.div`
margin-left:20%;
margin-top:-320px;
display: block;
`;

export default App;

// {tweetById.media.length > 0 && (
//   <Media src={tweetById.media[0]?.url} alt="img" />
// )}
