import { Routes, Route } from "react-router-dom";
import { InvestHome } from "../features/invest";
import { ProjectHome } from "../features/project";

const Router = () => (
  <div className="container mx-auto">
    <Routes>
      <Route path="/" element={<ProjectHome />} />
      <Route path="/project" element={<ProjectHome />} />
      <Route path="/invest" element={<InvestHome />} />
    </Routes>
  </div>
);

export { Router };
