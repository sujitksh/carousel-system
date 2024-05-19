import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  overflow: hidden;
  
  font-family: 'Poppins',sans-serif;
}  
body{
    background-color:#f9f9f9;
  }
 
`