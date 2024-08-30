import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }


  html, body {
    font-size: 16px;
   
    font-family: '-apple-system', 'BlinkMacSystemFont', system-ui, 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 400;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    -webkit-overflow-scrolling: touch
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: '-apple-system', 'BlinkMacSystemFont', system-ui, 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    word-break: keep-all;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none
  }
  button, input, select, table, textarea {
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    user-select: none;
    outline: none;
    transform: none;
  }
  textarea {
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
    resize: none;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }
  textarea {
    border: 0;
    word-break: keep-all;
    word-wrap: break-word
  }
  button, a {
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
  label {
    cursor: pointer;
  }
  button, input {
    border-radius: 0;
    border: 0;
    background-color: unset;
  }
  input, select, textarea, button {
    outline: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
