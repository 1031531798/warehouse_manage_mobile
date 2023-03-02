import Image, {ImageLoaderProps, ImageProps} from "next/image";
import {useRouter} from "next/router";
import {useState} from "react";
import ImagePreview from "@/components/Image/preview";

interface NextImageProps extends ImageProps {
    previewList?: any[]
}
const NextImage =  (props: NextImageProps) => {
    const router = useRouter()
    const [showPreview, setShowPreview] = useState<boolean>(false)
    const {previewList} = props
    console.log(router, 'router')
    const imageLoader = ({src}: ImageLoaderProps) => {
        return '' + src
    }
   return (
       <>
           <Image
               {...props}
               onClick={() => setShowPreview(true)}
               loader={imageLoader}
           />
           {showPreview && <ImagePreview previewList={previewList} imageIndex={0} />}
       </>
   )

}

export default NextImage
