export default function (Alpine) {
  Alpine.page = (name, component) => {
    // Create an alpine data for the local page data
    Alpine.data(name, () => {
      const obj = component();

      // require the page function
      if (typeof obj.page !== 'function') {
        throw new Error('Alpine.page components must contain a "page" function');
      }

      // intercept and modify the init function
      const originalInit = obj.init || function() {};
      obj.init = function() {
        const htmlContent = obj.page();
        this.$el.innerHTML = htmlContent;
        originalInit.call(this);
      }

      return obj;
    });
  };

  Alpine.directive('page', (el, { expression }) => {
    el.setAttribute('x-data', expression);
    el.setAttribute('x-show', `$page === ${expression}`);
    el.setAttribute('x-effect', 'page()');
  });


}
