import Navbar from "../Navbar";
import {
  HomeContainer,
  HomeHeader,
  HomeSubheader,
  HomeImage,
  HomeWrapper,
  HomeSocials,
  HomeIcon,
  HomeText,
  SocialWrapper,
} from "./HomepageElements";

import { Hand, InstagramIcon, WhatsappIcon } from "../../images";

const Homepage = () => {
  const header = "Vanessa Pires\nNail Designer";
  const subheader = "Estética e bem estar";
  const whatsapp = "(12) 97627-0471";
  const instagram = "@naildesigntest123";

  return (
    <>
      <HomeContainer>
        <Navbar />
        <HomeWrapper>
          <div>
            <HomeHeader>{header}</HomeHeader>
            <HomeSubheader>{subheader}</HomeSubheader>
            <HomeSocials>
              <SocialWrapper>
                <HomeIcon src={InstagramIcon} />
                <HomeText>{instagram}</HomeText>
              </SocialWrapper>
              <SocialWrapper>
                <HomeIcon src={WhatsappIcon} />
                <HomeText>{whatsapp}</HomeText>
              </SocialWrapper>
            </HomeSocials>
          </div>
          <HomeImage src={Hand} />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Homepage;
