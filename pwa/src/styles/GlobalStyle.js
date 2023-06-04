import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MBC1961GulimOTF from "../styles/fonts/MBC1961GulimOTFM.otf";

const GlobalStyle = createGlobalStyle`

  @font-face {
        font-family: "MBC1961GulimOTFM";
        src: local("MBC1961GulimOTFM"),
        url(${MBC1961GulimOTF}) format('otf');
        font-weight: 400;
        font-style: normal;
  }

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  
`;

export default GlobalStyle;
