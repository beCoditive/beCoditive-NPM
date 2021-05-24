# beCoditive

![npm bundle size](https://img.shields.io/bundlephobia/min/becoditive)
![npm](https://img.shields.io/npm/v/becoditive)

## Bugs and glitches
Feel free to report all bugs and glitches by creating an issue in the [issue section](https://github.com/beCoditive/beCoditive-API/issues/new).

A correct and understandable issue contains :

- Steps to reproduce
- Code that summonned the error
- The complete error

You can also join me on my [discord server](https://discord.gg/BgWv28uQD4).

<a href="https://discord.gg/BgWv28uQD4"><img src="https://discord.com/api/guilds/760922672519184384/widget.png" alt="beCoditive support server"/></a>

you can download it from <a href="https://www.npmjs.com/package/becoditive">npmjs</a>.

```cli
npm i becoditive
```

## Configuration

The first step is to import the module in your code.

```js
const beCoditive = require("becoditive");
const client = new beCoditive.API()
```

Then you have to login and request a API call according to your choice.

```js
    client.login("YOUR_BECODITIVE_API_KEY")

    await client.dog().then((data) => {
        console.log(data)
    })
````

# Available API Calls

- ``client.dog()``

- ``client.cat()``

- ``client.panda()``

- ``client.bird()``

- ``client.uuid()``

- ``client.joke()``

- ``client.puns())``

- ``client.hug()``

- ``client.kiss()``

- ``client.insults()``

- ``client.flirt()``

- ``client.word()``

- ``client.doesnotexists()``

- ``client.quote()``

- ``client.uselessweb()``

- ``client.truth()``

- ``client.dare()``

- ``client.number()``

- ``client.password()``