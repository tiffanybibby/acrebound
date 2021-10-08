import { Link } from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PropertyCard(props) {
  return (
//     <> 
//       <Link className="property-component" to={`/properties/${props.id}`}>
//         <img className="property-img" src={props.img} alt={props.nickname} />
//         <p className="property-nickname">{props.nickname}</p>
//         <p className="property-address">{props.address}</p>
//         <p className="property-units_num">{props.units_num}</p>
//         <p className="property-sq_ft">{props.sq_ft}</p>
//         <p className="property-price">{props.price}</p>
//       </Link>
//       <div>
//         <Link to={`/properties/${props.id}`}>
//           <p>{props.nickname}</p>
//         </Link>
//         <Link to={`/properties/${props.id}/edit`}>
//           <button>Edit</button>
//         </Link>
//         <button onClick={() => props.handlePropertyDelete(props.property.id)}>
//           Delete
//         </button>
//       </div>
//       </>
//   )
// }

<Card sx={{ maxWidth: 345 }}>
<Link to={`/properties/${props.id}`}>
<CardMedia
  component="img"
  alt="property"
  height="180"
  image={props.img}
  />
<CardContent>
  <Typography gutterBottom variant="h6" component="div" type='text'
    name='nickname'value={props.nickname}>
    {props.nickname}
  </Typography>
  <Typography gutterBottom variant="h7" component="div">
    {props.address}
    </Typography>
  <Typography gutterBottom variant="h8" component="div">
    Total Units: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.units_num}
    </Typography>
  <Typography gutterBottom variant="h7" component="div">
    Total Sq ft:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.sq_ft} 
    </Typography>
  <Typography gutterBottom variant="h7" component="div">
    ${(props.price)}
  </Typography>
</CardContent>
</Link>
<CardActions>
  <Button size="small" onClick={() => props.handlePropertyDelete(props.id)}>Delete</Button>
  <Link to={`/properties/${props.id}/edit`}>
  <Button size="small">Edit</Button> </Link>
</CardActions>
</Card>
)}

