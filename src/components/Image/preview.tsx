interface ImagePreviewProps {
    previewList?: any[]
    imageIndex: number
}
const ImagePreview = (props: ImagePreviewProps) => {
    return (
        <div className={'fixed w-full h-full'}>
            <div>
                图片详情
            </div>
        </div>
    )
}
export default ImagePreview
