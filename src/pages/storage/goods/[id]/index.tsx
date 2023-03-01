import {useRouter} from "next/router";
import {Suspense} from "react";
import GoodsInfo from "@/pages/storage/goods/[id]/info";
import GoodsEmpty from "@/pages/storage/goods/[id]/empty";
import ErrorBoundary from "@/components/error";

const GoodsDetail = ()  => {
    const router = useRouter()
    const goodsId = router.query.id as string
    console.log(router)
    return(
        <>
            {goodsId ?
            <GoodsEmpty />
            : <ErrorBoundary>
                    <Suspense fallback={<div>loading...</div>}>
                        <GoodsInfo goodsId={goodsId} />
                    </Suspense>
                </ErrorBoundary>
            }
        </>
    )
}

export default GoodsDetail
