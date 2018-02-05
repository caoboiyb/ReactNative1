import { 
  CHANGE_BASE_VALUE,
  CHANGE_CATEGORY_ID,
  CHANGE_LEFT_UNIT,
  CHANGE_RIGHT_UNIT
 } from './types';

export const createBaseValueAction = newValue => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const createCategoryAction = newCategory => ({
  type: CHANGE_CATEGORY_ID,
  payload: newCategory
})

export const createLeftUnitAction = newUnit => ({
  type:CHANGE_LEFT_UNIT,
  payload: newUnit
})

export const createRightUnitAction = newUnit => ({
  type:CHANGE_RIGHT_UNIT,
  payload: newUnit
})