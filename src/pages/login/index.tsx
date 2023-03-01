import {TextField} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import PasswordInput from "@/components/Input/passwordInput";
import React, {useState} from "react";
import {loginUser} from "@/api/login";
import { useRouter } from 'next/router'
import useUserStore from "@/store/user";
import {useToast} from "@/hooks/useToast";
import Head from "next/head";


export default function LoginPage () {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const router = useRouter()
    const userStore = useUserStore()
    const {openToast} = useToast()
    function clickSubmit () {
        if (!userName) {
            openToast({message: '用户名不能为空', type: 'error'})
            return
        }else if (!password) {
            openToast({message: '密码不能为空', type: 'error'})
            return
        }
        setBtnLoading(true)
        loginUser({
            userName,
            password
        }).then(({data}) => {
            openToast({message: '登录成功', type: 'success'})
            const {setToken, setUserInfo} = userStore
            setUserInfo(data.data)
            data.data.userToken && setToken(data.data.userToken)
            router.push('/home').finally(() => {
                setBtnLoading(false)
            })
        }).catch(({data}) => {
            openToast({message: data.message, type: 'error'})
            setBtnLoading(false)
        })
        console.log('click submit')
    }
    return (
        <>
            <Head>
                <title>login</title>
            </Head>
            <div className="p-6">
                <h2 className="text-2xl">账号密码登录</h2>
                <TextField onChange={(e) => setUserName(e.target.value)} sx={{mt: 2}} className={"w-full"} label={"用户名/手机号码"} variant={"outlined"}></TextField>
                <PasswordInput onChange={setPassword} className={"w-full"} sx={{mt: 2}} label={"密码"} variant={"outlined"}></PasswordInput>
                <LoadingButton  loading={btnLoading} sx={{mt: 2}} loadingIndicator="登陆中…" onTouchEnd={clickSubmit} className={"w-full"} variant={"contained"}>登录系统</LoadingButton>
            </div>
        </>
    )
}
