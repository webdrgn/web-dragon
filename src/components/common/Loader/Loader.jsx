import React from 'react';

export default function Loader({ className }) {
  return (
    <>
      <div className={`loader ${className}`}>
        <img
          className="loader__img w-24 lg:w-40"
          src="./img/dragon4.png"
        />
      </div>
    </>
  );
}
