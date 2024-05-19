import styled from "styled-components";

export const StyledContainer = styled.div`
   width:90%;
   height:70vh;
   margin:40px auto;
   
`
export const StyledImageContainer = styled.div`
   width:100%;
   height:100%;
   display:flex;
   align-items:center;
`
export const StyledImage = styled.img`
   width:100%;
   height:100%;
`
export const StyledBackArrow = styled.div`
   cursor:pointer;
   font-size:30px;
   background-color:black;
   color:white;
   display:flex;
   align-items:center;
   border-radius:50%;
   position:absolute;
   left:55px;

   @media (max-width: 768px) {
    position:absolute;
    left:30px;
  }
   
`;
export const StyledForwardArrow = styled.div`
    cursor:pointer;
    font-size:30px;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    border-radius:50%;
    position:absolute;
    right:55px;

    @media (max-width: 768px) {
        position:absolute;
        right:30px;
      }
`;
