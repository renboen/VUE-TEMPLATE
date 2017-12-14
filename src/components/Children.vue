<template>
 <div @click='loadimg' >
   {{a}}
   <div v-for='item in arr' ref='div'>22222</div>
   <div  ref='yy'>22222</div>
  
  子组件{{childData}}
 </div>
</template>

<script>
import mixin from "@/mixins/all";

export default {
  // props: {
  //   childData:{
  //     type:String,
  //     default:''
  //   },
  //   propfun:{
  //     type:Function
  //   }
  // },
  props: ["childData",'loadimg'],

  data(){return{
    arr:[1,2,3]
  }},
  mixins:[mixin],
  mounted() {
    // setTimeout(()=>{
    //   this.a+=1
    // })
    console.log(this.$refs.yy)
    console.log(this.childData); // 空值
  },
  // computed:{
  //   desre(){
  //     let that=this;
  //     console.log(this.childData)
  //     if(that.childData){
  //     console.log('zhen')
  //     return that.childData
  //     }
  //   }
  // },
   watch:{
     childData(v){
       console.log(v+"f")
     }
   },
  methods: {
  },
  // updated(){
  //   //可以正确获得异步的props
  //    console.log(this.childData); // 空值
  // }
};
</script>