import { NavLink } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <nav className="nav">
      <NavBarLinkButton pageName="home" isBig={true} />
      <NavBarLinkButton pageName="projects" />
      <NavBarLinkButton pageName="expierence" />
      <NavBarLinkButton pageName="skills" />
      <NavBarLinkButton pageName="about" />
      <NavBarLinkButton pageName="contact" />
    </nav>
  );
}

interface NavBarLinkButtonProps {
  pageName: string;
  isBig?: boolean;
}

function NavBarLinkButton({
  pageName,
  isBig = false,
}: NavBarLinkButtonProps): JSX.Element {
  const path = pageName === "home" ? "/" : `/${pageName}`;

  return (
    <NavLink to={path} className={`navItem ${isBig ? "navHomeItem" : ""}`}>
      {pageName}
    </NavLink>
  );
}
