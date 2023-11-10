// PLAYER ACTION TYPES
export const SAVE_PLAYER_NAME_REQUEST = 'SAVE_PLAYER_NAME_REQUEST'
export const SAVE_PLAYER_NAME_SUCCESS = 'SAVE_PLAYER_NAME_SUCCESS'
export const SAVE_PLAYER_NAME_FAILURE = 'SAVE_PLAYER_NAME_FAILURE'

// PLAYER ACTIONS
export const savePlayerNameRequest = () => ({
  type: SAVE_PLAYER_NAME_REQUEST
})

export const savePlayerNameSuccess = (playerName) => ({
  type: SAVE_PLAYER_NAME_SUCCESS,
  payload: playerName
})

export const savePlayerNameFailure = (error) => ({
  type: SAVE_PLAYER_NAME_FAILURE,
  payload: error
})

// PLAYER THUNK
export const savePlayerName = (playerName) => {
  return (dispatch) => {
    dispatch(savePlayerNameRequest())
    if(playerName !== '') {
      dispatch(savePlayerNameSuccess(playerName))
    } else {
      dispatch((savePlayerNameFailure({ message: 'Player name is invalid' })))
    }
  }
}

