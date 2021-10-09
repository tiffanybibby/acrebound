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
    
    .map((unit, index) =>
    <div key={unit.id}>
        <UnitCard
          id={unit.id}
          property_id={props.property.id}
          unit_number={unit.unit_number}
          beds={unit.beds}
          baths={unit.baths}
          sq_ft={unit.sq_ft}
          monthly_rent={unit.monthly_rent}
          occupied={unit.occupied}
          key={index}
          handleUnitDelete={props.handleUnitDelete}
        />
      </div>
    )

  return (
    <div className='unit-cards'>
      <div className='index-cards'>{CARDS}</div>
    </div>
  )
}

export default UnitCards