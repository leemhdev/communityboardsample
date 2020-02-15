// 액션
// src/store/actions.js
import api from '@/api'
import { FETCH_POST_LIST,
            FETCH_POST,
            SET_ACCESS_TOKEN,
            SET_MY_INFO,
            DESTROY_ACCESS_TOKEN,
            DESTROY_MY_INFO
} from './mutations-types'

export default {
    fetchPostList({commit}) {
        return api.get('/posts')
            .then(res => {
                commit(FETCH_POST_LIST, res.data)
            })
    },
    fetchPost({commit}, postId) {
        return api.get(`/posts/${postId}`)
            .then(res => {
                commit(FETCH_POST, res.data)
            })
    },
    signin({commit}, payload) {
        console.log("signin actions")
        const {email, password} = payload
        return api.post('/auth/signin', {email, password})
                    .then(res => {
                        console.log(res.data)
                        const {accessToken} = res.data
                        commit(SET_ACCESS_TOKEN, accessToken)

                        return api.get('/users/me')
                    }).then(res => {
                        console.log(res.data)
                        commit(SET_MY_INFO, res.data)
                    })
    },
    signinByToken({commit}, token) {
        commit(SET_ACCESS_TOKEN, token)
        return api.get('/user/me')
                    .then(res => {
                        commit(SET_MY_INFO, res.data)
                    })
    },
    signout ({commit}) {
        commit(DESTROY_ACCESS_TOKEN)
        commit(DESTROY_MY_INFO)
    }

}