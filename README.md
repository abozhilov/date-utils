# @abozhilov/set-utils - v1.0.0

Utility library for working with the built-in `Set`.

Written in TypeScript.

## Installation

### npm
```
    npm install @abozhilov/set-utils
```

### yarn
```
    yarn add @abozhilov/set-utils
```
## Table of contents

### Functions

- [isSubset](README.md#issubset)
- [isStrictSubset](README.md#isstrictsubset)
- [isSuperset](README.md#issuperset)
- [isStrictSuperset](README.md#isstrictsuperset)
- [union](README.md#union)
- [intersect](README.md#intersect)
- [difference](README.md#difference)
- [symmetricDifference](README.md#symmetricdifference)

## Functions

### isSubset

▸ **isSubset**<`Т`\>(`setA`, `setB`): `boolean`

Checks whether `setA` is a subset of `setB`.
The operation is denoted by `setA ⊆ setB`.

```ts
  assert.equal(
      isSubset(new Set([1, 2]), new Set([1, 2, 3])),
      true
  );
```

#### Type parameters

| Name |
| :------ |
| `Т` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`Т`\> |
| `setB` | `Set`<`Т`\> |

#### Returns

`boolean`

#### Defined in

index.ts:12

___

### isStrictSubset

▸ **isStrictSubset**<`Т`\>(`setA`, `setB`): `boolean`

Checks whether `setA` is a strict (proper) subset of `setB`.
The operation is denoted by `setA ⊂ setB`.

```ts
 assert.equal(
     isStrictSubset(new Set([1, 2]), new Set([1, 2, 3])),
     true
 );
```

```ts
 assert.equal(
     isStrictSubset(new Set([1, 2]), new Set([1, 2])),
     false
 );
```

#### Type parameters

| Name |
| :------ |
| `Т` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`Т`\> |
| `setB` | `Set`<`Т`\> |

#### Returns

`boolean`

#### Defined in

index.ts:41

___

### isSuperset

▸ **isSuperset**<`T`\>(`setA`, `setB`): `boolean`

Checks whether `setA` is a superset of `setB`.
The operation is denoted by `setA ⊇ setB`.

```ts
  assert.equal(
      isSuperset(new Set([1, 2, 3]), new Set([1, 2])),
      true
  );
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`boolean`

#### Defined in

index.ts:60

___

### isStrictSuperset

▸ **isStrictSuperset**<`T`\>(`setA`, `setB`): `boolean`

Checks whether `setA` is a strict (proper) superset of `setB`.
The operation is denoted by `setA ⊃ setB`.

```ts
 assert.equal(
     isStrictSuperset(new Set([1, 2, 3]), new Set([1, 2])),
     true
 );
```

```ts
 assert.equal(
     isStrictSuperset(new Set([1, 2]), new Set([1, 2])),
     false
 );
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |

#### Returns

`boolean`

#### Defined in

index.ts:82

___

### union

▸ **union**<`T`\>(`setA`, `setB`, ...`restSets`): `Set`<`T`\>

Returns new set which contains all elements from each set.
The operation is denoted by `setA ⋃ setB`.

```ts
   assert.deepEqual(
       union(new Set([1, 2]), new Set([3, 4])),
       new Set([1, 2, 3, 4])
   );
```

```ts
   assert.deepEqual(
       union(new Set([1, 2]), new Set([3, 4]), new Set([5, 6])),
       new Set([1, 2, 3, 4, 5, 6])
   );
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |
| `...restSets` | `Set`<`T`\>[] |

#### Returns

`Set`<`T`\>

#### Defined in

index.ts:105

___

### intersect

▸ **intersect**<`T`\>(`setA`, `setB`, ...`sets`): `Set`<`T`\>

Returns a new set with all elements of `setA` that also belongs to `setB`.
The operation is denoted by `setA ⋂ setB`.

```ts
   assert.deepEqual(
       intersect(new Set([1, 2, 3]), new Set([2, 3, 4])),
       new Set([2, 3])
   );
```

```ts
   assert.deepEqual(
       intersect(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([2, 3, 5])),
       new Set([2, 3])
   );
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |
| `...sets` | `Set`<`T`\>[] |

#### Returns

`Set`<`T`\>

#### Defined in

index.ts:139

___

### difference

▸ **difference**<`T`\>(`setA`, `setB`, ...`sets`): `Set`<`T`\>

Returns a new set with all elements of `setA` that not belongs to `setB`.
The operation is denoted by `setA \ setB`.

```ts
   assert.deepEqual(
       difference(new Set([1, 2, 3]), new Set([3, 4, 5])),
       new Set([1, 2])
   );
```

```ts
   assert.deepEqual(
       difference(new Set([1, 2, 3, 4, 5]), new Set([3, 4]), new Set([4, 5])),
       new Set([1, 2])
   );
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |
| `...sets` | `Set`<`T`\>[] |

#### Returns

`Set`<`T`\>

#### Defined in

index.ts:178

___

### symmetricDifference

▸ **symmetricDifference**<`T`\>(`setA`, `setB`, ...`sets`): `Set`<`T`\>

Returns a new set with all elements of `setA` that not belongs to `setB` and vice versa.
The operation is denoted by `setA ∆ setB`.

```ts
   assert.deepEqual(
       symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])),
       new Set([1, 2, 4, 5])
   );
```

```ts
   assert.deepEqual(
       symmetricDifference(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6]), new Set([4, 5, 7])),
       new Set([1, 2, 6, 7])
   );
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setA` | `Set`<`T`\> |
| `setB` | `Set`<`T`\> |
| `...sets` | `Set`<`T`\>[] |

#### Returns

`Set`<`T`\>

#### Defined in

index.ts:217