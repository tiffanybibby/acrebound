import React from "react";
import { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from 'react-router-dom';
import PropertyCards from '../components/PropertyCards';
import UnitCards from "../components/UnitCards";
import {verifyOwner} from "../services/auth";


export default function Properties(props) {
  const [currentOwner, setCurrentOwner] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const ownerData = await verifyOwner();
      setCurrentOwner(ownerData);
    };
    handleVerify();
  }, []);
    
  return (
    
      <div>
      {currentOwner ?
        <>
          < PropertyCards handlePropertyDelete={props.handlePropertyDelete} />
          <Link to='/properties/new'>
            <button>Create</button>
          </Link>
          <div>
            <UnitCards />
          </div>
        </>
        : <Redirect to="/properties" />
      }
    </div >
  );
}
