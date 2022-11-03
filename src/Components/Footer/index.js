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

export const Footer = () => {
  const about = `Designer with many years of experience, specially in the nails industry. I’ve attended more than 50 customers with all sorts of services.\n\nDesigner with many years of experience, specially in the nails industry. I’ve attended more than 50 customers with all sorts of services. With many years of experience, specially in the nails.`;

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
            />
          </SocialWrapper>
          <SocialWrapper>
            <Socials
              size="25px"
              color="#ffffff"
              fontSize="12px"
              icon={WhiteInstagramIcon}
              text="@naildesigntest123"
            />
          </SocialWrapper>
          <SocialWrapper>
            <Socials
              size="25px"
              color="#ffffff"
              fontSize="12px"
              icon={WhiteWhatsappIcon}
              text="(12) 97627-0471"
            />
          </SocialWrapper>
          <SocialWrapper>
            <Socials
              size="25px"
              color="#ffffff"
              fontSize="12px"
              icon={WhiteMail}
              text="naildesigner@gmail.com"
            />
          </SocialWrapper>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Links</FooterHeader>
          <FooterUrl href="/home">Home</FooterUrl>
          <FooterUrl href="/servicos">Serviços</FooterUrl>
          <FooterUrl href="/galeria">Galeria</FooterUrl>
          <FooterUrl href="/contato">Contato e endereço</FooterUrl>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Sobre</FooterHeader>
          <FooterParagraph>{about}</FooterParagraph>
        </FooterSection>
      </FooterWrapper>
    </FooterContainer>
  );
};
