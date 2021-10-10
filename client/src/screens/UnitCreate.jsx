import React from "react";
import { useState } from 'react'

export default function UnitCreate(props) {
  const [formData, setFormData] = useState({
    unit_number: '',
    beds: '',
    baths: '',
    sq_ft: '',
    monthly_rent: '',
    occupied: '',
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  return (
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleUnitCreate(formData);
    }}>
      <h3>Add Unit</h3>
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
      <button>Submit</button>
    </form>
  );
}
