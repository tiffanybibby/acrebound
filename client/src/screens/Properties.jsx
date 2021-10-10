import React from "react";
import { Link, Redirect } from 'react-router-dom';
import PropertyCards from '../components/PropertyCards';
import UnitCards from "../components/UnitCards";



export default function Properties(props) {


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
