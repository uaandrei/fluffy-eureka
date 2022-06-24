import { Router } from "./Router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

const Layout = () => (
  <BrowserRouter>
    <Sidebar />
    <div className="container mx-auto">
      <Header />
      <Router />
      <Footer />
    </div>
  </BrowserRouter>
);

export { Layout };
