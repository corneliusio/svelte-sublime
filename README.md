# Svelte Syntax Highlighting

Sublime Text Syntax highlighting for [Svelte 3](https://svelte.dev/) components.

<img src="media/hello-world-3.png">

### Install

- Via Package Control: search for `Svelte`.
- Manual: clone this repo into your Sublime `Packages` folder.

### Supported Syntaxes

**NOTE:** You still need to install corresponding packages for pre-processors (e.g. SASS, Typescript) to get proper syntax highlighting for them.

#### Scripts

```html
    <script type="text/ts">
        // Typescript
    </script>
```
```html
    <script type="text/coffeescript">
        // CoffeeScript
    </script>
```
```html
    <script type="text/livescript">
        // LiveScript
    </script>
```
```html
    <script type="text/babel">
        // Special allowance for using Babel's Sublime syntax definitions package for ES6
        // https://github.com/babel/babel-sublime
    </script>
```

#### Styles

```html
    <style type="text/scss">
        /* SCSS */
    </style>
```

```html
    <style type="text/sass">
        /* SASS */
    </style>
```

```html
    <style type="text/less">
        /* LESS */
    </style>
```

```html
    <style type="text/stylus">
        /* Stylus */
    </style>
```

```html
    <style type="text/postcss">
        /* PostCSS */
    </style>
```

### Special Thanks

Huge thanks to the Vue.js folks for their [Vue Syntax Highlight](https://github.com/vuejs/vue-syntax-highlight/) package from which a *ton* of solutions for this package came.

And, obviously, the biggest thanks to Rich Harris for making something as awesome as [Svelte](https://svelte.dev/).

### License

[MIT](http://opensource.org/licenses/MIT)
