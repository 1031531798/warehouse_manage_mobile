import {TextFieldProps} from "@mui/material/TextField/TextField";
// 表单配置
export interface FormProps {
    menu?: JSX.Element
    columns: FormItemOptions[]
    ref?: any
    onSubmit: (formData: any) => void
}
// 表单 单列配置
export type FormItemOptions = {
    xs?: number
    sm?: number
    md?: number

} & TextFieldProps
