import styled from "styled-components";

export const Container = styled.div`
 padding:0rem 12rem;

  @media (max-width:${({ theme }) => theme.media.mobile}){
padding-right: 40px;
padding-left: 40px;

}
`