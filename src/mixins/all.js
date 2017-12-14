export default{
    data(){
        return{
            a:9,
            b:"nnnnnnnnnnn",
            com:null
        }
    },
    computed:{
        c:function(){
            return this.com=this.a+1
        }
    },
    watch:{
        a(n,o){
            alert(n)
        }
    },
    // methods:{},
    // components:{},
    // directives:{},
    // ........
}