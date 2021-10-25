import React from "react";
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UnitCard(props) {
  console.log(props.currentOwner) //FIXME

  return (

    <Card sx={{ maxWidth: 250, maxHeight: 250, margin:1}}>
      {/* <Link to={`/units/${props.id}`}> */}
        <CardContent>

          <Typography gutterBottom variant="caption" component="div">
            <React.Fragment>
              Unit #:{props.unit_number} <br/>
              Total Beds:{props.beds}<br/>
              Total Baths:{props.baths}<br/>
              Sq ft:{props.sq_ft}<br/>
              Occupied:{props.occupied}<br/>
              Monthly Rent: ${(props.monthly_rent)}<br />
              Property #: {props.property_id}
            </React.Fragment>
          </Typography>
        </CardContent>
      {/* </Link> */}
      <CardActions>
        <Button size="small" onClick={() => props.handleUnitDelete(props.id)}>Delete</Button>
        <Link to={`properties/${props.property_id}/units/${props.id}/edit`}>
          <Button size="small">Edit</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
