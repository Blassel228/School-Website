import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    text-decoration: none;
    box-sizing: border-box;
  }

  :root {
    --primary-bg-color: var(--tg-theme-bg-color);
    --primary-bg-color-rgb: rgba(23,33,43,255);
    --secondary-bg-color: var(--tg-theme-secondary-bg-color);
    --dark-gold-color: #3a3924;
    --white-gold-color: #fbf3da;
    --light-gold-color: #ddb618;
    --primary-light-color: var(--tg-theme-button-color);
    --font-family: "Poppins", sans-serif;
    --font-color: var(--tg-theme-text-color);
  }
  
  html{
    height: 100%;
  }
  
  body {
    color: black;
    font-family: var(--font-family);
    background-color: var(--tg-theme-bg-color);
    line-height: 1.5;
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0;
  }
  
  .slide-out {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0f0f0f;
    transform-origin: top;
  }
  
  .slide-in {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #0f0f0f;
    transform-origin: bottom;
  }
`;
