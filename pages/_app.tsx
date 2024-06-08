import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";
import "../scss/app.scss";
import "../scss/pc/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, Redux, Mui... larni shuyerda integrate qilishimiz mumkin
  //quyida ThemeProvider ichiga kiritilgan harqanday metadata lar pages folder ichidagi hamma faylga props orqali wrap boladi
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
