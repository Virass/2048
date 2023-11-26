import { BigLogo } from 'components/UI/Logo/BigLogo';
import { Preloader } from 'components/UI/Preloader/Preloader';
import { styled } from 'styled-components'

export const PreloaderLayout = () => {
  return (
    <PreloaderWrapper>
      <BigLogo />
      <Preloader />
    </PreloaderWrapper>
  )
}

const PreloaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
