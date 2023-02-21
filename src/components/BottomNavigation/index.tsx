import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import HomeIcon from '@mui/icons-material/Home';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import {useMemo, useState} from "react";
import {BottomNavigationActionProp} from "@/types/common";
import {useRouter} from "next/router";

export default function PageBottomNavigation() {
    const [value, setValue] = useState(0)
    const router = useRouter()
    const bottoms :BottomNavigationActionProp[] = [
        {label: '首页', path: '/home', icon: <HomeIcon />},
        {label: '销售', path: '/market', icon: <CurrencyExchangeIcon />},
        {label: '入库', path: '/storage', icon: <AddBusinessIcon />},
        {label: '我的', path: '/user', icon: <PersonIcon />},
    ]
    function navClick (item: BottomNavigationActionProp) {
        if (router.pathname !== item.path) {
            router.push(item.path)
        }
    }
    // 监听路由变化自动切换选中
    useMemo(() => {
        // 获取最前端路由名称
        const pathName = '/' + router.pathname.split('/')[1]
        const index: number = bottoms.findIndex((item) => item.path === pathName)
        if (index >= 0) {
            setValue(index)
        }
    }, [router.pathname])
    function renderNavigationAction () {
        return bottoms.map(item => {
            return <BottomNavigationAction onTouchEnd={() => navClick(item)} key={item.path} label={item.label} icon={item.icon} />
        })
    }
    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {renderNavigationAction()}
            </BottomNavigation>
        </Box>
    );
}
