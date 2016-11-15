import { combineReducers } from 'redux';

import nameGameReducer from 'reducers/name-game-reducer';
import counterReducer from 'reducers/counter-reducer';

const rootReducer = combineReducers({
  nameGameReducer,
  counterReducer
});

export default rootReducer;
