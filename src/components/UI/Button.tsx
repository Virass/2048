import { colors } from 'globalSettings';
import { css, styled } from 'styled-components';

type Props = {
  type?: string;
  w?: number;
  h?: number;
  title: string;
  [key: string]: any;
};

type ButtonProps = {
  w: number;
  h: number;
}

export const Button = ({
  type = "button",
  title,
  w = 205,
  h = 43,
  ...props
}: Props) => {

  return (
    <StyledButton
      w={w}
      h={h}
      {...props}>
      {title}
    </StyledButton>
  )
};

const StyledButton = styled.button<ButtonProps>`
  ${({
  w,
  h,
}) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${w}px;
    height: ${h}px;

    border-radius: 20px;

    border: none;
    outline: none;
    background: ${colors.secondBg};

    color: ${colors.text};
    font-size: 16px;
    font-family: "Oswald";

    cursor: pointer;
  `}
`;
