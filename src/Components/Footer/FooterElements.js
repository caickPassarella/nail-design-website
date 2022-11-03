import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #774141;
  height: 350px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  padding: 85px;
  justify-content: space-evenly;
  height: 100%;
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const FooterHeader = styled.h2`
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: bold;
  color: #ffffff;
`;

export const FooterParagraph = styled.p`
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 1px;
  width: 450px;
  margin-top: 22px;
  white-space: pre-line;
  line-height: 23px;
`;

export const SocialWrapper = styled.div`
  margin-top: 22px;
`;

export const FooterUrl = styled.a`
  text-decoration: none;
  font-size: 13px;
  color: #ffffff;
  margin-top: 22px;
  white-space: pre-line;

  :hover {
    font-weight: bold;
  }
`;
