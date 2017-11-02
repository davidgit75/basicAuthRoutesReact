import { createStore } from 'redux';
import reducers from './reducers';

const initialStates = {
  user: null
};

const store = createStore(reducers, initialStates);

export default store;
