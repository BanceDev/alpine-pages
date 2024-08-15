export default function (Alpine) {
  
  Alpine.magic('page', (el) => {
    const data = Alpine.$data(el);

    if (!data || typeof data.page !== 'function') {
      throw new Error(`Alpine data must have a 'page' function`);
    }

    return data.page;
  });

  Alpine.directive('page', (el) => {
    const data = Alpine.$data(el);

    if (!data || typeof data.page !== 'function') {
      throw new Error(`Alpine data must have a 'page' function`);
    }
    
    // Set up reactive effect to update visibility
    Alpine.effect(() => {
      el.innerHTML = data.page();
    });

  
  });

}
