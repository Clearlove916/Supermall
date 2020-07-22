import axios from 'axios'

export function request(urlbaseConfig){
  const Netquery=axios.create({
    baseURl:'http://152.136.185.210:8000/api/n3',
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

