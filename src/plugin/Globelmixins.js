//全局mixins按照官网的，最好适用plugin进行扩展。当混合含有生命周期函数的时候，为了防止混合的钩子和组建的钩子都会执行，最好
//设置一个flag       let myOption = this.$options.myOption;
//在组件内添加myOption：boolen；进行控制

export default {
    install: function (Vue, options) {
        Vue.common = 'plugin插件初始化完成';
        Vue.height = window.innerHeight;
        Vue.width = window.innerWidth;
        Vue.mixin({
            created() {
                let myOption = this.$options.myOption;
                if (myOption) {
                    console.log('插件mixin钩子')
                }
            },
            mounted() {
                let myOption = this.$options.myOption;
                if (myOption) {
                    console.log("mounted")
                }
            },
            methods: {
                test: function () {
                    alert(3)
                }
            },
            filters: {
                add(val) {
                    return ++val
                }
            }
        })
    }
};



