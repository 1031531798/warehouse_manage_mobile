import {Button, TextField} from '@mui/material'
import PasswordInput from "@/components/Input/passwordInput";
import React, {useState} from "react";
import {Snackbar, Alert} from '@mui/material';
export default function LoginPage () {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = React.useState(false);


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function clickSubmit () {
        if (!userName) {
            setMessage('用户名不能为空')
            setOpen(true)
            return
        }else if (!password) {
            setMessage('密码不能为空')
            setOpen(true)
            return
        }
        console.log('click submit')
    }
    return (
        <>
            <div className="p-6">
                <h2 className="text-2xl">账号密码登录</h2>
                <TextField onChange={(e) => setUserName(e.target.value)} className={"mt-5 w-full"} label={"用户名/手机号码"} variant={"outlined"}></TextField>
                <PasswordInput onChange={setPassword} className={"mt-5 w-full"} label={"密码"} variant={"outlined"}></PasswordInput>
                <Button onClick={clickSubmit} className={"mt-5 w-full"} variant={"contained"}>登录系统</Button>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}
