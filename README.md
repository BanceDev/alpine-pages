**--- DELETE START ---**

# Alpine JS Plugin Template

This is a template repository to help developers quickly build Alpine JS
plugins.

## How to Use

1. Clone the repository with the "Use this template" button on GitHub
2. Run `npm install` to install ES Build
3. Build your plugin

### Compiling

To compile the code you run `npm run build` which will create two files in the
`/dist` directory.

### Testing

In this template you will find a `index.html` file that you can use for testing
how the Alpine JS plugin works.

I recommend using [vercel/serve](https://www.npmjs.com/package/serve) to serve
this file.

## Things to Change

- Find and replace "alpinejs-pages" with the name of your plugin
- Find and replace "pages" with the name of your compiled file
- Find and replace "DESCRIPTION" with a description of your plugin
- Uncomment "index.html" in the `.gitignore` file

🚨 Make sure find and replace is case sensitive

If you were creating a plugin called "Alpine JS CSV" you could do the following:

- "alpinejs-pages" to "alpinejs-csv"
- "pages" to "csv"
- "DESCRIPTION" to "Transform data into a CSV with Alpine JS 📈"

---

### License

The choice of adding a license and what license is best for your project is up
to you.

[Adding a License on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)

**--- DELETE END ---**

# Alpine Pages

Alpine Pages is a plugin desinged to make it simpler to make multiple "pages" for your Alpine SPA. This is achieved by creating localized Alpine data for your page and allowing you to use it in more freeform ways while still preserving full reactivity. Alpine Pages also features automatic routing for your pages out of the box with support for both history-based and hash-based routing.

## Install

### With a CDN

```html
<script defer src="https://unpkg.com/alpinejs-pages@latest/dist/pages.min.js"></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-pages

npm install -D alpinejs-pages
```

```js
import Alpine from 'alpinejs'
import pages from 'alpinejs-pages'

Alpine.plugin(pages)

Alpine.start()
```

## Example

Examples of how the plugin works.

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-pages)
![](https://img.shields.io/npm/v/alpinejs-pages)
![](https://img.shields.io/npm/dt/alpinejs-pages)
![](https://img.shields.io/github/license/markmead/alpinejs-pages)
