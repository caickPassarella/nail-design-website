import {
  FooterContainer,
  FooterSection,
  FooterHeader,
  FooterParagraph,
  FooterWrapper,
  SocialWrapper,
  FooterUrl,
} from "./FooterElements";

import { Socials } from "../Socials";
import {
  WhiteInstagramIcon,
  WhiteMail,
  WhiteWhatsappIcon,
  WhitePin,
} from "../../images";

import { getAddress, getSocialMedia, sendEmail } from "../../utils/metadata";

export const Footer = () => {
  const about = `Designer with many years of experience, specially in the nails industry. I’ve attended more than 50 customers with all sorts of services.\n\nDesigner with many years of experience, specially in the nails industry. I’ve attended more than 50 customers with all sorts of services. With many years of experience, specially in the nails.`;

  const location = getAddress();
  const { whatsapp, instagram } = getSocialMedia();
  const mail = sendEmail();

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <FooterHeader>Vanessa Pires Nail Designer</FooterHeader>
          <SocialWrapper>
            <Socials
              size="25px"
              color="#ffffff"
              fontSize="12px"
              icon={WhitePin}
              text="Rua test avenue, 123, bloco 2 - Sao Paulo, Brazil"
              url={location.maps}
            />
          </SocialWrapper>
          <SocialWrapper>
            <Socials
              size="25px"
              color="#ffffff"
              fontSize="12px"
              icon={WhiteInstagramIcon}
              text="@naildesigntest123"
              url={instagram}
            />
          </SocialWrapper>
          <SocialWrapper>
            <Socials
              size="25px"
              color="#ffffff"
              fontSize="12px"
              icon={WhiteWhatsappIcon}
              text="(12) 97627-0471"
              url={whatsapp}
            />
          </SocialWrapper>
          <SocialWrapper>
            <Socials
              size="25px"
              color="#ffffff"
              fontSize="12px"
              icon={WhiteMail}
              text="naildesigner@gmail.com"
              url={mail}
            />
          </SocialWrapper>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Links</FooterHeader>
          <FooterUrl href="#home">Home</FooterUrl>
          <FooterUrl href="#servicos">Serviços</FooterUrl>
          <FooterUrl href="#galeria">Galeria</FooterUrl>
          <FooterUrl href="#contato">Contato e endereço</FooterUrl>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Sobre</FooterHeader>
          <FooterParagraph>{about}</FooterParagraph>
        </FooterSection>
      </FooterWrapper>
    </FooterContainer>
  );
};
