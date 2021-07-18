import { css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = css`
  ${reset}
  body {
    font-size: 14px;
    height: 100%;
  }
`;

export default GlobalStyle;
