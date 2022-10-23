import PropTypes from "prop-types";
import {
  SocialWrapper,
  SocialIcon,
  SocialText,
  SocialLink,
} from "./SocialsElements";

export const Socials = (props) => {
  return (
    <>
      <SocialWrapper>
        <SocialLink href="/">
          <SocialIcon src={props.icon} />
        </SocialLink>
        {props.text ? (
          <SocialLink href="/">
            <SocialText>{props.text}</SocialText>
          </SocialLink>
        ) : (
          <></>
        )}
      </SocialWrapper>
    </>
  );
};

Socials.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
};
