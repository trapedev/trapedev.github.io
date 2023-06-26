import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Router from "router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Router />
  </HashRouter>
);
