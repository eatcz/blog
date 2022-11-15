import Mockrequest from './mockAjax'

export const reqHotlists = () =>Mockrequest({url:'/hot' , methods:'get'})

// 最新文章
export const reqNewArticles = () =>Mockrequest({url:'/news' , method:'get'})