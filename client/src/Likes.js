import React from 'react';
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import { FiRepeat } from "react-icons/fi";
import Action from "./Action";

class Likes extends React.Component {

constructor(props){

    super(props);
    this.state ={
        likes: 0,
        updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
}


updateLikes() {

    if(!this.state.updated) {
        this.setState((prevState, props) => {
            return {
            likes: prevState.likes + 1,
            updated: true
        };
        });
    } else {
    this.setState((prevState, props) => {
        return {
        likes: prevState.likes - 1,
        updated: false
        }; 
    });

    }
}

render(){

    return(
    <Wrapper>
    <Action color="rgb(27, 149, 224)" size={50}>
        <SpanSt><FiMessageCircle /></SpanSt>
    </Action>
    <Count><Action 
        color="rgb(23, 191, 99)" 
        size={50}>
        <SpanSt><FiRepeat /></SpanSt>
    </Action>
        </Count><span></span>
        <Count onClick={this.updateLikes}><Action 
        color="rgb(224, 36, 94)" 
        size={50}>
        <SpanSt><FiHeart /></SpanSt>
    </Action>
        </Count>{this.state.likes}
    <Action color="rgb(27, 149, 224)" size={50}>
        <SpanSt><FiShare/></SpanSt>
    </Action>
    </Wrapper>
    );
}


}
const Div = styled.div`
display:flex;
`;

const SpanSt= styled.span`
font-size:25px;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 48px;
width:700px;
margin-left:30px;
`;

const Count = styled.div`
margin-right:-80px;
`;

export default Likes;
