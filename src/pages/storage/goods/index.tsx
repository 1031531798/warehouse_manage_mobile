import {Box, IconButton, InputAdornment} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useGo} from "@/hooks/useRoute";
import FormBottoms, {FormButtonColumnProps} from "@/components/FormBottom";
import Form from "@/components/Form"
import {FormItemOptions} from "@/components/Form/type";
import {useForm} from "@/hooks/useForm";
import {saveGoodsApi} from "@/api/goods";
import {useToast} from "@/hooks/useToast";
const GoodPage = () => {
    const btnColumn: FormButtonColumnProps[] = [
        {label: '保存', event: 'submit', variant: "contained", className: 'w-1/2'},
        {label: '取消', event: 'cancel', variant: 'outlined', className: 'w-1/2'}
    ]
    const {go} = useGo()
    const {openToast} = useToast()
    function back () {
        go('/storage')
    }
    const [register, {submitForm, resetForm}] = useForm()
    function handleSubmit () {
        submitForm && submitForm().then((data) => {
            console.log('表单提交成功的数据：', data)
            saveGoodsApi(data).then(() => {
                openToast({
                    message: '新增成功',
                    type: 'success'
                })
                resetForm()
            })
        })
        return false
    }
    const formColumns: FormItemOptions[] = [
        {label: '商品名称', id: 'goodsName', required: true, xs: 12, fullWidth: true},
        {label: '商品编号', id: 'goodsCode', required: true},
        {label: '商品价格', id: 'price', type: 'number', InputProps: {endAdornment: <InputAdornment position="start">元</InputAdornment>}},
        {label: '商品数量', id: 'goodsNum', InputProps: {endAdornment: <InputAdornment position="start">件</InputAdornment>}},
    ]
    const formMenu = <FormBottoms className={'justify-center mt-2 p-2'} onCancel={back} onSubmit={handleSubmit} column={btnColumn}></FormBottoms>
    return (
        <>
            <div>
                <IconButton aria-label="back" onClick={back}>
                    <ArrowBackIcon fontSize={'medium'} />
                </IconButton>
                <Box>
                    <h3 className={'w-full text-center mb-2'}>添加商品</h3>
                </Box>
                <Form register={register} menu={formMenu} columns={formColumns}></Form>
            </div>
        </>
    )
}

export default GoodPage
