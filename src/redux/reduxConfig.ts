import { combineReducers } from '@reduxjs/toolkit';
import mainReducer from './slices/main';
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';


const mainPersistConfig = {
  key: 'main',
  storage,
  keyPrefix: 'redux-',
  whiteList: []
};

const rootReducer = combineReducers({
  main: persistReducer(mainPersistConfig, mainReducer),
});

export { rootReducer, mainPersistConfig }