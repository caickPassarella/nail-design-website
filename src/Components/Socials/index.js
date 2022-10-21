import PropTypes from "prop-types";
import { SocialWrapper, SocialIcon, SocialText } from "./SocialsElements";

export const Socials = (props) => {
  return (
    <>
      <SocialWrapper>
        <SocialIcon src={props.icon} />
        {props.text ? <SocialText>{props.text}</SocialText> : <></>}
      </SocialWrapper>
    </>
  );
};

Socials.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
};
