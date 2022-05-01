import React from "react";
// Import images
import newYork from "../images/new-york.png";
import locationLogo from "../images/location-img.png";

export default function Article(props) {
  return (
    <div className="article--wrapper">
      {/* Image Section*/}
      <img src={props.itemImage} className="article--img" />
      {/* Content Section */}
      <div className="article--content">
        <div className="article--content--location">
          <img src={locationLogo} alt="red location logo" />
          <span>{props.item.location}</span>
          <div className="article--content--location_link">
            <a href={props.item.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
        </div>
        <h2 className="article--content--header">{props.item.title}</h2>
        <div className="article--content-period">{`${
          props.item.startDate + " - " + props.item.endDate
        }`}</div>
        <div className="article--content--description">
          {props.item.description}
        </div>
      </div>
      <hr />
    </div>
  );
}
