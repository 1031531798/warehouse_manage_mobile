import {create} from 'zustand'
import {ToastConfig} from "@/hooks/useToast";
export interface ToastStore {
    toastConfig: ToastConfig
    setToastConfig: (config: ToastConfig) => void
    open: boolean
    setOpen: (open: boolean) => void
}
const useToastStore = create<ToastStore>((set) => ({
    toastConfig: {
        type: 'info',
        message: ''
    },
    setToastConfig (config: ToastConfig) {
        return set(() => ({
            toastConfig: {...this.toastConfig, ...config}
        }))
    },
    open: false,
    setOpen (open: boolean) {
        return set(() => ({
            open
        }))
    },
}))

export default useToastStore
