/* SYNTAX TEST "Packages/Svelte/Svelte.sublime-syntax" */

###[ SCRIPTS ]#################################################################

<script>
    export let title;
    export let person;

    // this will update `document.title` whenever
    // the `title` prop changes
    $: document.title = title;

    $: {
        console.log(`multiple statements can be combined`);
        console.log(`the current title is ${title}`);
    }

    // this will update `name` when 'person' changes
    $: ({ name } = person);

    // don't do this. it will run before the previous line
    let name2 = name;
</script>

<script context="module">
    let totalComponents = 0;

    // the export keyword allows this function to be imported with e.g.
    // `import Example, { alertTotal } from './Example.svelte'`
    export function alertTotal() {
        alert(totalComponents);
    }
</script>

<script lang="coffee">
/*^^^^^^^^^^^^^^^^^^^^ meta.template.svelte meta.tag.script.begin.html */
/*^^^^^ entity.name.tag.script.html */
/*      ^^^^^^^^^^^^^ meta.attribute-with-value.lang.html */
/*      ^^^^ entity.other.attribute-name.html */
/*          ^ punctuation.separator.key-value.html */
/*           ^^^^^^^^ meta.string.html string.quoted.double.html */
/*           ^ punctuation.definition.string.begin.html */
/*                  ^ punctuation.definition.string.end.html */
/*                   ^ punctuation.definition.tag.end.html */

/* <- source.coffee.embedded.html */
</script>

<script lang="coffeescript">
/*^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.template.svelte meta.tag.script.begin.html */
/*^^^^^ entity.name.tag.script.html */
/*      ^^^^^^^^^^^^^^^^^^^ meta.attribute-with-value.lang.html */
/*      ^^^^ entity.other.attribute-name.html */
/*          ^ punctuation.separator.key-value.html */
/*           ^^^^^^^^^^^^^^ meta.string.html string.quoted.double.html */
/*           ^ punctuation.definition.string.begin.html */
/*                        ^ punctuation.definition.string.end.html */
/*                         ^ punctuation.definition.tag.end.html */

/* <- source.coffee.embedded.html */
</script>

<script lang="livescript">
/*^^^^^^^^^^^^^^^^^^^^^^^^ meta.template.svelte meta.tag.script.begin.html */
/*^^^^^ entity.name.tag.script.html */
/*      ^^^^^^^^^^^^^^^^^ meta.attribute-with-value.lang.html */
/*      ^^^^ entity.other.attribute-name.html */
/*          ^ punctuation.separator.key-value.html */
/*           ^^^^^^^^^^^^ meta.string.html string.quoted.double.html */
/*           ^ punctuation.definition.string.begin.html */
/*                      ^ punctuation.definition.string.end.html */
/*                       ^ punctuation.definition.tag.end.html */

/* <- source.livescript.embedded.html */
</script>

###[ STYLES ]##################################################################

<style>
    :global(body) {
        /* this will apply to <body> */
        margin: 0;
    }

    div :global(strong) {
        /* this will apply to all <strong> elements, in any
             component, that are inside <div> elements belonging
             to this component */
        color: goldenrod;
    }

    p:global(.red) {
        /* this will apply to all <p> elements belonging to this
             component with a class of red, even if class="red" does
             not initially appear in the markup, and is instead
             added at runtime. This is useful when the class
             of the element is dynamically applied, for instance
             when updating the element's classList property directly. */
    }
</style>

<style lang="less">
/* <- meta.template.svelte meta.tag.style.begin.html punctuation.definition.tag.begin.html */
/* ^^^^^^^^^^^^^^^^ meta.template.svelte meta.tag.style.begin.html */
    .mixin(@color, @padding: 2) {
/*  ^^^^^^ meta.selector.css entity.other.attribute-name.class.css */
/*        ^^^^^^^^^^^^^^^^^^^^^ meta.selector.parameters.css meta.group.less */
        color-2: @color;
/*     ^^^^^^^^^^^^^^^^^^ source.less.embedded.html meta.property-list.css meta.block.css */
/*      ^^^^^^^ meta.property-name.css support.type.property-name.css */
/*             ^ punctuation.separator.key-value.css */
/*               ^^^^^^ meta.property-value.css variable.other.less */
/*                     ^ punctuation.terminator.rule.css */
    }
/* ^^ source.less.embedded.html meta.property-list.css meta.block.css */
/*  ^ punctuation.section.block.end.css */
</style>
/* <- meta.tag.style.end punctuation.definition.tag.begin.html */

<style lang="scss">
    @mixin prefix($property, $value, $prefixes) {
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ source.scss.embedded.html meta.at-rule.mixin.scss */
      @each $prefix in $prefixes {
        -#{$prefix}-#{$property}: $value;
/*      ^^^^^^^^^^^^^^^^^^^^^^^^ meta.property-name.css support.type.property-name.css */
/*                               ^^^^^^^ meta.property-value.css */
/*      ^ - meta.interpolation */
/*       ^^^^^^^^^^ meta.interpolation.scss */
/*                 ^ - meta.interpolation */
/*                  ^^^^^^^^^^^^ meta.interpolation.scss */
/*                              ^ - meta.interpolation */
/*       ^ punctuation.definition.variable.scss */
/*        ^ punctuation.section.interpolation.begin.scss */
/*         ^^^^^^^ variable.other.scss */
/*                ^ punctuation.section.interpolation.end.scss */
/*                  ^ punctuation.definition.variable.scss */
/*                   ^ punctuation.section.interpolation.begin.scss */
/*                    ^^^^^^^^^ variable.other.scss */
/*                             ^ punctuation.section.interpolation.end.scss */
/*                              ^ punctuation.separator.key-value.css */
/*                                ^^^^^^ variable.other.scss */
/*                                      ^ punctuation.terminator.rule.css */
      }
      #{$property}: $value;
/*    ^^^^^^^^^^^^ meta.property-name.css support.type.property-name.css meta.interpolation.scss */
/*                ^ - meta.property-name - meta.interpolation */
/*    ^ punctuation.definition.variable.scss */
/*     ^ punctuation.section.interpolation.begin.scss */
/*      ^^^^^^^^^ variable.other.scss */
/*               ^ punctuation.section.interpolation.end.scss */
    }
/* ^^ source.scss.embedded.html meta.at-rule.mixin.scss meta.property-list.css meta.block.css */
</style>

<style lang="stylus">
/*^^^^^^^^^^^^^^^^^^^ meta.template.svelte meta.tag.style.begin.html */
/*^^^^ entity.name.tag.style.html */
/*     ^^^^^^^^^^^^^ meta.attribute-with-value.lang.html */
/*     ^^^^ entity.other.attribute-name.html */
/*         ^ punctuation.separator.key-value.html */
/*          ^^^^^^^^ meta.string.html string.quoted.double.html */
/*          ^ punctuation.definition.string.begin.html */
/*                 ^ punctuation.definition.string.end.html */
/*                  ^ punctuation.definition.tag.end.html */

/* <- source.stylus.embedded.html */
</style>

###[ ATTRIBUTES ]##############################################################

<a href="page/{p}">page {p}</a>
/*      ^^^^^^^^^^ meta.attribute-with-value.href.html meta.string.html
/*            ^^^ meta.embedded.block.svelte - string

<form on:submit|preventDefault={handleSubmit}></form>
/*    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.attribute-with-value.html
/*    ^^ support.function.svelte
/*      ^ punctuation.separator.svelte
/*       ^^^^^^ string.unquoted.svelte
/*             ^ punctuation.separator.svelte
/*              ^^^^^^^^^^^^^^ support.constant.svelte
/*                            ^ punctuation.separator.key-value.html
/*                             ^^^^^^^^^^^^^^ meta.string.html meta.embedded.block.svelte - string
/*                             ^ punctuation.section.embedded.begin.svelte
/*                              ^^^^^^^^^^^^ variable.other.readwrite.js
/*                                          ^ punctuation.section.embedded.end.svelte
/*                                           ^ punctuation.definition.tag.end.html

<form on:click|once|capture={...}></form>
/*    ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.attribute-with-value.html
/*    ^^ support.function.svelte
/*      ^ punctuation.separator.svelte
/*       ^^^^^ string.unquoted.svelte
/*            ^ punctuation.separator.svelte
/*             ^^^^ support.constant.svelte
/*                 ^ punctuation.separator.svelte
/*                  ^^^^^^^ support.constant.svelte
/*                         ^ punctuation.separator.key-value.html
/*                          ^^^^^ meta.string.html meta.embedded.block.svelte

<Slider --rail-color="black" --track-color="rgb(0, 0, 255)" />
/*      ^^^^^^^^^^^^^^^^^^^^ meta.attribute-with-value.style.html
/*      ^^^^^^^^^^^^ entity.other.custom-property.css
/*                  ^ punctuation.separator.key-value.html
/*                   ^ meta.string.html string.quoted.double.html punctuation.definition.string.begin.html
/*                    ^^^^^ meta.string.html meta.interpolation.html source.css.embedded.html meta.property-value.css support.constant.color.w3c.standard.css
/*                         ^ meta.string.html string.quoted.double.html punctuation.definition.string.end.html
/*                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.attribute-with-value.style.html
/*                           ^^^^^^^^^^^^^ entity.other.custom-property.css
/*                                        ^ punctuation.separator.key-value.html
/*                                         ^ meta.string.html string.quoted.double.html punctuation.definition.string.begin.html
/*                                          ^^^ meta.string.html meta.interpolation.html source.css.embedded.html meta.property-value.css meta.function-call.identifier.css support.function.color.css
/*                                             ^^^^^^^^^^^ meta.string.html meta.interpolation.html source.css.embedded.html meta.property-value.css meta.function-call.arguments.css meta.group.css
/*                                                        ^ meta.string.html string.quoted.double.html punctuation.definition.string.end.html

<CopyButton style='flex px-4 {dynamicClasses}' />
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.template.svelte meta.tag.component.html */
/*^^^^^^^^^ entity.name.tag.component.svelte */
/*          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.attribute-with-value.html */
/*          ^^^^^ entity.other.attribute-name.html */
/*               ^ punctuation.separator.key-value.html */
/*                ^^^^^^^^^^^ meta.string.html string.quoted.single.html */
/*                ^ punctuation.definition.string.begin.html */
/*                           ^^^^^^^^^^^^^^^^ meta.string.html meta.embedded.block.svelte */
/*                           ^ punctuation.section.embedded.begin.svelte */
/*                            ^^^^^^^^^^^^^^ source.js.embedded.svelte variable.other.readwrite.js */
/*                                          ^ punctuation.section.embedded.end.svelte */
/*                                           ^ string.quoted.single.html punctuation.definition.string.end.html */
/*                                             ^^ punctuation.definition.tag.end.html */

<button style="-moz-{prop['name']}: '{color["key"]}'"></button>
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag */
/*      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.attribute-with-value.style.html */
/*            ^ meta.string.html string.quoted.double.html punctuation.definition.string.begin.html */
/*             ^^^^^ meta.string.html meta.interpolation.html source.css.embedded.html - meta.embedded.block.svelte */
/*                  ^^^^^^^^^^^^^^ meta.string.html meta.interpolation.html source.css.embedded.html meta.embedded.block.svelte */
/*                  ^ punctuation.section.embedded.begin.svelte */
/*                   ^^^^^^^^^^^^ source.js.embedded.svelte */
/*                               ^ punctuation.section.embedded.end.svelte */
/*                                ^^^ meta.string.html meta.interpolation.html source.css.embedded.html - meta.embedded.block.svelte */
/*                                   ^^^^^^^^^^^^^^ meta.string.html meta.interpolation.html source.css.embedded.html meta.embedded.block.svelte */
/*                                                 ^ meta.string.html meta.interpolation.html source.css.embedded.html - meta.embedded.block.svelte */
/*                                                  ^ meta.string.html string.quoted.double.html punctuation.definition.string.end.html */
/*                                                   ^ punctuation.definition.tag.end.html */


###[ COMPONENTS ]##############################################################

    <MyComponent {...}/>
/*  ^^^^^^^^^^^^^^^^^^^^ meta.tag.component.html
/*  ^ punctuation.definition.tag.begin.html
/*   ^^^^^^^^^^^ entity.name.tag.component.svelte
/*               ^^^^^ meta.embedded.block.svelte
/*                    ^^ punctuation.definition.tag.end.html

    <Namespace.Component />
/*  ^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.component.html
/*  ^ punctuation.definition.tag.begin.html
/*   ^^^^^^^^^^^^^^^^^^^ entity.name.tag.component.svelte
/*            ^ punctuation.accessor.svelte
/*                       ^^ punctuation.definition.tag.end.html

    <namespace:component />
/*  ^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.component.html
/*  ^ punctuation.definition.tag.begin.html
/*   ^^^^^^^^^^^^^^^^^^^ entity.name.tag.component.svelte
/*            ^ punctuation.accessor.svelte
/*                       ^^ punctuation.definition.tag.end.html

###[ IF STATEMENTS ]###########################################################

    {#if porridge.temperature > 100}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^ keyword.control.conditional.if.svelte
/*       ^^^^^^^^^^^^^^^^^^^^^^^^^^ source.js.embedded.svelte
/*                                 ^ punctuation.section.embedded.end.svelte

    {:else if 80 > porridge.temperature}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^^^ keyword.control.conditional.elseif.svelte
/*            ^^^^^^^^^^^^^^^^^^^^^^^^^ source.js.embedded.svelte
/*                                     ^ punctuation.section.embedded.end.svelte

    {:else}
/*  ^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.conditional.else.svelte
/*        ^ punctuation.section.embedded.end.svelte

    {/if}
/*  ^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^ keyword.control.conditional.end.svelte
/*      ^ punctuation.section.embedded.end.svelte
}

###[ EACH STATEMENTS ]#########################################################

    {#each expression as name}...{/each}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^ variable.other.readwrite.js
/*                    ^^ keyword.operator.assignment.as.svelte
/*                       ^^^^ variable.other.readwrite.js
/*                           ^ punctuation.section.embedded.end.svelte
/*                               ^^^^^^^ meta.embedded.block.svelte
/*                               ^ punctuation.section.embedded.begin.svelte
/*                                ^^^^^ keyword.control.loop.end.svelte
/*                                     ^ punctuation.section.embedded.end.svelte

    {#each expression as name, index}...{/each}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^ variable.other.readwrite.js
/*                    ^^ keyword.operator.assignment.as.svelte
/*                       ^^^^ variable.other.readwrite.js
/*                           ^ punctuation.separator.comma.svelte
/*                             ^^^^^ variable.other.readwrite.js
/*                                  ^ punctuation.section.embedded.end.svelte
/*                                      ^^^^^^^ meta.embedded.block.svelte
/*                                      ^ punctuation.section.embedded.begin.svelte
/*                                       ^^^^^ keyword.control.loop.end.svelte
/*                                            ^ punctuation.section.embedded.end.svelte

    {#each expression as name (key)}...{/each}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^ variable.other.readwrite.js
/*                    ^^ keyword.operator.assignment.as.svelte
/*                       ^^^^^^^^^^ - meta.function-call
/*                       ^^^^ variable.other.readwrite.js
/*                            ^ punctuation.section.group.begin.js
/*                             ^^^ variable.other.readwrite.js
/*                                ^ punctuation.section.group.end.js
/*                                 ^ punctuation.section.embedded.end.svelte
/*                                     ^^^^^^^ meta.embedded.block.svelte
/*                                     ^ punctuation.section.embedded.begin.svelte
/*                                      ^^^^^ keyword.control.loop.end.svelte
/*                                           ^ punctuation.section.embedded.end.svelte

    {#each expression as name, index (key)}...{/each}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^ variable.other.readwrite.js
/*                    ^^ keyword.operator.assignment.as.svelte
/*                       ^^^^ variable.other.readwrite.js
/*                           ^ punctuation.separator.comma.svelte
/*                             ^^^^^^^^^^^ - meta.function-call
/*                             ^^^^^ variable.other.readwrite.js
/*                                   ^ punctuation.section.group.begin.js
/*                                    ^^^ variable.other.readwrite.js
/*                                       ^ punctuation.section.group.end.js
/*                                        ^ punctuation.section.embedded.end.svelte
/*                                            ^^^^^^^ meta.embedded.block.svelte
/*                                            ^ punctuation.section.embedded.begin.svelte
/*                                             ^^^^^ keyword.control.loop.end.svelte
/*                                                  ^ punctuation.section.embedded.end.svelte

    {#each expression as name}...{:else}...{/each}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^ variable.other.readwrite.js
/*                    ^^ keyword.operator.assignment.as.svelte
/*                       ^^^^ variable.other.readwrite.js
/*                           ^ punctuation.section.embedded.end.svelte
/*                               ^^^^^^^ meta.embedded.block.svelte
/*                               ^ punctuation.section.embedded.begin.svelte
/*                                ^^^^^ keyword.control.conditional.else.svelte
/*                                     ^ punctuation.section.embedded.end.svelte
/*                                         ^^^^^^^ meta.embedded.block.svelte
/*                                         ^ punctuation.section.embedded.begin.svelte
/*                                          ^^^^^ keyword.control.loop.end.svelte
/*                                               ^ punctuation.section.embedded.end.svelte

    {#each items as [ id, name, qty ], i (id)}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*                                            ^ - meta.embedded
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^ variable.other.readwrite.js
/*               ^^ keyword.operator.assignment.as.svelte
/*                  ^^^^^^^^^^^^^^^^^ meta.sequence.js
/*                  ^ punctuation.section.sequence.begin.js
/*                    ^^ variable.other.readwrite.js
/*                      ^ punctuation.separator.comma.js
/*                        ^^^^ variable.other.readwrite.js
/*                            ^ punctuation.separator.comma.js
/*                              ^^^ variable.other.readwrite.js
/*                                  ^ punctuation.section.sequence.end.js
/*                                   ^ punctuation.separator.comma.svelte
/*                                     ^ variable.other.readwrite.js
/*                                       ^^^^ meta.group.js
/*                                       ^ punctuation.section.group.begin.js
/*                                        ^^ variable.other.readwrite.js
/*                                          ^ punctuation.section.group.end.js
/*                                           ^ punctuation.section.embedded.end.svelte

    {#each items as { id, name, qty }, i (id)}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*                                            ^ - meta.embedded
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^ variable.other.readwrite.js
/*               ^^ keyword.operator.assignment.as.svelte
/*                  ^^^^^^^^^^^^^^^^^ meta.mapping.js
/*                  ^ punctuation.section.mapping.begin.js
/*                    ^^ variable.other.readwrite.js
/*                      ^ punctuation.separator.comma.js
/*                        ^^^^ variable.other.readwrite.js
/*                            ^ punctuation.separator.comma.js
/*                              ^^^ variable.other.readwrite.js
/*                                  ^ punctuation.section.mapping.end.js
/*                                   ^ punctuation.separator.comma.svelte
/*                                     ^ variable.other.readwrite.js
/*                                       ^^^^ meta.group.js
/*                                       ^ punctuation.section.group.begin.js
/*                                        ^^ variable.other.readwrite.js
/*                                          ^ punctuation.section.group.end.js
/*                                           ^ punctuation.section.embedded.end.svelte
        <li>{i + 1}: {name} x {qty}</li>
/*      ^^^^ meta.tag
/*          ^^^^^^^ meta.embedded.block.svelte
/*          ^ punctuation.section.embedded.begin.svelte
/*           ^ variable.other.readwrite.js
/*             ^ keyword.operator.arithmetic.js
/*               ^ constant.numeric.value.js
/*                ^ punctuation.section.embedded.end.svelte

    {#each objects as { id, ...rest }}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
        <li><span>{id}</span><MyComponent {...rest} /></li>
/*      ^^^^^^^^^^ meta.tag
/*                ^^^^ meta.embedded.block.svelte
/*                    ^^^^^^^ meta.tag
/*                           ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.component
/*                           ^ punctuation.definition.tag.begin.html
/*                            ^^^^^^^^^^^ entity.name.tag.component.svelte
/*                                        ^^^^^^^^^ meta.embedded.block.svelte
/*                                        ^ punctuation.section.embedded.begin.svelte
/*                                         ^^^ keyword.operator.spread.js
/*                                            ^^^^ variable.other.readwrite.js
/*                                                ^ punctuation.section.embedded.end.svelte
/*                                                    ^^^^^ meta.tag

    {#each items as [id, ...rest]}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
        <li><span>{id}</span><MyComponent values={rest} /></li>
/*      ^^^^^^^^^^ meta.tag
/*                ^^^^ meta.embedded.block.svelte
/*                    ^^^^^^^ meta.tag
/*                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.component
/*                           ^ punctuation.definition.tag.begin.html
/*                            ^^^^^^^^^^^ entity.name.tag.component.svelte
/*                                        ^^^^^^ entity.other.attribute-name.html
/*                                              ^ punctuation.separator.key-value.html
/*                                               ^^^^^^ meta.embedded.block.svelte
/*                                               ^ punctuation.section.embedded.begin.svelte
/*                                                ^^^^ variable.other.readwrite.js
/*                                                    ^ punctuation.section.embedded.end.svelte
/*                                                      ^^ punctuation.definition.tag.end.html
/*                                                        ^^^^^ meta.tag


###[ AWAIT STATEMENTS ]########################################################

    {#await expression}...{:then name}...{:catch name}...{/await}
/*  ^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^ keyword.control.await.svelte
/*          ^^^^^^^^^^ variable.other.readwrite.js
/*                    ^ punctuation.section.embedded.end.svelte
/*                        ^^^^^^^^^^^^ meta.embedded.block.svelte
/*                        ^ punctuation.section.embedded.begin.svelte
/*                         ^^^^^ keyword.control.flow.svelte
/*                               ^^^^ variable.other.readwrite.js
/*                                   ^ punctuation.section.embedded.end.svelte
/*                                       ^^^^^^^^^^^^^ meta.embedded.block.svelte
/*                                       ^ punctuation.section.embedded.begin.svelte
/*                                        ^^^^^^ keyword.control.flow.svelte
/*                                               ^^^^ variable.other.readwrite.js
/*                                                   ^ punctuation.section.embedded.end.svelte
/*                                                       ^^^^^^^^ meta.embedded.block.svelte
/*                                                       ^ punctuation.section.embedded.begin.svelte
/*                                                        ^^^^^^ keyword.control.await.end.svelte
/*                                                              ^ punctuation.section.embedded.end.svelte

    {#await expression then name}...{/await}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^ keyword.control.await.svelte
/*          ^^^^^^^^^^ variable.other.readwrite.js
/*                     ^^^^ keyword.control.flow.svelte
/*                          ^^^^ variable.other.readwrite.js
/*                              ^ punctuation.section.embedded.end.svelte
/*                                  ^^^^^^^^ meta.embedded.block.svelte
/*                                  ^ punctuation.section.embedded.begin.svelte
/*                                   ^^^^^^ keyword.control.await.end.svelte
/*                                         ^ punctuation.section.embedded.end.svelte

    {#await expression catch name}...{/await}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^ keyword.control.await.svelte
/*          ^^^^^^^^^^ variable.other.readwrite.js
/*                     ^^^^^ keyword.control.flow.svelte
/*                           ^^^^ variable.other.readwrite.js
/*                               ^ punctuation.section.embedded.end.svelte
/*                                   ^^^^^^^^ meta.embedded.block.svelte
/*                                   ^ punctuation.section.embedded.begin.svelte
/*                                    ^^^^^^ keyword.control.await.end.svelte
/*                                          ^ punctuation.section.embedded.end.svelte

###[ KEY STATEMENTS ]##########################################################

    {#key value}<div transition:fade>{value}</div>{/key}
/*  ^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^ keyword.other.svelte
/*        ^^^^^ variable.other.readwrite.js
/*             ^ punctuation.section.embedded.end.svelte
/*              ^^^^^^^^^^^^^^^^^^^^^ meta.tag
/*                                   ^^^^^^^ meta.embedded.block.svelte
/*                                          ^^^^^^ meta.tag
/*                                                ^^^^^^ meta.embedded.block.svelte
/*                                                ^ punctuation.section.embedded.begin.svelte
/*                                                 ^^^^ keyword.other.svelte
/*                                                     ^ punctuation.section.embedded.end.svelte

###[ SPECIAL STATEMENTS ]######################################################

    {@const area = box.width * box.height}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^ support.function.svelte
/*          ^^^^ variable.other.readwrite.js
/*               ^ keyword.operator.assignment.js
/*                                       ^ punctuation.section.embedded.end.svelte

    {@debug expression}
/*  ^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^ support.function.svelte
/*          ^^^^^^^^^^ variable.other.readwrite.js
/*                    ^ punctuation.section.embedded.end.svelte

    {@html "<div>"}content{@html "</div>"}
/*  ^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ support.function.svelte
/*         ^^^^^^^ meta.string.js string.quoted.double.js
/*                ^ punctuation.section.embedded.end.svelte
/*                        ^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*                        ^ punctuation.section.embedded.begin.svelte
/*                         ^^^^^ support.function.svelte
/*                               ^^^^^^^^ meta.string.js string.quoted.double.js
/*                                       ^ punctuation.section.embedded.end.svelte

###[ SPECIAL VARIABLES ]#######################################################

    { $$slots $$restProps $$props }
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*    ^^^^^^^ variable.language.dollar.js
/*            ^^^^^^^^^^^ variable.language.dollar.js
/*                        ^^^^^^^ variable.language.dollar.js

    { "$$slots" "$$restProps" "$$props" }
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*    ^ meta.string.js string.quoted.double.js punctuation.definition.string.begin.js
/*     ^^^^^^^ meta.string.js string.quoted.double.js - variable
/*            ^ meta.string.js string.quoted.double.js punctuation.definition.string.end.js
/*              ^ meta.string.js string.quoted.double.js punctuation.definition.string.begin.js
/*               ^^^^^^^^^^^ meta.string.js string.quoted.double.js - variable
/*                          ^ meta.string.js string.quoted.double.js punctuation.definition.string.end.js
/*                            ^ meta.string.js string.quoted.double.js punctuation.definition.string.begin.js
/*                             ^^^^^^^ meta.string.js string.quoted.double.js - variable
/*                                    ^ meta.string.js string.quoted.double.js punctuation.definition.string.end.js

###[ INTERPOLATED STYLE ATTRIBUTES ]###########################################

<div style="{obj}"></div>
/*     ^ meta.attribute-with-value.style.html */
/*             ^ meta.embedded.block.svelte source.js.embedded.svelte variable.other.readwrite.js */

<div style="width: {fn({a: 1})}px"></div>
/*                  ^ meta.embedded.block.svelte source.js.embedded.svelte meta.function-call.js */
/*                      ^ meta.mapping.js meta.mapping.key.js */
/*                           ^ meta.embedded.block.svelte source.js.embedded.svelte */
/*                            ^ punctuation.section.embedded.end.svelte */

<div style="color: {ok ? 'red' : 'blue'}"></div>
/*                  ^ meta.embedded.block.svelte source.js.embedded.svelte variable.other.readwrite.js */
/*                          ^ string.quoted.single.js */

<div style='color: {ok ? "red" : "blue"}'></div>
/*                  ^ meta.embedded.block.svelte source.js.embedded.svelte variable.other.readwrite.js */
/*                          ^ string.quoted.double.js */

<div style="background: url({src})"></div>
/*                             ^ meta.embedded.block.svelte source.js.embedded.svelte variable.other.readwrite.js */

<div style="content: '\'x\''"></div>
/*                       ^ string.quoted.single.css */

<div style='content: "\"x\""'></div>
/*                       ^ string.quoted.double.css */

<div style="/* c */ color: red"></div>
/*            ^ comment.block.css */
/*                    ^ support.type.property-name.css */

<div style="--x: {v}; color: var(--x)"></div>
/*            ^ entity.other.custom-property.css */
/*                ^ meta.embedded.block.svelte source.js.embedded.svelte */
/*                            ^ support.function.var.css */

<div style="color: red !important; width: {w}px;"></div>
/*                        ^ keyword.other.important.css */
/*                                         ^ meta.embedded.block.svelte source.js.embedded.svelte */
/*                                             ^ punctuation.terminator.rule.css */

<div style="color: {color};
width: {width}px"></div>
/* <- meta.string.html meta.interpolation.html source.css.embedded.html */
/*        ^ meta.embedded.block.svelte source.js.embedded.svelte */
<p>{sentinel}</p>
/* <- meta.template.svelte meta.tag */
/*    ^ meta.embedded.block.svelte source.js.embedded.svelte */

<div style:color={c}></div>
/*     ^ support.function.svelte */
/*        ^ punctuation.separator.svelte */
/*                ^ meta.embedded.block.svelte source.js.embedded.svelte */

###[ COMPONENT STRING ATTRIBUTES ]#############################################

<Comp style="anything {x} here" />
/*      ^ entity.other.attribute-name.html */
/*             ^ meta.string.html - source.css.embedded.html */
/*                     ^ meta.embedded.block.svelte source.js.embedded.svelte */

<Comp onclick="not js" />
/*      ^ entity.other.attribute-name.html - entity.other.attribute-name.event */
/*               ^ meta.string.html - source.js.embedded.html */

<div onclick="alert('ok')"></div>
/*     ^ entity.other.attribute-name.event.html - entity.other.attribute-name.event.svelte */
/*              ^ source.js.embedded.html */

###[ LANG / TYPE ATTRIBUTE DECIDERS ]##########################################

<script lang=ts>
let typed: number = 1;
/* <- source.ts.embedded.html */
</script>
/* <- meta.tag.script.end.html punctuation.definition.tag.begin.html */

<script LANG="TS">
let typed: number = 1;
/* <- source.ts.embedded.html */
</script>
/* <- meta.tag.script.end.html punctuation.definition.tag.begin.html */

<script lang="">
const emptyLang = true;
/* <- source.js.embedded.html */
</script>
/* <- meta.tag.script.end.html punctuation.definition.tag.begin.html */

<script lang="rust">
const unknownLang = true;
/* <- source.js.embedded.html */
</script>
/* <- meta.tag.script.end.html punctuation.definition.tag.begin.html */

<script type=text/typescript>
let typed: number = 1;
/* <- source.ts.embedded.html */
</script>
/* <- meta.tag.script.end.html punctuation.definition.tag.begin.html */

<style lang="unknown">
a { color: red; }
/* <- source.css.embedded.html */
</style>
/* <- meta.tag.style.end.html punctuation.definition.tag.begin.html */

<style language="scss">
$color: red;
/* <- source.scss.embedded.html */
</style>
/* <- meta.tag.style.end.html punctuation.definition.tag.begin.html */

###[ GENERICS ATTRIBUTE ]######################################################

<script lang="ts" generics="Item extends { text: string }, Extra = string">
/*                ^^^^^^^^ meta.attribute-with-value.generics.svelte entity.other.attribute-name.html
/*                        ^ punctuation.separator.key-value.html
/*                         ^ meta.string.html punctuation.definition.string.begin.html
/*                          ^^^^ source.ts.embedded.html variable.parameter.type.js
/*                               ^^^^^^^ storage.modifier.extends.js
/*                                       ^ punctuation.section.mapping.begin.js
/*                                         ^^^^ variable.other.readwrite.js
/*                                             ^ punctuation.separator.type.js
/*                                               ^^^^^^ support.type.primitive.string.js
/*                                                      ^ punctuation.section.mapping.end.js
/*                                                       ^ punctuation.separator.comma.js
/*                                                         ^^^^^ variable.parameter.type.js
/*                                                               ^ keyword.operator.assignment.js
/*                                                                 ^^^^^^ support.type.primitive.string.js
/*                                                                       ^ punctuation.definition.string.end.html - source.ts
/*                                                                        ^ punctuation.definition.tag.end.html
    let first: Item;
/* <- source.ts.embedded.html
</script>

<script generics="T" lang="ts">
/*      ^^^^^^^^ meta.attribute-with-value.generics.svelte entity.other.attribute-name.html
/*                ^ variable.parameter.type.js
/*                 ^ punctuation.definition.string.end.html
/*                   ^^^^ entity.other.attribute-name.html
let generic: T;
/* <- source.ts.embedded.html
</script>

<script lang="ts" generics='K extends string = "id"'>
/*                          ^ variable.parameter.type.js
/*                            ^^^^^^^ storage.modifier.extends.js
/*                                    ^^^^^^ support.type.primitive.string.js
/*                                           ^ keyword.operator.assignment.js
/*                                             ^^^^ meta.string.js string.quoted.double.js
/*                                                 ^ punctuation.definition.string.end.html - source.ts
/*                                                  ^ punctuation.definition.tag.end.html
let key: K;
/* <- source.ts.embedded.html
</script>

<script lang="ts" generics="const T extends readonly string[]">
/*                          ^^^^^ storage.modifier.const.js
/*                                ^ variable.parameter.type.js
/*                                  ^^^^^^^ storage.modifier.extends.js
/*                                          ^^^^^^^^ storage.modifier
/*                                                   ^^^^^^ support.type.primitive.string.js
/*                                                           ^ punctuation.definition.string.end.html - source.ts
let c: T;
/* <- source.ts.embedded.html
</script>
###[ TYPESCRIPT EXPRESSIONS ]##################################################

    {value as string}
/*  ^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*   ^^^^^ source.js.embedded.svelte variable.other.readwrite.js
/*         ^^ keyword.operator.type.js
/*            ^^^^^^ support.type.primitive.string.js
/*                  ^ punctuation.section.embedded.end.svelte

    {value as string}<em>contained</em>
/*                   ^^^^ meta.tag - meta.embedded.block.svelte

    {(e: Event) => handler(e)}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*   ^ punctuation.section.group.begin.js
/*    ^ variable.parameter.function.js
/*     ^ punctuation.separator.type.js
/*       ^^^^^ support.class.js
/*            ^ punctuation.section.group.end.js
/*              ^^ keyword.declaration.function.arrow.js
/*                 ^^^^^^^ variable.function.js
/*                         ^ variable.other.readwrite.js
/*                           ^ punctuation.section.embedded.end.svelte

    {fn<Result>(value)}
/*   ^^ variable.function.js
/*     ^ punctuation.definition.generic.begin.js
/*      ^^^^^^ support.class.js
/*            ^ punctuation.definition.generic.end.js
/*             ^ punctuation.section.group.begin.js
/*              ^^^^^ variable.other.readwrite.js
/*                   ^ punctuation.section.group.end.js

    {#each (items as Item[]) as item, index (item.id)}<span>{item}</span>{/each}
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^ punctuation.section.group.begin.js
/*          ^^^^^ variable.other.readwrite.js
/*                ^^ keyword.operator.type.js
/*                   ^^^^ support.class.js
/*                       ^^ meta.type.js
/*                         ^ punctuation.section.group.end.js
/*                           ^^ keyword.operator.assignment.as.svelte
/*                              ^^^^ variable.other.readwrite.js
/*                                  ^ punctuation.separator.comma.svelte
/*                                    ^^^^^ variable.other.readwrite.js
/*                                          ^ punctuation.section.group.begin.js
/*                                           ^^^^ variable.other.readwrite.js
/*                                               ^ punctuation.accessor.js
/*                                                   ^ punctuation.section.embedded.end.svelte

    {#each items as Item[] as item}<span>{item}</span>{/each}
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^ variable.other.readwrite.js
/*               ^^ keyword.operator.type.js
/*                  ^^^^ support.class.js
/*                      ^^ meta.type.js
/*                         ^^ keyword.operator.assignment.as.svelte
/*                            ^^^^ variable.other.readwrite.js
/*                                ^ punctuation.section.embedded.end.svelte

###[ RENDER TAGS ]#############################################################

    {@render row(item)}
/*  ^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^^ support.function.svelte
/*           ^^^ variable.function.js
/*              ^ punctuation.section.group.begin.js
/*               ^^^^ variable.other.readwrite.js
/*                   ^ punctuation.section.group.end.js
/*                    ^ punctuation.section.embedded.end.svelte

    {@render maybe?.()}
/*   ^^^^^^^ support.function.svelte
/*           ^^^^^ variable.function.js
/*                ^^ punctuation.accessor
/*                    ^ punctuation.section.embedded.end.svelte

###[ ATTACHMENTS ]#############################################################

<div {@attach tooltip(content)}></div>
/*   ^ punctuation.section.embedded.begin.svelte
/*    ^^^^^^^ support.function.svelte
/*            ^^^^^^^ variable.function.js
/*                    ^^^^^^^ variable.other.readwrite.js
/*                            ^ punctuation.section.embedded.end.svelte

<Comp {@attach fn} />
/*     ^^^^^^^ support.function.svelte
/*             ^^ variable.other.readwrite.js
/*               ^ punctuation.section.embedded.end.svelte

###[ DECLARATION TAGS ]########################################################

    {let sum = a + b}
/*  ^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*   ^^^ keyword.declaration.js
/*       ^^^ meta.binding.name.js variable.other.readwrite.js
/*           ^ keyword.operator.assignment.js
/*             ^ variable.other.readwrite.js
/*               ^ keyword.operator.arithmetic.js
/*                  ^ punctuation.section.embedded.end.svelte

    {const {width, height} = box}
/*   ^^^^^ keyword.declaration.js
/*         ^ punctuation.section.mapping.begin.js
/*          ^^^^^ variable.other.readwrite.js
/*               ^ punctuation.separator.comma.js
/*                 ^^^^^^ variable.other.readwrite.js
/*                       ^ punctuation.section.mapping.end.js
/*                         ^ keyword.operator.assignment.js
/*                           ^^^ variable.other.readwrite.js
/*                              ^ punctuation.section.embedded.end.svelte

    {const area: number = width * height}
/*   ^^^^^ keyword.declaration.js
/*         ^^^^ meta.binding.name.js variable.other.readwrite.js
/*             ^ punctuation.separator.type.js
/*               ^^^^^^ support.type.primitive.number.js
/*                      ^ keyword.operator.assignment.js
/*                                      ^ punctuation.section.embedded.end.svelte

    {@const {a, b} = obj}
/*   ^^^^^^ support.function.svelte
/*          ^ punctuation.section.mapping.begin.js
/*           ^ variable.other.readwrite.js
/*                 ^ keyword.operator.assignment.js
/*                   ^^^ variable.other.readwrite.js
/*                      ^ punctuation.section.embedded.end.svelte

###[ SNIPPETS ]################################################################

    {#snippet figure(image)}
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^^^ keyword.control.snippet.begin.svelte
/*            ^^^^^^ entity.name.function.svelte
/*                  ^ punctuation.section.group.begin.js
/*                   ^^^^^ meta.function.parameters.js variable.parameter.function.js
/*                        ^ punctuation.section.group.end.js
/*                         ^ punctuation.section.embedded.end.svelte
        <figure>{@render nested()}</figure>
/*      ^^^^^^^^ meta.tag
/*               ^^^^^^^ support.function.svelte
    {/snippet}
/*  ^ punctuation.section.embedded.begin.svelte
/*   ^^^^^^^^ keyword.control.snippet.end.svelte
/*           ^ punctuation.section.embedded.end.svelte

    {#snippet row(item: Item, index: number = 0)}
/*            ^^^ entity.name.function.svelte
/*                ^^^^ variable.parameter.function.js
/*                    ^ punctuation.separator.type.js
/*                      ^^^^ support.class.js
/*                          ^ punctuation.separator.parameter.function.js
/*                            ^^^^^ variable.parameter.function.js
/*                                 ^ punctuation.separator.type.js
/*                                   ^^^^^^ support.type.primitive.number.js
/*                                          ^ keyword.operator.assignment.js
/*                                            ^ constant.numeric
/*                                             ^ punctuation.section.group.end.js
/*                                              ^ punctuation.section.embedded.end.svelte
    {/snippet}

    {#snippet $row(item)}
/*            ^^^^ entity.name.function.svelte
/*                ^ punctuation.section.group.begin.js
/*                 ^^^^ variable.parameter.function.js
/*                     ^ punctuation.section.group.end.js
    {/snippet}

    {#snippet pair<T>(a: T, b: T)}
/*            ^^^^ entity.name.function.svelte
/*                ^ punctuation.definition.generic.begin.js
/*                 ^ variable.parameter
/*                  ^ punctuation.definition.generic.end.js
/*                   ^ punctuation.section.group.begin.js
/*                    ^ variable.parameter.function.js
/*                     ^ punctuation.separator.type.js
/*                       ^ support.class.js
/*                        ^ punctuation.separator.parameter.function.js
/*                          ^ variable.parameter.function.js
/*                              ^ punctuation.section.group.end.js
/*                               ^ punctuation.section.embedded.end.svelte
    {/snippet}

###[ IN-TAG COMMENTS ]#########################################################

<div
    // this is a comment!
/*  ^^ comment.line.double-slash.svelte punctuation.definition.comment.svelte */
/*  ^^^^^^^^^^^^^^^^^^^^^ comment.line.double-slash.svelte - entity - meta.attribute-with-value */
    data-foo="bar" /* block */ id="x"
/*  ^^^^^^^^ entity.other.attribute-name.html */
/*                 ^^ comment.block.svelte punctuation.definition.comment.begin.svelte */
/*                 ^^^^^^^^^^^ comment.block.svelte - entity */
/*                          ^^ comment.block.svelte punctuation.definition.comment.end.svelte */
/*                             ^^ entity.other.attribute-name.id.html */
>
/* <- meta.tag punctuation.definition.tag.end.html */
    foo bar
</div>

<Comp // trailing {notAnExpression}
/*    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.component.html comment.line.double-slash.svelte - meta.embedded */
    /* multi
       line */ value={x} />
/*  ^^^^^^^^^^ comment.block.svelte */
/*          ^^ comment.block.svelte punctuation.definition.comment.end.svelte */
/*             ^^^^^ entity.other.attribute-name.html */
/*                   ^^^ meta.embedded.block.svelte */
/*                       ^^ punctuation.definition.tag.end.html */

<Foo bar={x}//>
/*          ^^ meta.tag.component.html - comment
/*           ^^ punctuation.definition.tag.end.html
<a href=//not.a/comment>link</a>
/*                     ^ punctuation.definition.tag.end.html
/*                      ^^^^ - meta.tag - comment
/*      ^^^^^^^^^^^^^^^ meta.attribute-with-value.href.html meta.string.html - comment
<div data-x=//not-a/comment title=x></div>
/*          ^^^^^^^^^^^^^^ meta.attribute-with-value.html meta.string.html string.unquoted.html - comment
/*                          ^^^^^ entity.other.attribute-name.html

###[ MEMBER COMPONENTS ]#######################################################

    <Foo.Bar.Baz prop={x} />
/*  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.component.html
/*  ^ punctuation.definition.tag.begin.html - entity
/*   ^^^^^^^^^^^ entity.name.tag.component.svelte
/*      ^ punctuation.accessor.svelte
/*          ^ punctuation.accessor.svelte
/*               ^^^^ entity.other.attribute-name.html
/*                        ^^ punctuation.definition.tag.end.html
    <foo.bar.baz>{x}</foo.bar.baz>
/*  ^^^^^^^^^^^^^ meta.tag.component.html
/*   ^^^^^^^^^^^ entity.name.tag.component.svelte
/*      ^ punctuation.accessor.svelte
/*          ^ punctuation.accessor.svelte
/*               ^^^ meta.embedded.block.svelte - meta.tag
/*                  ^^^^^^^^^^^^^^ meta.tag.component.html
/*                  ^^ punctuation.definition.tag.begin.html
/*                    ^^^^^^^^^^^ entity.name.tag.component.svelte
/*                               ^ punctuation.definition.tag.end.html
    <Foo$ /><Foo.$bar.Baz />
/*   ^^^^ entity.name.tag.component.svelte
/*           ^^^^^^^^^^^^ entity.name.tag.component.svelte
/*              ^ punctuation.accessor.svelte
/*                   ^ punctuation.accessor.svelte
    <svelte:element this={tag} />
/*   ^^^^^^^^^^^^^^ entity.name.tag.component.svelte
/*         ^ punctuation.accessor.svelte
/*                  ^^^^ entity.other.attribute-name.html

###[ EVENT ATTRIBUTES ]########################################################

<button onclick={handler} onFoo={bar} oncustom-event={baz}>x</button>
/*      ^^^^^^^^^^^^^^^^^ meta.attribute-with-value.event.html
/*      ^^^^^^^ entity.other.attribute-name.event.svelte - entity.other.attribute-name.event.html
/*      ^^ support.function.svelte
/*        ^^^^^ string.unquoted.svelte
/*             ^ punctuation.separator.key-value.html
/*              ^^^^^^^^^ meta.string.html meta.embedded.block.svelte
/*               ^^^^^^^ variable.other.readwrite.js
/*                        ^^^^^ entity.other.attribute-name.event.svelte
/*                        ^^ support.function.svelte
/*                          ^^^ string.unquoted.svelte
/*                                    ^^^^^^^^^^^^^^ entity.other.attribute-name.event.svelte
/*                                      ^^^^^^^^^^^^ string.unquoted.svelte
/*                                                        ^ punctuation.definition.tag.end.html
<Comp onclick={fn} ontoggle={fn2} on:legacy={fn3} />
/*    ^^^^^^^ entity.other.attribute-name.event.svelte
/*    ^^ support.function.svelte
/*      ^^^^^ string.unquoted.svelte
/*                 ^^^^^^^^ entity.other.attribute-name.event.svelte
/*                                ^^^^^^^^^ entity.other.attribute-name.svelte - entity.other.attribute-name.event.svelte
/*                                ^^ support.function.svelte
/*                                  ^ punctuation.separator.svelte
/*                                   ^^^^^^ string.unquoted.svelte
<input bind:value={name} /><Comp bind:this={el} bind:count />
/*     ^^^^^^^^^^ entity.other.attribute-name.svelte
/*     ^^^^ support.function.svelte
/*         ^ punctuation.separator.svelte
/*          ^^^^^ string.unquoted.svelte
/*                ^^^^^^ meta.embedded.block.svelte
/*                               ^^^^^^^^^ entity.other.attribute-name.svelte
/*                                         ^^^^ meta.embedded.block.svelte
/*                                              ^^^^^^^^^^ entity.other.attribute-name.svelte
/*                                                   ^^^^^ string.unquoted.svelte
<svelte:window onkeydown={onKeyDown} />
/*             ^^^^^^^^^ entity.other.attribute-name.event.svelte
/*                        ^^^^^^^^^ variable.other.readwrite.js
<div ONCLICK={x} on={y} once={z} onclick="alert(1)"></div>
/*   ^^^^^^^ entity.other.attribute-name.event.html - entity.other.attribute-name.event.svelte
/*               ^^ entity.other.attribute-name.event.svelte support.function.svelte
/*                 ^ punctuation.separator.key-value.html - entity
/*                      ^^^^ entity.other.attribute-name.event.svelte
/*                               ^^^^^^^ entity.other.attribute-name.event.html - entity.other.attribute-name.event.svelte
/*                                        ^^^^^^^^ source.js.embedded.html
<button onclick = {handler} oninput="{handle}"></button>
/*      ^^^^^^^ entity.other.attribute-name.event.svelte
/*              ^ punctuation.separator.key-value.html
/*                ^^^^^^^^^ meta.embedded.block.svelte
/*                          ^^^^^^^ entity.other.attribute-name.event.svelte
/*                                   ^^^^^^^^ meta.embedded.block.svelte
<Comp onclick="not js" onfoo=bar onlabel="{value} suffix" onmix="x{y}" />
/*    ^^^^^^^ entity.other.attribute-name.html - entity.other.attribute-name.event
/*                     ^^^^^ entity.other.attribute-name.html - entity.other.attribute-name.event
/*                               ^^^^^^^ entity.other.attribute-name.html - entity.other.attribute-name.event
/*                                        ^^^^^^^ meta.embedded.block.svelte
/*                                                        ^^^^^ entity.other.attribute-name.html - entity.other.attribute-name.event
<button onclick="{() => ({ nested: { value } })}" on"x"={y}>x</button>
/*      ^^^^^^^ entity.other.attribute-name.event.svelte
/*               ^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*                                                  ^^ entity.other.attribute-name.html - entity.other.attribute-name.event
/*                                                    ^ invalid.illegal.attribute-name.html
<Comp on-click={h} on1={x} onSelect='{s}' />
/*    ^^^^^^^^ entity.other.attribute-name.event.svelte
/*      ^^^^^^ string.unquoted.svelte
/*                 ^^^ entity.other.attribute-name.event.svelte
/*                         ^^^^^^^^ entity.other.attribute-name.event.svelte
/*                                   ^^^ meta.embedded.block.svelte

###[ RUNES ]###################################################################

<script>
    let count = $state(0);
/*  ^^^^^^^^^^^^^^^^^^^^^^ source.js.embedded.html */
/*              ^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                    ^ punctuation.section.group.begin.js */
/*                     ^ constant.numeric.value.js */
    let raw = $state.raw([]);
/*            ^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                  ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                   ^^^ meta.function-call.js support.function.rune.svelte */
/*                      ^ punctuation.section.group.begin.js */
    let copy = $state.snapshot(count), eager = $state.eager(0);
/*             ^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                   ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                    ^^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                            ^ punctuation.section.group.begin.js */
/*                             ^^^^^ variable.other.readwrite.js */
/*                                             ^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                                                   ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                                                    ^^^^^ meta.function-call.js support.function.rune.svelte */
    let double = $derived(count * 2);
/*               ^^^^^^^^ support.function.rune.svelte */
/*                        ^^^^^ variable.other.readwrite.js */
    let total = $derived.by(() => count);
/*              ^^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                      ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                       ^^ meta.function-call.js support.function.rune.svelte */
/*                             ^^ keyword.declaration.function.arrow.js */
    let { a, b = 1 } = $props();
/*                     ^^^^^^ support.function.rune.svelte */
/*                           ^^ meta.group.js */
    let uid = $props.id();
/*            ^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                  ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                   ^^ meta.function-call.js support.function.rune.svelte */
    let value = $bindable();
/*              ^^^^^^^^^ support.function.rune.svelte */
    $effect(() => { console.log(count); });
/*  ^^^^^^^ support.function.rune.svelte */
/*         ^ punctuation.section.group.begin.js */
/*                  ^^^^^^^ support.type.object.console.js */
    $effect.pre(() => {});
/*  ^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*         ^ meta.function-call.js punctuation.accessor.js - support.function */
/*          ^^^ meta.function-call.js support.function.rune.svelte */
    $effect.root(() => {}); $effect.tracking(); $effect.pending();
/*  ^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*         ^ meta.function-call.js punctuation.accessor.js - support.function */
/*          ^^^^ meta.function-call.js support.function.rune.svelte */
/*                          ^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                                 ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                                  ^^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                                              ^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                                                     ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                                                      ^^^^^^^ meta.function-call.js support.function.rune.svelte */
    $inspect(count).with(console.trace);
/*  ^^^^^^^^ support.function.rune.svelte */
/*           ^^^^^ variable.other.readwrite.js */
/*                  ^^^^ variable.function.js - support.function.rune.svelte */
    $inspect.trace('label');
/*  ^^^^^^^^ meta.function-call.js support.function.rune.svelte */
/*          ^ meta.function-call.js punctuation.accessor.js - support.function */
/*           ^^^^^ meta.function-call.js support.function.rune.svelte */
/*                ^ punctuation.section.group.begin.js */
    const host = $host();
/*               ^^^^^ support.function.rune.svelte */
    let notRune = $stateful + $count + $state_ + $$props;
/*                ^^^^^^^^^ variable.other.dollar.js - support.function.rune.svelte */
/*                            ^^^^^^ variable.other.dollar.js - support.function.rune.svelte */
/*                                     ^^^^^^^ variable.other.dollar.js - support.function.rune.svelte */
/*                                               ^^^^^^^ variable.language.dollar.js */
    let member = obj.$state;
/*                   ^^^^^^ - support.function.rune.svelte */
</script>

<script lang="ts">
    let count: number = $state(0);
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ source.ts.embedded.html */
/*           ^ punctuation.separator.type.js */
/*             ^^^^^^ support.type.primitive.number.js */
/*                      ^^^^^^ meta.function-call.js support.function.rune.svelte */
    let items = $state.raw<Item[]>([]);
/*              ^^^^^^ meta.function-call.js support.function.rune.svelte */
/*                    ^ meta.function-call.js punctuation.accessor.js - support.function */
/*                     ^^^ meta.function-call.js support.function.rune.svelte */
/*                        ^ punctuation.definition.generic.begin.js */
/*                         ^^^^ support.class.js */
/*                               ^ punctuation.definition.generic.end.js */
    let { a, b }: Props = $props();
/*              ^ punctuation.separator.type.js */
/*                ^^^^^ support.class.js */
/*                        ^^^^^^ support.function.rune.svelte */
    let done = $derived<boolean>(count > 1);
/*             ^^^^^^^^ support.function.rune.svelte */
/*                      ^^^^^^^ support.type.primitive.boolean.js */
</script>

<script module>
/*      ^^^^^^ entity.other.attribute-name.html */
    let shared = $state.raw(0);
/*               ^^^^^^ source.js.embedded.html support.function.rune.svelte */
</script>

<script>
<![CDATA[
/* <- meta.tag.sgml.cdata.html punctuation.definition.tag.begin.html */
    let inCdata = $state(1);
/*  ^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.sgml.cdata.html source.js.embedded.html */
/*                ^^^^^^ support.function.rune.svelte */
]]>
/* <- meta.tag.sgml.cdata.html punctuation.definition.tag.end.html */
</script>

<script lang="ts">
<![CDATA[
    let inCdata: number = $state(1);
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.sgml.cdata.html source.ts.embedded.html */
/*                        ^^^^^^ support.function.rune.svelte */
]]>
/* <- meta.tag.sgml.cdata.html punctuation.definition.tag.end.html */
</script>

{#if $effect.pending()}
/*   ^^^^^^^ meta.function-call.js support.function.rune.svelte
/*          ^ meta.function-call.js punctuation.accessor.js - support.function
/*           ^^^^^^^ meta.function-call.js support.function.rune.svelte
/*                  ^^ meta.group.js
/*                    ^ punctuation.section.embedded.end.svelte
    <p>{$state.snapshot(value)}</p>
/*      ^^^^^^ meta.function-call.js support.function.rune.svelte
/*            ^ meta.function-call.js punctuation.accessor.js - support.function
/*             ^^^^^^^^ meta.function-call.js support.function.rune.svelte
/*                      ^^^^^ variable.other.readwrite.js
{/if}

###[ CLASS ARRAYS AND OBJECTS ]################################################

<div class={["a", cond && "b"]}></div>
/*   ^^^^^ entity.other.attribute-name.class.html
/*        ^ punctuation.separator.key-value.html
/*         ^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*         ^ punctuation.section.embedded.begin.svelte
/*          ^^^^^^^^^^^^^^^^^^ meta.sequence.js
/*          ^ punctuation.section.sequence.begin.js
/*           ^^^ meta.string.js string.quoted.double.js
/*              ^ punctuation.separator.comma.js
/*                ^^^^ variable.other.readwrite.js
/*                     ^^ keyword.operator.logical.js
/*                        ^^^ meta.string.js string.quoted.double.js
/*                           ^ punctuation.section.sequence.end.js
/*                            ^ punctuation.section.embedded.end.svelte
/*                             ^ punctuation.definition.tag.end.html
<div class={{ a: true, b: cond }}></div>
/*         ^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*          ^^^^^^^^^^^^^^^^^^^^ meta.mapping.js
/*          ^ punctuation.section.mapping.begin.js
/*            ^ meta.mapping.key.js
/*             ^ punctuation.separator.key-value.js
/*               ^^^^ constant.language.boolean.true.js
/*                   ^ punctuation.separator.comma.js
/*                     ^ meta.mapping.key.js
/*                        ^^^^ variable.other.readwrite.js
/*                             ^ punctuation.section.mapping.end.js
/*                              ^ punctuation.section.embedded.end.svelte
/*                               ^ punctuation.definition.tag.end.html
<Comp class={[base, { active }]} />
/*    ^^^^^ entity.other.attribute-name.class.html
/*           ^ punctuation.section.sequence.begin.js
/*            ^^^^ variable.other.readwrite.js
/*                  ^ punctuation.section.mapping.begin.js
/*                    ^^^^^^ variable.other.readwrite.js
/*                            ^ punctuation.section.sequence.end.js
/*                             ^ punctuation.section.embedded.end.svelte
/*                               ^^ punctuation.definition.tag.end.html

###[ ITEMLESS EACH STATEMENTS ]################################################

    {#each expression}...{/each}
/*  ^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^ variable.other.readwrite.js
/*                   ^ punctuation.section.embedded.end.svelte
/*                       ^^^^^^^ meta.embedded.block.svelte
/*                        ^^^^^ keyword.control.loop.end.svelte
    {#each expression, index}...{/each}
/*  ^^^^^^^^^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^ variable.other.readwrite.js
/*                   ^ punctuation.separator.comma.svelte - punctuation.separator.comma.js
/*                     ^^^^^ variable.other.readwrite.js
/*                          ^ punctuation.section.embedded.end.svelte
/*                              ^^^^^^^ meta.embedded.block.svelte
/*                               ^^^^^ keyword.control.loop.end.svelte
    {#each { length: 8 }, rank}
/*   ^^^^^ keyword.control.loop.each.svelte
/*         ^^^^^^^^^^^^^ meta.mapping.js
/*         ^ punctuation.section.mapping.begin.js
/*           ^^^^^^ meta.mapping.key.js
/*                   ^ constant.numeric.value.js
/*                     ^ punctuation.section.mapping.end.js
/*                      ^ punctuation.separator.comma.svelte
/*                        ^^^^ variable.other.readwrite.js
/*                            ^ punctuation.section.embedded.end.svelte
        {#each { length: 8 }, file}
/*                            ^^^^ variable.other.readwrite.js
            <div class:black={(rank + file) % 2 === 1}></div>
/*               ^^^^^^^^^^^ entity.other.attribute-name.svelte
/*                             ^^^^ variable.other.readwrite.js
        {/each}
/*       ^^^^^ keyword.control.loop.end.svelte
    {/each}
    {#each value as [number, string] as pair}
/*               ^^ keyword.operator.type.js
/*                  ^^^^^^^^^^^^^^^^ meta.type.js
/*                   ^^^^^^ support.type.primitive.number.js
/*                                   ^^ keyword.operator.assignment.as.svelte
/*                                      ^^^^ variable.other.readwrite.js
/*                                          ^ punctuation.section.embedded.end.svelte
    {/each}
    {#each value as { id: number } as item}{item.id}{/each}
/*               ^^ keyword.operator.type.js
/*                  ^^^^^^^^^^^^^^ meta.type.js
/*                                 ^^ keyword.operator.assignment.as.svelte
/*                                    ^^^^ variable.other.readwrite.js
/*                                        ^ punctuation.section.embedded.end.svelte
/*                                          ^^^^ variable.other.readwrite.js
    {#each rows as row: Row}
/*              ^^ keyword.operator.assignment.as.svelte
/*                 ^^^ variable.other.readwrite.js
/*                    ^ punctuation.separator.type.js
/*                      ^^^ meta.type.js support.class.js
/*                         ^ punctuation.section.embedded.end.svelte
    {/each}
    {#each rows as row: Row, i (row.id)}
/*                    ^ punctuation.separator.type.js
/*                      ^^^ meta.type.js support.class.js
/*                         ^ punctuation.separator.comma.svelte
/*                           ^ variable.other.readwrite.js
/*                             ^ punctuation.section.group.begin.js
/*                              ^^^ variable.other.readwrite.js
/*                                    ^ punctuation.section.group.end.js
/*                                     ^ punctuation.section.embedded.end.svelte
    {/each}
    {#each rows as row: A | B (row.id)}
/*                    ^ punctuation.separator.type.js
/*                      ^^^^^ meta.type.js
/*                        ^ keyword.operator.type.union.js
/*                            ^ punctuation.section.group.begin.js
/*                             ^^^ variable.other.readwrite.js
/*                                    ^ punctuation.section.embedded.end.svelte
    {/each}
    {#each rows as row: Map<string, number>}<p>x</p>{/each}
/*                      ^^^ meta.type.js support.class.js
/*                         ^ punctuation.definition.generic.begin.js
/*                                ^ punctuation.separator.comma.js
/*                                        ^ punctuation.definition.generic.end.js
/*                                         ^ punctuation.section.embedded.end.svelte
/*                                          ^^^ meta.tag - meta.embedded - meta.type
    {#each items as item: {a: number}}<p>x</p>{/each}
/*                        ^^^^^^^^^^^ meta.type.js meta.mapping.js
/*                        ^ punctuation.section.mapping.begin.js
/*                                  ^ punctuation.section.mapping.end.js
/*                                   ^ punctuation.section.embedded.end.svelte
/*                                    ^^^ meta.tag - meta.embedded - meta.type
    {#each items as Array<{a: {b: number}}> as item}{item}{/each}
/*               ^^ keyword.operator.type.js
/*                  ^^^^^^^^^^^^^^^^^^^^^^^ meta.type.js
/*                                          ^^ keyword.operator.assignment.as.svelte
/*                                             ^^^^ variable.other.readwrite.js
/*                                                 ^ punctuation.section.embedded.end.svelte
    {#each value as { a: { b: string } } as item}{item}{/each}
/*               ^^ keyword.operator.type.js
/*                  ^^^^^^^^^^^^^^^^^^^^ meta.type.js
/*                                       ^^ keyword.operator.assignment.as.svelte
/*                                          ^^^^ variable.other.readwrite.js
/*                                              ^ punctuation.section.embedded.end.svelte
    {#each items
/*   ^^^^^ keyword.control.loop.each.svelte */
/*         ^^^^^ variable.other.readwrite.js */
        as item: Item}
/*      ^^ keyword.operator.assignment.as.svelte
/*         ^^^^ variable.other.readwrite.js
/*               ^^^^ meta.type.js support.class.js
/*                   ^ punctuation.section.embedded.end.svelte
    {/each}
    {#await p then value: Value}...{:catch { message }: Err}...{/await}
/*            ^^^^ keyword.control.flow.svelte
/*                 ^^^^^ variable.other.readwrite.js
/*                      ^ punctuation.separator.type.js
/*                        ^^^^^ meta.type.js support.class.js
/*                             ^ punctuation.section.embedded.end.svelte
/*                                 ^ punctuation.section.embedded.begin.svelte
/*                                  ^^^^^^ keyword.control.flow.svelte
/*                                         ^^^^^^^^^^^ meta.mapping.js
/*                                           ^^^^^^^ variable.other.readwrite.js
/*                                                    ^ punctuation.separator.type.js
/*                                                      ^^^ meta.type.js support.class.js
/*                                                         ^ punctuation.section.embedded.end.svelte
    {#each rows as { id }: Row, i}
/*              ^^ keyword.operator.assignment.as.svelte
/*                 ^^^^^^ meta.mapping.js
/*                       ^ punctuation.separator.type.js
/*                         ^^^ meta.type.js support.class.js
/*                            ^ punctuation.separator.comma.svelte
/*                              ^ variable.other.readwrite.js
    {/each}
    {#each items as item (item.id as string)}
/*               ^^ keyword.operator.assignment.as.svelte
/*                  ^^^^ variable.other.readwrite.js
/*                       ^ punctuation.section.group.begin.js
/*                                ^^ keyword.operator.type.js
/*                                   ^^^^^^ support.type.primitive.string.js
/*                                         ^ punctuation.section.group.end.js
/*                                          ^ punctuation.section.embedded.end.svelte
    {/each}
    {#each items as Item, i}
/*               ^^ keyword.operator.assignment.as.svelte
/*                  ^^^^ variable.other.readwrite.js
/*                      ^ punctuation.separator.comma.svelte
/*                        ^ variable.other.readwrite.js
    {/each}
    {#each fn(a, b), i}
/*         ^^ variable.function.js
/*             ^ punctuation.separator.comma.js
/*                 ^ punctuation.separator.comma.svelte
/*                   ^ variable.other.readwrite.js
    {/each}

###[ BOUNDARIES ]##############################################################

<svelte:boundary onerror={(e) => report(e)}>
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ meta.tag.component.html
/* <- meta.tag.component.html punctuation.definition.tag.begin.html
/*^^^^^^^^^^^^^^ entity.name.tag.component.svelte
/*     ^ punctuation.accessor.svelte
/*               ^^^^^^^ entity.other.attribute-name.event.svelte
/*               ^^ support.function.svelte
/*                 ^^^^^ string.unquoted.svelte
/*                        ^ punctuation.section.group.begin.js
/*                         ^ variable.parameter.function.js
/*                            ^^ keyword.declaration.function.arrow.js
/*                               ^^^^^^ variable.function.js
/*                                         ^ punctuation.definition.tag.end.html
    <FlakyComponent />
/*   ^^^^^^^^^^^^^^ entity.name.tag.component.svelte
    <p>{await delayed('hello!')}</p>
/*      ^^^^^ keyword.control.flow.await.js
/*            ^^^^^^^ variable.function.js
/*                    ^^^^^^^^ meta.string.js string.quoted.single.js
/*                             ^ punctuation.section.embedded.end.svelte
    {#snippet failed(error, reset)}
/*   ^^^^^^^^ keyword.control.snippet.begin.svelte
/*            ^^^^^^ entity.name.function.svelte
/*                   ^^^^^ variable.parameter.function.js
/*                        ^ punctuation.separator.parameter.function.js
/*                          ^^^^^ variable.parameter.function.js
        <button onclick={reset}>oops! try again</button>
/*              ^^^^^^^ entity.other.attribute-name.event.svelte
/*                       ^^^^^ variable.other.readwrite.js
    {/snippet}
/*   ^^^^^^^^ keyword.control.snippet.end.svelte
    {#snippet pending()}
/*            ^^^^^^^ entity.name.function.svelte
/*                   ^ punctuation.section.group.begin.js
        <p>loading...</p>
    {/snippet}
</svelte:boundary>
/* <- meta.tag.component.html punctuation.definition.tag.begin.html
/*^^^^^^^^^^^^^^^ entity.name.tag.component.svelte
/*      ^ punctuation.accessor.svelte
/*               ^ punctuation.definition.tag.end.html

<svelte:boundary {onerror}>
/*               ^^^^^^^^^ meta.embedded.block.svelte
/*                ^^^^^^^ variable.other.readwrite.js
    <FlakyComponent />
</svelte:boundary>

###[ MARKUP AWAIT ]############################################################

<p>{a} + {b} = {await add(a, b)}</p>
/*             ^^^^^^^^^^^^^^^^^ meta.embedded.block.svelte
/*              ^^^^^ keyword.control.flow.await.js
/*                    ^^^ variable.function.js
/*                       ^ punctuation.section.group.begin.js
/*                        ^ variable.other.readwrite.js
/*                         ^ punctuation.separator.comma.js
/*                             ^ punctuation.section.embedded.end.svelte
/*                              ^^^^ meta.tag - meta.embedded
    {#if await isReady()}
/*   ^^^ keyword.control.conditional.if.svelte
/*       ^^^^^ keyword.control.flow.await.js
/*             ^^^^^^^ variable.function.js
        <Ready />
    {/if}
    {@render row(await item)}
/*   ^^^^^^^ support.function.svelte
/*               ^^^^^ keyword.control.flow.await.js
/*                     ^^^^ variable.other.readwrite.js
