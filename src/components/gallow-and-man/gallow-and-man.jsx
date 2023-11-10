import './gallow-and-man.css'

const GallowAndMan = ({ errors }) => {
  return (
    <div className='figure-container'>
      <svg viewBox='0 0 200 300'>
        {/* Gallow */}
        <line x1='30%' y1='6.67%' x2='70%' y2='6.67%' />
        <line x1='70%' y1='6.67%' x2='70%' y2='16.67%' />
        <line x1='30%' y1='6.67%' x2='30%' y2='76.67%' />
        <line x1='10%' y1='76.67%' x2='50%' y2='76.67%' />
        {/* Head */}
        {errors > 0 && <circle cx='70%' cy='23.33%' r='6.67%'/>}
        {/* Body */}
        {errors > 1 && <line x1='70%' y1='30%' x2='70%' y2='50%' />}
        {/* Arms */}
        {errors > 2 && <line x1='70%' y1='40%' x2='60%' y2='33.33%' />}
        {errors > 3 && <line x1='70%' y1='40%' x2='80%' y2='33.33%' />}
        {/* Legs */}
        {errors > 4 && <line x1='70%' y1='50%' x2='60%' y2='60%' />}
        {errors > 5 && <line x1='70%' y1='50%' x2='80%' y2='60%' />}
      </svg>
    </div>
  )
}

export default GallowAndMan