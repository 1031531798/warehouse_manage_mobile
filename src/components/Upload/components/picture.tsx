import PlusIcon from "@/components/Upload/icon/plus.svg";
import {RefObject, useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {usePreview} from "@/hooks/useImage";
import {mapTransformValueArray} from "@/utils/transform";
interface PictureUploadProps {
    inputRef: RefObject<HTMLInputElement>
    fileList: Map<string, File>
}
const Picture = (props: PictureUploadProps) => {
    const {inputRef, fileList} = props
    const [showPreview, setShowPreview] = useState<boolean>(false)
    const boxClass = ' w-full h-full w-20 h-20 rounded-lg ml-2 mb-2'
    const [open, close] = usePreview()
    function startUpload() {
        inputRef.current?.click();
    }
    function renderPictureBox () {
    }
    function openPreview () {
        open(mapTransformValueArray(fileList))
    }
    const renderFileList = useMemo(() => {
        let imageList: JSX.Element[] = []
        fileList.forEach((item) => {
            imageList.push(<Image onClick={openPreview} className={boxClass} width={40} height={40} src={window.URL.createObjectURL(item)} alt={item.name} key={item.name} style={{objectFit: 'cover'}} />)
        })
        return (
            <>
                {imageList}
            </>
        )
    }, [fileList])
    return (
        <div className={'flex flex-row w-full h-full flex-wrap'}>
            {renderFileList}
            <div className={boxClass + ' flex flex-row cursor align-middle justify-center border-2 border-dashed'} onTouchEnd={startUpload} >
                <img width={40} src={PlusIcon.src} alt={"添加"} />
            </div>
        </div>

    )
}
export default  Picture
