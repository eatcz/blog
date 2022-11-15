// 引入mockapi接口
import {reqHotlists , reqNewArticles} from '@/api/index'

// home小仓库
const state = {
    hot:[],
    newArticles:[]
}

const actions = {
    async getHot({commit}) {
        let res = await reqHotlists()
        // console.log(res);
        if(res.code == 200) {
            commit('GETHOT' , res.data)
        }
    },
    // 获取最新文章
    async getNews({commit}) {
        let res = await reqNewArticles()
        if(res.code == 200) {
            commit('GETNEWS' , res.data)
        }
    }
}

const mutations = {
    GETHOT(state , hot){
        state.hot = hot
    },
    GETNEWS(state , newArticles){
        state.newArticles = newArticles
    }
}

const getters = {}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}