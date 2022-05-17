import styled from "styled-components";

export const SelectBox = styled.div`
  position: relative;
  width: ${({ width }) => width};
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};

  .ant-select {
    background-color: white;
    font-size: ${({ fontSize }) => fontSize};
    .ant-select-selector {
      box-shadow: none !important;
      height: ${({ height }) => height};
    }
    .ant-select-selection-placeholder {
      line-height: ${({ height }) => height};
    }
    .ant-select-selection-item {
      line-height: ${({ height }) => height};
    }

    &:hover {
      .ant-select-selector {
        border-color: ${({ colorHover }) => colorHover};
      }
      .ant-select-selection-placeholder {
        color: ${({ colorHover }) => colorHover};
      }
      .ant-select-arrow span svg {
        fill: ${({ colorHover }) => colorHover};
      }
    }
    .ant-select-selector {
      border-color: ${({ colorHover, $value }) => $value && colorHover};
    }
    .ant-select-arrow span svg {
      fill: ${({ colorHover, $value }) => $value && colorHover};
    }
  }
  .ant-select-focused {
    .ant-select-selector {
      border-color: ${({ colorHover }) => colorHover} !important;
    }
    .ant-select-selection-placeholder {
      color: ${({ colorHover }) => colorHover};
    }
    .ant-select-arrow span svg {
      fill: ${({ colorHover }) => colorHover};
    }
    .ant-select-selection-item {
      color: ${({ colorHover }) => colorHover};
    }
  }
  .ant-select-open {
    .ant-select-selection-placeholder {
      color: ${({ colorHover }) => colorHover};
      font-weight: bold;
    }
    .ant-select-selection-item {
      font-weight: bold;
    }
    .ant-select-arrow span svg {
      transform: rotateX(180deg);
    }
  }
  .ant-select-item {
    background-color: white;
  }

  .ant-select-item-option-content {
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
  }
  .ant-select-item-option-active {
    .ant-select-item-option-content {
      background-color: white;
      color: ${({ colorHover }) => colorHover};
    }
  }
  .ant-select-item-option-selected {
    .ant-select-item-option-content {
      color: ${({ colorHover }) => colorHover};
      font-weight: 400;
    }
  }
`;
export const LabelSelect = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeLabel }) => fontSizeLabel};
  font-weight: ${({ fontWeightLabel }) => fontWeightLabel};
`;

export const ErrorSelectBox = styled(SelectBox)`
  .ant-select-selector {
    border-color: red !important ;
    .ant-select-selection-placeholder {
      color: ${({ colorHover }) => colorHover};
    }
  }
  .ant-select-arrow span svg {
    fill: ${({ colorHover }) => colorHover};
  }
  .ant-select-focused {
    .ant-select-selector {
      border-color: red !important;
    }
  }
`;

export const MessageSelect = styled.label`
  display: inline-block;
  font-size: ${({ fontSizeMessage }) => fontSizeMessage};
  font-weight: ${({ fontWeightMessage }) => fontWeightMessage};
  color: red;
`;
