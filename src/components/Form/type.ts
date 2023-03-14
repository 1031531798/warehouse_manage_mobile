import {TextFieldProps} from "@mui/material/TextField/TextField";
import {FunctionComponent} from "react";
// 表单配置
export interface FormProps {
    menu?: JSX.Element
    columns: FormItemOptions[],
    register?: (methods: FormMethods) => void
    ref?: any
}
// 表单 单列配置
export type FormItemOptions = {
    xs?: 'auto' | number
    sm?: 'auto' | number
    md?: 'auto' | number
    id: string
    type: 'text' | 'upload'
    props?: any
    component?: FunctionComponent
} & TextFieldProps

export interface FormMethods {
    submitForm?: () => Promise<unknown>
    getFormData: () => {}
    setFormData: (data: any) => void
    resetForm: () => void
}
