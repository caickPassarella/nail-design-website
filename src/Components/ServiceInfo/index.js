import PropTypes from "prop-types";
import {
  ServiceWrapper,
  ServiceImg,
  ServiceHeader,
  ServicePrice,
  ServiceImgWrapper,
} from "./ServiceInfoElements";

export const ServiceInfo = (props) => {
  return (
    <ServiceWrapper>
      <ServiceImgWrapper>
        <ServiceImg src={props.img} />
      </ServiceImgWrapper>
      <ServiceHeader>{props.header}</ServiceHeader>
      <ServicePrice>
        {props.currency}
        {props.price}
      </ServicePrice>
    </ServiceWrapper>
  );
};

ServiceInfo.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
