```
$ npm install xkcd-imgs

# In node code :

var xkcd = require('xkcd-imgs');

xkcd.img(function(res){
  console.log(res);
});

// Would log :
{ url: 'http://imgs.xkcd.com/comics/mystery_news.png',
  img_title: 'If you find and stop the video, but you\'ve--against all odds--gotten curious about the trade summit, just leave the tab opened. It will mysteriously start playing again 30 minutes later!' }
