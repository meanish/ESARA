import styled from "styled-components";


export const StyleHeader = styled.header`
  background-color:${({ theme }) => theme.colors.bg};
  box-shadow:0px 2px 10px rgba(102,102,104,0.6);
  width:100%;
  top:0;
  z-index:9999;

.nav{
    display:flex;
  justify-content: space-between;
  align-items: center;
}

  
@media (max-width:${({ theme }) => theme.media.mobile}){
  padding: 0 1rem;
}
  .logo{
    height:5rem;
  }
  `