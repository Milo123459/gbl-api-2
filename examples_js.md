# Here is the JavaScript example/guide.
Using GBLAPI.JS
===
Using the module **gblapi.js** created by Diesel and Erik, it makes interacting with the API a lot easier. <br>
**1. Installing**
```bash
$ npm i gblapi.js
``` 
**2. Creating a Glenn Client**
```js
const GBL = require('gblapi.js'); //Require the module, you can use import like so:
//import * as GBL from "gblapi.js"
const Glenn = new GBL('my bot id here', 'my gbl token here', false); //If you set the logs boolean (the one set to false in this example) you will get verbose logging of when your stats are posted.
```
**3. Posting your stats**
```js
Glenn.updateStats(client.guilds.cache.size) //Warning! Posting a fake server count can result in your bot being taken off the webiste.
//In this example I'm using Discord.JS and created a client and named it client.
```
And there we go, we have setup gblapi.js! :tada: