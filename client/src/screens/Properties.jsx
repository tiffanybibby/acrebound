import React from "react";
import { Link } from 'react-router-dom';
import PropertyCards from '../components/PropertyCards';


export default function Properties(props) {
  return (
    <div>

      <PropertyCards />
      <Link to='/properties/new'>
        <button>Create</button>
      </Link>
    </div>
  );
}
