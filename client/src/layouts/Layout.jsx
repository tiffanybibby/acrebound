import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>AcreBound</h1>
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.first_name}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {props.currentUser && (
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