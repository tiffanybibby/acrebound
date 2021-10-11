import "./PropertyCreate.css";
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


export default function PropertyCreate(props) {
  const [formData, setFormData] = useState({
    nickname: '',
    address: '',
    units_num: '',
    img: '',
    sq_ft: '',
    price: ''
  })

  console.log(props.currentOwner) //FIXME
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
        <Card >
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handlePropertyCreate(formData);
          }}>
             <CardContent>
      <h3>Add Property</h3>
      <label>
        Nickname:
        <input
          type='text'
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
              <Button size="small" onClick={() => props.handlePropertyCreate(formData)} >Submit</Button>
            </CardActions>
          </form>
          </Card>
        </>
        </div>
  );
}








































// import React, { useState } from 'react'
// import { Redirect } from 'react-router';

// export default function PropertyCreate(props) {
//   const [formData, setFormData] = useState({
//     nickname: '',
//     address: '',
//     units_num: '',
//     img: '',
//     sq_ft: '',
//     price: ''
//   })

//   const { currentOwner } = props;

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     };

//   return (
//     <>
//       <div>
//         {currentOwner ?
//     <form onSubmit={(e)=> {
//       e.preventDefault()
//       props.handlePropertyCreate(formData);
//     }}>
//       <h3>Add Property</h3>
//       <label>
//         Nickname:
//         <input
//           type='text'
//           name='nickname'
//           value={formData.nickname}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Address:
//         <input
//           type='text'
//           name='address'
//           value={formData.address}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Units:
//         <input
//           type='number'
//           name='units_num'
//           value={formData.units_num}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Image:
//         <input
//           type='text'
//           name='img'
//           value={formData.img}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Sq ft:
//         <input
//           type='number'
//           name='sq_ft'
//           value={formData.sq_ft}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Price:
//         <input
//           type='number'
//           name='price'
//           value={formData.price}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button>Submit</button>
//           </form>
//             : <Redirect to="/login" />
//           }
//     </div>
//     </>
//   );
// }
