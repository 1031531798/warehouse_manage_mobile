import StatisticBox from "@/pages/home/statisticsBox";
import HomeMenu from "@/pages/home/homeMenu";

const HomePage = () => {
    return (
        <div className={'home-page p-2 h-full'}>
            <div className={'h-full relative'}>
                <h3 className={'text-center w-full'}>HOME</h3>
                <StatisticBox />
                <HomeMenu />
            </div>
        </div>
    )
}

export default HomePage
