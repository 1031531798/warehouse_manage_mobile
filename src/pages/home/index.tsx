import dynamic from 'next/dynamic';
const HomePage = () => {
    const UserBox = dynamic(() => import('./homeUserBox'), {
        loading: () => (<div>加载中...</div>),
    })
    return (
        <div className={'home-page'}>
           <UserBox />
        </div>
    )
}

export default HomePage
