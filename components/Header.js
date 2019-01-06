import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  text-align: center
  font-size: 32px
`;

const Header = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
