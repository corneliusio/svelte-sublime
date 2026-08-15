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
/*     ^^^^^^^ meta.string.js meta.interpolation.js variable.language.dollar.js - string
/*            ^ meta.string.js string.quoted.double.js punctuation.definition.string.end.js
/*              ^ meta.string.js string.quoted.double.js punctuation.definition.string.begin.js
/*               ^^^^^^^^^^^ meta.string.js meta.interpolation.js variable.language.dollar.js - string
/*                          ^ meta.string.js string.quoted.double.js punctuation.definition.string.end.js
/*                            ^ meta.string.js string.quoted.double.js punctuation.definition.string.begin.js
/*                             ^^^^^^^ meta.string.js meta.interpolation.js variable.language.dollar.js - string
/*                                    ^ meta.string.js string.quoted.double.js punctuation.definition.string.end.js
