import {Button, TextField} from '@mui/material'
import PasswordInput from "@/components/Input/passwordInput";
export default function LoginPage () {
  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl">账号密码登录</h2>
          <TextField className={"mt-5 w-full"} label={"用户名/手机号码"} variant={"outlined"}></TextField>
          <PasswordInput className={"mt-5 w-full"} label={"密码"} variant={"outlined"}></PasswordInput>
          <Button className={"mt-5 w-full"} variant={"contained"}>登录系统</Button>
      </div>
    </>
  )
}
