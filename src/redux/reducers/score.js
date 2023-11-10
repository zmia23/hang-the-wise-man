import {
  FETCH_SCORE_REQUEST,
  FETCH_SCORE_SUCCESS,
  FETCH_SCORE_FAILURE,
  //
  UPLOAD_SCORE_REQUEST,
  UPLOAD_SCORE_SUCCESS,
  UPLOAD_SCORE_FAILURE
} from '../actions/score'

const initState = {
  leaderboards: [],
  playerScore: {},
  isLoading: false,
  error: null
}

export const leaderboardsReducer = (state=initState, action) => {
  switch (action.type) {
    case FETCH_SCORE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_SCORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        leaderboards: action.payload
      }
    case FETCH_SCORE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    // Uploading players score to leader boards
    case UPLOAD_SCORE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case UPLOAD_SCORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        playerScore: action.payload
      }
    case UPLOAD_SCORE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default leaderboardsReducer