import React from 'react';
import styled from 'styled-components';
// import MenuSection from './MenuSection';
import Square from '../components/Square';

const OuterDiv = styled.div`
  /* border: black 3px solid; */
  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  height: 100%;
`;
const LeftDiv = styled.div`
  margin: 0;
`;
const RightDiv = styled.div`
  background: whitesmoke;
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
`;

export default function MainPage() {
  return (
    <OuterDiv>
      <LeftDiv>Left Menu</LeftDiv>
      <RightDiv>
        <Square />
      </RightDiv>
    </OuterDiv>
  );
}
