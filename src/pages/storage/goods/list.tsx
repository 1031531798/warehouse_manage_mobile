import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Fragment, useMemo, useState} from "react";
import {GoodsProps} from "@/pages/storage/types";
import {Chip} from "@mui/material";
import SubtitlesIcon from '@mui/icons-material/Subtitles';
const GoodsList = () => {
    const [goodsListData, setGoodsListData] = useState<GoodsProps[]>([
        {id: "1111", goodsImage:"", goodsName: "商品名称", goodsNum: 12,goodsCode: "122222", price: 22 },
        {id: "2222",goodsImage:"", goodsName: "商品名称", goodsNum: 12,goodsCode: "122222", price: 22 },
        {id: "442",goodsImage:"", goodsName: "商品名称", goodsNum: 12,goodsCode: "122222", price: 22 },
        {id: "333",goodsImage:"", goodsName: "商品名称", goodsNum: 12,goodsCode: "122222", price: 22 },
    ])
    function renderSearch () {
        return <input />
    }
    function renderGoodsTitle (goods: GoodsProps) {
       return (
           <div className={'flex flex-row justify-between'}>
               <span>
                   {goods.goodsName}
               </span>
               <Chip icon={<SubtitlesIcon />} color={'primary'} variant={'outlined'} label={"No." + goods.goodsCode} />
           </div>
       )
    }
    const renderList = useMemo(() => {
        return goodsListData.map(item => {
            return (<ListItem alignItems="flex-start" key={item.id}>
                <ListItemAvatar>
                    <Avatar alt={item.goodsName} src={item.goodsImage}/>
                </ListItemAvatar>
                <ListItemText
                    primary={renderGoodsTitle(item)}
                    secondary={
                        <Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                编号：{item.goodsCode}
                            </Typography>
                            <Typography>
                                价格：{item.price}
                            </Typography>
                        </Fragment>
                    }
                />
            </ListItem>)
        })
    }, [goodsListData])
    return (
        <div>
            <List sx={{ width: '100%', mt: 2}}>
                {renderList}
            </List>
        </div>

);
}

export default GoodsList
