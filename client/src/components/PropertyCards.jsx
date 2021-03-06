import React from "react";
import { useState, useEffect } from 'react'
// import './PropertyCards.css'
import PropertyCard from './PropertyCard'
import { getAllProperties } from '../services/properties'

export default function PropertyCards(props) {
  const [properties, setProperties] = useState([])

  console.log(props.currentOwner) //FIXME

  useEffect(() => {
    const fetchProperties = async () => {
      const allProperties = await getAllProperties()
      setProperties(allProperties)
    }
    fetchProperties()
  }, [])

  const CARDS = properties
    
    .map((property, index) =>
      <React.Fragment key={index}>
        <div>
        <PropertyCard
          id={property.id}
          img={property.img}
        nickname={property.nickname}
        address = {property.address}
        units_num={property.units_num}
        sq_ft={property.sq_ft}
          price={property.price}
        key={index}
          handlePropertyDelete={props.handlePropertyDelete}
        />
        </div>
    </React.Fragment>
  )
  
    

  return (
    <div className='property-cards'>
      <div className='index-cards' >{CARDS}</div>
    </div>
  )
}














// import React from "react";
// import { useState, useEffect } from 'react'
// // import './PropertyCards.css'
// import PropertyCard from './PropertyCard'
// import { getAllProperties } from '../services/properties'


// export default function PropertyCards(props) {
//   const [properties, setProperties] = useState([])

//   const { currentOwner, units, handlePropertyUpdate, handlePropertyDelete } = props;
  
//   useEffect(() => {
//     const fetchProperties = async () => {
//       const allProperties = await getAllProperties()
//       setProperties(allProperties)
//     }
//     fetchProperties()
//   }, [])


//   const CARDS = properties.map((property, index) =>
//       <React.Fragment key={index}>
//         <div>
//           <PropertyCard
//             id={property.id}
//             img={property.img}
//             nickname={property.nickname}
//             address={property.address}
//             units_num={property.units_num}
//             sq_ft={property.sq_ft}
//             price={property.price}
//             handlePropertyDelete={handlePropertyDelete}
//             handlePropertyUpdate={handlePropertyUpdate}
//             units={units}
//             currentOwner={currentOwner}
//             key={index}
//           />
//         </div>
//       </React.Fragment>
//     )



//   return (
//     <div className='property-cards'>
//       <div className='index-cards' >{CARDS}</div>
//     </div>
//   )
// }
