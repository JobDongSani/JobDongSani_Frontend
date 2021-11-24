/* eslint-disable import/no-anonymous-default-export */
import request from '../../axios'

export default {
    postChallenge(title: string, startAt: string, endAt: string, content: string){
        return request({
            url: '/challenge',
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            data: {
                title: title,
                startAt: startAt,
                endAt: endAt,
                content: content
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
    getChallengeList(page: number){
        return request({
            url: `/challenge?size=10&page=${page}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
    getChallengeSearch(page: number){
        return request({
            url: `/challenge/filter?size=10&page=${page}`,
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
    }
}