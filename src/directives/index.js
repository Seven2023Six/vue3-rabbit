// 定义懒加载插件
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    // 定义全局指令
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el: 指令绑定那个元素 img
        // binding：binding.value 指令等于号后面绑定的表达式的值    图片url
        // console.log(el, binding.value);

        const { stop } = useIntersectionObserver(el, ([entry]) => {
          //   console.log(entry?.isIntersecting);

          if (entry?.isIntersecting) {
            // 进入视口区域
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
