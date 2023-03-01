
const GoodsInfo = ({goodsId}: {goodsId: string})  => {
    // const goodsData: GoodsProps = use(getGoodsDetailApi(goodsId).then(({data}) => data))
    let goodsData
    console.log('goods data', goodsData)
    return(
        <>
            <div>
                {JSON.stringify(goodsData) || ''}
            </div>
        </>
    )
}

export default GoodsInfo
