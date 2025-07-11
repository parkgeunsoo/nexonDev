import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

// 스타일 입힌 MUI TextField
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    borderRadius: 8,
    backgroundColor: theme.palette.grey[50],
    padding: '10px 16px'
  },
  ".css-ohrqob-MuiFormLabel-root-MuiInputLabel-root": {
    top: -7
  }
}));

// forwardRef로 ref를 input까지 연결해주는 CustomInput
const CustomInput = forwardRef<HTMLInputElement, TextFieldProps>(
  function CustomInput(props, ref) {
    return (
      <StyledInput
        fullWidth
        variant="outlined"
        inputRef={ref} // ✅ react-hook-form의 ref 전달
        {...props}
      />
    );
  }
);

export default CustomInput;
