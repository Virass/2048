import styled from 'styled-components';
import { colors } from './globalSettings';
import { Preloader } from './components/UI/Preloader/Preloader';

export const App = () => {
  return (
    <AppContainer>
      2048
      <Preloader />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.bg};
  font-family: "Pacifico";
  color: ${colors.text};
`;
