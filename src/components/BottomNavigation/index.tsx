import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import {useState} from "react";
import {BottomNavigationActionProp} from "@/types/common";
import {useRouter} from "next/router";

export default function PageBottomNavigation() {
    const [value, setValue] = useState(0)
    const router = useRouter()
    const bottoms :BottomNavigationActionProp[] = [
        {label: 'home', path: '/home', icon: <HomeIcon />},
        {label: 'task', path: '/task', icon: <AssignmentIcon />},
        {label: 'user', path: '/user', icon: <PersonIcon />},
    ]
    function navClick (item: BottomNavigationActionProp) {
        if (router.pathname !== item.path) {
            router.push(item.path)
        }
    }
    function renderNavigationAction () {
        return bottoms.map(item => {
            return <BottomNavigationAction onClick={() => navClick(item)} key={item.path} label={item.label} icon={item.icon} />
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
