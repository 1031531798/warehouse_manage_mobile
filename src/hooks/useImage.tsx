import {useEffect, useState} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import Preview from "@/components/Upload/components/preview";
import { createRoot  } from 'react-dom/client';

interface UsePreviewProps {
    fileList?: any[]
}
export function usePreview (props?: UsePreviewProps) {
    const [show, setShow] = useState<boolean>(false)
    const previewId = 'image-preview-box'
    const [previewList, setPreviewList] = useState<any[]>(props?.fileList || [])
    const previewClass = 'w-full h-full fixed top-0'
    useEffect(() => {
        let mainBox = document.getElementById(previewId)
        if (!mainBox){
            mainBox = document.createElement('div')
            mainBox.id = previewId
            mainBox.className = previewClass
            document.body.append(mainBox)
            mainBox.style.display = 'none'
        }
        if (show) {
            mainBox.style.display = 'flex'
            const dom = <Preview onClose={close} previewList={previewList} imageIndex={0} />
            const root = createRoot(mainBox)
            root.render(dom)
        }else {
            mainBox.style.display = 'none'
        }
    }, [show])
    function open (fileList?: any[]) {
        fileList && setPreviewList(fileList)
        setShow(true)
    }
    function close () {
        setShow(false)
    }
    return [
        open,
        close
    ]
}
