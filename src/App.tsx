import styled from 'styled-components';
import { colors } from './globalSettings';
import { AppLayouts } from 'Layouts/AppLayouts';

export const App = () => {
  return (
    <AppContainer>
      <AppLayouts />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${colors.bg};
  font-family: "Oswald", sans-serif;
  color: ${colors.text};
`;
