import React from 'react'

export const Loading = () => {
  return (
    <div className='text-center'>
      <div
        className="spinner-border "
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
      </div>
      <p>Loading</p>
    </div>
  );
}
