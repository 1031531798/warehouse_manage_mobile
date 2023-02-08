import {FormMethods} from "@/components/Form/type";
import {useRef, useState} from "react";

type UseFormReturn = [
    (methods: FormMethods) => void,
    FormMethods
]
function notRegister () {
    console.warn('useForm 未注册表单')
    return false
}
const defaultMethods = {
    submitForm: notRegister,
    getFormData: notRegister,
    setFormData: notRegister
}
export function useForm (): UseFormReturn {
    let formMethods = useRef<FormMethods>(defaultMethods)
    const register = (methods: FormMethods) => {
        formMethods.current = methods
    }
    return [register, formMethods.current]
}
