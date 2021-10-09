import React from "react";
import { Link } from 'react-router-dom';
import PropertyCards from '../components/PropertyCards';
import UnitCards from "../components/UnitCards";


export default function Properties(props) {
  return (
    <div>

      <PropertyCards handlePropertyDelete={props.handlePropertyDelete} />
      <Link to='/properties/new'>
        <button>Create</button>
      </Link>
      <div>
        <UnitCards />
        </div>
    </div>
  );
}
