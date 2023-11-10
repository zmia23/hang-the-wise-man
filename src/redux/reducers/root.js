import playerReducer from './player';
import quoteReducer from './quote'
import leaderboardsReducer from './score';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  player: playerReducer,
  quote: quoteReducer,
  score: leaderboardsReducer
})

export default rootReducer