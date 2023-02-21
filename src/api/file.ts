import request from "@/utils/request";

export function uploadFileApi (data: any) {
    return request.post('/images/upload', data)
}
