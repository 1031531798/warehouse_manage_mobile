import {AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, Divider} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useRouter} from "next/router";
import UserBox from "@/components/User/userBox";
import {useMemo, useState} from "react";
import {getRoutePage} from "@/hooks/useRoute";
const PageHeader =  () => {
    const router = useRouter()
    const  [drawerOpen, setDrawerOpen ] = useState(false)
    const route = useMemo(() => {
        return getRoutePage(router.pathname)
    }, [router.pathname])
    const navItems = ['个人爱好', '用户管理', '系统设置'];
    function handleBack () {
        router.back()
    }
    const container = typeof window !== 'undefined' ? () => window.document.body : undefined;
    function handleDrawerToggle () {
        setDrawerOpen(!drawerOpen)
    }
    // 左侧抽屉内容
    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                辅助功能
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {route.name}
                    </Typography>
                    <UserBox showName={false}></UserBox>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default PageHeader
