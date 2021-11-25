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
    getDonationInfo(id: number){
        return request({
            url: `/trash-share-board/${id}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
    },
    postDonation(title: string, content: string, contact: string, location: string, imageUrl: string){
        return request({
            url: '/trash-share-board',
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            data : {
                title: title,
                contents: content,
                contact: contact,
                location: location,
                imagePath: imageUrl
            }
        })
    }
}