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
import UnitEdit from "../screens/UnitEdit";
import UnitCreate from "../screens/UnitCreate";


export default function MainContainer(props) {
  const [properties, setProperties] = useState([]);
  const [units, setUnits] = useState([]);
  const { currentOwner } = props;
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
    setToggleFetch((curr) => !curr);
    history.push('/properties')
  };

  const handleUnitCreate = async (unitData) => {
    const newUnit = await postUnit(unitData);
    setUnits((prevState) => [...prevState, newUnit]);
    setToggleFetch((curr) => !curr)
    history.push('/properties');
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
      <Route path='/properties/:id/edit'>
        <PropertyEdit properties={properties} currentOwner={currentOwner}  handlePropertyUpdate={handlePropertyUpdate} />
      </Route>
      <Route path='/properties/new'>
        <PropertyCreate currentOwner={currentOwner} handlePropertyCreate={handlePropertyCreate} />
      </Route>
      <Route path='/properties/:id'>
        <PropertyDetail currentOwner={currentOwner} handlePropertyDelete={handlePropertyDelete} toggleFetch={toggleFetch} />
      </Route>
      <Route path='/properties'>
        <Properties currentOwner={currentOwner} units={units} properties={properties} handlePropertyDelete={handlePropertyDelete} handleUnitDelete={handleUnitDelete}  />
      </Route>
      <Route path='/properties/:id/units/:id/edit'>
        <UnitEdit currentOwner={currentOwner} properties={properties} units={units} handleUnitUpdate={handleUnitUpdate} />
      </Route>
      <Route path='/properties/:id/units/new'>
        <UnitCreate currentOwner={currentOwner} handleUnitCreate={handleUnitCreate} />
      </Route>
      <Route path='/'>
        <Home currentOwner={currentOwner} />
      </Route>
    </Switch>
  );
}
