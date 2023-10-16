import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import VisuallyHidden from '../VisuallyHidden';

const NavLink = ({ children, ...delegated }) => {

	const label = children;

	return (
		<Wrapper label={label} { ...delegated}>
			<span>
				{children}
			</span>
		</Wrapper>
	);
}

const Wrapper = styled.a`
  --fade-in-transition: opacity 250ms;
  --fade-out-transition: opacity 750ms;
  --upwards-transition: transform 250ms;
  --downwards-transition: transform 500ms;


  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  position: relative;
  overflow: hidden;
  will-change: transform;

  & > span {
  	display: inline-block;

  	@media ${QUERIES.indifferentToMotion} {
		transition: var(--downwards-transition);
  	}
  }

  &::before {
  	position: absolute;
  	content: '${p => p.label}';
  	font-weight: bold;
  	top: 0;
  	left: 0;
  	height: 100%;
  	width: 100%;
  	opacity: 0;
  	transition: var(--fade-out-transition);

  	@media ${QUERIES.indifferentToMotion} {
  		opacity: 1;
  		transform: translateY(100%);
		transition: var(--downwards-transition);
  	}
  }

  &:hover > span {
  	@media ${QUERIES.indifferentToMotion} {
  		transform: translateY(-100%);
		transition: var(--upwards-transition);
  	}
  }

  &:hover::before {
  	opacity: 1;
  	transition: var(--fade-in-transition);

  	@media ${QUERIES.indifferentToMotion} {
  		transform: translateY(0%);
		transition: var(--upwards-transition);
  	}
  }
`;

export default NavLink;
