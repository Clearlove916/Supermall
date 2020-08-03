import axios from 'axios'

// 以下接口地址不是正确的。获取接口地址请加微信coderwhy003

export function request(urlbaseConfig){
  const Netquery=axios.create({
    baseURl:'http://111.136.185.210:8000/api/z8',
    timeout:5000
  })

  Netquery.interceptors.request.use(config=>{
    return config;
  },err=>{
    console.log(err);
  })

  Netquery.interceptors.response.use(res=>{
    return res;
  },err=>{
    console.log(err);
  })

  return Netquery(urlbaseConfig);
}

