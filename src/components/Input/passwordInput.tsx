import {FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton} from "@mui/material";
import React, {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

interface PasswordInputProps {
    label?: string;
    variant?: "outlined" | "standard" | "filled";
    onChange?: (value: string) => void;
    className?: string;
}
export default function PasswordInput (props: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(true)
    const {label = '密码', variant = 'outlined', onChange, className = 'w-full'} = props
    function handleClickShowPassword () {
       setShowPassword(!showPassword)
    }
    function handleChange (e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        onChange && onChange(e.target.value)
    }
    return (
        <FormControl className={className} variant={variant}>
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'password' : 'text'}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
        </FormControl>
    )
}
