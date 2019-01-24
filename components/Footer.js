import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex
  justify-content: center
  border-top: 5px;
  border-bottom: 0px;
  border-right: 0px;
  border-left: 0px;
  border-color: lightblue;
  margin: 10px;
  padding: 15px;
  border-style: solid;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        made with{" "}
        <a target="_blank" href="https://reactjs.org">
          React
        </a>{" "}
        :)
      </div>
    </StyledFooter>
  );
};

export default Footer;
