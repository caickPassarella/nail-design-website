import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  text-decoration: none;
`;

export const SocialIcon = styled.img.attrs((props) => ({
  size: props.size || "32px",
}))`
  width: ${(props) => props.size};
  margin-right: 15px;
  cursor: pointer;
`;

export const SocialText = styled.p.attrs((props) => ({
  fontSize: props.fontSize || "16px",
  color: props.color || "#5a5a5a",
}))`
  font-size: ${(props) => props.fontSize};
  letter-spacing: 3px;
  margin-right: 55px;
  color: ${(props) => props.color};
  cursor: pointer;

  :hover {
    font-weight: bold;
  }
`;
