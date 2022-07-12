import { createContext,useState } from "react";
import moment from "moment";



export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {

    const [numOfRetweets, setnumOfRetweets] = useState(65);
    const [numOfLikes, setnumOfLikes] = useState(460);
    const [isLiked, setisLiked] = useState(false);
    const [isRetweeted, setisRetweeted] = useState(false);
    const handleToggleRetweets = () => {
        !isRetweeted ? setnumOfRetweets(numOfRetweets + 1) : setnumOfRetweets(numOfRetweets - 1)
        setisRetweeted(!isRetweeted);
    }

    const handleToggleLike = () =>{
        !isLiked ? setnumOfLikes(numOfLikes + 1) : setnumOfLikes(numOfLikes - 1)
        setisLiked(!isLiked);
    }

    return (<TweetContext.Provider value={{
        date:`${moment().format('LT - MMMM Do, YYYY')}`,
        numOfRetweets: numOfRetweets,
        numOfLikes : numOfLikes,
        isRetweetedByCurrentUser:isRetweeted ,
        isLikedByCurrentUser:isLiked ,
        setisLiked,
        setisRetweeted,
        handleToggleLike: handleToggleLike,
        handleToggleRetweets: handleToggleRetweets,
    }}>
        {children}
        </TweetContext.Provider>
    )
};

export default TweetProvider;