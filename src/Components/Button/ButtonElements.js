import styled from "styled-components";

export const ButtonBody = styled.button`
  border: ${(props) =>
    props.highlight ? "2px solid #333333" : "2px solid #333333"};
  padding: 10px 65px;
  border-radius: 6px;
  background-color: ${(props) => (props.highlight ? "#333333" : "#ffffff")};
  color: ${(props) => (props.highlight ? "#ffffff" : "#333333")};
  cursor: pointer;
  font-weight: bold;
`;
