import { Box, Button, Divider, Modal } from "@mui/material"
import DeadIcon from '../../dead.png'
import ParytIcon from '../../party.png'
import LeaderboardsTable from "../leaderboards-table/leaderboardsTable";
import { RestartAltRounded } from "@mui/icons-material";

const style = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '50%',
  minHeight: '40%',
  maxWidth: '65%',
  backgroundColor: '#fff',
  border: '1px solid white',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  padding: '25px'
};

const modalText = (isSuccess, name) => isSuccess ? `YAY! You did it ${name}!` : `Sorry ${name}, you've ran out of tries!`

const GameOverModal = ({ isOpen, onClose, playerScore, leaderboards, onRestart, isSuccess, quote }) => {
  console.log('MODA L:::: ', playerScore)
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box style={style}>
        <div style={{ display: 'flex', justifyContent:'center', flexDirection: 'column', height:' 100%'}}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            <img src={ isSuccess ? ParytIcon : DeadIcon } alt={ isSuccess ? 'Party face' : 'Dead face' } style={{ width: '150px'}} />
          </div>
          <div style={{ alignItems: 'center', textAlign:' center', fontSize: '25px', fontWeight: '700', marginBottom: '25px'}}>{modalText(isSuccess, playerScore.userName)}</div>
          <Divider variant="middle" />
          {isSuccess && (<div style={{ display: 'flex', fontSize: '20px', fontWeight: 700, justifyContent:'center', marginTop: '15px', marginBottom: '15px', color:'#1976D2' }}>{`Your score: ${playerScore.score}`}</div>)}
          <div style={{ marginTop: '15px' }}>
            <div style={{ marginBottom: '15px' }}>Solution was:</div>
            <div style={{ marginBottom: '10px', fontStyle: 'italic' }}>{quote.content}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '12px'}}>-{quote.author}</div>
          </div>
          <div style={{ marginTop: '30px', marginBottom: '30px', display: 'flex',alignItems:'center', flexWrap: 'wrap', flexDirection: 'column'}}>
            <div style={{ marginBottom: '15px', fontWeight: 600 }}>Leaderboard</div>
            <LeaderboardsTable playersScores={leaderboards}/>
          </div>
          <Divider variant="middle" />
          <div style={{ display: 'flex', justifyContent:'center', marginTop: '25px'}}>
            <Button onClick={onRestart} variant='contained' startIcon={<RestartAltRounded/>} style={{ alignSelf: 'center' }} size="large">Start over</Button>
          </div>
          
        </div>
      </Box>
    </Modal>
  )
}

export default GameOverModal