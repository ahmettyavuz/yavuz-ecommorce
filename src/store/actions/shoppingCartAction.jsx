export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const setCart = () => {
  return { type: SET_CART, payload: data };
};

export const setPayment = () => {
  return { type: SET_PAYMENT, payload: data };
};

export const setAddress = () => {
  return { type: SET_ADDRESS, payload: data };
};
