import {AppBar, Box, IconButton, Toolbar, Typography, Button} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useRouter} from "next/router";
import UserBox from "@/components/User/userBox";
import {useMemo} from "react";
import {getRoutePage} from "@/hooks/useRoute";
const PageHeader =  () => {
    const router = useRouter()
    const route = useMemo(() => {
        return getRoutePage(router.pathname)
    }, [router.pathname])
    function handleBack () {
        router.back()
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {route.name}
                    </Typography>
                    <UserBox showName={false}></UserBox>
                </Toolbar>
            </AppBar>
        </Box>
        // <header className={'flex-row center mt-1 mb-1 p-2'}>
        //     <IconButton aria-label="back" size="large" onClick={handleBack}>
        //         <KeyboardBackspaceIcon style={{color: 'rgb(var(--foreground-rgb))'}} fontSize="large"></KeyboardBackspaceIcon>
        //     </IconButton>
        // </header>
    )
}

export default PageHeader
