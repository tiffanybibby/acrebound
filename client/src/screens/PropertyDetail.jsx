import React from "react";
import { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { getOneProperty } from '../services/properties';

export default function PropertyDetail(props) {
  const [propertyItem, setPropertyItem] = useState(null);
  const { id } = useParams();
  const { currentOwner, handlePropertyDelete } = props

  console.log(props.currentOwner) //FIXME
  console.log(id) //FIXME

  useEffect(() => {
    const fetchPropertyItem = async () => {
      const propertyData = await getOneProperty(id);
      setPropertyItem(propertyData);
      console.log(propertyData) //FIXME
    };
    fetchPropertyItem();
  }, [id]);

  console.log(propertyItem) //FIXME
  return (
    <>
      <div className="property-detail">
        {currentOwner ?
          <div className="property-detail-container">
            <img src={propertyItem?.img} alt={propertyItem?.nickname} />
            <div className="property-detail">
              <div>
                <h5>{propertyItem?.nickname}</h5>
                <h4>Address: {propertyItem?.address}</h4>
                <br></br>
                <p>Description: Broker ipsum dolor sit amet, consectetuer modern interior elit. Doorman building commodo ligula eget dolor. Cum sociis noted architect penatibus et magnis dis high ceilings montes, nascetur stunning views mus. High Line quam felis, ultricies nec, pellentesque rent-controlled tenant in place, pretium quis, sem.</p>
              </div>
              <div className="details-bttns">
                <Link to={`/properties/${id}/edit`}>
                  <button className="edit">Edit Property</button>
                </Link>
                <button onClick={() => handlePropertyDelete(propertyItem.id)}>Remove Property</button>
              </div>
            </div>
          </div>
          : <Redirect to="/login" />}
      </div>
    </>
  );
}








































// TODO:  remove Property Card - switch to it own return
// TODO: add OneProperty



// import React from "react";
// import { useState, useEffect } from 'react';
// import { useParams, Redirect } from 'react-router-dom';
// import { getOneProperty } from '../services/properties';
// import PropertyCard from '../components/PropertyCard';

// export default function PropertyDetail(props) {
//   const [property, setProperty] = useState(null);
//   const { id } = useParams();
//   const { currentOwner } = props;

//   useEffect(() => {
//     const fetchProperty = async () => {
//       const propertyData = await getOneProperty(id);
//       setProperty(propertyData);
//     };
//     fetchProperty();
//   }, [id]);

//   return (
//     <>
//     <div className="property-detail">
//       {currentOwner ?
//         <PropertyCard
//           id={property?.id}
//           img={property?.img}
//           nickname={property?.nickname}
//           address={property?.address}
//           units_num={property?.units_num}
//           sq_ft={property?.sq_ft}
//           price={property?.price}
//         />
//         : <Redirect to={`/properties/${props.id}`} />
//         }
//       </div>
//       </>
//   );
// }