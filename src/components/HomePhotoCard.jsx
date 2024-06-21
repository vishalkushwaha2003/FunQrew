import React from "react";
import f4 from '../assets/homePhoto/founder4.png'

function HomePhotoCard() {
  return (
    <div class="card ">
        <img src={f4} alt="founder photo" class='im'/>
  <div class="card__content">
    <p class="card__title">Ankit Srivastva</p>
    <p class="card__description"> Founder of FunQrew</p>
  </div>
</div>
  );
}

export default HomePhotoCard;
