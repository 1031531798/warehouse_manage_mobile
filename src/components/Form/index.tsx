import {Box, Button, TextField} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { FormProps} from "@/components/Form/type";
import {defaultFormOption, defaultItemOption} from "@/components/Form/utils";
import {useEffect, useRef, useState} from "react";


const Form = (props: FormProps) => {
    const {menu, register} = defaultFormOption(props)
    const [columns, onSubmit] = useState(defaultItemOption(props.columns))
    const [formData, setFormData] = useState({})
    const formRef = useRef<HTMLFormElement>()
    const renderFormCell = () => {
        return columns.map(col => {
            return <Grid key={col.id} xs={col.xs} sm={col.sm} md={col.md}>
                <TextField
                    {...col}
                    required={col.required}
                    id={col.id}
                    label={col.label}
                    className={col.className}
                />
            </Grid>
        })
    }
    // 获取表单数据
    function getFormData () {
        const list = formRef.current?.elements
        const data: any = {}
        columns.forEach(col => {
            if (col.id) {
                const node = list?.namedItem(col.id) as HTMLInputElement
                data[col.id] = node.value
            }
        })
        return data
    }

    function submitForm () {
        if (formRef.current?.reportValidity()) {
            const data = getFormData()
            setFormData(data)
            onSubmit && onSubmit(data)
        }
    }
    // 注册form 事件
    register && register({submitForm, getFormData, setFormData})
    return (
        <>
            <Box
                component="form"
                ref={formRef}
            >
                <Grid className={'p-1'} container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                    {renderFormCell()}
                </Grid>
                {menu}
            </Box>
        </>
    )
}
export default Form
