import { Route, Routes } from "react-router-dom";

// HOME
import Home from "pages/home";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouterPage;
