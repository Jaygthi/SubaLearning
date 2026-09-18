import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Maths from "../pages/Maths";
import Physics from "../pages/Physics";
import TutorEnroll from "../pages/TutorEnroll";
import Contact from "../pages/Contact";
import Demo from "../pages/Demo";
import NotFound from "../pages/Notfound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="maths" element={<Maths />} />
        <Route path="physics" element={<Physics />} />
        <Route path="tutor-enroll" element={<TutorEnroll />} />
        <Route path="contact" element={<Contact />} />
        <Route path="demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}