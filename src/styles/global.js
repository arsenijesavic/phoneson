import { createGlobalStyle, css } from "styled-components"

const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  /* Additional resets */
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }
  /* Fix antialiasing */
  *,
  *:before,
  *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Disable user select on everything but texts */
  *,
  *:before,
  *:after {
    user-select: none;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  pre,
  ul,
  ol,
  li,
  table,
  tr,
  th,
  td {
    user-select: text;
  }
`

const global = css`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    /* font-family: "Montserrat", sans-serif; */
    font-weight: 400;
    line-height: 1.45;
    background-color: white;
    color: #393f49;
  }

  @media all and (max-width: 736px) {
    html {
      font-size: 14px;
    }
  }

  p {
    margin-bottom: 1.25em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1rem;
    font-weight: 900;
    line-height: 1.15;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-top: 0;
    font-size: 4.209em;
  }

  h2 {
    font-size: 3.157em;
  }

  h3 {
    font-size: 2.369em;
  }

  h4 {
    font-size: 1.777em;
  }

  h5 {
    font-size: 1.333em;
  }

  small,
  .text_small {
    font-size: 0.75em;
  }

  p {
    margin-bottom: 1.25em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 900;
    line-height: 1.15;
  }

  .button {
    padding: 1em;
    background: red;
    display: block;
  }
`
export default createGlobalStyle`
  ${reset}
  ${global}
`
