import React from "react";

function InviteMail() {
  return (
    <>
      <p className="score-result-text bold">
        Come & join us at Prowein: HALL 14 STAND A10 | 15th-17th May
      </p>
      <p className="score-result-invite bold">
        Book your meeting with us at <span> </span>
        <span
          className="mail-text"
          onClick={() => (window.location = "mailto:a.draper@raices.wine")}
        >
          a.draper@raices.wine
        </span>
        <span> </span> ;- Andrea Draper
      </p>
    </>
  );
}

export default InviteMail;
