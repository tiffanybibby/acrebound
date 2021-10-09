import React from "react";
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

export default function UnitEdit(props) {
  const [formData, setFormData] = useState({
    unit_number: '',
    beds: '',
    baths: '',
    sq_ft: '',
    monthly_rent: '',
    occupied: '',
  });
  const { id } = useParams();
  const { units, handleUnitUpdate } = props;
  

  useEffect(() => {
    const prefillFormData = () => {
      const singleUnit = units.find(Unit=> unit.id === Number(id) )
      setFormData({
        unit_number: singleUnit.unit_number,
        beds: singleUnit.beds,
        baths: singleUnit.baths,
        sq_ft: singleUnit.sq_ft,
        monthly_rent: singleUnit.monthly_rent,
        occupied: singleUnit.occupied,
      });
    }
    if (units.length) {
      prefillFormData();
    }
  }, [units, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
       handleUnitUpdate(id, formData);
      }}
    >
      <h3>Edit Unit</h3>
      <label>
      Unit #:
        <input
          type='text'
          name='unit_number'
          value={formData.unit_number}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Beds:
        <input
          type='number'
          name='beds:'
          value={formData.beds}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Units:
        <input
          type='number'
          name='baths'
          value={formData.baths}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Sq ft:
        <input
          type='number'
          name='sq_ft'
          value={formData.sq_ft}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Monthly Rent:
        <input
          type='number'
          name='monthly_rent'
          value={formData.monthly_rent}
          onChange={handleChange}
        />
      </label>
      <label>
        Occupied?:
        <input
          type='boolean'
          name='occupied'
          value={formData.occupied}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Save Changes</button>
    </form>
  );
}
