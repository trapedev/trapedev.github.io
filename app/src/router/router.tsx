import { Route, Routes } from "react-router-dom";

// HOME
import Home from "pages/home";
import Education from "pages/education";
import Experiences from "pages/experiences";
import AcademicPaper from "pages/academicPaper";
import Accomplishments from "pages/accomplishments";
import Skills from "pages/skills";

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/academic-paper" element={<AcademicPaper />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default RouterPage;
