import React from 'react'
import { Bookmark } from "lucide-react"; 

const Card = (props) => {

    console.log(props.company);
    

  return (
      <div className="job-card">

        {/* TOP */}
        <div className="card-top">
          <div className="logo-wrapper">
            <img
              src={props.logo}
              alt= {`${props.company} logo`}
              className="logo-img"
            />
          </div>

          <button className="save-btn">Save  <Bookmark size={15} /></button>
        </div>

        {/* MIDDLE */}
        <div className="card-middle">
          <span className="company-time">
            <strong>{props.company}</strong> . {props.posted}
          </span>

          <h2 className="job-title">{props.role}</h2>

          <div className="tags">
            <span className="tag">{props.tag1}</span>
            <span className="tag">{props.tag2}</span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="card-bottom">
          <div className="salary">
            <span className="amount">{props.pay}</span>
            <span className="location">{props.location}</span>
          </div>

          <button className="apply-btn">Apply now</button>
        </div>

      </div>
  )
}

export default Card