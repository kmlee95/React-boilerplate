import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    BACKGROUND_COLOR: string;
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
