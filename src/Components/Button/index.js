import PropTypes from "prop-types";
import { ButtonBody } from "./ButtonElements";

export const Button = (props) => {
  return <ButtonBody {...props}>{props.text}</ButtonBody>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
};
