import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the homepage</h1>
      <Link to="/about">
        <button>Click me!</button>
      </Link>
    </div>
  );
}
