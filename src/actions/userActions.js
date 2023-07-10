import axios from "axios";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = (filtered) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      if (filtered) {
        const response = await axios.get("https://reqres.in/api/users");
        const users = response.data.data;
        const filteredUsers = users.filter(
          (user) =>
            user.first_name.startsWith("G") || user.last_name.startsWith("W")
        );
        dispatch(fetchUsersSuccess(filteredUsers));
      } else {
        const response = await axios.get("https://reqres.in/api/users");
        const users = response.data.data;
        dispatch(fetchUsersSuccess(users));
      }
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

