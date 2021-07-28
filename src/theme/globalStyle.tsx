import { css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = css`
  ${reset}
  body {
    font-size: 14px;
    height: 100%;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;

export default GlobalStyle;
