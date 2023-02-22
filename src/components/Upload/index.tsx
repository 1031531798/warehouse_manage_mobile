import {useRef, useState} from "react";
import {UploadProps} from "@/components/Upload/types";
import Picture from "@/components/Upload/components/picture";
import styles from './Upload.module.css'
export const Upload = (props: UploadProps) => {
    const inputFile = useRef<HTMLInputElement>(null)
    const [fileList, setFileList] = useState<File[]>([])
    // 上传文件
    function fileChange () {
        console.log(inputFile.current?.files, 'change file')
        const files = inputFile.current?.files
        // 添加文件就将文件保存至fileList
        if (files) {
            const list: File[]= []
            new Array(files.length).fill(0).forEach((item, index) => {
                const file = files.item(index)
                if (file) {
                    list.push(file)
                }
            })
            setFileList([...fileList, ...list])
        }
    }

    return (
        <div className={props.className}>
            <div className={styles.overUpload}></div>
            <input ref={inputFile} type={"file"} className={styles.overUploadInput} onChange={fileChange} />
            <Picture fileList={fileList} inputRef={inputFile} />
        </div>
    )
}

export default Upload
