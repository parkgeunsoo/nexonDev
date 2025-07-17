
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF862D",
    },
    secondary: {
      main: "#dc004e",
    },
    text: {
      primary: "#000000",
      secondary: "#888888", // text.secondary 색상을 회색 계열로 변경
    },
  },
  typography: {
    fontFamily: "Pretendard, sans-serif",
    h5: {
      fontWeight: 600, // h5 variant의 폰트 두께 변경
    },
    body1: {
      fontSize: "18px", // body2 variant의 폰트 크기를 1rem으로 변경
      color: "#fff", // body2 variant의 기본 색상 변경
    },
    body2: {
      fontSize: "16px", // body2 variant의 폰트 크기를 1rem으로 변경
      color: "#fff", // body2 variant의 기본 색상 변경
    },
    subtitle1: {
      fontSize: "14px", // body2 variant의 폰트 크기를 1rem으로 변경
      color: "#fff", // body2 variant의 기본 색상 변경
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pretendard';
          src: url('../assets/fonts/Pretendard/Pretendard-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('../assets/fonts/Pretendard/Pretendard-Bold.woff') format('woff');
          font-weight: 700;
          font-style: normal;
        }
        body {
          margin: 0;
          font-family: 'Pretendard', sans-serif;
          background-color: #1C1C1F;
          color: #fff;
          font-size: 14px;
          line-height: 1.5;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // 모든 버튼의 테두리 반경 변경
        },
      },
    },
  },
});

export default theme;
