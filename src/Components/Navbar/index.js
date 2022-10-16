import { Nav, NavUl, NavLi, NavHeader, NavLink } from "./NavbarElements";

export const Navbar = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>
          <NavLink href="/eu">Vanessa Pires</NavLink>
        </NavLi>
      </NavUl>
      <NavUl>
        <NavLi>
          <NavLink href="/home">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="/servicos">Serviços</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="/galeria">Galeria</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="/contato">Contato</NavLink>
        </NavLi>
      </NavUl>
    </Nav>
  );
};
