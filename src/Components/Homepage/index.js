import { Navbar } from "../Navbar";
import { ServiceInfo } from "../ServiceInfo";
import { Button } from "../Button";
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
  HomeService,
  HomeServiceHeader,
  HomeServiceText,
  HomeServiceWrapper,
  ButtonWrapper,
} from "./HomepageElements";

import {
  Hand,
  InstagramIcon,
  WhatsappIcon,
  Manicure,
  NailArt,
  NailPolish,
  NailPolish2,
  NailStar,
  Nail,
} from "../../images";

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
      <HomeServiceWrapper>
        <HomeServiceHeader>Serviços</HomeServiceHeader>
        <HomeServiceText>
          Entre em contato diretamente pelo whatsapp!
        </HomeServiceText>
        <HomeService>
          <ServiceInfo
            img={Manicure}
            header="Unha em acrílico"
            currency="R$"
            price="120,00"
          />
          <ServiceInfo
            img={NailArt}
            header="Unha em gel"
            currency="R$"
            price="120,00"
          />
          <ServiceInfo
            img={NailPolish}
            header="Manicure"
            currency="R$"
            price="120,00"
          />
        </HomeService>
        <HomeService>
          <ServiceInfo
            img={NailPolish2}
            header="Limpeza"
            currency="R$"
            price="120,00"
          />
          <ServiceInfo
            img={NailStar}
            header="Alongamento"
            currency="R$"
            price="120,00"
          />
          <ServiceInfo
            img={Nail}
            header="Pedicure"
            currency="R$"
            price="120,00"
          />
        </HomeService>
        <ButtonWrapper>
          <Button text="Mais informações" />
          <Button text="Entre em contato!" highlight={true} />
        </ButtonWrapper>
      </HomeServiceWrapper>
    </>
  );
};

export default Homepage;
