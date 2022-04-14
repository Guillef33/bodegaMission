import React, { useState } from "react";

function InviteMail() {
  const param = window.location.pathname;
  console.log(param);

  const [colorText, setColorText] = useState(param);
  return (
    <div className={param === "/results" ? "blanco" : "negro"}>
      <p>Come & join us at Prowein: HALL 14 STAND A10 | 15th-17th May</p>

      <p>
        Book your meeting with us at <span> </span>
        <span
          className="mail-text"
          onClick={() => (window.location = "mailto:a.draper@raices.wine")}
        >
          a.draper@raices.wine
        </span>
        <span> </span> Andrea Draper
      </p>
    </div>
  );
}

export default InviteMail;
