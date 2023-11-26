import { styled } from 'styled-components';
import { Button } from 'components/UI/Button';
import { BigLogo } from 'components/UI/Logo/BigLogo';
import { DecorationBlocks } from 'components/UI/DecorationBlock/DecorationBlocks';

export const StartScreen = () => {


  return (
    <Container>
      <BigLogo />
      <DecorationBlocks />

      <Actions>
        <Button
          title={"Start game"}
          w={250}
          h={50}
        />
        <Button title={"You Score"} />
        <Button title={"Settings"} />
      </Actions>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
`;
