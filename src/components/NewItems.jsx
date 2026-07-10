import React, { Component } from 'react'

export default class NewItems extends Component {
  
 
  render() {
    let{title,description,imageUrl,btnLink,...props}=this.props;
    return (
      <div className="col-lg-3 mb-4 display-flex justifpy-content-center">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://demofree.sirv.com/nope-not-here.jpg":imageUrl} className="card-img-top" alt="..." style={{height:"170px",width:"100%"}}/>
  <div className={`card-body ${props.mode=='light'?'bg-light':'bg-dark'}`} >
     <p className="adate" style={props.mode=='dark'?{color:"white"}:{color:'black'}}>{props.source}</p>
    <h5 className="card-title" style={props.mode=='dark'?{color:"white"}:{color:'black'}}>{title}</h5>
    <p className="card-text" style={props.mode=='dark'?{color:"white"}:{color:'black'}}>{description==""?"This is Some description here but in backend there no data here":description}</p>
    <p className="adate" style={props.mode=='dark'?{color:"white"}:{color:'black'}}>{new Date(props.publish).toUTCString()}</p>
    <a href={btnLink}  target="_blank" className="btn btn-sm btn-success">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
