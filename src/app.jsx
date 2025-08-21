import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import "../src/assets/style/app.css";

const Home = lazy(() => import("./pages/Home/home.jsx"));
const ProjectPage = lazy(() => import ("./pages/ProjectPage/projectPage.jsx"));


ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:project_id" element={<ProjectPage />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
