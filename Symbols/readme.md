# Symbols

[Symbols and Symbol Properties](https://leanpub.com/understandinges6/read/#leanpub-auto-symbols-and-symbol-properties)

[MDN Docs for Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)

New primitive type introduced in EMAScript 6

Began as a way to create private object members.
* The private names proposal eventually evolved into ECMAScript 6 symbols
* Added non-string values for proerty names
* *Goal of privacy was* **dropped**

## Instatiation

```javascript
let sybmolInstance = Symbol()
```
* Can't use the new keyword since symbols are primitive types 
```javascript
let sybmolInstance = new Symbol("Descriptor for debugging purposes")
```
* You can pass in an optional string for debugging purposes.
* This property is stored internally in the [[Description]] property, and is read whenever the symbols .toString() method is called either explicitly or implicitly.