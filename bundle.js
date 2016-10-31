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
	
	__webpack_require__(11);
	
	__webpack_require__(13);
	
	__webpack_require__(15);
	
	var _guide = __webpack_require__(17);
	
	var _guide2 = _interopRequireDefault(_guide);
	
	var _index = __webpack_require__(20);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(25);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _list = __webpack_require__(28);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _shoppingCart = __webpack_require__(31);
	
	var _shoppingCart2 = _interopRequireDefault(_shoppingCart);
	
	var _my = __webpack_require__(37);
	
	var _my2 = _interopRequireDefault(_my);
	
	var _detail = __webpack_require__(40);
	
	var _detail2 = _interopRequireDefault(_detail);
	
	var _login = __webpack_require__(43);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _store = __webpack_require__(46);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//router
	//import Vue from "./libs/vue.js";
	//import VueRouter from "./libs/vue-router.js";
	//Vue.use(VueRouter);
	
	// views
	var router = new VueRouter();
	
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
	  },
	  "login": {
	    component: _login2.default
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\guide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
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
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      guideImages: ["/vue-project-pagoda/images/guide/guide_page_1.png", "/vue-project-pagoda/images/guide/guide_page_2.png", "/vue-project-pagoda/images/guide/guide_page_3.png", "/vue-project-pagoda/images/guide/guide_page_4.png"]
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
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper-container guide-container\">\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide\" v-for=\"item in guideImages\">\n      <img v-if=\"$index==3\" v-link=\"{path: '/index'}\" src=\"/vue-project-pagoda/images/guide/guide_page_button.png\"  id=\"btn\"/>\n      <img v-bind:src=\"item\" class=\"bigImg\" />\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
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
	  var id = "./index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(22);
	
	var _getters = __webpack_require__(23);
	
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
/* 22 */
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
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getIndex = exports.getIndex = function getIndex(state) {
	  return state.tabIndex;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\">\n  <router-view></router-view>\n  <footer id=\"footer\">\n      <ul>\n          <li\n            v-bind:class=\"curIndex == $index ? 'active' : ''\"\n            v-on:click=\"changPage($index)\"\n            v-for=\"tab in tablist\"\n            v-link=\"{path: tab.path}\">\n              <i class=\"iconfont\">{{{tab.icon}}}</i>\n              <b>{{tab.name}}</b>\n          </li>\n      </ul>\n  </footer>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
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
	  var id = "./main.vue"
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
	
	var _actions = __webpack_require__(22);
	
	var _getters = __webpack_require__(23);
	
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
	    this.$http.get('/vue-project-pagoda/mock/list.json').then(function (res) {
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
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"main-container\" id=\"index-scroll\">\n  <div>\n    <header>\n      <div class=\"swiper-container\" id=\"lunbo\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" v-for=\"item in lunboImg\">\n            <img v-bind:src=\"item\" />\n          </div>\n        </div>\n        <div class=\"swiper-pagination\"></div>\n      </div>\n    </header>\n    <nav>\n      <ul>\n          <li v-for=\"item in navInfo\">\n              <img v-bind:src=\"item.icon\">\n              <b>{{item.name}}</b>\n          </li>\n      </ul>\n    </nav>\n    <section>\n      <img v-for=\"img in list\" v-bind:src=\"img\" />\n    </section>\n  </div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\list.vue: named exports in *.vue files are ignored.")}
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
	  var id = "./list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(22);
	
	var _getters = __webpack_require__(23);
	
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
	    this.$http.get('/vue-project-pagoda/mock/goodInfo.json').then(function (res) {
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
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"list-container\">\n  <nav>\n    <ul>\n      <li v-bind:class=\"curIndex == $index ? 'active': ''\" v-for=\"item in navInfo\" v-on:click=\"switchList($index)\">{{item}}</li>\n    </ul>\n  </nav>\n  <div class=\"goodList\" id=\"list-scroll\">\n    <ul>\n      <li v-for=\"item in goodList\" v-link=\"{path: ('/detail?'+item.goodId)}\">\n        <!-- v-link=\"{path: '/index/shoppingCart?1'}\" -->\n        <img v-bind:src=\"item.imgUrl\">\n        <div class=\"info\">\n          <p class=\"goodName\">{{item.name}}</p>\n          <!-- <p class=\"song\">及时送</p> -->\n          <p class=\"less\">不少于500g</p>\n          <p class=\"goodPrice\">￥{{item.price}}</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\shoppingCart.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(33);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _actions = __webpack_require__(22);
	
	var _getters = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      idChecked: true,
	      shoppingCartInfo: [],
	      allMoney: 0,
	      hasGood: false
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
	
	    if (localStorage.getItem('shoppingCartInfo')) {
	      var arrInfo = JSON.parse(localStorage.getItem('shoppingCartInfo'));
	      if (arrInfo.length > 0) {
	        this.hasGood = true;
	      }
	      var sum = 0;
	      for (var i = 0; i < arrInfo.length; i++) {
	        sum += parseFloat(arrInfo[i].goodPrice) * parseFloat(arrInfo[i].goodSum);
	      }
	      this.shoppingCartInfo = arrInfo;
	      this.allMoney = sum.toFixed(2);
	    } else {
	      if (arrInfo.length > 0) {
	        this.hasGood = true;
	      }
	    }
	  },
	  methods: {
	    changeCheck: function changeCheck() {
	      this.idChecked = !this.idChecked;
	    },
	
	    sub: function sub(event) {
	      var index = event.target.dataset.index;
	      var arrInfo = this.shoppingCartInfo;
	      if (arrInfo[index].goodSum > 1) {
	        arrInfo[index].goodSum--;
	      }
	      var sum = 0;
	      for (var i = 0; i < arrInfo.length; i++) {
	        sum += parseFloat(arrInfo[i].goodPrice) * parseFloat(arrInfo[i].goodSum);
	      }
	      if (arrInfo.length > 0) {
	        this.hasGood = true;
	      }
	      this.allMoney = sum.toFixed(2);
	      this.shoppingCartInfo = arrInfo;
	      localStorage.setItem('shoppingCartInfo', (0, _stringify2.default)(arrInfo));
	    },
	    add: function add(event) {
	      var index = event.target.dataset.index;
	      var arrInfo = this.shoppingCartInfo;
	      arrInfo[index].goodSum++;
	      var sum = 0;
	      for (var i = 0; i < arrInfo.length; i++) {
	        sum += parseFloat(arrInfo[i].goodPrice) * parseFloat(arrInfo[i].goodSum);
	      }
	      if (arrInfo.length > 0) {
	        this.hasGood = true;
	      }
	      this.allMoney = sum.toFixed(2);
	      this.shoppingCartInfo = arrInfo;
	      localStorage.setItem('shoppingCartInfo', (0, _stringify2.default)(arrInfo));
	    },
	    deleteGood: function deleteGood(event) {
	      var index = event.target.dataset.index;
	      var arrInfo = this.shoppingCartInfo;
	      arrInfo.splice(index, 1);
	      var sum = 0;
	      for (var i = 0; i < arrInfo.length; i++) {
	        sum += parseFloat(arrInfo[i].goodPrice) * parseFloat(arrInfo[i].goodSum);
	      }
	      if (arrInfo.length > 0) {
	        this.hasGood = true;
	      }
	      this.allMoney = sum.toFixed(2);
	      this.shoppingCartInfo = arrInfo;
	      localStorage.setItem('shoppingCartInfo', (0, _stringify2.default)(arrInfo));
	    }
	
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var core = __webpack_require__(35),
	    $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) {
	  // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"shoppingCart-container\">\n  <header>\n    <div class=\"tip\">购物车</div>\n    <div class=\"address\">配送至：北京市昌平区沙河</div>\n  </header>\n  <section id=\"index-scroll\" v-if=\"hasGood\">\n    <div>\n      <div class=\"allChoose\">\n        <img v-bind:src=\"idChecked?'/vue-project-pagoda/images/shoppingCart/selected_ck.png':'/vue-project-pagoda/images/shoppingCart/unselected_ck.png'\" v-on:click=\"changeCheck\" class=\"allCheck\"></span>\n        <span class=\"song\">及时送</span>\n      </div>\n      <div class=\"goodList\" >\n        <ul>\n          <li v-for=\"item in shoppingCartInfo\">\n            <img v-bind:src=\"idChecked?'/vue-project-pagoda/images/shoppingCart/selected_ck.png':'/vue-project-pagoda/images/shoppingCart/unselected_ck.png'\" class=\"check\"></span>\n            <img  v-bind:src=\"item.goodImg\" class=\"goodImg\">\n            <div class=\"info\">\n              <p class=\"goodName\">{{item.goodName}}</p>\n              <!-- <p class=\"song\">及时送</p> -->\n              <p class=\"less\">不少于500g</p>\n              <p class=\"goodPrice\">￥{{item.goodPrice}}</p>\n            </div>\n            <div class=\"todo\">\n              <div class=\"del\" v-on:click=\"deleteGood\">删除</div>\n              <div class=\"change\">\n                <span class=\"sub\" v-on:click=\"sub\" data-index={{$index}}>－</span>\n                <span class=\"num\">{{item.goodSum}}</span>\n                <span class=\"add\" v-on:click=\"add\" data-index={{$index}}>＋</span>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </section>\n  <div class=\"toCar\" v-if=\"hasGood\">\n    <p class=\"money\">合计：<span>￥{{allMoney}}</span><i>(不含运费)</i></p>\n    <p class=\"jiesuan\">结算</p>\n  </div>\n  <div class=\"noGood\" v-if=\"!hasGood\">\n    <div>\n      <img src=\"/vue-project-pagoda/images/shoppingCart/noGood.jpg\" alt=\"\">\n      <p>你的购物车空空哒~</p>\n      <p>快去选几件放进来吧！</p>\n      <div class=\"guangguang\" v-link=\"{path:'/index/list'}\">去逛逛</div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\my.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(22);
	
	var _getters = __webpack_require__(23);
	
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
	      username: "",
	      isLogin: false,
	      menuBox: [{
	        imgUrl: "/vue-project-pagoda/images/my/icon_waitting_pay.png",
	        title: "代付款"
	      }, {
	        imgUrl: "/vue-project-pagoda/images/my/icon_send_goods.png",
	        title: "代发货"
	      }, {
	        imgUrl: "/vue-project-pagoda/images/my/icon_dlieverying.png",
	        title: "配送中"
	      }, {
	        imgUrl: "/vue-project-pagoda/images/my/icon_after_sale.png",
	        title: "售后退款"
	      }]
	    };
	  },
	
	
	  ready: function ready() {
	    this.change(3);
	    if (localStorage.getItem("username")) {
	      this.username = localStorage.getItem("username");
	      this.isLogin = true;
	    }
	  },
	
	  method: {}
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"my-container\">\n  <div class=\"header\">\n    <div v-if=\"isLogin\">\n      <img src=\"/vue-project-pagoda/images/my/img_user_photo_login.png\" alt=\"\">\n      <div class=\"username\">{{username}}</div>\n    </div>\n    <div v-if=\"!isLogin\">\n      <img src=\"/vue-project-pagoda/images/my/img_user_photo_not_login.png\" alt=\"\">\n      <div class=\"login\">登录</div>\n    </div>\n  </div>\n  <div class=\"dingdan\">\n    <div class=\"myDingdan\">\n      <span>我的订单</span>\n      <i>查看全部订单</i>\n    </div>\n    <ul class=\"menuBox\">\n      <li v-for=\"item in menuBox\">\n        <img v-bind:src=\"item.imgUrl\" alt=\"\">\n        <span>{{item.title}}</span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"money\">\n    <ul>\n      <li>\n        <p><span>5</span>元</p>\n        <p>余额</p>\n        <p>去充值<img src=\"/vue-project-pagoda/images/my/icon_arrow_round.png\" alt=\"\"></p>\n      </li>\n      <li>\n        <p><span>0</span>张</p>\n        <p>优惠券</p>\n        <p>去查看<img src=\"/vue-project-pagoda/images/my/icon_arrow_round.png\" alt=\"\"></p>\n      </li>\n    </ul>\n  </div>\n</div>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\detail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(33);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var detailScroll = null;
	
	exports.default = {
	  data: function data() {
	    return {
	      imgUrl: "",
	      goodInfo: {},
	      tuijian: [],
	      shoppingCartInfo: {
	        goodId: "",
	        goodImg: "",
	        goodName: "",
	        goodPrice: "",
	        goodSum: 1
	      },
	      shoppingNum: 0
	    };
	  },
	
	
	  ready: function ready() {
	    var _this = this;
	
	    var index = location.href.split("?")[1];
	    this.$http.get('/vue-project-pagoda/mock/goodInfo.json').then(function (res) {
	      _this.list = res.data;
	      for (var i = 0; i < res.data.length; i++) {
	        if (index === res.data[i].goodId) {
	          _this.goodInfo = res.data[i];
	          _this.imgUrl = res.data[i].imgUrl;
	
	          _this.shoppingCartInfo.goodId = res.data[i].goodId;
	          _this.shoppingCartInfo.goodImg = res.data[i].imgUrl;
	          _this.shoppingCartInfo.goodName = res.data[i].name;
	          _this.shoppingCartInfo.goodPrice = res.data[i].price;
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
	    if (localStorage.getItem("shoppingCartInfo")) {
	      var arrInfo = JSON.parse(localStorage.getItem('shoppingCartInfo'));
	      this.shoppingNum = arrInfo.length;
	    }
	  },
	
	  methods: {
	    addToCar: function addToCar() {
	      if (localStorage.getItem("shoppingCartInfo")) {
	        var arrInfo = JSON.parse(localStorage.getItem('shoppingCartInfo'));
	        var flag = true;
	        for (var i = 0; i < arrInfo.length; i++) {
	          if (this.shoppingCartInfo.goodId == arrInfo[i].goodId) {
	            arrInfo[i].goodSum++;
	            flag = false;
	          }
	        }
	        if (flag) {
	          arrInfo.push(this.shoppingCartInfo);
	          this.shoppingNum++;
	        }
	      } else {
	        var arrInfo = [];
	        arrInfo.push(this.shoppingCartInfo);
	        this.shoppingNum++;
	      }
	      localStorage.setItem('shoppingCartInfo', (0, _stringify2.default)(arrInfo));
	    }
	  }
	
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"detail-box\">\n  <img v-link=\"{path: '/index/list'}\" src=\"/vue-project-pagoda/images/detail/icon_back_hover.png\" class=\"back\" alt=\"\">\n  <img src=\"/vue-project-pagoda/images/detail/icon_share.png\" class=\"share\" alt=\"\">\n  <img v-link=\"{path: '/index'}\" src=\"/vue-project-pagoda/images/detail/icon_home_hover.png\" class=\"home\" alt=\"\">\n  <div class=\"detail-container\" id=\"detail-scroll\">\n    <div>\n      <img v-bind:src=\"imgUrl\" alt=\"\" class=\"showImg\" />\n      <div class=\"info\">\n        <p class=\"goodName\">B级-南丰蜜桔</p>\n        <!-- <p class=\"song\">及时送</p> -->\n        <p class=\"less\">不少于500g</p>\n        <p class=\"goodPrice\">￥7.3</p>\n      </div>\n      <div class=\"maiguo\">\n        购买过该商品的顾客也购买过\n      </div>\n      <ul class=\"tuijianBox\">\n        <li v-for=\"item in tuijian\">\n          <img v-bind:src=\"item.imgUrl\" alt=\"\" />\n          <div class=\"info\">\n            <p class=\"goodName\">B级-南丰蜜桔</p>\n            <!-- <p class=\"song\">及时送</p> -->\n            <p class=\"less\">不少于500g</p>\n            <p class=\"goodPrice\">￥7.3</p>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <footer>\n    <div class=\"shoppingIcon\">\n      <img v-link=\"{path: '/index/shoppingCart'}\" src=\"/vue-project-pagoda/images/detail/shopping_cart.png\" alt=\"\" />\n      <div class=\"num\">{{shoppingNum}}</div>\n    </div>\n    <div v-on:click=\"addToCar\" class=\"addTo\">加入购物车</div>\n  </footer>\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\login.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      username: "",
	      checkUser: "",
	      password: "",
	      checkPwd: ""
	    };
	  },
	
	
	  ready: function ready() {},
	
	  methods: {
	    login: function login() {
	      if (this.username.trim() != "" && this.password.trim() != "") {
	        localStorage.setItem("username", this.username);
	      }
	    }
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"login-container\">\n  <header>\n    <img src=\"/vue-project-pagoda/images/login/iocn_back.png\" alt=\"\">\n    <div>登录</div>\n  </header>\n  <div class=\"imgShow\">\n    <img src=\"/vue-project-pagoda/images/login/login_img_logo.png\" alt=\"\">\n  </div>\n  <div class=\"inputBox\">\n    <p class=\"username\">\n      <img src=\"/vue-project-pagoda/images/login/login_icon_phone_pre.png\" />\n      <input type=\"text\" placeholder=\"请输入手机号\" v-model=\"username\">\n    </p>\n    <span class=\"checkoutUsername\">{{checkUser}}</span>\n    <p class=\"password\">\n      <img src=\"/vue-project-pagoda/images/login/login_icon_code_pre.png\" />\n      <input type=\"password\" placeholder=\"请输入验证码\" v-model=\"password\">\n      <span>获取验证码</span>\n    </p>\n    <span class=\"checkPassword\">{{checkPwd}}</span>\n  </div>\n  <div class=\"loginSubmit\">\n    <button v-on:click=\"login\" v-link=\"{path:'/index/my'}\">登录</button>\n  </div>\n</div>\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _states = __webpack_require__(47);
	
	var _mutations = __webpack_require__(48);
	
	//提供一个初始化的 state 对象，以及一些 mutations：
	exports.default = new Vuex.Store({
	  state: _states.state,
	  mutations: _mutations.mutations
	});

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = exports.state = {
	  tabIndex: 0
	};

/***/ },
/* 48 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map