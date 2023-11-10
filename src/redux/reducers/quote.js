import { 
  FETCH_QUOTE_REQUEST,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE
} from "../actions/quote";

const initstate = {
  data: {},
  isLoading: false,
  error: null
}

const quoteReducer = (state = initstate, action) => {
  switch(action.type) {
    case FETCH_QUOTE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default quoteReducer