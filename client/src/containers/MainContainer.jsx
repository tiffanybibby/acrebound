import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllProperties, postProperty, deleteProperty, putProperty } from '../services/properties';
import { getAllUnits } from '../services/units';
import Units from '../screens/units';
import Properties from '../screens/Properties';
import PropertyCreate from '../screens/PropertyCreate';
import PropertyEdit from '../screens/PropertyEdit';
import PropertyDetail from '../screens/PropertyDetail';

export default function MainContainer() {
  const [properties, setProperties] = useState([]);
  const [units, setUnits] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchProperties = async () => {
      const propertyList = await getAllProperties();
      setProperties(propertyList);
    };
    fetchProperties();
  }, []);

  useEffect(() => {
    const fetchUnits = async () => {
      const unitList = await getAllUnits();
      setUnits(unitList);
    };
    fetchUnits();
  }, []);

  const handlePropertyCreate = async (propertyData) => {
    const newProperty = await postProperty(propertyData);
    setProperties((prevState) => [...prevState, newProperty]);
    history.push('/properties');
  };

  const handlePropertyDelete = async (id) => {
    await deleteProperty(id);
    setProperties((prevState) => prevState.filter((propertyItem) => propertyItem.id !== id));
  };

  const handlePropertyUpdate = async (id, propertyData) => {
    const updatedProperty = await putProperty(id, propertyData);
    setProperties((prevState) =>
      prevState.map((property) => {
        return property.id === Number(id) ? updatedProperty : property;
      })
    );
    history.push('/properties');
  };

  return (
    <Switch>
      <Route path='/units'>
        <Units units={units} />
      </Route>
      <Route path='/properties/:id/edit'>
        <propertyEdit properties={properties} handlePropertyUpdate={handlePropertyUpdate} />
      </Route>
      <Route path='/properties/:id'>
        <propertyDetail units={units} />
      </Route>
      <Route path='/properties/new'>
        <propertyCreate handlePropertyCreate={handlePropertyCreate} />
      </Route>
      <Route path='/properties'>
        <Properties properties={properties} handlePropertyDelete={handlePropertyDelete} />
      </Route>
    </Switch>
  );
}
