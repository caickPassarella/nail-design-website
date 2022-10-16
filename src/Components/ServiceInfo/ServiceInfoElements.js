import styled from "styled-components";

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const ServiceImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #fff4f5;
`;

export const ServiceImg = styled.img`
  width: 60px;
`;

export const ServiceHeader = styled.h1`
  font-size: 18px;
  margin: 5px 0;
  color: #333333;
  letter-spacing: 3px;
  font-weight: bold;
`;

export const ServicePrice = styled.h2`
  font-size: 15px;
  color: #333333;
  font-weight: 500;
`;
