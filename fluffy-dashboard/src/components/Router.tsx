import { Routes, Route } from "react-router-dom";
import { InvestHome } from "../features/invest";
import { TrackerHome } from "../features/tracker";

const Router = () => (
  <div>
    <Routes>
      <Route path="/" element={<TrackerHome />} />
      <Route path="/invest" element={<InvestHome />} />
    </Routes>
  </div>
);

export { Router };
