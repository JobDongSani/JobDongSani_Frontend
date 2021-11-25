import request from '../../axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDonationList(){
        return request({
            url: '/trash-share-board',
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
}