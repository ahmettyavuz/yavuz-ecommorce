import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
  SET_USER,
} from "../actions/clientAction";

const client = {
  userInfo: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "tr",
};

const clientReducer = (state = client, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, userInfo: action.payload };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
