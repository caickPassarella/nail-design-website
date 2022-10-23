import styled from "styled-components";

export const GallerySection = styled.div`
  display: flex;
  align-items: center;
`;

export const GalleryIcon = styled.img`
  height: 60px;
  width: 50px;
  cursor: pointer;
  transform: ${(props) => (props.flip === true ? "scaleX(-1)" : "scaleX(1)")};
`;

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
