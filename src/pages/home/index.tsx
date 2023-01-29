import useUserStore from "@/store/user";

const HomePage = () => {
    const userStore = useUserStore()
    return (
        <div className={'home-page'}>
            {userStore.userInfo.userName}
        </div>
    )
}

export default HomePage
