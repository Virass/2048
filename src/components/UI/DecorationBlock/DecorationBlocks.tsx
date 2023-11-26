import { css, keyframes, styled } from 'styled-components';
import { Block, blockList } from './blockList';
import { Fragment } from 'react';

type ContainerProps = Omit<Block, "value">;

export const DecorationBlocks = () => {
  return (
    <Fragment>
      {blockList.map(block => (
        <Container
          key={block.id}
          side={block.side}
          sidedistance={block.sidedistance}
          align={block.align}
          aligndistance={block.aligndistance}
          rotate={block.rotate}
          id={block.id}
        >
          <BlockImg src={`/assets/img/${block.value}.gif`} />
        </Container>
      ))}
    </Fragment>
  )
}

const BlockImg = styled.img`
  width: 100%;
  height: 100%;
`;

const rocking = (rotate: number) => keyframes`
  0%, 100% {
    transform: translateY(0) rotate(${rotate}deg);
  }
  50% {
    transform: translateY(-15px) rotate(${rotate}deg);
  }
`;

const Container = styled.div<ContainerProps>`
  ${({
    side,
    sidedistance,
    align,
    aligndistance,
    rotate,
    id,
  }) => css`
    position: absolute;
    ${align}: ${aligndistance}px;
    ${side}: ${sidedistance}px;
    width: 60px;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    overflow: hidden;
    transform: rotate(${rotate}deg);
    animation: ${rocking(rotate)} 5s ease infinite;
    animation-delay: ${id / 2.5}s;
  `
  }`
