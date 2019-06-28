import fly from '@/utils/flyio'

export default {
    getAllArts(data) {
        return fly.request('/art/getallart', data, { method: 'post' })
    },

    getArtDetls(params) {
        return fly.request('/getartdeil/id', params, { method: 'get' })
    },

    getCatgLists() {
        return fly.request('/catg/catglist', null, { method: 'get' })
    },

    getApptCatgLists(data) {
        return fly.request('/art/apptcatg', data, { method: 'post' })
    },

    chgLikeArt(data) {
        return fly.request('/art/chglike', data, { method: 'post' })
    },
};


