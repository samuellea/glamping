import React from 'react';

const Error = ({ error }) => {

  if (error) return (
    <div>
      <h1 style={{ fontSize: '50px' }}>{error.response.data.status} <span style={{ color: 'darkred' }}>:(</span></h1><p>{error.response.data.msg}</p>
    </div>
  )

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '100px', paddingTop: '100px', color: "#4C2A66" }}>404 <span style={{ color: '#9f5ad5' }}>:(</span></h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0% 5%' }} >
        <p style={{ fontSize: '25px', color: 'gray' }}>Whatever was here hit the trail some time ago...</p>
      </div>
    </>
  )

};

export default Error;