/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import NavLink from '../NavLink';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <Filler />
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeInAnim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const doorAnim = keyframes`
  from {
    transform: rotateY(-0.5turn);
  }
  to {
    transform: rotateY(0turn);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  perspective: 800px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeInAnim} 250ms 1 forwards;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeInAnim} 250ms 1 forwards;

  @media ${QUERIES.indifferentToMotion} {
    opacity: revert;
    transform-origin: right center;
    transform-style: preserve-3d;
    will-change: transform;
    animation: ${doorAnim} 500ms 1 forwards cubic-bezier(.14,.45,1,1);
  }

  & > * {
    opacity: 0;
    will-change: transform;
    animation: ${fadeInAnim} 500ms 1 forwards;
    animation-delay: calc(500ms + 150ms * var(--i));
  }
`;

const CloseButton = styled(UnstyledButton)`
  --i: 0;
  position: absolute;
  top: 10px;
  right: 30px;
  padding: 16px;
`;

const Nav = styled.nav`
  --i: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  --i: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
