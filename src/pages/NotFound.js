import React, { useEffect } from "react";

import ReactGA4 from "react-ga4";

function NotFound() {
  useEffect(() => {
    ReactGA4.initialize("G-8PBY6X4E0X");
    // ReactGA4.pageview("/caca");
    ReactGA4.send({ hitType: "pageview", page: "/home" });
  }, []);

  return <div className="base-layout">404 / Pagina no disponible</div>;
}

export default NotFound;
