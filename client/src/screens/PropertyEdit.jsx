import "./PropertyEdit.css";
import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import CardMedia from '@mui/material/CardMedia';

export default function PropertyEdit(props) {
  const [formData, setFormData] = useState({
    nickname: "",
    address: "",
    units_num: "",
    img: "",
    sq_ft: "",
    price: "",
  });
  const { id } = useParams();
  const { properties, handlePropertyUpdate } = props;

  console.log(props.currentOwner) //FIXME
  console.log(properties) //FIXME
  console.log(id) //FIXME
  console.log(formData) //FIXME


  useEffect(() => {
    const prefillFormData = () => {
      const singleProperty = props.properties.find(property => property.id === Number(id))
      setFormData({
        nickname: singleProperty.nickname,
        address: singleProperty.address,
        units_num: singleProperty.units_num,
        img: singleProperty.img,
        sq_ft: singleProperty.sq_ft,
        price: singleProperty.price
      });
    }
    if (props.properties.length) {
      prefillFormData();
    }
  }, [props.properties, id]);

  console.log(formData) //FIXME

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData) //FIXME

  return (
    <div className="form-container">

      <>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePropertyUpdate(id, formData);
          }}
        >
          <div className="edit-container">
            <h3>Edit property</h3>
            <label> Nickname: </label>
            <input
              type="text"
              name='nickname'
              value={formData.nickname}
              onChange={handleChange}
            />

            <br />
            <label>
              Address:
            </label>
            <input
              type='text'
              name='address'
              value={formData.address}
              onChange={handleChange}
            />
            <br />
            <label>
              Units:
            </label>
            <input
              type='number'
              name='units_num'
              value={formData.units_num}
              onChange={handleChange}
            />
            <br />
            <label>
              Image:
            </label>
            <input
              type='text'
              name='img'
              value={formData.img}
              onChange={handleChange}
            />
            <br />
            <label>
              Sq ft:
            </label>
            <input
              type='number'
              name='sq_ft'
              value={formData.sq_ft}
              onChange={handleChange}
            />
            <br />
            <label>
              Price:
            </label>
            <input
              type='number'
              name='price'
              value={formData.price}
              onChange={handleChange}
            />
            <br />

            <button type="submit">Save Changes</button>
          </div>
        </form>

      </>


    </div>
  );
}
