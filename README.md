# Alpine Pages

![](https://img.shields.io/bundlephobia/min/alpinejs-pages)
![](https://img.shields.io/npm/v/alpinejs-pages)
![](https://img.shields.io/npm/dt/alpinejs-pages)
![](https://img.shields.io/github/license/BanceDev/alpine-pages)

Alpine Pages is a plugin desinged to make it simpler to make multiple "pages" for your Alpine SPA. This is achieved by allowing you to make fully reactive html and css inside your Alpine.data, enabling you to use alpine in more freeform ways and preventing clutter in your html documents.

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-pages@latest/dist/pages.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-pages

npm install -D alpinejs-pages
```

```js
import Alpine from "alpinejs";
import pages from "alpinejs-pages";

Alpine.plugin(pages);

Alpine.start();
```

## Example

To create a page, just add a page function to an Alpine.data. This function needs to return a string of html that will make up your page. You may also make a styles function that will create scoped css for your page. The plugin automatically handles reactivity for embedding format strings. That way if any member of your data updates the page or styles will update with it.

```js
document.addEventListener("alpine:init", () => {
  Alpine.data("home", () => ({
    message: "hello",
    color: "red",
    styles() {
      return `
        h2 {
          color: ${this.color};
        }
      `;
    },
    page() {
      return `<h2>${this.message}</h2>`;
    },
  }));
});
```

In the HTML you first need to add your data to the scope. Then to render the page just attach the x-page property to an html tag and it will fill in the inner html with your page. Since the page functions as a sort of template you can also make multiple instances of the page if you want by attaching the x-page attribute to multiple html tags within your data scope.

```html
<div x-data="home">
  <button @click="message = 'goodbye'">goodbye</button>
  <div x-page></div>
</div>
```
