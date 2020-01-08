import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowCollapseRC } from '../assets/arrow-collapse-left.svg';
import { ReactComponent as HumbergerRC } from '../assets/menu-hamburger.svg';
import BasicMenu from '../components/basic-menu';

/* 
The MenuSection consists of three parts
1. the Left part (menu bar and menu items icons )
2. the Right Part (menu items description )
 */
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

const useGetScreenWidth = () => {
  const [ws, setWindowSize] = useState(window.innerWidth);
  const eventListener = () => setWindowSize(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', eventListener);
    return () => {
      window.removeEventListener('resize', eventListener);
    };
  }, []);

  return ws;
};

const MenuDiv = styled.div<{ isCollapsed: boolean }>`
  margin: 0;

  height: 100%;
  display: flex;
  flex-direction: column;
  width: ${props => (props.isCollapsed ? '60px' : '250px')};
  transition: width 600ms ease-out, max-width 600ms ease-out;
`;

const MenuTopDiv = styled.div`
  background: rgb(0, 106, 151);
  flex: 0 0 50px;
  display: flex;
  justify-content: flex-end;
`;

const MenuLowDiv = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row nowrap;
  background: #0195cd;
  background-image: linear-gradient(
    to left,
    rgb(1, 149, 205),
    rgb(0, 106, 151)
  );

  overflow: hidden;
`;

const XBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 25px;
  background: lightblue;

  &:active {
    filter: brightness(80%);
  }
  &:hover {
    filter: brightness(70%);
  }
  &:focus {
    outline: none;
  }
`;

const XArrowCollapse = styled(ArrowCollapseRC)`
  fill: blue;
  height: 40%;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
  transition: all 0.4s ease 0s;
`;
const XHumburger = styled(HumbergerRC)`
  fill: blue;
  /* height: 80%; */
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

export default function CentralPageWithMenu() {
  const sw = useGetScreenWidth();
  const isScreenSizeSmall = sw < 400;
  const [isCollapsed, setBarToCollapse] = useState(isScreenSizeSmall);

  if (isScreenSizeSmall && !isCollapsed) {
    setBarToCollapse(true);
  }

  const handleClick = (e: ButtonEvent) => {
    const mustCollapse = !isCollapsed || isScreenSizeSmall;
    console.log('jey');
    setBarToCollapse(mustCollapse);
  };

  return (
    <MenuDiv isCollapsed={isCollapsed}>
      <MenuTopDiv>
        <XBtn onClick={handleClick}>
          {isCollapsed ? <XHumburger /> : <XArrowCollapse />}
        </XBtn>
      </MenuTopDiv>

      <MenuLowDiv>
        <BasicMenu />
      </MenuLowDiv>
    </MenuDiv>
  );
}
