import {TouchEvent, useEffect, useMemo, useState} from "react";

interface ImagePreviewProps {
    previewList?: any[]
    imageIndex: number
    onClose: Function
}
type PreviewFileProp = {
    name: string
    src: string
}
const ImagePreview = (props: ImagePreviewProps) => {
    const {previewList = [], imageIndex} = props;
    const [previewFiles, setPreviewFiles] = useState<PreviewFileProp[]>([])
    const zIndex = 2000
    function closePreview(event: TouchEvent<HTMLDivElement>) {
        props.onClose()
        event.preventDefault()
    }
    useEffect(() => {
        // 每次预览数据变更时同步预览文件数据
        setPreviewFiles(previewList.map(item => {
            return {
                name: item.name,
                src: item instanceof File ? URL.createObjectURL(item) : item.src
            }
        }))
    }, [])
    const getCurrenImage = useMemo(() => {
        return previewFiles[imageIndex]
    }, [imageIndex, previewFiles])
    return (
        <div
             className={'preview flex flex-col justify-center items-center w-full h-full'}>
            {getCurrenImage &&
                <>
                    <img style={{zIndex}} width={'60%'} src={getCurrenImage.src} alt={getCurrenImage.name} />
                    <span style={{zIndex}}>{getCurrenImage.name}</span>
                </>
            }
            <div
                onTouchEnd={closePreview}
                className={'preview-mask absolute w-full h-full bg-black bg-opacity-40'}
            ></div>
        </div>
    )
}
export default ImagePreview
