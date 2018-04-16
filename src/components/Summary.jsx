import React from 'react';

const Summary = () => (
  <div className="summary-container">

    <div className="host">
      <img className="host-avatar" alt="host" src="https://a0.muscache.com/im/users/18431/profile_pic/1310056211/original.jpg?aki_policy=profile_x_medium"></img>
      <div className="host-info">
        <div className="host-name"> Hosted by Brenda </div>
        <a href="#" className="contact"> Contact host </a>
      </div>
    </div>

    <div className="summary">
      <div className="summary-text">

        Lovely warm comfortable and stylishly furnished house. 
        Private bedroom and bathroom with use of kitchen/breakfast room.

      </div>
      <a className="view-more" href="#"> View more about this home </a>
    </div>

  </div>
);
export default Summary;

/*

<div className="grid-container">

    <div className="host grid-item">
      <img className="host-avatar" alt="host" src="https://a0.muscache.com/im/users/18431/profile_pic/1310056211/original.jpg?aki_policy=profile_x_medium"></img>
    </div>
    <div className="host-info grid-item">
      <div className="host-name"> Hosted by Vicky </div>
      <a href="#" className="contact"> Contact host </a>
    </div>

    <div className="summary">
      <div className="summary-text">

        Lovely warm comfortable and stylishly furnished house. 
        Private bedroom and bathroom with use of kitchen/breakfast room.

        <a className="view-more" href="#"> View more about this home </a>
      </div>
    </div>

  </div>

  */