import { apiClient } from "../../api/api-client"
import { scoreCalculator } from '../../utils/score-utils'

export const FETCH_SCORE_REQUEST = 'FECTH_SCORE_REQUEST'
export const FETCH_SCORE_SUCCESS = 'FECTH_SCORE_SUCCESS'
export const FETCH_SCORE_FAILURE = 'FECTH_SCORE_FAILURE'

export const UPLOAD_SCORE_REQUEST = 'UPLOAD_SCORE_REQUEST'
export const UPLOAD_SCORE_SUCCESS = 'UPLOAD_SCORE_SUCCESS'
export const UPLOAD_SCORE_FAILURE = 'UPLOAD_SCORE_FAILURE'

const fetchScoreRequest = () => ({
  type: FETCH_SCORE_REQUEST
})

const fetchScoreSuccess = (payload) => ({
  type: FETCH_SCORE_SUCCESS,
  payload
})

const fetchScoreFailure = (error) => ({
  type: FETCH_SCORE_FAILURE,
  payload: error
})

const uploadScoreRequest = () => ({
  type: UPLOAD_SCORE_REQUEST
})

const uploadScoreSuccess = (payload) => ({
  type: UPLOAD_SCORE_SUCCESS,
  payload
})

const uploadScoreFailure = (error) => ({
  type: UPLOAD_SCORE_FAILURE,
  payload: error
})

export const fetchScore = () => {
  return async (dispatch) => {
    dispatch(fetchScoreRequest())
    try {
      const result = await apiClient.getScore()
      const score = scoreCalculator(result)
      dispatch(fetchScoreSuccess(score))
    } catch(e) {
      dispatch(fetchScoreFailure(e))
    }
  }
}

export const uploadScore = (quote, uniqueCharacters, userName, errors, duration) => {
  return async (dispatch) => {
    dispatch(uploadScoreRequest())
    try {
      const result = await apiClient.postScore({ quoteId: quote._id, length: quote.length, uniqueCharacters, userName, errors, duration })
      console.log('RESULT ::: ', result)
      const score = scoreCalculator([result])[0]
      console.log('SINGLE SCORE ::: ', score)
      dispatch(uploadScoreSuccess(score))
    } catch (e) {
      dispatch(uploadScoreFailure(e))
    }
  }
}