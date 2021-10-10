import React from "react";
import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function PropertyEdit(props) {
  const [formData, setFormData] = useState({
    nickname: '',
    address: '',
    units_num: '',
    img: '',
    sq_ft: '',
    price: '',
  });
  const { id } = useParams();
  const { currentOwner, properties, handlePropertyUpdate } = props;
  

  useEffect(() => {
    const prefillFormData = () => {
      const singleProperty = properties.find(property=> property.id === Number(id) )
      setFormData({
        nickname: singleProperty.nickname,
        address: singleProperty.address,
        units_num: singleProperty.units_num,
        img: singleProperty.img,
        sq_ft: singleProperty.sq_ft,
        price: singleProperty.price,
      });
    }
    if (properties.length) {
      prefillFormData();
    }
  }, [properties, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
<div>
      {
        currentOwner ?
          <>
            <Card sx={{ maxWidth: 500, maxHeight: 300 }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePropertyUpdate(id, formData);
              }}
              >
              <CardContent>
              <h3>Edit property</h3>
              <label>
                Nickname:
                    <input
                  type="text"
                  name='nickname'
                  value={formData.nickname}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Address:
                <input
                  type='text'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Units:
                <input
                  type='number'
                  name='units_num'
                  value={formData.units_num}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Image:
                <input
                  type='text'
                  name='img'
                  value={formData.img}
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
              <label>
                Price:
                <input
                  type='number'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                />
              </label>
              <br />
                </CardContent>
                <CardActions>
            <Button size="small" >Save Changes</Button>
            </CardActions>
            </form>
            </Card>
            </>
          : <Redirect to={`/properties/${props.id}/edit`}/>
      }
          </div>
  );
}
