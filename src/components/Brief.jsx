import React from 'react';

const Brief = (props) => {
  return (
    <div className="container">
      <div className="spaceType">Entire Apartment</div>
      <div className="spaceTitle">Sunny apartment near metro station</div>
      <div className="spaceLoc">Vienna</div>
      <div className="box">
        <div className="stats">
          <div className="guests">4 Guests</div>
        </div>
        <div className="stats">
          <div className="bedrooms">1 Bedroom</div>
        </div>
      </div>
      <div className="stats">
        <div className="beds">2 Beds</div>
      </div>
      <div className="stats">
        <div className="baths">1 Bath</div>
      </div>
    </div>
  );
};
export default Brief;

