import {request} from './request.js'
import axios from 'axios'

// export function getHomeMultidata(){
//   return request({
//     url:'/home/multidata'
//   })
// }
export function getHomeMultidata(){
  return axios({
      url:'http://152.136.185.210:8000/api/n3/home/multidata',
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
      url:'http://152.136.185.210:8000/api/n3/home/data',
      params:{
        type,
        page
      }
  })
}