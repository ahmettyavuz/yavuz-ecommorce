import {
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../actions/shoppingCartAction";

const order = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = order, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case SET_PAYMENT:
      return { ...state, payment: [...state.payment, action.payload] };
    case SET_ADDRESS:
      return { ...state, address: [...state.address, action.payload] };
    default:
      return state;
  }
};

export default shoppingCartReducer;
