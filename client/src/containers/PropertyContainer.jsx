// // import React from "react";
// import { useState, useEffect } from 'react';
// import { Switch, Route, useHistory } from 'react-router-dom';

// import { getAllProperties, postProperty, deleteProperty, putProperty } from '../services/properties';
// import PropertyCards from "../components/PropertyCards";
// import Properties from '../screens/Properties';
// import PropertyEdit from '../screens/PropertyEdit';
// import PropertyCreate from '../screens/PropertyCreate';
// import PropertyDetail from '../screens/PropertyDetail';


// export default function PropertyContainer(props) {
//   const [properties, setProperties] = useState([]);
//   const [toggleFetch, setToggleFetch] = useState(false)

//   const { currentOwner } = props;

//   const history = useHistory();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       const propertyList = await getAllProperties();
//       setProperties(propertyList);
//     };
//     fetchProperties();
//   }, [toggleFetch]);


//   const handlePropertyCreate = async (propertyData) => {
//     const newProperty = await postProperty(propertyData);
//     setProperties((prevState) => [...prevState, newProperty]);
//     history.push('/properties');
//     setToggleFetch((curr) => !curr)
//   };

//   const handlePropertyDelete = async (id) => {
//     await deleteProperty(id);
//     setProperties((prevState) => prevState.filter((propertyItem) => propertyItem.id !== id));
//     setToggleFetch((curr) => !curr)
//     history.push('/properties');
//   };

//   const handlePropertyUpdate = async (id, propertyData) => {
//     const updatedProperty = await putProperty(id, propertyData);
//     setProperties((prevState) =>
//       prevState.map((property) => {
//         return property.id === Number(id) ? updatedProperty : property;
//       })
//     );
//     history.push('/properties')
//     setToggleFetch((curr) => !curr);
//   };

//   return (
//     <>
//       <Switch>
//         <Route path='/properties/:id/edit'>
//           <PropertyEdit properties={properties} currentOwner={currentOwner} handlePropertyUpdate={handlePropertyUpdate} />
//         </Route>
//         <Route path='/properties/:id'>
//           <PropertyDetail currentOwner={currentOwner} handlePropertyDelete={handlePropertyDelete} />
//         </Route>
//         <Route path='/properties/new'>
//           <PropertyCreate currentOwner={currentOwner} handlePropertyCreate={handlePropertyCreate} />
//         </Route>
//         <Route path='/properties'>
//           <Properties currentOwner={currentOwner} properties={properties} handlePropertyDelete={handlePropertyDelete} />
//           {/* <PropertyCards properties={properties} /> */}
//         </Route>
//       </Switch>
//     </>
//   );
// }