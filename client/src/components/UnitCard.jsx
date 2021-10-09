import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UnitCard(props){
  return (
//     <>
//       <Link className="unit-component" to={`/units/${props.id}`}>
//         <p className="unit-unit_number">{props.unit_number}</p>
//         <p className="unit-beds">{props.beds}</p>
//         <p className="unit-baths">{props.baths}</p>
//         <p className="unit-sq_ft">{props.sq_ft}</p>
//         <p className="unit-monthly_rent">{props.monthly_rent}</p>
//         <p className="unit-occupied">{props.occupied}</p>
//       </Link>
//     </>
//   )
// }
    
<Card sx={{ maxWidth: 250, maxHeight: 250 }}>
<Link to={`/units/${props.id}`}>
<CardContent>
  <Typography gutterBottom variant="h7" component="div">
    Unit #:{props.unit_number}
  </Typography>
  <Typography gutterBottom variant="h7" component="div">
  Total Beds:{props.beds}
    </Typography>
  <Typography gutterBottom variant="h7" component="div">
    Total Baths:{props.baths}
    </Typography>
  <Typography gutterBottom variant="h7" component="div">
    Sq ft:{props.sq_ft} 
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
    Occupied:{props.occupied} 
    </Typography>
  <Typography gutterBottom variant="h7" component="div">
    Monthly Rent: ${(props.monthly_rent)}
  </Typography>
</CardContent>
</Link>
<CardActions>
  <Button size="small" onClick={() => props.handleUnitDelete(props.id)}>Delete</Button>
  <Link to={`/units/${props.id}/edit`}>
  <Button size="small">Edit</Button> </Link>
</CardActions>
</Card>
)}
