export const db=({commit},num=1)=>{
    commit("ADD_NUM",num)
    commit("moduleA/ADD_NUM")
}