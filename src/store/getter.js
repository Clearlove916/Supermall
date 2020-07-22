export default{
  carLength(state){
    return state.shopCarList.length;
  },
  carList(state){
    return state.shopCarList;
  },
  backChecked(state,payload){
    return payload.ischecked;
  },
  backTimer(state){
    return state.timer;
  }
}