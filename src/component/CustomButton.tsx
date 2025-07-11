import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: "10px 24px",
  textTransform: "none",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function CustomButton(props: ButtonProps) {
  return <StyledButton variant="contained" {...props} />;
}
