import {request} from './request.js'
import axios from 'axios'

// export function getInitialInfo(){
//   return request({
//     url:"/category"
//   })
// }

// export function getClassificationInfo(){
//   return request({
//     url:"/category/info",
//     params:{
//       maitKey
//     }
//   })
// }

// export function getClassificationDetail(miniWallkey, type){
//   return request({
//     url:"/subcategory/detail",
//     params:{
//       miniWallkey,
//       type
//     }
//   })
// }

// 以下接口地址不是正确的。获取接口地址请加微信coderwhy003

export function getInitialInfo(){
  return axios({
    url:'http://111.136.185.210:8000/api/z8/category',
  })
}

export function getClassInfo(maitKey){
  return axios({
    url:'http://111.136.185.210:8000/api/z8/subcategory',
    params:{
      maitKey
    }
  })
}

export function getClassDetail(miniWallkey,type){
  return axios({
    url:'http://111.136.185.210:8000/api/z8//subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}