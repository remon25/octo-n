import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/templetes/Nav";
import Loading from "./components/ui/Loading";

const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Project = lazy(() => import("./pages/Project"));
const Courses = lazy(() => import("./pages/Courses"));

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<Project />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
