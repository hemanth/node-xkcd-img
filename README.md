## xkcd-imgs [![Build Status](https://travis-ci.org/hemanth/node-xkcd-img.svg)](https://travis-ci.org/hemanth/node-xkcd-img)

> Get random xkcd comics.


```
$ npm install xkcd-imgs
```

## Usage:

```js
var xkcd = require('xkcd-imgs');

xkcd.img(function(err, res){
  if(!err) {
    console.log(res);
  }
});

// Would log something like:
{ url: 'http://imgs.xkcd.com/comics/mystery_news.png',
  img_title: 'If you find and stop the video, but you\'ve--against all odds--gotten curious about the trade summit, just leave the tab opened. It will mysteriously start playing again 30 minutes later!' 
}
```
