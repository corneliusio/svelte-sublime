# Svelte Syntax Highlighting

Sublime Text Syntax highlighting for [Svelte 3](https://svelte.dev/) components.

<img src="media/hello-world-3.png">

### Install

- Via Package Control: search for `Svelte`.
- Manual: clone this repo into your Sublime `Packages` folder.

---

### Supported Scripts

##### TypeScript
```html
<script type="text/typescript"></script>
<!-- or -->
<script lang="typescript"></script>
```
or
```html
<script type="text/ts"></script>
<!-- or -->
<script lang="ts"></script>
```

##### CoffeeScript
```html
<script type="text/coffeescript"></script>
<!-- or -->
<script lang="coffeescript"></script>
```

##### LiveScript
```html
<script type="text/livescript"></script>
<!-- or -->
<script lang="livescript"></script>
```

##### Babel
```html
<script type="text/babel"></script>
<!-- or -->
<script lang="babel"></script>
```

### Supported Styles

##### Sass
```html
<style type="text/sass"></style>
<!-- or -->
<style lang="sass"></style>
```

##### Sass (SCSS)
```html
<style type="text/scss"></style>
<!-- or -->
<style lang="scss"></style>
```

##### Less
```html
<style type="text/less"></style>
<!-- or -->
<style lang="less"></style>
```

##### Stylus
```html
<style type="text/stylus"></style>
<!-- or -->
<style lang="stylus"></style>
```

##### PostCSS
```html
<style type="text/postcss"></style>
<!-- or -->
<style lang="postcss"></style>
```

**NOTE:** You still need to install corresponding packages for pre-processors (e.g. SASS, Typescript) to get proper syntax highlighting for them.

---

### Special Thanks

Huge thanks to the Vue.js folks for their [Vue Syntax Highlight](https://github.com/vuejs/vue-syntax-highlight/) package from which a *ton* of solutions for this package came.

And, obviously, the biggest thanks to Rich Harris for making something as awesome as [Svelte](https://svelte.dev/).

### License

[MIT](http://opensource.org/licenses/MIT)
