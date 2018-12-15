import {createStore, combineReducers} from 'redux';

import orderDriver from './reducers/orderDriver/orderDriver';

const rootReducer = combineReducers({
  orderDriver: orderDriver
});

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;