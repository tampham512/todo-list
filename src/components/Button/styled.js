import styled from "styled-components";
export const ButtonBase = styled.button`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `height:40px;
                width:140px;
                font-size:15px;
                font-weight:bold;
             `;
      case "base":
        return `height:44px;
                width:200px;
                font-weight:bold;
                font-size:16px;
                `;
      case "lg":
        return `height:48px;
                width:343px;
                font-size:17px;
                font-weight:bold;`;
    }
  }}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
`;

export const PrimaryButton = styled(ButtonBase)`
  background-color: #ff0000;
  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
  &:active,
  &:focus {
    background-color: #c20000;
  }
  &:disabled {
    background-color: #999999;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background-color: #fff;
  color: #ff0000;
  border: 1px solid #ff0000;
  &:hover,
  &:active,
  &:focus {
    border-width: 2px;
    border-width: 2px;
  }

  &:disabled {
    border-color: #999999;
    color: #999999;
    cursor: not-allowed;
    border-width: 1px;
  }
`;
export const GrayButton = styled(ButtonBase)`
  background-color: rgb(54, 46, 46);

  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }
  &:active,
  &:focus {
    background-color: #c20000;
  }
  &:disabled {
    background-color: #999999;
    cursor: not-allowed;
  }
`;
