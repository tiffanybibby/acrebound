import { useState, useEffect } from 'react'
// import './unitCards.css'
import UnitCard from './UnitCard'
import { getAllUnits } from '../services/units'

const UnitCards = (props) => {
  const [units, setUnits] = useState([])

  useEffect(() => {
    const fetchUnits = async () => {
      const allUnits = await getAllUnits()
      setUnits(allUnits)
    }
    fetchUnits()
  }, [])

  const CARDS = units
    
    units.map((unit, index) =>
      index < 80 ? (
        <UnitCard
          id={unit.id}
          img={unit.img}
          nickname={unit.nickname}
          units_num={unit.units_num}
          price={unit.price}
          key={index}
        />
      ) : null
    )

  return (
    <div className='unit-cards'>
      <div className='index-cards'>{CARDS}</div>
    </div>
  )
}

export default UnitCards