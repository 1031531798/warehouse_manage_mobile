import '@/styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import {useEffect, useMemo, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PageHeader from "@/components/PageHeader";

import useUserStore from "@/store/user";
import {getUserDetailByToken} from "@/api/login";
import {useRouter} from "next/router";
import {getRoutePage} from "@/hooks/useRoute";
import PageBottomNavigation from "@/components/BottomNavigation";
import Toast from "@/components/Toast";
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
        // 判断token
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
    const getPageHeader = useMemo(() => {
        const route = getRoutePage(router.pathname)
        return !route.hideHeader ? <PageHeader></PageHeader> : ''
    }, [router.pathname])
    const getBottomNavigation = useMemo(() => {
        const route = getRoutePage(router.pathname)
        return !route.hideNavigation ? (<PageBottomNavigation></PageBottomNavigation>) : ''
    }, [router.pathname])
    return (
        <div className={'flex flex-col w-full h-full flex-grow'}>
            <ThemeProvider theme={themeMode}>
                <CssBaseline />
                {getPageHeader}
                <main className={'flex flex-grow h-0'}>
                    <Component {...pageProps} />
                </main>
                {getBottomNavigation}
                <Toast />
            </ThemeProvider>
        </div>
    )
}
