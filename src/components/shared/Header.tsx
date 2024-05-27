import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/details-page">Details Page</Link>
        </li>
      </ul>
    </div>
  );
}
