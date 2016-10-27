/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	__webpack_require__(7);
	
	__webpack_require__(9);
	
	__webpack_require__(37);
	
	var _guide = __webpack_require__(11);
	
	var _guide2 = _interopRequireDefault(_guide);
	
	var _index = __webpack_require__(14);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(19);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _list = __webpack_require__(22);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _shoppingCart = __webpack_require__(25);
	
	var _shoppingCart2 = _interopRequireDefault(_shoppingCart);
	
	var _my = __webpack_require__(28);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _detail = __webpack_require__(31);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _store = __webpack_require__(34);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//router
	//import Vue from "./libs/vue.js";
	//import VueRouter from "./libs/vue-router.js";
	//Vue.use(VueRouter);
	
	var router = new VueRouter();
	
	// views
	
	//修改根组件来让应用注意到 store 的存在位置。让它的子组件和 store 连接
	var App = Vue.extend({
	  store: _store2.default
	});
	
	router.map({
	  '/': {
	    component: _guide2.default
	  },
	  '/index': {
	    component: _index2.default,
	    subRoutes: {
	      '/': {
	        component: _main2.default
	      },
	      '/list': {
	        component: _list2.default
	      },
	      '/shoppingCart': {
	        component: _shoppingCart2.default
	      },
	      '/my': {
	        component: _my2.default
	      }
	    }
	  },
	  "detail": {
	    component: _detail2.default
	  }
	});
	
	router.start(App, 'body');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\guide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./guide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      guideImages: ["/images/guide/guide_page_1.png", "/images/guide/guide_page_2.png", "/images/guide/guide_page_3.png", "/images/guide/guide_page_4.png"]
	    };
	  },
	
	
	  ready: function ready() {
	    var guideSwiper = new Swiper(".guide-container", {
	      autoplay: 1500,
	      autoplayStopOnLast: true,
	      direction: 'horizontal',
	      speed: 300,
	      loop: false
	    });
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper-container guide-container\">\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide\" v-for=\"item in guideImages\">\n      <img v-if=\"$index==3\" v-link=\"{path: '/index'}\" src=\"/images/guide/guide_page_button.png\"  id=\"btn\"/>\n      <img v-bind:src=\"item\" class=\"bigImg\" />\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(16);
	
	var _getters = __webpack_require__(17);
	
	exports.default = {
	  vuex: {
	    getters: {
	      curIndex: _getters.getIndex
	    },
	    actions: {
	      change: _actions.changeIndex
	    }
	  },
	  data: function data() {
	    return {
	      tablist: [{ path: '/index', icon: '&#xe624;', name: '首页' }, { path: '/index/list', icon: '&#xe632;', name: '品类' }, { path: '/index/shoppingCart', icon: '&#xe63b;', name: '购物车' }, { path: '/index/my', icon: '&#xe61a;', name: '我' }]
	    };
	  },
	  ready: function ready() {},
	
	
	  methods: {
	    changPage: function changPage(i) {}
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var changeIndex = exports.changeIndex = function changeIndex(_ref, tabIndex) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;
	
	  dispatch('CHANGEINDEX', tabIndex);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getIndex = exports.getIndex = function getIndex(state) {
	  return state.tabIndex;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n  <router-view></router-view>\n  <footer id=\"footer\">\n      <ul>\n          <li\n            v-bind:class=\"curIndex == $index ? 'active' : ''\"\n            v-on:click=\"changPage($index)\"\n            v-for=\"tab in tablist\"\n            v-link=\"{path: tab.path}\">\n              <i class=\"iconfont\">{{{tab.icon}}}</i>\n              <b>{{tab.name}}</b>\n          </li>\n      </ul>\n  </footer>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(16);
	
	var _getters = __webpack_require__(17);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    },
	    getters: {
	      curIndex: _getters.getIndex
	    }
	  },
	  data: function data() {
	    return {
	      list: [],
	      lunboImg: ['http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/CA/CmiLkFgJ9HSAF9N4AAD7jqmRzAk699.jpg?width=750&height=360', 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/A5/CmiLkFfs9uSAeU4IAAN8TAQN3Nk478.jpg?width=750&height=360', 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/CB/CmiLkFgK2XeAD3wRAAHVF1rUcjY585.jpg?width=750&height=360'],
	      navInfo: [{
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/8D/CmiLkFfeNV-AK5qkAABLpTO8P9M935.jpg?width=88&height=88',
	        name: '及时送'
	      }, {
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/8D/CmiLlFfeNWGAetGoAABOGEPfZKM991.jpg?width=88&height=88',
	        name: '超值购'
	      }, {
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/8D/CmiU8FfeNWSAOnksAABGWgzlrOk059.jpg?width=88&height=88',
	        name: '新品尝鲜'
	      }, {
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/8D/CmiWiFfeNWqAYlSDAABJolkoiu8965.jpg?width=88&height=88',
	        name: '招牌水果'
	      }, {
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/8D/CmiLkFfeNXCAINnUAABGpRzTuHA291.jpg?width=88&height=88',
	        name: '补水果品'
	      }, {
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/8D/CmiU8FfeNXaAIvlDAABSsVSLUD8847.jpg?width=88&height=88',
	        name: '进口美味'
	      }, {
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/8D/CmiWa1feNWiAETVgAAA8kvV3vB4588.jpg?width=88&height=88',
	        name: '售后无忧'
	      }, {
	        icon: 'http://pagoda-fastdfs.pagoda.com.cn:10501/miResourceMgr/group1/M00/00/AD/CmiLlFf4qoKAT6xPAABSHKoLdhw562.jpg?width=88&height=88',
	        name: '一卡通行'
	      }]
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/list.json').then(function (res) {
	      _this.list = res.data;
	    });
	
	    Vue.nextTick(function () {
	      setTimeout(function () {
	        new IScroll('#index-scroll', {
	          click: true
	        });
	      }, 500);
	    });
	
	    var lunboSwiper = new Swiper("#lunbo", {
	      autoplay: 5000,
	      direction: 'horizontal',
	      speed: 300,
	      pagination: '.swiper-pagination'
	    });
	
	    this.change(0);
	  },
	
	  methods: {}
	
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"main-container\" id=\"index-scroll\">\n  <div>\n    <header>\n      <div class=\"swiper-container\" id=\"lunbo\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" v-for=\"item in lunboImg\">\n            <img v-bind:src=\"item\" />\n          </div>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n      </div>\n    </header>\n    <nav>\n      <ul>\n          <li v-for=\"item in navInfo\">\n              <img v-bind:src=\"item.icon\">\n              <b>{{item.name}}</b>\n          </li>\n      </ul>\n    </nav>\n    <section>\n      <img v-for=\"img in list\" v-bind:src=\"img\" />\n    </section>\n  </div>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(16);
	
	var _getters = __webpack_require__(17);
	
	var listScroll;
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    },
	    getters: {
	      curIndex: _getters.getIndex
	    }
	  },
	  data: function data() {
	    return {
	      list: [],
	      goodList: [],
	      curIndex: 0,
	      navInfo: ["所有商品", "招牌果品", "新品尝鲜", "进口鲜果", "国产鲜果", "果篮礼盒", "休闲干果"]
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var that = this;
	    this.$http.get('/mock/goodInfo.json').then(function (res) {
	      _this.list = res.data;
	      _this.goodList = _this.list;
	    });
	    Vue.nextTick(function () {
	      setTimeout(function () {
	        listScroll = new IScroll('#list-scroll', {
	          click: true
	        });
	      }, 500);
	    });
	
	    this.change(1);
	  },
	
	  methods: {
	    switchList: function switchList(index) {
	      var that = this;
	      this.curIndex = index;
	      switch (index) {
	        case 0:
	          that.goodList = that.list;
	          break;
	        case 1:
	          that.goodList = this.changeList(1);
	          break;
	        case 2:
	          that.goodList = this.changeList(2);
	          break;
	        case 3:
	          that.goodList = this.changeList(3);
	          break;
	        case 4:
	          that.goodList = this.changeList(4);
	          break;
	        case 5:
	          that.goodList = this.changeList(5);
	          break;
	        case 6:
	          that.goodList = this.changeList(6);
	          break;
	      }
	    },
	    changeList: function changeList(index) {
	      var arr = [];
	      for (var i = 0; i < this.list.length; i++) {
	        if (index == this.list[i].goodId.substring(1, 2)) {
	          arr.push(this.list[i]);
	        }
	      }
	      return arr;
	    }
	  }
	
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"list-container\">\n  <nav>\n    <ul>\n      <li v-bind:class=\"curIndex == $index ? 'active': ''\" v-for=\"item in navInfo\" v-on:click=\"switchList($index)\">{{item}}</li>\n    </ul>\n  </nav>\n  <div class=\"goodList\" id=\"list-scroll\">\n    <ul>\n      <li v-for=\"item in goodList\" v-link=\"{path: ('/detail?'+item.goodId)}\">\n        <!-- v-link=\"{path: '/index/shoppingCart?1'}\" -->\n        <img v-bind:src=\"item.imgUrl\">\n        <div class=\"info\">\n          <p class=\"goodName\">{{item.name}}</p>\n          <!-- <p class=\"song\">及时送</p> -->\n          <p class=\"less\">不少于500g</p>\n          <p class=\"goodPrice\">￥{{item.price}}</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\shoppingCart.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./shoppingCart.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(16);
	
	var _getters = __webpack_require__(17);
	
	var myScroll;
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.changeIndex
	    },
	    getters: {
	      curIndex: _getters.getIndex
	    }
	  },
	  data: function data() {
	    return {
	      idChecked: true
	    };
	  },
	
	  ready: function ready() {
	    this.change(2);
	
	    Vue.nextTick(function () {
	      setTimeout(function () {
	        myScroll = new IScroll('#index-scroll', {
	          click: true
	        });
	      }, 500);
	    });
	  },
	  methods: {
	    changeCheck: function changeCheck() {
	      this.idChecked = !this.idChecked;
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"shoppingCart-container\">\n  <header>\n    <div class=\"tip\">购物车</div>\n    <div class=\"address\">配送至：北京市昌平区沙河</div>\n  </header>\n  <section id=\"index-scroll\">\n    <div>\n      <div class=\"allChoose\">\n        <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" v-on:click=\"changeCheck\" class=\"allCheck\"></span>\n        <span class=\"song\">及时送</span>\n      </div>\n      <div class=\"goodList\" >\n        <ul>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n          <li>\n            <img v-bind:src=\"idChecked?'/images/shoppingCart/selected_ck.png':'/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img src=\"/images/shoppingCart/item.png\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">B级-南丰蜜桔</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥7.3</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\">－</span>\n                <span class=\"num\">1</span>\n                <span class=\"add\">＋</span>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </section>\n  <div class=\"toCar\">\n    <p class=\"money\">合计：<span>￥390.3</span><i>(不含运费)</i></p>\n    <p class=\"jiesuan\">结算</p>\n  </div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./my.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	console.log("这是我的页面");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div>这是我的。。。</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./detail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var detailScroll = null;
	
	exports.default = {
	  data: function data() {
	    return {
	      imgUrl: "",
	      goodInfo: {},
	      tuijian: []
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var index = location.href.split("?")[1];
	    this.$http.get('/mock/goodInfo.json').then(function (res) {
	      _this.list = res.data;
	      for (var i = 0; i < res.data.length; i++) {
	        if (index === res.data[i].goodId) {
	          _this.goodInfo = res.data[i];
	          _this.imgUrl = res.data[i].imgUrl;
	        } else if (index.substring(0, 2) === res.data[i].goodId.substring(0, 2)) {
	          _this.tuijian.push(res.data[i]);
	        }
	      }
	    });
	    Vue.nextTick(function () {
	      setTimeout(function () {
	        detailScroll = new IScroll('#detail-scroll', {
	          click: true
	        });
	      }, 500);
	    });
	  },
	
	  methods: {}
	
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"detail-box\">\n  <div class=\"detail-container\" id=\"detail-scroll\">\n    <div>\n      <img v-bind:src=\"imgUrl\" alt=\"\" class=\"showImg\" />\n      <img v-link=\"{path: '/index/list'}\" src=\"/images/detail/icon_back_hover.png\" class=\"back\" alt=\"\">\n      <img src=\"/images/detail/icon_share.png\" class=\"share\" alt=\"\">\n      <img v-link=\"{path: '/index'}\" src=\"/images/detail/icon_home_hover.png\" class=\"home\" alt=\"\">\n      <div class=\"info\">\n        <p class=\"goodName\">B级-南丰蜜桔</p>\n        <!-- <p class=\"song\">及时送</p> -->\n        <p class=\"less\">不少于500g</p>\n        <p class=\"goodPrice\">￥7.3</p>\n      </div>\n      <div class=\"maiguo\">\n        购买过该商品的顾客也购买过\n      </div>\n      <ul class=\"tuijianBox\">\n        <li v-for=\"item in tuijian\">\n          <img v-bind:src=\"item.imgUrl\" alt=\"\" />\n          <div class=\"info\">\n            <p class=\"goodName\">B级-南丰蜜桔</p>\n            <!-- <p class=\"song\">及时送</p> -->\n            <p class=\"less\">不少于500g</p>\n            <p class=\"goodPrice\">￥7.3</p>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <footer>\n    <div class=\"shoppingIcon\">\n      <img src=\"/images/detail/shopping_cart.png\" alt=\"\" />\n      <div class=\"num\">2</div>\n    </div>\n    <div class=\"addTo\">加入购物车</div>\n  </footer>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _states = __webpack_require__(35);
	
	var _mutations = __webpack_require__(36);
	
	//提供一个初始化的 state 对象，以及一些 mutations：
	exports.default = new Vuex.Store({
	  state: _states.state,
	  mutations: _mutations.mutations
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = exports.state = {
	  tabIndex: 0
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mutations = exports.mutations = {
	  CHANGEINDEX: function CHANGEINDEX(state, curIndex) {
	    state.tabIndex = curIndex;
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map