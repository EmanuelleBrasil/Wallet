import types from '../actions/types';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
}
