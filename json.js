/* 
* @Author: UnS
* @Date:   2015-02-27 10:58:26
* @Last Modified by:   UnS
* @Last Modified time: 2015-02-27 11:03:15
*/

var jsonServer = require('json-server');

var aaaaaaaaaaaa = {
	posts: [
    { id: 1, body: 'foo' }
  ]
};

var router = jsonServer.router(aaaaaaaaaaaa);
var server = jsonServer.create();

server.use(router);
server.listen(3031);