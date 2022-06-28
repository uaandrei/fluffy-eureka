import { Router } from "./Router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

const Layout = () => (
  <div className="text-lg">
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Router />
    </BrowserRouter>
  </div>
);

export { Layout };
