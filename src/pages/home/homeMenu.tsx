import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TransformIcon from '@mui/icons-material/Transform';
import {useState} from "react";

type DialActionProp = {
    icon: JSX.Element
    name: string
    click: () => void
}
export default function HomeMenu() {
    const [open, setOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        setHide(false)
    };
    const handleClose = (action?:DialActionProp) => {
        setOpen(false)
        action && action.click()
    };

    const actions: DialActionProp[] = [
        { icon: <VisibilityOffIcon />, name: '隐藏', click: hideBox },
        { icon: <TransformIcon />, name: '生成', click: () => {} },
        { icon: <BorderColorIcon />, name: '填报',click: () => {}  },
        { icon: <AddIcon />, name: '新增', click: () => {}},
    ];
    function hideBox () {
        setHide(true)
        console.log(hide)
    }
    return (
        <Box sx={{ position: 'absolute', transition: 'all .4s', bottom: 10, right: hide ? -50 : 4, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="操作"
                icon={<SpeedDialIcon />}
                onClose={() => handleClose()}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onTouchEnd={() => handleClose(action)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
