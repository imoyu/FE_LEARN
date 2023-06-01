export default {
  install(Vue, a, b) {
    console.log(a, b);

    Vue.directive('fbind', {
      bind(e, b) {
        e.value = b.value;
      },
      inserted(e, b) {
        e.focus();
      },
      update(e, b) {
        e.value = b.value;
      }
    })

    Vue.prototype.hello = () => {
      alert('你好啊');
    };
  },
}