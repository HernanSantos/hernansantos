import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('../assets/fonts/Segoe UI.ttf');

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
  }
`;

export const lightTheme = {
    primary:"#EFEFEF",
    secondary:"#373744",
    title:"#F05454",
    primarybg:"#0074B7",
    secondarybg:"#EFEFEF",
}

export const darkTheme = {
    primary:"#EFEFEF",
    secondary:"#EFEFEF",
    title:"#F05454",
    primarybg:"#222831",
    secondarybg:"#7E7474",
}