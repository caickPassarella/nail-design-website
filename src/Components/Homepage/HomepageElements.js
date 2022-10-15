import styled from "styled-components";

export const HomeContainer = styled.div`
  //background-color: #ffd7d8;
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
  margin-left: 100px;
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

export const HomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeImage = styled.img`
  width: 630px;
  transform: scaleX(-1);
`;
