import styled from "styled-components";

export const HomeBackground = styled.div`
  background: linear-gradient(
    to bottom right,
    #ffd7d8 0%,
    #ffd7d8 50%,
    #fff4f5 50%,
    #fff4f5 100%
  );
`;

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 150px;
  margin-top: 100px;
`;

export const HomeHeader = styled.h1`
  font-size: 80px;
  letter-spacing: 3px;
  white-space: pre-line;
  color: #333333;
`;

export const HomeSubheader = styled.h2`
  font-size: 25px;
  color: #5a5a5a;
  letter-spacing: 7px;
  margin-top: 5px;
`;

export const SocialsContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const HomeImage = styled.img`
  height: 750px;
  transform: scaleX(-1);
`;

export const HomeServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

export const HomeService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const HomeServiceHeader = styled(HomeSubheader)`
  color: #333333;
`;

export const HomeServiceText = styled.p`
  font-size: 18px;
  color: #333333;
  letter-spacing: 3px;
  margin-top: 8px;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled(HomeService)`
  justify-content: space-around;
  width: 650px;
`;
