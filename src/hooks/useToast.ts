import {AlertColor} from "@mui/material";
import useToastStore from "@/store/toast";
export interface ToastConfig {
    message: string
    callback?: voidFn
    type?: AlertColor
}
type UseToastReturn = {
    openToast: (config: ToastConfig) => void
    closeToast: voidFn
}
export function useToast (): UseToastReturn {
    const toastStore = useToastStore()
    const openToast = (config: ToastConfig) => {
        toastStore.setToastConfig(config)
        toastStore.setOpen(true)
    }
    const closeToast = () => {
        toastStore.setOpen(false)
    }
    return {openToast, closeToast}
}
