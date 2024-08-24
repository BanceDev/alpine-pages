export default function (Alpine) {
  let idCounter = 0;

  Alpine.directive("page", (el) => {
    const data = Alpine.$data(el);
    const uniqueScopeId = "scope-" + Date.now() + "-" + idCounter;
    idCounter++;

    if (!data || typeof data.page !== "function") {
      throw new Error(`Alpine data must have a 'page' function`);
    }

    if (typeof data.styles === "function") {
      Alpine.effect(() => {
        const rawStyles = data.styles();

        // Automatically prepend the scope to each CSS rule
        const scopedStyles = rawStyles.replace(
          /(^|\})\s*([^{\s]+)\s*{/g,
          (match, p1, p2) => {
            return `${p1} [data-scope="${uniqueScopeId}"] ${p2} {`;
          }
        );

        el.innerHTML += `
        <style>
          ${scopedStyles}
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
