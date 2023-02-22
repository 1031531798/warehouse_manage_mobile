import PlusIcon from "@/components/Upload/icon/plus.svg";
import {RefObject, useMemo} from "react";
interface PictureUploadProps {
    inputRef: RefObject<HTMLInputElement>
    fileList: File[]
}
const Picture = (props: PictureUploadProps) => {
    const {inputRef, fileList} = props
    const boxClass = ' w-full h-full w-20 h-20 rounded-lg ml-2 mb-2'
    function startUpload() {
        inputRef.current?.click();
    }
    function renderPictureBox () {

    }
    const renderFileList = useMemo(() => {
        return (
            <>
                {fileList.map((item, index) => {
                    return (<img className={boxClass} src={window.URL.createObjectURL(item)} alt={item.name} key={index} style={{objectFit: 'cover'}} />)
                })}
            </>
        )
    }, [fileList])
    return (
        <div className={'flex flex-row w-full h-full flex-wrap'}>
            {renderFileList}
            <div className={boxClass + ' flex flex-row align-middle justify-center border-2 border-dashed'} onTouchEnd={startUpload} >
                <img width={40} src={PlusIcon.src} alt={"添加"} />
            </div>
        </div>
    )
}
export default  Picture
