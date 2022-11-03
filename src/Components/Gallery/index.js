import PropTypes from "prop-types";
import { useState } from "react";
import { Pagination } from "../Pagination";
import { Next } from "../../images";
import {
  GalleryContainer,
  GalleryImage,
  GallerySection,
  GalleryIcon,
} from "./GalleryElements";

export const Gallery = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = props.image.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const nPages = Math.ceil(props.image.length / recordsPerPage);

  const handleClick = (reverse) => {
    if (currentPage !== nPages && reverse === false) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage !== 1 && reverse === true) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <GallerySection id="galeria">
        {nPages > 1 ? (
          <GalleryIcon
            flip={true}
            onClick={() => handleClick(true)}
            src={Next}
          />
        ) : (
          <></>
        )}
        <GalleryContainer>
          {currentRecords.map((img) => {
            return <GalleryImage src={img} />;
          })}
        </GalleryContainer>
        {nPages > 1 ? (
          <GalleryIcon onClick={() => handleClick(false)} src={Next} />
        ) : (
          <></>
        )}
      </GallerySection>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

Gallery.propTypes = {
  image: PropTypes.array.isRequired,
};
