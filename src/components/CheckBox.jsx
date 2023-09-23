import { styled } from "styled-components";

const StyledCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  appearance: none;
  font: inherit;
  background-color: transparent;
  flex-basis: clamp(1.25rem, calc(1rem + 1vw), 2rem);
  flex-shrink: 0;
  flex-grow: 0;
  height: clamp(1.25rem, calc(1rem + 1vw), 2rem);
  border: 3px solid ${(prop) => prop.color};
  border-radius: 40%;
  color: #fff;
  @media (width <= 768px) {
    & {
      border-width: 2px;
    }
  }
  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${(prop) => prop.color};
    border-radius: 40%;
    border: 3px solid ${(prop) => prop.color};
    @media (width <= 768px) {
      & {
        border-width: 2px;
      }
    }
  }
  &:checked:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    transform-origin: bottom left;
    clip-path: polygon(
      0.12% 57.49%,
      8.69% 45.92%,
      41.74% 70.4%,
      88.87% 6.78%,
      100.04% 15.05%,
      44.34% 90.25%
    );
    background: #21212b;
  }
`;
function CheckBox({ disable, color, checked, handelChange }) {
  return (
    <StyledCheckBox
      disabled={disable || false}
      color={color}
      checked={checked}
      onChange={disable ? undefined : handelChange}
    />
  );
}

export default CheckBox;
