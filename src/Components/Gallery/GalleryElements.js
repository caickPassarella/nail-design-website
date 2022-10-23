import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  gap: 1px;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const GalleryImage = styled.img`
  width: 400px;
  height: 400px;
  padding: 15px;
`;
