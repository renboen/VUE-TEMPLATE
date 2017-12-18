<template>
  <div>
    <h1>登录页面</h1>
    <div @click="login">点击登录</div>
  </div>
</template>
<script >
import { mapMutations } from "vuex";

export default {
  data(){
    return{
      postbody:{
      name:"yy",
      psd:"oioi"
      }
    }
  },
  methods: {
    ...mapMutations(["changetoken"]),
    login() {
      this.$http.post("/login.json",this.postbody).then(data=>{
        console.log(data);
        this.changetoken(data.data.token);
        this.$router.push("/father")
      })
    }
  }
};
</script>

