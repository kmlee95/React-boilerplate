export const LOADING = {
  // sginup, signin, logout example
  LOADING_SIGNUP_SUBMIT: 'LOADING_SIGNUP_SUBMIT' as const,
  LOADING_SIGNIN_SUBMIT: 'LOADING_SIGNIN_SUBMIT' as const,
  LOADING_LOGOUT: 'LOADING_LOGOUT' as const,

  // is loading
  LOADING_POSTS: 'LOADING_POST' as const,
} as const;

export type loadingType = typeof LOADING[keyof typeof LOADING];
