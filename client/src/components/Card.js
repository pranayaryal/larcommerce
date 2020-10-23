import React from 'react'

const Card = props => {
  return (
    <div className="flex flex-row justify-start">
      <div className="w-3/5 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <p>Scalable</p>
      </div>
      <div className="w-1/5 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <p>Fast</p>
      </div>
      <div className="w-2/5 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        <p>Reliable</p>
      </div>


    </div>

  )
};

export default Card;