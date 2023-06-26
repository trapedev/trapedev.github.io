import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import RouterPage from "router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <RouterPage />
  </HashRouter>
);
