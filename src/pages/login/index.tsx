import {AlertColor, Button, TextField} from '@mui/material'
import PasswordInput from "@/components/Input/passwordInput";
import React, {useState} from "react";
import {Snackbar, Alert} from '@mui/material';
import {loginUser} from "@/api/login";
export default function LoginPage () {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<AlertColor>('error');


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        setOpen(false);
    };
    function showMessage(message: string, type: AlertColor ='error') {
        setMessage(message)
        setType(type)
        setOpen(true)
    }

    function clickSubmit () {
        if (!userName) {
            showMessage('用户名不能为空', 'error')
            return
        }else if (!password) {
            showMessage('密码不能为空','error')
            return
        }
        loginUser({
            userName,
            password
        }).then(() => {
            showMessage('登录成功', 'success')
        })
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
                    <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}
