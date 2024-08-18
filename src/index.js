export default function (Alpine) {
  let idCounter = 0;

  Alpine.directive('page', (el) => {
    const data = Alpine.$data(el);
    // this could be better but it works for now
    const uniqueScopeId = 'scope-' + Date.now() + '-' + idCounter;
    idCounter++;

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
