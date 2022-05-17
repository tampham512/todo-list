import React, { useRef, useState } from "react";
import {
  InputContainer,
  InputBoxBase,
  LabelInput,
  InputBase,
  ErrorInputBox,
  MessageInput,
  InputPrefix,
  ErrorInputPrefix,
} from "./styled";

const Input = ({
  $type = "text",
  status = "base",
  fontSize,
  fontWeight,
  border = "1px solid #c1c1c1",
  color = "#c1c1c1",
  colorHover = "#333333",
  colorFocus = "#333333",
  fontWeightFocus = "bold",
  borderRadius = "8px",
  size = "base",
  margin = "10px 0",
  gap = "8px",
  placeholder,
  width,
  height,

  label,
  fontSizeLabel = "14px",
  fontWeightLabel = "700",

  errorMessage,
  fontSizeMessage = "14px",
  fontWeightMessage = "700",

  prefix,
  typePrefix,
  sizePrefix = "24px",
  paddingPrefix = "0 16px",
  onChange,
  ...props
}) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const handleClickLabel = () => {
    inputRef.current.focus();
  };
  status = errorMessage ? "error" : "base";

  switch (status) {
    case "base":
      return (
        <InputContainer gap={gap} margin={margin} $value={value}>
          {label && (
            <LabelInput
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              onClick={handleClickLabel}
            >
              {label}
            </LabelInput>
          )}
          <InputBoxBase
            borderRadius={borderRadius}
            border={border}
            size={size}
            width={width}
            height={height}
            color={color}
            colorHover={colorHover}
            colorFocus={colorFocus}
            $value={value}
          >
            {prefix && (
              <InputPrefix
                paddingPrefix={paddingPrefix}
                border={border}
                className={prefix}
                sizePrefix={sizePrefix}
                colorHover={colorHover}
                colorFocus={colorFocus}
                $value={value}
              ></InputPrefix>
            )}
            <InputBase
              placeholder={placeholder}
              $type={$type}
              borderRadius={borderRadius}
              fontSize={fontSize}
              fontWeight={fontWeight}
              size={size}
              ref={inputRef}
              colorHover={colorHover}
              fontWeightFocus={fontWeightFocus}
              colorFocus={colorFocus}
              color={color}
              onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
              }}
              $value={value}
              {...props}
            ></InputBase>
          </InputBoxBase>
        </InputContainer>
      );

    case "error":
      return (
        <InputContainer gap={gap} margin={margin}>
          {label && (
            <LabelInput
              fontSizeLabel={fontSizeLabel}
              fontWeightLabel={fontWeightLabel}
              onClick={handleClickLabel}
            >
              {label}
            </LabelInput>
          )}
          <ErrorInputBox
            $value={value}
            borderRadius={borderRadius}
            border={border}
            size={size}
            width={width}
            height={height}
            fontWeightFocus={fontWeightFocus}
          >
            {prefix && (
              <ErrorInputPrefix
                paddingPrefix={paddingPrefix}
                border={border}
                className={prefix}
                sizePrefix={sizePrefix}
                $value={value}
              ></ErrorInputPrefix>
            )}
            <InputBase
              placeholder={placeholder}
              $type={$type}
              borderRadius={borderRadius}
              fontSize={fontSize}
              fontWeight={fontWeight}
              size={size}
              ref={inputRef}
              colorHover={colorHover}
              fontWeightFocus={fontWeightFocus}
              colorFocus={colorFocus}
              color={color}
              onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
              }}
              {...props}
            ></InputBase>
          </ErrorInputBox>
          {errorMessage && (
            <MessageInput
              fontSizeMessage={fontSizeMessage}
              fontWeightMessage={fontWeightMessage}
            >
              {errorMessage}
            </MessageInput>
          )}
        </InputContainer>
      );
  }
};

export default Input;
