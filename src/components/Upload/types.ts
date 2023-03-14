export interface UploadProps {
    id: string;
    action?: string;
    uploadData?: any;
    onlyImage?: boolean;
    limit?: number;
    fileList?: Array<any>;
    className?: string;
}
