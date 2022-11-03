import { Navbar } from "../Navbar";
import { ServiceInfo } from "../ServiceInfo";
import { Button } from "../Button";
import { Portrait } from "../Portrait";
import { Socials } from "../Socials";
import { Gallery } from "../Gallery";
import { Map } from "../Map";
import { getAddress, getSocialMedia, sendEmail } from "../../utils/metadata";
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
  ContactWrapper,
  ContactSection,
  ContactSectionWrapper,
  ContactContainer,
  ContactSpacing,
  HeaderHighlight,
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
  Pin,
  Mail,
  Telephone,
} from "../../images";
import { Nail1, Nail2, Nail3, Nail4, Nail5, Nail6 } from "../../images";

export const Homepage = () => {
  const header = "Vanessa Pires\nNail ";
  const headerHighlight = "Designer";
  const subheader = "Estética e bem estar";
  const whatsappText = "(12) 97627-0471";
  const instagramText = "@naildesigntest123";
  const portraitInfo =
    "Designer with many years of experience, specially in the nails industry. I've attended more than 50 customers with all sorts of services.with many years of experience, specially in the nails industry.";
  const imageList = [
    Nail1,
    Nail2,
    Nail3,
    Nail4,
    Nail5,
    Nail6,
    Nail4,
    Nail4,
    Nail4,
    Nail4,
    Nail4,
    Nail4,
  ];

  const { location, maps } = getAddress();
  const { whatsapp, instagram } = getSocialMedia();
  const mail = sendEmail();

  return (
    <>
      <HomeBackground id="home">
        <Navbar />
        <HomeWrapper>
          <div>
            <HomeHeader>
              {header}
              <HeaderHighlight>{headerHighlight}</HeaderHighlight>
            </HomeHeader>
            <HomeSubheader>{subheader}</HomeSubheader>
            <SocialsContainer>
              <Socials
                url={instagram}
                icon={InstagramIcon}
                text={instagramText}
              />
              <Socials url={whatsapp} icon={WhatsappIcon} text={whatsappText} />
            </SocialsContainer>
          </div>
          <HomeImage src={Hand} />
        </HomeWrapper>
      </HomeBackground>
      <HomeSectionWrapper>
        <HomeSectionHeader id="servicos">Serviços</HomeSectionHeader>
        <HomeSectionText>
          Entre em contato diretamente pelo Whatsapp!
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
        <Gallery image={imageList} />
      </HomeSectionWrapper>
      <ContactWrapper id="contato">
        <ContactSection>
          <Map location={location} zoomLevel={17} />
        </ContactSection>
        <ContactSection>
          <ContactSectionWrapper>
            <HomeSectionHeader>Contato e endereço</HomeSectionHeader>
            <HomeSectionText style={{ width: "400px" }}>
              Entre em contato para agendar seu serviço ou se tiver alguma
              dúvida!
            </HomeSectionText>
            <ContactContainer>
              <ContactSpacing>
                <Socials
                  icon={Pin}
                  text="Rua test avenue, 123, bloco 2 - Sao Paulo, Brazil"
                  url={maps}
                />
              </ContactSpacing>
              <ContactSpacing>
                <Socials
                  url={whatsapp}
                  icon={Telephone}
                  text="(12) 97627-0471"
                />
              </ContactSpacing>
              <ContactSpacing>
                <Socials url={mail} icon={Mail} text="naildesigner@gmail.com" />
              </ContactSpacing>
            </ContactContainer>
          </ContactSectionWrapper>
        </ContactSection>
      </ContactWrapper>
    </>
  );
};
