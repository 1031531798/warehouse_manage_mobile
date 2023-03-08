import {FormItemOptions} from "@/components/Form/type";
// 自定义组件
interface CustomProps {
    column: FormItemOptions
}
const FormComponentCustom = (props: CustomProps) => {
    const {column} = props
    return (
        <div className={'flex flex-row '}>
            <div className={'pl-1 pr-1 whitespace-nowrap'}>{column.label}</div>
            {column.component}
        </div>
    )
}


export default FormComponentCustom
