export default function (Alpine) {
  
  Alpine.directive('page', (el) => {
    const data = Alpine.$data(el);
    // this could be better but it works for now
    const uniqueScopeId = 'scope-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

    if (!data || typeof data.page !== 'function') {
      throw new Error(`Alpine data must have a 'page' function`);
    }

    if (typeof data.styles === 'function') {
      Alpine.effect(() => {
        el.innerHTML += `
        <style>
          [data-scope="${uniqueScopeId}"] {
            ${data.styles()}
          }
        </style>
        `;
      });
    }
    
    // Set up reactive effect to update visibility
    Alpine.effect(() => {
      el.innerHTML += `
      <div data-scope="${uniqueScopeId}">
        ${data.page()}
      </div>
      `;
    });

  
  });

}
