<template>
 <div  @click='changelang'  id='father'>
   {{a}}{{b}}{{c}}<br/>
  <child  :child-data="asyncData" :loadimg='loadimg'></child>
   
   {{$t("message.fathervue.father") }}&&{{$t("message.hello") }}**{{$t('message.fathervue.chi')}}
   <!-- {{this.$i18n.messages}}&*&*&*{{this.$i18n.locale}} -->
  父组件

  <div>vuex{{checklen}}{{add}}&&&&&{{es6arr}}</div>
  <img    v-for="(item,index) in src" :key='index' :src="item" alt="loading"> 
<div style="height:800px;width:100%">
  <img v-lazy data-src="../../static/a.jpg" alt="loading" >
</div>
  <div style="height:800px;width:100%">
   <img v-lazy data-src="../../static/b.jpg" alt="loading" >
   </div>
    <div style="height:800px;width:100%">
   <img v-lazy data-src="../../static/c.jpg" alt="loading" >
   </div>
  <!-- <img v-lazy='{src:"../../static/a.jpg"}' alt="loading"> -->
 </div>
</template>

<script>
import child from "@/components/Children";
import mixin from "@/mixins/all";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Father",
  data() {
    return {
      asyncData: false,
      src: [],
      es6arr: [],
      b: "vbvbvb"
    };
  },
  mixins: [mixin],
  computed: {
    ...mapGetters(["addcount", "checklen"]),
    // ...mapGetters('../vuex/childrenvuex/one.js',['checklen']),
    ...mapState({
      count: state => state.count,
      // add: state => state.add,
      add: state => state.onevuexmoudle.add,
      token: state => state.token
    })
    // count(){
    //   console.log(this.$store.getters.addcount)
    //   return this.$store.state.count
    // },
    // addcount(){
    //   return this.$store.getters.addcount
    // }
  },
  components: {
    child
  },
  created() {},
  mounted() {




    let that = this;
    this.$http
      .get("/data.json")
      .then(data => {
        that.$http.get("/data.json").then(function(d) {
          console.log(d);
        });
      })
      .catch(err => {
        console.log(err);
      });

    console.log(this.$bus);
    console.table({ name: "19", age: 30 });
    // setTimeout模拟异步数据
    // alert(this.$i18n.locale)
    setTimeout(() => {
      this.asyncData = true;
      console.log("parent finish");
    }, 2000);

    const map = new Map([["F", "no"], ["T", "yes"]]);
    console.log(Array.isArray(map.keys()));
    for (let key of map.keys()) {
      console.log(key);
    }
  },
  
  methods: {
    ...mapActions(["pushArraction"]),
    ...mapMutations(["increment", "pushArr", "changetoken"]),
    loadimg() {
      let that = this;
      Promise.all([
        import("../assets/a.jpg"),
        import("../assets/b.jpg")
      ]).then(function(detail) {
        console.log(detail);
        that.src = detail;
      });
    },
    changelang() {
      this.$i18n.locale = "en";
      // this.$i18n.setlang("en");
      this.increment(true);
      let that = this;
      that.pushArr();
      that.pushArraction().then(function() {
        alert(22);
        that.es6arr = [...that.add];
      });
    }
  }
  // directives: {
  //   lazy: {
  //     inserted(el, bilding) {
  //       let windowHeight = window.innerHeight;
  //       let isInview = window.innerHeight > el.getBoundingClientRect().top;

  //       window.addEventListener("scroll", function(event) {
  //          if (!el.src && isInview) {
  //         el.src = el.dataset.src;
  //       }
  //       });
  //     }
  //   }
  // }
};
</script>
<style scoped>
img{
  width: 100%;
}

</style>
