import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Fragment, useEffect, useMemo, useState} from "react";
import {GoodsProps} from "@/pages/storage/types";
import {Chip, Paper, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import InputBase from '@mui/material/InputBase';
import {getGoodsListApi} from "@/api/goods";
import {useKeyEvent} from "@/hooks/useKeyEvent";

const GoodsList = ({onLoad}: {onLoad: Function}) => {
    const [goodsListData, setGoodsListData] = useState<GoodsProps[]>([])
    const [keyword, setKeyword] = useState<string>('')
    const {enter} = useKeyEvent()
    useEffect(() => {
        getList()
        onLoad(getList)
    }, [])
    function getList () {
        getGoodsListApi({keyword}).then(({data}) => {
            setGoodsListData(data.data)
        })
    }

    // 渲染搜索框
    function renderSearch () {
        return (
            <>
                <Paper
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto' }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="输入名称和编号查询"
                        onKeyDown={enter(getList)}
                        onChange={(e) => setKeyword(e.target.value)}
                        inputProps={{ 'aria-label': '查询' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={getList} >
                        <SearchIcon />
                    </IconButton>
                    {/*<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />*/}
                    {/*<IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">*/}
                    {/*    <DirectionsIcon />*/}
                    {/*</IconButton>*/}
                </Paper>
            </>
        )
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
                    disableTypography={true}
                    secondary={
                        <Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <div>数量：{item.goodsNum}</div>
                                <div>价格：{item.price}元</div>
                            </Typography>
                        </Fragment>
                    }
                />
            </ListItem>)
        })
    }, [goodsListData])
    return (
        <>
            {renderSearch()}
            <div className={'overflow-y-auto flex flex-1'}>
                <List sx={{ width: '100%', mt: 2}}>
                    {renderList}
                </List>
            </div>
        </>

);
}

export default GoodsList
