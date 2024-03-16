import React from "react";
import photos from "./../assets/photo-grid.png";

export default function Body() {
  return (
    <div className='body--'>
      <img src={photos} className='photogrid'></img>
          <h1 className='body--title'>Online Experiences</h1>
      <p className='body--text'>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
}
