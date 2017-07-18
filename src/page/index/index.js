/*
* @Author: wangyang
* @Date:   2017-07-17 15:46:10
* @Last Modified by:   wangyang
* @Last Modified time: 2017-07-18 19:31:42
*/
'use strict';

var _mm = require('util/mm.js');
// _mm.request({
// 	url : '/product/list.do?keyword=1',
// 	success:function (res) {
// 		console.log(res);
// 	},
// 	error :function (errMsg) {
// 		console.log(errMsg);
// 	}
// })

// console.log(_mm.getUrlParam('test')); 

var html = '<div>{{data}}</div>';
var data = {
	data : 123
}
console.log(_mm.renderHtml(html,data));