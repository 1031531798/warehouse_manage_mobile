import request from "@/utils/request";

/**
 * @description 保存商品
 */
export function saveGoodsApi (data: any) {
    return request.post('/goods/save', data)
}

/**
 *
 * @description 保存商品
 */
export function getGoodsPageApi (data: any) {
    return request.post('/goods/save', data)
}

