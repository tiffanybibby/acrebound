import React from "react";
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllProperties, postProperty, deleteProperty, putProperty } from '../services/properties';
import { getAllUnits, postUnit, deleteUnit, putUnit } from '../services/units';

import Home from '../screens/Home/Home';
import Properties from '../screens/Properties';
import PropertyEdit from '../screens/PropertyEdit';
import PropertyCreate from '../screens/PropertyCreate';
import PropertyDetail from '../screens/PropertyDetail';

export default function MainContainer(props) {
  const [properties, setProperties] = useState([]);
  const [units, setUnits] = useState([]);
  const { currentUser } = props;
  const history = useHistory();
  const [toggleFetch, setToggleFetch] = useState(false)


  useEffect(() => {
    const fetchProperties = async () => {
      const propertyList = await getAllProperties();
      setProperties(propertyList);
    };
    fetchProperties();
  }, [toggleFetch]);

  useEffect(() => {
    const fetchUnits = async () => {
      const unitList = await getAllUnits();
      setUnits(unitList);
    };
    fetchUnits();
  }, [toggleFetch]);

  const handlePropertyCreate = async (propertyData) => {
    const newProperty = await postProperty(propertyData);
    setProperties((prevState) => [...prevState, newProperty]);
    history.push('/properties');
    setToggleFetch((curr) => !curr)
  };

  const handlePropertyDelete = async (id) => {
    await deleteProperty(id);
    setProperties((prevState) => prevState.filter((propertyItem) => propertyItem.id !== id));
    setToggleFetch((curr) => !curr)
    history.push('/properties');
  };

  const handlePropertyUpdate = async (id, propertyData) => {
    const updatedProperty = await putProperty(id, propertyData);
    setProperties((prevState) =>
      prevState.map((property) => {
        return property.id === Number(id) ? updatedProperty : property;
      })
    );
    history.push('/properties')
    // setToggleFetch((curr) => !curr);
  };

  const handleUnitCreate = async (unitData) => {
    const newUnit = await postUnit(unitData);
    setUnits((prevState) => [...prevState, newUnit]);
    history.push('/properties');
    setToggleFetch((curr) => !curr)
  };

  const handleUnitDelete = async (id) => {
    await deleteUnit(id);
    setUnits((prevState) => prevState.filter((unitItem) => unitItem.id !== id))
    setToggleFetch((curr) => !curr)
    history.push('/properties');
  };

  const handleUnitUpdate = async (id, unitData) => {
    const updatedUnit = await putUnit(id, unitData);
    setUnits((prevState) =>
      prevState.map((unit) => {
        return unit.id === Number(id) ? updatedUnit : unit;
      })
    );
    history.push('/properties')
    setToggleFetch((curr) => !curr);
  };

  return (
    <Switch>
      <Route path='/properties/new'>
        <PropertyCreate currentUser={currentUser} handlePropertyCreate={handlePropertyCreate} />
      </Route>
      <Route path='/properties/:id/edit'>
        <PropertyEdit currentUser={currentUser} properties={properties} handlePropertyUpdate={handlePropertyUpdate} />
      </Route>
      <Route path='/properties/:id'>
        <PropertyDetail handlePropertyDelete={handlePropertyDelete} />
      </Route>
      <Route path='/properties'>
        <Properties units={units} properties={properties} handlePropertyDelete={handlePropertyDelete} handleUnitCreate />
      </Route>
      <Route path='/'>
        <Home units={units} properties={properties} handlePropertyDelete={handlePropertyDelete} />
      </Route>
    </Switch>
  );
}
