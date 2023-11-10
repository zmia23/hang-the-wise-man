import { Button } from "@mui/material"

const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const Keyboard = ( {onClick, usedKeys}) => {

  return (
    <div style={{ display:'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px'}}>
      {Alphabet.map(letter => (
      <Button 
        key={letter} 
        variant="contained" 
        size="large" 
        style={{ marginRight: '5px', marginBottom:'5px', fontWeight: '700', boxShadow: '-3px 3px 3px #bdbdbd'}} 
        onClick={() => onClick(letter)} 
        disabled={Array.isArray(usedKeys) && usedKeys.includes(letter)}
        >
          { letter }
        </Button>
      ))}
    </div>
  )
}

export default Keyboard
