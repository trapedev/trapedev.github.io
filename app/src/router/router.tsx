import { BrowserRouter, Route, Routes } from "react-router-dom";

// HOME
import Home from "pages/home/home";

const Router = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
