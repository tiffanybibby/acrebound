import React from "react";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneProperty } from '../services/properties';
import PropertyCard from '../components/PropertyCard';
import CardMedia from '@mui/material/CardMedia';

export default function PropertyDetail(props) {
  const [propertyItem, setPropertyItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPropertyItem = async () => {
      const propertyData = await getOneProperty(id);
      setPropertyItem(propertyData);
    };
    fetchPropertyItem();
  }, [id]);

  return (
      <div className="property-detail"> 
      <PropertyCard
        id={propertyItem?.id}
        img={propertyItem?.img}
      nickname={propertyItem?.nickname}
      address = {propertyItem?.address}
      units_num={propertyItem?.units_num}
      sq_ft={propertyItem?.sq_ft}
        price={propertyItem?.price}
      />
      </div>
  );
}
