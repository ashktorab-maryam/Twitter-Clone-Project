import styled, { keyframes } from "styled-components";

const PoppingCircle = ({size,color}) =>{
return(
    <>
    <Animate size={size} color={color}/>
    </>
)   
}

const fadeOut = keyframes`
from{
    opacity:1;
}
to{
    opacity: 0;
}
`;

const transform = keyframes`
from{
    transform:scale(0);
}
to{
    transform:scale(1);
}
`;

const Animate = styled.div`
/* animation-timing-function:cubic-bezier(.5,-800,.5,800); */
animation: ${transform} 800ms forwards , ${fadeOut} 500ms forwards;
/* ${({ color }) => color} */

`
export default PoppingCircle; 