//局部混合mixins
export default {
  methods: {
    isNumber(val) {
      return isNaN(val)
    },
    lengthLimte(val, maxLength) {
      return val.length > maxLength
    },
    isPhoneNumber(val) {
      var reg = /^1[3|4|5|7|8][0-9]{9}$/;
      return reg.test(val)
    },
  },
  directives: {
    lengthCheck: {
      //校验长度
      inserted: function (el, binding) {
        el.addEventListener("input", function () {
            console.log(binding.value._self)
            //！！！！！！！！！！！！接收指令传来的vue模块的this
          if (binding.value._self.lengthLimte(el.value, binding.value.size)) {
            alert("最多输入" + binding.value.size + "位")
            el.value = String(el.value).substr(0, 11)
            el.style.background = binding.value.color;
          }
        }, false)

      }
    },
    isnum: {
      //校验是数子
      inserted: function (el, binding) {
        el.addEventListener("input", function () {
          console.log(isNaN(el.value))
          ////！！！！！！！！！！！！接收指令传来的vue模块的this;如果不把模块this传递过来就会报错isNumber undefined
          if (binding.value._self.isNumber(el.value)) {
            alert("只能输入数字");
            //去空歌
            el.value = el.value.substr(0, el.value.length - 1).replace(/(^\s*)|(\s*$)/g, "");
            el.style.background = binding.value.color;
          }
        }, false)
      }
    },
    phone: {
      inserted: function (el, binding) {
        el.addEventListener("input", function () {
          if (binding.value._self.isPhoneNumber(el.value)) {
            alert("手机号码输入正确");
            console.log(el.value.length)
            el.value = el.value.substr(0, el.value.length - 1).replace(/(^\s*)|(\s*$)/g, "");
            console.log(el.value.length)
          }
        }, false)

      }
    },
  }

}
