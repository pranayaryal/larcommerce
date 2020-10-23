import React from 'react'

import Background from '../img/leaves.jpeg';

const Landing = props => {
    return (
    <div>
      <div className="bg-no-repeat" style={{ backgroundImage: `url(${Background})`}}>
      <img src={Background} />
      </div>
      
    </div>
  )
};

export default Landing;