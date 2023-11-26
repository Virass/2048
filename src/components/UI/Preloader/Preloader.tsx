import { PreloaderContainer, PreloaderWrapper } from './PreloaderStyle';

export const Preloader = () => {
  const speed = 0.5;
  const size = 200;

  return (
    <PreloaderWrapper size={size}>
      <PreloaderContainer
        speed={speed}
        size={size}
      />
    </PreloaderWrapper>
  )
}
