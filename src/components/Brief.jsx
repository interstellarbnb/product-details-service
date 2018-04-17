import React from 'react';

const Brief = (props) => {
  return (
    <div className="grid-container">
      <div className="spaceType">{props.info.type}</div>
      <div className="spaceTitle">{props.info.title}</div>
      <div className="spaceLoc">{props.info.location}</div>
      <div className="box">
        <div className="stats">
          <div className="guests">{props.info.numGuests} Guests</div>
        </div>
        <div className="stats">
          <div className="bedrooms">{props.info.numBedrooms} Bedroom</div>
        </div>
      </div>
      <div className="stats">
        <div className="beds">{props.info.numBeds} Beds</div>
      </div>
      <div className="stats">
        <div className="baths">{props.info.numBaths} Bath</div>
      </div>
    </div>
  );
};
export default Brief;

