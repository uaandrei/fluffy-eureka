import { Link } from "react-router-dom";

const Header = () => (
  <div className="bg-slate-500 mb-3">
    <div className="container mx-auto">
      <nav>
        <Link to="/project">Project</Link> | <Link to="/invest">Invest</Link>
      </nav>
    </div>
  </div>
);

export { Header };
