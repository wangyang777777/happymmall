/*
* @Author: wangyang
* @Date:   2017-07-19 13:21:03
* @Last Modified by:   wangyang
* @Last Modified time: 2017-07-19 15:25:18
*/

'use strict';
require('./index.css')
var _mm = require('util/mm.js')
var nav = {
	init: function () {
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this
	},
	bindEvent : function () {
		// 登录点击事件
		$('.js-login').click(function () {
			_mm.doLogin();
		})
		// 注册点击事件
		$('.js-register').click(function () {
			window.location.href = './register.html'
		})
		// 退出点击事件
		
	},
	loadUserInfo : function () {
		
	},
	loadCartCount : function () {
		
	}
};
module.exports = nav.init();