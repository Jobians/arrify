# @jobians/arrify

A TypeScript utility function that converts various types of values into arrays.

## Installation

You can install the package using npm:

```bash
npm install @jobians/arrify
```

## Importing

### ES Module

```typescript
import arrify from '@jobians/arrify';
```

### CommonJS

```javascript
const arrify = require('@jobians/arrify');
```

## Usage

The `arrify` function accepts a value and returns an array. It handles various types of input, including:

- `null` and `undefined` return an empty array.
- Strings are wrapped in an array.
- Arrays are returned as-is.
- Iterables are spread into an array.
- All other values are wrapped in an array.

### Example

```typescript
import arrify from '@jobians/arrify';

// Convert a string to an array
const result1 = arrify("hello");
console.log(result1); // Output: ["hello"]

// Convert a number to an array
const result2 = arrify(42);
console.log(result2); // Output: [42]

// Convert an array to an array
const result3 = arrify([1, 2, 3]);
console.log(result3); // Output: [1, 2, 3]

// Convert null to an empty array
const result4 = arrify(null);
console.log(result4); // Output: []

// Convert undefined to an empty array
const result5 = arrify(undefined);
console.log(result5); // Output: []

// Convert a Set to an array
const result6 = arrify(new Set([1, 2, 3]));
console.log(result6); // Output: [1, 2, 3]

// Convert a Map's values to an array
const result7 = arrify(new Map([[1, 'a'], [2, 'b']]).values());
console.log(result7); // Output: ['a', 'b']
```

## API

### `arrify<T>(value: T | T[] | null | undefined): T[]`

- **Parameters**:
  - `value`: The input value to convert into an array.

- **Returns**: An array containing the input value.

## TypeScript Support

This package is written in TypeScript and provides type definitions. You can use it seamlessly in TypeScript projects, ensuring type safety.

## Support

If you find my work helpful, you can support me by donating:

[![Donate](https://img.shields.io/badge/Donate-Crypto-0070BA.svg)](https://cwallet.com/t/TE6A6KMV)