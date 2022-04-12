import { createStore } from 'redux';
import { reducer } from './reducer';
import { initialStatePhotos } from './initialStatePhotos';

export const store = createStore(reducer, initialStatePhotos);
