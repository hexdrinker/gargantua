/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type ButtonProps = {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string | number;
};

const Button = ({
  children,
  size,
  disabled,
  onClick,
  width
}: ButtonProps) => {
  return (
    <button
      css={[style, sizes[size], { width }]}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  )
};

const style = css`
  outline: none;
  border: none;
  border-radius: 0.25rem;
  box-sizing: border-box;
  height: 2rem;
  background: aquamarine;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  large: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
  xlarge: css`
    height: 3.5rem;
    font-size: 1.25rem;
    padding: 0 2rem;
  `
};

Button.defaultProps = {
  size: 'medium',
  disabled: false,
}

export default Button;