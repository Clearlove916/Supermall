
export default{
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct=context.state.shopCarList.find(item=>item.id===payload.id);
      if(oldProduct){
        context.commit('addCoounter',payload);
        resolve('商品数量加1');
      }else{
        payload.count=1;
        context.commit('addToCart',payload);
        resolve("添加商品成功!");
      }
    })
  },
  changeChecked(context,payload){
    let product=context.state.shopCarList.find(item=>item.id===payload.id);
    context.commit('changeChecked',product);
  },
  checkedAll(context){
    let flag=false;
    for(let item of context.state.shopCarList){
      if(!item.ischecked){
        flag=false;
        break
      }else{
        flag=true;
      }
    }
    console.log(flag);
    context.commit('checkedAll',flag);
  },
  checkedBtnClick(context){
    context.commit('checkedBtnClick');
  }
}