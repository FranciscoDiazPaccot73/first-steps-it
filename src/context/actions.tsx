import { types } from './reducers';

export const setProducts = (dispatch: any, value: boolean) => {
  dispatch({ type: types.SET_IS_MOBILE, value });
};
