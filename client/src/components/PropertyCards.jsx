import { useState, useEffect } from 'react'
// import './PropertyCards.css'
import PropertyCard from './PropertyCard'
import { getAllProperties } from '../services/properties'

export default function PropertyCards(props) {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      const allProperties = await getAllProperties()
      setProperties(allProperties)
    }
    fetchProperties()
  }, [])

  const CARDS = properties
    
  .map((property, index) =>
        <div key={property.id}>
        <PropertyCard
          id={property.id}
          img={property.img}
        nickname={property.nickname}
        address = {property.address}
        units_num={property.units_num}
        sq_ft={property.sq_ft}
          price={property.price}
          key={index}
          />
          </div>
      ) 
    

  return (
    <div className='property-cards'>
      <div className='index-cards'>{CARDS}</div>
    </div>
  )
}
