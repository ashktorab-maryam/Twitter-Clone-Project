import React from 'react'
import styled from 'styled-components'
import { GiUnlitBomb } from 'react-icons/gi'

const ErrorScreen = () => {
  return (
    <Div>
        <GiUnlitBomb style={{fontSize: '80px'}} />
        <h2>An unknown error has occured.</h2>
        <p style={{fontSize: '18px'}}>Please try refreshing the page, or <a style={{color: 'blue'}} href="#">contact support</a> if the problem persists.</p>
    </Div>
  )
}
const Div = styled.div`
text-align: center;
width: 700px;
margin: 100px auto;
`
export default ErrorScreen 