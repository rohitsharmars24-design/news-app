import React from "react"; 
import {Link} from "react-router-dom"
export default function Navbar({ 
    title = "Set Title here", 
    atitle = "set a here", 
    name = "dev name here",
    ...props 
}){ 
     if (typeof title !== "string" || typeof atitle !== "string" || typeof name !== "string") {
        console.warn(`Warning: Invalid prop 'title' of type '${typeof title}' supplied to 'Navbar', expected 'string'.`);
    }
//     if (typeof title !== "string") {
//     console.warn(`Warning: Invalid prop 'title' of type '${typeof title}', expected 'string'.`);
// }
// if (typeof atitle !== "string") {
//     console.warn(`Warning: Invalid prop 'atitle' of type '${typeof atitle}', expected 'string'.`);
// }
// if (typeof name !== "string") {
//     console.warn(`Warning: Invalid prop 'name' of type '${typeof name}', expected 'string'.`);
// 
else{
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/click">Notebook</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/india">India</Link></li>
            <li><Link className="dropdown-item" to="/america">America</Link></li>
            <li><Link className="dropdown-item" to="/canada">Canada</Link></li>
            <li><Link className="dropdown-item" to="/australia">Australia</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div className="form-check form-switch mx-3">
 <input 
  className="form-check-input" 
  type="checkbox" 
  role="switch" 
  // 1. THIS FIXES THE HANDLE POSITION: It tells Bootstrap's CSS exactly when to slide the knob right
  checked={props.mode === 'dark'} 
  // 2. THIS FIXES THE BACKGROUND: It fires your state function in App.js
  onChange={props.togglefun} 
/>
  <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} >{props.chngmode}</label>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} `} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
  
    )
}
}

// Navbar.propTypes ={
//     title:PropTypes.string.isRequired,
//     atitle:PropTypes.string,
//     name:PropTypes.string
// }
// Navbar.defaultProps={
//     title:"Set Title here",
//     atitle:"set a here",
//     name:"dev name here"
// }