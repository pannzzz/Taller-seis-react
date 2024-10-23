import { createStore } from 'redux';
import { contadorReducer } from './reducer';

export const store = createStore(contadorReducer);
