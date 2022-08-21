import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
      <Link to="/">🍩 Snack Check</Link>
      </h1>
      <ul>
      <button>
        <Link to="/snacks">Snacks</Link>
      </button>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
      </ul>
    </nav>
  );
}
