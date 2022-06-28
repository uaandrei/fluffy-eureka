import { Router } from "./Router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

const Layout = () => (
  <BrowserRouter>
    <Sidebar />
    <Header />
    <Router />
  </BrowserRouter>
);

export { Layout };
