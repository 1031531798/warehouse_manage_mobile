import useUserStore from "@/store/user";

const HomeUserBox = () => {
    const userStore = useUserStore()
    return (
        <>
            <div>
                {userStore.userInfo.userName}
            </div>
        </>
    )
}

export default HomeUserBox
