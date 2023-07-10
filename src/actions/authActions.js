export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email === "user@example.com" && password === "password") {
        const user = {
          email: "user@example.com",
          fullName: "Mohit Shrivastava",
          role: "admin",
          positionAppliedFor: "Software Engineer",
        };
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailure("Incorrect credentials."));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const googleLogin = (tokenId) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const user = tokenId
      console.log(user);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
