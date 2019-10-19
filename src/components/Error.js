import React from 'react';

const Error = ({ error }) => {

  if (error) return (
    <div>
      <h1 style={{ fontSize: '50px' }}>{error.response.data.status} <span style={{ color: 'darkred' }}>:(</span></h1><p>{error.response.data.msg}</p>
    </div>
  )

  return (
    <div>
      <h1 style={{ fontSize: '50px' }}>404 <span style={{ color: 'darkred' }}>:(</span></h1>
      <p>Page not found!</p>
    </div>
  )

};

export default Error;