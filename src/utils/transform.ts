/**
 * @description 转换map类型数据 获取value 数组
 * @param map
 */
export function mapTransformValueArray (map: Map<any, any>): any[] {
    return Array.from(map).map(item => item[1])
}
