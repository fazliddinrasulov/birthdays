import React from "react";

const List = ({ item }) => {
  return (
    <div className="person">
      <img src={item.image} alt="" className="img" />
      <div>
        <h4>{item.name}</h4>
        <p>{item.age} years</p>
      </div>
    </div>
  );
};

export default List;
