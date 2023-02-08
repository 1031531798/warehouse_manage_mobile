import {Box, IconButton, InputAdornment} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useRouterBack} from "@/hooks/useRoute";
import FormBottoms, {FormButtonColumnProps} from "@/components/FormBottom";
import Form from "@/components/Form"
import {FormItemOptions} from "@/components/Form/type";
import {useForm} from "@/hooks/useForm";
import {useState} from "react";
const GoodPage = () => {
    const {back} = useRouterBack()
    useState()
    const btnColumn: FormButtonColumnProps[] = [
        {label: '保存', event: 'submit', variant: "contained", color: 'success', sx: {ml: 2}},
        {label: '取消', event: 'cancel', variant: 'outlined'}
    ]
    const [register, {submitForm}] = useForm()
    function handleSubmit () {
        submitForm()
        return false
    }
    const formColumns: FormItemOptions[] = [
        {label: '商品名称', id: 'goodsName', required: true, xs: 12, fullWidth: true},
        {label: '商品编号', id: 'goodsCode', required: true},
        {label: '商品价格', id: 'price', type: 'number', InputProps: {endAdornment: <InputAdornment position="start">元</InputAdornment>}},
        {label: '商品数量', id: 'goodsNum', InputProps: {endAdornment: <InputAdornment position="start">件</InputAdornment>}},
    ]
    const formMenu = <FormBottoms className={'justify-center mt-2'} onCancel={back} onSubmit={handleSubmit} column={btnColumn}></FormBottoms>
    return (
        <>
            <div>
                <IconButton aria-label="back" onClick={back}>
                    <ArrowBackIcon fontSize={'medium'} />
                </IconButton>
                <Box>
                    <h3 className={'w-full text-center'}>添加商品</h3>
                </Box>
                <Form register={register} menu={formMenu} columns={formColumns}></Form>
            </div>
        </>
    )
}

export default GoodPage
