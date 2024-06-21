import React from "react";
import f1 from '../assets/homePhoto/founder1.png'

function HomePhotoCard() {
  return (
    <div class="card ">
        <img src={f1} alt="founder photo" />
  <div class="card__content">
    <p class="card__title">Card Title</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>
  );
}

export default HomePhotoCard;
