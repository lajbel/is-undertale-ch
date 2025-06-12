# is-undertale-ch

This package provides two functions `isUndertaleCh` and `checkUndertaleCh` to check if a given string is a Undertale character name or not.

## Usage

### `checkUndertaleCh(name)`

```js
checkUndertaleCh('Sans');
```

Returns:

```json
{
    "isAllowed": false,
    "name": "Sans",
    "jpName": "サンズ",
    "message": "nope."
}
```

### `isUndertaleCh(name)`

```js
isUndertaleCh('Sans'); // true
isUndertaleCh('AmySparkNg'); // false
```

## Installation
```bash
npm install is-undertale-ch
```
```bash
yarn add is-undertale-ch
```
```bash
pnpm install is-undertale-ch
```
```bash
bun add is-undertale-ch
```

## Credits

- me
- [Undertale Wiki](https://undertale.fandom.com/wiki/Names)
- AmySparkNG for absolutely nothing
- [Undertale](https://undertale.com/) for the game
- [Toby Fox](https://toby.fangamer.com/) 
