import {request} from './request.js'
import axios from 'axios'

// 以下接口地址不是正确的。获取接口地址请加微信coderwhy003

// export function getHomeMultidata(){
//   return request({
//     url:'/home/multidata'
//   })
// }
export function getHomeMultidata(){
  return axios({
      url:'http://111.136.185.210:8000/api/z8/home/multidata',
    })
}

// export function getHomeGoods(type,page){
//   return request({
//     url:'/home/data',
//     params:{
//       type,
//       page
//     }
//   })
// }

export function getHomeGoods(type,page){
  return axios({
      url:'http://111.136.185.210:8000/api/z8/home/data',
      params:{
        type,
        page
      }
  })
}