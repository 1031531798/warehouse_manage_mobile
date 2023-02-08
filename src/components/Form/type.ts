import {TextFieldProps} from "@mui/material/TextField/TextField";
// 表单配置
export interface FormProps {
    menu?: JSX.Element
    columns: FormItemOptions[],
    register?: (methods: FormMethods) => void
    ref?: any
}
// 表单 单列配置
export type FormItemOptions = {
    xs?: number
    sm?: number
    md?: number

} & TextFieldProps

export interface FormMethods {
    submitForm: () => void
    getFormData: () => {}
    setFormData: (data: any) => void
}
