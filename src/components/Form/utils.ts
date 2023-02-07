import {FormItemOptions, FormProps} from "@/components/Form/type";
import {isArray} from "@/utils/is";

// 设置默认表单配置
export function defaultFormOption (option: FormProps): FormProps {
    const defaultData:FormProps = {
        columns: [],
    }
    return Object.assign(defaultData, option)
}

// 设置默认表单列配置
export function defaultItemOption (itemOptions: FormItemOptions[]): FormItemOptions[] {
    const defaultData: FormItemOptions = {
        xs: 6,
        sm: 6,
        md: 4
    }
    if (itemOptions && isArray(itemOptions)) {
        return itemOptions.map(item => {
            return {
                ...defaultData,
                ...item
            }
        })
    }
    return []
}
