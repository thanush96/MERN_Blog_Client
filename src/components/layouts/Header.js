import React from 'react'
import styled from 'styled-components'


const header=()=>{
    return <MainContainer>
        <h1>
        Welcome to the <br/>
        MERN Stack blog!
        </h1>
    </MainContainer>;
}

export default header;

//MAIN Container
const MainContainer=styled.header`
background: url(../../images/header-bg.jpg) no-repeat center/cover;
height:25rem;

h1{
  transform:translate(-50%, -50%);
  color:#fff;
  font-weight:900;
  position:absolute;
  top:20%;
  left:50%;

}


`;

