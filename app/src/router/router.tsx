import { HashRouter, Route, Routes } from "react-router-dom";

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
      <HashRouter>
        <Routes>
          <Route path="/#" element={<Home />} />
        </Routes>
      </HashRouter>
      <HashRouter>
        <Routes>
          <Route path="/#/education" element={<Education />} />
        </Routes>
      </HashRouter>
      <HashRouter>
        <Routes>
          <Route path="/#/experiences" element={<Experiences />} />
        </Routes>
      </HashRouter>
      <HashRouter>
        <Routes>
          <Route path="/#/academic-paper" element={<AcademicPaper />} />
        </Routes>
      </HashRouter>
      <HashRouter>
        <Routes>
          <Route path="/#/accomplishments" element={<Accomplishments />} />
        </Routes>
      </HashRouter>
      <HashRouter>
        <Routes>
          <Route path="/#/skills" element={<Skills />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Router;
