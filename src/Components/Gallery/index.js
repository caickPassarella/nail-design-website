import PropTypes from "prop-types";

import { GalleryContainer, GalleryImage } from "./GalleryElements";

export const Gallery = (props) => {
  return (
    <GalleryContainer>
      {props.image.map((img) => {
        return <GalleryImage src={img} />;
      })}
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  image: PropTypes.array.isRequired,
};
