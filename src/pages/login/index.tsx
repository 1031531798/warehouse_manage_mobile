import {Snackbar, Alert, AlertColor, TextField} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import PasswordInput from "@/components/Input/passwordInput";
import React, {useState} from "react";
import {loginUser} from "@/api/login";
import { useRouter } from 'next/router'
import useUserStore from "@/store/user";
export default function LoginPage () {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<AlertColor>('error');
    const [btnLoading, setBtnLoading] = useState(false)
    const router = useRouter()
    const userStore = useUserStore()

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
        setBtnLoading(true)
        loginUser({
            userName,
            password
        }).then(({data}) => {
            showMessage('登录成功', 'success')
            const {setToken, setUserInfo} = userStore
            setUserInfo(data.data)
            data.data.userToken && setToken(data.data.userToken)
            router.push('/home').finally(() => {
                setBtnLoading(false)
            })
        }).catch(({data}) => {
            console.log(data)
            showMessage(data?.message, 'error');
            setBtnLoading(false)
        })
        console.log('click submit')
    }
    return (
        <>
            <div className="p-6">
                <h2 className="text-2xl">账号密码登录</h2>
                <TextField onChange={(e) => setUserName(e.target.value)} className={"mt-5 w-full"} label={"用户名/手机号码"} variant={"outlined"}></TextField>
                <PasswordInput onChange={setPassword} className={"mt-5 w-full"} label={"密码"} variant={"outlined"}></PasswordInput>
                <LoadingButton  loading={btnLoading} loadingIndicator="登陆中…" onClick={clickSubmit} className={"mt-5 w-full"} variant={"contained"}>登录系统</LoadingButton>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}
