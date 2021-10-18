import "./Properties.css";
import React from "react";
import { Link, Redirect } from 'react-router-dom';
import PropertyCards from '../components/PropertyCards';
import UnitCards from "../components/UnitCards";
import Button from '@mui/material/Button';



export default function Properties(props) {

  // function myFunction(showUnitContainer) {
  //   let x = document.getElementById("properties-units-container");
  //   if (x.style.visibility === "hidden") {
  //     x.style.visibility = "visible";
  //   } else {
  //     x.style.visibility = "hidden";
  //   }
  // }

  console.log(props.currentOwner) //FIXME
  console.log(props.properties) //FIXME not being recieved
  console.log(props.units) //FIXME not being recieved 

  return (


    <div className="properties-container">
      <>
        < PropertyCards currentOwner={props.currentOwner} handlePropertyDelete={props.handlePropertyDelete} />
        
        <div>
          <UnitCards currentOwner={props.currentOwner} units={props.units} />
        </div>
      </>
  </div >
);
}























//     <>
//       {/* {props.currentOwner ? */}
//     <div className="properties-container">
//             <div>
//               < PropertyCards currentOwner={props.currentOwner} handlePropertyDelete={props.handlePropertyDelete} />
//             </div>
    
//             {/* <button onClick={() => this.hideComponent("showHideDemo1")}>
//             Show all Units
//           </button> */}
//               {/* <Button onClick="showUnitContainer()">Show all Units</Button> */}

//               <div id="properties-units-container">
//                 <UnitCards units={props.units} />
//               </div>


//     </div >
//          {/* : <Redirect to="/properties" /> */}
//         </>
//   );
// }























// import React from "react";
// import { Link, Redirect } from 'react-router-dom';
// import PropertyCard from '../components/PropertyCards';
// import UnitCards from "../components/UnitCards";


// export default function Properties(props) {

//   const { currentOwner, properties, property, units, handlePropertyUpdate, handlePropertyDelete, handleUnitDelete } = props;

//   return (

//       <div>
//       {/* {currentOwner ? */}
//         {properties.map((property, index) =>
//           // <React.Fragment key={index}>
//             <div>
//               <PropertyCard
//                 // id={property.id}
//                 // img={property.img}
//                 // nickname={property.nickname}
//                 // address={property.address}
//                 // units_num={property.units_num}
//                 // sq_ft={property.sq_ft}
//                 // price={property.price}
//                 properties={properties}
//                 handlePropertyDelete={handlePropertyDelete}
//                 handlePropertyUpdate={handlePropertyUpdate}
//                 // units={units}
//                 currentOwner={currentOwner}
//                 key={index}
//               />
//             </div>
//           // </React.Fragment>
//         )}



//           {/* <PropertyCard properties={properties} handlePropertyUpdate={handlePropertyUpdate} units={units} currentOwner={currentOwner} handlePropertyDelete={handlePropertyDelete} /> */}
//           <Link to='/properties/new'>
//             <button>Create Property</button>
//           </Link>

//           <div>
//             <UnitCards units={units} properties={properties} handleUnitDelete={handleUnitDelete} />
//           </div>
//         {/* : <Redirect to="/login" />
//       } */}
//     </div >
//   );
// }
