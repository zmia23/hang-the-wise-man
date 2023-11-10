import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@mui/material'
import { RestartAltRounded } from '@mui/icons-material'

import { fetchQuote } from '../redux/actions/quote'
import { fetchScore, uploadScore } from '../redux/actions/score'

import Keyboard from '../components/keyboard/keyboard'
import QuoteField from '../components/quote-field/quote-field'
import GameOverModal from '../components/game-over-modal/game-over-modal'
import Stopwatch from '../components/stopwatch/stopwatch'
import GallowAndMan from '../components/gallow-and-man/gallow-and-man'

const skipCharRegExp = new RegExp('[,.!?\';:-\\s]', 'ig')
const revealedRegExp = revealed => new RegExp(`[^${revealed.join('')},.!?;:'-\\s]`, 'ig')

const findUniqueLetters = text => {
  const uniqueChars = [...text.toUpperCase()].reduce((acc, curr) => {
    return acc.includes(curr) ? acc : acc + curr
  })

  return [...uniqueChars.replace(skipCharRegExp, '')]
}

const revealLetters = (quote, revealed) => quote.replace(revealedRegExp(revealed), '_')

const Game = () => {
  // letters state
  const [revealedLetters, setRevealedLeters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [uniqueLetters, setUniqueLetters] = useState([])
  // quote state
  const [displayQuote, setDisplayQuote] = useState('')
  // ui
  const [modalOpen, setModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [stopwatchActive, setStopwatchActive] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [duration, setDuration] = useState(0)
  
  const quote = useSelector(state => state.quote)
  const player = useSelector(state => state.player)
  const playerScore = useSelector(state => state.score.playerScore)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsGameOver(false)
    if (!quote.data.content) {
      dispatch(fetchQuote())
    }
  }, [])

  useEffect(() => {
    if (quote.data.content) {
      const unique = findUniqueLetters(quote.data.content)
      setUniqueLetters(unique)
      setStopwatchActive(true)
    }
  }, [quote.data])

  useEffect(() => {
    if (quote.data.content) {
      const replacedLetters = revealLetters(quote.data.content, revealedLetters)
      setDisplayQuote(replacedLetters)
    }
  }, [quote.data, revealedLetters, wrongLetters])

  useEffect(() => {
    if ((revealedLetters.length === uniqueLetters.length && revealedLetters.length > 0) || wrongLetters.length > 5) {
      handleGameOver()
    }
  }, [revealedLetters, wrongLetters, uniqueLetters.length])

  const resetLetters = () => {
    setStopwatchActive(false)
    setDuration(0)
    setRevealedLeters([])
    setWrongLetters([])
    setUniqueLetters([])
    setModalOpen(false)
    setIsGameOver(false)
  }

  const handleGameOver = () => {
    setIsGameOver(true)
    setStopwatchActive(false)
    setModalOpen(true)
    
    const isCorrect = revealedLetters.length === uniqueLetters.length && wrongLetters.length < 6
    
    if (isCorrect) {
      dispatch(uploadScore(quote.data, uniqueLetters.length, player.data, wrongLetters.length, duration))
    }

    setIsSuccess(isCorrect)
    dispatch(fetchScore())
  }

  const handleGuessLetter = letter => {
    const sentence = quote.data.content.toUpperCase()
    if (sentence.indexOf(letter) !== -1) {
      const revealed = [...revealedLetters, letter]
      setRevealedLeters(revealed)
    } else {
      const wrong = [...wrongLetters, letter]
      setWrongLetters(wrong)
    }
  }

  const handleRestartGame = () => {
    resetLetters()
    dispatch(fetchQuote())
  }

  const handleKeyDown = isGameOver ? () => null : handleGuessLetter

  return (
    <div style={{ background: 'white', padding: '35px', borderRadius: '20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', width: '50%', alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}>
        Click on the letters and see if it is in the quote. Make a mistake and the man will be hanging!
      </div>
      <div style={{ background: 'white', padding: '35px', borderRadius: '20px', display: 'flex', flexDirection: 'row' }}>
        <GameOverModal
          isOpen={ modalOpen }
          onClose={ () => setModalOpen(false) }
          playerScore={ playerScore }
          onRestart={ handleRestartGame }
          quote={ quote.data }
          isSuccess={ isSuccess }
        />
        <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
          <GallowAndMan errors={ wrongLetters.length } />
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
          <Stopwatch isActive={ stopwatchActive } setTime={ setDuration } time={ duration } />
          <QuoteField quoteText={ displayQuote} author={ quote.data.author } />
          <Keyboard usedKeys={ [...revealedLetters, ...wrongLetters] } onClick={ handleKeyDown } />
          <Button variant='contained' startIcon={ <RestartAltRounded /> } style={{ alignSelf: 'center' }} onClick={ handleRestartGame }>
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Game
