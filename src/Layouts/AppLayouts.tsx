import React, { useCallback, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { StartScreenLayout } from './StartScreenLayout';
import { Screen } from 'globalSettings';
import { GameFieldScreenLayout } from './GameFieldScreenLayout';
import { SettingsScreenLayout } from './SettingsScreenLayout';
import { PreloaderLayout } from './PreloaderLayout';

export const AppLayouts = () => {
  const [screen, setScreen] = useState<React.ReactElement>(<StartScreenLayout />);

  const screens: Record<Screen, React.ReactElement> = useMemo(() => ({
    [Screen.StartScreen]: <StartScreenLayout />,
    [Screen.GameField]: <GameFieldScreenLayout />,
    [Screen.Settings]: <SettingsScreenLayout />,
    [Screen.Preloader]: <PreloaderLayout />,
  }), []);

  const changeScreen = useCallback((screen: Screen) => {
    setScreen(screens.Preloader);

    setTimeout(() => {
      setScreen(screens[screen]);
    }, 800);
  }, [screens])

  return (
    <Wrapper>
      {screen}
      <div>
        <button onClick={() => changeScreen(Screen.StartScreen)}>Start</button>
        <button onClick={() => changeScreen(Screen.GameField)}>Game</button>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 800px;
`;
