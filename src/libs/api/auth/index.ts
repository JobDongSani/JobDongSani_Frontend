/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios'

export default {
    postRegister(id: string, name: string, password: string, cellphone: number | string, profileUrl: string){
        return request({
            url: '/signup',
            method: 'post',
            data: {
                username: id,
                name: name,
                password: password,
                phoneNumber: cellphone,
                userImage: profileUrl
            }
        })
    },
    postLogin(id: string, password: string){
        return request({
            url: '/signin',
            method: 'post',
            data: {
                password: password,
                username: id
            }
        })
    }
}