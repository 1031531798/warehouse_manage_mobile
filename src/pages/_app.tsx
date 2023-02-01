import '@/styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PageHeader from "@/components/PageHeader";

export default function App({ Component, pageProps }: AppProps) {
  // 跟随系统 theme mode
  let [themeMode, setThemeMode] = useState(createTheme())
  useEffect(() => {
    const isDarkTheme = () => {
      const mql: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      return mql.matches;
    }
    if (isDarkTheme()) {
      setThemeMode(createTheme({
        palette: {
          mode: 'dark',
        }
      }))
    }
  }, [])
  return (
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <PageHeader></PageHeader>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
