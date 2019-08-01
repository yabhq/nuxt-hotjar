
# Nuxt Hotjar

Implement Hotjar in your Nuxt app.

## Quick Install


```
$ npm i @yabhq/nuxt-hotjar
```
In your **nuxt.config.js**:
```JavaScript
modules: [
    // ....
    ['@yabhq/nuxt-hotjar', { 
        hjid: 0000000, // required
        hjsv: 0, // optional
        defer: false, // optional
        async: false // optional,
        dev: false // optional
    }],
    // ....
]
```
