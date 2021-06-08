import React from "react";
import "../assets/styles/containers/NotFound.scss";

const NotFound = () => (
  // React fragments for not add a new div to our DOM, but we add the children inside them, there are two ways to created them
  // The first one: <React.Fragment></React.Fragment>
  // The second one:
  <>
    <div class='mainbox'>
      <div class='err'>404</div>
      <div class='msg'>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
        <p>
          Let's go <a href='#'>home</a> and try from there.
        </p>
      </div>
    </div>
  </>
);

export default NotFound;
