import React from 'react';
import styled from 'styled-components';
import MenuPage from './menu-page';
import Box from '../components/box';
import Customers from '../components/customers';

const OuterDiv = styled.div`
  /* border: black 3px solid; */
  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  height: 100%;
`;

const RightDiv = styled.div`
  background: whitesmoke;
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
`;

export default function CentralPage() {
  return (
    <OuterDiv>
      <MenuPage />
      <RightDiv>
        <Box />
        <Customers />
      </RightDiv>
    </OuterDiv>
  );
}
