import React from 'react';
import styled from "styled-components"

const Loading = () => {
  return (
    <Wrapper>
      <div className="center">
        <div id="loading" className="loading1"></div>
        <div id="loading" className="loading2"></div>
        <div id="loading" className="loading3"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div` 
height:90vh;
width:100%;

.center{  
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

@keyframes loading{
  0%{
    height: 50px;
    top: 0px;
  }
  
  50%{
    height: 70px;
    top: -10px;
  }
  
  100%{
    height: 50px;
    top: 0px;
  }
}

#loading{
  position:absolute;
  background-color: ${({ theme }) => theme.colors.btn};
  height: 50px;
  width: 15px;
  animation-name: loading;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
 #loading.loading1{
  left:-25px;
  animation-delay: 0.2s;
}

#loading.loading2{
  left:0px;
  animation-delay: 0.4s;
}

#loading.loading3{
  left:25px;
  animation-delay: 0.6s;
}


`

export default Loading
