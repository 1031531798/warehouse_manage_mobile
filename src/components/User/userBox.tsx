import useUserStore from "@/store/user";
import {Avatar} from "@mui/material";
import { deepPurple } from '@mui/material/colors';

interface UserBoxProps {
    showName?: boolean
}
const UserBox = ({showName = true}: UserBoxProps) => {
    const {userInfo} = useUserStore()
    const nameText = <div className={'text-2xl ml-2'}>{userInfo.userName}</div>
    return (
        <>
            <div className={'user-box flex flex-row align-middle border-2'}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{userInfo.userName?.slice(-2)}</Avatar>
                {showName ? nameText : ''}
            </div>
        </>
    )
}

export default UserBox
