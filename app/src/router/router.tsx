import { BrowserRouter, Route, Routes } from "react-router-dom";

// HOME
import Home from "pages/home";
import Education from "pages/education";
import Experiences from "pages/experiences";
import AcademicPaper from "pages/academicPaper";
import Accomplishments from "pages/accomplishments";
import Skills from "pages/skills";

const Router = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/academic-paper" element={<AcademicPaper />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/accomplishments" element={<Accomplishments />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
