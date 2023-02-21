import PlusIcon from "@/components/Upload/icon/plus.svg";
import {RefObject} from "react";
interface PictureUploadProps {
    inputRef: RefObject<HTMLInputElement>
    fileList: null | FileList
}
const Picture = (props: PictureUploadProps) => {
    const {inputRef} = props
    function startUpload() {
        inputRef.current?.click();
    }
    return (
        <div className={'w-full h-full flex flex-row align-middle justify-center border-2 border-dashed rounded-lg'} onTouchEnd={startUpload} >
            <img width={40} src={PlusIcon.src} alt={"添加"} />
        </div>
    )
}
export default  Picture
