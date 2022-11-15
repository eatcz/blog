// 引入mockjs
import Mock from "mockjs";
import hot from './hot.json';
import news from './newArticles.json'
Mock.mock('/mock/hot' , {code:200 , data:hot})
Mock.mock('/mock/news' , {code:200 , data:news})