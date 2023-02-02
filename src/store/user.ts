import {create} from 'zustand'
import {UserInfoType} from "@/types/userType";
import {getCache, setCache} from '@/hooks/useCache'
import {CacheEnum} from "@/enum/cache";
export interface UserStore {
    userInfo: UserInfoType,
    token: string | undefined,
    setToken: (token: string) => void
    setUserInfo: (userInfo: UserInfoType) => void
}
const useUserStore = create<UserStore>((set) => ({
    userInfo: {},
    token: getCache({
        key: CacheEnum.token,
    }) || undefined,
    setToken: (token: string) => {
        setCache({
            key: CacheEnum.token,
            storage: sessionStorage,
            value: token,
        })
        return set(() => (
            {
                token
            }
        ))
    },
    setUserInfo (info: UserInfoType) {
        return set(() => ({
            userInfo: info
        }))
    }
}))

export default useUserStore
