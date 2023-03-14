import React, {useRef, useState} from "react";
import {UploadProps} from "@/components/Upload/types";
import Picture from "@/components/Upload/components/picture";
import styles from './Upload.module.css'
import {useToast} from "@/hooks/useToast";
export const Upload = (props: UploadProps) => {
    const inputFile = useRef<HTMLInputElement>(null)
    // const [fileList, setFileList] = useState<File[]>([])
    const [fileList, setFileList] = useState<Map<string, File>>(new Map())
    const toast = useToast()
    // 上传文件
    function fileChange () {
        const files = inputFile.current?.files
        // 添加文件就将文件保存至fileList
        if (files) {
            new Array(files.length).fill(0).forEach((item, index) => {
                const file = files.item(index)
                if (!file) {
                    return
                }
                if (fileList.has(file.name)) {
                    toast.openToast({
                        type: 'warning',
                        message: '文件已存在'
                    })
                }else {
                    const fileMap = new Map(fileList)
                    fileMap.set(file.name, file)
                    setFileList(fileMap)
                }
            })
        }
        console.log(fileList, 'change file')
    }

    return (
        <div className={props.className}>
            <div className={styles.overUpload}></div>
            <input id={props.id} ref={inputFile} type={"file"} className={styles.overUploadInput} onChange={fileChange} />
            <Picture fileList={fileList} inputRef={inputFile} />
        </div>
    )
}

export default Upload
