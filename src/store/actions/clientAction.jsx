import useAxios from "../../hooks/useAxios";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";

export const requestStart = () => ({ type: REQUEST_START });
export const requestSuccess = () => ({ type: REQUEST_SUCCESS });
export const requestError = (error) => ({ type: REQUEST_ERROR, error });

export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};

export const setRoles = (data) => {
  return { type: SET_ROLES, payload: data };
};
export const setTheme = (data) => {
  return { type: SET_THEME, payload: data };
};
export const setLanguage = (data) => {
  return { type: SET_LANGUAGE, payload: data };
};

export const getRoles = () => (dispatch) => {
  const { sendRequest, METHODS } = useAxios();
  sendRequest({
    url: "/roles",
    method: METHODS.GET,
    callbackSuccess: (data) => dispatch(setRoles(data)),
  });
  return data;
};
