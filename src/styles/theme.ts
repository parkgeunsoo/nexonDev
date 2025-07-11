
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    text: {
      primary: '#000000',
      secondary: '#888888', // text.secondary 색상을 회색 계열로 변경
    },
  },
  typography: {
    fontFamily: 'Pretendard, sans-serif',
    h5: {
      fontWeight: 600, // h5 variant의 폰트 두께 변경
    },
    body2: {
      fontSize: '1rem', // body2 variant의 폰트 크기를 1rem으로 변경
      color: '#555555', // body2 variant의 기본 색상 변경
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
