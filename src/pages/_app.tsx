import '@/styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PageHeader from "@/components/PageHeader";
import useUserStore from "@/store/user";
import {getUserDetailByToken} from "@/api/login";
import {useRouter} from "next/router";
export default function App({ Component, pageProps }: AppProps) {
    const userStore = useUserStore()
    const router = useRouter()
    // 跟随系统 theme mode
    let [themeMode, setThemeMode] = useState(createTheme())
    useEffect(() => {
        const isDarkTheme = () => {
            const mql: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
            return mql.matches;
        }
        if (userStore.token) {
            getUserDetailByToken().then(({data}) => {
                console.log(data, '获取到的用户')
                userStore.setUserInfo(data.data)
            })
        }else {
            router.push('/login').then(() => {
            })
        }
        // 获取用户信息
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
