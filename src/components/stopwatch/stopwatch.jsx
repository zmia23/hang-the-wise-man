import { useEffect } from "react"

const Stopwatch = ({ isActive, time, setTime }) => {

  useEffect(() => {
    let interval = null
    if(isActive) {
      interval = setInterval(() => {
        setTime(time => time + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive])

  return(
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '50px', marginBottom: '30px'}}>
    <div>
      {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
    </div>
    <div>
      {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
    </div>
    <div>
      {("0" + Math.floor((time / 10) )).slice(-2)}
    </div>
  </div>
  )
}

export default Stopwatch