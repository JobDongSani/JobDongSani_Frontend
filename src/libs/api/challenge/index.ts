/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios'

export default {
    postChallenge(title: string, startAt: string, endAt: string, content: string, introduce: string, imageUrl: string){
        console.log(title, startAt, endAt, content, imageUrl, introduce)
        return request({
            url: '/challenge',
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            data: {
                title: title,
                startDate: startAt,
                endDate: endAt,
                content: content,
                introduce: introduce,
                imageUrl: imageUrl
            }
        })
    },
    getChallengeInfo(challengeId: number){
        return request({
            url: `/challenge/${challengeId}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
    getChallengeList(page: number, type: string = 'NEW'){
        return request({
            url: `/challenge?size=10&page=${page}&type=${type}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
    getChallengeSearch(title: string, page: number, type: string = 'NEW'){
        return request({
            url: `/challenge/filter?size=10&page=${page}&title=${title}&type=${type}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
    deleteChallenge(challengeId: number){
        return request({
            url: `/challenge/${challengeId}`,
            method: 'delete',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
    getComment(challengeId: number){
        return request({
            url: `/comment/${challengeId}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
    postComment(challengeId: number, title: string, startAt: string, endAt: string, imageUrl: string){
        return request({
            url: `/comment/${challengeId}`,
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            data : {
                endDate: endAt,
                imageUrl: imageUrl,
                startDate: startAt,
                title: title
              }
        })
    },
    putHeart(challengeId: number){
        return request({
            url: `/like/${challengeId}`,
            method: 'put',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    }
}