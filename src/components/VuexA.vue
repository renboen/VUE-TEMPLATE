<template>
  <div>
    <h1>vuex 全局命名空间</h1>
    <h2>{{myNum}}======>{{isOdd}}</h2>
     <button @click.self.stop='ADD_NUM(1)'>++</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
      <button  @click.self.stop='DECREASE_NUM'>--</button>
     <hr>
    <h1>vuex局部命名空间</h1>
    <h2>{{moduleAnum}}======>{{moduleAisOdd}}</h2>
    <button @click.self.stop='moduleA_ADD_NUM'>++</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
     <button @click.self.stop='moduleA_DECREASE_NUM'>--</button>
     <hr>
     <h1>全局命名空间内访问局部命名空间</h1>
     全访问局部state==>{{globleMixinModuleAstate}}<br>
     访问局部state and getters==》{{globleMixinModuleA}}<br>
     <button  @click.self.stop='db(1)'>提交局部和全局命名空间的mutations</button>
     

    
  </div>
</template>

<script>
  import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
  
  export default {
    data() {
      return {}
    },
    computed: {
      // ...mapState(['myNum','globleMixinModuleAstate']),
      ...mapState({
        myNum:'myNum',
        globleMixinModuleAstate:state=>state.myNum+state.moduleA.myNum
        }),
      ...mapState('moduleA', {
        moduleAnum: 'myNum'
      }),
      ...mapGetters(['isOdd','globleMixinModuleA']),
      ...mapGetters('moduleA', {
        moduleAisOdd: 'isOdd'
      })
    },
    watch: {
      "myNum"(){
        alert("能监听到变化")
      }
    },
    mounted() {
      // this.ADD_NUM(9)
      // setTimeout(() => {
      //   this.DECREASE_NUM()
      // }, 2000)
    },
  
    methods: {
      // db(){
      //   this.ADD_NUM(1)
      //   this.moduleA_ADD_NUM()
      // },
      ...mapMutations(['ADD_NUM', 'DECREASE_NUM']),
      ...mapMutations('moduleA',{
        moduleA_ADD_NUM:'ADD_NUM',
        moduleA_DECREASE_NUM: 'DECREASE_NUM'
        }),
        ...mapActions(["db"])
    }
  }
</script>

<style scoped>
  
</style>