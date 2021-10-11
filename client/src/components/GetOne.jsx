import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getOneProperty } from '../services/properties';
import { getOneUnit } from '../services/units';
// import PropertyCard from '../components/PropertyCard';

const [property, setProperty] = useState(null);
const { id } = useParams();
const { currentOwner } = props;
const [unitItem, setUnitItem] = useState(null);
const { units, handleUnitUpdate } = props;

export const OneProperty = useEffect(() => {
  const fetchProperty = async () => {
    const propertyData = await getOneProperty(id);
    setProperty(propertyData);
  };
  fetchProperty();
}, [id]);


export const OneUnit = useEffect(() => {
  const fetchUnitItem = async () => {
    const unitData = await getOneUnit(id);
    setUnitItem(unitData);
  };
  fetchUnitItem();
}, [id]);