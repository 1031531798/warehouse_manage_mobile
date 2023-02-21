import {useRef, useState} from "react";
import {UploadProps} from "@/components/Upload/types";
import Picture from "@/components/Upload/components/picture";
import styles from './Upload.module.css'
export const Upload = (props: UploadProps) => {
    const inputFile = useRef<HTMLInputElement>(null)
    const [fileList, setFileList] = useState<FileList | null>(null)
    // 上传文件
    function fileChange () {
        console.log(inputFile.current?.files, 'change file')
        inputFile.current && setFileList(inputFile.current.files)
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
