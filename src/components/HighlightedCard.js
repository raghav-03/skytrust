import React from "react";
import "./HighlightedCard.css";
const HighlightedCard = ({ data }) => {
  return (
    <div className="Higlightedcard__box">
      <img src={data.picture.thumbnail} alt="profile" />
      <div className="details">
        <h1>
          {data.name.title}. {data.name.first} {data.name.last}
        </h1>
        <div className="address">
          <div style={{ color: "#a259ff", fontWeight: "600" }}>
            {data.location.street.number}
          </div>
          , <div>{data.location.street.name}</div>,
          <div>{data.location.city}</div>,<div>{data.location.state}</div>,
          <div style={{ fontWeight: "700" }}>{data.location.country}</div>,
          <div>{data.location.postcode}</div>
        </div>
        <div className="timezone">
          <div>{data.location.timezone.offset} - </div>
          <div>{data.location.timezone.description}</div>
        </div>
        <div className="gender" style={{ color: "#8a8a8a" }}>
          {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default HighlightedCard;
