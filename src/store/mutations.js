import * as types from './mutation-types.js'
export default {//这里要注意不要在mutations里面进行异步操作
  storeName(state,data){
    state.name = data;
  },
  storePawd(state,data){
    state.Pawd = data;
  }
}
