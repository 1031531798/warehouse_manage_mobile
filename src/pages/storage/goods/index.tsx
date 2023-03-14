import {Box, IconButton, InputAdornment} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useGo} from "@/hooks/useRoute";
import FormBottoms, {FormButtonColumnProps} from "@/components/FormBottom";
import Form from "@/components/Form"
import {FormItemOptions} from "@/components/Form/type";
import {useForm} from "@/hooks/useForm";
import {saveGoodsApi} from "@/api/goods";
import {useToast} from "@/hooks/useToast";
import Upload from '@/components/Upload'
const GoodPage = () => {
    const btnColumn: FormButtonColumnProps[] = [
        {label: '保存', event: 'submit', variant: "contained", className: 'w-1/2'},
        {label: '取消', event: 'cancel', variant: 'outlined', className: 'w-1/2'}
    ]
    const {go} = useGo()
    const {openToast} = useToast()
    function back () {
        console.log('back')
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
        {label: '商品名称', id: 'goodsName', type: 'text', required: true, xs: 24, sm: 12, fullWidth: true},
        {label: '商品编号', id: 'goodsCode', type: 'text', required: true},
        {label: '商品价格', id: 'price', type: 'text', props: {type: 'number', InputProps: {endAdornment: <InputAdornment position="start">元</InputAdornment>}} },
        {label: '商品数量', id: 'goodsNum', type:'text', props: {type: 'number', InputProps: {endAdornment: <InputAdornment position="start">件</InputAdornment>} },},
        {label: '缩略图', id: 'goodsImage', type: 'upload', xs: 24}
    ]
    const formMenu = <FormBottoms className={'justify-center mt-2 p-2'} onCancel={back} onSubmit={handleSubmit} column={btnColumn}></FormBottoms>
    return (
        <>
            <div>
                <IconButton aria-label="back" onTouchEnd={back}>
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
