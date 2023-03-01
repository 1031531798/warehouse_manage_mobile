import request from "@/utils/request";

/**
 * @description 保存商品
 */
export function saveGoodsApi (data: any) {
    return request.post('/goods/save', data)
}

/**
 *
 * @description 商品分页
 */
export function getGoodsPageApi (params: any) {
    return request({method: "get", url:'/goods/page', params})
}

/**
 *
 * @description 全量列表
 */
export function getGoodsListApi (data: any) {
    return request({method: 'get',url:'/goods/list', params: data})
}
/**
 *
 * @description 获取详情
 */
export function getGoodsDetailApi (id: any) {
    return request({method: 'get',url:`/goods/info/${id}`})
}
