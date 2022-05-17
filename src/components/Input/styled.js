import styled from "styled-components";

export const InputContainer = styled.div`
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  display: flex;
  flex-direction: column;
`;
export const InputBoxBase = styled.div`
  display: flex;
  align-items: center;

  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};

  &:hover {
    border-color: ${({ colorHover }) => colorHover};
    color: ${({ colorHover }) => colorHover};
  }
  &:focus-within {
    border-color: ${({ colorFocus }) => colorFocus};
    color: ${({ colorFocus }) => colorFocus};
  }

  ${({ size }) => {
    switch (size) {
      case "sm":
        return `height:40px;
                width:300px;
            
             `;
      case "base":
        return `height:48px;
                width:343px;
              
                `;
      case "lg":
        return `height:56px;
                width:450px;
               
               `;
    }
  }}

  height: ${({ height }) => height};
  border-color: ${({ colorFocus, $value }) =>
    $value.length > 0 ? colorFocus : ""};
`;
export const ErrorInputBox = styled(InputBoxBase)`
  border-color: red;
`;

export const InputBase = styled.input.attrs(({ $type }) => ({}))`
  border: none;
  outline: none;
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 0 16px;
  color: ${({ color }) => color};
  flex: 1;
  &::placeholder {
    font-weight: 400;
  }
  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
                font-size:15px;
             `;
      case "base":
        return `
                font-size:16px;
                `;
      case "lg":
        return `
                font-size:20px;
               `;
    }
  }}
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  &:focus {
    font-weight: ${({ fontWeightFocus }) => fontWeightFocus};
    color: ${({ colorFocus }) => colorFocus};
  }

  ${InputBoxBase}:hover & {
    &::placeholder {
      color: ${({ colorHover }) => colorHover};
    }
  }
  &:valid {
    color: ${({ colorFocus }) => colorFocus};
    font-weight: ${({ fontWeightFocus }) => fontWeightFocus};
  }
`;
export const InputPrefix = styled.i`
  margin: ${({ marginPrefix }) => marginPrefix};
  padding: ${({ paddingPrefix }) => paddingPrefix};

  border-right: ${({ border }) => border};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    font-size: ${({ sizePrefix }) => sizePrefix} !important;
  }
  ${InputBoxBase}:hover & {
    border-color: ${({ colorFocus }) => colorFocus};
  }

  ${InputBoxBase}:focus-within & {
    border-color: ${({ colorFocus }) => colorFocus};
  }
  border-color: ${({ colorFocus, $value }) =>
    $value.length > 0 ? colorFocus : ""};
  color: ${({ colorFocus, $value }) => ($value.length > 0 ? colorFocus : "")};
`;
export const ErrorInputPrefix = styled(InputPrefix)`
  color: red;
  border-color: red;
  ${InputBoxBase}:hover & {
    border-color: red;
    color: red;
  }
  ${InputBoxBase}:focus-within & {
    color: red;
    border-color: red;
  }
`;

export const LabelInput = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ fontWeightLabel }) => fontWeightLabel};
`;

export const MessageInput = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeMessage }) => fontSizeMessage};
  font-weight: ${({ fontWeightMessage }) => fontWeightMessage};
  color: red;
`;
