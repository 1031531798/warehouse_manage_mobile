import {FormMethods} from "@/components/Form/type";
import {useRef} from "react";

type UseFormReturn = [
    (methods: FormMethods) => void,
    FormMethods
]
function notRegister () {
    console.warn('useForm 未注册表单')
    return false
}
const defaultMethods = {
    getFormData: notRegister,
    setFormData: notRegister,
    resetForm: notRegister
}
export function useForm (): UseFormReturn {
    // 使用ref作为响应值
    let formMethods = useRef<FormMethods>(defaultMethods)
    const register = (methods: FormMethods) => {
        formMethods.current = methods
    }
    return [register, formMethods.current]
}
