// SYNTAX TEST "Packages/Svelte/TypeScript (Svelte).sublime-syntax"

    interface Counter { value: number }
//  ^^^^^^^^^ source.ts.svelte keyword.declaration.js
//                             ^^^^^^ support.type.primitive.number.js
    export const counter: Counter = $state({ value: 0 });
//  ^^^^^^ keyword.control.import-export.js
//                      ^ punctuation.separator.type.js
//                        ^^^^^^^ support.class.js
//                                  ^^^^^^ support.function.rune.svelte
    const items = $state.raw<Counter[]>([]);
//                ^^^^^^ support.function.rune.svelte
//                       ^^^ support.function.rune.svelte
//                          ^ punctuation.definition.generic.begin.js
//                           ^^^^^^^ support.class.js
    const doubled = $derived<number>(counter.value * 2);
//                  ^^^^^^^^ support.function.rune.svelte
//                           ^^^^^^ support.type.primitive.number.js
    $effect(() => console.log(counter.value));
//  ^^^^^^^ support.function.rune.svelte
    const ordinary = $stateful + object.$state;
//                   ^^^^^^^^^ - support.function.rune.svelte
//                                     ^^^^^^ - support.function.rune.svelte
    const text = '$state(0)';
//                ^^^^^^^^^ string.quoted.single.js - support.function.rune.svelte
