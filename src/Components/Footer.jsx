import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
      <p>Copyright &copy; 2023</p>
      {location.pathname !== "/about" ? <Link to="/about">About</Link> : ""}
    </div>
  );
};

export default Footer;
