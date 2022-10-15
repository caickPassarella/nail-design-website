import Navbar from "../Navbar";
import {
  HomeContainer,
  HomeHeader,
  HomeSubheader,
  HomeImage,
  HomeWrapper,
  HomeTextWrapper,
} from "./HomepageElements";

import { Hand } from "../../images";

const Homepage = () => {
  const header = "Vanessa Pires\nNail Designer";
  const subheader = "Estética e bem estar";

  return (
    <>
      <HomeContainer>
        <Navbar />
        <HomeWrapper>
          <HomeTextWrapper>
            <HomeHeader>{header}</HomeHeader>
            <HomeSubheader>{subheader}</HomeSubheader>
          </HomeTextWrapper>
          <HomeImage src={Hand} />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Homepage;
