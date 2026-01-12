import React from 'react'

function Card(props){
  
  console.log( {"full Name of user is " : props.user,
                "age of user is " : props.age,
                 "Only name of user is " : props.nameOnly});
  
    return (
    <div className="card">
    <img src={props.img} alt="profile image" />
    <h2>{props.user}</h2>
    <h4 style={{fontWeight: 'normal'}}>Age of {props.nameOnly} is {props.age}</h4>
    <p>
      Frontend Developer passionate about building clean and
      user-friendly web applications.
    </p>
    <button>View Profile</button>
  </div>
  )
}

export default Card