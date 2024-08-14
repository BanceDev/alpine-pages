export default function (Alpine) {
  let currentPage = window.location.pathname;

  window.addEventListener('popstate', () => {
    currentPage = window.location.pathname;
  });

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
        // Setup reactive state for the page
        Alpine.effect(() => {
          const htmlContent = obj.page();
          this.$el.innerHTML = htmlContent;
        });
        
        originalInit.call(this);
      }

      return obj;
    });
  };

  Alpine.magic('page', () => {
    return currentPage;
  });

  Alpine.directive('page', (el, { expression }) => {
    el.setAttribute('x-data', expression);
    el.setAttribute('x-show', `$page === ${expression}`);
  });

  Alpine.magic('route', () => path => {
    currentPage = path;
    history.pushState(null, null, path);
  });

}
