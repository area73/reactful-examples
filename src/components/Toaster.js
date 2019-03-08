import React from 'react';

const Toaster = (props) => {
  const errorType = props.type;
  const errorClass = `${errorType} ${props.data.statusText ? ' show' : ' hide'}`;
  return (
    <div className="toaster"><span className={errorClass}>{props.data.statusText}</span></div>
  );
};
export default Toaster;
