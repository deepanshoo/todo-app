import { createStore } from 'redux';
import noteReducer from './actionReducers';

const store = createStore(noteReducer);

export default store;