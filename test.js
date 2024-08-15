document.addEventListener("alpine:init", () => {
    Alpine.data('home', () => ({
        message: 'hello',
        page() {
            return `<h2>${this.message}</h2>`;
        }
    }));
});