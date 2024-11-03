import React from 'react'

export const ErrorMessage = ({message,code,status,timestamp}) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">{message}</h4>
        <p className="mb-0">{code}</p> <p>{status}</p>
        <p>{timestamp}</p>
        <hr />
      </div>
    </div>
  );
}
