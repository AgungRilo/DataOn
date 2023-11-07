// Redux/actions.js

export const yourLoginAction = (user) => ({
    type: 'LOGIN',
    payload: user,
  });

  export const yourLogoutAction = (user) => ({
    type: 'LOGOUT',
    payload: user,
  });