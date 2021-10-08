import { Link } from 'react-router-dom'

const UnitCard = (props) => {
  return (
    <>
      <Link className="unit-component" to={`/units/${props.id}`}>
        <p className="unit-unit_number">{props.unit_number}</p>
        <p className="unit-beds">{props.beds}</p>
        <p className="unit-baths">{props.baths}</p>
        <p className="unit-sq_ft">{props.sq_ft}</p>
        <p className="unit-monthly_rent">{props.monthly_rent}</p>
        <p className="unit-occupied">{props.occupied}</p>
      </Link>
    </>
  )
}
export default UnitCard