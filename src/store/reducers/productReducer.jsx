import {
  SET_CATEGORİES,
  SET_FETCH_STATE,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LİST,
  SET_TOTAL,
} from "../actions/productActions";

export const FETCH_STATES = {
  NotFetched: "NOT_FETCHED",
  Fetching: "FETCHING",
  Fetched: "FETCHED",
  FetchFailed: "FETCH_FAILED",
};

const product = {
  categories: [],
  productList: [],
  total: null,
  limit: 10,
  offset: null,
  filter: "",
  fetchState: FETCH_STATES.NotFetched,
};

const productReducer = (state = product, action) => {
  switch (action.type) {
    case SET_PRODUCT_LİST:
      return { ...state, productList: [...state.productList, action.payload] };
    case SET_CATEGORİES:
      return { ...state, categories: [...action.payload] };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};

export default productReducer;
