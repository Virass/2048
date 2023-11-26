import { keyframes, styled } from 'styled-components';

export const Logo = ({ ...props }) => {

  return (
    <Container {...props}>
      2048
    </Container>
  )
}

const logoAnimation = keyframes`
  0% {
    text-shadow: -3px -3px 0px #8E8CD8;
  }
  10% {
    text-shadow: 3px -4px 0px #8E8CD8;
  }
  20% {
    text-shadow: -3px 4px 0px #8E8CD8;
  }
  30% {
    text-shadow: 3px -4px 0px #8E8CD8;
  }
  40% {
    text-shadow: -4px 3px 0px #8E8CD8;
  }
  50% {
    text-shadow: 3px 4px 0px #8E8CD8;
  }
  60% {
    text-shadow: -4px 3px 0px #8E8CD8;
  }
  70% {
    text-shadow: 3px 4px 0px #8E8CD8;
  }
  80% {
    text-shadow: -3px -3px 0px #8E8CD8;
  }
  90% {
    text-shadow: 3px -4px 0px #8E8CD8;
  }
  100% {
    text-shadow: -3px -3px 0px #8E8CD8;
  }
  `;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: "Pacifico", cursive;
  font-size: 2.4rem;
  text-transform: uppercase;
  transform: rotate(-8deg);
  animation: ${logoAnimation} 10s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;
