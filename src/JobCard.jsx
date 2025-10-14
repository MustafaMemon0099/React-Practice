import React from "react";
import "./App.css";

function JobCard(props) {
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="job-logo">
          <img
            src = {props.imgSrc} alt={props.user}
          />
        </div>
        <button className="save-btn">Save </button>
      </div>

      <div className="job-info">
        <h3>{props.user} <span>{props.days}</span></h3>
        <h2>{props.position}</h2>

        <div className="tags">
          <span>{props.type}</span>
          <span>{props.level}</span>
        </div>
      </div>

      <hr />

      <div className="job-footer">
        <div className="price">
          <h3>{props.price}</h3>
          <p>{props.location}</p>
        </div>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
}

export default JobCard;
