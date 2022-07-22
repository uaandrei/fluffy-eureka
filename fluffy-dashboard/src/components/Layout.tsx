import { Router } from "./Router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from "../features/notification";

const Layout = () => (
  <div className="text-lg">
    <BrowserRouter>
      <Sidebar />
      <Header />
      <NotificationProvider>
        <Router />
      </NotificationProvider>
    </BrowserRouter>
  </div>
);

export { Layout };
