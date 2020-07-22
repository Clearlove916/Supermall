export default{
  addCoounter(state,payload){
    payload.count++;
  }, 
  addToCart(state,payload){
    payload.ischecked=true;
    state.shopCarList.push(payload);
  },
  changeChecked(state,payload){
    payload.ischecked=!payload.ischecked;
  },
  checkedAll(state,payload){
    if(payload){
      state.shopCarList.forEach(item=>item.ischecked=false);
    }else{
      state.shopCarList.forEach(item=>item.ischecked=true);
    }
  },
  checkedBtnClick(state){
    state.timer = new Date().getTime()
  }
  
}