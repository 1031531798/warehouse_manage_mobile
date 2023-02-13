import Image, {ImageLoaderProps, ImageProps} from "next/image";
import {useRouter} from "next/router";

const NextImage =  (props: ImageProps) => {
    const router = useRouter()
    console.log(router, 'router')
    const imageLoader = ({src}: ImageLoaderProps) => {
        return '' + src
    }
   return (
       <Image
           {...props}
            loader={imageLoader}
       />
   )

}

export default NextImage
