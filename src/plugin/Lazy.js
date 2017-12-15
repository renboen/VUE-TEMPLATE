var install = function (Vue) {
  console.log(Vue)
  const isInSight = function (el) {
    return window.innerHeight > el.getBoundingClientRect().top;
  };
  const loadImgs = function (el, binding) {
    if (!el.src && isInSight(el)) {
      console.log(el)
      el.src = el.dataset.src
    } else {
      return
    }
  }

  //es6默认启用严格模式，不支持apply,arguments
  const Throttle = function (fn, dely, mustdo, el) {
    var timer = null;
    var begin = new Date();
    return function () {
      var that = this;
      var current = new Date();
      clearTimeout(timer);
      if (current - begin > mustdo) {
        console.log('66666666666666')
        fn(el);
        begin = current
      } else {
        timer = setTimeout(function () {
          fn(el);
        }, dely)
      }

    }
  }

  const lazyFun = function (el, binding) {
    loadImgs(el)
    window.addEventListener('scroll', Throttle(loadImgs, 1000, 2000, el))
  };
  Vue.directive('lazy', {
    inserted: lazyFun,
    updated: lazyFun,
  })
}
//可以死用纸令绑定值作为路径。也可以使用data-src作为路净值。
//不过图片路径应当到static文件夹下，否则会被编译掉出现路径错误，文件找不到.
//图片懒加载插件
export default install
