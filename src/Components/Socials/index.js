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
          <SocialIcon size={props.size} src={props.icon} />
        </SocialLink>
        {props.text ? (
          <SocialLink href="/">
            <SocialText color={props.color} fontSize={props.fontSize}>
              {props.text}
            </SocialText>
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
