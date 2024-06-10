import React from "react";
import WhatWeDoCard from "./WhatWeDoCard";

function WhatWeDo() {
  return (
    <div id="whatWeDo">
      <div>
        <div>
          <h1 className="text-5xl text-center font-bold" id="aboutUs">
            WHAT WE DO
          </h1>
        </div>

        <div className="mt-20 ml-10">
          <WhatWeDoCard />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
