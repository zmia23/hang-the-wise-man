import { 
  SAVE_PLAYER_NAME_REQUEST,
  SAVE_PLAYER_NAME_SUCCESS,
  SAVE_PLAYER_NAME_FAILURE
} from '../actions/player'

const initState = {
  data: '',
  isLoading: false,
  error: null
}

const playerReducer = (state = initState, action) => {
  switch(action.type) {
    case SAVE_PLAYER_NAME_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case SAVE_PLAYER_NAME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }
    case SAVE_PLAYER_NAME_FAILURE: 
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
 }

 export default playerReducer