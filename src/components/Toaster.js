import React from 'react';

const Toaster = (props) => {

  const errorType = props.type;

  return (
    <div>This is a Toaster {errorType}</div>
  );
};
export default Toaster;
