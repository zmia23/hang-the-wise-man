import { useEffect, useState } from 'react'

import { Alert, Button,TextField } from '@mui/material'
import { SportsEsports } from '@mui/icons-material'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePlayerName } from '../redux/actions/player'

import HangmanIcon from '../assets/hangman.png'
import '../styles/home.css'

const Home = () => {
  const [ playerName, setPlayerName ] = useState('')
  const [ error, setError] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const player = useSelector(state => state.player)

  useEffect (() => {
    if (player.data) {
      navigate('/game');
    }

    if (player.error) {
      setError(player.error);
    }
  }, [player])

  const handleStartGame = () => {
    dispatch(savePlayerName(playerName))  
  }

  return(
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
      { error && <Alert severity='error'>{ error }</Alert> }
      <div className='image-container'>
        <img  src={ HangmanIcon } alt='hanging man' style={{ width: '300px'}}/>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>
          Welcome to Hang the Wise Man!
        </h1>
      </div>
      <div style={{ display: 'flex', alignSelf: 'center', flexDirection:'column', width: '20%', marginBottom: '30px', alignItems: 'center'}}>
        <TextField label='Player name' variant='filled' onChange={ e => setPlayerName(e.target.value) }/>
      </div>
      <div style={{ width: 'auto', alignSelf:'center', alignItems: 'center'}}>
        <Button variant='contained' startIcon={ <SportsEsports/> } onClick={ handleStartGame }>Start Game</Button>
      </div>
    </div>
  )
}

export default Home