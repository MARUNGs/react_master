import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 현재 앱이 테마가 존재한다면 import하여 사용할 것.
import { ThemeProvider } from "styled-components";

// 부여하고 싶은 CSS 색상을 object로 초기화
const dark = {
  textColor: "whitesmoke",
  backgroundColor: "#232332",
};

const light = {
  textColor: "#232332",
  backgroundColor: "whitesmoke",
};

const theme = { dark, light };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // ThemeProvider props인 'theme'에 CSS object 삽입한다.
  // theme를 props로 전달했기 때문에 App Component 내부에서도 해당 props 접근이 가능하다.
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
