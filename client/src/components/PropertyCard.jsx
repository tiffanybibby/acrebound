import { Link } from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './PropertyCards.css'

export default function PropertyCard(props) {
  console.log(props.currentOwner) //FIXME
  return (
<div className="pcard">
    <Card sx={{ maxWidth: 345, height: 450}}>
      <Link to={`/properties/${props.id}`}>
        <CardMedia
          component="img"
          alt="property"
          height="180"
          image={props.img}
        />
          <CardContent style={{ width: 300, padding: 20 }}>
          {/* <Typography gutterBottom variant="h6" component="div"> */}
            {props.nickname}<br />
          {/* </Typography> */}
          {/* <Typography gutterBottom variant="body2" component="div"> */}
            {props.address}<br />
            Total Units: {props.units_num}<br />
            Total Sq ft: {props.sq_ft}<br />
            <br />
            <br />
          {/* </Typography> */}
          {/* <Typography gutterBottom variant="body1" component="div"> */}
            ${(props.price)}
          {/* </Typography> */}
        </CardContent>
        </Link>
        <div className="actions" >
      <CardActions>
          <Button size="small" onClick={() => props.handlePropertyDelete(props.id)}>Delete</Button>
        <Link to={`/properties/${props.id}/edit`} onClick={(e) => e.stopPropagation()}>
          <Button size="small">Edit</Button> </Link>
        <Link to={`properties/${props.id}/units/new`}>
          <Button className="createbtn" size="small">Create Unit</Button>
        </Link>
      </CardActions>
      </div>
      </Card>
      </div>
  )
}




















// import React from 'react';
// import './PropertyCards.css'
// import { Link } from 'react-router-dom'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function PropertyCard(props) {
//   const { currentOwner, properties, property, units, handlePropertyDelete, id } = props

//   return (

//     <Card sx={{ maxWidth: 345 }}>
//       <Link to={`/properties/${property.id}`}>
//         <CardMedia
//           component="img"
//           alt="property"
//           height="180"
//           image={property.img}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             {property.nickname}<br />
//           </Typography>
//           <Typography gutterBottom variant="body2" component="div">
//             {property.address}<br />
//             Total Units: {property.units_num}<br />
//             Total Sq ft: {property.sq_ft}<br />
//             <br />
//             <br />
//           </Typography>
//           <Typography gutterBottom variant="body1" component="div">
//             $ {(property.price)}
//           </Typography>
//         </CardContent>
//       </Link>
//       <CardActions>
//         <Button size="small" onClick={() => handlePropertyDelete(property.id)}>Delete</Button>
//         <Link to={`/properties/${property.id}/edit`}>
//           <Button size="small">Edit</Button> </Link>
//         <Link to={`properties/${property.id}/units/new`}>
//         <Button size="small">Create Unit</Button>
//         </Link>
//       </CardActions>
//     </Card>
//   )
// }

