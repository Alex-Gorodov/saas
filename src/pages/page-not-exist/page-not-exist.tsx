import { Link } from "react-router-dom";

export function PageNotExist(): JSX.Element {
  return (
    <div className="not-exist">
      <p className="not-exist__title">404</p>
      <Link to="saas/dashboard">to main page</Link>
    </div>
  );
}
