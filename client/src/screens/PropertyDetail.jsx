import "./PropertyDetail.css";
import React from "react";
import { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { getOneProperty } from '../services/properties';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';


export default function PropertyDetail(props) {
  const [propertyItem, setPropertyItem] = useState(null);
  const { id } = useParams();
  const { currentOwner, handlePropertyDelete, toggleFetch } = props
  // const [toggleFetch, setToggleFetch] = useState(false)

  console.log(currentOwner) //FIXME
  console.log(id) //FIXME
  // console.log(currentOwner.id)


  useEffect(() => {
    const fetchPropertyItem = async () => {
      const propertyData = await getOneProperty(id, toggleFetch);
      setPropertyItem(propertyData);
      console.log(propertyData) //FIXME
    };
    fetchPropertyItem();
  }, [id, toggleFetch]);

  console.log(propertyItem) //FIXME
  return (
    <>
      <div className="property-detail-container1">
        {currentOwner ?
          <div className="property-detail-container2">
            <Card lg={{
              maxWidth: 150
            }}>
              <CardMedia
                component="img"
                alt="property"
                height="300"
                image={propertyItem?.img}
              />
              <CardContent>
                <div className="property-detail">
                  <h3>{propertyItem?.nickname}</h3>
                  <h4>Address: {propertyItem?.address}</h4>
                  <br></br>
                  <p>Description: Broker ipsum dolor sit amet, consectetuer modern interior elit. Doorman building commodo ligula eget dolor. Cum sociis noted architect penatibus et magnis dis high ceilings montes, nascetur stunning views mus. High Line quam felis, ultricies nec, pellentesque rent-controlled tenant in place, pretium quis, sem.</p>
                </div>
              </CardContent>
              <CardActions>
                <div className="details-bttns">
                  <Link to={`/properties/${id}/edit`}>
                    <Button size="small" className="edit">Edit Property</Button>
                  </Link>
                  <Button className="deletebtn" size="small" onClick={() => handlePropertyDelete(propertyItem.id)}>Remove Property</Button>
                </div>
              </CardActions>
            </Card>
          </div>
          // : <Redirect to="/login" />}
          : <Redirect to={`/properties/${id}`} />}
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