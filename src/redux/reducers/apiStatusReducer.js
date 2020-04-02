import * as types from '../actions/actionTypes';
import initialState from './initialState';

function endsInSuccess(actionType) {
  return actionType.substring(actionType.length - 8) === '_SUCCESS';
}
function endsInError(actionType) {
  return actionType.substring(actionType.length - 6) === '_ERROR';
}

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (endsInSuccess(action.type) || endsInError(action.type)) {
    return state - 1;
  } else {
    return state;
  }
}
