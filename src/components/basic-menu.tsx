import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const KMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const KMenuItem = styled(NavLink)`
  display: flex;
  justify-content: left;
  /* background: yellow;  */
  padding: 0rem 0rem 0.3rem 1rem;
  &.green {
    filter: drop-shadow(3px 1px 2px rgba(0, 0, 0, 0.3)) invert(10%);
    background: lightblue;
    color: white;
  }
`;

export default function BasicMenu() {
  return (
    <KMenu>
      <KMenuItem exact to="/" activeClassName="green">
        Home3
      </KMenuItem>
      <KMenuItem exact to="/customers" activeClassName="green">
        Customers
      </KMenuItem>
      <KMenuItem exact to="/greenBox" activeClassName="green">
        green box
      </KMenuItem>
      <KMenuItem exact to="/yellowBox" activeClassName="green">
        yellow box
      </KMenuItem>
    </KMenu>
  );
}
