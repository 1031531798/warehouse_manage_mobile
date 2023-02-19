import {Box, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useRouter} from "next/router";
import GoodsList from "@/pages/storage/goods/list";
const StoragePage = () => {
    const router = useRouter()
    function openGoodPage (type: 'add' | 'update' | 'detail') {
        router.push('/storage/goods').then(() => {
            console.log(type)
        })
    }
    return (
        <div className={'storage-page'}>
            <div className={'grid '}>
                <Box className={'flex flex-row items-center justify-around mt-5'}>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={() => openGoodPage('add')}>添加商品</Button>
                    <Button variant="contained" startIcon={<AddIcon />}>商品入库</Button>
                </Box>
            </div>
            <GoodsList></GoodsList>
        </div>
    )
}

export default StoragePage
