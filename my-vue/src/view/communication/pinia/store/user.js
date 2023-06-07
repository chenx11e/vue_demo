import { defineStore } from "pinia";

export const useUserStore=defineStore({
  id:'user',//id必填，且需要唯一
  state:()=>{
    return{
      name:'这是我pinia的数据'
    }
  },
  getters:{
    fullName:(state)=>{
      return '我叫'+state.name
    }
  },
  actions:{
    updateName(name){
      this.name=name
    }
  }
})