import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>AcreBound</h1>
        {props.currentOwner ? (
          <div>
            <p>{props.currentOwner.first_name}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {props.currentOwner && (
          <div>
            <Link to='/properties'>Properties</Link>
            {/* <Link to='/units'>Units</Link> */}
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}