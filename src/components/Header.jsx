import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <Navigation />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bg};
  position: relative;
  .logo {
    height: 5rem;
  }
`;

export default Header;
