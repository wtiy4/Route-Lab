import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";

function Layout() {
  return (
    <>
      <Main />
      <Outlet />
      <Contact />
      <Courses></Courses>
    </>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
