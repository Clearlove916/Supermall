import {request} from './request.js'
import axios from 'axios'

// export function DetailRequest(iid){
//   return request({
//     url:'/detail',
//     params:{
//       iid
//     }
//   })
// }
export function DetailRequest(iid){
  return axios({
    url:'http://152.136.185.210:8000/api/n3/detail',
    params:{
      iid
    }
  })
}

// export function GetRecommend(){
//   return request({
//     url:'/recommend',
//   })
// }

export function GetRecommend(){
  return axios({
    url:'http://152.136.185.210:8000/api/n3/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.columns=columns;
    this.services=services;
    this.lowNowPrice=itemInfo.lowNowPrice;
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
  }
}