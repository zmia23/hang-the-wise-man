import { apiClient } from "../../api/api-client"

export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST'
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS'
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE'

const fetchQuoteRequest = () => ({
  type: FETCH_QUOTE_REQUEST
})

const fetchQuoteSuccess = (payload) => ({
  type: FETCH_QUOTE_SUCCESS,
  payload
})

const fetchQuoteFailure = (error) => ({
  type: FETCH_QUOTE_FAILURE,
  payload: error
})

export const fetchQuote = () => {
  return async (dispatch) => {
    dispatch(fetchQuoteRequest())
    try {
      console.log('LOADING::::QUOTE')
      const quote = await apiClient.getQuote()
      console.log('RESPONSE:::QUOTE:::', quote)
      dispatch(fetchQuoteSuccess(quote))
    } catch(e) {
      dispatch(fetchQuoteFailure(e))
    }
  }
} 