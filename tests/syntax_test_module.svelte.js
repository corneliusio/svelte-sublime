// SYNTAX TEST "Packages/Svelte/JavaScript (Svelte).sublime-syntax"

    export const counter = $state({ value: 0 });
//  ^^^^^^ source.js.svelte keyword.control.import-export.js
//                         ^^^^^^ support.function.rune.svelte
//                                  ^^^^^ meta.mapping.key.js
    const doubled = $derived(counter.value * 2);
//                  ^^^^^^^^ support.function.rune.svelte
    $effect.root(() => { $effect(() => console.log(counter.value)); });
//  ^^^^^^^ support.function.rune.svelte
//         ^ punctuation.accessor.js
//          ^^^^ support.function.rune.svelte
//                       ^^^^^^^ support.function.rune.svelte
    const copy = $state.snapshot(counter);
//               ^^^^^^ support.function.rune.svelte
//                      ^^^^^^^^ support.function.rune.svelte
    const ordinary = $stateful + object.$state;
//                   ^^^^^^^^^ - support.function.rune.svelte
//                                     ^^^^^^ - support.function.rune.svelte
    const text = '$state(0)';
//                ^^^^^^^^^ string.quoted.single.js - support.function.rune.svelte
    // $derived(counter)
//     ^^^^^^^^^^^^^^^^^ comment.line.double-slash.js - support.function.rune.svelte
