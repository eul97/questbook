import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    src: url('fonts/Pretendard-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url('fonts/Pretendard-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: url('fonts/Pretendard-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url('fonts/Pretendard-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url('fonts/Pretendard-Bold.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.3;
    font-family: 'Pretendard', 'Roboto', sans-serif;
  }
`

export default GlobalStyle
