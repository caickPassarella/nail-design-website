import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
`;

export const PaginationCircle = styled.div`
  display: inline-block;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  background-color: ${(props) => (props.active ? "black" : "none")};
  border: 1px solid black;
  margin: 5px;
  cursor: pointer;
`;
