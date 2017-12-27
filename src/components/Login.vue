<template>
  <div>
    <h1>登录页面</h1>
    <div @click="login">点击登录</div>
  </div>
</template>
<script >
import { mapMutations } from "vuex";
import u from "underscore";

export default {
  data() {
    return {
      postbody: {
        name: "yy",
        psd: "oioi"
      }
    };
  },
  mounted() {
    let nk = u.map({ one: 1, two: 2, three: 3 }, function(key, val) {
      return key + "p";
    });
    console.log(nk);

    let kl = [{ age: 19 }, { age: 12 }, { age: 20 }];
    let bk = u.filter(kl, function(item, index) {
      return index > 1;
    });
    console.log(kl);
    console.log(bk);

    var stooges = [
      { name: "moe", age: 40 },
      { name: "larry", age: 110 },
      { name: "curly", age: 60 }
    ];
    let yi = stooges.sort(function(a, b) {
      return a.name > b.name;
    });
    console.log(yi);
    let a = [];
    let fn = function(n) {
      a.push(Promise.resolve(n));
      return a;
    };
    let ak = u.each(stooges, fn);
    console.log(a);
    Promise.all(a).then(function(al) {
      console.log(al);
    });
  },
  methods: {
    ...mapMutations(["changetoken"]),
    login() {
      // this.$http.post("/login.json",this.postbody).then(data=>{
      //   console.log(data);
        this.changetoken("data.data.token");
      this.$router.push("/father");
      // })
    }
  }
};
</script>

