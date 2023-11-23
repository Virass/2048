import styled, { css, keyframes } from 'styled-components';

type PreloaderWrapperType = {
  size: number;
};

type PreloaderContainerType = {
  speed: number;
  size: number;
};

const spin = keyframes`
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`
export const PreloaderWrapper = styled.div<PreloaderWrapperType>`
  position: relative;
  width: ${props => props.size}px;
  aspect-ratio: 1 / 1;
`;

export const PreloaderContainer = styled.div<PreloaderContainerType>`
${({ speed, size }) => {
  const border = size / 50;
  const beforePosition = size / 30;
  const afterPosition = size / 10;
  const defaultSpeed = speed * 2;
  const beforeSpeed = speed * 3;
  const afterSpeed = speed * 1.5;

  return css`
    display: block;
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    border: ${border}px solid transparent;
    border-top-color: #9370DB;
    -webkit-animation: spin ${defaultSpeed}s linear infinite;
    animation: ${spin} ${defaultSpeed}s linear infinite;
    
    &:before {
      content: "";
      position: absolute;
      top: ${beforePosition}px;
      left: ${beforePosition}px;
      right: ${beforePosition}px;
      bottom: ${beforePosition}px;
      border-radius: 50%;
      border: ${border}px solid transparent;
      border-top-color: #BA55D3;
      -webkit-animation: spin ${beforeSpeed}s linear infinite;
      animation: ${spin} ${beforeSpeed}s linear infinite;
    }
    
    &:after {
      content: "";
      position: absolute;
      top: ${afterPosition}px;
      left: ${afterPosition}px;
      right: ${afterPosition}px;
      bottom: ${afterPosition}px;
      border-radius: 50%;
      border: ${border}px solid transparent;
      border-top-color: #FF00FF;
      -webkit-animation: ${spin} ${afterSpeed}s linear infinite;
      animation: ${spin} ${afterSpeed}s linear infinite;
    }
  `
}}`;
