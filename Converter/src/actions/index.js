import { 
  CHANGE_BASE_VALUE,
  CHANGE_CATEGORY_ID
 } from './types';

export const createBaseValueAction = newValue => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const createCategoryAction = newCategory => ({
  type: CHANGE_CATEGORY_ID,
  payload: newCategory
})