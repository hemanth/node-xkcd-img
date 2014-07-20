var request = require('request');
var img = function(cb){
      request('http://xkcd.com/info.0.json',function (error, response, body) {
           if (!error && response.statusCode == 200) {
               var max_num = JSON.parse(body)["num"];
               rand =  Math.floor((Math.random()*max_num)+1);
               if(rand == 404) { rand = get_num(); } // Avoid 404 page ;)
            }
            var xkcd_url = 'http://xkcd.com/'+rand+'/info.0.json';
            request(xkcd_url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    comic = JSON.parse(body);
                    img_url = comic['img'];
                    img_title = comic['alt'];
                    cb({
                      'url': img_url,
                      'title': img_title
                    });
                }
            });
      });
}

exports.img = img;



