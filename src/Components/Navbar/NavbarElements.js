import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 100px;
`;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLi = styled.li`
  padding: 0 30px;
`;

export const NavLink = styled.a`
  font-size: 18px;
  color: #333333;
  text-decoration: none;
  cursor: pointer;

  :hover {
    font-weight: bold;
    color: #0f0f0f;
  }
`;
