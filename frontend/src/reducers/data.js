import _ from 'lodash';
import {
  GET_DOCS,
  GET_DOC,
  ADD_DOC,
  DELETE_DOC
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DOCS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_DOC:
    case ADD_DOC:
//    case EDIT_DOC:
//      return {
//        ...state,
//        [action.payload.id]: action.payload
//      };
    case DELETE_DOC:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};