import React from "react";
import "./Card.css";
const Card = ({ data, handleclick, getdata, isselected, selecteddata }) => {
  const handleClick = () => {
    if (selecteddata.email === data.email) handleclick(!isselected);
    else {
      handleclick(true);
      getdata(data);
    }
  };

  return (
    <div
      className="card__box"
      style={{
        backgroundColor:
          selecteddata.email === data.email && isselected === true
            ? "#a259ff"
            : "white",
        color:
          selecteddata.email === data.email && isselected === true
            ? "white"
            : "",
      }}
      onClick={handleClick}
    >
      <div className="gender">
        {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)} . NL
      </div>
      <h3 className="name">
        {data.name.title}. {data.name.first} {data.name.last}
      </h3>
      <div
        className="email"
        style={{
          color:
            selecteddata.email === data.email && isselected === true
              ? "white"
              : "#e4726a",
        }}
      >
        {data.email}
      </div>
    </div>
  );
};

export default Card;
