import "./Header.css";
import Logo from "./logo";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <section className="Header">
        <Logo />
        <div className="navlinks">
          <nav className="links">
            <Navigation to={"/"} label={"Home"} />
            <Navigation to={"/leadership"} label={"leadership"} />
            <Navigation to={"/tracks"} label={"Tracks"} />
            <Navigation to={"/events"} label={"Events"} />
          </nav>
        </div>
      </section>
    </>
  );
}
interface NavLinks {
  to: string;
  label: string;
}
function Navigation({ to, label }: NavLinks) {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        {label}
      </NavLink>
    </>
  );
}

export default Header;
