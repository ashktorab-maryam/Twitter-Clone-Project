import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import {ReactComponent as Logo} from './logo.svg';



const Sidebar = (props) => {
  return <Div>
          <Logo/>
   
    <p><StyledLink to="/"><FiHome/>  Home</StyledLink></p>
    <p><StyledLink to="/profile/me"><FiUser/>  Profile</StyledLink></p>
    <p><StyledLink to="/notifications"><FiBell/> Notifications</StyledLink></p>
    <p><StyledLink to="/bookmarks"><FiBookmark/> Bookmarks</StyledLink></p>

    </Div>;
};

// setting the position of sidebar
const StyledLink  = styled(Link)`
margin-Left: 10px;
font-size: 30px;
text-decoration: none;
font-family: Poppins, sans-serif;
font-weight:bold;
color:black;
padding: 10px;
cursor: pointer;
:hover {
background-color: #CBC3E3;
border-radius:30px;
color:blueviolet;
}
`;
const Div  = styled.p`
margin-top: 20px;

`;



export default Sidebar;