/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios'

export default {
    postFile(file: FormData){
        for(let i of file.values()){
            console.log(i, "asd")
        }
        return request({
            url: '/file',
            method: 'post',
            data: {
                file: file
            }
        })
    }
}