document.addEventListener("alpine:init", () => {
    Alpine.data('home', () => ({
        message: 'hello',
        styles() {
            return `
                h2 {
                    color: red;
                }
            `;
        },
        page() {
            return `<h2>${this.message}</h2>`;
        }
    }));
});