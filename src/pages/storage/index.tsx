import {Box, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useRouter} from "next/router";
import GoodsList from "@/pages/storage/goods/list";
import {useRef} from "react";
const StoragePage = () => {
    const router = useRouter()
    const listLoad = useRef<Function>()

    function openGoodPage (type: 'add' | 'update' | 'detail') {
        router.push('/storage/goods').then(() => {
            console.log(type)
        })
    }
    function listOnLoad (load: Function) {
        listLoad.current = load
    }
    return (
        <div className={'storage-page flex flex-col flex-grow w-full'}>
            <div className={'grid pb-2'}>
                <Box className={'flex flex-row items-center justify-around mt-5'}>
                    <Button variant="contained" startIcon={<AddIcon />} onTouchEnd={() => openGoodPage('add')}>添加商品</Button>
                    <Button variant="contained" startIcon={<AddIcon />}>商品入库</Button>
                </Box>
            </div>
            <GoodsList onLoad={listOnLoad}></GoodsList>
        </div>
    )
}

export default StoragePage
