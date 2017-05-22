/*
* @Author: Alan
* @Date:   2017-05-22 11:22:59
* @Last Modified by:  Alan
* @Last Modified time: 2017-05-22 14:14:25
*/

'use strict';

// 支持 ES6 语法
import 'babel-polyfill'
import cats from './cats'
import $ from 'jquery'

$(function() {
	 $('<h1>Cats</h1>').appendTo('body');
	 const ul = $('<ul></ul>').appendTo('body');
	 for (const cat of cats) {
	     $('<li></li>').text(cat).appendTo(ul);
	 }
})



