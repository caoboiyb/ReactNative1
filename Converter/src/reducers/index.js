import { combineReducers } from 'redux';

import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';
import leftUnitReducer from './leftUnitReducer';
import rightUnitReducer from './rightUnitReducer';
import { navigationReducer } from '../AppNavigation';

export default reducers = combineReducers({
  baseValue: baseValueReducer,
  category: categoryReducer,
  nav: navigationReducer,
  leftUnit: leftUnitReducer,
  rightUnit: rightUnitReducer
});