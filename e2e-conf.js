/* 
* @Author: UnS
* @Date:   2015-03-07 19:42:45
* @Last Modified by:   UnS
* @Last Modified time: 2015-03-11 18:27:58
*/


exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*-spec.js']
};


console.log('--------------- Running sepcs: [' + exports.config.specs+']');