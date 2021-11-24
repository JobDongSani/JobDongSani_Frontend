/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios'

export default {
    postFile(file: FormData){
        return request({
            url: '/file',
            method: 'post',
            headers : {
                "Content-Type": "multipart/form-data"
            },
            data: file
        })
    }
}