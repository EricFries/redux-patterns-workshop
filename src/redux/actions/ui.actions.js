export const SET_LOADER = 'SET_LOADER';

export const setLoader = (state, entity) => ({
  type   : SET_LOADER,
  payload: {
    data: state,
    meta: entity
  }
});