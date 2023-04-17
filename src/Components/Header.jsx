import Buttons from "./Buttons.jsx";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ title, onClick, toggleForm }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title === "" ? "Task" : title}</h1>
      {location.pathname === "/" ? (
        !toggleForm ? (
          <Buttons text="Add Task" onClick={() => onClick()} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  toggleForm: PropTypes.bool.isRequired,
};
export default Header;
