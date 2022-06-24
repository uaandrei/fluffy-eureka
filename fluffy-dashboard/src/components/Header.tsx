import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="invest">About</Link>
  </nav>
);

export { Header };
