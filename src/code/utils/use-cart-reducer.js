export const cartReducer = (state, action) => {
  switch (action.type) {
    case "PLUS": {
      return { ...state, count: state.count + action.payload.count };
    }
    case "MINUS":
      return {
        ...state,
        count: state.cart - action.payload.count,
      };
  }
};
