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
        id: '',
        xs: 6,
        sm: 'auto',
        md: 'auto',
        type: 'text',
        props: {}
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
