import React from 'react';

const Brief = (props) => {
  return (
    <div>
      <div className="type">{props.info.type}</div>
      <div className="title">{props.info.title}</div>
      <div className="location">{props.info.location}</div>
      <div className="numRooms">{props.info.numGuests}</div>
    </div>
  );
};
export default Brief;

