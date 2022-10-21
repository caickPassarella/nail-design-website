import PropTypes from "prop-types";
import { Socials } from "../Socials";

import {
  PortraitWrapper,
  PortraitTextWrapper,
  PortraitHeader,
  PortraitText,
  PortraitImgWrapper,
  SocialsContainer,
} from "./PortraitElements";

export const Portrait = (props) => {
  return (
    <PortraitWrapper>
      <PortraitTextWrapper>
        <PortraitHeader>{props.name}</PortraitHeader>
        <PortraitText>{props.text}</PortraitText>
        <SocialsContainer>
          {props.icons.map((icon, key) => {
            return <Socials key={key} icon={icon} />;
          })}
        </SocialsContainer>
      </PortraitTextWrapper>
      <PortraitImgWrapper />
    </PortraitWrapper>
  );
};

Portrait.propTypes = {
  name: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};
