// import React from "react";
// import { useState, useEffect } from 'react';
// import { Switch, Route, useHistory } from 'react-router-dom';

// import { getAllUnits, postUnit, deleteUnit, putUnit } from '../services/units';
// import UnitEdit from "../screens/UnitEdit";
// import UnitCreate from "../screens/UnitCreate";
// import Properties from "../screens/Properties";


// export default function UnitContainer(props) {
//   const [units, setUnits] = useState([]);
//   const [toggleFetch, setToggleFetch] = useState(false)


//   const { currentOwner } = props;
//   const history = useHistory();

//   useEffect(() => {
//     const fetchUnits = async () => {
//       const unitList = await getAllUnits();
//       setUnits(unitList);
//     };
//     fetchUnits();
//   }, [toggleFetch]);

//   const handleUnitCreate = async (unitData) => {
//     const newUnit = await postUnit(unitData);
//     setUnits((prevState) => [...prevState, newUnit]);
//     history.push('/properties');
//     setToggleFetch((curr) => !curr)
//   };

//   const handleUnitDelete = async (id) => {
//     await deleteUnit(id);
//     setUnits((prevState) => prevState.filter((unitItem) => unitItem.id !== id))
//     setToggleFetch((curr) => !curr)
//     history.push('/properties');
//   };

//   const handleUnitUpdate = async (id, unitData) => {
//     const updatedUnit = await putUnit(id, unitData);
//     setUnits((prevState) =>
//       prevState.map((unit) => {
//         return unit.id === Number(id) ? updatedUnit : unit;
//       })
//     );
//     history.push('/properties')
//     setToggleFetch((curr) => !curr);
//   };


//   return (
//     <Switch>
//       <Route path='/properties/:id/units/:id/edit'>
//         <UnitEdit currentOwner={currentOwner} units={units} handleUnitUpdate={handleUnitUpdate} />
//       </Route>
//       <Route path='/properties/:id/units/new'>
//         <UnitCreate currentOwner={currentOwner} handleUnitCreate={handleUnitCreate} />
//       </Route>
//       <Route path='/properties'>
//         <Properties currentOwner={currentOwner} units={units} handleUnitUpdate={handleUnitUpdate} handleUnitDelete={handleUnitDelete} />
//       </Route>
//     </Switch>
//   )
// }