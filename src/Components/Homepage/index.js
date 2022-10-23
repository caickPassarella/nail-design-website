import { Navbar } from "../Navbar";
import { ServiceInfo } from "../ServiceInfo";
import { Button } from "../Button";
import { Portrait } from "../Portrait";
import { Socials } from "../Socials";
import { Gallery } from "../Gallery";
import {
  HomeBackground,
  HomeHeader,
  HomeSubheader,
  HomeImage,
  HomeWrapper,
  SocialsContainer,
  HomeService,
  HomeSectionHeader,
  HomeSectionText,
  HomeSectionWrapper,
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

import { Nail1, Nail2, Nail3, Nail4, Nail5, Nail6 } from "../../images";

const Homepage = () => {
  const header = "Vanessa Pires\nNail Designer";
  const subheader = "Estética e bem estar";
  const whatsapp = "(12) 97627-0471";
  const instagram = "@naildesigntest123";
  const portraitInfo =
    "Designer with many years of experience, specially in the nails industry. I've attended more than 50 customers with all sorts of services.with many years of experience, specially in the nails industry.";

  return (
    <>
      <HomeBackground>
        <Navbar />
        <HomeWrapper>
          <div>
            <HomeHeader>{header}</HomeHeader>
            <HomeSubheader>{subheader}</HomeSubheader>
            <SocialsContainer>
              <Socials icon={InstagramIcon} text={instagram} />
              <Socials icon={WhatsappIcon} text={whatsapp} />
            </SocialsContainer>
          </div>
          <HomeImage src={Hand} />
        </HomeWrapper>
      </HomeBackground>
      <HomeSectionWrapper>
        <HomeSectionHeader>Serviços</HomeSectionHeader>
        <HomeSectionText>
          Entre em contato diretamente pelo whatsapp!
        </HomeSectionText>
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
      </HomeSectionWrapper>
      <Portrait
        name="Vanessa Pires"
        text={portraitInfo}
        icons={[InstagramIcon, WhatsappIcon]}
      />
      <HomeSectionWrapper>
        <HomeSectionHeader>Galeria de fotos</HomeSectionHeader>
        <Gallery image={[Nail1, Nail2, Nail3, Nail4, Nail5, Nail6]} />
      </HomeSectionWrapper>
    </>
  );
};

export default Homepage;
