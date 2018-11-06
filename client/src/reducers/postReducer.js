import * as actionTypes from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.post]
      };
    default:
      return state;
  }
}