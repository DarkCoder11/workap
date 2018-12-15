import {ORDER_DRIVER} from '../../actions/actionTypes';

const initialState = {
  item: "orderDriver"
};



const orderDriver = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DRIVER:
      return{
        ...state,
        item: "you Hvae ordered"
      }
    default:
      return state;
  }
};

export default orderDriver;
