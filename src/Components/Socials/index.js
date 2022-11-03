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
        <SocialLink target="_blank" href={props.url}>
          <SocialIcon size={props.size} src={props.icon} />
        </SocialLink>
        {props.text ? (
          <SocialLink target="_blank" href={props.url}>
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
