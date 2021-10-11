import React from "react";
import { Link, Redirect } from 'react-router-dom';
import PropertyCards from '../components/PropertyCards';
import UnitCards from "../components/UnitCards";



export default function Properties(props) {

  console.log(props.currentOwner) //FIXME
  console.log(props.properties) //FIXME not being recieved
  console.log(props.units) //FIXME not being recieved 

  return (
    
      <div>
      {props.currentOwner ?
        <>
          < PropertyCards currentOwner={props.currentOwner} handlePropertyDelete={props.handlePropertyDelete} />
          <Link to='/properties/new'>
            <button>Create Property</button>
          </Link>
          
          <div>
            <UnitCards units={props.units} />
          </div>
        </>
        : <Redirect to="/properties" />
      }
    </div >
  );
}























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
