webpackJsonp([57],{

/***/ "+FHj":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("9FHZ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("f5Nw")
/* template */
var __vue_template__ = __webpack_require__("D69Y")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-178edf36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_net_error.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_net_error.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-178edf36", Component.options)
  } else {
    hotAPI.reload("data-v-178edf36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "+QWH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_index_index_vue__ = __webpack_require__("Qt9A");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_index_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_index_index_vue__);
/*
 * 路由配置器
 * 一定注意：
 * 当你写的组件需要加入，解决文件冲突的时候，不要覆盖或者遗漏！！！
 */

//数字图书馆相关组件
var library = function library() {
  return __webpack_require__.e/* import() */(38).then(__webpack_require__.bind(null, "F6D1"));
};
var books = function books() {
  return __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, "w6kD"));
};
var myBookshelf = function myBookshelf() {
  return __webpack_require__.e/* import() */(28).then(__webpack_require__.bind(null, "tShD"));
};
var hotActivity = function hotActivity() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "TcXW"));
};
var originLibrary = function originLibrary() {
  return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, "Z4w4"));
};
var libraryHome = function libraryHome() {
  return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, "rtiA"));
};
var libraryAll = function libraryAll() {
  return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, "Cn/x"));
};
var digitalLibraryPb = function digitalLibraryPb() {
  return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, "9dkK"));
};
var libraryDetail = function libraryDetail() {
  return __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, "X0+O"));
};
var libraryMy = function libraryMy() {
  return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, "MFjx"));
};
var libraryHelp = function libraryHelp() {
  return __webpack_require__.e/* import() */(44).then(__webpack_require__.bind(null, "4byb"));
};
var bookRecordData = function bookRecordData() {
  return __webpack_require__.e/* import() */(30).then(__webpack_require__.bind(null, "95EK"));
};
var myRecord = function myRecord() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "WGun"));
};
var myListenRecord = function myListenRecord() {
  return __webpack_require__.e/* import() */(32).then(__webpack_require__.bind(null, "NFxa"));
};

//电子贺卡
var greetingCards = function greetingCards() {
  return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "jE5u"));
};
var cardsInfoList = function cardsInfoList() {
  return __webpack_require__.e/* import() */(39).then(__webpack_require__.bind(null, "JWL/"));
};

//星星商店
var starStore = function starStore() {
  return __webpack_require__.e/* import() */(27).then(__webpack_require__.bind(null, "Sv3Z"));
};
//辅修课程
var ktvLanding = function ktvLanding() {
  return __webpack_require__.e/* import() */(41).then(__webpack_require__.bind(null, "X2E3"));
};
var minorCourseCatelog = function minorCourseCatelog() {
  return __webpack_require__.e/* import() */(36).then(__webpack_require__.bind(null, "aJDA"));
};
var minorCourse = function minorCourse() {
  return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "+oq1"));
};
var steamUpload = function steamUpload() {
  return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "2may"));
};
//主修拓展
var majorExtension = function majorExtension() {
  return __webpack_require__.e/* import() */(55).then(__webpack_require__.bind(null, "kcdp"));
};
var majorExtensionMc = function majorExtensionMc() {
  return __webpack_require__.e/* import() */(54).then(__webpack_require__.bind(null, "t0g8"));
};
var extensionVideo = function extensionVideo() {
  return __webpack_require__.e/* import() */(48).then(__webpack_require__.bind(null, "V2GF"));
};
//积分商城
var giftList = function giftList() {
  return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, "hkUa"));
};
var diamondBill = function diamondBill() {
  return __webpack_require__.e/* import() */(29).then(__webpack_require__.bind(null, "Pf6W"));
};
//查看课件
var courseware = function courseware() {
  return __webpack_require__.e/* import() */(47).then(__webpack_require__.bind(null, "2jL+"));
};
//主修课
var majorCourse = function majorCourse() {
  return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, "Ho8S"));
};
var majorCourseCatalog = function majorCourseCatalog() {
  return __webpack_require__.e/* import() */(37).then(__webpack_require__.bind(null, "YvfC"));
};
var eslMajorCourse = function eslMajorCourse() {
  return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, "QoIO"));
};
var escalateMajorCourse = function escalateMajorCourse() {
  return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "VfBI"));
};

//homework
var homework = function homework() {
  return __webpack_require__.e/* import() */(25).then(__webpack_require__.bind(null, "qV2g"));
};
var homeworkHelp = function homeworkHelp() {
  return __webpack_require__.e/* import() */(24).then(__webpack_require__.bind(null, "VmZt"));
};
var homeworkActivity = function homeworkActivity() {
  return __webpack_require__.e/* import() */(33).then(__webpack_require__.bind(null, "fB6v"));
};
//水平自测
var testResult = function testResult() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "y7YP"));
};
var testWork = function testWork() {
  return __webpack_require__.e/* import() */(51).then(__webpack_require__.bind(null, "/GP3"));
};
//视频
var projectVideo = function projectVideo() {
  return __webpack_require__.e/* import() */(42).then(__webpack_require__.bind(null, "p8OJ"));
};
var preVideo = function preVideo() {
  return __webpack_require__.e/* import() */(50).then(__webpack_require__.bind(null, "qj5g"));
};
var preRecord = function preRecord() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "qUOI"));
};
//基础组件：loading，设置，错误页面
var homeworkLoading = function homeworkLoading() {
  return __webpack_require__.e/* import() */(46).then(__webpack_require__.bind(null, "X8de"));
};
var setting = function setting() {
  return __webpack_require__.e/* import() */(49).then(__webpack_require__.bind(null, "4aQ1"));
};
var error404 = function error404() {
  return __webpack_require__.e/* import() */(45).then(__webpack_require__.bind(null, "iJcd"));
};
var error403 = function error403() {
  return __webpack_require__.e/* import() */(56).then(__webpack_require__.bind(null, "iTjR"));
};
//学生评价老师
var evaluateHome = function evaluateHome() {
  return __webpack_require__.e/* import() */(35).then(__webpack_require__.bind(null, "75Jx"));
};
var evaluateFeedback = function evaluateFeedback() {
  return __webpack_require__.e/* import() */(43).then(__webpack_require__.bind(null, "PzTH"));
};

//pd大赛路由
var projectDemo = function projectDemo() {
  return __webpack_require__.e/* import() */(26).then(__webpack_require__.bind(null, "/0Xo"));
};
var projectDetail = function projectDetail() {
  return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "U2eX"));
};
var pdUpload = function pdUpload() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "PBXq"));
};
var workWall = function workWall() {
  return __webpack_require__.e/* import() */(31).then(__webpack_require__.bind(null, "gRnG"));
};
var pdVideo = function pdVideo() {
  return __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, "OVDQ"));
};
var preview = function preview() {
  return __webpack_require__.e/* import() */(40).then(__webpack_require__.bind(null, "C93N"));
};
var demoVideo = function demoVideo() {
  return __webpack_require__.e/* import() */(52).then(__webpack_require__.bind(null, "v1Xk"));
};
//作业汇总页
var workCollect = function workCollect() {
  return __webpack_require__.e/* import() */(34).then(__webpack_require__.bind(null, "I5th"));
};

//PDF 播放器
var pdfView = function pdfView() {
  return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "xh98"));
};

//排行榜
var rankings = function rankings() {
  return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "GXxI"));
};

//Project
var projectEnd = function projectEnd() {
  return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "PsW/"));
};
var projectMain = function projectMain() {
  return __webpack_require__.e/* import() */(53).then(__webpack_require__.bind(null, "Ampb"));
};



/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_0__pages_index_index_vue___default.a,
  title: 'VIPKID学习中心 - VIPKID在线少儿英语',
  meta: { keepAlive: true }
}, {
  path: '/star_store',
  component: starStore,
  title: '星星商店 - VIPKID在线少儿英语'
}, {
  //为ipad使用不要删
  path: '/adventurebase',
  component: starStore,
  title: '星星商店 - VIPKID在线少儿英语'
}, {
  path: '/library/:id',
  component: library,
  title: '数字图书馆 - VIPKID在线少儿英语'
}, {
  path: '/book/:id/:type/:bookCode',
  component: books,
  title: '数字图书馆 - VIPKID在线少儿英语'
}, {
  path: '/myBookshelf',
  component: myBookshelf,
  title: '数字图书馆 - VIPKID在线少儿英语'
}, {
  path: '/digitalLibrary',
  component: libraryHome,
  title: '数字图书馆 - VIPKID在线少儿英语'
}, {
  path: '/digitalLibrary/detail/:id/:bookCode',
  component: libraryDetail,
  title: '图书详情 - VIPKID在线少儿英语'
}, {
  path: '/bookRecordData/:bookCode',
  component: bookRecordData,
  title: '图书录音评分 - VIPKID在线少儿英语'
}, {
  path: '/bookRecord/:id/:type/:bookCode',
  component: myRecord,
  title: '数字图书馆 - VIPKID在线少儿英语'
}, {
  path: '/bookListenRecord/:id/:type/:bookCode',
  component: myListenRecord,
  title: '数字图书馆 - VIPKID在线少儿英语'
}, {
  path: '/island/:planetNum/:minorType',
  component: minorCourse,
  title: '辅修课 - VIPKID在线少儿英语'
}, {
  path: '/steam_upload/:curriculumId/:curriculumVersion/:curriculumType',
  component: steamUpload,
  title: '辅修课课后作业 - VIPKID在线少儿英语'
}, {
  path: '/island/:planetNum/:curriculumId/:curriculumType/:minorType',
  component: minorCourse,
  title: '辅修课 - VIPKID在线少儿英语'
}, {
  path: '/extension',
  component: minorCourseCatelog,
  title: '辅修课程 - VIPKID在线少儿英语'
}, {
  path: '/courseware/:onlineClassId/:lessonNum/:lessonId',
  component: courseware,
  title: '查看课件 - VIPKID在线少儿英语'
}, {
  path: '/major',
  component: majorCourse,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/major_course_catalog',
  component: majorCourseCatalog,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/esl/:majorType/:planetNumber',
  component: eslMajorCourse,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/esl/:majorType/:planetNumber/:curriculumId/:curriculumType',
  component: eslMajorCourse,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/escalate/:majorType/:planetNumber',
  component: escalateMajorCourse,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/escalate/:majorType/:planetNumber/:curriculumId/:curriculumType',
  component: escalateMajorCourse,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/major_extension',
  component: majorExtension,
  title: '主修拓展 - VIPKID在线少儿英语'
}, {
  path: '/major_extension/extension_video/:bizCode',
  component: extensionVideo,
  name: 'majorExtensionPath',
  title: '主修拓展 - VIPKID在线少儿英语'
}, {
  path: '/video/project/:unitId',
  component: projectVideo,
  title: '项目演示 - VIPKID在线少儿英语'
}, {
  path: '/video/pre/:id/:type',
  component: preVideo,
  title: '预习视频 - VIPKID在线少儿英语'
}, {
  path: '/video/pre/:id/:type/:curriculum_version',
  component: preRecord,
  title: '预习视频 - VIPKID在线少儿英语'
}, {
  path: '/major/:majorType/:planetNumber',
  component: majorCourse,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/major/:majorType/:planetNumber/:curriculumId/:curriculumType',
  component: majorCourse,
  title: '主修课程 - VIPKID在线少儿英语'
}, {
  path: '/major_extension_mc',
  component: majorExtensionMc,
  title: '主修拓展 - VIPKID在线少儿英语'
}, {
  path: '/major_extension_mc',
  component: majorExtensionMc,
  title: '主修拓展 - VIPKID在线少儿英语'
}, {
  path: '/setting',
  component: setting,
  title: '设置 - VIPKID在线少儿英语'
}, {
  path: '/homework_loading/:stuId/:lessonId/:type/:curriculumVersion', //1为课前预习 2为课后作业
  component: homeworkLoading,
  title: '作业 - VIPKID在线少儿英语'
}, {
  path: '/gift_exchange',
  component: giftList,
  title: '礼品兑换 - VIPKID在线少儿英语'
}, {
  path: '/diamond_bill',
  component: diamondBill,
  title: '礼品兑换 - VIPKID在线少儿英语'
}, {
  path: '/digitalLibrary',
  component: libraryHome,
  title: '数字图书馆 - VIPKID在线少儿英语'
}, {
  // type为 all 或者 original
  path: '/digitalLibrary/bookList/:type',
  component: libraryAll,
  title: '全部图书 - VIPKID在线少儿英语',
  meta: { keepAlive: true }
}, {
  path: '/old_digitalLibrary/pb',
  component: digitalLibraryPb,
  title: '原版引进 - VIPKID在线少儿英语'
}, {
  path: '/old_digitalLibrary/vo',
  component: originLibrary,
  title: '原创系列 - VIPKID在线少儿英语'
}, {
  path: '/digitalLibrary/my',
  component: libraryMy,
  title: '我的 - VIPKID在线少儿英语',
  meta: { keepAlive: true }
}, {
  path: '/digitalLibrary/help/:type',
  component: libraryHelp,
  title: '帮助 - VIPKID在线少儿英语'
}, {
  path: '/hot_activity',
  component: hotActivity,
  title: "热门活动 - VIPKID在线少儿英语"
}, {
  path: '/digitalLibrary/vo',
  component: originLibrary,
  title: '原创系列 - VIPKID在线少儿英语'
}, {
  path: '/ktv_landing/:level',
  component: ktvLanding,
  title: '冬令营 - VIPKID在线少儿英语'
}, {
  path: '/homework/:studentId/:lessonId/:type', //type=1为课前作业(预习),type=2为课后作业(作业)
  component: homework,
  title: '课后作业 - VIPKID在线少儿英语'
}, {
  path: '/homework/activity/:studentId/:readerCode/:bookId',
  component: homeworkActivity,
  title: '课后作业 - VIPKID在线少儿英语'
}, {
  path: '/homework/help',
  component: homeworkHelp,
  title: '课后作业帮助 - VIPKID在线少儿英语'
},
//进教室+课程回放跳到learning.vipkid.com.cn
{
  path: '/router/learning/*',
  redirect: function redirect(to) {
    var path = to.fullPath.replace("\/router\/learning", "");
    window.location.href = 'http://' + window.location.host.replace(/lc/, 'learning') + path;
  },
  title: 'VIPKID在线少儿英语'
},
//进教室+课程回放跳到 www.vipkid.com.cn
{
  path: '/router/www/*',
  redirect: function redirect(to) {
    var path = to.fullPath.replace("\/router\/www", "");
    window.location.href = 'https://' + window.location.host.replace(/lc/, 'www') + path;
  },
  title: 'VIPKID在线少儿英语'
},
//做2.0作业跳转 nhw.vipkid.com.cn
{
  path: '/router/nhw/*',
  redirect: function redirect(to) {
    var path = to.fullPath.replace("\/router\/nhw", "");
    window.location.href = '//' + window.location.host.replace(/lc/, 'nhw') + path;
  },
  title: 'VIPKID在线少儿英语'
}, {
  path: '/router/edu/*',
  redirect: function redirect(to) {
    var path = to.fullPath.replace("\/router\/edu", "");
    window.location.href = '//' + window.location.host.replace(/lc/, 'edu') + path;
  },
  title: 'VIPKID在线少儿英语'
}, {
  path: '/test_result/:examUuid/:onlineClassId',
  component: testResult,
  title: '测试报告 - VIPKID在线少儿英语'
}, {
  path: '/test_work',
  component: testWork,
  title: '水平自测 - VIPKID在线少儿英语'
}, {
  path: '/403',
  component: error403,
  title: '无权限 - VIPKID在线少儿英语'
}, {
  path: '*',
  component: error404,
  title: '404'
},
//学生评价路由
{
  path: '/evaluate_home/:onlineClassId',
  component: evaluateHome,
  title: '学生评价 - VIPKID在线少儿英语'
}, {
  path: '/evaluate_feedback/:isLike/:teacherName',
  component: evaluateFeedback,
  title: '评价反馈 - VIPKID在线少儿英语'
},
//PD大赛路由
{
  path: '/competition_arena',
  component: projectDemo,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/project_detail/:pdId',
  component: projectDetail,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/pd_upload',
  component: pdUpload,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/pd_upload/:pdId',
  component: pdUpload,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/work_wall/:type/:pdId',
  component: workWall,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/work_wall/:type',
  component: workWall,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/pd_video/:videoId',
  component: pdVideo,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/pd_video/:videoId/:pdId',
  component: pdVideo,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/preview/:videoId/:pdId',
  component: preview,
  title: 'PD大赛 - VIPKID在线少儿英语'
}, {
  path: '/pd_demo_video/:activityId',
  component: demoVideo,
  title: 'PD大赛 - VIPKID在线少儿英语'
},
//作业汇总页
{
  path: '/work_collect',
  component: workCollect,
  title: '资源中心 - VIPKID在线少儿英语'
}, {
  path: '/pdf_view/:pdfUrl',
  component: pdfView,
  title: '复习资料 - VIPKID在线少儿英语'
},
//电子贺卡
{
  path: '/greeting_cards/:teacherId/:cardId',
  component: greetingCards,
  title: "热门活动 - VIPKID在线少儿英语"
}, {
  path: '/greeting_cards',
  component: greetingCards,
  title: "热门活动 - VIPKID在线少儿英语"
}, {
  path: '/cards_info_list',
  component: cardsInfoList,
  title: "热门活动 - VIPKID在线少儿英语"
},
//排行榜
{
  path: '/rankings',
  component: rankings,
  title: '排行榜 - VIPKID在线少儿英语'
},
// Project 主页
{
  path: '/pd_main',
  component: projectMain,
  title: 'Project Main - VIPKID在线少儿英语'
},
// project 详细页
{
  path: '/pd_end',
  component: projectEnd,
  title: 'Project Detial- VIPKID在线少儿英语'
}]);

/***/ }),

/***/ "/fhF":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vk-button"
  }, [(_vm.isNewTab && (_vm.type.indexOf('loading') == -1) && (_vm.type.indexOf('disable') == -1)) ? _c('div', {
    staticClass: "vk-btn",
    class: 'vk-btn-' + _vm.type,
    style: (_vm.icon != '' ? 'padding-left:25px' : ''),
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openNew($event)
      }
    }
  }, [(_vm.icon != '') ? _c('div', {
    staticClass: "icon-img",
    class: _vm.icon
  }) : _vm._e(), _c('span', [_vm._v(_vm._s(_vm.text))])]) : _vm._e(), (!_vm.isNewTab && (_vm.type.indexOf('loading') == -1) && (_vm.type.indexOf('disable') == -1)) ? _c('div', {
    staticClass: "vk-btn",
    class: 'vk-btn-' + _vm.type,
    style: (_vm.icon != '' ? 'padding-left:25px' : ''),
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clickFun($event)
      }
    }
  }, [(_vm.icon != '') ? _c('div', {
    staticClass: "icon-img",
    class: _vm.icon
  }) : _vm._e(), _c('span', [_vm._v(_vm._s(_vm.text))])]) : _vm._e(), (_vm.type.indexOf('disable') > -1 && _vm.type.indexOf('alert') == -1) ? _c('div', {
    staticClass: "vk-btn",
    class: 'vk-btn-' + _vm.type,
    style: (_vm.icon != '' ? 'padding-left:25px' : '')
  }, [(_vm.icon != '') ? _c('div', {
    staticClass: "icon-img",
    class: _vm.icon
  }) : _vm._e(), _c('span', [_vm._v(_vm._s(_vm.text))]), (_vm.type.indexOf('locked') > -1) ? _c('div', {
    staticClass: "icon-img-right"
  }) : _vm._e()]) : _vm._e(), (_vm.type.indexOf('disable') > -1 && _vm.type.indexOf('alert') > -1) ? _c('div', {
    staticClass: "vk-btn",
    class: 'vk-btn-' + _vm.type,
    style: (_vm.icon != '' ? 'padding-left:25px' : ''),
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.popAlert($event)
      }
    }
  }, [(_vm.icon != '') ? _c('div', {
    staticClass: "icon-img",
    class: _vm.icon
  }) : _vm._e(), _c('span', [_vm._v(_vm._s(_vm.text))])]) : _vm._e(), (_vm.type.indexOf('loading') > -1) ? _c('div', {
    staticClass: "vk-btn",
    class: 'vk-btn-' + _vm.type,
    staticStyle: {
      "padding-left": "25px"
    }
  }, [_c('img', {
    staticClass: "icon-loading",
    attrs: {
      "src": __webpack_require__("Rv4Z")
    }
  }), _c('span', [_vm._v(_vm._s(_vm.text))])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b8bef37a", module.exports)
  }
}

/***/ }),

/***/ "/jub":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cookies_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: {
    cardConfig: {
      type: Object,
      default: function _default() {
        return {
          homeworkRight: 0,
          homeworkWrong: 0,
          status: 0
        };
      }
    }
  }
});

/***/ }),

/***/ "/mHg":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("xAQ9")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("d35m")
/* template */
var __vue_template__ = __webpack_require__("dTAD")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e1caf7b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_loading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e1caf7b", Component.options)
  } else {
    hotAPI.reload("data-v-2e1caf7b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "/zyt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/exchange-f04fe116de7e9585b1b7ed63cdf410f4.png";

/***/ }),

/***/ "0421":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "escalate-card"
  }, [(_vm.config.isBlink) ? _c('div', {
    staticClass: "escalate-card-light"
  }) : _vm._e(), (_vm.config.isBlink) ? _c('img', {
    staticClass: "pet-img",
    attrs: {
      "src": _vm.petImgSrc
    }
  }) : _vm._e(), _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "lesson-name"
  }, [_vm._v(_vm._s(_vm.config.mainTitle))]), _c('div', {
    staticClass: "date"
  }, [_c('span', {
    staticClass: "week"
  }, [_vm._v(_vm._s(_vm.weekTime()))]), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.dateTime()))])]), _c('div', {
    ref: "hand",
    staticClass: "hand"
  }, [_c('div', {
    staticClass: "h-black"
  }), _c('div', {
    ref: "handLine",
    staticClass: "h-line"
  }), _c('div', {
    ref: "cardHand",
    staticClass: "h-circle icon-hand-circle",
    on: {
      "click": _vm.handClick,
      "mouseenter": _vm.handHover
    }
  })])]), _c('div', {
    staticClass: "live-course",
    style: ({
      backgroundColor: _vm.currentPanelState == 'face' ? '#ffffff' : '#6ad3c6'
    })
  }, [_c('transition-group', {
    attrs: {
      "enter-active-class": "animated fadeInDown"
    }
  }, [(_vm.currentPanelState == 'face') ? _c('div', {
    key: "1",
    staticClass: "front-face"
  }, [_c('div', {
    staticClass: "mid"
  }, [(_vm.config.cardStyle == 'pre_video') ? [_c('img', {
    staticClass: "pre-video-img",
    attrs: {
      "src": _vm.config.imageInfo.imageUrl
    }
  })] : _vm._e(), (_vm.config.cardStyle == 'classroom') ? _c('classroom', {
    attrs: {
      "classInfo": _vm.config.classInfo
    }
  }) : _vm._e(), (_vm.config.cardStyle == 'flash_card') ? _c('flash-card', {
    attrs: {
      "cardConfig": _vm.config.homeworkInfo
    }
  }) : _vm._e(), (_vm.config.cardStyle == 'homework') ? _c('homework', {
    attrs: {
      "cardConfig": _vm.config.homeworkInfo
    }
  }) : _vm._e()], 2), _c('vk-btn', {
    staticClass: "star-btn",
    attrs: {
      "type": _vm.classBtn,
      "text": _vm.config.bottomButton.buttonText,
      "clickFun": _vm.buttonClick
    }
  }), _c('div', {
    staticClass: "progress"
  }, [_c('vk-progress', {
    attrs: {
      "pps": _vm.pps
    }
  })], 1)], 1) : _vm._e(), (_vm.currentPanelState == 'back') ? _c('div', {
    key: "2",
    staticClass: "back-face"
  }, [_c('back-card', {
    attrs: {
      "config": _vm.config
    }
  })], 1) : _vm._e()])], 1)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-617a35c6", module.exports)
  }
}

/***/ }),

/***/ "06P5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0j0T":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "book_detail_dialog_wrapper",
    class: 'library_dialog_'
  }, [_c('div', {
    staticClass: "library_dialog_mask"
  }), _c('div', {
    staticClass: "top"
  }), _c('div', {
    staticClass: "library_dialog_bg animated bounceInDown"
  }, [_c('div', {
    staticClass: "top-cancel-btn",
    on: {
      "click": _vm.close
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("KQP+")
    }
  })]), _c('div', {
    staticClass: "title-text"
  }, [_c('p', {
    staticClass: "tt-ul"
  }, [_c('span', {
    staticClass: "level"
  }, [_vm._v(_vm._s(_vm.config.level))]), _c('span', {
    staticClass: "unit"
  }, [_vm._v(_vm._s("  " + _vm.config.unit))])]), _c('slide-text', {
    staticClass: "lesson",
    attrs: {
      "text": _vm.config.showName,
      "isAutoSlide": true
    }
  })], 1), _c('div', {
    staticClass: "content_text"
  }, [_c('div', {
    staticClass: "book-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.config.bookCoverResUrl
    }
  })]), _c('div', {
    staticClass: "book-content"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Information")]), _c('div', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.config.bookDescription))]), (_vm.isShowTip) ? _c('div', {
    staticClass: "tip"
  }, [_vm._v("看完绘本才可以玩哦 ~")]) : _vm._e(), _c('div', {
    staticClass: "btns"
  }, [_c('vk-btn', {
    class: _vm.activityState.currentStatus == 1 ? '' : 'begin-btn',
    attrs: {
      "icon": "icon-eye",
      "type": "lg-enable",
      "text": _vm.config.readStatus ? 'Reread' : 'Read',
      "isNewTab": false,
      "clickFun": _vm.begin
    }
  }), _c('div', {
    staticClass: "play-btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showTip($event)
      },
      "mouseleave": _vm.leaveTip
    }
  }, [(_vm.activityState.currentStatus == 2) ? _c('vk-btn', {
    attrs: {
      "icon": "icon-activity",
      "type": "lg-disable-locked",
      "text": "Activity"
    }
  }) : _vm._e()], 1), (_vm.activityState.currentStatus == 3) ? _c('vk-btn', {
    staticClass: "play-btn",
    attrs: {
      "icon": "icon-activity",
      "type": "lg-yellow-enable",
      "text": "Activity",
      "clickFun": _vm.play,
      "clickId": "homepage_btn_play_activity"
    }
  }) : _vm._e(), (_vm.activityState.currentStatus == 4) ? _c('vk-btn', {
    staticClass: "play-btn",
    attrs: {
      "type": "lg-yellow-enable",
      "icon": "icon-activity",
      "text": "Activity",
      "clickFun": _vm.play,
      "clickId": "homepage_btn_replay_activity"
    }
  }) : _vm._e()], 1), (_vm.activityState.currentStatus == 4) ? _c('div', {
    staticClass: "result"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("jtnA")
    }
  }), _c('div', {
    staticClass: "right-num"
  }, [_vm._v(_vm._s(_vm.activityState.rightCount))]), _c('img', {
    attrs: {
      "src": __webpack_require__("3US4")
    }
  }), _c('div', {
    staticClass: "error-num"
  }, [_vm._v(_vm._s(_vm.activityState.wrongCount))])]) : _vm._e()])])])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e61e924", module.exports)
  }
}

/***/ }),

/***/ "0qy4":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("1FjM")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("KMYw")
/* template */
var __vue_template__ = __webpack_require__("ul+u")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-142a121e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/back_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] back_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-142a121e", Component.options)
  } else {
    hotAPI.reload("data-v-142a121e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "1FjM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1x3x":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2Bd/":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("hfWq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("W26G")
/* template */
var __vue_template__ = __webpack_require__("8RDx")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f09ba82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/it_test_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] it_test_dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f09ba82", Component.options)
  } else {
    hotAPI.reload("data-v-2f09ba82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "2Dpi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/net-error-a1e9cb6551cab2362555ef2c228bb3ad.png";

/***/ }),

/***/ "2IaS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2TBd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dragon_js__ = __webpack_require__("mYWi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_course_Course__ = __webpack_require__("JL7M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_course_courseEnum__ = __webpack_require__("VDN5");
//
//
//
//
//
//
//
//
//
//
//
//

//背部卡片映射
//        "backButtonList": [{
//          "buttonText": "预习",
//          "buttonStatus": "HIGH",
//          "buttonFunction": "PRE",
//          "clickid": "esl_pre_video",
//          "buttonExtra": null
//        }, {
//          "buttonText": "查看课件",
//          "buttonStatus": "HIGH",
//          "buttonFunction": "COURSEWARE",
//          "clickid": "esl_courseware",
//          "buttonExtra": null
//        }, {
//          "buttonText": "做作业",
//          "buttonStatus": "GRAY",
//          "buttonFunction": "AFTER",
//          "clickid": "esl_homework",
//          "buttonExtra": null
//        }, {
//          "buttonText": "已下课",
//          "buttonStatus": "GRAY",
//          "buttonFunction": "MAJOR_CLASSROOM_FINISH",
//          "clickid": "esl_enter_classroom",
//          "buttonExtra": null
//        }, {
//          "buttonText": "复习资料",
//          "buttonStatus": "GRAY",
//          "buttonFunction": "PDF",
//          "clickid": "esl_pdf_back",
//          "buttonExtra": null
//        }]







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default.a
  },
  props: ['config'],
  computed: {
    pbButtons: function pbButtons() {
      var bbl = this.config.backButtonList;
      var pbB = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = bbl[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var b = _step.value;

          var o = new Object();
          o.state = __WEBPACK_IMPORTED_MODULE_6__common_course_courseEnum__["a" /* BACK_BUTTON_MAP */][b.buttonStatus];
          o.buttonText = b.buttonText;
          o.btnType = b.buttonFunction;
          o.clickId = b.clickid;
          o.buttonExtra = b.buttonExtra;
          o.buttonStatus = b.buttonStatus;
          pbB.push(o);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return pbB;
    }
  },
  methods: {
    buttonClick: function buttonClick(type, clickId, buttonExtra, buttonStatus) {
      var _this = this;

      return function () {
        __WEBPACK_IMPORTED_MODULE_5__common_course_Course__["a" /* default */].courseButtonClick({
          type: type,
          onlineClassId: _this.config.onlineClassId,
          lessonNum: _this.config.lessonNumber,
          lessonId: _this.config.lessonId,
          clickId: clickId + "_back",
          courseId: _this.config.courseId,
          curriculumVersion: _this.config.curriculumVersion,
          buttonExtra: buttonExtra,
          bookType: _this.config.bookType,
          buttonStatus: buttonStatus
        });
      };
    },
    alertText: function alertText(buttonExtra) {

      if (buttonExtra && buttonExtra.alertText) {
        return buttonExtra.alertText;
      } else {
        return "";
      }
    }
  }
});

/***/ }),

/***/ "2Y8e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  //target
  props: {
    //类型包括：大按钮隐藏：lg-hide ，大按钮可用： lg-enable， 小按钮：sl， 白线：white-line
    type: {
      require: false,
      type: String,
      default: "lg-hide"
    },
    text: {
      require: false,
      type: String,
      default: "未定义"
    },
    link: {
      require: false,
      type: String,
      default: "#"
    },
    isNewTab: {
      require: false,
      type: Boolean,
      default: false
    },
    icon: {
      require: false,
      type: String,
      default: ""
    },
    //如果要使用该属性 请将isNewTab设为false
    clickFun: {
      require: false,
      type: Function,
      default: function _default() {
        this.goToLink();
      }
    },
    clickId: {
      require: false,
      type: String,
      default: "click"
    },
    alertText: {
      require: false,
      type: String,
      default: ""
    }
  },
  methods: {
    openNew: function openNew() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_' + this.clickId
      });
      this.$playSound("click");
      window.open(this.link);
    },
    goToLink: function goToLink() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_' + this.clickId
      });
      this.$playSound("click");
      this.$router.push(this.link);
    },
    popAlert: function popAlert() {
      this.$showToast(this.alertText);
    }
  }
});

/***/ }),

/***/ "2dln":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("lVuj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("krJv")
/* template */
var __vue_template__ = __webpack_require__("aXUW")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-22778c10"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/it_test_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] it_test_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22778c10", Component.options)
  } else {
    hotAPI.reload("data-v-22778c10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "2vMv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3+Rs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/bubblebg-2@2x-70668fb6162526158915b80077852164.png";

/***/ }),

/***/ "39ur":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  methods: {
    leaveAnimation: function leaveAnimation(e, done) {
      e.className = e.className.replace("fadeInRight", "bounceOutRight");
      setTimeout(function () {
        done();
      }, 500);
    }
  }
});

/***/ }),

/***/ "3US4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/card_error_enable-6cea573c0ff2d680858ec73b05dc61a5.png";

/***/ }),

/***/ "4V3x":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4h6+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4lKH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4uCU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vk_loading_vue__ = __webpack_require__("/mHg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vk_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vk_loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_velocity_animate__);
/**
 * Created by lihongbin on 2017/7/25.
 * loading插件
 */




/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    var toastTpl = Vue.extend(__WEBPACK_IMPORTED_MODULE_0__vk_loading_vue___default.a);
    var temp = [];
    Vue.directive('vkLoading', {
      bind: function bind(el, binding, vnode, oldVnode) {
        var vm = new toastTpl({
          propsData: {
            type: 'div'
          }
        });
        var loads = {
          el: el,
          loadDiv: vm.$mount().$el
        };
        temp.push(loads);
        el.appendChild(loads.loadDiv);
      },
      unbind: function unbind(el, binding, vnode, oldVnode) {
        var v = __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].arrayFind(temp, function (item) {
          return item.el === el;
        });
        el.removeChild(v.loadDiv);
      },
      update: function update(el, binding, vnode, oldVnode) {
        var v = __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].arrayFind(temp, function (item) {
          return item.el === el;
        });
        if (binding.value) {
          v.loadDiv.style.display = "block";
        } else {
          v.loadDiv.style.display = "none";
        }
      }
    });
    Vue.prototype.$LoadingShow = function () {
      var load = document.getElementById("learningLoading");
      load.style.display = "block";
    };
    Vue.prototype.$LoadingClose = function () {
      var load = document.getElementById("learningLoading");
      __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default.a(load, {
        opacity: 0
      }, {
        duration: 1000,
        complete: function complete() {
          load.style.display = "none";
          load.style.opacity = 1;
        }
      });
    };
  }
});

/***/ }),

/***/ "4xnn":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("uQa8")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("yX+B")
/* template */
var __vue_template__ = __webpack_require__("VRBV")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f675c030"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/pre_video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pre_video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f675c030", Component.options)
  } else {
    hotAPI.reload("data-v-f675c030", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "5Ymm":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("4V3x")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("DI8/")
/* template */
var __vue_template__ = __webpack_require__("vygL")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68bf3c28"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/cards.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cards.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68bf3c28", Component.options)
  } else {
    hotAPI.reload("data-v-68bf3c28", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "5uAP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_video_vue__ = __webpack_require__("xNDl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_video_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_video_vue__);
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: [
  //videoConfig 需要构造的字段：'videoSrc','autoPlay','materialId','source','title','closeVideoFun'
  'videoConfig'],
  components: {
    overVideo: __WEBPACK_IMPORTED_MODULE_0__common_vk_video_vue___default.a
  },
  mounted: function mounted() {},

  methods: {
    closeVideoFun: function closeVideoFun() {
      this.$videoModelClose();
    }
  }
});

/***/ }),

/***/ "68/5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6SSo":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enterActiveClass": "animated fadeIn",
      "leaveActiveClass": "animated fadeOut"
    }
  }, [_c('div', {
    staticClass: "test_result_dialog_wrapper"
  }, [_c('div', {
    staticClass: "library_dialog_mask"
  }), _c('div', {
    staticClass: "library_dialog_bg"
  }, [_c('div', {
    staticClass: "top-cancel-btn",
    on: {
      "click": _vm.cancelBtn
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("KQP+")
    }
  })]), _c('p', {
    staticClass: "title-text"
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: "content_text"
  }, [_c('div', {
    staticClass: "ct-th"
  }, [_c('div', {
    staticClass: "ctt-1"
  }, [_vm._v("测试结果")]), _c('div', {
    staticClass: "ctt-2"
  }, [_vm._v("说明")]), _c('div', {
    staticClass: "ctt-3"
  }, [_vm._v("测试日期")])]), _c('div', {
    staticClass: "ct-con"
  }, [_c('div', {
    staticClass: "ct-con-inner"
  }, [_c('table', {
    staticClass: "ct-table"
  }, _vm._l((_vm.contents), function(content) {
    return _c('tr', [_c('td', {
      staticClass: "ctt-td-1",
      attrs: {
        "width": "100px"
      }
    }, [_vm._v(_vm._s(content.examLevel))]), _c('td', {
      staticClass: "ctt-td-2",
      attrs: {
        "width": "460px"
      }
    }, [_vm._v(_vm._s(content.examCommentDescParant))]), _c('td', {
      staticClass: "ctt-td-3",
      attrs: {
        "width": "140px"
      }
    }, [_vm._v(_vm._s(_vm.dateForm(content.endDatetime)))])])
  }))])])])])])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e2cd6b9", module.exports)
  }
}

/***/ }),

/***/ "6YY+":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("rb49")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("pmXC")
/* template */
var __vue_template__ = __webpack_require__("Wk9D")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c7047b56"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/reader_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] reader_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c7047b56", Component.options)
  } else {
    hotAPI.reload("data-v-c7047b56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "6y9l":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("U3gk")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("PEcf")
/* template */
var __vue_template__ = __webpack_require__("NagW")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67ebeda0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/newcard/trial_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] trial_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67ebeda0", Component.options)
  } else {
    hotAPI.reload("data-v-67ebeda0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "84Mi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "87G5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8MWz":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("L4ca")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("KShx")
/* template */
var __vue_template__ = __webpack_require__("z1rB")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-574e7ff9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/honor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] honor.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-574e7ff9", Component.options)
  } else {
    hotAPI.reload("data-v-574e7ff9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "8RDx":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isThisDialogShow) ? _c('div', {
    staticClass: "vk-dialog-container"
  }, [_c('div', {
    staticClass: "mirror"
  }), _c('div', {
    staticClass: "dialog-bg"
  }, [_c('img', {
    staticClass: "it-test-close-btn",
    attrs: {
      "src": __webpack_require__("HL3q")
    },
    on: {
      "click": _vm.config.closeDialog
    }
  }), _c('div', {
    staticClass: "dialog-title"
  }, [_vm._v(_vm._s(_vm.config.title))]), _c('div', {
    staticClass: "white-board"
  }, [_c('div', {
    staticClass: "dialog-content"
  }, [_c('div', {
    staticClass: "placeholder"
  }), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.config.text)
    }
  }), _c('img', {
    staticClass: "it-test-icon",
    attrs: {
      "src": __webpack_require__("elPM")
    }
  }), _c('img', {
    staticClass: "it-test-icon it-test-middle-icon",
    attrs: {
      "src": __webpack_require__("KMCw")
    }
  }), _c('img', {
    staticClass: "it-test-icon",
    attrs: {
      "src": __webpack_require__("OzRm")
    }
  })]), _c('vk-btn', {
    staticClass: "it-test-btn",
    attrs: {
      "type": 'lg-enable',
      "text": _vm.config.btnText,
      "clickFun": _vm.config.enter
    }
  })], 1)])]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f09ba82", module.exports)
  }
}

/***/ }),

/***/ "8T5Q":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "work-content"
  }, [(_vm.cardConfig.status == 0) ? [_c('div', {
    staticClass: "work-img work-img-disable"
  }), _vm._m(0)] : _vm._e(), (_vm.cardConfig.status == 1) ? [_c('div', {
    staticClass: "work-img work-img-enable"
  }), _c('div', {
    staticClass: "work-state"
  }, [_c('div', {
    staticClass: "work-state-left"
  }, [_c('div', {
    staticClass: "ws-right"
  }, [_vm._v(_vm._s(_vm.cardConfig.homeworkRight))]), _c('div', {
    staticClass: "icon-green-right"
  })]), _c('div', {
    staticClass: "work-state-right"
  }, [_c('div', {
    staticClass: "icon-green-error"
  }), _c('div', {
    staticClass: "ws-error"
  }, [_vm._v(_vm._s(_vm.cardConfig.homeworkWrong))])])])] : _vm._e()], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "work-state work-state-disable"
  }, [_c('div', {
    staticClass: "work-state-left"
  }, [_c('div', {
    staticClass: "ws-right"
  }, [_vm._v("-")]), _c('div', {
    staticClass: "icon-gray-right"
  })]), _c('div', {
    staticClass: "work-state-right"
  }, [_c('div', {
    staticClass: "icon-gray-error"
  }), _c('div', {
    staticClass: "ws-error"
  }, [_vm._v("-")])])])
}]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ea74a892", module.exports)
  }
}

/***/ }),

/***/ "9/10":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-back"
  }, [_c('div', {
    staticClass: "circle circle-1"
  }), _c('div', {
    staticClass: "circle circle-2"
  }), _c('div', {
    staticClass: "circle circle-3"
  }), _c('div', {
    staticClass: "btns"
  }, [_vm._l((_vm.pbButtons), function(pbButton, index) {
    return [_c('vk-btn', {
      key: index,
      staticClass: "animated fadeInDown pb-btn",
      style: ('animation-delay:' + (index * 100) / 1000 + 's'),
      attrs: {
        "type": 'white-line-' + pbButton.state,
        "text": pbButton.buttonText,
        "clickFun": _vm.buttonClick(pbButton.btnType, pbButton.clickId, pbButton.buttonExtra, pbButton.buttonStatus),
        "alertText": _vm.alertText(pbButton.buttonExtra)
      }
    })]
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a77ff31", module.exports)
  }
}

/***/ }),

/***/ "9FHZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9qgI":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

(function(window) {
	"use strict";
	/***************
	 Setup
	 ***************/

	/* If jQuery is already loaded, there's no point in loading this shim. */
	if (window.jQuery) {
		return;
	}

	/* jQuery base. */
	var $ = function(selector, context) {
		return new $.fn.init(selector, context);
	};

	/********************
	 Private Methods
	 ********************/

	/* jQuery */
	$.isWindow = function(obj) {
		/* jshint eqeqeq: false */
		return obj && obj === obj.window;
	};

	/* jQuery */
	$.type = function(obj) {
		if (!obj) {
			return obj + "";
		}

		return typeof obj === "object" || typeof obj === "function" ?
				class2type[toString.call(obj)] || "object" :
				typeof obj;
	};

	/* jQuery */
	$.isArray = Array.isArray || function(obj) {
		return $.type(obj) === "array";
	};

	/* jQuery */
	function isArraylike(obj) {
		var length = obj.length,
				type = $.type(obj);

		if (type === "function" || $.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	/***************
	 $ Methods
	 ***************/

	/* jQuery: Support removed for IE<9. */
	$.isPlainObject = function(obj) {
		var key;

		if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
			return false;
		}

		try {
			if (obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}
		} catch (e) {
			return false;
		}

		for (key in obj) {
		}

		return key === undefined || hasOwn.call(obj, key);
	};

	/* jQuery */
	$.each = function(obj, callback, args) {
		var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike(obj);

		if (args) {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			}

		} else {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			}
		}

		return obj;
	};

	/* Custom */
	$.data = function(node, key, value) {
		/* $.getData() */
		if (value === undefined) {
			var getId = node[$.expando],
					store = getId && cache[getId];

			if (key === undefined) {
				return store;
			} else if (store) {
				if (key in store) {
					return store[key];
				}
			}
			/* $.setData() */
		} else if (key !== undefined) {
			var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

			cache[setId] = cache[setId] || {};
			cache[setId][key] = value;

			return value;
		}
	};

	/* Custom */
	$.removeData = function(node, keys) {
		var id = node[$.expando],
				store = id && cache[id];

		if (store) {
			// Cleanup the entire store if no keys are provided.
			if (!keys) {
				delete cache[id];
			} else {
				$.each(keys, function(_, key) {
					delete store[key];
				});
			}
		}
	};

	/* jQuery */
	$.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length,
				deep = false;

		if (typeof target === "boolean") {
			deep = target;

			target = arguments[i] || {};
			i++;
		}

		if (typeof target !== "object" && $.type(target) !== "function") {
			target = {};
		}

		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			if ((options = arguments[i])) {
				for (name in options) {
					if (!options.hasOwnProperty(name)) {
						continue;
					}
					src = target[name];
					copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $.isArray(src) ? src : [];

						} else {
							clone = src && $.isPlainObject(src) ? src : {};
						}

						target[name] = $.extend(deep, clone, copy);

					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		return target;
	};

	/* jQuery 1.4.3 */
	$.queue = function(elem, type, data) {
		function $makeArray(arr, results) {
			var ret = results || [];

			if (arr) {
				if (isArraylike(Object(arr))) {
					/* $.merge */
					(function(first, second) {
						var len = +second.length,
								j = 0,
								i = first.length;

						while (j < len) {
							first[i++] = second[j++];
						}

						if (len !== len) {
							while (second[j] !== undefined) {
								first[i++] = second[j++];
							}
						}

						first.length = i;

						return first;
					})(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					[].push.call(ret, arr);
				}
			}

			return ret;
		}

		if (!elem) {
			return;
		}

		type = (type || "fx") + "queue";

		var q = $.data(elem, type);

		if (!data) {
			return q || [];
		}

		if (!q || $.isArray(data)) {
			q = $.data(elem, type, $makeArray(data));
		} else {
			q.push(data);
		}

		return q;
	};

	/* jQuery 1.4.3 */
	$.dequeue = function(elems, type) {
		/* Custom: Embed element iteration. */
		$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
			type = type || "fx";

			var queue = $.queue(elem, type),
					fn = queue.shift();

			if (fn === "inprogress") {
				fn = queue.shift();
			}

			if (fn) {
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				fn.call(elem, function() {
					$.dequeue(elem, type);
				});
			}
		});
	};

	/******************
	 $.fn Methods
	 ******************/

	/* jQuery */
	$.fn = $.prototype = {
		init: function(selector) {
			/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
			if (selector.nodeType) {
				this[0] = selector;

				return this;
			} else {
				throw new Error("Not a DOM node.");
			}
		},
		offset: function() {
			/* jQuery altered code: Dropped disconnected DOM node checking. */
			var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};

			return {
				top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
				left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
			};
		},
		position: function() {
			/* jQuery */
			function offsetParentFn(elem) {
				var offsetParent = elem.offsetParent;

				while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || document;
			}

			/* Zepto */
			var elem = this[0],
					offsetParent = offsetParentFn(elem),
					offset = this.offset(),
					parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();

			offset.top -= parseFloat(elem.style.marginTop) || 0;
			offset.left -= parseFloat(elem.style.marginLeft) || 0;

			if (offsetParent.style) {
				parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
				parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
			}

			return {
				top: offset.top - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
	};

	/**********************
	 Private Variables
	 **********************/

	/* For $.data() */
	var cache = {};
	$.expando = "velocity" + (new Date().getTime());
	$.uuid = 0;

	/* For $.queue() */
	var class2type = {},
			hasOwn = class2type.hasOwnProperty,
			toString = class2type.toString;

	var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	for (var i = 0; i < types.length; i++) {
		class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	}

	/* Makes $(node) possible, without having to call init. */
	$.fn.init.prototype = $.fn;

	/* Globalize Velocity onto the window, and assign its Utilities property. */
	window.Velocity = {Utilities: $};
})(window);

/******************
 Velocity.js
 ******************/

(function(factory) {
	"use strict";
	/* CommonJS module. */
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory();
		/* AMD module. */
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		/* Browser globals. */
	} else {
		factory();
	}
}(function() {
	"use strict";
	return function(global, window, document, undefined) {

		/***************
		 Summary
		 ***************/

		/*
		 - CSS: CSS stack that works independently from the rest of Velocity.
		 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
		 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
		 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
		 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
		 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
		 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
		 - completeCall(): Handles the cleanup process for each Velocity call.
		 */

		/*********************
		 Helper Functions
		 *********************/

		/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
		var IE = (function() {
			if (document.documentMode) {
				return document.documentMode;
			} else {
				for (var i = 7; i > 4; i--) {
					var div = document.createElement("div");

					div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

					if (div.getElementsByTagName("span").length) {
						div = null;

						return i;
					}
				}
			}

			return undefined;
		})();

		/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
		var rAFShim = (function() {
			var timeLast = 0;

			return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
				var timeCurrent = (new Date()).getTime(),
						timeDelta;

				/* Dynamically set delay on a per-tick basis to match 60fps. */
				/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
				timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
				timeLast = timeCurrent + timeDelta;

				return setTimeout(function() {
					callback(timeCurrent + timeDelta);
				}, timeDelta);
			};
		})();

		var performance = (function() {
			var perf = window.performance || {};

			if (typeof perf.now !== "function") {
				var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();

				perf.now = function() {
					return (new Date()).getTime() - nowOffset;
				};
			}
			return perf;
		})();

		/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
		function compactSparseArray(array) {
			var index = -1,
					length = array ? array.length : 0,
					result = [];

			while (++index < length) {
				var value = array[index];

				if (value) {
					result.push(value);
				}
			}

			return result;
		}

		/**
		 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
		 * (technically, since host objects have been implementation-dependent,
		 * at least before ES2015, IE hasn't needed to work this way).
		 * Also works on strings, fixes IE < 9 to allow an explicit undefined
		 * for the 2nd argument (as in Firefox), and prevents errors when
		 * called on other DOM objects.
		 */
		var _slice = (function() {
			var slice = Array.prototype.slice;

			try {
				// Can't be used with DOM elements in IE < 9
				slice.call(document.documentElement);
				return slice;
			} catch (e) { // Fails in IE < 9

				// This will work for genuine arrays, array-like objects, 
				// NamedNodeMap (attributes, entities, notations),
				// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
				// and will not fail on other DOM objects (as do DOM elements in IE < 9)
				return function(begin, end) {
					var len = this.length;

					if (typeof begin !== "number") {
						begin = 0;
					}
					// IE < 9 gets unhappy with an undefined end argument
					if (typeof end !== "number") {
						end = len;
					}
					// For native Array objects, we use the native slice function
					if (this.slice) {
						return slice.call(this, begin, end);
					}
					// For array like object we handle it ourselves.
					var i,
							cloned = [],
							// Handle negative value for "begin"
							start = (begin >= 0) ? begin : Math.max(0, len + begin),
							// Handle negative value for "end"
							upTo = end < 0 ? len + end : Math.min(end, len),
							// Actual expected size of the slice
							size = upTo - start;

					if (size > 0) {
						cloned = new Array(size);
						if (this.charAt) {
							for (i = 0; i < size; i++) {
								cloned[i] = this.charAt(start + i);
							}
						} else {
							for (i = 0; i < size; i++) {
								cloned[i] = this[start + i];
							}
						}
					}
					return cloned;
				};
			}
		})();

		/* .indexOf doesn't exist in IE<9 */
		var _inArray = (function() {
			if (Array.prototype.includes) {
				return function(arr, val) {
					return arr.includes(val);
				};
			}
			if (Array.prototype.indexOf) {
				return function(arr, val) {
					return arr.indexOf(val) >= 0;
				};
			}
			return function(arr, val) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] === val) {
						return true;
					}
				}
				return false;
			};
		});

		function sanitizeElements(elements) {
			/* Unwrap jQuery/Zepto objects. */
			if (Type.isWrapped(elements)) {
				elements = _slice.call(elements);
				/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
			} else if (Type.isNode(elements)) {
				elements = [elements];
			}

			return elements;
		}

		var Type = {
			isNumber: function(variable) {
				return (typeof variable === "number");
			},
			isString: function(variable) {
				return (typeof variable === "string");
			},
			isArray: Array.isArray || function(variable) {
				return Object.prototype.toString.call(variable) === "[object Array]";
			},
			isFunction: function(variable) {
				return Object.prototype.toString.call(variable) === "[object Function]";
			},
			isNode: function(variable) {
				return variable && variable.nodeType;
			},
			/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
			/* NOTE: HTMLFormElements also have a length. */
			isWrapped: function(variable) {
				return variable
						&& variable !== window
						&& Type.isNumber(variable.length)
						&& !Type.isString(variable)
						&& !Type.isFunction(variable)
						&& !Type.isNode(variable)
						&& (variable.length === 0 || Type.isNode(variable[0]));
			},
			isSVG: function(variable) {
				return window.SVGElement && (variable instanceof window.SVGElement);
			},
			isEmptyObject: function(variable) {
				for (var name in variable) {
					if (variable.hasOwnProperty(name)) {
						return false;
					}
				}

				return true;
			}
		};

		/*****************
		 Dependencies
		 *****************/

		var $,
				isJQuery = false;

		if (global.fn && global.fn.jquery) {
			$ = global;
			isJQuery = true;
		} else {
			$ = window.Velocity.Utilities;
		}

		if (IE <= 8 && !isJQuery) {
			throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		} else if (IE <= 7) {
			/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
			jQuery.fn.velocity = jQuery.fn.animate;

			/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
			return;
		}

		/*****************
		 Constants
		 *****************/

		var DURATION_DEFAULT = 400,
				EASING_DEFAULT = "swing";

		/*************
		 State
		 *************/

		var Velocity = {
			/* Container for page-wide Velocity state data. */
			State: {
				/* Detect mobile devices to determine if mobileHA should be turned on. */
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
				isAndroid: /Android/i.test(navigator.userAgent),
				isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
				isChrome: window.chrome,
				isFirefox: /Firefox/i.test(navigator.userAgent),
				/* Create a cached element for re-use when checking for CSS property prefixes. */
				prefixElement: document.createElement("div"),
				/* Cache every prefix match to avoid repeating lookups. */
				prefixMatches: {},
				/* Cache the anchor used for animating window scrolling. */
				scrollAnchor: null,
				/* Cache the browser-specific property names associated with the scroll anchor. */
				scrollPropertyLeft: null,
				scrollPropertyTop: null,
				/* Keep track of whether our RAF tick is running. */
				isTicking: false,
				/* Container for every in-progress call to Velocity. */
				calls: [],
				delayedElements: {
					count: 0
				}
			},
			/* Velocity's custom CSS stack. Made global for unit testing. */
			CSS: {/* Defined below. */},
			/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
			Utilities: $,
			/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
			Redirects: {/* Manually registered by the user. */},
			Easings: {/* Defined below. */},
			/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
			Promise: window.Promise,
			/* Velocity option defaults, which can be overriden by the user. */
			defaults: {
				queue: "",
				duration: DURATION_DEFAULT,
				easing: EASING_DEFAULT,
				begin: undefined,
				complete: undefined,
				progress: undefined,
				display: undefined,
				visibility: undefined,
				loop: false,
				delay: false,
				mobileHA: true,
				/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
				_cacheValues: true,
				/* Advanced: Set to false if the promise should always resolve on empty element lists. */
				promiseRejectEmpty: true
			},
			/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
			init: function(element) {
				$.data(element, "velocity", {
					/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
					isSVG: Type.isSVG(element),
					/* Keep track of whether the element is currently being animated by Velocity.
					 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
					isAnimating: false,
					/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					computedStyle: null,
					/* Tween data is cached for each animation on the element so that data can be passed across calls --
					 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
					tweensContainer: null,
					/* The full root property values of each CSS hook being animated on this element are cached so that:
					 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
					 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
					rootPropertyValueCache: {},
					/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
					transformCache: {}
				});
			},
			/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
			hook: null, /* Defined below. */
			/* Velocity-wide animation time remapping for testing purposes. */
			mock: false,
			version: {major: 1, minor: 5, patch: 0},
			/* Set to 1 or 2 (most verbose) to output debug info to console. */
			debug: false,
			/* Use rAF high resolution timestamp when available */
			timestamp: true,
			/* Pause all animations */
			pauseAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to paused */
						activeCall[5] = {
							resume: false
						};
					}
				});

				/* Pause timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					pauseDelayOnElement(element, currentTime);
				});
			},
			/* Resume all animations */
			resumeAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to resumed if it was paused */
						if (activeCall[5]) {
							activeCall[5].resume = true;
						}
					}
				});
				/* Resume timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					resumeDelayOnElement(element, currentTime);
				});
			}
		};

		/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
		if (window.pageYOffset !== undefined) {
			Velocity.State.scrollAnchor = window;
			Velocity.State.scrollPropertyLeft = "pageXOffset";
			Velocity.State.scrollPropertyTop = "pageYOffset";
		} else {
			Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
			Velocity.State.scrollPropertyLeft = "scrollLeft";
			Velocity.State.scrollPropertyTop = "scrollTop";
		}

		/* Shorthand alias for jQuery's $.data() utility. */
		function Data(element) {
			/* Hardcode a reference to the plugin name. */
			var response = $.data(element, "velocity");

			/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
			return response === null ? undefined : response;
		}

		/**************
		 Delay Timer
		 **************/

		function pauseDelayOnElement(element, currentTime) {
			/* Check for any delay timers, and pause the set timeouts (while preserving time data)
			 to be resumed when the "resume" command is issued */
			var data = Data(element);
			if (data && data.delayTimer && !data.delayPaused) {
				data.delayRemaining = data.delay - currentTime + data.delayBegin;
				data.delayPaused = true;
				clearTimeout(data.delayTimer.setTimeout);
			}
		}

		function resumeDelayOnElement(element, currentTime) {
			/* Check for any paused timers and resume */
			var data = Data(element);
			if (data && data.delayTimer && data.delayPaused) {
				/* If the element was mid-delay, re initiate the timeout with the remaining delay */
				data.delayPaused = false;
				data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
			}
		}



		/**************
		 Easing
		 **************/

		/* Step easing generator. */
		function generateStep(steps) {
			return function(p) {
				return Math.round(p * steps) * (1 / steps);
			};
		}

		/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		function generateBezier(mX1, mY1, mX2, mY2) {
			var NEWTON_ITERATIONS = 4,
					NEWTON_MIN_SLOPE = 0.001,
					SUBDIVISION_PRECISION = 0.0000001,
					SUBDIVISION_MAX_ITERATIONS = 10,
					kSplineTableSize = 11,
					kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
					float32ArraySupported = "Float32Array" in window;

			/* Must contain four arguments. */
			if (arguments.length !== 4) {
				return false;
			}

			/* Arguments must be numbers. */
			for (var i = 0; i < 4; ++i) {
				if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
					return false;
				}
			}

			/* X values must be in the [0, 1] range. */
			mX1 = Math.min(mX1, 1);
			mX2 = Math.min(mX2, 1);
			mX1 = Math.max(mX1, 0);
			mX2 = Math.max(mX2, 0);

			var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

			function A(aA1, aA2) {
				return 1.0 - 3.0 * aA2 + 3.0 * aA1;
			}
			function B(aA1, aA2) {
				return 3.0 * aA2 - 6.0 * aA1;
			}
			function C(aA1) {
				return 3.0 * aA1;
			}

			function calcBezier(aT, aA1, aA2) {
				return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
			}

			function getSlope(aT, aA1, aA2) {
				return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
			}

			function newtonRaphsonIterate(aX, aGuessT) {
				for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
					var currentSlope = getSlope(aGuessT, mX1, mX2);

					if (currentSlope === 0.0) {
						return aGuessT;
					}

					var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
					aGuessT -= currentX / currentSlope;
				}

				return aGuessT;
			}

			function calcSampleValues() {
				for (var i = 0; i < kSplineTableSize; ++i) {
					mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
				}
			}

			function binarySubdivide(aX, aA, aB) {
				var currentX, currentT, i = 0;

				do {
					currentT = aA + (aB - aA) / 2.0;
					currentX = calcBezier(currentT, mX1, mX2) - aX;
					if (currentX > 0.0) {
						aB = currentT;
					} else {
						aA = currentT;
					}
				} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

				return currentT;
			}

			function getTForX(aX) {
				var intervalStart = 0.0,
						currentSample = 1,
						lastSample = kSplineTableSize - 1;

				for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
					intervalStart += kSampleStepSize;
				}

				--currentSample;

				var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
						guessForT = intervalStart + dist * kSampleStepSize,
						initialSlope = getSlope(guessForT, mX1, mX2);

				if (initialSlope >= NEWTON_MIN_SLOPE) {
					return newtonRaphsonIterate(aX, guessForT);
				} else if (initialSlope === 0.0) {
					return guessForT;
				} else {
					return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
				}
			}

			var _precomputed = false;

			function precompute() {
				_precomputed = true;
				if (mX1 !== mY1 || mX2 !== mY2) {
					calcSampleValues();
				}
			}

			var f = function(aX) {
				if (!_precomputed) {
					precompute();
				}
				if (mX1 === mY1 && mX2 === mY2) {
					return aX;
				}
				if (aX === 0) {
					return 0;
				}
				if (aX === 1) {
					return 1;
				}

				return calcBezier(getTForX(aX), mY1, mY2);
			};

			f.getControlPoints = function() {
				return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
			};

			var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
			f.toString = function() {
				return str;
			};

			return f;
		}

		/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
		var generateSpringRK4 = (function() {
			function springAccelerationForState(state) {
				return (-state.tension * state.x) - (state.friction * state.v);
			}

			function springEvaluateStateWithDerivative(initialState, dt, derivative) {
				var state = {
					x: initialState.x + derivative.dx * dt,
					v: initialState.v + derivative.dv * dt,
					tension: initialState.tension,
					friction: initialState.friction
				};

				return {dx: state.v, dv: springAccelerationForState(state)};
			}

			function springIntegrateState(state, dt) {
				var a = {
					dx: state.v,
					dv: springAccelerationForState(state)
				},
						b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
						c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
						d = springEvaluateStateWithDerivative(state, dt, c),
						dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
						dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

				state.x = state.x + dxdt * dt;
				state.v = state.v + dvdt * dt;

				return state;
			}

			return function springRK4Factory(tension, friction, duration) {

				var initState = {
					x: -1,
					v: 0,
					tension: null,
					friction: null
				},
						path = [0],
						time_lapsed = 0,
						tolerance = 1 / 10000,
						DT = 16 / 1000,
						have_duration, dt, last_state;

				tension = parseFloat(tension) || 500;
				friction = parseFloat(friction) || 20;
				duration = duration || null;

				initState.tension = tension;
				initState.friction = friction;

				have_duration = duration !== null;

				/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
				if (have_duration) {
					/* Run the simulation without a duration. */
					time_lapsed = springRK4Factory(tension, friction);
					/* Compute the adjusted time delta. */
					dt = time_lapsed / duration * DT;
				} else {
					dt = DT;
				}

				while (true) {
					/* Next/step function .*/
					last_state = springIntegrateState(last_state || initState, dt);
					/* Store the position. */
					path.push(1 + last_state.x);
					time_lapsed += 16;
					/* If the change threshold is reached, break. */
					if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
						break;
					}
				}

				/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
				 computed path and returns a snapshot of the position according to a given percentComplete. */
				return !have_duration ? time_lapsed : function(percentComplete) {
					return path[ (percentComplete * (path.length - 1)) | 0 ];
				};
			};
		}());

		/* jQuery easings. */
		Velocity.Easings = {
			linear: function(p) {
				return p;
			},
			swing: function(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
			spring: function(p) {
				return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
			}
		};

		/* CSS3 and Robert Penner easings. */
		$.each(
				[
					["ease", [0.25, 0.1, 0.25, 1.0]],
					["ease-in", [0.42, 0.0, 1.00, 1.0]],
					["ease-out", [0.00, 0.0, 0.58, 1.0]],
					["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
					["easeInSine", [0.47, 0, 0.745, 0.715]],
					["easeOutSine", [0.39, 0.575, 0.565, 1]],
					["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
					["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
					["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
					["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
					["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
					["easeOutCubic", [0.215, 0.61, 0.355, 1]],
					["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
					["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
					["easeOutQuart", [0.165, 0.84, 0.44, 1]],
					["easeInOutQuart", [0.77, 0, 0.175, 1]],
					["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
					["easeOutQuint", [0.23, 1, 0.32, 1]],
					["easeInOutQuint", [0.86, 0, 0.07, 1]],
					["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
					["easeOutExpo", [0.19, 1, 0.22, 1]],
					["easeInOutExpo", [1, 0, 0, 1]],
					["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
					["easeOutCirc", [0.075, 0.82, 0.165, 1]],
					["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
				], function(i, easingArray) {
			Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
		});

		/* Determine the appropriate easing type given an easing input. */
		function getEasing(value, duration) {
			var easing = value;

			/* The easing option can either be a string that references a pre-registered easing,
			 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
			if (Type.isString(value)) {
				/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
				if (!Velocity.Easings[value]) {
					easing = false;
				}
			} else if (Type.isArray(value) && value.length === 1) {
				easing = generateStep.apply(null, value);
			} else if (Type.isArray(value) && value.length === 2) {
				/* springRK4 must be passed the animation's duration. */
				/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
				 function generated with default tension and friction values. */
				easing = generateSpringRK4.apply(null, value.concat([duration]));
			} else if (Type.isArray(value) && value.length === 4) {
				/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
				easing = generateBezier.apply(null, value);
			} else {
				easing = false;
			}

			/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
			 if the Velocity-wide default has been incorrectly modified. */
			if (easing === false) {
				if (Velocity.Easings[Velocity.defaults.easing]) {
					easing = Velocity.defaults.easing;
				} else {
					easing = EASING_DEFAULT;
				}
			}

			return easing;
		}

		/*****************
		 CSS Stack
		 *****************/

		/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
		 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
		/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
		var CSS = Velocity.CSS = {
			/*************
			 RegEx
			 *************/

			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
			},
			/************
			 Lists
			 ************/

			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
				units: [
					"%", // relative
					"em", "ex", "ch", "rem", // font relative
					"vw", "vh", "vmin", "vmax", // viewport relative
					"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
					"deg", "grad", "rad", "turn", // angles
					"s", "ms" // time
				],
				colorNames: {
					"aliceblue": "240,248,255",
					"antiquewhite": "250,235,215",
					"aquamarine": "127,255,212",
					"aqua": "0,255,255",
					"azure": "240,255,255",
					"beige": "245,245,220",
					"bisque": "255,228,196",
					"black": "0,0,0",
					"blanchedalmond": "255,235,205",
					"blueviolet": "138,43,226",
					"blue": "0,0,255",
					"brown": "165,42,42",
					"burlywood": "222,184,135",
					"cadetblue": "95,158,160",
					"chartreuse": "127,255,0",
					"chocolate": "210,105,30",
					"coral": "255,127,80",
					"cornflowerblue": "100,149,237",
					"cornsilk": "255,248,220",
					"crimson": "220,20,60",
					"cyan": "0,255,255",
					"darkblue": "0,0,139",
					"darkcyan": "0,139,139",
					"darkgoldenrod": "184,134,11",
					"darkgray": "169,169,169",
					"darkgrey": "169,169,169",
					"darkgreen": "0,100,0",
					"darkkhaki": "189,183,107",
					"darkmagenta": "139,0,139",
					"darkolivegreen": "85,107,47",
					"darkorange": "255,140,0",
					"darkorchid": "153,50,204",
					"darkred": "139,0,0",
					"darksalmon": "233,150,122",
					"darkseagreen": "143,188,143",
					"darkslateblue": "72,61,139",
					"darkslategray": "47,79,79",
					"darkturquoise": "0,206,209",
					"darkviolet": "148,0,211",
					"deeppink": "255,20,147",
					"deepskyblue": "0,191,255",
					"dimgray": "105,105,105",
					"dimgrey": "105,105,105",
					"dodgerblue": "30,144,255",
					"firebrick": "178,34,34",
					"floralwhite": "255,250,240",
					"forestgreen": "34,139,34",
					"fuchsia": "255,0,255",
					"gainsboro": "220,220,220",
					"ghostwhite": "248,248,255",
					"gold": "255,215,0",
					"goldenrod": "218,165,32",
					"gray": "128,128,128",
					"grey": "128,128,128",
					"greenyellow": "173,255,47",
					"green": "0,128,0",
					"honeydew": "240,255,240",
					"hotpink": "255,105,180",
					"indianred": "205,92,92",
					"indigo": "75,0,130",
					"ivory": "255,255,240",
					"khaki": "240,230,140",
					"lavenderblush": "255,240,245",
					"lavender": "230,230,250",
					"lawngreen": "124,252,0",
					"lemonchiffon": "255,250,205",
					"lightblue": "173,216,230",
					"lightcoral": "240,128,128",
					"lightcyan": "224,255,255",
					"lightgoldenrodyellow": "250,250,210",
					"lightgray": "211,211,211",
					"lightgrey": "211,211,211",
					"lightgreen": "144,238,144",
					"lightpink": "255,182,193",
					"lightsalmon": "255,160,122",
					"lightseagreen": "32,178,170",
					"lightskyblue": "135,206,250",
					"lightslategray": "119,136,153",
					"lightsteelblue": "176,196,222",
					"lightyellow": "255,255,224",
					"limegreen": "50,205,50",
					"lime": "0,255,0",
					"linen": "250,240,230",
					"magenta": "255,0,255",
					"maroon": "128,0,0",
					"mediumaquamarine": "102,205,170",
					"mediumblue": "0,0,205",
					"mediumorchid": "186,85,211",
					"mediumpurple": "147,112,219",
					"mediumseagreen": "60,179,113",
					"mediumslateblue": "123,104,238",
					"mediumspringgreen": "0,250,154",
					"mediumturquoise": "72,209,204",
					"mediumvioletred": "199,21,133",
					"midnightblue": "25,25,112",
					"mintcream": "245,255,250",
					"mistyrose": "255,228,225",
					"moccasin": "255,228,181",
					"navajowhite": "255,222,173",
					"navy": "0,0,128",
					"oldlace": "253,245,230",
					"olivedrab": "107,142,35",
					"olive": "128,128,0",
					"orangered": "255,69,0",
					"orange": "255,165,0",
					"orchid": "218,112,214",
					"palegoldenrod": "238,232,170",
					"palegreen": "152,251,152",
					"paleturquoise": "175,238,238",
					"palevioletred": "219,112,147",
					"papayawhip": "255,239,213",
					"peachpuff": "255,218,185",
					"peru": "205,133,63",
					"pink": "255,192,203",
					"plum": "221,160,221",
					"powderblue": "176,224,230",
					"purple": "128,0,128",
					"red": "255,0,0",
					"rosybrown": "188,143,143",
					"royalblue": "65,105,225",
					"saddlebrown": "139,69,19",
					"salmon": "250,128,114",
					"sandybrown": "244,164,96",
					"seagreen": "46,139,87",
					"seashell": "255,245,238",
					"sienna": "160,82,45",
					"silver": "192,192,192",
					"skyblue": "135,206,235",
					"slateblue": "106,90,205",
					"slategray": "112,128,144",
					"snow": "255,250,250",
					"springgreen": "0,255,127",
					"steelblue": "70,130,180",
					"tan": "210,180,140",
					"teal": "0,128,128",
					"thistle": "216,191,216",
					"tomato": "255,99,71",
					"turquoise": "64,224,208",
					"violet": "238,130,238",
					"wheat": "245,222,179",
					"whitesmoke": "245,245,245",
					"white": "255,255,255",
					"yellowgreen": "154,205,50",
					"yellow": "255,255,0"
				}
			},
			/************
			 Hooks
			 ************/

			/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
			 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
			/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
			 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
			Hooks: {
				/********************
				 Registration
				 ********************/

				/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
				/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
				templates: {
					"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
					"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
					"backgroundPosition": ["X Y", "0% 0%"],
					"transformOrigin": ["X Y Z", "50% 50% 0px"],
					"perspectiveOrigin": ["X Y", "50% 50%"]
				},
				/* A "registered" hook is one that has been converted from its template form into a live,
				 tweenable property. It contains data to associate it with its root property. */
				registered: {
					/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
					 which consists of the subproperty's name, the associated root property's name,
					 and the subproperty's position in the root's value. */
				},
				/* Convert the templates into individual hooks then append them to the registered object above. */
				register: function() {
					/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
					 currently set to "transparent" default to their respective template below when color-animated,
					 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
					 which is almost always set closer to black than white. */
					for (var i = 0; i < CSS.Lists.colors.length; i++) {
						var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
						CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
					}

					var rootProperty,
							hookTemplate,
							hookNames;

					/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
					 Thus, we re-arrange the templates accordingly. */
					if (IE) {
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

							if (hookNames[0] === "Color") {
								/* Reposition both the hook's name and its default value to the end of their respective strings. */
								hookNames.push(hookNames.shift());
								defaultValues.push(defaultValues.shift());

								/* Replace the existing template for the hook's root property. */
								CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
							}
						}
					}

					/* Hook registration. */
					for (rootProperty in CSS.Hooks.templates) {
						if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
							continue;
						}
						hookTemplate = CSS.Hooks.templates[rootProperty];
						hookNames = hookTemplate[0].split(" ");

						for (var j in hookNames) {
							if (!hookNames.hasOwnProperty(j)) {
								continue;
							}
							var fullHookName = rootProperty + hookNames[j],
									hookPosition = j;

							/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
							 and the hook's position in its template's default value string. */
							CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
						}
					}
				},
				/*****************************
				 Injection and Extraction
				 *****************************/

				/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
				/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
				getRoot: function(property) {
					var hookData = CSS.Hooks.registered[property];

					if (hookData) {
						return hookData[0];
					} else {
						/* If there was no hook match, return the property name untouched. */
						return property;
					}
				},
				getUnit: function(str, start) {
					var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

					if (unit && _inArray(CSS.Lists.units, unit)) {
						return unit;
					}
					return "";
				},
				fixColors: function(str) {
					return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
						if (CSS.Lists.colorNames.hasOwnProperty($2)) {
							return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
						}
						return $1 + $2;
					});
				},
				/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
				 the targeted hook can be injected or extracted at its standard position. */
				cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
					/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
					if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
						rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
					}

					/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
					 default to the root's default value as defined in CSS.Hooks.templates. */
					/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
					 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
					if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
						rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
					}

					return rootPropertyValue;
				},
				/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
				extractValue: function(fullHookName, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1];

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
						return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				},
				/* Inject the hook's value into its root property's value. This is used to piece back together the root property
				 once Velocity has updated one of its individually hooked values through tweening. */
				injectValue: function(fullHookName, hookValue, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1],
								rootPropertyValueParts,
								rootPropertyValueUpdated;

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
						 then reconstruct the rootPropertyValue string. */
						rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
						rootPropertyValueParts[hookPosition] = hookValue;
						rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

						return rootPropertyValueUpdated;
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				}
			},
			/*******************
			 Normalizations
			 *******************/

			/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
			 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
			Normalizations: {
				/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
				 the targeted element (which may need to be queried), and the targeted property value. */
				registered: {
					clip: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return "clip";
								/* Clip needs to be unwrapped and stripped of its commas during extraction. */
							case "extract":
								var extracted;

								/* If Velocity also extracted this value, skip extraction. */
								if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
									extracted = propertyValue;
								} else {
									/* Remove the "rect()" wrapper. */
									extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

									/* Strip off commas. */
									extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
								}

								return extracted;
								/* Clip needs to be re-wrapped during injection. */
							case "inject":
								return "rect(" + propertyValue + ")";
						}
					},
					blur: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								var extracted = parseFloat(propertyValue);

								/* If extracted is NaN, meaning the value isn't already extracted. */
								if (!(extracted || extracted === 0)) {
									var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

									/* If the filter string had a blur component, return just the blur value and unit type. */
									if (blurComponent) {
										extracted = blurComponent[1];
										/* If the component doesn't exist, default blur to 0. */
									} else {
										extracted = 0;
									}
								}

								return extracted;
								/* Blur needs to be re-wrapped during injection. */
							case "inject":
								/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
								if (!parseFloat(propertyValue)) {
									return "none";
								} else {
									return "blur(" + propertyValue + ")";
								}
						}
					},
					/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
					opacity: function(type, element, propertyValue) {
						if (IE <= 8) {
							switch (type) {
								case "name":
									return "filter";
								case "extract":
									/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
									 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
									var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

									if (extracted) {
										/* Convert to decimal value. */
										propertyValue = extracted[1] / 100;
									} else {
										/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
										propertyValue = 1;
									}

									return propertyValue;
								case "inject":
									/* Opacified elements are required to have their zoom property set to a non-zero value. */
									element.style.zoom = 1;

									/* Setting the filter property on elements with certain font property combinations can result in a
									 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
									 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
									if (parseFloat(propertyValue) >= 1) {
										return "";
									} else {
										/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
										return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
									}
							}
							/* With all other browsers, normalization is not required; return the same values that were passed in. */
						} else {
							switch (type) {
								case "name":
									return "opacity";
								case "extract":
									return propertyValue;
								case "inject":
									return propertyValue;
							}
						}
					}
				},
				/*****************************
				 Batched Registrations
				 *****************************/

				/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
				register: function() {

					/*****************
					 Transforms
					 *****************/

					/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
					 so that they can be referenced in a properties map by their individual names. */
					/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
					 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
					 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
					 once when multiple transform subproperties are being animated simultaneously. */
					/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
					 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
					 from being normalized for these browsers so that tweening skips these properties altogether
					 (since it will ignore them as being unsupported by the browser.) */
					if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
						/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
						 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
						CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
					}

					for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
						/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
						 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
						(function() {
							var transformName = CSS.Lists.transformsBase[i];

							CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
								switch (type) {
									/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
									case "name":
										return "transform";
										/* Transform values are cached onto a per-element transformCache object. */
									case "extract":
										/* If this transform has yet to be assigned a value, return its null value. */
										if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
											/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
											return /^scale/i.test(transformName) ? 1 : 0;
											/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
											 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
										}
										return Data(element).transformCache[transformName].replace(/[()]/g, "");
									case "inject":
										var invalid = false;

										/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
										 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
										/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
										switch (transformName.substr(0, transformName.length - 1)) {
											/* Whitelist unit types for each transform. */
											case "translate":
												invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
												break;
												/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
											case "scal":
											case "scale":
												/* Chrome on Android has a bug in which scaled elements blur if their initial scale
												 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
												 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
												if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
													propertyValue = 1;
												}

												invalid = !/(\d)$/i.test(propertyValue);
												break;
											case "skew":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
											case "rotate":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
										}

										if (!invalid) {
											/* As per the CSS spec, wrap the value in parentheses. */
											Data(element).transformCache[transformName] = "(" + propertyValue + ")";
										}

										/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
										return Data(element).transformCache[transformName];
								}
							};
						})();
					}

					/*************
					 Colors
					 *************/

					/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
					 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
					for (var j = 0; j < CSS.Lists.colors.length; j++) {
						/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
						 (Otherwise, all functions would take the final for loop's colorName.) */
						(function() {
							var colorName = CSS.Lists.colors[j];

							/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
							CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return colorName;
										/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
									case "extract":
										var extracted;

										/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
										if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
											extracted = propertyValue;
										} else {
											var converted,
													colorNames = {
														black: "rgb(0, 0, 0)",
														blue: "rgb(0, 0, 255)",
														gray: "rgb(128, 128, 128)",
														green: "rgb(0, 128, 0)",
														red: "rgb(255, 0, 0)",
														white: "rgb(255, 255, 255)"
													};

											/* Convert color names to rgb. */
											if (/^[A-z]+$/i.test(propertyValue)) {
												if (colorNames[propertyValue] !== undefined) {
													converted = colorNames[propertyValue];
												} else {
													/* If an unmatched color name is provided, default to black. */
													converted = colorNames.black;
												}
												/* Convert hex values to rgb. */
											} else if (CSS.RegEx.isHex.test(propertyValue)) {
												converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
												/* If the provided color doesn't match any of the accepted color formats, default to black. */
											} else if (!(/^rgba?\(/i.test(propertyValue))) {
												converted = colorNames.black;
											}

											/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
											 repeated spaces (in case the value included spaces to begin with). */
											extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
										}

										/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
											extracted += " 1";
										}

										return extracted;
									case "inject":
										/* If we have a pattern then it might already have the right values */
										if (/^rgb/.test(propertyValue)) {
											return propertyValue;
										}

										/* If this is IE<=8 and an alpha component exists, strip it off. */
										if (IE <= 8) {
											if (propertyValue.split(" ").length === 4) {
												propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
											}
											/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										} else if (propertyValue.split(" ").length === 3) {
											propertyValue += " 1";
										}

										/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
										 on all values but the fourth (R, G, and B only accept whole numbers). */
										return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
								}
							};
						})();
					}

					/**************
					 Dimensions
					 **************/
					function augmentDimension(name, element, wantInner) {
						var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

						if (isBorderBox === (wantInner || false)) {
							/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
							var i,
									value,
									augment = 0,
									sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
									fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

							for (i = 0; i < fields.length; i++) {
								value = parseFloat(CSS.getPropertyValue(element, fields[i]));
								if (!isNaN(value)) {
									augment += value;
								}
							}
							return wantInner ? -augment : augment;
						}
						return 0;
					}
					function getDimension(name, wantInner) {
						return function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return name;
								case "extract":
									return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
								case "inject":
									return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
							}
						};
					}
					CSS.Normalizations.registered.innerWidth = getDimension("width", true);
					CSS.Normalizations.registered.innerHeight = getDimension("height", true);
					CSS.Normalizations.registered.outerWidth = getDimension("width");
					CSS.Normalizations.registered.outerHeight = getDimension("height");
				}
			},
			/************************
			 CSS Property Names
			 ************************/

			Names: {
				/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
				 Camelcasing is used to normalize property names between and across calls. */
				camelCase: function(property) {
					return property.replace(/-(\w)/g, function(match, subMatch) {
						return subMatch.toUpperCase();
					});
				},
				/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
				SVGAttribute: function(property) {
					var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

					/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
					if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
						SVGAttributes += "|transform";
					}

					return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
				},
				/* Determine whether a property should be set with a vendor prefix. */
				/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
				 If the property is not at all supported by the browser, return a false flag. */
				prefixCheck: function(property) {
					/* If this property has already been checked, return the cached value. */
					if (Velocity.State.prefixMatches[property]) {
						return [Velocity.State.prefixMatches[property], true];
					} else {
						var vendors = ["", "Webkit", "Moz", "ms", "O"];

						for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
							var propertyPrefixed;

							if (i === 0) {
								propertyPrefixed = property;
							} else {
								/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
								propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
									return match.toUpperCase();
								});
							}

							/* Check if the browser supports this property as prefixed. */
							if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
								/* Cache the match. */
								Velocity.State.prefixMatches[property] = propertyPrefixed;

								return [propertyPrefixed, true];
							}
						}

						/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
						return [property, false];
					}
				}
			},
			/************************
			 CSS Property Values
			 ************************/

			Values: {
				/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
				hexToRgb: function(hex) {
					var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
							longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
							rgbParts;

					hex = hex.replace(shortformRegex, function(m, r, g, b) {
						return r + r + g + g + b + b;
					});

					rgbParts = longformRegex.exec(hex);

					return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
				},
				isCSSNullValue: function(value) {
					/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
					 Thus, we check for both falsiness and these special strings. */
					/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
					 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
					/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
					return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
				},
				/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
				getUnitType: function(property) {
					if (/^(rotate|skew)/i.test(property)) {
						return "deg";
					} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
						/* The above properties are unitless. */
						return "";
					} else {
						/* Default to px for all other properties. */
						return "px";
					}
				},
				/* HTML elements default to an associated display type when they're not set to display:none. */
				/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
				getDisplayType: function(element) {
					var tagName = element && element.tagName.toString().toLowerCase();

					if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
						return "inline";
					} else if (/^(li)$/i.test(tagName)) {
						return "list-item";
					} else if (/^(tr)$/i.test(tagName)) {
						return "table-row";
					} else if (/^(table)$/i.test(tagName)) {
						return "table";
					} else if (/^(tbody)$/i.test(tagName)) {
						return "table-row-group";
						/* Default to "block" when no match is found. */
					} else {
						return "block";
					}
				},
				/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
				addClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.add(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							element.className += (element.className.length ? " " : "") + className;
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
						}
					}
				},
				removeClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.remove(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
							element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
						}
					}
				}
			},
			/****************************
			 Style Getting & Setting
			 ****************************/

			/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
				/* Get an element's computed property value. */
				/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
				 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
				 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
				function computePropertyValue(element, property) {
					/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
					 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
					 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
					 We subtract border and padding to get the sum of interior + scrollbar. */
					var computedValue = 0;

					/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
					 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
					 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
					 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
					if (IE <= 8) {
						computedValue = $.css(element, property); /* GET */
						/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
						 associated element so that it does not need to be refetched upon every GET. */
					} else {
						/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
						 toggle display to the element type's default value. */
						var toggleDisplay = false;

						if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
							toggleDisplay = true;
							CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
						}

						var revertDisplay = function() {
							if (toggleDisplay) {
								CSS.setPropertyValue(element, "display", "none");
							}
						};

						if (!forceStyleLookup) {
							if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
								revertDisplay();

								return contentBoxHeight;
							} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
								revertDisplay();

								return contentBoxWidth;
							}
						}

						var computedStyle;

						/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
						 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
						if (Data(element) === undefined) {
							computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If the computedStyle object has yet to be cached, do so now. */
						} else if (!Data(element).computedStyle) {
							computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If computedStyle is cached, use it. */
						} else {
							computedStyle = Data(element).computedStyle;
						}

						/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
						 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
						 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
						if (property === "borderColor") {
							property = "borderTopColor";
						}

						/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
						 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
						if (IE === 9 && property === "filter") {
							computedValue = computedStyle.getPropertyValue(property); /* GET */
						} else {
							computedValue = computedStyle[property];
						}

						/* Fall back to the property's style value (if defined) when computedValue returns nothing,
						 which can happen when the element hasn't been painted. */
						if (computedValue === "" || computedValue === null) {
							computedValue = element.style[property];
						}

						revertDisplay();
					}

					/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
					 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
					 effect as being set to 0, so no conversion is necessary.) */
					/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
					 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
					 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
					if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
						var position = computePropertyValue(element, "position"); /* GET */

						/* For absolute positioning, jQuery's $.position() only returns values for top and left;
						 right and bottom will have their "auto" value reverted to 0. */
						/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
						 Not a big deal since we're currently in a GET batch anyway. */
						if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
							/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
							computedValue = $(element).position()[property] + "px"; /* GET */
						}
					}

					return computedValue;
				}

				var propertyValue;

				/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
				 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
				if (CSS.Hooks.registered[property]) {
					var hook = property,
							hookRoot = CSS.Hooks.getRoot(hook);

					/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
					 query the DOM for the root property's value. */
					if (rootPropertyValue === undefined) {
						/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
						rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
					}

					/* If this root has a normalization registered, peform the associated normalization extraction. */
					if (CSS.Normalizations.registered[hookRoot]) {
						rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
					}

					/* Extract the hook's value. */
					propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

					/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
					 normalize the property's name and value, and handle the special case of transforms. */
					/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
					 numerical and therefore do not require normalization extraction. */
				} else if (CSS.Normalizations.registered[property]) {
					var normalizedPropertyName,
							normalizedPropertyValue;

					normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

					/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
					 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
					 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
					 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
					if (normalizedPropertyName !== "transform") {
						normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

						/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
						if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
							normalizedPropertyValue = CSS.Hooks.templates[property][1];
						}
					}

					propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
				}

				/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
				if (!/^[\d-]/.test(propertyValue)) {
					/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
					 their HTML attribute values instead of their CSS style values. */
					var data = Data(element);

					if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
						/* Since the height/width attribute values must be set manually, they don't reflect computed values.
						 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
						if (/^(height|width)$/i.test(property)) {
							/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
							try {
								propertyValue = element.getBBox()[property];
							} catch (error) {
								propertyValue = 0;
							}
							/* Otherwise, access the attribute value directly. */
						} else {
							propertyValue = element.getAttribute(property);
						}
					} else {
						propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
					}
				}

				/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
				 convert CSS null-values to an integer of value 0. */
				if (CSS.Values.isCSSNullValue(propertyValue)) {
					propertyValue = 0;
				}

				if (Velocity.debug >= 2) {
					console.log("Get " + property + ": " + propertyValue);
				}

				return propertyValue;
			},
			/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
				var propertyName = property;

				/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
				if (property === "scroll") {
					/* If a container option is present, scroll the container instead of the browser window. */
					if (scrollData.container) {
						scrollData.container["scroll" + scrollData.direction] = propertyValue;
						/* Otherwise, Velocity defaults to scrolling the browser window. */
					} else {
						if (scrollData.direction === "Left") {
							window.scrollTo(propertyValue, scrollData.alternateValue);
						} else {
							window.scrollTo(scrollData.alternateValue, propertyValue);
						}
					}
				} else {
					/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
					 Thus, for now, we merely cache transforms being SET. */
					if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
						/* Perform a normalization injection. */
						/* Note: The normalization logic handles the transformCache updating. */
						CSS.Normalizations.registered[property]("inject", element, propertyValue);

						propertyName = "transform";
						propertyValue = Data(element).transformCache[property];
					} else {
						/* Inject hooks. */
						if (CSS.Hooks.registered[property]) {
							var hookName = property,
									hookRoot = CSS.Hooks.getRoot(property);

							/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
							rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

							propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
							property = hookRoot;
						}

						/* Normalize names and values. */
						if (CSS.Normalizations.registered[property]) {
							propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
							property = CSS.Normalizations.registered[property]("name", element);
						}

						/* Assign the appropriate vendor prefix before performing an official style update. */
						propertyName = CSS.Names.prefixCheck(property)[0];

						/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
						 Try/catch is avoided for other browsers since it incurs a performance overhead. */
						if (IE <= 8) {
							try {
								element.style[propertyName] = propertyValue;
							} catch (error) {
								if (Velocity.debug) {
									console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
								}
							}
							/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
							/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
						} else {
							var data = Data(element);

							if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
								/* Note: For SVG attributes, vendor-prefixed property names are never used. */
								/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
								element.setAttribute(property, propertyValue);
							} else {
								element.style[propertyName] = propertyValue;
							}
						}

						if (Velocity.debug >= 2) {
							console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
						}
					}
				}

				/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
				return [propertyName, propertyValue];
			},
			/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
			/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
			flushTransformCache: function(element) {
				var transformString = "",
						data = Data(element);

				/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
				 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
				if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
					/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
					 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
					var getTransformFloat = function(transformProperty) {
						return parseFloat(CSS.getPropertyValue(element, transformProperty));
					};

					/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
					 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
					var SVGTransforms = {
						translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
						skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
						/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
						 (this behavior mimics the result of animating all these properties at once on HTML elements). */
						scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
						/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
						 defining the rotation's origin point. We ignore the origin values (default them to 0). */
						rotate: [getTransformFloat("rotateZ"), 0, 0]
					};

					/* Iterate through the transform properties in the user-defined property map order.
					 (This mimics the behavior of non-SVG transform animation.) */
					$.each(Data(element).transformCache, function(transformName) {
						/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
						 properties so that they match up with SVG's accepted transform properties. */
						if (/^translate/i.test(transformName)) {
							transformName = "translate";
						} else if (/^scale/i.test(transformName)) {
							transformName = "scale";
						} else if (/^rotate/i.test(transformName)) {
							transformName = "rotate";
						}

						/* Check that we haven't yet deleted the property from the SVGTransforms container. */
						if (SVGTransforms[transformName]) {
							/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
							transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

							/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
							 re-insert the same master property if we encounter another one of its axis-specific properties. */
							delete SVGTransforms[transformName];
						}
					});
				} else {
					var transformValue,
							perspective;

					/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
					$.each(Data(element).transformCache, function(transformName) {
						transformValue = Data(element).transformCache[transformName];

						/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
						if (transformName === "transformPerspective") {
							perspective = transformValue;
							return true;
						}

						/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
						if (IE === 9 && transformName === "rotateZ") {
							transformName = "rotate";
						}

						transformString += transformName + transformValue + " ";
					});

					/* If present, set the perspective subproperty first. */
					if (perspective) {
						transformString = "perspective" + perspective + " " + transformString;
					}
				}

				CSS.setPropertyValue(element, "transform", transformString);
			}
		};

		/* Register hooks and normalizations. */
		CSS.Hooks.register();
		CSS.Normalizations.register();

		/* Allow hook setting in the same fashion as jQuery's $.css(). */
		Velocity.hook = function(elements, arg2, arg3) {
			var value;

			elements = sanitizeElements(elements);

			$.each(elements, function(i, element) {
				/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/* Get property value. If an element set was passed in, only return the value for the first element. */
				if (arg3 === undefined) {
					if (value === undefined) {
						value = CSS.getPropertyValue(element, arg2);
					}
					/* Set property value. */
				} else {
					/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
					var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

					/* Transform properties don't automatically set. They have to be flushed to the DOM. */
					if (adjustedSet[0] === "transform") {
						Velocity.CSS.flushTransformCache(element);
					}

					value = adjustedSet;
				}
			});

			return value;
		};

		/*****************
		 Animation
		 *****************/

		var animate = function() {
			var opts;

			/******************
			 Call Chain
			 ******************/

			/* Logic for determining what to return to the call stack when exiting out of Velocity. */
			function getChain() {
				/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
				 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
				if (isUtility) {
					return promiseData.promise || null;
					/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
				} else {
					return elementsWrapped;
				}
			}

			/*************************
			 Arguments Assignment
			 *************************/

			/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
			 objects are defined on a container object that's passed in as Velocity's sole argument. */
			/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
			var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
					/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
					isUtility,
					/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
					 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
					elementsWrapped,
					argumentIndex;

			var elements,
					propertiesMap,
					options;

			/* Detect jQuery/Zepto elements being animated via the $.fn method. */
			if (Type.isWrapped(this)) {
				isUtility = false;

				argumentIndex = 0;
				elements = this;
				elementsWrapped = this;
				/* Otherwise, raw elements are being animated via the utility function. */
			} else {
				isUtility = true;

				argumentIndex = 1;
				elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
			}

			/***************
			 Promises
			 ***************/

			var promiseData = {
				promise: null,
				resolver: null,
				rejecter: null
			};

			/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
			 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
			 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
			 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
			/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
			 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
			 grouped together for the purposes of resolving and rejecting a promise. */
			if (isUtility && Velocity.Promise) {
				promiseData.promise = new Velocity.Promise(function(resolve, reject) {
					promiseData.resolver = resolve;
					promiseData.rejecter = reject;
				});
			}

			if (syntacticSugar) {
				propertiesMap = arguments[0].properties || arguments[0].p;
				options = arguments[0].options || arguments[0].o;
			} else {
				propertiesMap = arguments[argumentIndex];
				options = arguments[argumentIndex + 1];
			}

			elements = sanitizeElements(elements);

			if (!elements) {
				if (promiseData.promise) {
					if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
						promiseData.rejecter();
					} else {
						promiseData.resolver();
					}
				}
				return;
			}

			/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
			 single raw DOM element is passed in (which doesn't contain a length property). */
			var elementsLength = elements.length,
					elementsIndex = 0;

			/***************************
			 Argument Overloading
			 ***************************/

			/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
			 Overloading is detected by checking for the absence of an object being passed into options. */
			/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
			if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
				/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
				var startingArgumentPosition = argumentIndex + 1;

				options = {};

				/* Iterate through all options arguments */
				for (var i = startingArgumentPosition; i < arguments.length; i++) {
					/* Treat a number as a duration. Parse it out. */
					/* Note: The following RegEx will return true if passed an array with a number as its first item.
					 Thus, arrays are skipped from this check. */
					if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
						options.duration = arguments[i];
						/* Treat strings and arrays as easings. */
					} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
						options.easing = arguments[i];
						/* Treat a function as a complete callback. */
					} else if (Type.isFunction(arguments[i])) {
						options.complete = arguments[i];
					}
				}
			}

			/*********************
			 Action Detection
			 *********************/

			/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
			 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
			 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
			 instead of a properties map. */
			var action;

			switch (propertiesMap) {
				case "scroll":
					action = "scroll";
					break;

				case "reverse":
					action = "reverse";
					break;

				case "pause":

					/*******************
					 Action: Pause
					 *******************/

					var currentTime = (new Date()).getTime();

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						pauseDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {

						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Set call to paused */
										activeCall[5] = {
											resume: false
										};

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since pause creates no new tweens, exit out of Velocity. */
					return getChain();

				case "resume":

					/*******************
					 Action: Resume
					 *******************/

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						resumeDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {
						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Skip any calls that have never been paused */
								if (!activeCall[5]) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Flag a pause object to be resumed, which will occur during the next tick. In
										 addition, the pause object will at that time be deleted */
										activeCall[5].resume = true;

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since resume creates no new tweens, exit out of Velocity. */
					return getChain();

				case "finish":
				case "finishAll":
				case "stop":
					/*******************
					 Action: Stop
					 *******************/

					/* Clear the currently-active delay on each targeted element. */
					$.each(elements, function(i, element) {
						if (Data(element) && Data(element).delayTimer) {
							/* Stop the timer from triggering its cached next() function. */
							clearTimeout(Data(element).delayTimer.setTimeout);

							/* Manually call the next() function so that the subsequent queue items can progress. */
							if (Data(element).delayTimer.next) {
								Data(element).delayTimer.next();
							}

							delete Data(element).delayTimer;
						}

						/* If we want to finish everything in the queue, we have to iterate through it
						 and call each function. This will make them active calls below, which will
						 cause them to be applied via the duration setting. */
						if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
							/* Iterate through the items in the element's queue. */
							$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
								/* The queue array can contain an "inprogress" string, which we skip. */
								if (Type.isFunction(item)) {
									item();
								}
							});

							/* Clearing the $.queue() array is achieved by resetting it to []. */
							$.queue(element, Type.isString(options) ? options : "", []);
						}
					});

					var callsToStop = [];

					/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
					 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
					 is stopped, the next item in its animation queue is immediately triggered. */
					/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
					 or a custom queue string can be passed in. */
					/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
					 regardless of the element's current queue state. */

					/* Iterate through every active call. */
					$.each(Velocity.State.calls, function(i, activeCall) {
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
								 clear calls associated with the relevant queue. */
								/* Call stopping logic works as follows:
								 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
								 - options === undefined --> stop current queue:"" call and all queue:false calls.
								 - options === false --> stop only queue:false calls.
								 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {
										/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
										 due to the queue-clearing above. */
										if (options === true || Type.isString(options)) {
											/* Iterate through the items in the element's queue. */
											$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
												/* The queue array can contain an "inprogress" string, which we skip. */
												if (Type.isFunction(item)) {
													/* Pass the item's callback a flag indicating that we want to abort from the queue call.
													 (Specifically, the queue will resolve the call's associated promise then abort.)  */
													item(null, true);
												}
											});

											/* Clearing the $.queue() array is achieved by resetting it to []. */
											$.queue(element, Type.isString(options) ? options : "", []);
										}

										if (propertiesMap === "stop") {
											/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
											 changed to reflect the final value that the elements were actually tweened to. */
											/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
											 object. Also, queue:false animations can't be reversed. */
											var data = Data(element);
											if (data && data.tweensContainer && queueName !== false) {
												$.each(data.tweensContainer, function(m, activeTween) {
													activeTween.endValue = activeTween.currentValue;
												});
											}

											callsToStop.push(i);
										} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
											/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
											 they finish upon the next rAf tick then proceed with normal call completion logic. */
											activeCall[2].duration = 1;
										}
									}
								});
							});
						}
					});

					/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
					 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
					if (propertiesMap === "stop") {
						$.each(callsToStop, function(i, j) {
							completeCall(j, true);
						});

						if (promiseData.promise) {
							/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
							promiseData.resolver(elements);
						}
					}

					/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
					return getChain();

				default:
					/* Treat a non-empty plain object as a literal properties map. */
					if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
						action = "start";

						/****************
						 Redirects
						 ****************/

						/* Check if a string matches a registered redirect (see Redirects above). */
					} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
						opts = $.extend({}, options);

						var durationOriginal = opts.duration,
								delayOriginal = opts.delay || 0;

						/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
						if (opts.backwards === true) {
							elements = $.extend(true, [], elements).reverse();
						}

						/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
						$.each(elements, function(elementIndex, element) {
							/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
							if (parseFloat(opts.stagger)) {
								opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
							} else if (Type.isFunction(opts.stagger)) {
								opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
							}

							/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
							 the duration of each element's animation, using floors to prevent producing very short durations. */
							if (opts.drag) {
								/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
								opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

								/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
								 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
								 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
								opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
							}

							/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
							 reduce the opts checking logic required inside the redirect. */
							Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
						});

						/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
						 (The performance overhead up to this point is virtually non-existant.) */
						/* Note: The jQuery call chain is kept intact by returning the complete element set. */
						return getChain();
					} else {
						var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

						if (promiseData.promise) {
							promiseData.rejecter(new Error(abortError));
						} else if (window.console) {
							console.log(abortError);
						}

						return getChain();
					}
			}

			/**************************
			 Call-Wide Variables
			 **************************/

			/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
			 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
			 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
			 conversion metrics across Velocity animations that are not immediately consecutively chained. */
			var callUnitConversionData = {
				lastParent: null,
				lastPosition: null,
				lastFontSize: null,
				lastPercentToPxWidth: null,
				lastPercentToPxHeight: null,
				lastEmToPx: null,
				remToPx: null,
				vwToPx: null,
				vhToPx: null
			};

			/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
			 Velocity.State.calls array that is processed during animation ticking. */
			var call = [];

			/************************
			 Element Processing
			 ************************/

			/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
			 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
			 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
			 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 `elementArrayIndex` allows passing index of the element in the original array to value functions.
			 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
			 */
			function processElement(element, elementArrayIndex) {

				/*************************
				 Part I: Pre-Queueing
				 *************************/

				/***************************
				 Element-Wide Variables
				 ***************************/

				var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
						opts = $.extend({}, Velocity.defaults, options),
						/* A container for the processed data associated with each property in the propertyMap.
						 (Each property in the map produces its own "tween".) */
						tweensContainer = {},
						elementUnitConversionData;

				/******************
				 Element Init
				 ******************/

				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/******************
				 Option: Delay
				 ******************/

				/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
				/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
				 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
				if (parseFloat(opts.delay) && opts.queue !== false) {
					$.queue(element, opts.queue, function(next) {
						/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
						 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
						 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

						/* Temporarily store delayed elements to facilite access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								next();
							};
						})(callIndex);


						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(next, parseFloat(opts.delay)),
							next: delayComplete
						};
					});
				}

				/*********************
				 Option: Duration
				 *********************/

				/* Support for jQuery's named durations. */
				switch (opts.duration.toString().toLowerCase()) {
					case "fast":
						opts.duration = 200;
						break;

					case "normal":
						opts.duration = DURATION_DEFAULT;
						break;

					case "slow":
						opts.duration = 600;
						break;

					default:
						/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
						opts.duration = parseFloat(opts.duration) || 1;
				}

				/************************
				 Global Option: Mock
				 ************************/

				if (Velocity.mock !== false) {
					/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
					 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
					if (Velocity.mock === true) {
						opts.duration = opts.delay = 1;
					} else {
						opts.duration *= parseFloat(Velocity.mock) || 1;
						opts.delay *= parseFloat(Velocity.mock) || 1;
					}
				}

				/*******************
				 Option: Easing
				 *******************/

				opts.easing = getEasing(opts.easing, opts.duration);

				/**********************
				 Option: Callbacks
				 **********************/

				/* Callbacks must functions. Otherwise, default to null. */
				if (opts.begin && !Type.isFunction(opts.begin)) {
					opts.begin = null;
				}

				if (opts.progress && !Type.isFunction(opts.progress)) {
					opts.progress = null;
				}

				if (opts.complete && !Type.isFunction(opts.complete)) {
					opts.complete = null;
				}

				/*********************************
				 Option: Display & Visibility
				 *********************************/

				/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
				/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
				if (opts.display !== undefined && opts.display !== null) {
					opts.display = opts.display.toString().toLowerCase();

					/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
					if (opts.display === "auto") {
						opts.display = Velocity.CSS.Values.getDisplayType(element);
					}
				}

				if (opts.visibility !== undefined && opts.visibility !== null) {
					opts.visibility = opts.visibility.toString().toLowerCase();
				}

				/**********************
				 Option: mobileHA
				 **********************/

				/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
				 on animating elements. HA is removed from the element at the completion of its animation. */
				/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
				/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
				opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

				/***********************
				 Part II: Queueing
				 ***********************/

				/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
				 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
				/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
				 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
				function buildQueue(next) {
					var data, lastTweensContainer;

					/*******************
					 Option: Begin
					 *******************/

					/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
					if (opts.begin && elementsIndex === 0) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.begin.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}

					/*****************************************
					 Tween Data Construction (for Scroll)
					 *****************************************/

					/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
					if (action === "scroll") {
						/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
						var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
								scrollOffset = parseFloat(opts.offset) || 0,
								scrollPositionCurrent,
								scrollPositionCurrentAlternate,
								scrollPositionEnd;

						/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
						 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
						if (opts.container) {
							/* Ensure that either a jQuery object or a raw DOM element was passed in. */
							if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
								/* Extract the raw DOM element from the jQuery wrapper. */
								opts.container = opts.container[0] || opts.container;
								/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
								 (due to the user's natural interaction with the page). */
								scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

								/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
								 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
								 the scroll container's current scroll position. */
								scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
								/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
							} else {
								opts.container = null;
							}
						} else {
							/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
							 the appropriate cached property names (which differ based on browser type). */
							scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
							/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
							scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

							/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
							 and therefore end values do not need to be compounded onto current values. */
							scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
						}

						/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
						tweensContainer = {
							scroll: {
								rootPropertyValue: false,
								startValue: scrollPositionCurrent,
								currentValue: scrollPositionCurrent,
								endValue: scrollPositionEnd,
								unitType: "",
								easing: opts.easing,
								scrollData: {
									container: opts.container,
									direction: scrollDirection,
									alternateValue: scrollPositionCurrentAlternate
								}
							},
							element: element
						};

						if (Velocity.debug) {
							console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
						}

						/******************************************
						 Tween Data Construction (for Reverse)
						 ******************************************/

						/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
						 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
						 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
						/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
						/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
						 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
						 as reverting to the element's values as they were prior to the previous *Velocity* call. */
					} else if (action === "reverse") {
						data = Data(element);

						/* Abort if there is no prior animation data to reverse to. */
						if (!data) {
							return;
						}

						if (!data.tweensContainer) {
							/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
							$.dequeue(element, opts.queue);

							return;
						} else {
							/*********************
							 Options Parsing
							 *********************/

							/* If the element was hidden via the display option in the previous call,
							 revert display to "auto" prior to reversal so that the element is visible again. */
							if (data.opts.display === "none") {
								data.opts.display = "auto";
							}

							if (data.opts.visibility === "hidden") {
								data.opts.visibility = "visible";
							}

							/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
							 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
							data.opts.loop = false;
							data.opts.begin = null;
							data.opts.complete = null;

							/* Since we're extending an opts object that has already been extended with the defaults options object,
							 we remove non-explicitly-defined properties that are auto-assigned values. */
							if (!options.easing) {
								delete opts.easing;
							}

							if (!options.duration) {
								delete opts.duration;
							}

							/* The opts object used for reversal is an extension of the options object optionally passed into this
							 reverse call plus the options used in the previous Velocity call. */
							opts = $.extend({}, data.opts, opts);

							/*************************************
							 Tweens Container Reconstruction
							 *************************************/

							/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
							lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

							/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
							for (var lastTween in lastTweensContainer) {
								/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
								if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
									var lastStartValue = lastTweensContainer[lastTween].startValue;

									lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
									lastTweensContainer[lastTween].endValue = lastStartValue;

									/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
									 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
									 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
									if (!Type.isEmptyObject(options)) {
										lastTweensContainer[lastTween].easing = opts.easing;
									}

									if (Velocity.debug) {
										console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
									}
								}
							}

							tweensContainer = lastTweensContainer;
						}

						/*****************************************
						 Tween Data Construction (for Start)
						 *****************************************/

					} else if (action === "start") {

						/*************************
						 Value Transferring
						 *************************/

						/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
						 while the element was in the process of being animated by Velocity, then this current call is safe to use
						 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
						 process whenever possible in order to avoid requerying the DOM. */
						/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
						 then the DOM is queried for the element's current values as a last resort. */
						/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

						data = Data(element);

						/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
						 to transfer over end values to use as start values. If it's set to true and there is a previous
						 Velocity call to pull values from, do so. */
						if (data && data.tweensContainer && data.isAnimating === true) {
							lastTweensContainer = data.tweensContainer;
						}

						/***************************
						 Tween Data Calculation
						 ***************************/

						/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
						/* Property map values can either take the form of 1) a single value representing the end value,
						 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
						 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
						 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
						var parsePropertyValue = function(valueData, skipResolvingEasing) {
							var endValue, easing, startValue;

							/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
							if (Type.isFunction(valueData)) {
								valueData = valueData.call(element, elementArrayIndex, elementsLength);
							}

							/* Handle the array format, which can be structured as one of three potential overloads:
							 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
							if (Type.isArray(valueData)) {
								/* endValue is always the first item in the array. Don't bother validating endValue's value now
								 since the ensuing property cycling logic does that. */
								endValue = valueData[0];

								/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
								 start value since easings can only be non-hex strings or arrays. */
								if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
									startValue = valueData[1];
									/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
								} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
									easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

									/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
									startValue = valueData[2];
								} else {
									startValue = valueData[1] || valueData[2];
								}
								/* Handle the single-value format. */
							} else {
								endValue = valueData;
							}

							/* Default to the call's easing if a per-property easing type was not defined. */
							if (!skipResolvingEasing) {
								easing = easing || opts.easing;
							}

							/* If functions were passed in as values, pass the function the current element as its context,
							 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
							if (Type.isFunction(endValue)) {
								endValue = endValue.call(element, elementArrayIndex, elementsLength);
							}

							if (Type.isFunction(startValue)) {
								startValue = startValue.call(element, elementArrayIndex, elementsLength);
							}

							/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
							return [endValue || 0, easing, startValue];
						};

						var fixPropertyValue = function(property, valueData) {
							/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
							var rootProperty = CSS.Hooks.getRoot(property),
									rootPropertyValue = false,
									/* Parse out endValue, easing, and startValue from the property's data. */
									endValue = valueData[0],
									easing = valueData[1],
									startValue = valueData[2],
									pattern;

							/**************************
							 Start Value Sourcing
							 **************************/

							/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
							 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
							 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
							/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
							 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
							if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
								if (Velocity.debug) {
									console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
								}
								return;
							}

							/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
							 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
							 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
							if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
								startValue = 0;
							}

							/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
							 for all of the current call's properties that were *also* animated in the previous call. */
							/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
							if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
								if (startValue === undefined) {
									startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
								}

								/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
								 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
								 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
								rootPropertyValue = data.rootPropertyValueCache[rootProperty];
								/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
							} else {
								/* Handle hooked properties. */
								if (CSS.Hooks.registered[property]) {
									if (startValue === undefined) {
										rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
										/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
										 getPropertyValue() will extract the hook from rootPropertyValue. */
										startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
										/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
										 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
										 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
										 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
									} else {
										/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
										rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
									}
									/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
								} else if (startValue === undefined) {
									startValue = CSS.getPropertyValue(element, property); /* GET */
								}
							}

							/**************************
							 Value Data Extraction
							 **************************/

							var separatedValue,
									endValueUnitType,
									startValueUnitType,
									operator = false;

							/* Separates a property value into its numeric value and its unit type. */
							var separateValue = function(property, value) {
								var unitType,
										numericValue;

								numericValue = (value || "0")
										.toString()
										.toLowerCase()
										/* Match the unit type at the end of the value. */
										.replace(/[%A-z]+$/, function(match) {
											/* Grab the unit type. */
											unitType = match;

											/* Strip the unit type off of value. */
											return "";
										});

								/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
								if (!unitType) {
									unitType = CSS.Values.getUnitType(property);
								}

								return [numericValue, unitType];
							};

							if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
								pattern = "";
								var iStart = 0, // index in startValue
										iEnd = 0, // index in endValue
										aStart = [], // array of startValue numbers
										aEnd = [], // array of endValue numbers
										inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
										inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
										inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

								startValue = CSS.Hooks.fixColors(startValue);
								endValue = CSS.Hooks.fixColors(endValue);
								while (iStart < startValue.length && iEnd < endValue.length) {
									var cStart = startValue[iStart],
											cEnd = endValue[iEnd];

									if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
										var tStart = cStart, // temporary character buffer
												tEnd = cEnd, // temporary character buffer
												dotStart = ".", // Make sure we can only ever match a single dot in a decimal
												dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

										while (++iStart < startValue.length) {
											cStart = startValue[iStart];
											if (cStart === dotStart) {
												dotStart = ".."; // Can never match two characters
											} else if (!/\d/.test(cStart)) {
												break;
											}
											tStart += cStart;
										}
										while (++iEnd < endValue.length) {
											cEnd = endValue[iEnd];
											if (cEnd === dotEnd) {
												dotEnd = ".."; // Can never match two characters
											} else if (!/\d/.test(cEnd)) {
												break;
											}
											tEnd += cEnd;
										}
										var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
												uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

										iStart += uStart.length;
										iEnd += uEnd.length;
										if (uStart === uEnd) {
											// Same units
											if (tStart === tEnd) {
												// Same numbers, so just copy over
												pattern += tStart + uStart;
											} else {
												// Different numbers, so store them
												pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
												aStart.push(parseFloat(tStart));
												aEnd.push(parseFloat(tEnd));
											}
										} else {
											// Different units, so put into a "calc(from + to)" and animate each side to/from zero
											var nStart = parseFloat(tStart),
													nEnd = parseFloat(tEnd);

											pattern += (inCalc < 5 ? "calc" : "") + "("
													+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
													+ " + "
													+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd
													+ ")";
											if (nStart) {
												aStart.push(nStart);
												aEnd.push(0);
											}
											if (nEnd) {
												aStart.push(0);
												aEnd.push(nEnd);
											}
										}
									} else if (cStart === cEnd) {
										pattern += cStart;
										iStart++;
										iEnd++;
										// Keep track of being inside a calc()
										if (inCalc === 0 && cStart === "c"
												|| inCalc === 1 && cStart === "a"
												|| inCalc === 2 && cStart === "l"
												|| inCalc === 3 && cStart === "c"
												|| inCalc >= 4 && cStart === "("
												) {
											inCalc++;
										} else if ((inCalc && inCalc < 5)
												|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
											inCalc = 0;
										}
										// Keep track of being inside an rgb() / rgba()
										if (inRGB === 0 && cStart === "r"
												|| inRGB === 1 && cStart === "g"
												|| inRGB === 2 && cStart === "b"
												|| inRGB === 3 && cStart === "a"
												|| inRGB >= 3 && cStart === "("
												) {
											if (inRGB === 3 && cStart === "a") {
												inRGBA = 1;
											}
											inRGB++;
										} else if (inRGBA && cStart === ",") {
											if (++inRGBA > 3) {
												inRGB = inRGBA = 0;
											}
										} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
												|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
											inRGB = inRGBA = 0;
										}
									} else {
										inCalc = 0;
										// TODO: changing units, fixing colours
										break;
									}
								}
								if (iStart !== startValue.length || iEnd !== endValue.length) {
									if (Velocity.debug) {
										console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
									}
									pattern = undefined;
								}
								if (pattern) {
									if (aStart.length) {
										if (Velocity.debug) {
											console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
										}
										startValue = aStart;
										endValue = aEnd;
										endValueUnitType = startValueUnitType = "";
									} else {
										pattern = undefined;
									}
								}
							}

							if (!pattern) {
								/* Separate startValue. */
								separatedValue = separateValue(property, startValue);
								startValue = separatedValue[0];
								startValueUnitType = separatedValue[1];

								/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
								separatedValue = separateValue(property, endValue);
								endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
									operator = subMatch;

									/* Strip the operator off of the value. */
									return "";
								});
								endValueUnitType = separatedValue[1];

								/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
								startValue = parseFloat(startValue) || 0;
								endValue = parseFloat(endValue) || 0;

								/***************************************
								 Property-Specific Value Conversion
								 ***************************************/

								/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
								if (endValueUnitType === "%") {
									/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */
									if (/^(fontSize|lineHeight)$/.test(property)) {
										/* Convert % into an em decimal value. */
										endValue = endValue / 100;
										endValueUnitType = "em";
										/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
									} else if (/^scale/.test(property)) {
										endValue = endValue / 100;
										endValueUnitType = "";
										/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
									} else if (/(Red|Green|Blue)$/i.test(property)) {
										endValue = (endValue / 100) * 255;
										endValueUnitType = "";
									}
								}
							}

							/***************************
							 Unit Ratio Calculation
							 ***************************/

							/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
							 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
							 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
							 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
							 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
							 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
							/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
							 setting values with the target unit type then comparing the returned pixel value. */
							/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
							 of batching the SETs and GETs together upfront outweights the potential overhead
							 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
							/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
							var calculateUnitRatios = function() {

								/************************
								 Same Ratio Checks
								 ************************/

								/* The properties below are used to determine whether the element differs sufficiently from this call's
								 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
								 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
								 this is done to minimize DOM querying. */
								var sameRatioIndicators = {
									myParent: element.parentNode || document.body, /* GET */
									position: CSS.getPropertyValue(element, "position"), /* GET */
									fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
								},
										/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
										samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
										/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
										sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

								/* Store these ratio indicators call-wide for the next element to compare against. */
								callUnitConversionData.lastParent = sameRatioIndicators.myParent;
								callUnitConversionData.lastPosition = sameRatioIndicators.position;
								callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

								/***************************
								 Element-Specific Units
								 ***************************/

								/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
								 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
								var measurement = 100,
										unitRatios = {};

								if (!sameEmRatio || !samePercentRatio) {
									var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

									Velocity.init(dummy);
									sameRatioIndicators.myParent.appendChild(dummy);

									/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
									 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
									/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
									$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, "hidden");
									});
									Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
									Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
									Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

									/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
									$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
									});
									/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
									Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

									/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
									unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

									sameRatioIndicators.myParent.removeChild(dummy);
								} else {
									unitRatios.emToPx = callUnitConversionData.lastEmToPx;
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
								}

								/***************************
								 Element-Agnostic Units
								 ***************************/

								/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
								 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
								 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
								 so we calculate it now. */
								if (callUnitConversionData.remToPx === null) {
									/* Default to browsers' default fontSize of 16px in the case of 0. */
									callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
								}

								/* Similarly, viewport units are %-relative to the window's inner dimensions. */
								if (callUnitConversionData.vwToPx === null) {
									callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
									callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
								}

								unitRatios.remToPx = callUnitConversionData.remToPx;
								unitRatios.vwToPx = callUnitConversionData.vwToPx;
								unitRatios.vhToPx = callUnitConversionData.vhToPx;

								if (Velocity.debug >= 1) {
									console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
								}
								return unitRatios;
							};

							/********************
							 Unit Conversion
							 ********************/

							/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
							if (/[\/*]/.test(operator)) {
								endValueUnitType = startValueUnitType;
								/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
								 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
								 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
								 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
								/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
							} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
								/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
								/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
								 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
								 which remains past the point of the animation's completion. */
								if (endValue === 0) {
									endValueUnitType = startValueUnitType;
								} else {
									/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
									 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
									elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

									/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
									/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
									var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

									/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
									 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
									switch (startValueUnitType) {
										case "%":
											/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
											 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
											 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
											startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* px acts as our midpoint in the unit conversion process; do nothing. */
											break;

										default:
											startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
									}

									/* Invert the px ratios to convert into to the target unit. */
									switch (endValueUnitType) {
										case "%":
											startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* startValue is already in px, do nothing; we're done. */
											break;

										default:
											startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
									}
								}
							}

							/*********************
							 Relative Values
							 *********************/

							/* Operator logic must be performed last since it requires unit-normalized start and end values. */
							/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
							 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
							 50 points is added on top of the current % value. */
							switch (operator) {
								case "+":
									endValue = startValue + endValue;
									break;

								case "-":
									endValue = startValue - endValue;
									break;

								case "*":
									endValue = startValue * endValue;
									break;

								case "/":
									endValue = startValue / endValue;
									break;
							}

							/**************************
							 tweensContainer Push
							 **************************/

							/* Construct the per-property tween object, and push it to the element's tweensContainer. */
							tweensContainer[property] = {
								rootPropertyValue: rootPropertyValue,
								startValue: startValue,
								currentValue: startValue,
								endValue: endValue,
								unitType: endValueUnitType,
								easing: easing
							};
							if (pattern) {
								tweensContainer[property].pattern = pattern;
							}

							if (Velocity.debug) {
								console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
							}
						};

						/* Create a tween out of each property, and append its associated data to tweensContainer. */
						for (var property in propertiesMap) {

							if (!propertiesMap.hasOwnProperty(property)) {
								continue;
							}
							/* The original property name's format must be used for the parsePropertyValue() lookup,
							 but we then use its camelCase styling to normalize it for manipulation. */
							var propertyName = CSS.Names.camelCase(property),
									valueData = parsePropertyValue(propertiesMap[property]);

							/* Find shorthand color properties that have been passed a hex string. */
							/* Would be quicker to use CSS.Lists.colors.includes() if possible */
							if (_inArray(CSS.Lists.colors, propertyName)) {
								/* Parse the value data for each shorthand. */
								var endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2];

								if (CSS.RegEx.isHex.test(endValue)) {
									/* Convert the hex strings into their RGB component arrays. */
									var colorComponents = ["Red", "Green", "Blue"],
											endValueRGB = CSS.Values.hexToRgb(endValue),
											startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

									/* Inject the RGB component tweens into propertiesMap. */
									for (var i = 0; i < colorComponents.length; i++) {
										var dataArray = [endValueRGB[i]];

										if (easing) {
											dataArray.push(easing);
										}

										if (startValueRGB !== undefined) {
											dataArray.push(startValueRGB[i]);
										}

										fixPropertyValue(propertyName + colorComponents[i], dataArray);
									}
									/* If we have replaced a shortcut color value then don't update the standard property name */
									continue;
								}
							}
							fixPropertyValue(propertyName, valueData);
						}

						/* Along with its property data, store a reference to the element itself onto tweensContainer. */
						tweensContainer.element = element;
					}

					/*****************
					 Call Push
					 *****************/

					/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
					 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
					if (tweensContainer.element) {
						/* Apply the "velocity-animating" indicator class. */
						CSS.Values.addClass(element, "velocity-animating");

						/* The call array houses the tweensContainers for each element being animated in the current call. */
						call.push(tweensContainer);

						data = Data(element);

						if (data) {
							/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
							if (opts.queue === "") {

								data.tweensContainer = tweensContainer;
								data.opts = opts;
							}

							/* Switch on the element's animating flag. */
							data.isAnimating = true;
						}

						/* Once the final element in this call's element set has been processed, push the call array onto
						 Velocity.State.calls for the animation tick to immediately begin processing. */
						if (elementsIndex === elementsLength - 1) {
							/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
							 Anything on this call container is subjected to tick() processing. */
							Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

							/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
							if (Velocity.State.isTicking === false) {
								Velocity.State.isTicking = true;

								/* Start the tick loop. */
								tick();
							}
						} else {
							elementsIndex++;
						}
					}
				}

				/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
				if (opts.queue === false) {
					/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
					 we manually inject the delay property here with an explicit setTimeout. */
					if (opts.delay) {

						/* Temporarily store delayed elements to facilitate access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								buildQueue();
							};
						})(callIndex);

						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
							next: delayComplete
						};
					} else {
						buildQueue();
					}
					/* Otherwise, the call undergoes element queueing as normal. */
					/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
				} else {
					$.queue(element, opts.queue, function(next, clearQueue) {
						/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
						 so it's fine if this is repeatedly triggered for each element in the associated call.) */
						if (clearQueue === true) {
							if (promiseData.promise) {
								promiseData.resolver(elements);
							}

							/* Do not continue with animation queueing. */
							return true;
						}

						/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
						 See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						buildQueue(next);
					});
				}

				/*********************
				 Auto-Dequeuing
				 *********************/

				/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
				 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
				 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
				 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
				 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
				/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
				 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
				/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
				 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
				if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
					$.dequeue(element);
				}
			}

			/**************************
			 Element Set Iteration
			 **************************/

			/* If the "nodeType" property exists on the elements variable, we're animating a single element.
			 Place it in an array so that $.each() can iterate over it. */
			$.each(elements, function(i, element) {
				/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
				if (Type.isNode(element)) {
					processElement(element, i);
				}
			});

			/******************
			 Option: Loop
			 ******************/

			/* The loop option accepts an integer indicating how many times the element should loop between the values in the
			 current call's properties map and the element's property values prior to this call. */
			/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
			 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
			 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
			opts = $.extend({}, Velocity.defaults, options);
			opts.loop = parseInt(opts.loop, 10);
			var reverseCallsCount = (opts.loop * 2) - 1;

			if (opts.loop) {
				/* Double the loop count to convert it into its appropriate number of "reverse" calls.
				 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
				for (var x = 0; x < reverseCallsCount; x++) {
					/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
					 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
					 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
					var reverseOptions = {
						delay: opts.delay,
						progress: opts.progress
					};

					/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
					 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
					if (x === reverseCallsCount - 1) {
						reverseOptions.display = opts.display;
						reverseOptions.visibility = opts.visibility;
						reverseOptions.complete = opts.complete;
					}

					animate(elements, "reverse", reverseOptions);
				}
			}

			/***************
			 Chaining
			 ***************/

			/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
			return getChain();
		};

		/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
		Velocity = $.extend(animate, Velocity);
		/* For legacy support, also expose the literal animate method. */
		Velocity.animate = animate;

		/**************
		 Timing
		 **************/

		/* Ticker function. */
		var ticker = window.requestAnimationFrame || rAFShim;

		/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
		 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
		 devices to avoid wasting battery power on inactive tabs. */
		/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
		if (!Velocity.State.isMobile && document.hidden !== undefined) {
			var updateTicker = function() {
				/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
				if (document.hidden) {
					ticker = function(callback) {
						/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
						return setTimeout(function() {
							callback(true);
						}, 16);
					};

					/* The rAF loop has been paused by the browser, so we manually restart the tick. */
					tick();
				} else {
					ticker = window.requestAnimationFrame || rAFShim;
				}
			};

			/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
			updateTicker();

			/* And then run check again every time visibility changes */
			document.addEventListener("visibilitychange", updateTicker);
		}

		/************
		 Tick
		 ************/

		/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
		function tick(timestamp) {
			/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
			 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
			 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
			 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
			 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
			 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
			if (timestamp) {
				/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
				 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
				 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
				var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

				/********************
				 Call Iteration
				 ********************/

				var callsLength = Velocity.State.calls.length;

				/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
				 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
				 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
				if (callsLength > 10000) {
					Velocity.State.calls = compactSparseArray(Velocity.State.calls);
					callsLength = Velocity.State.calls.length;
				}

				/* Iterate through each active call. */
				for (var i = 0; i < callsLength; i++) {
					/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
					if (!Velocity.State.calls[i]) {
						continue;
					}

					/************************
					 Call-Wide Variables
					 ************************/

					var callContainer = Velocity.State.calls[i],
							call = callContainer[0],
							opts = callContainer[2],
							timeStart = callContainer[3],
							firstTick = !!timeStart,
							tweenDummyValue = null,
							pauseObject = callContainer[5],
							millisecondsEllapsed = callContainer[6];



					/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
					 We assign timeStart now so that its value is as close to the real animation start time as possible.
					 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
					 between that time and now would cause the first few frames of the tween to be skipped since
					 percentComplete is calculated relative to timeStart.) */
					/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
					 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
					 same style value as the element's current value. */
					if (!timeStart) {
						timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
					}

					/* If a pause object is present, skip processing unless it has been set to resume */
					if (pauseObject) {
						if (pauseObject.resume === true) {
							/* Update the time start to accomodate the paused completion amount */
							timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

							/* Remove pause object after processing */
							callContainer[5] = null;
						} else {
							continue;
						}
					}

					millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

					/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
					 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
					 Accordingly, we ensure that percentComplete does not exceed 1. */
					var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);

					/**********************
					 Element Iteration
					 **********************/

					/* For every call, iterate through each of the elements in its set. */
					for (var j = 0, callLength = call.length; j < callLength; j++) {
						var tweensContainer = call[j],
								element = tweensContainer.element;

						/* Check to see if this element has been deleted midway through the animation by checking for the
						 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
						if (!Data(element)) {
							continue;
						}

						var transformPropertyExists = false;

						/**********************************
						 Display & Visibility Toggling
						 **********************************/

						/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
						 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
						if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
							if (opts.display === "flex") {
								var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

								$.each(flexValues, function(i, flexValue) {
									CSS.setPropertyValue(element, "display", flexValue);
								});
							}

							CSS.setPropertyValue(element, "display", opts.display);
						}

						/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}

						/************************
						 Property Iteration
						 ************************/

						/* For every element, iterate through each property. */
						for (var property in tweensContainer) {
							/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
							if (tweensContainer.hasOwnProperty(property) && property !== "element") {
								var tween = tweensContainer[property],
										currentValue,
										/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
										 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
										easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

								/******************************
								 Current Value Calculation
								 ******************************/

								if (Type.isString(tween.pattern)) {
									var patternReplace = percentComplete === 1 ?
											function($0, index, round) {
												var result = tween.endValue[index];

												return round ? Math.round(result) : result;
											} :
											function($0, index, round) {
												var startValue = tween.startValue[index],
														tweenDelta = tween.endValue[index] - startValue,
														result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

												return round ? Math.round(result) : result;
											};

									currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
								} else if (percentComplete === 1) {
									/* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
									currentValue = tween.endValue;
								} else {
									/* Otherwise, calculate currentValue based on the current delta from startValue. */
									var tweenDelta = tween.endValue - tween.startValue;

									currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
									/* If no value change is occurring, don't proceed with DOM updating. */
								}
								if (!firstTick && (currentValue === tween.currentValue)) {
									continue;
								}

								tween.currentValue = currentValue;

								/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
								 it can be passed into the progress callback. */
								if (property === "tween") {
									tweenDummyValue = currentValue;
								} else {
									/******************
									 Hooks: Part I
									 ******************/
									var hookRoot;

									/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
									 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
									 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
									 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
									 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
									if (CSS.Hooks.registered[property]) {
										hookRoot = CSS.Hooks.getRoot(property);

										var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

										if (rootPropertyValueCache) {
											tween.rootPropertyValue = rootPropertyValueCache;
										}
									}

									/*****************
									 DOM Update
									 *****************/

									/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
									/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
									var adjustedSetData = CSS.setPropertyValue(element, /* SET */
											property,
											tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
											tween.rootPropertyValue,
											tween.scrollData);

									/*******************
									 Hooks: Part II
									 *******************/

									/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
									if (CSS.Hooks.registered[property]) {
										/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
										if (CSS.Normalizations.registered[hookRoot]) {
											Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
										} else {
											Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
										}
									}

									/***************
									 Transforms
									 ***************/

									/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
									if (adjustedSetData[0] === "transform") {
										transformPropertyExists = true;
									}

								}
							}
						}

						/****************
						 mobileHA
						 ****************/

						/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
						 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
						if (opts.mobileHA) {
							/* Don't set the null transform hack if we've already done so. */
							if (Data(element).transformCache.translate3d === undefined) {
								/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
								Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

								transformPropertyExists = true;
							}
						}

						if (transformPropertyExists) {
							CSS.flushTransformCache(element);
						}
					}

					/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
					 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
					if (opts.display !== undefined && opts.display !== "none") {
						Velocity.State.calls[i][2].display = false;
					}
					if (opts.visibility !== undefined && opts.visibility !== "hidden") {
						Velocity.State.calls[i][2].visibility = false;
					}

					/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
					if (opts.progress) {
						opts.progress.call(callContainer[1],
								callContainer[1],
								percentComplete,
								Math.max(0, (timeStart + opts.duration) - timeCurrent),
								timeStart,
								tweenDummyValue);
					}

					/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
					if (percentComplete === 1) {
						completeCall(i);
					}
				}
			}

			/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
			if (Velocity.State.isTicking) {
				ticker(tick);
			}
		}

		/**********************
		 Call Completion
		 **********************/

		/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
		function completeCall(callIndex, isStopped) {
			/* Ensure the call exists. */
			if (!Velocity.State.calls[callIndex]) {
				return false;
			}

			/* Pull the metadata from the call. */
			var call = Velocity.State.calls[callIndex][0],
					elements = Velocity.State.calls[callIndex][1],
					opts = Velocity.State.calls[callIndex][2],
					resolver = Velocity.State.calls[callIndex][4];

			var remainingCallsExist = false;

			/*************************
			 Element Finalization
			 *************************/

			for (var i = 0, callLength = call.length; i < callLength; i++) {
				var element = call[i].element;

				/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
				/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
				/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
				if (!isStopped && !opts.loop) {
					if (opts.display === "none") {
						CSS.setPropertyValue(element, "display", opts.display);
					}

					if (opts.visibility === "hidden") {
						CSS.setPropertyValue(element, "visibility", opts.visibility);
					}
				}

				/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
				 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
				 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
				 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
				 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
				var data = Data(element);

				if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
					/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
					if (data) {
						data.isAnimating = false;
						/* Clear the element's rootPropertyValueCache, which will become stale. */
						data.rootPropertyValueCache = {};

						var transformHAPropertyExists = false;
						/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
						$.each(CSS.Lists.transforms3D, function(i, transformName) {
							var defaultValue = /^scale/.test(transformName) ? 1 : 0,
									currentValue = data.transformCache[transformName];

							if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
								transformHAPropertyExists = true;

								delete data.transformCache[transformName];
							}
						});

						/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
						if (opts.mobileHA) {
							transformHAPropertyExists = true;
							delete data.transformCache.translate3d;
						}

						/* Flush the subproperty removals to the DOM. */
						if (transformHAPropertyExists) {
							CSS.flushTransformCache(element);
						}

						/* Remove the "velocity-animating" indicator class. */
						CSS.Values.removeClass(element, "velocity-animating");
					}
				}

				/*********************
				 Option: Complete
				 *********************/

				/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
				/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
				if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
					/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
					try {
						opts.complete.call(elements, elements);
					} catch (error) {
						setTimeout(function() {
							throw error;
						}, 1);
					}
				}

				/**********************
				 Promise Resolving
				 **********************/

				/* Note: Infinite loops don't return promises. */
				if (resolver && opts.loop !== true) {
					resolver(elements);
				}

				/****************************
				 Option: Loop (Infinite)
				 ****************************/

				if (data && opts.loop === true && !isStopped) {
					/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
					 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
					$.each(data.tweensContainer, function(propertyName, tweenContainer) {
						if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
							var oldStartValue = tweenContainer.startValue;

							tweenContainer.startValue = tweenContainer.endValue;
							tweenContainer.endValue = oldStartValue;
						}

						if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
							tweenContainer.endValue = 0;
							tweenContainer.startValue = 100;
						}
					});

					Velocity(element, "reverse", {loop: true, delay: opts.delay});
				}

				/***************
				 Dequeueing
				 ***************/

				/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
				 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
				 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
				if (opts.queue !== false) {
					$.dequeue(element, opts.queue);
				}
			}

			/************************
			 Calls Array Cleanup
			 ************************/

			/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
			 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
			Velocity.State.calls[callIndex] = false;

			/* Iterate through the calls array to determine if this was the final in-progress animation.
			 If so, set a flag to end ticking and clear the calls array. */
			for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
				if (Velocity.State.calls[j] !== false) {
					remainingCallsExist = true;

					break;
				}
			}

			if (remainingCallsExist === false) {
				/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
				Velocity.State.isTicking = false;

				/* Clear the calls array so that its length is reset. */
				delete Velocity.State.calls;
				Velocity.State.calls = [];
			}
		}

		/******************
		 Frameworks
		 ******************/

		/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
		 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
		 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
		 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
		 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
		global.Velocity = Velocity;

		if (global !== window) {
			/* Assign the element function to Velocity's core animate() method. */
			global.fn.velocity = animate;
			/* Assign the object function's defaults to Velocity's global defaults object. */
			global.fn.velocity.defaults = Velocity.defaults;
		}

		/***********************
		 Packaged Redirects
		 ***********************/

		/* slideUp, slideDown */
		$.each(["Down", "Up"], function(i, direction) {
			Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						begin = opts.begin,
						complete = opts.complete,
						inlineValues = {},
						computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};

				if (opts.display === undefined) {
					/* Show the element before slideDown begins and hide the element after slideUp completes. */
					/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
					opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
				}

				opts.begin = function() {
					/* If the user passed in a begin callback, fire it now. */
					if (elementsIndex === 0 && begin) {
						begin.call(elements, elements);
					}

					/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
					for (var property in computedValues) {
						if (!computedValues.hasOwnProperty(property)) {
							continue;
						}
						inlineValues[property] = element.style[property];

						/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
						 use forcefeeding to start from computed values and animate down to 0. */
						var propertyValue = CSS.getPropertyValue(element, property);
						computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
					}

					/* Force vertical overflow content to clip so that sliding works as expected. */
					inlineValues.overflow = element.style.overflow;
					element.style.overflow = "hidden";
				};

				opts.complete = function() {
					/* Reset element to its pre-slide inline values once its slide animation is complete. */
					for (var property in inlineValues) {
						if (inlineValues.hasOwnProperty(property)) {
							element.style[property] = inlineValues[property];
						}
					}

					/* If the user passed in a complete callback, fire it now. */
					if (elementsIndex === elementsSize - 1) {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					}
				};

				Velocity(element, computedValues, opts);
			};
		});

		/* fadeIn, fadeOut */
		$.each(["In", "Out"], function(i, direction) {
			Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						complete = opts.complete,
						propertiesMap = {opacity: (direction === "In") ? 1 : 0};

				/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
				 callbacks by firing them only when the final element has been reached. */
				if (elementsIndex !== 0) {
					opts.begin = null;
				}
				if (elementsIndex !== elementsSize - 1) {
					opts.complete = null;
				} else {
					opts.complete = function() {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					};
				}

				/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
				/* Note: We allow users to pass in "null" to skip display setting altogether. */
				if (opts.display === undefined) {
					opts.display = (direction === "In" ? "auto" : "none");
				}

				Velocity(this, propertiesMap, opts);
			};
		});

		return Velocity;
	}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
}));

/******************
 Known Issues
 ******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ }),

/***/ "AWg3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Auu1":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("06P5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("K27U")
/* template */
var __vue_template__ = __webpack_require__("nRI9")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-56ce17f8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/newcard/esl_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] esl_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56ce17f8", Component.options)
  } else {
    hotAPI.reload("data-v-56ce17f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "Az44":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/boy_4-2a9fde17aba9ef691e409ca977c53f28.png";

/***/ }),

/***/ "BSsF":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("sapW")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("LGtS")
/* template */
var __vue_template__ = __webpack_require__("0421")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-617a35c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/newcard/escalate_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] escalate_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-617a35c6", Component.options)
  } else {
    hotAPI.reload("data-v-617a35c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "BmAO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_form_urlencoded__ = __webpack_require__("YVjH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_form_urlencoded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_form_urlencoded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dragon_js__ = __webpack_require__("mYWi");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ifShow: false,
      ifShowWarningText: false,
      isSignUpAgreementShow: false,
      isPrivacyAgreementShow: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (__WEBPACK_IMPORTED_MODULE_3__utils_dragon_js__["a" /* default */].isOnDragonClient()) {
      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/pc/studentBehavior/getStudentBasicRulesRecord', {
        params: {
          parentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get('parentId')
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data.agree === false) {
            _this.ifShow = true;
          }
        }
      });
    }
  },

  methods: {
    close: function close() {
      this.isSignUpAgreementShow = false;
      this.isPrivacyAgreementShow = false;
    },
    show: function show(type) {
      if (type == 1) {
        this.isSignUpAgreementShow = true;
        this.isPrivacyAgreementShow = false;
      } else if (type == 2) {
        this.isPrivacyAgreementShow = true;
        this.isSignUpAgreementShow = false;
      }
    },
    no: function no() {
      sa.track('learning_click', { 'click_id': 'pc_learning_user_agreement_choose_disagree' });
      this.ifShowWarningText = true;
    },
    yes: function yes() {
      var _this2 = this;

      sa.track('learning_click', { 'click_id': 'pc_learning_user_agreement_choose_agree' });
      var dragonClientUA = navigator.userAgent.match(/vipkid\/\d+(\.\d+)*/i);
      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].post('/rest/learninggw/api/pc/studentBehavior/setStudentBasicRulesRecordAgree', __WEBPACK_IMPORTED_MODULE_2_form_urlencoded___default.a({
        parentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get('parentId'),
        studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get('studentId'),
        deviceVersion: dragonClientUA ? dragonClientUA[0].split('/')[1] : '0'
      })).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data.agree === true) {
            _this2.ifShow = false;
          }
        } else {
          _this2.ifShow = false;
        }
      }).catch(function (err) {
        _this2.ifShow = false;
      });
    }
  }
});

/***/ }),

/***/ "C1Sa":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "work-content"
  }, [_c('transition-group', {
    attrs: {
      "enter-active-class": "animated fadeInDown"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentPanelState == 'face'),
      expression: "currentPanelState=='face'"
    }],
    key: "1",
    staticClass: "panel-face"
  }, [(!_vm.isFinishWork) ? [_c('div', {
    staticClass: "work-img work-img-disable"
  }), ([14].indexOf(this.config.cardType) > -1) ? [_c('div', {
    staticClass: "prework-text"
  }, [_vm._v(_vm._s(_vm.blackText))]), _c('div', {
    staticClass: "prework-result-text"
  }, [_vm._v(_vm._s(_vm.toeflResultText ? _vm.toeflResultText : '--'))])] : ([11].indexOf(this.config.cardType) == -1) ? [_c('div', {
    staticClass: "work-state work-state-disable"
  }, [_c('div', {
    staticClass: "work-state-left"
  }, [_c('div', {
    staticClass: "ws-right"
  }, [_vm._v("-")]), _c('div', {
    staticClass: "icon-gray-right"
  })]), _c('div', {
    staticClass: "work-state-right"
  }, [_c('div', {
    staticClass: "icon-gray-error"
  }), _c('div', {
    staticClass: "ws-error"
  }, [_vm._v("-")])])])] : _vm._e()] : [_c('div', {
    staticClass: "work-img work-img-enable"
  }), ([14].indexOf(this.config.cardType) > -1) ? [_c('div', {
    staticClass: "prework-text"
  }, [_vm._v(_vm._s(_vm.blackText))]), _c('div', {
    staticClass: "prework-result-text"
  }, [_vm._v(_vm._s(_vm.toeflResultText ? _vm.toeflResultText : '--'))])] : ([11].indexOf(this.config.cardType) == -1) ? [_c('div', {
    staticClass: "work-state"
  }, [_c('div', {
    staticClass: "work-state-left"
  }, [_c('div', {
    staticClass: "ws-right"
  }, [_vm._v(_vm._s(_vm.homeworkRight))]), _c('div', {
    staticClass: "icon-green-right"
  })]), _c('div', {
    staticClass: "work-state-right"
  }, [_c('div', {
    staticClass: "icon-green-error"
  }), _c('div', {
    staticClass: "ws-error"
  }, [_vm._v(_vm._s(_vm.homeworkLeft))])])])] : _vm._e()], _c('vk-btn', {
    staticClass: "work-btn",
    attrs: {
      "type": _vm.workBtn.type,
      "text": _vm.workBtn.text,
      "isNewTab": _vm.workBtn.isNew,
      "clickFun": _vm.goHomework,
      "clickId": "homepage_btn_homework"
    }
  }), _c('vk-progress', {
    attrs: {
      "pps": _vm.pps
    }
  })], 2), (_vm.currentPanelState == 'back') ? _c('back-card', {
    key: "2",
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a86ff7f2", module.exports)
  }
}

/***/ }),

/***/ "C7+h":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "C99X":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/sound/click_sound-24cf3f65bcdfc615785765d9605fff28.wav";

/***/ }),

/***/ "CNzm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_velocity_animate__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      airCrafts: [],
      galaxy1: null,
      galaxy2: null
    };
  },
  components: {},
  computed: {},
  mounted: function mounted() {
    this.initAircraft();
    //关闭背景动画
    //this.initGalaxy()
    //setInterval(() => {
    //this.initGalaxy()
    //}, 200500)
  },

  methods: {
    initGalaxy: function initGalaxy() {
      var _this = this;

      var width = this.$refs.galaxy1.clientHeight / 768 * 2810;
      this.$refs.galaxy1.style.width = width + "px";
      this.$refs.galaxy2.style.width = width + "px";
      this.$refs.galaxy2.style.left = width + "px";
      __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default.a(this.$refs.galaxy1, {
        left: -width + "px"
      }, {
        duration: 100000,
        easing: "linear",
        complete: function complete() {
          _this.$refs.galaxy1.style.left = width + "px";
          __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default.a(_this.$refs.galaxy1, {
            left: "0px"
          }, {
            duration: 100000,
            easing: "linear",
            complete: function complete() {
              _this.$refs.galaxy1.style.left = "0px";
            }
          });
        }
      });

      __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default.a(this.$refs.galaxy2, {
        left: "0px"
      }, {
        duration: 100000,
        easing: "linear",
        complete: function complete() {
          __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default.a(_this.$refs.galaxy2, {
            left: -width + "px"
          }, {
            duration: 100000,
            easing: "linear",
            complete: function complete() {
              _this.$refs.galaxy2.style.left = width + "px";
            }
          });
        }
      });
    },

    //获取飞船
    initAircraft: function initAircraft() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('/rest/learninggw/api/pc/service/aircraft/findPage?current=1', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_0_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          _this2.aircrafts = res.data.data;
        }
      }).catch(function (error) {});
    }
  }
});

/***/ }),

/***/ "Cmin":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__honor_vue__ = __webpack_require__("8MWz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__honor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__honor_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_vk_tip_vue__ = __webpack_require__("I9Vc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_vk_tip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_vk_tip_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_vk_number_vue__ = __webpack_require__("lxsw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_vk_number_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__common_vk_number_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_info_vue__ = __webpack_require__("yk9G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__student_info_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isShowUserInfo: false,
      isShowMajorExtensionTip: false,
      isHaveConfirmOrderFlag: false,
      honorShow: false,
      timeouts: [],
      impelNumber: "0",
      isShowAddNumber: false,
      //显示promotion
      isHavePromotion: false,
      //用户课程入口 hide,new,locked,unlocked
      courseEnterState: {
        major: "hide",
        extension: "hide",
        supplementary: "hide",
        lib: "hide"
      },
      //梦想绘本入口
      showDreamEntry: false,
      //梦想绘本入口路由
      dreamEntryPatch: '',
      //排行榜入口
      showRankEntry: false,
      hasNewHonor: false //拥有新勋章
    };
  },
  components: {
    Honor: __WEBPACK_IMPORTED_MODULE_0__honor_vue___default.a, vkTip: __WEBPACK_IMPORTED_MODULE_4__common_vk_tip_vue___default.a, slideText: __WEBPACK_IMPORTED_MODULE_5__common_vk_slide_text_vue___default.a, number: __WEBPACK_IMPORTED_MODULE_6__common_vk_number_vue___default.a, studentInfo: __WEBPACK_IMPORTED_MODULE_7__student_info_vue___default.a
  },
  props: {
    userInfo: {
      type: Object,
      required: false,
      default: {
        studentName: "---",
        studentAvatar: "",
        currentUnit: "--",
        currentLevel: "--",
        finishPercent: 0,
        starNum: 0,
        eggShellNum: 0,
        isShow: false
      }
    }
  },
  watch: {
    userInfo: function userInfo(n, o) {
      var _this = this;

      if (o.eggShellNum == undefined) {
        return;
      }
      this.impelNumber = n.eggShellNum - o.eggShellNum + "";
      //显示能量石增加
      if (this.impelNumber > 0) {
        this.timeouts.push(setTimeout(function () {
          _this.isShowAddNumber = true;
        }, 2500));
        this.timeouts.push(setTimeout(function () {
          _this.isShowAddNumber = false;
        }, 4000));
      }
      //显示勋章增加
      this.hasNewHonor = n.medalNum - o.medalNum > 0;
    }
  },
  beforeDestroy: function beforeDestroy() {
    //销毁所有setTimeout
    for (var i = 0; i < this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i]);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    //孩子兑换了礼品，但是家长没有同意的情况下弹出提示窗
    this.isHaveNoConfirmOrder();
    // TODO 营销活动入口
    this.showPromotion();
    //右上角 课程入口
    this.timeouts.push(setTimeout(function () {
      _this2.libEnter();
      _this2.majorEnterState();
      _this2.supplementEnterState();
      _this2.majorExtensionEnterState();
    }, 1000));
    this.checkDreamEntry();
    this.checkRankEntry();
  },

  methods: {
    //电子贺卡入口
    goToECard: function goToECard() {
      sa.track('learning_click', { 'click_id': 'pc_learning_homepage_enter_greeting_cards' });
      this.$router.push({ path: '/greeting_cards' });
    },

    //检查排行榜入口
    checkRankEntry: function checkRankEntry() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/rank/score/getEntranceStatusByStudentId', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data === 'SHOW' || res.data.data === 'NEED_AGREE_PROTOCOL') {
            _this3.showRankEntry = true;
          }
        }
      });
    },

    //跳转排行榜
    goToRankings: function goToRankings() {
      sa.track('learning_click', { 'click_id': 'pc_learning_homepage_enter_rankings' });
      this.$router.push({ path: '/rankings' });
    },

    //跳转梦想绘本页
    goToDream: function goToDream() {
      if (this.dreamEntryPatch === '') {
        return;
      }
      sa.track('learning_click', { 'click_id': 'pc_learning_homepage_enter_dream_book' });
      this.$router.push({ path: this.dreamEntryPatch });
    },

    //检查梦想绘本入口
    checkDreamEntry: function checkDreamEntry() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/service/digitlib/getDreamBookRouteInfo', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data.isActivityOpen) {
            _this4.showDreamEntry = true;
            _this4.dreamEntryPatch = '/digitalLibrary/detail/' + res.data.data.dreamBookId + '/' + res.data.data.dreamBookCode;
          } else {
            _this4.showDreamEntry = false;
          }
        }
      });
    },

    //数字图书馆灰度接口
    libEnter: function libEnter() {
      var _this5 = this;

      __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/service/digitlib/' + __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId") + '/isPayUser').then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data) {
            _this5.courseEnterState.lib = "unlocked";
          } else {
            _this5.courseEnterState.lib = "hide";
          }
        }
      });
    },

    //主修入口
    majorEnterState: function majorEnterState() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/path/majorCourse/getMajorCoursePathPermission', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data == 1) {
            _this6.courseEnterState.major = "unlocked";
          } else {
            _this6.courseEnterState.major = "hide";
          }
        }
      }).catch(function (error) {});
    },

    //辅修课
    supplementEnterState: function supplementEnterState() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/path/elective/getPermisson', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data) {
            _this7.courseEnterState.supplementary = "unlocked";
          } else {
            _this7.courseEnterState.supplementary = "hide";
          }
        }
      }).catch(function (error) {});
    },

    //主修拓展
    majorExtensionEnterState: function majorExtensionEnterState() {
      var _this8 = this;

      return __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/material/getMaterialEntryInfoBySID', {
        params: {
          sid: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          _this8.courseEnterState.extension = res.data.data.status;
        }
      }).catch(function (error) {});
    },

    //是否显示Promotion
    showPromotion: function showPromotion() {
      var _this9 = this;

      return __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/service/arbor/isArborActivityOpen', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data) {
            _this9.isHavePromotion = true;
          }
        }
      });
    },

    //打开勋章弹窗
    showHonor: function showHonor() {
      this.honorShow = true;
      this.hasNewHonor = false;
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_honor'
      });
      this.$playSound("click");
    },

    //关闭勋章弹窗
    closeHonor: function closeHonor() {
      this.honorShow = false;
      this.$playSound("click");
    },

    //打开用户信息弹窗
    openUseInfo: function openUseInfo() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_open_user_info'
      });
      this.isShowUserInfo = true;
    },

    //关闭用户信息弹窗
    closeUserInfo: function closeUserInfo() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_close_user_info'
      });
      this.isShowUserInfo = false;
    },

    //去参加营销活动
    goToPromotion: function goToPromotion() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_promotion_star_lottery'
      });
      this.$playSound("click");
      window.location.href = "/star_lottery/index.html";
    },
    goToLib: function goToLib() {
      this.courseEnterState.lib == 'locked' ? null : this.$router.push({ path: '/digitalLibrary' });
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_lib'
      });
      this.$playSound("click");
    },
    goToSupplementary: function goToSupplementary() {
      this.courseEnterState.supplementary == 'locked' ? null : this.$router.push({ path: '/extension' });
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_supplementary'
      });
      this.$playSound("click");
    },
    goToMajor: function goToMajor() {
      this.courseEnterState.major == 'locked' ? null : this.$router.push({ path: '/major_course_catalog' });
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_major'
      });
      this.$playSound("click");
    },
    goToMajorExtension: function goToMajorExtension() {
      this.courseEnterState.extension == 'locked' ? this.isShowMajorExtensionTip = true : this.$router.push({ path: '/major_extension_mc' });
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_major_extension'
      });
      this.$playSound("click");
    },

    //星星商店
    goToStar: function goToStar() {
      this.$router.push({ path: '/star_store' });
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_star'
      });
      this.$playSound("click");
    },

    //打开能量站
    goToHotActivity: function goToHotActivity() {
      this.$router.push({ path: '/gift_exchange' });
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_gift'
      });
      this.$playSound("click");
    },

    //判断是否在七天内有未确认的订单
    isHaveNoConfirmOrder: function isHaveNoConfirmOrder() {
      var _this10 = this;

      __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/eshop/order/get7DayNotConfirmedOrderCount', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200 && res.data.data > 0) {
          _this10.isHaveConfirmOrderFlag = true;
        }
      });
    },

    //关闭订单窗口
    closeConfirmOrderTrips: function closeConfirmOrderTrips() {
      this.isHaveConfirmOrderFlag = false;
    }
  }
});

/***/ }),

/***/ "D0wG":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "number-wap"
  }, [_c('div', {
    staticClass: "text",
    class: 'text-x-' + _vm.type
  }), _vm._l((_vm.numbers), function(i, index) {
    return _c('div', {
      staticClass: "text",
      class: 'text-' + _vm.type,
      style: ({
        backgroundPosition: '-5px -' + i * 44 + 'px',
        transitionDelay: index * 0.2 + 's'
      })
    })
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76e156da", module.exports)
  }
}

/***/ }),

/***/ "D69Y":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vk-net-error"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("2Dpi")
    }
  }), _c('div', {
    staticClass: "vk-net-info"
  }, [_vm._v("网络连接好像有点问题，是否重新尝试？")]), _c('div', {
    staticClass: "vk-btn-reload",
    on: {
      "click": _vm.errorReload
    }
  }, [_vm._v("刷新重试")])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-178edf36", module.exports)
  }
}

/***/ }),

/***/ "DI8/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reader_card_vue__ = __webpack_require__("6YY+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reader_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__reader_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pre_video_vue__ = __webpack_require__("4xnn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pre_video_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pre_video_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_card_vue__ = __webpack_require__("ND+b");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__star_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_card_vue__ = __webpack_require__("zSKq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__work_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_card_vue__ = __webpack_require__("ry59");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__test_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_card_vue__ = __webpack_require__("qxey");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__video_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__it_test_card_vue__ = __webpack_require__("2dln");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__it_test_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__it_test_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_card_vue__ = __webpack_require__("tnpE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__message_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__extension_card_vue__ = __webpack_require__("xu8o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__extension_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__extension_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error_card_vue__ = __webpack_require__("JfMu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__error_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__common_vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_course_courseEnum__ = __webpack_require__("VDN5");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
















/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isShowPet: false,
      videoConfig: {
        videoSrc: "",
        autoPlay: true,
        materialId: "1",
        source: "",
        title: "指导视频",
        closeVideoFun: null
      },
      //课程参数定义的详情，请查看WIKI: http://wiki.vipkid.com.cn/pages/viewpage.action?pageId=33141779
      cardTypeEnum: __WEBPACK_IMPORTED_MODULE_13__common_course_courseEnum__["c" /* CARD_TYPE */],
      //对应接口参数 courseCardStatus
      majorStateEnum: {
        pre: 0, //预习状态
        on: 1, //上课状态
        onHomeWork: 2, //做作业状态
        after: 3, //课程已经完成
        onResult: 4 //查看结果
      },
      //以12：00的课为例,对应接口参数lessonStatus
      lessonStatusEnum: {
        unBooked: 0, //未约
        booked: 1, //已约，未开始 11:30之前
        inClass: 2, //课程前30分钟至课程结束 11：30 -- 12：30
        outClass: 3, //已下课 12：30 -- 13：00
        classOver: 4, //课程结束后30分钟 13：00之后
        classReplay: 5 //FINISHED & AS_SCHEDULED 课程状态变成FINISHED之后
      },
      ui: {
        $cardHand: null,
        cardBg: "pre-card",
        cardBgLight: "",
        currentPanelState: "face",
        cardHandTop: 30,
        lessonAnimationEnter: false,
        lessonAnimationOut: false,
        isHandAnimationing: false
      },
      data: {}
    };
  },
  /*
   config后端传过来的示例数据
   "courseType":"MAJOR",
   "courseCardStatus":2, //枚举CourseCardStatus 标识卡片应该处于哪个页面
   "afterHomeworkTotal":0, //课后作业总体数目
   "homeworkStatus":0, // 0为未做作业 1为已做作业
   "pptButton":2, //枚举HomePageStatusEnum
   "scheduledDateTime":1497859200000,
   "afterHomeworkButtonText":"做作业",
   "classroomButton":2, //枚举HomePageStatusEnum
   "finishType":"AS_SCHEDULED",
   "pptButtonText":"查看课件",
   "preHomeworkButtonText":"已预习",
   "lessonName":"Lesson 5 Who am I? 5",
   "cardType":0, //枚举CardType 标识卡片的类型
   "courseId":597816,
   "teacherAvatar":"https://teacher-media.vipkid.com.cn/teacher/avatar/2035617/avatar_large/image_20161222190718_a4510e63f4964b0bb7997aa39835059b.png",
   "lessonStatus":5,
   "lessonTopic":"Who am I?",
   "teacherName":"testtea 测试不要约课",
   "lessonId":842636,
   "classStatus":"FINISHED",
   "stars":0,
   "preHomeworkStatus":1, // 0为未预习 1为已预习
   "afterHomeworkRight":0,
   "afterHomeworkButton":2, //枚举HomePageStatusEnum
   "courseName":"Major Course 2016",
   "onlineClassId":17860740,
   "preHomewordImg":"https://image.vipkid.com.cn/preclass/MC-L1-U11-LC2-6.png", //预习的预览图片
   "preHomeworkButton":3, //枚举HomePageStatusEnum
   "classroomButtonText":"课程回放",
   "afterHomeworkImg":null //作业的图片 目前还没拿到资源后续补充
   * */
  props: {
    config: {
      type: Object,
      required: false,
      default: {}
    },
    petImgSrc: {
      type: String,
      required: false
    }
  },
  components: {
    preCourse: __WEBPACK_IMPORTED_MODULE_1__pre_video_vue___default.a, star: __WEBPACK_IMPORTED_MODULE_2__star_card_vue___default.a, work: __WEBPACK_IMPORTED_MODULE_3__work_card_vue___default.a, test: __WEBPACK_IMPORTED_MODULE_4__test_card_vue___default.a, videoCard: __WEBPACK_IMPORTED_MODULE_5__video_card_vue___default.a, message: __WEBPACK_IMPORTED_MODULE_7__message_card_vue___default.a, extension: __WEBPACK_IMPORTED_MODULE_10__extension_card_vue___default.a, error: __WEBPACK_IMPORTED_MODULE_11__error_card_vue___default.a, slideText: __WEBPACK_IMPORTED_MODULE_12__common_vk_slide_text_vue___default.a, readerCard: __WEBPACK_IMPORTED_MODULE_0__reader_card_vue___default.a, afterCourse: __WEBPACK_IMPORTED_MODULE_1__pre_video_vue___default.a, itTest: __WEBPACK_IMPORTED_MODULE_6__it_test_card_vue___default.a
  },
  computed: {},
  mounted: function mounted() {
    this.ui.$cardHand = this.$refs.cardHand;
    this.initTopBg();
  },

  methods: {
    initTopBg: function initTopBg() {
      if ([0].indexOf(this.config.cardType) > -1) {
        if ([this.lessonStatusEnum.inClass].indexOf(this.config.lessonStatus) > -1) {
          this.ui.cardBgLight = "major-access-class-light";
          this.isShowPet = true;
        }
      }
      if ([2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(this.config.cardType) > -1) {
        this.ui.cardBg = "open-card";
        //进教室
        if ([this.lessonStatusEnum.inClass].indexOf(this.config.lessonStatus) > -1) {
          this.ui.cardBgLight = "open-access-class-light";
          this.isShowPet = true;
        }
      }
      if (this.config.cardType == this.cardTypeEnum.kidVideo) {
        this.ui.cardBg = "kid-card";
      }
      if (this.config.cardType == this.cardTypeEnum.parentVideo) {
        this.ui.cardBg = "parent-card";
      }
      if ([9, 100].indexOf(this.config.cardType) > -1) {
        this.ui.cardBg = "message-card";
      }
      if ([200].indexOf(this.config.cardType) > -1) {
        // it test card
        this.ui.cardBg = "it-test-card";
      }
      if (this.config.cardType == this.cardTypeEnum['testCourse']) {
        this.ui.cardBg = "test-card";
      }
      if (this.config.cardType == this.cardTypeEnum.majorExtension) {
        this.config.lessonName = this.config.newCard.lessonName;
        this.ui.cardBg = "extension-card";
      }
      if (this.config.cardType == this.cardTypeEnum.projectDemo) {
        this.config.lessonName = this.config.subTitle;
        this.config.name = this.config.mainTitle;
        this.ui.cardBg = "project-demo-card";
      }
    },
    weekTime: function weekTime() {
      return __WEBPACK_IMPORTED_MODULE_8__utils_untils__["b" /* default */].weekTime(this.config.scheduledDateTime);
    },
    dateTime: function dateTime() {
      return __WEBPACK_IMPORTED_MODULE_8__utils_untils__["b" /* default */].dateTime(this.config.scheduledDateTime);
    },
    handClick: function handClick() {
      var _this = this;

      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_hand_pull'
      });
      if (!this.ui.isHandAnimationing) {
        this.ui.isHandAnimationing = true;
        __WEBPACK_IMPORTED_MODULE_9_velocity_animate___default.a(this.ui.$cardHand, { top: "80px" }, {
          easing: "spring", mobileHA: false,
          duration: 500, complete: function complete() {
            if (_this.ui.currentPanelState == "back") {
              _this.ui.currentPanelState = "face";
            } else {
              _this.ui.currentPanelState = "back";
            }
            _this.$emit("handToBack");
            __WEBPACK_IMPORTED_MODULE_9_velocity_animate___default.a(_this.ui.$cardHand, { top: "30px" }, {
              duration: 500, mobileHA: false,
              complete: function complete() {
                _this.ui.isHandAnimationing = false;
              }
            });
          }
        });
        __WEBPACK_IMPORTED_MODULE_9_velocity_animate___default.a(this.$refs.handLine, { height: "80px" }, {
          easing: "spring",
          duration: 500, complete: function complete() {
            __WEBPACK_IMPORTED_MODULE_9_velocity_animate___default.a(_this.$refs.handLine, { height: "30px" }, {
              duration: 500, mobileHA: false
            });
          }
        });
      }
      this.$playSound("click");
    },
    handPull: function handPull(e) {
      var _this2 = this;

      window.event.returnValue = false;
      e.preventDefault();
      e.stopPropagation();
      var y = e.clientY;
      var hy = this.ui.cardHandTop;
      this.ui.$cardHand.onmousemove = function (ec) {
        var cy = ec.clientY - y;
        _this2.ui.cardHandTop = hy + cy;
        if (_this2.ui.cardHandTop > 30 || _this2.ui.cardHandTop == 30) {
          if (_this2.ui.cardHandTop > 80) {
            _this2.ui.cardHandTop = 30;
            _this2.ui.$cardHand.onmousemove = null;
            _this2.$emit("handToBack");
            _this2.$playSound("click");
            sa.track('learning_click', {
              'click_id': 'pc_learning_homepage_hand_pull'
            });
            if (_this2.ui.currentPanelState == "back") {
              _this2.ui.currentPanelState = "face";
            } else {
              _this2.ui.currentPanelState = "back";
            }
          }
        } else {
          _this2.ui.cardHandTop = 30;
          _this2.ui.$cardHand.onmousemove = null;
        }
      };
      window.onmouseup = function () {
        _this2.ui.$cardHand.onmousemove = null;
      };
    },
    handHover: function handHover() {
      var _this3 = this;

      if (this.$refs.hand.style.animation == "none" || this.$refs.hand.style.animation == "") {
        this.$refs.hand.style.animation = "swing 1.5s";
        setTimeout(function () {
          _this3.$refs.hand.style.animation = "none";
        }, 1500);
      }
    }
  }
});

/***/ }),

/***/ "DVFi":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pre-progress",
    class: _vm.pps.length == 2 ? 'pre-progress-2' : ''
  }, [_vm._l((_vm.pps), function(pp, index) {
    return [_c('div', {
      staticClass: "pp-item",
      class: _vm.pps.length == 1 ? 'pp-item-center' : ''
    }, [_c('div', {
      staticClass: "pp-circle",
      class: 'pp-circle-' + pp.state
    }), _c('div', {
      staticClass: "pp-name",
      class: 'pp-name-' + pp.state
    }, [_vm._v(_vm._s(pp.name))])]), (index != _vm.pps.length - 1) ? _c('div', {
      staticClass: "pp-line",
      class: 'pp-line-' + _vm.pps[index + 1].state
    }) : _vm._e()]
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c2b74e24", module.exports)
  }
}

/***/ }),

/***/ "Ddd8":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flash-card"
  }, [_c('div', {
    staticClass: "flash-img flash-img-enable",
    class: {
      'flash-img-disable': _vm.cardConfig.status == 0
    }
  }), _c('div', {
    staticClass: "work-text"
  }, [_vm._v(_vm._s(_vm.cardConfig.colorTitle))]), _c('div', {
    staticClass: "work-result-text"
  }, [_vm._v(_vm._s(_vm.cardConfig.colorText ? _vm.cardConfig.colorText : '--'))])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3fcb3bf4", module.exports)
  }
}

/***/ }),

/***/ "Dlum":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("lLYD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("aJ50")
/* template */
var __vue_template__ = __webpack_require__("6SSo")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e2cd6b9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/test_result.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test_result.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e2cd6b9", Component.options)
  } else {
    hotAPI.reload("data-v-3e2cd6b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "FJML":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FP70":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

//  {
//    "cardType":9,
//    "show":true,
//    "infoText":"宝贝有一节试听课哦！",
//    "scheduledDateTime":95617615188732
//  }
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['config'],
  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "GCF1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_cards_vue__ = __webpack_require__("5Ymm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_cards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__card_cards_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newcard_esl_card_vue__ = __webpack_require__("Auu1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newcard_esl_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__newcard_esl_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newcard_escalate_card_vue__ = __webpack_require__("BSsF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newcard_escalate_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__newcard_escalate_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newcard_trial_card_vue__ = __webpack_require__("6y9l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__newcard_trial_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__newcard_trial_card_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      emptyCard: {
        "cardType": 100,
        "show": true,
        "infoText": "加载失败了",
        "scheduledDateTime": 95617615188732
      }
    };
  },
  props: ['configCards', 'isErrorCardShowConfig', 'petImgSrc'],
  components: {
    card: __WEBPACK_IMPORTED_MODULE_1__card_cards_vue___default.a,
    eslCard: __WEBPACK_IMPORTED_MODULE_2__newcard_esl_card_vue___default.a,
    escalateCard: __WEBPACK_IMPORTED_MODULE_3__newcard_escalate_card_vue___default.a,
    trialCard: __WEBPACK_IMPORTED_MODULE_4__newcard_trial_card_vue___default.a
  },
  methods: {
    //卡动画
    cardEnterAnimation: function cardEnterAnimation(el) {
      var delay = parseInt(el.dataset.index) * 150;
      __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(el, {
        transform: "scale(1,1)",
        opacity: 1
      }, {
        easing: "spring",
        duration: 2000,
        delay: delay
      });
    },
    cardBeforeEnterAnimation: function cardBeforeEnterAnimation(el) {
      el.style.transform = "scale(0, 0)";
      el.style.opacity = 0;
    },
    leaveBefore: function leaveBefore() {
      //销毁所有setinterval clearTimeout
      for (var i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
      }
      for (var i = 0; i < this.intervals.length; i++) {
        clearInterval(this.intervals[i]);
      }
    }
  }
});

/***/ }),

/***/ "GKKX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__readers_api_js__ = __webpack_require__("TfaS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_book_detail_vue__ = __webpack_require__("QSaF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_book_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__common_book_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__common_vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_plugins_Model__ = __webpack_require__("oHet");
//
//
//
//
//
//
//
//
//
//
//
//










__WEBPACK_IMPORTED_MODULE_6_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8__common_plugins_Model__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      $exCon: null,
      bottomShow: true,
      topShow: false,
      bookDetailTpl: null
    };
  },
  props: ['config'],
  components: {
    slideText: __WEBPACK_IMPORTED_MODULE_7__common_vk_slide_text_vue___default.a
  },
  computed: {},
  mounted: function mounted() {
    this.$exCon = this.$refs.exCon;
    if (this.config.newCard.mList.length < 5) {
      this.bottomShow = false;
      this.topShow = false;
    }
  },

  methods: {
    goToDetail: function goToDetail(m) {
      if (m.itemType == "video") {
        this.$router.push({ path: '/major_extension/extension_video/' + m.biz_code });
      }
      if (m.itemType == "book") {
        m.router = this.$router;
        m.source = __WEBPACK_IMPORTED_MODULE_2__utils_untils__["b" /* default */].clickEventConst.PC_HOMEPAGE_ENTRANCE;
        m.model = __WEBPACK_IMPORTED_MODULE_5__common_book_detail_vue___default.a;
        this.$modelShow(m);
      }
    },
    listScrollListener: function listScrollListener() {
      if (this.$exCon.scrollTop == 0) {
        this.topShow = false;
      } else {
        this.topShow = true;
      }
      if (this.$exCon.scrollHeight - this.$exCon.scrollTop == this.$exCon.clientHeight) {
        this.bottomShow = false;
      } else {
        this.bottomShow = true;
      }
    },
    topClick: function topClick() {
      __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(this.$exCon, "scroll", {
        container: this.$exCon, duration: 500, offset: -200, mobileHA: false
      });
    },
    bottomClick: function bottomClick() {
      __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(this.$exCon, "scroll", {
        container: this.$exCon, duration: 500, offset: -70, mobileHA: false
      });
    }
  }

});

/***/ }),

/***/ "Gfst":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "guide-dialog-wrapper",
    class: 'guide_dialog'
  }, [_c('div', {
    staticClass: "guide-dialog-mask"
  }), _c('div', {
    staticClass: "top"
  }), _c('div', {
    staticClass: "guide-dialog-bg animated bounceInDown"
  }, [_c('div', {
    staticClass: "top-cancel-btn",
    on: {
      "click": _vm.close
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("KQP+")
    }
  })]), _vm._m(0), _c('div', {
    staticClass: "content_text"
  }, [(_vm.config.isShowImpelGuide && _vm.isShowLeft) ? _c('div', {
    staticClass: "icon-arrow-left",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.rightBtn($event)
      }
    }
  }) : _vm._e(), (_vm.config.isShowImpelGuide && _vm.isShowRight) ? _c('div', {
    staticClass: "icon-arrow-right",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.leftBtn($event)
      }
    }
  }) : _vm._e(), _c('div', {
    staticClass: "img-list"
  }, [_c('div', {
    ref: "imgInner",
    staticClass: "img-list-inner"
  }, [(!_vm.config.isShowImpelGuide) ? _c('img', {
    staticClass: "item",
    attrs: {
      "src": __webpack_require__("epWa")
    }
  }) : _vm._e(), (_vm.config.isShowImpelGuide) ? _c('img', {
    staticClass: "item",
    attrs: {
      "src": __webpack_require__("eLnv")
    }
  }) : _vm._e(), (_vm.config.isShowImpelGuide) ? _c('img', {
    staticClass: "item",
    attrs: {
      "src": __webpack_require__("ezrP")
    }
  }) : _vm._e()])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-text"
  }, [_c('div', {
    staticClass: "date-text"
  }, [_vm._v("新功能介绍")])])
}]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-62f12716", module.exports)
  }
}

/***/ }),

/***/ "GrP0":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("emb2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("/jub")
/* template */
var __vue_template__ = __webpack_require__("8T5Q")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ea74a892"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/newcard/homework.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] homework.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea74a892", Component.options)
  } else {
    hotAPI.reload("data-v-ea74a892", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "HL3q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/closed-f9378f5aeb0bf9fc388d293acac38d65.png";

/***/ }),

/***/ "HiOi":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.ifShow) ? _c('div', {
    staticClass: "user-agreement"
  }, [_c('div', {
    staticClass: "mirror"
  }), _c('div', {
    staticClass: "main-box"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("VIPKID更新后的用户协议和隐私政策")]), _c('div', {
    staticClass: "white-box"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._v(" \n感谢您下载VIPKID英语，使用我们的服务。为了更好的为您提供服务，请您仔细阅读更新后的"), _c('strong', {
    on: {
      "click": function($event) {
        _vm.show(1)
      }
    }
  }, [_vm._v("《VIPKID用户注册协议》")]), _vm._v("和"), _c('strong', {
    on: {
      "click": function($event) {
        _vm.show(2)
      }
    }
  }, [_vm._v("《VIPKID隐私政策》")]), _vm._v("。如在阅读中有任何疑问、意见或者建议，您可以通过VIPKID网站（www.vipkid.com.cn）首页的客服热线或者在线咨询与我们联系。")]), _c('div', {
    staticClass: "for"
  }, [_vm._v("为了给您提供完善的服务，提升您的用户体验，我们将无法避免地收集和使用您的个人信息，我们将遵循合法正当必要的原则，最小化地收集和使用您的个人信息并采取必要的安保措施。")]), (_vm.ifShowWarningText) ? _c('div', {
    staticClass: "orange"
  }, [_vm._v("您同意后，我们将继续提供完善优质的服务。")]) : _vm._e(), _c('div', {
    staticClass: "btn no",
    on: {
      "click": _vm.no
    }
  }), _c('div', {
    staticClass: "btn yes",
    on: {
      "click": _vm.yes
    }
  })])]), (_vm.isSignUpAgreementShow) ? _c('div', {
    staticClass: "sub-layer"
  }, [_c('img', {
    staticClass: "close-btn",
    attrs: {
      "src": __webpack_require__("HL3q")
    },
    on: {
      "click": _vm.close
    }
  }), _c('div', {
    staticClass: "sub-white-box"
  }, [_c('iframe', {
    attrs: {
      "src": "//mobile.vipkid.com.cn/parents/registeredlogin/signupagreement/\b"
    }
  })], 1)]) : _vm._e(), (_vm.isPrivacyAgreementShow) ? _c('div', {
    staticClass: "sub-layer"
  }, [_c('img', {
    staticClass: "close-btn",
    attrs: {
      "src": __webpack_require__("HL3q")
    },
    on: {
      "click": _vm.close
    }
  }), _c('div', {
    staticClass: "sub-white-box"
  }, [_c('iframe', {
    attrs: {
      "src": "//mobile.vipkid.com.cn/parents/registeredlogin/privacyagreement/"
    }
  })], 1)]) : _vm._e()]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-067c41df", module.exports)
  }
}

/***/ }),

/***/ "Hq1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_vk_button_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isTest: false,
      state: 0,
      result: []
    };
  },
  components: { testBtn: __WEBPACK_IMPORTED_MODULE_3__common_vk_button_vue___default.a },
  computed: {},
  mounted: function mounted() {},

  props: ["close", "user"],
  methods: {
    startTest: function startTest() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/pc/homepage/getStudentCtStartExam', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200 && res.data.data.ctEnable && res.data.data.ctUrl) {
          _this.close();
          _this.$router.push("/test_work");
        } else {
          _this.$showToast("没有权限，请联系您的班主任老师，谢谢！");
        }
      }).catch(function (err) {
        _this.$showToast("没有权限，请联系您的班主任老师，谢谢！");
      });
    },
    studentBirthday: function studentBirthday() {
      return __WEBPACK_IMPORTED_MODULE_2__utils_untils__["b" /* default */].dateTime(this.user.studentBirthday);
    },
    goToReport: function goToReport(uuid, onlineClassId) {
      if (!uuid || uuid == "") {
        uuid = 0;
      }
      if (!onlineClassId || onlineClassId == "") {
        onlineClassId = 0;
      }
      this.$router.push('/test_result/' + uuid + '/' + onlineClassId);
    },
    tab0: function tab0() {
      this.state = 0;
    },
    tab1: function tab1() {
      this.state = 1;
      this.getResult();
    },
    getResult: function getResult() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/pc/homepage/getStudentCtResultList', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        var result = res.data.data;
        if (result && result != null) {
          _this2.isTest = false;
          for (var i = 0; i < result.length; i++) {
            if (result[i].endDatetime == 0) {
              result[i].endDatetime = "-";
            } else {
              result[i].endDatetime = __WEBPACK_IMPORTED_MODULE_2__utils_untils__["b" /* default */].timeFormatAll(result[i].endDatetime);
            }
          }
          _this2.result = result;
        } else {
          _this2.isTest = true;
        }
      });
    }
  }
});

/***/ }),

/***/ "I9Vc":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("jDxO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("qggl")
/* template */
var __vue_template__ = __webpack_require__("r0tt")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fa5b2da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_tip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_tip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fa5b2da", Component.options)
  } else {
    hotAPI.reload("data-v-1fa5b2da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "IxIT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/girl_3-d899795617565c13e278409c8b94d294.png";

/***/ }),

/***/ "J+AZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/digireader/guide_iknown@2x-c35361e722380c941143b3524b6cdbe7.png";

/***/ }),

/***/ "JL7M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_dialog_trial_vue__ = __webpack_require__("JkuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_dialog_trial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_vk_dialog_trial_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dragon__ = __webpack_require__("mYWi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courseEnum__ = __webpack_require__("VDN5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_base64__ = __webpack_require__("xrTZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_base64__);
/**
 * Created by lihongbin on 2018/7/27.
 */







var _URL = {
  learningUrl: '//' + window.location.host.replace(/lc/, 'learning'),
  homeworkUrl: '//' + window.location.host.replace(/lc/, 'nhw'),
  wwwUrl: '//' + window.location.host.replace(/lc/, 'www'),
  goToMajorClass: function goToMajorClass(onlineClassId) {
    window.open(this.learningUrl + "/classroom/major?onlineClassId=" + onlineClassId);
  },
  goToPublicClass: function goToPublicClass(onlineClassId) {
    window.open(this.learningUrl + "/classroom/openclass?onlineClassId=" + onlineClassId);
  },
  goToMajorReplay: function goToMajorReplay(onlineClassId) {
    window.open(this.learningUrl + "/replay/major?onlineClassId=" + onlineClassId);
  },
  goToPublicReplay: function goToPublicReplay(onlineClassId) {
    window.open(this.learningUrl + "/replay/openclass?onlineClassId=" + onlineClassId);
  },
  goToReport: function goToReport(onlineClassId) {
    Vm.$router.push("/test_result/0/" + onlineClassId);
  },
  goToCourseWare: function goToCourseWare(onlineClassId, lessonNumber, lessonId) {
    Vm.$router.push("/courseware/" + onlineClassId + "/" + lessonNumber + "/" + lessonId);
  },
  goToPDF: function goToPDF(pdfUrl) {
    Vm.$router.push("/pdf_view/" + pdfUrl);
  },
  goToRecordVideo: function goToRecordVideo(onlineClassId) {
    window.open(this.wwwUrl + "/icvideo/?onlineClassId=" + onlineClassId);
  },
  goToESLRecordVideo: function goToESLRecordVideo(onlineClassId) {
    window.open(this.wwwUrl + "/icesl/?onlineClassId=" + onlineClassId);
  },
  exceedOrderApi: "/rest/learninggw/api/pc/homepage/classroom/checkExcessClassAndAllotTeacher",
  trailResultApi: "/rest/learninggw/api/pc/homepage/getStudentTrailResult",
  studentExtraRouteApi: "/rest/learninggw/api/pc/material/extra/getStudentExtraRoute"
};
var _Function = {

  //Trial课超约判断  onlineClass 为 OnlineClass 对象
  checkTrial: function checkTrial(_ref) {
    var _this = this;

    var courseId = _ref.courseId,
        bookType = _ref.bookType,
        onlineClassId = _ref.onlineClassId;

    //判断Trial课
    return new Promise(function (resolve, reject) {
      if (courseId == 597767) {
        //判断bookType  0代表非超约课  2代表超约课已经匹配了老师 其他则需要调用超约接口
        if (bookType != 0 && bookType != 2) {
          __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get(_URL.exceedOrderApi, {
            params: {
              studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId"),
              onlineClassId: onlineClassId
            }
          }).then(function (res) {
            if (res.data.code == 200) {
              _this.trailToast(resolve);
            } else {
              //弹出toast
              Vm.$showToast('啊哦，教室创建失败，<br>建议联系约课老师重新安排哦');
            }
          }).catch(function (err) {
            Vm.$showToast('啊哦，教室创建失败，<br>建议联系约课老师重新安排哦');
          });
        } else {
          _this.trailToast(resolve);
        }
      } else {
        resolve();
      }
    });
  },

  //trial课前条款
  trailToast: function trailToast(callBackFun) {
    Vm.$modelShow({
      model: __WEBPACK_IMPORTED_MODULE_2__common_vk_dialog_trial_vue___default.a,
      title: "为了确保试听效果，请您阅读如下注意事项并进行检查确认",
      buttonText: "知道了",
      enter: function enter() {
        Vm.$modelClose();
        callBackFun();
      },
      closeDialog: function closeDialog() {
        Vm.$modelClose();
      }
    });
  },

  //PC App 进教室
  pcAppEnterClassroom: function pcAppEnterClassroom(onlineClassId) {
    return new Promise(function (reslove, reject) {
      if (__WEBPACK_IMPORTED_MODULE_3__utils_dragon__["a" /* default */].isOnDragonClient()) {
        var dragonClientUA = navigator.userAgent.match(/vipkid\/\d+(\.\d+)*/i);
        //灰度
        __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/vanguard/api/service/client/classroom/getRoomUrl', {
          params: {
            onlineClassId: onlineClassId,
            studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId"),
            version: dragonClientUA ? dragonClientUA[0].split('/')[1] : '0'
          }
        }).then(function (res) {
          try {
            if (res.data.data.roomType == 'NA') {
              sa.track('learning_click', {
                'click_id': 'pc_learning_pcapp_enter_classroom_native'
              });
              window.__bridge.openClass(onlineClassId, res.data.data.supplierCode);
            } else {
              reslove();
            }
          } catch (e) {
            sa.track('learning_click', {
              'click_id': 'pc_learning_classroom_get_url',
              'error_msg': JSON.stringify(e)
            });
            reslove();
          }
        }).catch(function (err) {
          sa.track('learning_click', {
            'click_id': 'pc_learning_classroom_get_url',
            'error_msg': JSON.stringify(err.response.data)
          });
          reslove();
        });
      } else {
        reslove();
      }
    });
  }
  //统一课程资源外接
};/* harmony default export */ __webpack_exports__["a"] = ({
  //1对1教室
  oneToMore: function oneToMore(onlineClassId) {
    _Function.pcAppEnterClassroom(onlineClassId).then(function () {
      _URL.goToPublicClass(onlineClassId);
    });
  },


  //1对多教室
  oneToOne: function oneToOne(_ref2) {
    var onlineClassId = _ref2.onlineClassId,
        courseId = _ref2.courseId,
        bookType = _ref2.bookType;

    _Function.checkTrial({
      courseId: courseId,
      bookType: bookType,
      onlineClassId: onlineClassId
    }).then(_Function.pcAppEnterClassroom(onlineClassId)).then(function () {
      _URL.goToMajorClass(onlineClassId);
    });
  },


  //主修课程回放
  majorReplay: function majorReplay(onlineClassId) {
    //主修课
    _URL.goToMajorReplay(onlineClassId);
  },


  //公开课程回放
  publicReplay: function publicReplay(onlineClassId) {
    _URL.goToPublicReplay(onlineClassId);
  },
  courseAfterOrBefore: function courseAfterOrBefore(_ref3) {
    var onlineClassId = _ref3.onlineClassId,
        lessonId = _ref3.lessonId,
        courseId = _ref3.courseId,
        type = _ref3.type,
        curriculumVersion = _ref3.curriculumVersion;

    __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get(_URL.studentExtraRouteApi, {
      params: {
        studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId"),
        onlineClassId: onlineClassId,
        lessonId: lessonId,
        courseId: courseId,
        curriculumVersion: curriculumVersion ? curriculumVersion : 1,
        source: __WEBPACK_IMPORTED_MODULE_3__utils_dragon__["a" /* default */].isOnDragonClient() ? 2 : 1, //1PC 2PCAPP
        type: type == 'PRE' ? 1 : 2
      }
    }).then(function (res) {
      var data = res.data.data;
      if (data.isLc) {
        Vm.$router.push({ path: data.url });
      } else {
        window.location.href = data.url + "&back_url=" + encodeURIComponent(document.location.href); //@back_url 用于作业端返回
      }
    });
  },


  //打开资料
  pdfView: function pdfView(buttonExtra) {
    if (buttonExtra && buttonExtra.pdf) {
      _URL.goToPDF(__WEBPACK_IMPORTED_MODULE_5_js_base64__["Base64"].encode(buttonExtra.pdf));
    } else {
      Vm.$showToast("现在还没有资料，请联系班主任处理");
    }
  },
  classroomRecord: function classroomRecord(onlineClassId) {
    _URL.goToRecordVideo(onlineClassId);
  },

  // 课程按钮点击
  // pre: "PRE",//课前预习按钮
  // after: "AFTER",//课后作业按钮
  // courseWare: "COURSEWARE",//查看课件
  // majorClassRoom: "MAJOR_CLASSROOM",//进入一对一教室
  // majorClassRoomFinish: "MAJOR_CLASSROOM_FINISH",//进入已下课的一对一教室
  // publicClassRoom: "PUBLIC_CLASSROOM",//进入公开课教室
  // publicClassRoomFinish: "PUBLIC_CLASSROOM_FINISH",//进入已下课的公开课教室
  // majorReplay: "MAJOR_REPLAY",//进入一对一回放
  // publicReplay: "PUBLIC_REPLAY"//进入公开课回放
  courseButtonClick: function courseButtonClick(_ref4) {
    var type = _ref4.type,
        onlineClassId = _ref4.onlineClassId,
        lessonNum = _ref4.lessonNum,
        lessonId = _ref4.lessonId,
        clickId = _ref4.clickId,
        courseId = _ref4.courseId,
        curriculumVersion = _ref4.curriculumVersion,
        buttonExtra = _ref4.buttonExtra,
        bookType = _ref4.bookType,
        buttonStatus = _ref4.buttonStatus;

    sa.track('learning_click', {
      'click_id': clickId,
      'online_class_id': onlineClassId,
      'lesson_id': lessonId,
      'class_id': courseId //由于神策新增字段申请流程繁琐，先用class_id代表courseId
    });
    switch (type) {
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].pre: //课前
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].after:
        //课后
        this.courseAfterOrBefore({ onlineClassId: onlineClassId, lessonId: lessonId, courseId: courseId, type: type, curriculumVersion: curriculumVersion });
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].courseWare:
        //看课件
        _URL.goToCourseWare(onlineClassId, lessonNum, lessonId);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].publicClassRoom:
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].publicClassRoomFinish:
        this.oneToMore(onlineClassId);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].majorClassRoom:
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].majorClassRoomFinish:
        this.oneToOne({ onlineClassId: onlineClassId, courseId: courseId, bookType: bookType });
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].majorReplay:
        this.majorReplay(onlineClassId);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].publicReplay:
        this.publicReplay(onlineClassId);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].pdf:
        this.pdfView(buttonExtra);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].eslClassroomRecord:
        _URL.goToESLRecordVideo(onlineClassId);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].publicClassRecord:
        this.classroomRecord(onlineClassId);
        break;
      case __WEBPACK_IMPORTED_MODULE_4__courseEnum__["d" /* CURRENT_COURSE_STATUS */].trialReport:
        if (buttonStatus == "HIGH") {
          _URL.goToReport(onlineClassId);
        }
        break;
    }
    Vm.$playSound("click");
  }
});

/***/ }),

/***/ "JfMu":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("1x3x")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("Z2+P")
/* template */
var __vue_template__ = __webpack_require__("OgoU")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42525b2e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/error_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] error_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42525b2e", Component.options)
  } else {
    hotAPI.reload("data-v-42525b2e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "JkuT":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("qRso")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("udTv")
/* template */
var __vue_template__ = __webpack_require__("OH/S")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a09c9a0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_dialog_trial.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_dialog_trial.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a09c9a0", Component.options)
  } else {
    hotAPI.reload("data-v-2a09c9a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "Jw+U":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JwPB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_cards_vue__ = __webpack_require__("5Ymm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_cards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_cards_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_0__card_cards_vue___default.a
  },
  props: ['unlockCard'],
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "K27U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_vue__ = __webpack_require__("aNdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flash_card_vue__ = __webpack_require__("cmu3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flash_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__flash_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homework_vue__ = __webpack_require__("GrP0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homework_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__homework_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classroom_vue__ = __webpack_require__("ctt2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classroom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__classroom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_card_vue__ = __webpack_require__("bNOW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__back_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__ = __webpack_require__("VDN5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_course_Course__ = __webpack_require__("JL7M");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//  [
//    {
//      "lessonId":844786,
//      "courseId":597830,
//      "teacherId":2040456,
//      "onlineClassId":750018447,
//      "curriculumVersion":1,
//      "onlineStatus":"FINISHED",
//      "onlineFinishType":"AS_SCHEDULED",
//      "bookType":0,
//      "lessonSn":"ES-L1-U1-LC1-2",
//      "scheduledDateTimeString":"2018-07-20 12:30:00",
//      "mainTitle":"Lesson 2",
//      "typeTitle":"全项进阶课程",
//      "scheduledDateTime":1532061000000,
//      "classInfo": {
//        "teacherAvatar":"https://teacher-media.vipkid.com.cn/teacher/avatar/2040456/avatar_large/image_20180402073956_e167da38f2d94bddac7802c01f3e5398.png",
//        "teacherName":"test moyonglin",
//        "starNum":0
//      },
//      "preHomeworkInfo":null,
//      "afterHomeworkInfo": {
//        "status":0,
//        "homeworkRight":0,
//        "homeworkWrong":0,
//        "colorTitle":null,
//        "colorText":null
//      },
//      "imageInfo":null,
//      "isBlink":false,
//      "bottomButton": {
//        "buttonFunction":"PUBILC_REPLAY",
//        "buttonStatus":"HIGH",
//        "buttonText":"课程回放",
//        "buttonExtra":null
//      },
//      "scheduleButtonList": [
//        {
//          "buttonStyle":"BEDONE",
//          "buttonText":"预习"
//        },
//        {
//          "buttonStyle":"BEDONE",
//          "buttonText":"上课"
//        },
//        {
//          "buttonStyle":"DONTS",
//          "buttonText":"做作业"
//        }
//      ],
//      "backButtonList": [
//        {
//          "buttonFunction":"PRE",
//          "buttonStatus":"HIGH",
//          "buttonText":"预习",
//          "buttonExtra":null
//        },
//        {
//          "buttonFunction":"COURSEWARE",
//          "buttonStatus":"HIGH",
//          "buttonText":"查看课件",
//          "buttonExtra":null
//        },
//        {
//          "buttonFunction":"AFTER",
//          "buttonStatus":"GRAY",
//          "buttonText":"做作业",
//          "buttonExtra":null
//        },
//        {
//          "buttonFunction":"PUBILC_REPLAY",
//          "buttonStatus":"HIGH",
//          "buttonText":"课程回放",
//          "buttonExtra":null
//        },
//        {
//          "buttonFunction":"PDF",
//          "buttonStatus":"HIGH",
//          "buttonText":"复习资料",
//          "buttonExtra":null
//        }
//      ],
//      "aiCourseCard": {
//        "mainTitle":"AI录播课",
//        "imageInfo": {
//          "status":1,
//          "type":0,
//          "imageUrl":null
//        },
//        "bottomButton": {
//          "buttonFunction":"EXTRA",
//          "buttonStatus":"GRAY",
//          "buttonText":"看录播",
//          "buttonExtra":null
//        },
//        "scheduleButtonList": [
//          {
//            "buttonStyle":"DONTS",
//            "buttonText":"看录播"
//          }
//        ]
//      },
//      "extraData":null,
//      "ringShow":true
//    }
//  ]












/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      noTeacherImg: __webpack_require__("rOu3"),
      isHandAnimationIng: false,
      currentPanelState: "face", //face,back
      //完成状态
      workStatus: {
        undone: 0, //未完成
        done: 1 //已经完成
      },
      //底部进度条的状态
      lineStyleMap: {
        "DONTS": "disable",
        "BEDONE": "use",
        "DONE": "used"
      }
    };
  },
  props: ['config', 'petImgSrc'],
  components: {
    slideText: __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default.a, vkBtn: __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default.a, vkProgress: __WEBPACK_IMPORTED_MODULE_3__components_progress_vue___default.a, flashCard: __WEBPACK_IMPORTED_MODULE_4__flash_card_vue___default.a, homework: __WEBPACK_IMPORTED_MODULE_5__homework_vue___default.a, classroom: __WEBPACK_IMPORTED_MODULE_6__classroom_vue___default.a, backCard: __WEBPACK_IMPORTED_MODULE_8__back_card_vue___default.a
  },
  computed: {
    //按钮状态
    classBtn: function classBtn() {
      //大按钮隐藏：lg-hide ，大按钮可用： lg-enable
      return __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__["b" /* BUTTON_STYLE_MAP */][this.config.bottomButton.buttonStatus];
    },
    //录播课按钮状态
    videoBtn: function videoBtn() {
      //小按钮隐藏：sl-hide ，小按钮可用： sl-enable
      return __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__["e" /* SMALL_BUTTON_STYLE_MAP */][this.config.aiCourseCard.bottomButton.buttonStatus];
    },
    //底部进度状态
    pps: function pps() {
      /*
       "scheduleButtonList": [
       {
       "buttonStyle":"BEDONE",
       "buttonText":"预习"
       },
       {
       "buttonStyle":"BEDONE",
       "buttonText":"上课"
       },
       {
       "buttonStyle":"DONTS",
       "buttonText":"做作业"
       }
       ],
       ----------------------------------
       "buttonStyle"的取值有：
       "BEDONE", 进度按钮状态
       "HIDDEN", 隐藏
       "DONTS", 未解锁
       "BEDONE", 已解锁未完成
       "DONE", 已完成
       */
      //disable:灰色 use：可预习 used：预习完
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.config.scheduleButtonList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sbl = _step.value;

          result.push({
            name: sbl.buttonText,
            state: this.lineStyleMap[sbl.buttonStyle]
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    },
    //录播课底部进度状态
    videoPps: function videoPps() {
      var result = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.config.aiCourseCard.scheduleButtonList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var sbl = _step2.value;

          result.push({
            name: sbl.buttonText,
            state: this.lineStyleMap[sbl.buttonStyle]
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return result;
    }
  },
  methods: {
    buttonClick: function buttonClick() {
      __WEBPACK_IMPORTED_MODULE_10__common_course_Course__["a" /* default */].courseButtonClick({
        type: this.config.bottomButton.buttonFunction,
        onlineClassId: this.config.onlineClassId,
        lessonNum: this.config.lessonNumber,
        lessonId: this.config.lessonId,
        clickId: this.config.bottomButton.clickid + "_front",
        courseId: this.config.courseId,
        curriculumVersion: this.config.curriculumVersion,
        bookType: this.config.bookType
      });
    },
    videoClick: function videoClick() {
      __WEBPACK_IMPORTED_MODULE_10__common_course_Course__["a" /* default */].courseButtonClick({
        type: this.config.aiCourseCard.bottomButton.buttonFunction,
        onlineClassId: this.config.onlineClassId,
        clickId: this.config.aiCourseCard.bottomButton.clickid + "_front"
      });
    },
    weekTime: function weekTime() {
      return __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].weekTime(this.config.scheduledDateTime);
    },
    dateTime: function dateTime() {
      return __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].dateTime(this.config.scheduledDateTime);
    },

    // 拉环点击
    handClick: function handClick() {
      var _this = this;

      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_hand_pull'
      });
      if (!this.isHandAnimationIng) {
        this.isHandAnimationIng = true;
        __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(this.$refs.cardHand, { top: "80px" }, {
          easing: "spring", mobileHA: false,
          duration: 500, complete: function complete() {
            if (_this.currentPanelState == "back") {
              _this.currentPanelState = "face";
            } else {
              _this.currentPanelState = "back";
            }
            __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(_this.$refs.cardHand, { top: "30px" }, {
              duration: 500, mobileHA: false,
              complete: function complete() {
                _this.isHandAnimationIng = false;
              }
            });
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(this.$refs.handLine, { height: "80px" }, {
          easing: "spring",
          duration: 500, complete: function complete() {
            __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(_this.$refs.handLine, { height: "30px" }, {
              duration: 500, mobileHA: false
            });
          }
        });
      }
      this.$playSound("click");
    },

    // hand hover state
    handHover: function handHover() {
      var _this2 = this;

      if (this.$refs.hand.style.animation == "none" || this.$refs.hand.style.animation == "") {
        this.$refs.hand.style.animation = "swing 1.5s";
        setTimeout(function () {
          _this2.$refs.hand.style.animation = "none";
        }, 1500);
      }
    }
  }
});

/***/ }),

/***/ "K94Y":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("rsyu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("kqT0")
/* template */
var __vue_template__ = __webpack_require__("rEL5")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-578b465b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/impel_enter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] impel_enter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-578b465b", Component.options)
  } else {
    hotAPI.reload("data-v-578b465b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "KMCw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/mic-02509bc345afc654286d572a65a825c1.png";

/***/ }),

/***/ "KMYw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dragon_js__ = __webpack_require__("mYWi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("Flb4");
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      //        HIDE(0,"不显示"),
      //        LOCK(1,"不可用"),
      //        UNLOCK(2, "可用"),
      //        FINISH_UNLOCK(3, "完成并继续可用"),
      //        FINISH_LOCK(4, "完成但不可用");
      backButtonState: ['hide', 'disable', 'enable', 'enable', 'disable'],
      pbButtons: [],
      isBtnShow: false
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default.a
  },
  props: ['config'],
  computed: {},
  mounted: function mounted() {
    var _this = this;

    this.initBackButton();
    setTimeout(function () {
      _this.isBtnShow = true;
    }, 300);
  },

  methods: {
    buttonClick: function buttonClick(link, clickId) {
      var _this2 = this;

      return function () {
        if (clickId == "homepage_btn_pre_back" || clickId == "homepage_btn_homework_back") {
          _this2.$getWorkUrl(_this2.config, _this2, clickId == "homepage_btn_pre_back" ? 'PRE' : 'AFTER', 'homepage_btn_homework_back');
        } else {
          sa.track('learning_click', {
            'click_id': clickId,
            'online_class_id': _this2.config.onlineClassId,
            'book_type': _this2.config.bookType
          });
          setTimeout(function () {
            //进教室跳转到新页面
            if (clickId == "homepage_btn_enter_classroom_back") {
              window.open(link);
            } else {
              _this2.$router.push(link);
            }
          }, 200);
        }
      };
    },

    //调取小恐龙进教室native组件
    dragonButtonClick: function dragonButtonClick() {
      var _this3 = this;

      //查看报告
      if ([12].indexOf(this.config.cardType) > -1) {
        sa.track('learning_click', {
          'click_id': 'pc_learning_homepage_card_back_see_report',
          'online_class_id': this.config.onlineClassId
        });
        __WEBPACK_IMPORTED_MODULE_4_axios__["default"].get('/rest/learninggw/api/pc/homepage/getStudentTrailResult', {
          params: {
            studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId"),
            onlineClassId: this.config.onlineClassId
          }
        }).then(function (res) {
          if (res.data.data && res.data.data.hasTrialResult) {
            _this3.$router.push("/test_result/0/" + _this3.config.onlineClassId);
          } else {
            _this3.$showToast("英语等级报告正在生成中，请稍后查看~");
          }
        }).catch(function (err) {
          _this3.$showToast("英语等级报告正在生成中，请稍后查看~");
        });
        return;
      }
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_pcapp_enter_classroom_on_back',
        'online_class_id': this.config.onlineClassId,
        'book_type': this.config.bookType
      });
      __WEBPACK_IMPORTED_MODULE_2__utils_dragon_js__["a" /* default */].goToClassRoomInDragon(this.config.onlineClassId);
    },
    initBackButton: function initBackButton() {
      //校验curriculumVersion
      if (!this.config.curriculumVersion || this.config.curriculumVersion == '' || this.config.curriculumVersion == 'undefined' || this.config.curriculumVersion == 'null') {
        this.config.curriculumVersion = 1;
      }
      this.pbButtons = [{
        name: this.config.preHomeworkButtonText,
        state: this.backButtonState[this.config.preHomeworkButton],
        link: "/video/pre/" + this.config.lessonId + "/2" + "/" + this.config.curriculumVersion,
        isNew: false,
        clickId: "homepage_btn_pre_back",
        isShowThisButton: true
      }, {
        name: this.config.pptButtonText,
        state: this.backButtonState[this.config.pptButton],
        link: "/courseware/" + this.config.onlineClassId + "/" + this.config.lessonNumber + "/" + this.config.lessonId,
        isNew: false,
        clickId: "homepage_btn_ppt_back",
        isShowThisButton: true
      }, {
        name: this.config.classroomButtonText,
        state: this.backButtonState[this.config.classroomButton],
        link: "#",
        isNew: false,
        clickId: "homepage_btn_enter_classroom_back",
        isShowThisButton: true
      }, {
        name: this.config.afterHomeworkButtonText,
        state: this.backButtonState[this.config.afterHomeworkButton],
        link: '/homework/' + __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId") + '/' + this.config.lessonId + '/2?curriculumVersion=' + this.config.curriculumVersion,
        isNew: false,
        clickId: "homepage_btn_homework_back",
        isShowThisButton: true
      }];

      //进教室
      if ([2, 3].indexOf(this.config.lessonStatus) > -1) {
        if (__WEBPACK_IMPORTED_MODULE_2__utils_dragon_js__["a" /* default */].isOnDragonClient()) {
          this.pbButtons[2].link = "0";
          this.pbButtons[2].isNew = false;
          __WEBPACK_IMPORTED_MODULE_3_vue__["default"].set(this.pbButtons, 2, this.pbButtons[2]);
        } else {
          this.pbButtons[2].link = '/router/learning/classroom/major?onlineClassId=' + this.config.onlineClassId;
        }
      }
      //课程回放
      if ([5].indexOf(this.config.lessonStatus) > -1) {
        this.pbButtons[2].link = '/router/learning/replay/major?onlineClassId=' + this.config.onlineClassId;
      }
      //公开课 课程回放
      if ([4, 13].indexOf(this.config.cardType) > -1) {
        if ([5].indexOf(this.config.lessonStatus) > -1) {
          this.pbButtons[2].link = "/router/learning/replay/openclass?onlineClassId=" + this.config.onlineClassId;
        }
      }

      //新版trail课 只有上课 + 查看报告
      if ([12].indexOf(this.config.cardType) > -1) {
        this.pbButtons = [this.pbButtons[2], {
          name: this.config.trialResultText,
          state: this.backButtonState[this.config.trialResultButton],
          link: 0,
          isNew: false,
          clickId: "homepage_btn_see_report"
        }];
      }
      //绘本公开课
      if ([13].indexOf(this.config.cardType) > -1) {
        this.pbButtons[2].link = "/router/learning/classroom/openclass?onlineClassId=" + this.config.onlineClassId;
        this.pbButtons = [{
          name: this.config.bookButtonText,
          state: this.backButtonState[this.config.bookButton],
          link: "/digitalLibrary/detail/" + this.config.bookId + "/" + this.config.bookCode,
          isNew: false,
          clickId: "homepage_btn_see_report"
        }, this.pbButtons[2]];
      }
    }
  }
});

/***/ }),

/***/ "KQP+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/readers/cancelmodel-dd8fffebd5bcfd18289ad5888c4eb601.png";

/***/ }),

/***/ "KShx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_net_error_vue__ = __webpack_require__("+FHj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_net_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_net_error_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookies_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var noImg = __webpack_require__("cdH/");





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      netError: false,
      showClass: '',
      currentHonors: [],
      honorHandTop: 60,
      $honorHand: null,
      honorHandAnimated: false,
      currentPage: 1,
      honors: [],
      listShow: true
    };
  },
  components: {
    netError: __WEBPACK_IMPORTED_MODULE_0__common_vk_net_error_vue___default.a
  },
  watch: {
    honors: function honors(n, o) {
      this.nextPage();
    }
  },
  props: ['closeHonor'],
  mounted: function mounted() {
    this.$honorHand = this.$refs.honorHand;
    this.honorData();
  },

  methods: {
    honorData: function honorData() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get('/rest/learninggw/api/pc/homepage/getStudentMedal', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          _this.honors = res.data.data;
        }
      });
    },
    errorImgFun: function errorImgFun(e) {
      e.target.src = noImg;
    },
    nextPage: function nextPage() {
      if (this.currentPage > Math.ceil(this.honors.length / 15)) {
        this.currentPage = 1;
      }
      var start = (this.currentPage - 1) * 15;
      var end = this.currentPage * 15;
      this.currentHonors = this.honors.slice(start, end);
    },
    close: function close() {
      this.showClass = '';
      this.closeHonor();
    },
    handClick: function handClick() {
      var _this2 = this;

      this.currentPage++;
      this.listShow = false;
      setTimeout(function () {
        _this2.nextPage();
        _this2.listShow = true;
      }, 100);
      __WEBPACK_IMPORTED_MODULE_1_velocity_animate___default.a(this.$refs.honorHand, { top: "100px" }, {
        easing: "spring",
        duration: 500, complete: function complete() {
          __WEBPACK_IMPORTED_MODULE_1_velocity_animate___default.a(_this2.$refs.honorHand, { top: "60px" }, {
            duration: 300
          });
        }
      });
      __WEBPACK_IMPORTED_MODULE_1_velocity_animate___default.a(this.$refs.honorHandLine, { height: "100px" }, {
        easing: "spring",
        duration: 500, complete: function complete() {
          __WEBPACK_IMPORTED_MODULE_1_velocity_animate___default.a(_this2.$refs.honorHandLine, { height: "60px" }, {
            duration: 300
          });
        }
      });
    },
    honorHandPull: function honorHandPull(e) {
      var _this3 = this;

      window.event.returnValue = false;
      e.preventDefault();
      e.stopPropagation();
      var y = e.clientY;
      var hy = this.honorHandTop;
      this.$honorHand.onmousemove = function (ec) {
        var cy = ec.clientY - y;
        _this3.honorHandTop = hy + cy;
        if (_this3.honorHandTop > 30 || _this3.honorHandTop == 30) {
          if (_this3.honorHandTop > 100) {
            _this3.honorHandTop = 60;
            _this3.$honorHand.onmousemove = null;
            _this3.currentPage++;
            _this3.listShow = false;
            setTimeout(function () {
              _this3.nextPage();
              _this3.listShow = true;
            }, 500);
          }
        } else {
          _this3.honorHandTop = 60;
          _this3.$honorHand.onmousemove = null;
        }
      };
      window.onmouseup = function () {
        _this3.$honorHand.onmousemove = null;
        _this3.honorHandTop = 60;
      };
    },
    honorHandHover: function honorHandHover() {
      var _this4 = this;

      if (!this.honorHandAnimated) {
        this.honorHandAnimated = true;
        setTimeout(function () {
          _this4.honorHandAnimated = false;
        }, 1500);
      }
    }
  }
});

/***/ }),

/***/ "KUN4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  components: {
    slideText: __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default.a
  },
  props: {
    classInfo: {
      type: Object,
      default: function _default() {
        return {
          teacherAvatar: "-",
          teacherName: "-",
          starNum: 0
        };
      }
    }
  }
});

/***/ }),

/***/ "Kw/R":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("4h6+")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("q0M+")
/* template */
var __vue_template__ = __webpack_require__("Gfst")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62f12716"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/guide_model.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guide_model.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62f12716", Component.options)
  } else {
    hotAPI.reload("data-v-62f12716", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "KxLK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__readers_api_js__ = __webpack_require__("TfaS");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      clickBookUrl: '/api/pc/service/reader/clickBook',
      readStartTimeUrl: '/api/pc/service/reader/setBeginTime',
      isShowTip: false,
      activityState: {
        currentStatus: 1
      }
    };
  },

  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__vk_button_vue___default.a, slideText: __WEBPACK_IMPORTED_MODULE_1__vk_slide_text_vue___default.a
  },
  props: {
    // currentStatus: 1、不显示；2、已解锁；3、未做；4、已做
    // config示例：
    // "readStatus": true,
    // "unit": "Unit 2",
    // "itemType": "book",
    // "biz_code": "R0000081",
    // "showName": "The Sun Sets on the Hill (Phonics Stories)",
    // "level": "Level 3",
    // "bookCoverResUrl": "https://teacher-media.vipkid.com.cn/resource/5bece249347d4f179fddcc3060c72a7c.jpg",
    // "bookDescription": "In \"The Sun Sets on the Hill\", Ben and Eve go to see the sun set.",
    // "id": 100
    config: {
      type: Object,
      required: false,
      default: {}
    }
  },
  mounted: function mounted() {
    this.initData();
  },

  methods: {
    initData: function initData() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_2_axios__["default"].get("/rest/learninggw/api/pc/material/activity/getActivityButtonInfo", {
        params: {
          readerCode: this.config.bookCode,
          studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId"),
          deviceType: 1,
          bookId: this.config.id
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          _this.activityState = res.data.data;
        }
      });
    },
    close: function close() {
      this.$modelClose();
    },
    play: function play() {
      __WEBPACK_IMPORTED_MODULE_5__utils_untils__["b" /* default */].clickEvent(__WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get('studentId'), this.config.id, this.config.source, __WEBPACK_IMPORTED_MODULE_5__utils_untils__["b" /* default */].clickEventConst.ACTIVITY, '', '');
      this.close();
      this.config.router.push('/homework/activity/' + __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId") + '/' + this.config.bookCode + '/' + this.config.id);
    },
    begin: function begin() {
      var _this2 = this;

      this.$modelClose();
      var id = this.config.id;
      __WEBPACK_IMPORTED_MODULE_6__readers_api_js__["a" /* $all */](this.setClickBook(id), this.setReadStartTime(id)).then(__WEBPACK_IMPORTED_MODULE_2_axios__["default"].spread(function (acct, perms) {
        _this2.config.router.push({ path: '/book/' + id + '/1/0' }); // 1 为major course reader
      })).catch(function () {
        _this2.config.router.push({ path: '/book/' + id + '/1/0' });
      });
    },
    showTip: function showTip() {
      this.isShowTip = true;
    },
    leaveTip: function leaveTip() {
      this.isShowTip = false;
    },
    setClickBook: function setClickBook(id) {
      return __WEBPACK_IMPORTED_MODULE_6__readers_api_js__["c" /* $post */](this.clickBookUrl, {
        studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId"),
        bookId: id
      });
    },
    setReadStartTime: function setReadStartTime(id) {
      return __WEBPACK_IMPORTED_MODULE_6__readers_api_js__["c" /* $post */](this.readStartTimeUrl, {
        studentId: __WEBPACK_IMPORTED_MODULE_3_cookies_js___default.a.get("studentId"),
        bookId: id
      });
    }
  }
});

/***/ }),

/***/ "L4ca":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LGtS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_vue__ = __webpack_require__("aNdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flash_card_vue__ = __webpack_require__("cmu3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flash_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__flash_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homework_vue__ = __webpack_require__("GrP0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homework_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__homework_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classroom_vue__ = __webpack_require__("ctt2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classroom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__classroom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_card_vue__ = __webpack_require__("bNOW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__back_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__ = __webpack_require__("VDN5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_course_Course__ = __webpack_require__("JL7M");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      noTeacherImg: __webpack_require__("rOu3"),
      isHandAnimationIng: false,
      currentPanelState: "face", //face,back
      //完成状态
      workStatus: {
        undone: 0, //未完成
        done: 1 //已经完成
      },
      //底部进度条的状态
      lineStyleMap: {
        "DONTS": "disable",
        "BEDONE": "use",
        "DONE": "used"
      }
    };
  },
  props: ['config', 'petImgSrc'],
  components: {
    slideText: __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default.a, vkBtn: __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default.a, vkProgress: __WEBPACK_IMPORTED_MODULE_3__components_progress_vue___default.a, flashCard: __WEBPACK_IMPORTED_MODULE_4__flash_card_vue___default.a, homework: __WEBPACK_IMPORTED_MODULE_5__homework_vue___default.a, classroom: __WEBPACK_IMPORTED_MODULE_6__classroom_vue___default.a, backCard: __WEBPACK_IMPORTED_MODULE_8__back_card_vue___default.a
  },
  computed: {
    //按钮状态
    classBtn: function classBtn() {
      //大按钮隐藏：lg-hide ，大按钮可用： lg-enable
      return __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__["b" /* BUTTON_STYLE_MAP */][this.config.bottomButton.buttonStatus];
    },
    //录播课按钮状态
    videoBtn: function videoBtn() {
      //小按钮隐藏：sl-hide ，小按钮可用： sl-enable
      return __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__["e" /* SMALL_BUTTON_STYLE_MAP */][this.config.aiCourseCard.bottomButton.buttonStatus];
    },
    //底部进度状态
    pps: function pps() {
      /*
       "scheduleButtonList": [
       {
       "buttonStyle":"BEDONE",
       "buttonText":"预习"
       },
       {
       "buttonStyle":"BEDONE",
       "buttonText":"上课"
       },
       {
       "buttonStyle":"DONTS",
       "buttonText":"做作业"
       }
       ],
       ----------------------------------
       "buttonStyle"的取值有：
       "BEDONE", 进度按钮状态
       "HIDDEN", 隐藏
       "DONTS", 未解锁
       "BEDONE", 已解锁未完成
       "DONE", 已完成
       */
      //disable:灰色 use：可预习 used：预习完
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.config.scheduleButtonList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sbl = _step.value;

          result.push({
            name: sbl.buttonText,
            state: this.lineStyleMap[sbl.buttonStyle]
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    },
    //录播课底部进度状态
    videoPps: function videoPps() {
      var result = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.config.aiCourseCard.scheduleButtonList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var sbl = _step2.value;

          result.push({
            name: sbl.buttonText,
            state: this.lineStyleMap[sbl.buttonStyle]
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return result;
    }
  },
  methods: {
    buttonClick: function buttonClick() {
      __WEBPACK_IMPORTED_MODULE_10__common_course_Course__["a" /* default */].courseButtonClick({
        type: this.config.bottomButton.buttonFunction,
        onlineClassId: this.config.onlineClassId,
        lessonNum: this.config.lessonNumber,
        lessonId: this.config.lessonId,
        clickId: this.config.bottomButton.clickid + "_front",
        courseId: this.config.courseId,
        curriculumVersion: this.config.curriculumVersion,
        bookType: this.config.bookType
      });
    },
    videoClick: function videoClick() {
      __WEBPACK_IMPORTED_MODULE_10__common_course_Course__["a" /* default */].courseButtonClick({
        type: this.config.aiCourseCard.bottomButton.buttonFunction,
        onlineClassId: this.config.onlineClassId,
        clickId: this.config.aiCourseCard.bottomButton.clickid + "_front"
      });
    },
    weekTime: function weekTime() {
      return __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].weekTime(this.config.scheduledDateTime);
    },
    dateTime: function dateTime() {
      return __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].dateTime(this.config.scheduledDateTime);
    },

    // 拉环点击
    handClick: function handClick() {
      var _this = this;

      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_hand_pull'
      });
      if (!this.isHandAnimationIng) {
        this.isHandAnimationIng = true;
        __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(this.$refs.cardHand, { top: "80px" }, {
          easing: "spring", mobileHA: false,
          duration: 500, complete: function complete() {
            if (_this.currentPanelState == "back") {
              _this.currentPanelState = "face";
            } else {
              _this.currentPanelState = "back";
            }
            __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(_this.$refs.cardHand, { top: "30px" }, {
              duration: 500, mobileHA: false,
              complete: function complete() {
                _this.isHandAnimationIng = false;
              }
            });
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(this.$refs.handLine, { height: "80px" }, {
          easing: "spring",
          duration: 500, complete: function complete() {
            __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(_this.$refs.handLine, { height: "30px" }, {
              duration: 500, mobileHA: false
            });
          }
        });
      }
      this.$playSound("click");
    },

    // hand hover state
    handHover: function handHover() {
      var _this2 = this;

      if (this.$refs.hand.style.animation == "none" || this.$refs.hand.style.animation == "") {
        this.$refs.hand.style.animation = "swing 1.5s";
        setTimeout(function () {
          _this2.$refs.hand.style.animation = "none";
        }, 1500);
      }
    }
  },
  mounted: function mounted() {
    // console.log(this.config)
  }
});

/***/ }),

/***/ "LNj2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "N10r":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ND+b":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("84Mi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("glY1")
/* template */
var __vue_template__ = __webpack_require__("i175")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39f34434"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/star_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] star_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39f34434", Component.options)
  } else {
    hotAPI.reload("data-v-39f34434", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue__ = __webpack_require__("YkRm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_config_js__ = __webpack_require__("+QWH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_common_plugins_ErrorImg__ = __webpack_require__("zoHC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_sound_click_sound_wav__ = __webpack_require__("C99X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_sound_click_sound_wav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_sound_click_sound_wav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_common_plugins_Sound__ = __webpack_require__("xazr");








//加载图片错误组件
__WEBPACK_IMPORTED_MODULE_5_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6__pages_common_plugins_ErrorImg__["a" /* default */]);
var match = navigator.userAgent.toLowerCase().match(/vipkid\/(\d+.\d+.\d+)/);
var uaVer = match ? match[1] : null;
var uaClass = match ? 'client' : 'browser';
__WEBPACK_IMPORTED_MODULE_5_vue__["default"].prototype.IS_IN_IPAD_APP = __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get('isFromApp');
__WEBPACK_IMPORTED_MODULE_5_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

//添加全局插件sound 注入click声音


__WEBPACK_IMPORTED_MODULE_5_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8__pages_common_plugins_Sound__["a" /* default */], [{ name: "click", path: __WEBPACK_IMPORTED_MODULE_7__assets_sound_click_sound_wav___default.a }]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  routes: __WEBPACK_IMPORTED_MODULE_2__router_config_js__["a" /* default */],
  mode: 'history',
  saveScrollPosition: true
});

router.beforeEach(function (to, from, next) {
  if (to.matched) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = __WEBPACK_IMPORTED_MODULE_2__router_config_js__["a" /* default */][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var route = _step.value;

        if (to.matched.length != 0 && to.matched[0].path === route.path) {
          //防范在url地址上的XSS攻击
          if (__WEBPACK_IMPORTED_MODULE_3__utils_untils__["b" /* default */].xssCheck(to.path)) {
            window.location.href = "/403";
            return;
          }
          document.title = route.title || 'VIPKID学习中心 - VIPKID在线少儿英语';
          break;
        } else {
          document.title = 'VIPKID学习中心 - VIPKID在线少儿英语';
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var referrer = from.fullPath === '/' ? document.referrer : location.href;

  next();
  //打点代码应放在next()执行后面，next为堆栈形式
  sa.register({
    product: 'student_learning',
    parent_id: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get('parentId') || '',
    student_id: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get('studentId') || '',
    vk_session_id: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get('vk_session_id'),
    client: uaClass === 'client' ? 'VIPKID_' + uaVer : uaClass,
    $referrer: referrer,
    $url: location.href,
    $url_path: location.pathname,
    $title: document.title,
    $browser_language: navigator.language
  });
  sa.track('$pageview');
});

var _vkForEach = function _vkForEach(fun, con) {
  var len = this.length;
  var con = arguments[1];
  if (typeof fun !== "function") {
    throw fun + " is not a function!";
  }
  for (var i = 0; i < len; i++) {
    fun.call(con, this[i], i, this);
  }
};
Array.prototype.vkForEach = _vkForEach;
NodeList.prototype.vkForEach = _vkForEach;

window.Vm = new __WEBPACK_IMPORTED_MODULE_5_vue__["default"]({
  router: router,
  el: '#app',
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_0__app_vue___default.a);
  }
});

/***/ }),

/***/ "NQ1I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/bubblebg@2x-cb2b8f50e5febe3ac8ed805f62b414c8.png";

/***/ }),

/***/ "NagW":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "trial-card"
  }, [(_vm.config.isBlink) ? _c('div', {
    staticClass: "trial-card-light"
  }) : _vm._e(), (_vm.config.isBlink) ? _c('img', {
    staticClass: "pet-img",
    attrs: {
      "src": _vm.petImgSrc
    }
  }) : _vm._e(), _c('div', {
    staticClass: "header"
  }, [_c('slide-text', {
    staticClass: "lesson",
    attrs: {
      "text": _vm.config.typeTitle
    }
  }), _c('div', {
    staticClass: "lesson-name"
  }, [_vm._v(_vm._s(_vm.config.mainTitle))]), _c('div', {
    staticClass: "date"
  }, [_c('span', {
    staticClass: "week"
  }, [_vm._v(_vm._s(_vm.weekTime()))]), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.dateTime()))])]), _c('div', {
    ref: "hand",
    staticClass: "hand"
  }, [_c('div', {
    staticClass: "h-black"
  }), _c('div', {
    ref: "handLine",
    staticClass: "h-line"
  }), _c('div', {
    ref: "cardHand",
    staticClass: "h-circle icon-hand-circle",
    on: {
      "click": _vm.handClick,
      "mouseenter": _vm.handHover
    }
  })])], 1), _c('div', {
    staticClass: "live-course",
    style: ({
      backgroundColor: _vm.currentPanelState == 'face' ? '#ffffff' : '#7fd16f'
    })
  }, [_c('transition-group', {
    attrs: {
      "enter-active-class": "animated fadeInDown"
    }
  }, [(_vm.currentPanelState == 'face') ? _c('div', {
    key: "1",
    staticClass: "front-face"
  }, [_c('div', {
    staticClass: "mid"
  }, [(_vm.config.cardStyle == 'pre_video') ? [_c('img', {
    staticClass: "pre-video-img",
    attrs: {
      "src": _vm.config.imageInfo.imageUrl
    }
  })] : _vm._e(), (_vm.config.cardStyle == 'classroom') ? _c('classroom', {
    attrs: {
      "classInfo": _vm.config.classInfo
    }
  }) : _vm._e(), (_vm.config.cardStyle == 'flash_card') ? [(_vm.config.homeworkInfo) ? [_c('flash-card', {
    attrs: {
      "cardConfig": _vm.config.homeworkInfo
    }
  })] : [_c('flash-card')]] : _vm._e(), (_vm.config.cardStyle == 'homework') ? [(_vm.config.homeworkInfo) ? [_c('homework', {
    attrs: {
      "cardConfig": _vm.config.homeworkInfo
    }
  })] : [_c('homework')]] : _vm._e()], 2), _c('vk-btn', {
    staticClass: "star-btn",
    attrs: {
      "type": _vm.classBtn,
      "text": _vm.config.bottomButton.buttonText,
      "clickFun": _vm.buttonClick,
      "alertText": _vm.alertText
    }
  }), _c('div', {
    staticClass: "progress"
  }, [_c('vk-progress', {
    attrs: {
      "pps": _vm.pps
    }
  })], 1)], 1) : _vm._e(), (_vm.currentPanelState == 'back') ? _c('div', {
    key: "2",
    staticClass: "back-face"
  }, [_c('back-card', {
    attrs: {
      "config": _vm.config
    }
  })], 1) : _vm._e()])], 1)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67ebeda0", module.exports)
  }
}

/***/ }),

/***/ "Nd22":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "O58e":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "classroom"
  }, [_c('div', {
    staticClass: "star-teacher-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.classInfo.teacherAvatar + '?imageView2/2/w/70/h/70'
    }
  })]), _c('div', {
    staticClass: "star-teacher-name"
  }, [_c('slide-text', {
    staticClass: "lesson",
    attrs: {
      "text": _vm.classInfo.teacherName,
      "isAutoSlide": true
    }
  })], 1), _c('div', {
    staticClass: "star-stars"
  }, [_vm._l((_vm.classInfo.starNum), function(star) {
    return [_c('div', {
      staticClass: "icon-star-enable"
    })]
  }), _vm._l(((5 - _vm.classInfo.starNum)), function(star) {
    return [_c('img', {
      attrs: {
        "src": __webpack_require__("OTJh")
      }
    })]
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7cbdcec8", module.exports)
  }
}

/***/ }),

/***/ "OGmi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "OH/S":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vk-dialog-container"
  }, [_c('div', {
    staticClass: "black-mask"
  }), _c('div', {
    staticClass: "dialog-bg"
  }, [(_vm.isShowCloseBtn) ? _c('div', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.config.closeDialog($event)
      }
    }
  }) : _vm._e(), _c('img', {
    staticClass: "dino-top",
    attrs: {
      "src": __webpack_require__("xpDb")
    }
  }), _c('div', {
    staticClass: "dialog-title"
  }, [_vm._v(_vm._s(_vm.config.title))]), _c('div', {
    staticClass: "white-board"
  }, [_vm._m(0), _c('div', {
    staticClass: "button-box"
  }, [_c('div', {
    staticClass: "dialog-btn btn-right",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.config.enter($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.config.buttonText))])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dialog-content"
  }, [_c('div', {
    staticClass: "placeholder"
  }), _c('div', {
    staticClass: "content"
  }, [_c('p', [_vm._v("1. 如使用耳机上课，请不要再进行插拔操作")]), _c('p', [_vm._v("2. 课程中，请确保小朋友肩部以上出现在视频中，可以更好的与老师沟通")]), _c('p', [_vm._v("3. 课程中，在左侧黑板，按住鼠标左键，可以连线、画圈，与老师互动")]), _c('p', [_vm._v("4. 课程中，如遇小朋友听不懂或者不理解时，可以说I don't know")]), _c('p', {
    staticClass: "margin-bottom"
  }, [_vm._v("5. 课程中，如遇技术问题，可直接点击页面右上方"), _c('img', {
    staticClass: "help-btn-img",
    attrs: {
      "src": __webpack_require__("m92C")
    }
  }), _vm._v("按钮")]), _c('p', [_vm._v("谢谢您的理解和配合，祝您和小朋友有个愉快的学习体验！")])])])
}]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a09c9a0", module.exports)
  }
}

/***/ }),

/***/ "OTC9":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enterActiveClass": "animated fadeIn",
      "leaveActiveClass": "animated fadeOut"
    }
  }, [_c('div', {
    staticClass: "learning-guide"
  }, [(_vm.step == 1) ? [_c('img', {
    staticClass: "impel-tip-1",
    attrs: {
      "src": __webpack_require__("NQ1I")
    }
  }), _c('div', {
    staticClass: "impel-icon"
  }, [_c('div', {
    staticClass: "icon-decatrion"
  }), _c('div', {
    staticClass: "icon-impel"
  })]), _c('img', {
    staticClass: "guide-bubble-know-1 animated pulse infinite",
    attrs: {
      "src": __webpack_require__("J+AZ")
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.step1($event)
      }
    }
  })] : _vm._e(), (_vm.step == 2) ? [_c('div', {
    staticClass: "jh-gem"
  }, [_c('div', {
    staticClass: "icon-gem"
  }), _c('div', {
    staticClass: "icon-right-btn"
  }), _c('div', {
    staticClass: "number"
  }, [_vm._v("100")])]), _c('img', {
    staticClass: "guide-bubble-know-2",
    attrs: {
      "src": __webpack_require__("J+AZ")
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.guideHide(false)
      }
    }
  }), _c('img', {
    staticClass: "impel-exchange animated pulse infinite",
    attrs: {
      "src": __webpack_require__("/zyt")
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToGift($event)
      }
    }
  }), _c('img', {
    staticClass: "impel-tip-2",
    attrs: {
      "src": __webpack_require__("3+Rs")
    }
  })] : _vm._e()], 2)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1655758b", module.exports)
  }
}

/***/ }),

/***/ "OTJh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/card_star_disable-21bf13c347853ce3647e4e25c8788d70.png";

/***/ }),

/***/ "OgoU":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "error-content"
  }, [_c('div', {
    staticClass: "error-text"
  }, [_vm._v("交通拥堵，稍等再试试")]), _c('vk-btn', {
    staticClass: "reload-btn",
    attrs: {
      "type": 'lg-enable',
      "text": "重新加载",
      "isNewTab": false,
      "clickFun": _vm.reload
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42525b2e", module.exports)
  }
}

/***/ }),

/***/ "OzRm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/camera-6bfaed657dc8b05970ff23f3fc51e845.png";

/***/ }),

/***/ "PEcf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_vue__ = __webpack_require__("aNdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flash_card_vue__ = __webpack_require__("cmu3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flash_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__flash_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homework_vue__ = __webpack_require__("GrP0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homework_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__homework_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classroom_vue__ = __webpack_require__("ctt2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classroom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__classroom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_card_vue__ = __webpack_require__("bNOW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__back_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__ = __webpack_require__("VDN5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_course_Course__ = __webpack_require__("JL7M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_vk_dialog_trial_vue__ = __webpack_require__("JkuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_vk_dialog_trial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__common_vk_dialog_trial_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      noTeacherImg: __webpack_require__("rOu3"),
      isHandAnimationIng: false,
      currentPanelState: "face", //face,back
      //完成状态
      workStatus: {
        undone: 0, //未完成
        done: 1 //已经完成
      },
      //底部进度条的状态
      lineStyleMap: {
        "DONTS": "disable",
        "BEDONE": "use",
        "DONE": "used"
      },
      alertText: ''
    };
  },
  props: ['config', 'petImgSrc'],
  components: {
    slideText: __WEBPACK_IMPORTED_MODULE_0__common_vk_slide_text_vue___default.a, vkBtn: __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default.a, vkProgress: __WEBPACK_IMPORTED_MODULE_3__components_progress_vue___default.a, flashCard: __WEBPACK_IMPORTED_MODULE_4__flash_card_vue___default.a, homework: __WEBPACK_IMPORTED_MODULE_5__homework_vue___default.a, classroom: __WEBPACK_IMPORTED_MODULE_6__classroom_vue___default.a, backCard: __WEBPACK_IMPORTED_MODULE_8__back_card_vue___default.a
  },
  computed: {
    //按钮状态
    classBtn: function classBtn() {
      if (this.config.bottomButton.buttonExtra && this.config.bottomButton.buttonExtra.alertText) {
        this.alertText = this.config.bottomButton.buttonExtra.alertText;
      }
      //大按钮隐藏：lg-hide ，大按钮可用： lg-enable
      return __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__["b" /* BUTTON_STYLE_MAP */][this.config.bottomButton.buttonStatus];
    },
    //录播课按钮状态
    videoBtn: function videoBtn() {
      //小按钮隐藏：sl-hide ，小按钮可用： sl-enable
      return __WEBPACK_IMPORTED_MODULE_9__common_course_courseEnum__["e" /* SMALL_BUTTON_STYLE_MAP */][this.config.aiCourseCard.bottomButton.buttonStatus];
    },
    //底部进度状态
    pps: function pps() {
      /*
       "scheduleButtonList": [
       {
       "buttonStyle":"BEDONE",
       "buttonText":"预习"
       },
       {
       "buttonStyle":"BEDONE",
       "buttonText":"上课"
       },
       {
       "buttonStyle":"DONTS",
       "buttonText":"做作业"
       }
       ],
       ----------------------------------
       "buttonStyle"的取值有：
       "BEDONE", 进度按钮状态
       "HIDDEN", 隐藏
       "DONTS", 未解锁
       "BEDONE", 已解锁未完成
       "DONE", 已完成
       */
      //disable:灰色 use：可预习 used：预习完
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.config.scheduleButtonList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var sbl = _step.value;

          result.push({
            name: sbl.buttonText,
            state: this.lineStyleMap[sbl.buttonStyle]
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    },
    //录播课底部进度状态
    videoPps: function videoPps() {
      var result = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.config.aiCourseCard.scheduleButtonList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var sbl = _step2.value;

          result.push({
            name: sbl.buttonText,
            state: this.lineStyleMap[sbl.buttonStyle]
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return result;
    }
  },
  methods: {
    buttonClick: function buttonClick() {
      __WEBPACK_IMPORTED_MODULE_10__common_course_Course__["a" /* default */].courseButtonClick({
        type: this.config.bottomButton.buttonFunction,
        onlineClassId: this.config.onlineClassId,
        lessonNum: this.config.lessonNumber,
        lessonId: this.config.lessonId,
        clickId: this.config.bottomButton.clickid + "_front",
        courseId: this.config.courseId,
        curriculumVersion: this.config.curriculumVersion,
        bookType: this.config.bookType,
        buttonStatus: this.config.bottomButton.buttonStatus
      });
    },
    weekTime: function weekTime() {
      return __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].weekTime(this.config.scheduledDateTime);
    },
    dateTime: function dateTime() {
      return __WEBPACK_IMPORTED_MODULE_1__utils_untils__["b" /* default */].dateTime(this.config.scheduledDateTime);
    },

    // 拉环点击
    handClick: function handClick() {
      var _this = this;

      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_hand_pull'
      });
      if (!this.isHandAnimationIng) {
        this.isHandAnimationIng = true;
        __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(this.$refs.cardHand, { top: "80px" }, {
          easing: "spring", mobileHA: false,
          duration: 500, complete: function complete() {
            if (_this.currentPanelState == "back") {
              _this.currentPanelState = "face";
            } else {
              _this.currentPanelState = "back";
            }
            __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(_this.$refs.cardHand, { top: "30px" }, {
              duration: 500, mobileHA: false,
              complete: function complete() {
                _this.isHandAnimationIng = false;
              }
            });
          }
        });
        __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(this.$refs.handLine, { height: "80px" }, {
          easing: "spring",
          duration: 500, complete: function complete() {
            __WEBPACK_IMPORTED_MODULE_7_velocity_animate___default.a(_this.$refs.handLine, { height: "30px" }, {
              duration: 500, mobileHA: false
            });
          }
        });
      }
      this.$playSound("click");
    },

    // hand hover state
    handHover: function handHover() {
      var _this2 = this;

      if (this.$refs.hand.style.animation == "none" || this.$refs.hand.style.animation == "") {
        this.$refs.hand.style.animation = "swing 1.5s";
        setTimeout(function () {
          _this2.$refs.hand.style.animation = "none";
        }, 1500);
      }
    }
  }
});

/***/ }),

/***/ "Px2D":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/girl_4-8e463124ae497ac43379631e85fe1c07.png";

/***/ }),

/***/ "PysO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/project-pinSmall-38ff69edcd6c0055d80800c2d5eac353.png";

/***/ }),

/***/ "QSaF":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("TTQn")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("KxLK")
/* template */
var __vue_template__ = __webpack_require__("0j0T")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e61e924"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/book_detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] book_detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e61e924", Component.options)
  } else {
    hotAPI.reload("data-v-2e61e924", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "Qt9A":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("p7SD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("x2x/")
/* template */
var __vue_template__ = __webpack_require__("yRwJ")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c12ceba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c12ceba", Component.options)
  } else {
    hotAPI.reload("data-v-0c12ceba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "RHXJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      step: 1
    };
  },
  components: {},
  props: ['isShowAccessBtn'],
  computed: {},
  mounted: function mounted() {},

  methods: {
    step1: function step1() {
      this.step = 2;
      this.$playSound("click");
    },
    guideHide: function guideHide(isOut) {
      var _this = this;

      this.$emit("guideClose", isOut);
      setTimeout(function () {
        _this.step = 1;
      }, 1000);
      this.$playSound("click");
    },
    goToGift: function goToGift() {
      this.guideHide(true);
      this.$router.push("/gift_exchange");
    }
  }
});

/***/ }),

/***/ "RN5K":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "gift_animate_wrap"
  }, [_c('div', {
    staticClass: "move-aircraft-wrap",
    class: _vm.aircraftClassName
  }, [(_vm.imgConfig.aircraftImgSrc) ? _c('img', {
    staticClass: "move-aricraft",
    attrs: {
      "src": _vm.imgConfig.aircraftImgSrc
    }
  }) : _vm._e()]), (_vm.imgConfig.isShowPet) ? _c('div', {
    ref: "petWrap",
    staticClass: "move-pet-wrap"
  }, [(_vm.imgConfig.petImgSrc != '') ? _c('img', {
    ref: "pet",
    staticClass: "move-pet",
    attrs: {
      "src": _vm.imgConfig.petImgSrc
    }
  }) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68e15293", module.exports)
  }
}

/***/ }),

/***/ "RNnM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  props: [
  /*
   * pps: [
   {
   name: "预习",
   state: "use",//disable:灰色 use：可预习 used：预习完
   },
   {
   name: "上课",
   state: "disable",//disable:灰色 use：可预习 used：预习完
   },
   {
   name: "做作业",
   state: "disable",//disable:灰色 use：可预习 used：预习完
   }
   ]
   */
  "pps"],
  components: {},
  computed: {},
  methods: {}
});

/***/ }),

/***/ "RWMv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RaiI":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("68/5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("hTAC")
/* template */
var __vue_template__ = __webpack_require__("VNtN")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d80d5e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_slide_text.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_slide_text.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d80d5e8", Component.options)
  } else {
    hotAPI.reload("data-v-3d80d5e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "Rv4Z":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/readers/loading-b0a5b9283306823a483a4d5cdcebfa25.gif";

/***/ }),

/***/ "SSlM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/loading-6efa412b65803a9b23a487a0ef0f618f.gif";

/***/ }),

/***/ "SUdm":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("N10r")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("w/ak")
/* template */
var __vue_template__ = __webpack_require__("RN5K")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68e15293"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/gift_animate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] gift_animate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68e15293", Component.options)
  } else {
    hotAPI.reload("data-v-68e15293", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "TS4m":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('keep-alive', [(_vm.$route.meta.keepAlive) ? _c('router-view', {
    staticClass: "app-container",
    attrs: {
      "hashbang": true,
      "history": true
    }
  }) : _vm._e()], 1), _c('transition', {
    on: {
      "leave": _vm.leaveAnimation
    }
  }, [(!_vm.$route.meta.keepAlive) ? _c('router-view', {
    staticClass: "animated fadeInRight app-container",
    attrs: {
      "hashbang": true,
      "history": true
    }
  }) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef76505e", module.exports)
  }
}

/***/ }),

/***/ "TTQn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TfaS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return $post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $all; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_form_urlencoded__ = __webpack_require__("YVjH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_form_urlencoded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_form_urlencoded__);



var apiurl = '/rest/learninggw';

function $get(urls, date) {
  var url = '' + apiurl + urls;
  return __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get(url, {
    params: date
  });
}

function $post(urls, data) {
  var isUrlencoded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var date = '';
  if (isUrlencoded) {
    date = __WEBPACK_IMPORTED_MODULE_1_form_urlencoded___default.a(data);
  } else {
    date = data;
  }
  var url = '' + apiurl + urls;
  return __WEBPACK_IMPORTED_MODULE_0_axios__["default"].post(url, date);
}

function $all(fn1, fn2) {
  return __WEBPACK_IMPORTED_MODULE_0_axios__["default"].all([fn1, fn2]);
}



/***/ }),

/***/ "TpGo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/boy_2-c239534fcd1cf80c6c06dc174bfec27f.png";

/***/ }),

/***/ "Tr3j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['message', 'isHappy'],
  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "U3gk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "UQ7X":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("mhXp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("GCF1")
/* template */
var __vue_template__ = __webpack_require__("g31g")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-042adc70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/index_body.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index_body.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-042adc70", Component.options)
  } else {
    hotAPI.reload("data-v-042adc70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "UrxW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/new_card_bg-f84dba1528b4a6f3c2562b93b97cd9c8.png";

/***/ }),

/***/ "VDN5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CURRENT_COURSE_STATUS; });
/* unused harmony export COURSE_CARD_STATUS */
/* unused harmony export LESSON_STATUS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CARD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BUTTON_STYLE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SMALL_BUTTON_STYLE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACK_BUTTON_MAP; });
/**
 * Created by lihongbin on 2018/7/22.
 */

//卡片枚举
var CARD_TYPE = {
  major: 0, //主修课卡片
  majorExtension: 1, //主修拓展卡片
  summerCampUSA: 2, //夏令营卡片（美国营队）
  summerCampETS: 3, //夏令营卡片（小托福）
  openCourse: 4, //公开课卡片
  otherCourse: 5, //其他课卡片
  testCourse: 6, //水平自测卡片
  kidVideo: 7, //宝贝指导视频卡片
  parentVideo: 8, //父母指导视频卡片
  messageTip: 9, //消息提醒卡片
  projectDemo: 10, //主修projectDemo卡片
  winterCamp: 11, //冬令营卡片
  newTrail: 12, //新版Trial课卡片
  openReader: 13, //带有绘本的公开课
  toefl: 14, //考级课小托福
  properPronunciation: 15, //优美发音课 597828
  phonics: 16, //自然拼读课 597825
  voice: 17, //唱一唱课 597826
  freeTalk: 18, //聊一聊课 597827
  error: 100, //错误卡片，重新加载
  itTest: 200 //it test卡片

  //lessonStatus的所有取值：
};var LESSON_STATUS = {
  unBook: 0, // 未约
  booked: 1, // 已约，未开始             11:30之前
  inClass: 2, // 课程前30分钟至课程结束  11：30 -- 12：30
  outClass: 3, // 已下课               12：30 -- 13：00
  classOver: 4, // 课程结束后30分钟     13：00之后
  classReplay: 5 //  FINISHED & AS_SCHEDULED  课程状态变成FINISHED之后
};
var COURSE_CARD_STATUS = {
  preClass: 0, // "预习状态
  onClass: 1, //上课状态
  onHomework: 2, //做作业状态
  afterClass: 3, //课程已经完成
  onResult: 4 //查看结果状态


  //当前课程状态，主要用于首页卡片，正面
};var CURRENT_COURSE_STATUS = {
  pre: "PRE", //课前预习按钮
  after: "AFTER", //课后作业按钮
  courseWare: "COURSEWARE", //查看课件
  majorClassRoom: "MAJOR_CLASSROOM", //进入一对一教室
  majorClassRoomFinish: "MAJOR_CLASSROOM_FINISH", //进入已下课的一对一教室
  publicClassRoom: "PUBLIC_CLASSROOM", //进入公开课教室
  publicClassRoomFinish: "PUBLIC_CLASSROOM_FINISH", //进入已下课的公开课教室
  publicClassRecord: 'PUBLIC_CLASSROOM_RECORDED',
  majorReplay: "MAJOR_REPLAY", //进入一对一回放
  publicReplay: "PUBLIC_REPLAY", //进入公开课回放
  pdf: "PDF", //pdf 复习资料
  eslClassroomRecord: "ESL_CLASSROOM_RECORD",
  trialReport: "TRIAL_REPORT" //new trial


  //后台返回的按钮状态和前台 DOM class 的对应关系，正面卡
};var BUTTON_STYLE_MAP = {
  "HIGH": "lg-enable",
  "GRAY": "lg-disable",
  "GRAY_ALERT": "lg-disable-alert"
  //录屏按钮状态
};var SMALL_BUTTON_STYLE_MAP = {
  "HIGH": "sl-enable",
  "GRAY": "sl-disable",
  "GRAY_ALERT": "sl-disable-alert"

  //后台返回的按钮状态和前台 DOM class 的对应关系，背部卡
};var BACK_BUTTON_MAP = {
  "HIGH": "enable",
  "GRAY": "disable",
  "GRAY_ALERT": "disable-alert"
};



/***/ }),

/***/ "VNtN":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slide-text",
    on: {
      "mouseenter": _vm.textEnter,
      "mouseout": _vm.textOut
    }
  }, [_c('div', {
    ref: "textInner",
    staticClass: "slide-text-inner"
  }, [_vm._v(_vm._s(_vm.text))])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d80d5e8", module.exports)
  }
}

/***/ }),

/***/ "VRBV":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pre-content"
  }, [_c('transition-group', {
    attrs: {
      "enter-active-class": "animated fadeInDown"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentPanelState == 'face'),
      expression: "currentPanelState=='face'"
    }],
    key: "1",
    staticClass: "panel-face"
  }, [([15].indexOf(_vm.config.cardType) > -1 && [2].indexOf(_vm.config.courseCardStatus) > -1) ? _c('img', {
    staticClass: "pre-video",
    attrs: {
      "src": _vm.config.afterHomeworkImg + '?imageView2/2/w/127/h/180'
    },
    on: {
      "error": _vm.errorImg
    }
  }) : _c('img', {
    staticClass: "pre-video",
    attrs: {
      "src": _vm.config.preHomeworkImg + '?imageView2/2/w/127/h/180'
    },
    on: {
      "error": _vm.errorImg
    }
  }), ([15, 17, 18].indexOf(_vm.config.cardType) > -1 && [2].indexOf(_vm.config.courseCardStatus) > -1) ? _c('vk-btn', {
    staticClass: "pre-btn",
    attrs: {
      "type": 'lg-' + _vm.backButtonState[_vm.config.afterHomeworkButton],
      "text": _vm.config.afterHomeworkButtonText,
      "isNewTab": false,
      "clickFun": _vm.goHomework,
      "clickId": "homepage_btn_pre"
    }
  }) : _c('vk-btn', {
    staticClass: "pre-btn",
    attrs: {
      "type": 'lg-' + _vm.backButtonState[_vm.config.preHomeworkButton],
      "text": _vm.config.preHomeworkButtonText,
      "isNewTab": false,
      "clickFun": _vm.goHomework,
      "clickId": "homepage_btn_pre"
    }
  }), _c('vk-progress', {
    attrs: {
      "pps": _vm.pps
    }
  })], 1), (_vm.currentPanelState == 'back') ? _c('back-card', {
    key: "2",
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f675c030", module.exports)
  }
}

/***/ }),

/***/ "VU/8":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "VVDu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "W26G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isThisDialogShow: true
    };
  },
  props: {
    config: {
      type: Object,
      default: {},
      required: true
    }
  },
  created: function created() {},

  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default.a
  },
  computed: {},
  mounted: function mounted() {},

  methods: {
    eventTriger: function eventTriger(event) {
      this.$emit(event);
    }
  }
});

/***/ }),

/***/ "Waww":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("ui1H")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("Cmin")
/* template */
var __vue_template__ = __webpack_require__("YryB")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28efdf8e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28efdf8e", Component.options)
  } else {
    hotAPI.reload("data-v-28efdf8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "Wk9D":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "reader-content"
  }, [_c('transition-group', {
    attrs: {
      "enter-active-class": "animated fadeInDown"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentPanelState == 'face'),
      expression: "currentPanelState=='face'"
    }],
    key: "1",
    staticClass: "panel-face"
  }, [_c('div', {
    staticClass: "book-hd"
  }, [_c('div', {
    staticClass: "book-shadow"
  }), _c('img', {
    staticClass: "reader-book",
    attrs: {
      "src": _vm.config.bookCoverUrl + '?imageView2/2/w/127/h/180'
    },
    on: {
      "error": _vm.errorImg
    }
  })]), _c('vk-btn', {
    staticClass: "reader-btn",
    attrs: {
      "type": 'lg-' + _vm.backButtonState[_vm.config.bookButton],
      "text": _vm.config.bookButtonText,
      "isNewTab": false,
      "link": ("/digitalLibrary/detail/" + (_vm.config.bookId) + "/" + (_vm.config.bookCode)),
      "clickId": "homepage_btn_pre"
    }
  }), _c('vk-progress', {
    attrs: {
      "pps": _vm.pps
    }
  })], 1), (_vm.currentPanelState == 'back') ? _c('back-card', {
    key: "2",
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c7047b56", module.exports)
  }
}

/***/ }),

/***/ "Xx4y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/project_bg-995f7f04ca625394b0a56a977aebf870.png";

/***/ }),

/***/ "Y/0N":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-bg"
  }, [_c('div', {
    staticClass: "bg-galaxy"
  }), _c('div', {
    staticClass: "bg-star"
  }), _c('div', {
    staticClass: "bg-falling-star bg-falling-star-1"
  }), _c('div', {
    staticClass: "bg-falling-star bg-falling-star-2"
  }), _c('div', {
    staticClass: "bg-falling-star bg-falling-star-3"
  }), _c('div', {
    staticClass: "my-gift"
  }, [_vm._l((_vm.airCrafts), function(airCraft) {
    return [_c('img', {
      staticClass: "air-img",
      attrs: {
        "src": airCraft.picName
      }
    })]
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fc8909da", module.exports)
  }
}

/***/ }),

/***/ "Y3y/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YIvq":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "student-info"
  }, [_c('div', {
    staticClass: "student-inner animated fadeInDown"
  }, [_c('div', {
    staticClass: "close-btn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.close($event)
      }
    }
  }), _c('div', {
    staticClass: "tab-1",
    style: (_vm.state == 1 ? 'z-index:-1;background-color:#7965bc;' : 'background-color:#a18ee3;'),
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.tab0($event)
      }
    }
  }, [_c('div', {
    staticClass: "t1-text"
  }, [_vm._v("宝贝信息")])]), _c('div', {
    staticClass: "tab-2",
    style: (_vm.state == 0 ? 'z-index:-1;background-color:#7965bc;' : 'background-color:#a18ee3;'),
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.tab1($event)
      }
    }
  }, [_c('div', {
    staticClass: "t2-text"
  }, [_vm._v("英语等级")])]), _c('div', {
    staticClass: "si-bg-user"
  }, [(_vm.state == 0) ? _c('div', {
    staticClass: "user-bg"
  }, [_c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "125px",
      "left": "25px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "125px",
      "right": "25px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "462px",
      "left": "25px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "462px",
      "right": "25px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('div', {
    staticClass: "user-actor"
  }, [(_vm.user.studentAvatar == 'default') ? _c('img', {
    attrs: {
      "src": __webpack_require__("fMu9")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'boy_1') ? _c('img', {
    attrs: {
      "src": __webpack_require__("fMu9")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'boy_2') ? _c('img', {
    attrs: {
      "src": __webpack_require__("TpGo")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'boy_3') ? _c('img', {
    attrs: {
      "src": __webpack_require__("hwX5")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'boy_4') ? _c('img', {
    attrs: {
      "src": __webpack_require__("Az44")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'girl_1') ? _c('img', {
    attrs: {
      "src": __webpack_require__("cVPk")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'girl_2') ? _c('img', {
    attrs: {
      "src": __webpack_require__("vYEO")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'girl_3') ? _c('img', {
    attrs: {
      "src": __webpack_require__("IxIT")
    }
  }) : _vm._e(), (_vm.user.studentAvatar == 'girl_4') ? _c('img', {
    attrs: {
      "src": __webpack_require__("Px2D")
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "line"
  }), _c('div', {
    staticClass: "ub-name-en"
  }, [_vm._v(_vm._s(_vm.user.studentName))]), _c('div', {
    staticClass: "ub-name-cn"
  }, [_vm._v(_vm._s(_vm.user.studentNameCn))]), _c('div', {
    staticClass: "ub-name-six"
  }, [(_vm.user.studentSex == 1) ? _c('div', {
    staticClass: "icon-boy ub-icon",
    staticStyle: {
      "left": "365px"
    }
  }) : _vm._e(), (_vm.user.studentSex == 2) ? _c('div', {
    staticClass: "icon-girl ub-icon",
    staticStyle: {
      "left": "365px"
    }
  }) : _vm._e(), _vm._v(_vm._s(_vm.user.studentSex == 1 ? '男孩' : '女孩'))]), _c('div', {
    staticClass: "ub-name-birthday"
  }, [_c('div', {
    staticClass: "icon-birthday ub-icon",
    staticStyle: {
      "left": "325px"
    }
  }), _vm._v(_vm._s(_vm.studentBirthday()))])]) : _vm._e(), (_vm.state == 1) ? _c('div', {
    staticClass: "report-bg"
  }, [_c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "10px",
      "left": "10px",
      "height": "20px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "10px",
      "right": "10px",
      "height": "20px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "480px",
      "left": "10px",
      "height": "20px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "480px",
      "right": "10px",
      "height": "20px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), (!_vm.isTest) ? _c('div', {
    staticClass: "hava-data"
  }, [_c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "80px",
      "left": "25px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "80px",
      "right": "18px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "447px",
      "left": "25px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _c('img', {
    staticClass: "ding-zi",
    staticStyle: {
      "top": "447px",
      "right": "18px",
      "height": "15px"
    },
    attrs: {
      "src": __webpack_require__("PysO")
    }
  }), _vm._m(0), _c('div', {
    staticClass: "re-body"
  }, [_c('table', [_c('tbody', _vm._l((_vm.result), function(re, index) {
    return _c('tr', [(re.isNew == 0) ? _c('td', {
      staticClass: "report",
      style: (index == 0 ? 'border-top: none;' : '')
    }, [_vm._v(_vm._s(re.examCommentDescParant))]) : _vm._e(), (re.isNew == 1) ? _c('td', {
      staticClass: "see-report",
      style: (index == 0 ? 'border-top: none;' : ''),
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.goToReport(re.examUuid, re.onlineClassId)
        }
      }
    }, [_vm._v("查看报告详情 >")]) : _vm._e(), _c('td', {
      style: (index == 0 ? 'border-right: none;border-top: none;width:100px;' : 'border-right: none;width:100px;')
    }, [_vm._v(_vm._s(re.endDatetime))])])
  }))])])]) : _vm._e(), (_vm.isTest) ? _c('div', {
    staticClass: "no-data"
  }, [_c('img', {
    staticClass: "test-dino",
    attrs: {
      "src": __webpack_require__("cPt7")
    }
  }), _c('div', {
    staticClass: "test-text"
  }, [_vm._v("快来测测宝贝的英语水平吧~")]), _c('test-btn', {
    staticClass: "test-btn",
    attrs: {
      "type": "lg-enable",
      "text": "测一测",
      "clickFun": _vm.startTest
    }
  })], 1) : _vm._e()]) : _vm._e()])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('table', [_c('thead', [_c('th', {
    staticStyle: {
      "width": "410px"
    }
  }, [_vm._v("测试报告")]), _c('th', [_vm._v("测试日期")])])])
}]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cc7501a", module.exports)
  }
}

/***/ }),

/***/ "Ycnf":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("FJML")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("BmAO")
/* template */
var __vue_template__ = __webpack_require__("HiOi")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-067c41df"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/user_agreement.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] user_agreement.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-067c41df", Component.options)
  } else {
    hotAPI.reload("data-v-067c41df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "YkRm":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("mSL3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("39ur")
/* template */
var __vue_template__ = __webpack_require__("TS4m")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef76505e", Component.options)
  } else {
    hotAPI.reload("data-v-ef76505e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "YryB":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header",
    style: (_vm.isShowAddNumber ? 'z-index:122' : '')
  }, [(_vm.userInfo.isShow) ? _c('div', {
    staticClass: "jh-panel"
  }, [_c('div', {
    staticClass: "jh-user",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openUseInfo($event)
      }
    }
  }, [_c('div', {
    staticClass: "user-avatar"
  }, [(_vm.userInfo.studentAvatar == 'boy_1') ? _c('img', {
    attrs: {
      "src": __webpack_require__("fMu9")
    }
  }) : _vm._e(), (_vm.userInfo.studentAvatar == 'boy_2') ? _c('img', {
    attrs: {
      "src": __webpack_require__("TpGo")
    }
  }) : _vm._e(), (_vm.userInfo.studentAvatar == 'boy_3') ? _c('img', {
    attrs: {
      "src": __webpack_require__("hwX5")
    }
  }) : _vm._e(), (_vm.userInfo.studentAvatar == 'boy_4') ? _c('img', {
    attrs: {
      "src": __webpack_require__("Az44")
    }
  }) : _vm._e(), (_vm.userInfo.studentAvatar == 'girl_1') ? _c('img', {
    attrs: {
      "src": __webpack_require__("cVPk")
    }
  }) : _vm._e(), (_vm.userInfo.studentAvatar == 'girl_2') ? _c('img', {
    attrs: {
      "src": __webpack_require__("vYEO")
    }
  }) : _vm._e(), (_vm.userInfo.studentAvatar == 'girl_3') ? _c('img', {
    attrs: {
      "src": __webpack_require__("IxIT")
    }
  }) : _vm._e(), (_vm.userInfo.studentAvatar == 'girl_4') ? _c('img', {
    attrs: {
      "src": __webpack_require__("Px2D")
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "myself-panel"
  }, [_c('slide-text', {
    staticClass: "name",
    class: !(_vm.userInfo.currentLevel && _vm.userInfo.currentUnit) ? 'name-mid' : '',
    attrs: {
      "text": _vm.userInfo.studentName,
      "isAutoSlide": true
    }
  }), ((_vm.userInfo.currentLevel && _vm.userInfo.currentUnit)) ? _c('div', {
    staticClass: "level-unit"
  }, [_vm._v(_vm._s(_vm.userInfo.currentLevel) + " " + _vm._s(_vm.userInfo.currentUnit))]) : _vm._e(), ((_vm.userInfo.currentLevel && _vm.userInfo.currentUnit)) ? _c('div', {
    staticClass: "rate"
  }, [_c('div', {
    staticClass: "rate-over",
    style: ({
      width: _vm.userInfo.finishPercent + '%'
    })
  })]) : _vm._e()], 1)]), _c('div', {
    staticClass: "jh-star animated zoomIn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToStar($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-star-small"
  }), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.userInfo.starNum))]), (_vm.isHavePromotion) ? _c('div', {
    staticClass: "promotion-in-top"
  }) : _vm._e(), (_vm.isHavePromotion) ? _c('div', {
    staticClass: "promotion-in animated",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToPromotion($event)
      }
    }
  }) : _vm._e(), (_vm.showDreamEntry) ? _c('div', {
    staticClass: "dream-in-top"
  }) : _vm._e(), (_vm.showDreamEntry) ? _c('div', {
    staticClass: "dream-in animated",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToDream($event)
      }
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "jh-honor animated zoomIn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showHonor($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-honor-small"
  }), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.userInfo.medalNum))]), (_vm.hasNewHonor) ? _c('div', {
    staticClass: "red-circle"
  }) : _vm._e()]), _c('div', {
    staticClass: "jh-gem animated zoomIn",
    on: {
      "click": _vm.goToHotActivity
    }
  }, [_c('div', {
    staticClass: "icon-gem-small"
  }), _c('div', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.userInfo.eggShellNum))]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowAddNumber),
      expression: "isShowAddNumber"
    }],
    staticClass: "add-number animated fadeInUp"
  }, [_c('number', {
    staticClass: "number-text",
    attrs: {
      "number": _vm.impelNumber
    }
  })], 1), _c('div', {
    staticClass: "greeting-cards-in-top"
  }), _c('div', {
    staticClass: "greeting-cards-in animated",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToECard($event)
      }
    }
  })]), (_vm.showRankEntry) ? _c('div', {
    staticClass: "jh-rank",
    on: {
      "click": _vm.goToRankings
    }
  }, [_c('div', {
    staticClass: "icon-rank-small"
  })]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: "jh-server"
  }, [(_vm.courseEnterState.lib != 'hide') ? _c('div', {
    staticClass: "jh-server-btn js4 animated zoomIn",
    class: _vm.courseEnterState.lib == 'locked' ? 'js4-locked' : '',
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToLib($event)
      }
    }
  }, [_c('div', {
    staticClass: "jh-cn"
  }, [_vm._v("数字图书馆")]), _c('div', {
    staticClass: "jh-en"
  }, [_vm._v("Digital Library")]), (_vm.courseEnterState.lib == 'new') ? _c('div', {
    staticClass: "jg-new"
  }) : _vm._e(), (_vm.courseEnterState.lib == 'locked') ? _c('div', {
    staticClass: "jg-lock"
  }) : _vm._e()]) : _vm._e(), (_vm.courseEnterState.supplementary != 'hide') ? _c('div', {
    staticClass: "jh-server-btn js3 animated zoomIn",
    class: _vm.courseEnterState.supplementary == 'locked' ? 'js3-locked' : '',
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToSupplementary($event)
      }
    }
  }, [_c('div', {
    staticClass: "jh-cn"
  }, [_vm._v("辅修课程")]), _c('div', {
    staticClass: "jh-en"
  }, [_vm._v("Supplementary Course")]), (_vm.courseEnterState.supplementary == 'new') ? _c('div', {
    staticClass: "jg-new"
  }) : _vm._e(), (_vm.courseEnterState.supplementary == 'locked') ? _c('div', {
    staticClass: "jg-lock"
  }) : _vm._e()]) : _vm._e(), (_vm.courseEnterState.extension != 'hide') ? _c('div', {
    staticClass: "jh-server-btn js2 animated zoomIn",
    class: _vm.courseEnterState.extension == 'locked' ? 'js2-locked' : '',
    on: {
      "mouseleave": function($event) {
        _vm.isShowMajorExtensionTip = false
      },
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToMajorExtension($event)
      }
    }
  }, [_c('div', {
    staticClass: "jh-cn"
  }, [_vm._v("主修拓展")]), _c('div', {
    staticClass: "jh-en"
  }, [_vm._v("Major Course Extension"), (_vm.isShowMajorExtensionTip) ? _c('vk-tip', {
    attrs: {
      "type": "bottom",
      "message": "完成每个学习周期可以获得新拓展内容哦~"
    }
  }) : _vm._e()], 1), (_vm.courseEnterState.extension == 'new') ? _c('div', {
    staticClass: "jg-new"
  }) : _vm._e(), (_vm.courseEnterState.extension == 'locked') ? _c('div', {
    staticClass: "jg-lock"
  }) : _vm._e()]) : _vm._e(), (_vm.courseEnterState.major != 'hide') ? _c('div', {
    staticClass: "jh-server-btn js1 animated zoomIn",
    class: _vm.courseEnterState.major == 'locked' ? 'js1-locked' : '',
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goToMajor($event)
      }
    }
  }, [_c('div', {
    staticClass: "jh-cn"
  }, [_vm._v("主修课程")]), _c('div', {
    staticClass: "jh-en"
  }, [_vm._v("Major Course")]), (_vm.courseEnterState.major == 'new') ? _c('div', {
    staticClass: "jg-new"
  }) : _vm._e(), (_vm.courseEnterState.major == 'locked') ? _c('div', {
    staticClass: "jg-lock"
  }) : _vm._e()]) : _vm._e()]), (_vm.isHaveConfirmOrderFlag) ? _c('div', {
    staticClass: "seven-day-no-confim-order"
  }, [_vm._m(0), _c('div', {
    staticClass: "seven-day-no-confirm-button",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.closeConfirmOrderTrips($event)
      }
    }
  }, [_c('p', [_vm._v(" 知道了")])])]) : _vm._e(), (_vm.honorShow) ? _c('Honor', {
    attrs: {
      "closeHonor": _vm.closeHonor
    }
  }) : _vm._e(), (_vm.isShowUserInfo) ? _c('student-info', {
    attrs: {
      "close": _vm.closeUserInfo,
      "user": _vm.userInfo
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "seven-day-no-confirm-trips"
  }, [_c('p', [_vm._v(" 宝贝有订单需要爸爸妈妈确认"), _c('br'), _vm._v("才能发货哦！")])])
}]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28efdf8e", module.exports)
  }
}

/***/ }),

/***/ "Z2+P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__);
//
//
//
//
//
//

//  {
//    "cardType":10,
//    "show":true,
//    "infoText":"宝贝有一节试听课哦！",
//    "scheduledDateTime":95617615188732
//  }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['config'],
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default.a
  },
  computed: {},
  mounted: function mounted() {},

  methods: {
    reload: function reload() {
      window.location.reload();
    }
  }
});

/***/ }),

/***/ "ZDmK":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message-content"
  }, [_c('div', {
    staticClass: "c-text"
  }, [_vm._v(_vm._s(_vm.config.infoText))])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9c302762", module.exports)
  }
}

/***/ }),

/***/ "ZZf1":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video-content"
  }, [_c('img', {
    staticClass: "v-video",
    attrs: {
      "src": _vm.config.cardType == 10 ? _vm.projectBg : _vm.config.preImg
    },
    on: {
      "error": _vm.errorImg
    }
  }), _c('vk-btn', {
    staticClass: "video-btn",
    attrs: {
      "type": 'lg-' + _vm.backButtonState[_vm.config.viewButton],
      "text": _vm.config.viewButtonText,
      "clickFun": _vm.clickVideo
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7421abca", module.exports)
  }
}

/***/ }),

/***/ "aJ50":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_untils__ = __webpack_require__("b43k");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//  "content": {
//    "studentId": 1122973,
//      "examUnit": "unit 7",
//      "examComment": "美国小学K年级 (Grade K)",
//      "examUuid": "744fa48a-3ed5-47ba-88ee-42e8658fbb23",
//      "startTime": 1440424919000,
//      "id": 957,
//      "type": 0,
//      "examLevel": "Level 2",
//      "examCommentDescParant": "您的孩子非常适合VIPKID第二级别的课程。第二级别的教学目标是通过自然拼读的学习打好阅读基础，逐步培养学生阅读英文短句和该级别难度绘本的能力。此级别口语学习从非常基础的话题开始，逐步过渡到用完整的句子表达。同时这个级别要求学生能够对单重指令做出积极反应。如果孩子不会阅读，但能够自信的表达，也属于第二级别。",
//      "endDatetime": 1440426004000
//  },
//  "name": "英语自测",
//    "button": "查看结果"
//  }

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: "英语水平自测"
    };
  },
  props: ['contents', 'closeDialog'],
  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {
    cancelBtn: function cancelBtn() {
      this.closeDialog();
    },
    dateForm: function dateForm(time) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_untils__["b" /* default */].formatDate(time);
    }
  }
});

/***/ }),

/***/ "aNdD":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("4lKH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("RNnM")
/* template */
var __vue_template__ = __webpack_require__("DVFi")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c2b74e24"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/progress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] progress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2b74e24", Component.options)
  } else {
    hotAPI.reload("data-v-c2b74e24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "aUZn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "aXUW":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "it-test-content"
  }, [_c('img', {
    staticClass: "it-test",
    attrs: {
      "src": __webpack_require__("brgl")
    }
  }), _c('p', {
    staticClass: "it-test-text"
  }, [_vm._v(_vm._s(_vm.config.cardText))]), _c('vk-btn', {
    staticClass: "it-test-btn",
    attrs: {
      "type": 'lg-enable',
      "text": _vm.config.buttonText,
      "clickFun": _vm.clickItTest
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22778c10", module.exports)
  }
}

/***/ }),

/***/ "b43k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return localStorageUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMonthDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStrLength; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_form_urlencoded__ = __webpack_require__("YVjH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_form_urlencoded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_form_urlencoded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookies_js__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





//数组排序，按照对象里的某个属性的值排序
function compare(property) {
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value1 - value2;
  };
}

//设置cookie
function setCookie(k, v) {
  var COOKIE_LIFETIME = 365 * 24 * 60 * 60 * 1000;
  var HOST_NAME = location.hostname;
  var COOKIE_DOMAIN = HOST_NAME.slice(HOST_NAME.indexOf('.'));
  __WEBPACK_IMPORTED_MODULE_2_cookies_js___default.a.set(k, v, { domain: COOKIE_DOMAIN, expires: new Date(Date.now() + COOKIE_LIFETIME), path: '/' });
}

//删除cookie
function clearCookie(objName) {
  var str = objName + "=''";
  var date = new Date();
  date.setTime(date.getTime() - 10000);
  str += "; expires=" + date.toGMTString();
  document.cookie = str;
}

// 获取cookie
function getCookies() {
  var str = document.cookie;
  var cookies = {};
  var orginCookies = str.split('; ');
  for (var index = 0; index < orginCookies.length; index++) {
    var cookieInfo = orginCookies[index].split('=');
    cookies[cookieInfo[0]] = cookieInfo[1];
  }
  return cookies;
}

//判断是否是iPad
function isOnIpad() {
  if (navigator.userAgent.toLowerCase().match(/ipad/i)) return true;else return false;
}

//将时间格式化为：m.d 月.日
function timeFormat(time) {
  var t = new Date(time);
  var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var month = months[t.getMonth()];
  var date = t.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  return month + "." + date;
}

//将时间格式化为：年-月-日 时:分
function timeFormatAll(time) {
  var t = new Date(time);
  var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var month = months[t.getMonth()];
  var date = t.getDate();
  var hour = t.getHours();
  var min = t.getMinutes();
  if (date < 10) {
    date = "0" + date;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return t.getFullYear() + "-" + month + "-" + date + " " + hour + ":" + min;
}

//将时间格式化为：周 时:分
function weekTime(timestamp) {
  timestamp = fixTimezoneOffset(timestamp);
  var time = new Date(timestamp);
  var hour = time.getHours();
  var min = time.getMinutes();
  var week = '';
  switch (time.getDay()) {
    case 0:
      week = '周天';
      break;
    case 1:
      week = '周一';
      break;
    case 2:
      week = '周二';
      break;
    case 3:
      week = '周三';
      break;
    case 4:
      week = '周四';
      break;
    case 5:
      week = '周五';
      break;
    case 6:
      week = '周六';
      break;
  }
  function addZero(num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function fixTimezoneOffset(timestampCn) {
    var date = new Date();
    //当地时间与GMT时间的时间差值(毫秒)
    var offset = date.getTimezoneOffset() * 60 * 1000;
    //得到格林威治时间戳
    var GMTTimestamp = timestampCn + offset;
    //统一时间
    timestampCn = GMTTimestamp + 8 * 3600 * 1000;
    return timestampCn;
  }

  return week + ' ' + addZero(hour) + ':' + addZero(min);
}

//获取当前周 开始时间-结束时间
function currentWeek() {
  var now = new Date(); //当前日期
  var nowDayOfWeek = now.getDay(); //今天本周的第几天
  var nowDay = now.getDate(); //当前日
  var nowMonth = now.getMonth(); //当前月
  var nowYear = now.getYear(); //当前年
  //获得本周的开始日期
  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));

  function weekF(date) {
    var mymonth = date.getMonth() + 2;
    var myweekday = date.getDate() + 1;
    if (mymonth < 10) {
      mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
      myweekday = "0" + myweekday;
    }
    return mymonth + "." + myweekday;
  }

  return weekF(weekStartDate) + "-" + weekF(weekEndDate);
}

//格式化时间为：年-月-日
function dateTime(timestamp) {
  //跨时区统一
  timestamp = fixTimezoneOffset(timestamp);
  var time = new Date(timestamp);
  var year = time.getFullYear();
  var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var month = months[time.getMonth()];
  var date = time.getDate();

  function addZero(num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function fixTimezoneOffset(timestampCn) {
    var date = new Date();
    //当地时间与GMT时间的时间差值(毫秒)
    var offset = date.getTimezoneOffset() * 60 * 1000;
    //得到格林威治时间戳
    var GMTTimestamp = timestampCn + offset;
    //统一时间
    timestampCn = GMTTimestamp + 8 * 3600 * 1000;
    return timestampCn;
  }

  return year + '-' + month + '-' + addZero(date);
}

//把时间格式化为：年-月-日 周 时:分 或者 年-月-日 时:分
function formatDate(timestamp, isWeek) {
  //跨时区统一
  timestamp = fixTimezoneOffset(timestamp);
  var time = new Date(timestamp);
  var year = time.getFullYear();
  var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  var month = months[time.getMonth()];
  var date = time.getDate();
  var hour = time.getHours();
  var min = time.getMinutes();
  var week = '';
  switch (time.getDay()) {
    case 0:
      week = '周天';
      break;
    case 1:
      week = '周一';
      break;
    case 2:
      week = '周二';
      break;
    case 3:
      week = '周三';
      break;
    case 4:
      week = '周四';
      break;
    case 5:
      week = '周五';
      break;
    case 6:
      week = '周六';
      break;
  }
  function addZero(num) {
    if (num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }

  function fixTimezoneOffset(timestampCn) {
    var date = new Date();
    //当地时间与GMT时间的时间差值(毫秒)
    var offset = date.getTimezoneOffset() * 60 * 1000;
    //得到格林威治时间戳
    var GMTTimestamp = timestampCn + offset;
    //统一时间
    timestampCn = GMTTimestamp + 8 * 3600 * 1000;
    return timestampCn;
  }

  if (isWeek) {
    return year + '-' + month + '-' + addZero(date) + ' ' + week + ' ' + addZero(hour) + ':' + addZero(min);
  } else {
    return year + '-' + month + '-' + addZero(date) + ' ' + addZero(hour) + ':' + addZero(min);
  }
}

/*
 * 后端打点方法
 * digital library 点击事件(打点记录)
 * @clickEventSources:
 * 1-pc 2-ipad 3-PC_BOOK_ENTRANCE 4-IPAD_BOOK_ENTRANCE  5-PC_FINISHED_BOOK_ENTRANCE  6-IPAD_FINISHED_BOOK_ENTRANCE 7-PC_RC_READER_ENTRANCE
 * @clickEventType: 1-封面 2-借书按钮 3-开始阅读 4-翻页 5-最后一页 6-声音开关 7-语速 8-activity
 * @clickEventSubType(非必填): 4-1自动翻页 4-2手动翻页; 6-1静音 6-2打开声音 7-具体倍数
 * @rate(非必填): 点击增加量
 */
function clickEvent(studentId, bookId, clickEventSources, clickEventType, clickEventSubType, rate) {
  var param = {
    studentId: studentId,
    bookId: bookId,
    clickEventSources: clickEventSources,
    clickEventType: clickEventType
  };
  if (clickEventSubType) {
    param.clickEventSubType = clickEventSubType;
  }
  if (rate) {
    param.rate = rate;
  }
  __WEBPACK_IMPORTED_MODULE_0_axios__["default"].post('/rest/learninggw/api/pc/service/digitlib/clickEvent', __WEBPACK_IMPORTED_MODULE_1_form_urlencoded___default.a(param)).then(function (res) {}).catch(function (err) {});
}

var clickEventConst = {
  PC: 1,
  IPAD: 2,
  PC_HOMEPAGE_ENTRANCE: 11,
  PC_FINISHED_BOOK_ENTRANCE: 13,
  PC_MC_READER_ENTRANCE: 15,
  CLICK_BOOKCOVER: 1,
  CLICK_BORROW_BUTTON: 2,
  START_READING: 3,
  TURN_PAGE: 4,
  TURN_PAGE__AUTO: 1,
  TURN_PAGE__MANUAL: 2,
  LAST_PAGE: 5,
  SOUND_SWITCH: 6,
  SOUND_SWITCH__MUTE: 1,
  SOUND_SWITCH__UNMUTE: 2,
  VOICE_SPEED: 7,
  ACTIVITY: 8

  /* 宝石商城 点击事件(打点记录)
   * 打点接口文档见Wiki
   */
};function giftShopClickEvent(clickEventType, clickEventSubType, goodsId) {
  var param = {
    studentId: __WEBPACK_IMPORTED_MODULE_2_cookies_js___default.a.get('studentId'),
    goodsId: goodsId, //商品Id
    clickEventSysType: 1, //学习中心积分商城为1
    clickEventSources: __WEBPACK_IMPORTED_MODULE_2_cookies_js___default.a.get('isFromApp') ? 2 : 1, //ipad app为2, web为1,
    clickEventType: clickEventType,
    clickEventSubType: clickEventSubType
  };
  __WEBPACK_IMPORTED_MODULE_0_axios__["default"].post('/rest/learninggw/api/pc/eshop/click/clickEvent', __WEBPACK_IMPORTED_MODULE_1_form_urlencoded___default.a(param)).then(function (res) {}).catch(function (err) {});
}

//判断object 是否为空
function isEmptyObject(e) {
  var t;
  for (t in e) {
    return true;
  }
  return false;
}

//数组查找
function arrayFind(arr, fn) {
  var item = void 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i])) {
      item = arr[i];
      break;
    }
  }
  return item;
}

//dom事件取消
var off = function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

//事件绑定
var on = function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

//事件绑定一次
function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
}

/**
 * @description 往某一个元素节点添加样式类
 * @param {Object} element  元素节点
 * @param {String} className 添加的类名称，如 "name luo ..." or "name"
 */
function addClass(element, className) {
  if (typeof className === "string" && className.length > 0) {
    var classNameArray = className.split(" ");
    for (var i = 0; i < classNameArray.length; i++) {
      element.classList.add(classNameArray[i]);
    }
  }
  return this;
}

/**
 * @description 往某一个元素节点删除样式类
 * @param {Object} element 元素节点
 * @param {String} className 删除的样式类名称，"name luo ..." or "name"
 */
function removeClass(element, className) {
  if (typeof className === "string" && className.length > 0) {
    var classNameArray = className.split(" ");
    for (var i = 0; i < classNameArray.length; i++) {
      element.classList.remove(classNameArray[i]);
    }
  }
  return this;
}

//防止xss攻击，对于用户输入做JavaScript标签的验证
function xssCheck(str, reg) {
  if (!str) {
    return false;
  }
  str = decodeURIComponent(str);
  return str ? str.search(reg || /[<">']|(javascript)+/g) == -1 ? false : true : true;
}

//数组和对象的深拷贝
function deepCopy(ob) {
  if ((typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) != 'object') {
    return ob;
  }
  if (ob instanceof Array) {
    var newArray = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = ob[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var obj = _step.value;

        newArray.push(deepCopy(obj));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return newArray;
  }
  var newObj = {};
  //遍历属性
  for (var key in ob) {
    if (_typeof(ob[key]) == 'object') {
      newObj[key] = deepCopy(ob[key]);
      if (ob[key] instanceof Array) {
        var newArray = [];
        //数组里如果有对象
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = ob[key][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var o = _step2.value;

            newArray.push(deepCopy(o));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        newObj[key] = newArray;
      }
      if (ob[key] instanceof Date) {
        newObj[key] = ob[key];
      }
    } else {
      newObj[key] = ob[key];
    }
  }
  return newObj;
}

// localStorage的使用工具方法
var localStorageUtil = {
  set: function set(key, value) {
    if (window.localStorage) {
      localStorage.setItem('vk_lc_' + key, value);
    } else {
      //'window.localStorage 不存在'
    }
  },
  get: function get(key) {
    var v = localStorage.getItem('vk_lc_' + key);
    if (v == "true") {
      return true;
    }
    if (v == "" || v == "false" || v == null) {
      return false;
    }
    return v;
  },
  del: function del(key) {
    if (typeof key === 'string') {
      try {
        return localStorage.removeItem('vk_lc_' + key);
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }

  //获取某个月份的总天数，不传参数的话，默认是当前月取值1-12
};function getMonthDays(month) {
  var curDate = new Date();
  /* 获取当前月份 */
  var curMonth = curDate.getMonth();
  if (month) {
    curMonth = month;
  }
  // 生成实际的月份
  curDate.setMonth(curMonth);
  /* 0为上个月的最后一天 */
  curDate.setDate(0);
  /* 返回当月的天数 */
  return curDate.getDate();
}

/**
 * @description 计算字符串字符长度方法 1个汉字 = 2个英文字符
 * @param {String}  字符串
 */

function getStrLength(str) {
  var len = str.length;
  var pattern = /[\u4e00-\u9fa5]+/g;
  var contents = str;
  var arr = null;
  var strArr = '';
  if (contents.match(pattern)) {
    arr = contents.match(pattern);
    if (arr.length === 1) {
      strArr = arr[0];
    } else {
      strArr = arr.join('');
    }
  }
  return len + strArr.length;
}

/**
 * 跳转到首页，区分ipad原生首页和h5首页
 */

function gotoFirstPage() {
  if (__WEBPACK_IMPORTED_MODULE_2_cookies_js___default.a.get('isFromApp') === '1') {
    var iFrame = document.createElement("iframe");
    iFrame.setAttribute("src", 'vkappbridge://history/back');
    iFrame.setAttribute("style", "display:none;");
    document.body.appendChild(iFrame);
    //把它从dom上移除掉
    iFrame.parentNode.removeChild(iFrame);
    iFrame = null;
  } else {
    Vm.$router.push('/');
  }
}



/* harmony default export */ __webpack_exports__["b"] = ({
  gotoFirstPage: gotoFirstPage,
  setCookie: setCookie,
  clearCookie: clearCookie,
  getCookies: getCookies,
  formatDate: formatDate,
  isOnIpad: isOnIpad,
  clickEvent: clickEvent,
  clickEventConst: clickEventConst,
  weekTime: weekTime,
  dateTime: dateTime,
  isEmptyObject: isEmptyObject,
  arrayFind: arrayFind,
  currentWeek: currentWeek,
  timeFormat: timeFormat,
  giftShopClickEvent: giftShopClickEvent,
  compare: compare,
  once: once,
  addClass: addClass,
  removeClass: removeClass,
  timeFormatAll: timeFormatAll,
  xssCheck: xssCheck,
  on: on,
  off: off
});

/***/ }),

/***/ "bNOW":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Jw+U")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("2TBd")
/* template */
var __vue_template__ = __webpack_require__("9/10")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a77ff31"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/newcard/back_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] back_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a77ff31", Component.options)
  } else {
    hotAPI.reload("data-v-7a77ff31", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "blqv":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Y3y/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("2Y8e")
/* template */
var __vue_template__ = __webpack_require__("/fhF")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b8bef37a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_button.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_button.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b8bef37a", Component.options)
  } else {
    hotAPI.reload("data-v-b8bef37a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "brgl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/card_icon_it_test-1c35b4a71bb1c509a38db9cd5085912e.png";

/***/ }),

/***/ "cPt7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/test_dino-170fa9772d87753fcd413602e19cdb18.png";

/***/ }),

/***/ "cVPk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/girl_1-c1c2226b359bc2a2658b8e9e22fc89f8.png";

/***/ }),

/***/ "cbuu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_simple_video_vue__ = __webpack_require__("e/6R");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_simple_video_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__video_simple_video_vue__);
/**
 * Created by lihongbin on 2017/8/7.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    var videoTpl = Vue.extend(__WEBPACK_IMPORTED_MODULE_0__video_simple_video_vue___default.a);
    var vm = null;
    var el = null;
    Vue.prototype.$videoModelShow = function (config) {
      if (vm == null) {
        vm = new videoTpl({
          propsData: {
            videoConfig: config
          }
        });
        el = vm.$mount().$el;
        for (var i = 0; i < document.body.children.length; i++) {
          document.body.children[i].style.transform = "scale(0,0)";
        }
        document.body.appendChild(el);
      }
    };
    Vue.prototype.$videoModelClose = function () {
      for (var i = 0; i < document.body.children.length; i++) {
        document.body.children[i].style.transform = "scale(1,1)";
      }
      el.className = el.className + " fadeOutRight";
      setTimeout(function () {
        document.body.removeChild(el);
        vm = null;
        el = null;
      }, 300);
    };
  }
});

/***/ }),

/***/ "cdH/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/honor_item_icon-8a8976b28396883f0ea5656b49d37f74.png";

/***/ }),

/***/ "cmu3":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("LNj2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("hF8I")
/* template */
var __vue_template__ = __webpack_require__("Ddd8")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fcb3bf4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/newcard/flash_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] flash_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fcb3bf4", Component.options)
  } else {
    hotAPI.reload("data-v-3fcb3bf4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "ctt2":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("yMIl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("KUN4")
/* template */
var __vue_template__ = __webpack_require__("O58e")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7cbdcec8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/newcard/classroom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] classroom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cbdcec8", Component.options)
  } else {
    hotAPI.reload("data-v-7cbdcec8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "d35m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: {
    //当前有两种类型
    type: {
      type: String,
      required: false,
      default: "body"
    }
  },
  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "dMOQ":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeInRight simple-content"
  }, [_c('div', {
    staticClass: "simple-back",
    on: {
      "click": _vm.closeVideoFun
    }
  }), _c('div', {
    staticClass: "simple-title"
  }, [_c('h1', [_vm._v(_vm._s(_vm.videoConfig.title))])]), _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "simple-video"
  }, [_c('over-video', {
    attrs: {
      "autoPlay": _vm.videoConfig.autoPlay,
      "videoSrc": _vm.videoConfig.videoSrc,
      "materialId": _vm.videoConfig.materialId,
      "source": _vm.videoConfig.source
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7161dc6d", module.exports)
  }
}

/***/ }),

/***/ "dTAD":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enterActiveClass": "animated fadeIn",
      "leaveActiveClass": "animated fadeOut"
    }
  }, [(_vm.type == 'body') ? _c('div', {
    staticClass: "l-loading"
  }, [_c('div', {
    staticClass: "ll-top"
  }), _c('div', {
    staticClass: "ll-img"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("SSlM")
    }
  })])]) : _vm._e(), (_vm.type == 'div') ? _c('div', {
    staticClass: "l-l-div"
  }, [_c('div', {
    staticClass: "ll-div-top"
  }), _c('div', {
    staticClass: "ll-div-img"
  }, [_c('img', {
    attrs: {
      "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAiCAYAAADYmxC7AAAACXBIWXMAAAsSAAALEgHS3X78AAAEtElEQVRYw8WYbYge1RmGr/uZeV+bZDcm2TTSSMmXIuSfQtOCBAolRSollLakaUpUVPxCUyRaSTGESrWtSiy226SJllKs9k9rJZTqH3+I+IEiIq1foJtGTLquW3U3b/adj3P3x7yrNqaSNXl3b3iG4ZwzMxf388w5Z0a2OVnde/1bq2S+JjhH9vmCPCAHkN1Sc/4C5nXhA1f8ZsUrfAbpZKB2b3v7oiz5YuEvyOSCXHYuaB0H1QLA5MK54N9hhi/bs+LPpw3qzh8eviDsLYJlefL0g/IGzC2ZPHogH0IZCedAntltQGGOCG7bunflY6cEdceNRy4RXBh2lie3ws6iBxMfQbVOABXT8GG3ZRRNX8j87gf7Vu2cMdRt20fnyb5KcF7YCjvLTC47Wslt4VLm+cD/lBkNUO9GIVgu+8uCr8ssEo7MtHp90Uv5M9/ft3rjjKB23TR6XWbOk51ldiaIBszvhf3XLPHcDfee3fm0m953zcHBsDfI7Ax7sSCTicCZTBb4qU3713zzpKBuvfmdTQHreqkKsLLkVmY/m9kPbb9neWcmBfv7q0YWhr0rzGbhPEzIDoCAvd+9b80tnwq145axtTJbo3GHnjt5mD/++O6znuYU9MCVb24S/lVmZzIhUA9u83fuP+fA8eNj+iRJ37BIdahKUkpSMnrgVIEAtuxb9SeZG8Jk00BNWXDXicYHwE07xr+S0EAtVUmqkqiT9OzOu5Y9w2nS5v2rH8R+cLo01EwdKx++9PWtJ4RKYl0d1LVUJVQnNG54hNMswY/CnhTOokmlBJ+YIrIPym3LQOtARmBBwKN3/GzpW6cbau3GJd1XHx4fDdgoglAmFIve+Pvi/Uf+hldcTAmQW6wFSkyAJEwlvUz/9Igjn/zXwqWLjrVaAsiqzksLjn1u09TV8eKGPYyFYchQWZRJlEb/uPv2JVP9Ihqaf2755pmfT9NAAHUeQ+/OL/eOVKx+4lrmh6WzjKpelBYjfXSJicTCIs+Hjm9vZV7zdqQvTSTOzA1Vs1A0x2S910+owrT/X9/7UzFVzKMdCapelAlKC/cTqi0K1T54fPtkqcMDwURbdEOSPx6WUj+hBoMPlk9M/TKK+iP3uomx/7R//cWckcFgPO+5UwAGbFT3E2r9MEenrl78h2NHefLQ+6ycTAwOBBMXtBhZmfPa+mGK3KIwKtxAJcQA8E4/wTbsYeyJa+mcnXOoMO226A4G4+uHKZp5Ch1OYhBIPafmMwtaP0wHOOGuIyzeNSosFUkqLYYu/8lkzhwqEjpkkdwUVUqSa2nRnEL9dtfgBNAxVEkqkyiBFVt+2snmDAqglt6oIrp1qFtLZRWqqoilcwp1/86B0SQ6SapqqVtLXYsF3/55d8GcQfXcOlhLRZlFp1djBpZsvLOYN9tQ//Ph8L3bjy1L0mCSqjpUGZJFqhSTVajz6I2ZZ9UpgId2zBu16CRR07yJVS0ViBZwxobdKWbdqWl96xfF0lqShWuprJs5rDZgUSXJj2+TZ8Wpaf3l5vZYEkdrNcuP9eEmuzLyrKbv4zqwvdUxHE1S0Sw/zZbGAs9F+j6xgO5OWRIyShZ9TV3zK8meUXz1nqSZXjPT+C/dNdfWrlmL6QAAAABJRU5ErkJggg=="
    }
  })])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e1caf7b", module.exports)
  }
}

/***/ }),

/***/ "e/6R":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("RWMv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("5uAP")
/* template */
var __vue_template__ = __webpack_require__("dMOQ")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7161dc6d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/video/simple_video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] simple_video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7161dc6d", Component.options)
  } else {
    hotAPI.reload("data-v-7161dc6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "e/iw":
/***/ (function(module, exports) {

/*!
 * @license SoundJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

/**!
 * SoundJS FlashAudioPlugin also includes swfobject (http://code.google.com/p/swfobject/)
 */
window.createjs = window.createjs || {}, function () {
  var a = createjs.SoundJS = createjs.SoundJS || {};
  a.version = "0.6.2", a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT";
}(), this.createjs = this.createjs || {}, createjs.extend = function (a, b) {
  "use strict";

  function c() {
    this.constructor = a;
  }

  return c.prototype = b.prototype, a.prototype = new c();
}, this.createjs = this.createjs || {}, createjs.promote = function (a, b) {
  "use strict";

  var c = a.prototype,
      d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;
  if (d) {
    c[(b += "_") + "constructor"] = d.constructor;
    for (var e in d) {
      c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e]);
    }
  }
  return a;
}, this.createjs = this.createjs || {}, createjs.indexOf = function (a, b) {
  "use strict";

  for (var c = 0, d = a.length; d > c; c++) {
    if (b === a[c]) return c;
  }return -1;
}, this.createjs = this.createjs || {}, function () {
  "use strict";

  createjs.proxy = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 2);
    return function () {
      return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
    };
  };
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function BrowserDetect() {
    throw "BrowserDetect cannot be instantiated";
  }

  var a = BrowserDetect.agent = window.navigator.userAgent;
  BrowserDetect.isWindowPhone = a.indexOf("IEMobile") > -1 || a.indexOf("Windows Phone") > -1, BrowserDetect.isFirefox = a.indexOf("Firefox") > -1, BrowserDetect.isOpera = null != window.opera, BrowserDetect.isChrome = a.indexOf("Chrome") > -1, BrowserDetect.isIOS = (a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1) && !BrowserDetect.isWindowPhone, BrowserDetect.isAndroid = a.indexOf("Android") > -1 && !BrowserDetect.isWindowPhone, BrowserDetect.isBlackberry = a.indexOf("Blackberry") > -1, createjs.BrowserDetect = BrowserDetect;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function EventDispatcher() {
    this._listeners = null, this._captureListeners = null;
  }

  var a = EventDispatcher.prototype;
  EventDispatcher.initialize = function (b) {
    b.addEventListener = a.addEventListener, b.on = a.on, b.removeEventListener = b.off = a.removeEventListener, b.removeAllEventListeners = a.removeAllEventListeners, b.hasEventListener = a.hasEventListener, b.dispatchEvent = a.dispatchEvent, b._dispatchEvent = a._dispatchEvent, b.willTrigger = a.willTrigger;
  }, a.addEventListener = function (a, b, c) {
    var d;
    d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
    var e = d[a];
    return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b;
  }, a.on = function (a, b, c, d, e, f) {
    return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
      b.call(c, a, e), d && a.remove();
    }, f);
  }, a.removeEventListener = function (a, b, c) {
    var d = c ? this._captureListeners : this._listeners;
    if (d) {
      var e = d[a];
      if (e) for (var f = 0, g = e.length; g > f; f++) {
        if (e[f] == b) {
          1 == g ? delete d[a] : e.splice(f, 1);
          break;
        }
      }
    }
  }, a.off = a.removeEventListener, a.removeAllEventListeners = function (a) {
    a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
  }, a.dispatchEvent = function (a, b, c) {
    if ("string" == typeof a) {
      var d = this._listeners;
      if (!(b || d && d[a])) return !0;
      a = new createjs.Event(a, b, c);
    } else a.target && a.clone && (a = a.clone());
    try {
      a.target = this;
    } catch (e) {}
    if (a.bubbles && this.parent) {
      for (var f = this, g = [f]; f.parent;) {
        g.push(f = f.parent);
      }var h,
          i = g.length;
      for (h = i - 1; h >= 0 && !a.propagationStopped; h--) {
        g[h]._dispatchEvent(a, 1 + (0 == h));
      }for (h = 1; i > h && !a.propagationStopped; h++) {
        g[h]._dispatchEvent(a, 3);
      }
    } else this._dispatchEvent(a, 2);
    return !a.defaultPrevented;
  }, a.hasEventListener = function (a) {
    var b = this._listeners,
        c = this._captureListeners;
    return !!(b && b[a] || c && c[a]);
  }, a.willTrigger = function (a) {
    for (var b = this; b;) {
      if (b.hasEventListener(a)) return !0;
      b = b.parent;
    }
    return !1;
  }, a.toString = function () {
    return "[EventDispatcher]";
  }, a._dispatchEvent = function (a, b) {
    var c,
        d = 1 == b ? this._captureListeners : this._listeners;
    if (a && d) {
      var e = d[a.type];
      if (!e || !(c = e.length)) return;
      try {
        a.currentTarget = this;
      } catch (f) {}
      try {
        a.eventPhase = b;
      } catch (f) {}
      a.removed = !1, e = e.slice();
      for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
        var h = e[g];
        h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1);
      }
    }
  }, createjs.EventDispatcher = EventDispatcher;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function Event(a, b, c) {
    this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = new Date().getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
  }

  var a = Event.prototype;
  a.preventDefault = function () {
    this.defaultPrevented = this.cancelable && !0;
  }, a.stopPropagation = function () {
    this.propagationStopped = !0;
  }, a.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }, a.remove = function () {
    this.removed = !0;
  }, a.clone = function () {
    return new Event(this.type, this.bubbles, this.cancelable);
  }, a.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, a.toString = function () {
    return "[Event (type=" + this.type + ")]";
  }, createjs.Event = Event;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function ErrorEvent(a, b, c) {
    this.Event_constructor("error"), this.title = a, this.message = b, this.data = c;
  }

  var a = createjs.extend(ErrorEvent, createjs.Event);
  a.clone = function () {
    return new createjs.ErrorEvent(this.title, this.message, this.data);
  }, createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function ProgressEvent(a, b) {
    this.Event_constructor("progress"), this.loaded = a, this.total = null == b ? 1 : b, this.progress = 0 == b ? 0 : this.loaded / this.total;
  }

  var a = createjs.extend(ProgressEvent, createjs.Event);
  a.clone = function () {
    return new createjs.ProgressEvent(this.loaded, this.total);
  }, createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");
}(window), this.createjs = this.createjs || {}, function () {
  "use strict";

  function LoadItem() {
    this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = b.LOAD_TIMEOUT_DEFAULT;
  }

  var a = LoadItem.prototype = {},
      b = LoadItem;
  b.LOAD_TIMEOUT_DEFAULT = 8e3, b.create = function (a) {
    if ("string" == typeof a) {
      var c = new LoadItem();
      return c.src = a, c;
    }
    if (a instanceof b) return a;
    if (a instanceof Object && a.src) return null == a.loadTimeout && (a.loadTimeout = b.LOAD_TIMEOUT_DEFAULT), a;
    throw new Error("Type not recognized.");
  }, a.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, createjs.LoadItem = b;
}(), function () {
  var a = {};
  a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function (b) {
    var c = { absolute: !1, relative: !1 };
    if (null == b) return c;
    var d = b.indexOf("?");
    d > -1 && (b = b.substr(0, d));
    var e;
    return a.ABSOLUTE_PATT.test(b) ? c.absolute = !0 : a.RELATIVE_PATT.test(b) && (c.relative = !0), (e = b.match(a.EXTENSION_PATT)) && (c.extension = e[1].toLowerCase()), c;
  }, a.formatQueryString = function (a, b) {
    if (null == a) throw new Error("You must specify data.");
    var c = [];
    for (var d in a) {
      c.push(d + "=" + escape(a[d]));
    }return b && (c = c.concat(b)), c.join("&");
  }, a.buildPath = function (a, b) {
    if (null == b) return a;
    var c = [],
        d = a.indexOf("?");
    if (-1 != d) {
      var e = a.slice(d + 1);
      c = c.concat(e.split("&"));
    }
    return -1 != d ? a.slice(0, d) + "?" + this.formatQueryString(b, c) : a + "?" + this.formatQueryString(b, c);
  }, a.isCrossDomain = function (a) {
    var b = document.createElement("a");
    b.href = a.src;
    var c = document.createElement("a");
    c.href = location.href;
    var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
    return d;
  }, a.isLocal = function (a) {
    var b = document.createElement("a");
    return b.href = a.src, "" == b.hostname && "file:" == b.protocol;
  }, a.isBinary = function (a) {
    switch (a) {
      case createjs.AbstractLoader.IMAGE:
      case createjs.AbstractLoader.BINARY:
        return !0;
      default:
        return !1;
    }
  }, a.isImageTag = function (a) {
    return a instanceof HTMLImageElement;
  }, a.isAudioTag = function (a) {
    return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1;
  }, a.isVideoTag = function (a) {
    return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1;
  }, a.isText = function (a) {
    switch (a) {
      case createjs.AbstractLoader.TEXT:
      case createjs.AbstractLoader.JSON:
      case createjs.AbstractLoader.MANIFEST:
      case createjs.AbstractLoader.XML:
      case createjs.AbstractLoader.CSS:
      case createjs.AbstractLoader.SVG:
      case createjs.AbstractLoader.JAVASCRIPT:
      case createjs.AbstractLoader.SPRITESHEET:
        return !0;
      default:
        return !1;
    }
  }, a.getTypeByExtension = function (a) {
    if (null == a) return createjs.AbstractLoader.TEXT;
    switch (a.toLowerCase()) {
      case "jpeg":
      case "jpg":
      case "gif":
      case "png":
      case "webp":
      case "bmp":
        return createjs.AbstractLoader.IMAGE;
      case "ogg":
      case "mp3":
      case "webm":
        return createjs.AbstractLoader.SOUND;
      case "mp4":
      case "webm":
      case "ts":
        return createjs.AbstractLoader.VIDEO;
      case "json":
        return createjs.AbstractLoader.JSON;
      case "xml":
        return createjs.AbstractLoader.XML;
      case "css":
        return createjs.AbstractLoader.CSS;
      case "js":
        return createjs.AbstractLoader.JAVASCRIPT;
      case "svg":
        return createjs.AbstractLoader.SVG;
      default:
        return createjs.AbstractLoader.TEXT;
    }
  }, createjs.RequestUtils = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function AbstractLoader(a, b, c) {
    this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, this._item = a ? createjs.LoadItem.create(a) : null, this._preferXHR = b, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null;
  }

  var a = createjs.extend(AbstractLoader, createjs.EventDispatcher),
      b = AbstractLoader;
  b.POST = "POST", b.GET = "GET", b.BINARY = "binary", b.CSS = "css", b.IMAGE = "image", b.JAVASCRIPT = "javascript", b.JSON = "json", b.JSONP = "jsonp", b.MANIFEST = "manifest", b.SOUND = "sound", b.VIDEO = "video", b.SPRITESHEET = "spritesheet", b.SVG = "svg", b.TEXT = "text", b.XML = "xml", a.getItem = function () {
    return this._item;
  }, a.getResult = function (a) {
    return a ? this._rawResult : this._result;
  }, a.getTag = function () {
    return this._tag;
  }, a.setTag = function (a) {
    this._tag = a;
  }, a.load = function () {
    this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
    var a = new createjs.Event("initialize");
    a.loader = this._request, this.dispatchEvent(a), this._request.load();
  }, a.cancel = function () {
    this.canceled = !0, this.destroy();
  }, a.destroy = function () {
    this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners();
  }, a.getLoadedItems = function () {
    return this._loadedItems;
  }, a._createRequest = function () {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._createTag = function () {
    return null;
  }, a._sendLoadStart = function () {
    this._isCanceled() || this.dispatchEvent("loadstart");
  }, a._sendProgress = function (a) {
    if (!this._isCanceled()) {
      var b = null;
      "number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(b);
    }
  }, a._sendComplete = function () {
    if (!this._isCanceled()) {
      this.loaded = !0;
      var a = new createjs.Event("complete");
      a.rawResult = this._rawResult, null != this._result && (a.result = this._result), this.dispatchEvent(a);
    }
  }, a._sendError = function (a) {
    !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a));
  }, a._isCanceled = function () {
    return null == window.createjs || this.canceled ? !0 : !1;
  }, a.resultFormatter = null, a.handleEvent = function (a) {
    switch (a.type) {
      case "complete":
        this._rawResult = a.target._response;
        var b = this.resultFormatter && this.resultFormatter(this);
        b instanceof Function ? b.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = b || this._rawResult, this._sendComplete());
        break;
      case "progress":
        this._sendProgress(a);
        break;
      case "error":
        this._sendError(a);
        break;
      case "loadstart":
        this._sendLoadStart();
        break;
      case "abort":
      case "timeout":
        this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + a.type.toUpperCase() + "_ERROR"));
    }
  }, a._resultFormatSuccess = function (a) {
    this._result = a, this._sendComplete();
  }, a._resultFormatFailed = function (a) {
    this._sendError(a);
  }, a.buildPath = function (a, b) {
    return createjs.RequestUtils.buildPath(a, b);
  }, a.toString = function () {
    return "[PreloadJS AbstractLoader]";
  }, createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function AbstractMediaLoader(a, b, c) {
    this.AbstractLoader_constructor(a, b, c), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this);
  }

  var a = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);
  a.load = function () {
    this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load();
  }, a._createTag = function () {}, a._createRequest = function () {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._updateXHR = function (a) {
    a.loader.setResponseType && a.loader.setResponseType("blob");
  }, a._formatResult = function (a) {
    if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
      var b = window.URL || window.webkitURL,
          c = a.getResult(!0);
      a.getTag().src = b.createObjectURL(c);
    }
    return a.getTag();
  }, createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  var AbstractRequest = function AbstractRequest(a) {
    this._item = a;
  },
      a = createjs.extend(AbstractRequest, createjs.EventDispatcher);
  a.load = function () {}, a.destroy = function () {}, a.cancel = function () {}, createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function TagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null;
  }

  var a = createjs.extend(TagRequest, createjs.AbstractRequest);
  a.load = function () {
    this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
    var a = new createjs.Event("initialize");
    a.loader = this._tag, this.dispatchEvent(a), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0);
  }, a.destroy = function () {
    this._clean(), this._tag = null, this.AbstractRequest_destroy();
  }, a._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);
    var a = this._tag;
    ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleError = function () {
    this._clean(), this.dispatchEvent("error");
  }, a._handleTagComplete = function () {
    this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete");
  }, a._handleTimeout = function () {
    this._clean(), this.dispatchEvent(new createjs.Event("timeout"));
  }, a._clean = function () {
    this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout);
  }, a._hideTag = function () {
    this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden";
  }, a._showTag = function () {
    this._tag.style.visibility = this._startTagVisibility;
  }, a._handleStalled = function () {}, createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function MediaTagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }

  var a = createjs.extend(MediaTagRequest, createjs.TagRequest);
  a.load = function () {
    var a = createjs.proxy(this._handleStalled, this);
    this._stalledCallback = a;
    var b = createjs.proxy(this._handleProgress, this);
    this._handleProgress = b, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", b), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load();
  }, a._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);
    var a = this._tag;
    ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleStalled = function () {}, a._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);
      this.dispatchEvent(b);
    }
  }, a._clean = function () {
    this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean();
  }, createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function XHRRequest(a) {
    this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(a);
  }

  var a = createjs.extend(XHRRequest, createjs.AbstractRequest);
  XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], a.getResult = function (a) {
    return a && this._rawResponse ? this._rawResponse : this._response;
  }, a.cancel = function () {
    this.canceled = !0, this._clean(), this._request.abort();
  }, a.load = function () {
    if (null == this._request) return void this._handleError();
    null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
    try {
      this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send();
    } catch (a) {
      this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a));
    }
  }, a.setResponseType = function (a) {
    "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a;
  }, a.getAllResponseHeaders = function () {
    return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
  }, a.getResponseHeader = function (a) {
    return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null;
  }, a._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);
      this.dispatchEvent(b);
    }
  }, a._handleLoadStart = function () {
    clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
  }, a._handleAbort = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a));
  }, a._handleError = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message));
  }, a._handleReadyStateChange = function () {
    4 == this._request.readyState && this._handleLoad();
  }, a._handleLoad = function () {
    if (!this.loaded) {
      this.loaded = !0;
      var a = this._checkError();
      if (a) return void this._handleError(a);
      if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
        this._response = new Blob([this._response]);
      } catch (b) {
        if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === b.name && window.BlobBuilder) {
          var c = new BlobBuilder();
          c.append(this._response), this._response = c.getBlob();
        }
      }
      this._clean(), this.dispatchEvent(new createjs.Event("complete"));
    }
  }, a._handleTimeout = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a));
  }, a._checkError = function () {
    var a = parseInt(this._request.status);
    switch (a) {
      case 404:
      case 0:
        return new Error(a);
    }
    return null;
  }, a._getResponse = function () {
    if (null != this._response) return this._response;
    if (null != this._request.response) return this._request.response;
    try {
      if (null != this._request.responseText) return this._request.responseText;
    } catch (a) {}
    try {
      if (null != this._request.responseXML) return this._request.responseXML;
    } catch (a) {}
    return null;
  }, a._createXHR = function (a) {
    var b = createjs.RequestUtils.isCrossDomain(a),
        c = {},
        d = null;
    if (window.XMLHttpRequest) d = new XMLHttpRequest(), b && void 0 === d.withCredentials && window.XDomainRequest && (d = new XDomainRequest());else {
      for (var e = 0, f = s.ACTIVEX_VERSIONS.length; f > e; e++) {
        var g = s.ACTIVEX_VERSIONS[e];
        try {
          d = new ActiveXObject(g);
          break;
        } catch (h) {}
      }
      if (null == d) return !1;
    }
    null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType), this._xhrLevel = "string" == typeof d.responseType ? 2 : 1;
    var i = null;
    if (i = a.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(a.src, a.values) : a.src, d.open(a.method || createjs.AbstractLoader.GET, i, !0), b && d instanceof XMLHttpRequest && 1 == this._xhrLevel && (c.Origin = location.origin), a.values && a.method == createjs.AbstractLoader.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers) for (var j in a.headers) {
      c[j] = a.headers[j];
    }for (j in c) {
      d.setRequestHeader(j, c[j]);
    }return d instanceof XMLHttpRequest && void 0 !== a.withCredentials && (d.withCredentials = a.withCredentials), this._request = d, !0;
  }, a._clean = function () {
    clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null);
  }, a.toString = function () {
    return "[PreloadJS XHRRequest]";
  }, createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function SoundLoader(a, b) {
    this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(a) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.src) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.tag) && (this._tag = createjs.RequestUtils.isAudioTag(a) ? a : a.src), null != this._tag && (this._preferXHR = !1);
  }

  var a = createjs.extend(SoundLoader, createjs.AbstractMediaLoader),
      b = SoundLoader;
  b.canLoadItem = function (a) {
    return a.type == createjs.AbstractLoader.SOUND;
  }, a._createTag = function (a) {
    var b = document.createElement("audio");
    return b.autoplay = !1, b.preload = "none", b.src = a, b;
  }, createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  var PlayPropsConfig = function PlayPropsConfig() {
    this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null;
  },
      a = PlayPropsConfig.prototype = {},
      b = PlayPropsConfig;
  b.create = function (a) {
    if (a instanceof b || a instanceof Object) {
      var c = new createjs.PlayPropsConfig();
      return c.set(a), c;
    }
    throw new Error("Type not recognized.");
  }, a.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, a.toString = function () {
    return "[PlayPropsConfig]";
  }, createjs.PlayPropsConfig = b;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function Sound() {
    throw "Sound cannot be instantiated";
  }

  function a(a, b) {
    this.init(a, b);
  }

  var b = Sound;
  b.INTERRUPT_ANY = "any", b.INTERRUPT_EARLY = "early", b.INTERRUPT_LATE = "late", b.INTERRUPT_NONE = "none", b.PLAY_INITED = "playInited", b.PLAY_SUCCEEDED = "playSucceeded", b.PLAY_INTERRUPTED = "playInterrupted", b.PLAY_FINISHED = "playFinished", b.PLAY_FAILED = "playFailed", b.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], b.EXTENSION_MAP = { m4a: "mp4" }, b.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, b.defaultInterruptBehavior = b.INTERRUPT_NONE, b.alternateExtensions = [], b.activePlugin = null, b._masterVolume = 1, Object.defineProperty(b, "volume", {
    get: function get() {
      return this._masterVolume;
    }, set: function set(a) {
      if (null == Number(a)) return !1;
      if (a = Math.max(0, Math.min(1, a)), b._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a)) for (var c = this._instances, d = 0, e = c.length; e > d; d++) {
        c[d].setMasterVolume(a);
      }
    }
  }), b._masterMute = !1, Object.defineProperty(b, "muted", {
    get: function get() {
      return this._masterMute;
    }, set: function set(a) {
      if (null == a) return !1;
      if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a)) for (var b = this._instances, c = 0, d = b.length; d > c; c++) {
        b[c].setMasterMute(a);
      }return !0;
    }
  }), Object.defineProperty(b, "capabilities", {
    get: function get() {
      return null == b.activePlugin ? null : b.activePlugin._capabilities;
    }, set: function set() {
      return !1;
    }
  }), b._pluginsRegistered = !1, b._lastID = 0, b._instances = [], b._idHash = {}, b._preloadHash = {}, b._defaultPlayPropsHash = {}, b.addEventListener = null, b.removeEventListener = null, b.removeAllEventListeners = null, b.dispatchEvent = null, b.hasEventListener = null, b._listeners = null, createjs.EventDispatcher.initialize(b), b.getPreloadHandlers = function () {
    return { callback: createjs.proxy(b.initLoad, b), types: ["sound"], extensions: b.SUPPORTED_EXTENSIONS };
  }, b._handleLoadComplete = function (a) {
    var c = a.target.getItem().src;
    if (b._preloadHash[c]) for (var d = 0, e = b._preloadHash[c].length; e > d; d++) {
      var f = b._preloadHash[c][d];
      if (b._preloadHash[c][d] = !0, b.hasEventListener("fileload")) {
        var a = new createjs.Event("fileload");
        a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, b.dispatchEvent(a);
      }
    }
  }, b._handleLoadError = function (a) {
    var c = a.target.getItem().src;
    if (b._preloadHash[c]) for (var d = 0, e = b._preloadHash[c].length; e > d; d++) {
      var f = b._preloadHash[c][d];
      if (b._preloadHash[c][d] = !1, b.hasEventListener("fileerror")) {
        var a = new createjs.Event("fileerror");
        a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, b.dispatchEvent(a);
      }
    }
  }, b._registerPlugin = function (a) {
    return a.isSupported() ? (b.activePlugin = new a(), !0) : !1;
  }, b.registerPlugins = function (a) {
    b._pluginsRegistered = !0;
    for (var c = 0, d = a.length; d > c; c++) {
      if (b._registerPlugin(a[c])) return !0;
    }return !1;
  }, b.initializeDefaultPlugins = function () {
    return null != b.activePlugin ? !0 : b._pluginsRegistered ? !1 : b.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1;
  }, b.isReady = function () {
    return null != b.activePlugin;
  }, b.getCapabilities = function () {
    return null == b.activePlugin ? null : b.activePlugin._capabilities;
  }, b.getCapability = function (a) {
    return null == b.activePlugin ? null : b.activePlugin._capabilities[a];
  }, b.initLoad = function (a) {
    return b._registerSound(a);
  }, b._registerSound = function (c) {
    if (!b.initializeDefaultPlugins()) return !1;
    var d;
    if (c.src instanceof Object ? (d = b._parseSrc(c.src), d.src = c.path + d.src) : d = b._parsePath(c.src), null == d) return !1;
    c.src = d.src, c.type = "sound";
    var e = c.data,
        f = null;
    if (null != e && (isNaN(e.channels) ? isNaN(e) || (f = parseInt(e)) : f = parseInt(e.channels), e.audioSprite)) for (var g, h = e.audioSprite.length; h--;) {
      g = e.audioSprite[h], b._idHash[g.id] = {
        src: c.src,
        startTime: parseInt(g.startTime),
        duration: parseInt(g.duration)
      }, g.defaultPlayProps && (b._defaultPlayPropsHash[g.id] = createjs.PlayPropsConfig.create(g.defaultPlayProps));
    }null != c.id && (b._idHash[c.id] = { src: c.src });
    var i = b.activePlugin.register(c);
    return a.create(c.src, f), null != e && isNaN(e) ? c.data.channels = f || a.maxPerChannel() : c.data = f || a.maxPerChannel(), i.type && (c.type = i.type), c.defaultPlayProps && (b._defaultPlayPropsHash[c.src] = createjs.PlayPropsConfig.create(c.defaultPlayProps)), i;
  }, b.registerSound = function (a, c, d, e, f) {
    var g = { src: a, id: c, data: d, defaultPlayProps: f };
    a instanceof Object && a.src && (e = c, g = a), g = createjs.LoadItem.create(g), g.path = e, null == e || g.src instanceof Object || (g.src = e + a);
    var h = b._registerSound(g);
    if (!h) return !1;
    if (b._preloadHash[g.src] || (b._preloadHash[g.src] = []), b._preloadHash[g.src].push(g), 1 == b._preloadHash[g.src].length) h.on("complete", createjs.proxy(this._handleLoadComplete, this)), h.on("error", createjs.proxy(this._handleLoadError, this)), b.activePlugin.preload(h);else if (1 == b._preloadHash[g.src][0]) return !0;
    return g;
  }, b.registerSounds = function (a, b) {
    var c = [];
    a.path && (b ? b += a.path : b = a.path, a = a.manifest);
    for (var d = 0, e = a.length; e > d; d++) {
      c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, b, a[d].defaultPlayProps);
    }return c;
  }, b.removeSound = function (c, d) {
    if (null == b.activePlugin) return !1;
    c instanceof Object && c.src && (c = c.src);
    var e;
    if (c instanceof Object ? e = b._parseSrc(c) : (c = b._getSrcById(c).src, e = b._parsePath(c)), null == e) return !1;
    c = e.src, null != d && (c = d + c);
    for (var f in b._idHash) {
      b._idHash[f].src == c && delete b._idHash[f];
    }return a.removeSrc(c), delete b._preloadHash[c], b.activePlugin.removeSound(c), !0;
  }, b.removeSounds = function (a, b) {
    var c = [];
    a.path && (b ? b += a.path : b = a.path, a = a.manifest);
    for (var d = 0, e = a.length; e > d; d++) {
      c[d] = createjs.Sound.removeSound(a[d].src, b);
    }return c;
  }, b.removeAllSounds = function () {
    b._idHash = {}, b._preloadHash = {}, a.removeAll(), b.activePlugin && b.activePlugin.removeAllSounds();
  }, b.loadComplete = function (a) {
    if (!b.isReady()) return !1;
    var c = b._parsePath(a);
    return a = c ? b._getSrcById(c.src).src : b._getSrcById(a).src, void 0 == b._preloadHash[a] ? !1 : 1 == b._preloadHash[a][0];
  }, b._parsePath = function (a) {
    "string" != typeof a && (a = a.toString());
    var c = a.match(b.FILE_PATTERN);
    if (null == c) return !1;
    for (var d = c[4], e = c[5], f = b.capabilities, g = 0; !f[e];) {
      if (e = b.alternateExtensions[g++], g > b.alternateExtensions.length) return null;
    }a = a.replace("." + c[5], "." + e);
    var h = { name: d, src: a, extension: e };
    return h;
  }, b._parseSrc = function (a) {
    var c = { name: void 0, src: void 0, extension: void 0 },
        d = b.capabilities;
    for (var e in a) {
      if (a.hasOwnProperty(e) && d[e]) {
        c.src = a[e], c.extension = e;
        break;
      }
    }if (!c.src) return !1;
    var f = c.src.lastIndexOf("/");
    return c.name = -1 != f ? c.src.slice(f + 1) : c.src, c;
  }, b.play = function (a, c, d, e, f, g, h, i, j) {
    var k;
    k = createjs.PlayPropsConfig.create(c instanceof Object || c instanceof createjs.PlayPropsConfig ? c : {
      interrupt: c,
      delay: d,
      offset: e,
      loop: f,
      volume: g,
      pan: h,
      startTime: i,
      duration: j
    });
    var l = b.createInstance(a, k.startTime, k.duration),
        m = b._playInstance(l, k);
    return m || l._playFailed(), l;
  }, b.createInstance = function (c, d, e) {
    if (!b.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(c, d, e);
    var f = b._defaultPlayPropsHash[c];
    c = b._getSrcById(c);
    var g = b._parsePath(c.src),
        h = null;
    return null != g && null != g.src ? (a.create(g.src), null == d && (d = c.startTime), h = b.activePlugin.create(g.src, d, e || c.duration), f = f || b._defaultPlayPropsHash[g.src], f && h.applyPlayProps(f)) : h = new createjs.DefaultSoundInstance(c, d, e), h.uniqueId = b._lastID++, h;
  }, b.stop = function () {
    for (var a = this._instances, b = a.length; b--;) {
      a[b].stop();
    }
  }, b.setVolume = function (a) {
    if (null == Number(a)) return !1;
    if (a = Math.max(0, Math.min(1, a)), b._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a)) for (var c = this._instances, d = 0, e = c.length; e > d; d++) {
      c[d].setMasterVolume(a);
    }
  }, b.getVolume = function () {
    return this._masterVolume;
  }, b.setMute = function (a) {
    if (null == a) return !1;
    if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a)) for (var b = this._instances, c = 0, d = b.length; d > c; c++) {
      b[c].setMasterMute(a);
    }return !0;
  }, b.getMute = function () {
    return this._masterMute;
  }, b.setDefaultPlayProps = function (a, c) {
    a = b._getSrcById(a), b._defaultPlayPropsHash[b._parsePath(a.src).src] = createjs.PlayPropsConfig.create(c);
  }, b.getDefaultPlayProps = function (a) {
    return a = b._getSrcById(a), b._defaultPlayPropsHash[b._parsePath(a.src).src];
  }, b._playInstance = function (a, c) {
    var d = b._defaultPlayPropsHash[a.src] || {};
    if (null == c.interrupt && (c.interrupt = d.interrupt || b.defaultInterruptBehavior), null == c.delay && (c.delay = d.delay || 0), null == c.offset && (c.offset = a.getPosition()), null == c.loop && (c.loop = a.loop), null == c.volume && (c.volume = a.volume), null == c.pan && (c.pan = a.pan), 0 == c.delay) {
      var e = b._beginPlaying(a, c);
      if (!e) return !1;
    } else {
      var f = setTimeout(function () {
        b._beginPlaying(a, c);
      }, c.delay);
      a.delayTimeoutId = f;
    }
    return this._instances.push(a), !0;
  }, b._beginPlaying = function (b, c) {
    if (!a.add(b, c.interrupt)) return !1;
    var d = b._beginPlaying(c);
    if (!d) {
      var e = createjs.indexOf(this._instances, b);
      return e > -1 && this._instances.splice(e, 1), !1;
    }
    return !0;
  }, b._getSrcById = function (a) {
    return b._idHash[a] || { src: a };
  }, b._playFinished = function (b) {
    a.remove(b);
    var c = createjs.indexOf(this._instances, b);
    c > -1 && this._instances.splice(c, 1);
  }, createjs.Sound = Sound, a.channels = {}, a.create = function (b, c) {
    var d = a.get(b);
    return null == d ? (a.channels[b] = new a(b, c), !0) : !1;
  }, a.removeSrc = function (b) {
    var c = a.get(b);
    return null == c ? !1 : (c._removeAll(), delete a.channels[b], !0);
  }, a.removeAll = function () {
    for (var b in a.channels) {
      a.channels[b]._removeAll();
    }a.channels = {};
  }, a.add = function (b, c) {
    var d = a.get(b.src);
    return null == d ? !1 : d._add(b, c);
  }, a.remove = function (b) {
    var c = a.get(b.src);
    return null == c ? !1 : (c._remove(b), !0);
  }, a.maxPerChannel = function () {
    return c.maxDefault;
  }, a.get = function (b) {
    return a.channels[b];
  };
  var c = a.prototype;
  c.constructor = a, c.src = null, c.max = null, c.maxDefault = 100, c.length = 0, c.init = function (a, b) {
    this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = [];
  }, c._get = function (a) {
    return this._instances[a];
  }, c._add = function (a, b) {
    return this._getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1;
  }, c._remove = function (a) {
    var b = createjs.indexOf(this._instances, a);
    return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0);
  }, c._removeAll = function () {
    for (var a = this.length - 1; a >= 0; a--) {
      this._instances[a].stop();
    }
  }, c._getSlot = function (a) {
    var b, c;
    if (a != Sound.INTERRUPT_NONE && (c = this._get(0), null == c)) return !0;
    for (var d = 0, e = this.max; e > d; d++) {
      if (b = this._get(d), null == b) return !0;
      if (b.playState == Sound.PLAY_FINISHED || b.playState == Sound.PLAY_INTERRUPTED || b.playState == Sound.PLAY_FAILED) {
        c = b;
        break;
      }
      a != Sound.INTERRUPT_NONE && (a == Sound.INTERRUPT_EARLY && b.getPosition() < c.getPosition() || a == Sound.INTERRUPT_LATE && b.getPosition() > c.getPosition()) && (c = b);
    }
    return null != c ? (c._interrupt(), this._remove(c), !0) : !1;
  }, c.toString = function () {
    return "[Sound SoundChannel]";
  };
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  var AbstractSoundInstance = function AbstractSoundInstance(a, b, c, d) {
    this.EventDispatcher_constructor(), this.src = a, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
      get: this.getVolume,
      set: this.setVolume
    }), this._pan = 0, Object.defineProperty(this, "pan", {
      get: this.getPan,
      set: this.setPan
    }), this._startTime = Math.max(0, b || 0), Object.defineProperty(this, "startTime", {
      get: this.getStartTime,
      set: this.setStartTime
    }), this._duration = Math.max(0, c || 0), Object.defineProperty(this, "duration", {
      get: this.getDuration,
      set: this.setDuration
    }), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
      get: this.getPlaybackResource,
      set: this.setPlaybackResource
    }), d !== !1 && d !== !0 && this.setPlaybackResource(d), this._position = 0, Object.defineProperty(this, "position", {
      get: this.getPosition,
      set: this.setPosition
    }), this._loop = 0, Object.defineProperty(this, "loop", {
      get: this.getLoop,
      set: this.setLoop
    }), this._muted = !1, Object.defineProperty(this, "muted", {
      get: this.getMuted,
      set: this.setMuted
    }), this._paused = !1, Object.defineProperty(this, "paused", { get: this.getPaused, set: this.setPaused });
  },
      a = createjs.extend(AbstractSoundInstance, createjs.EventDispatcher);
  a.play = function (a, b, c, d, e, f) {
    var g;
    return g = createjs.PlayPropsConfig.create(a instanceof Object || a instanceof createjs.PlayPropsConfig ? a : {
      interrupt: a,
      delay: b,
      offset: c,
      loop: d,
      volume: e,
      pan: f
    }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(g), void (this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, g), this);
  }, a.stop = function () {
    return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this;
  }, a.destroy = function () {
    this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners();
  }, a.applyPlayProps = function (a) {
    return null != a.offset && this.setPosition(a.offset), null != a.loop && this.setLoop(a.loop), null != a.volume && this.setVolume(a.volume), null != a.pan && this.setPan(a.pan), null != a.startTime && (this.setStartTime(a.startTime), this.setDuration(a.duration)), this;
  }, a.toString = function () {
    return "[AbstractSoundInstance]";
  }, a.getPaused = function () {
    return this._paused;
  }, a.setPaused = function (a) {
    return a !== !0 && a !== !1 || this._paused == a || 1 == a && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = a, a ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this);
  }, a.setVolume = function (a) {
    return a == this._volume ? this : (this._volume = Math.max(0, Math.min(1, a)), this._muted || this._updateVolume(), this);
  }, a.getVolume = function () {
    return this._volume;
  }, a.setMuted = function (a) {
    return a === !0 || a === !1 ? (this._muted = a, this._updateVolume(), this) : void 0;
  }, a.getMuted = function () {
    return this._muted;
  }, a.setPan = function (a) {
    return a == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, a)), this._updatePan(), this);
  }, a.getPan = function () {
    return this._pan;
  }, a.getPosition = function () {
    return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position;
  }, a.setPosition = function (a) {
    return this._position = Math.max(0, a), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this;
  }, a.getStartTime = function () {
    return this._startTime;
  }, a.setStartTime = function (a) {
    return a == this._startTime ? this : (this._startTime = Math.max(0, a || 0), this._updateStartTime(), this);
  }, a.getDuration = function () {
    return this._duration;
  }, a.setDuration = function (a) {
    return a == this._duration ? this : (this._duration = Math.max(0, a || 0), this._updateDuration(), this);
  }, a.setPlaybackResource = function (a) {
    return this._playbackResource = a, 0 == this._duration && this._setDurationFromSource(), this;
  }, a.getPlaybackResource = function () {
    return this._playbackResource;
  }, a.getLoop = function () {
    return this._loop;
  }, a.setLoop = function (a) {
    null != this._playbackResource && (0 != this._loop && 0 == a ? this._removeLooping(a) : 0 == this._loop && 0 != a && this._addLooping(a)), this._loop = a;
  }, a._sendEvent = function (a) {
    var b = new createjs.Event(a);
    this.dispatchEvent(b);
  }, a._cleanUp = function () {
    clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this);
  }, a._interrupt = function () {
    this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted");
  }, a._beginPlaying = function (a) {
    return this.setPosition(a.offset), this.setLoop(a.loop), this.setVolume(a.volume), this.setPan(a.pan), null != a.startTime && (this.setStartTime(a.startTime), this.setDuration(a.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1);
  }, a._playFailed = function () {
    this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed");
  }, a._handleSoundComplete = function () {
    return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"));
  }, a._handleSoundReady = function () {}, a._updateVolume = function () {}, a._updatePan = function () {}, a._updateStartTime = function () {}, a._updateDuration = function () {}, a._setDurationFromSource = function () {}, a._calculateCurrentPosition = function () {}, a._updatePosition = function () {}, a._removeLooping = function () {}, a._addLooping = function () {}, a._pause = function () {}, a._resume = function () {}, a._handleStop = function () {}, a._handleCleanUp = function () {}, a._handleLoop = function () {}, createjs.AbstractSoundInstance = createjs.promote(AbstractSoundInstance, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  var AbstractPlugin = function AbstractPlugin() {
    this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass;
  },
      a = AbstractPlugin.prototype;
  AbstractPlugin._capabilities = null, AbstractPlugin.isSupported = function () {
    return !0;
  }, a.register = function (a) {
    var b = this._loaders[a.src];
    return b && !b.canceled ? this._loaders[a.src] : (this._audioSources[a.src] = !0, this._soundInstances[a.src] = [], b = new this._loaderClass(a), b.on("complete", this._handlePreloadComplete, this), this._loaders[a.src] = b, b);
  }, a.preload = function (a) {
    a.on("error", this._handlePreloadError, this), a.load();
  }, a.isPreloadStarted = function (a) {
    return null != this._audioSources[a];
  }, a.isPreloadComplete = function (a) {
    return !(null == this._audioSources[a] || 1 == this._audioSources[a]);
  }, a.removeSound = function (a) {
    if (this._soundInstances[a]) {
      for (var b = this._soundInstances[a].length; b--;) {
        var c = this._soundInstances[a][b];
        c.destroy();
      }
      delete this._soundInstances[a], delete this._audioSources[a], this._loaders[a] && this._loaders[a].destroy(), delete this._loaders[a];
    }
  }, a.removeAllSounds = function () {
    for (var a in this._audioSources) {
      this.removeSound(a);
    }
  }, a.create = function (a, b, c) {
    this.isPreloadStarted(a) || this.preload(this.register(a));
    var d = new this._soundInstanceClass(a, b, c, this._audioSources[a]);
    return this._soundInstances[a].push(d), d;
  }, a.setVolume = function (a) {
    return this._volume = a, this._updateVolume(), !0;
  }, a.getVolume = function () {
    return this._volume;
  }, a.setMute = function () {
    return this._updateVolume(), !0;
  }, a.toString = function () {
    return "[AbstractPlugin]";
  }, a._handlePreloadComplete = function (a) {
    var b = a.target.getItem().src;
    this._audioSources[b] = a.result;
    for (var c = 0, d = this._soundInstances[b].length; d > c; c++) {
      var e = this._soundInstances[b][c];
      e.setPlaybackResource(this._audioSources[b]);
    }
  }, a._handlePreloadError = function () {}, a._updateVolume = function () {}, createjs.AbstractPlugin = AbstractPlugin;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function a(a) {
    this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.SOUND);
  }

  var b = createjs.extend(a, createjs.AbstractLoader);
  a.context = null, b.toString = function () {
    return "[WebAudioLoader]";
  }, b._createRequest = function () {
    this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer");
  }, b._sendComplete = function () {
    a.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this));
  }, b._handleAudioDecoded = function (a) {
    this._result = a, this.AbstractLoader__sendComplete();
  }, createjs.WebAudioLoader = createjs.promote(a, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function WebAudioSoundInstance(a, c, d, e) {
    this.AbstractSoundInstance_constructor(a, c, d, e), this.gainNode = b.context.createGain(), this.panNode = b.context.createPanner(), this.panNode.panningModel = b._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
  }

  var a = createjs.extend(WebAudioSoundInstance, createjs.AbstractSoundInstance),
      b = WebAudioSoundInstance;
  b.context = null, b._scratchBuffer = null, b.destinationNode = null, b._panningModel = "equalpower", a.destroy = function () {
    this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null;
  }, a.toString = function () {
    return "[WebAudioSoundInstance]";
  }, a._updatePan = function () {
    this.panNode.setPosition(this._pan, 0, -.5);
  }, a._removeLooping = function () {
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
  }, a._addLooping = function () {
    this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0));
  }, a._setDurationFromSource = function () {
    this._duration = 1e3 * this.playbackResource.duration;
  }, a._handleCleanUp = function () {
    this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0;
  }, a._cleanUpAudioNode = function (a) {
    if (a) {
      a.stop(0), a.disconnect(0);
      try {
        a.buffer = b._scratchBuffer;
      } catch (c) {}
      a = null;
    }
    return a;
  }, a._handleSoundReady = function () {
    this.gainNode.connect(b.destinationNode);
    var a = .001 * this._duration,
        c = .001 * this._position;
    c > a && (c = a), this.sourceNode = this._createAndPlayAudioNode(b.context.currentTime - a, c), this._playbackStartTime = this.sourceNode.startTime - c, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (a - c)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0));
  }, a._createAndPlayAudioNode = function (a, c) {
    var d = b.context.createBufferSource();
    d.buffer = this.playbackResource, d.connect(this.panNode);
    var e = .001 * this._duration;
    return d.startTime = a + e, d.start(d.startTime, c + .001 * this._startTime, e - c), d;
  }, a._pause = function () {
    this._position = 1e3 * (b.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout);
  }, a._resume = function () {
    this._handleSoundReady();
  }, a._updateVolume = function () {
    var a = this._muted ? 0 : this._volume;
    a != this.gainNode.gain.value && (this.gainNode.gain.value = a);
  }, a._calculateCurrentPosition = function () {
    return 1e3 * (b.context.currentTime - this._playbackStartTime);
  }, a._updatePosition = function () {
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady();
  }, a._handleLoop = function () {
    this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration);
  }, a._updateDuration = function () {
    this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume());
  }, createjs.WebAudioSoundInstance = createjs.promote(WebAudioSoundInstance, "AbstractSoundInstance");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function WebAudioPlugin() {
    this.AbstractPlugin_constructor(), this._panningModel = b._panningModel, this.context = b.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = b._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses();
  }

  var a = createjs.extend(WebAudioPlugin, createjs.AbstractPlugin),
      b = WebAudioPlugin;
  b._capabilities = null, b._panningModel = "equalpower", b.context = null, b._scratchBuffer = null, b._unlocked = !1, b.isSupported = function () {
    var a = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
    return "file:" != location.protocol || a || this._isFileXHRSupported() ? (b._generateCapabilities(), null == b.context ? !1 : !0) : !1;
  }, b.playEmptySound = function () {
    if (null != b.context) {
      var a = b.context.createBufferSource();
      a.buffer = b._scratchBuffer, a.connect(b.context.destination), a.start(0, 0, 0);
    }
  }, b._isFileXHRSupported = function () {
    var a = !0,
        b = new XMLHttpRequest();
    try {
      b.open("GET", "WebAudioPluginTest.fail", !1);
    } catch (c) {
      return a = !1;
    }
    b.onerror = function () {
      a = !1;
    }, b.onload = function () {
      a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response;
    };
    try {
      b.send();
    } catch (c) {
      a = !1;
    }
    return a;
  }, b._generateCapabilities = function () {
    if (null == b._capabilities) {
      var a = document.createElement("audio");
      if (null == a.canPlayType) return null;
      if (null == b.context) if (window.AudioContext) b.context = new AudioContext();else {
        if (!window.webkitAudioContext) return null;
        b.context = new webkitAudioContext();
      }
      null == b._scratchBuffer && (b._scratchBuffer = b.context.createBuffer(1, 1, 22050)), b._compatibilitySetUp(), "ontouchstart" in window && "running" != b.context.state && (b._unlock(), document.addEventListener("mousedown", b._unlock, !0), document.addEventListener("touchend", b._unlock, !0)), b._capabilities = {
        panning: !0,
        volume: !0,
        tracks: -1
      };
      for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
        var g = c[e],
            h = d[g] || g;
        b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h);
      }
      b.context.destination.numberOfChannels < 2 && (b._capabilities.panning = !1);
    }
  }, b._compatibilitySetUp = function () {
    if (b._panningModel = "equalpower", !b.context.createGain) {
      b.context.createGain = b.context.createGainNode;
      var a = b.context.createBufferSource();
      a.__proto__.start = a.__proto__.noteGrainOn, a.__proto__.stop = a.__proto__.noteOff, b._panningModel = 0;
    }
  }, b._unlock = function () {
    b._unlocked || (b.playEmptySound(), "running" == b.context.state && (document.removeEventListener("mousedown", b._unlock, !0), document.removeEventListener("touchend", b._unlock, !0), b._unlocked = !0));
  }, a.toString = function () {
    return "[WebAudioPlugin]";
  }, a._addPropsToClasses = function () {
    var a = this._soundInstanceClass;
    a.context = this.context, a._scratchBuffer = b._scratchBuffer, a.destinationNode = this.gainNode, a._panningModel = this._panningModel, this._loaderClass.context = this.context;
  }, a._updateVolume = function () {
    var a = createjs.Sound._masterMute ? 0 : this._volume;
    a != this.gainNode.gain.value && (this.gainNode.gain.value = a);
  }, createjs.WebAudioPlugin = createjs.promote(WebAudioPlugin, "AbstractPlugin");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function HTMLAudioTagPool() {
    throw "HTMLAudioTagPool cannot be instantiated";
  }

  function a() {
    this._tags = [];
  }

  var b = HTMLAudioTagPool;
  b._tags = {}, b._tagPool = new a(), b._tagUsed = {}, b.get = function (a) {
    var c = b._tags[a];
    return null == c ? (c = b._tags[a] = b._tagPool.get(), c.src = a) : b._tagUsed[a] ? (c = b._tagPool.get(), c.src = a) : b._tagUsed[a] = !0, c;
  }, b.set = function (a, c) {
    c == b._tags[a] ? b._tagUsed[a] = !1 : b._tagPool.set(c);
  }, b.remove = function (a) {
    var c = b._tags[a];
    return null == c ? !1 : (b._tagPool.set(c), delete b._tags[a], delete b._tagUsed[a], !0);
  }, b.getDuration = function (a) {
    var c = b._tags[a];
    return null != c && c.duration ? 1e3 * c.duration : 0;
  }, createjs.HTMLAudioTagPool = HTMLAudioTagPool;
  var c = a.prototype;
  c.constructor = a, c.get = function () {
    var a;
    return a = 0 == this._tags.length ? this._createTag() : this._tags.pop(), null == a.parentNode && document.body.appendChild(a), a;
  }, c.set = function (a) {
    var b = createjs.indexOf(this._tags, a);
    -1 == b && (this._tags.src = null, this._tags.push(a));
  }, c.toString = function () {
    return "[TagPool]";
  }, c._createTag = function () {
    var a = document.createElement("audio");
    return a.autoplay = !1, a.preload = "none", a;
  };
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function HTMLAudioSoundInstance(a, b, c, d) {
    this.AbstractSoundInstance_constructor(a, b, c, d), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), c ? this._audioSpriteStopTime = .001 * (b + c) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
  }

  var a = createjs.extend(HTMLAudioSoundInstance, createjs.AbstractSoundInstance);
  a.setMasterVolume = function () {
    this._updateVolume();
  }, a.setMasterMute = function () {
    this._updateVolume();
  }, a.toString = function () {
    return "[HTMLAudioSoundInstance]";
  }, a._removeLooping = function () {
    null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
  }, a._addLooping = function () {
    null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0);
  }, a._handleCleanUp = function () {
    var a = this._playbackResource;
    if (null != a) {
      a.pause(), a.loop = !1, a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
      try {
        a.currentTime = this._startTime;
      } catch (b) {}
      createjs.HTMLAudioTagPool.set(this.src, a), this._playbackResource = null;
    }
  }, a._beginPlaying = function (a) {
    return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(a);
  }, a._handleSoundReady = function () {
    if (4 !== this._playbackResource.readyState) {
      var a = this._playbackResource;
      return a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.preload = "auto", void a.load();
    }
    this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play();
  }, a._handleTagReady = function () {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady();
  }, a._pause = function () {
    this._playbackResource.pause();
  }, a._resume = function () {
    this._playbackResource.play();
  }, a._updateVolume = function () {
    if (null != this._playbackResource) {
      var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
      a != this._playbackResource.volume && (this._playbackResource.volume = a);
    }
  }, a._calculateCurrentPosition = function () {
    return 1e3 * this._playbackResource.currentTime - this._startTime;
  }, a._updatePosition = function () {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
    try {
      this._playbackResource.currentTime = .001 * (this._position + this._startTime);
    } catch (a) {
      this._handleSetPositionSeek(null);
    }
  }, a._handleSetPositionSeek = function () {
    null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
  }, a._handleAudioSpriteLoop = function () {
    this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")));
  }, a._handleLoop = function () {
    0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
  }, a._updateStartTime = function () {
    this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1));
  }, a._updateDuration = function () {
    this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1));
  }, a._setDurationFromSource = function () {
    this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null;
  }, createjs.HTMLAudioSoundInstance = createjs.promote(HTMLAudioSoundInstance, "AbstractSoundInstance");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";

  function HTMLAudioPlugin() {
    this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = b._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance;
  }

  var a = createjs.extend(HTMLAudioPlugin, createjs.AbstractPlugin),
      b = HTMLAudioPlugin;
  b.MAX_INSTANCES = 30, b._AUDIO_READY = "canplaythrough", b._AUDIO_ENDED = "ended", b._AUDIO_SEEKED = "seeked", b._AUDIO_STALLED = "stalled", b._TIME_UPDATE = "timeupdate", b._capabilities = null, b.isSupported = function () {
    return b._generateCapabilities(), null != b._capabilities;
  }, b._generateCapabilities = function () {
    if (null == b._capabilities) {
      var a = document.createElement("audio");
      if (null == a.canPlayType) return null;
      b._capabilities = { panning: !1, volume: !0, tracks: -1 };
      for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
        var g = c[e],
            h = d[g] || g;
        b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h);
      }
    }
  }, a.register = function (a) {
    var b = createjs.HTMLAudioTagPool.get(a.src),
        c = this.AbstractPlugin_register(a);
    return c.setTag(b), c;
  }, a.removeSound = function (a) {
    this.AbstractPlugin_removeSound(a), createjs.HTMLAudioTagPool.remove(a);
  }, a.create = function (a, b, c) {
    var d = this.AbstractPlugin_create(a, b, c);
    return d.setPlaybackResource(null), d;
  }, a.toString = function () {
    return "[HTMLAudioPlugin]";
  }, a.setVolume = a.getVolume = a.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(HTMLAudioPlugin, "AbstractPlugin");
}();

/***/ }),

/***/ "eLnv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/index_guide_1-d81c54289a0052c925c2c7602cc793e6.png";

/***/ }),

/***/ "ehF8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dragon_js__ = __webpack_require__("mYWi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookies_js__);
//处理课前课后资源跳转




/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    Vue.prototype.$getWorkUrl = function (obj, context, type, clickId) {
      __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('/rest/learninggw/api/pc/material/extra/getStudentExtraRoute', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_2_cookies_js___default.a.get("studentId"),
          onlineClassId: obj.onlineClassId,
          lessonId: obj.lessonId,
          courseId: obj.courseId,
          curriculumVersion: obj.curriculumVersion ? obj.curriculumVersion : 1,
          source: __WEBPACK_IMPORTED_MODULE_0__utils_dragon_js__["a" /* default */].isOnDragonClient() ? 2 : 1, //1PC 2PCAPP
          type: type == 'PRE' ? 1 : 2
        }
      }).then(function (res) {
        var data = res.data.data;
        if (data.isLc) {
          context.$router.push({ path: data.url });
        } else {
          window.location.href = data.url + "&back_url=" + encodeURIComponent(document.location.href); //@back_url 用于作业端返回
        }
      });
      sa.track('learning_click', {
        'click_id': clickId + '_' + type.toLowerCase(),
        'online_class_id': obj.onlineClassId,
        'lesson_id': obj.lessonId,
        'class_id': obj.courseId //由于神策新增字段申请流程繁琐，先用class_id代表courseId
      });
    };
  }
});

/***/ }),

/***/ "elPM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/amp-a162cbf3aef18362aac44bb9f637d94f.png";

/***/ }),

/***/ "emb2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "epWa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/index_guide_1-40ca89c23de0764a5e094d4693fe0b90.jpg";

/***/ }),

/***/ "eqf4":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "toast-con"
  }, [_c('div', {
    staticClass: "black-mask"
  }), _c('div', {
    staticClass: "toast animated bounceIn",
    class: {
      happy: _vm.isHappy
    }
  }, [_c('div', {
    staticClass: "placeholder"
  }), _c('div', {
    staticClass: "content",
    domProps: {
      "innerHTML": _vm._s(_vm.message)
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cf5f96b4", module.exports)
  }
}

/***/ }),

/***/ "ezrP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/index_guide_2-aee5007af27f9a542f4b0a0337252e45.png";

/***/ }),

/***/ "f+11":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "l-unlock-card"
  }, [_c('div', {
    staticClass: "luc-top"
  }), _c('div', {
    staticClass: "luc-con"
  }, [_vm._m(0), _c('div', {
    staticClass: "new-card-over"
  }), _c('div', {
    staticClass: "new-card"
  }, [_vm._m(1), _c('div', {
    staticClass: "new-card-out"
  }, [_c('Card', {
    staticClass: "new-card-in animated zoomIn",
    attrs: {
      "config": _vm.unlockCard
    }
  })], 1)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "new-card-bg"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("UrxW")
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "new-card-text"
  }, [_vm._v("恭喜你～"), _c('br'), _vm._v("解锁了新的学习周期")])
}]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-720934fa", module.exports)
  }
}

/***/ }),

/***/ "f5Nw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: {
    errorReload: {
      type: Function,
      required: false,
      default: function _default() {
        window.location.reload();
      }
    }
  },
  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "fMu9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/boy_1-a5a42e45cb1fea3a04a73e9fae472e49.png";

/***/ }),

/***/ "fueH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/pre_bg-30c8d647c8249dc75258a98fd753b699.png";

/***/ }),

/***/ "g31g":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "learnIndex",
    staticClass: "learning-body",
    style: ({
      width: _vm.configCards.length * 360 + 'px'
    }),
    attrs: {
      "onselectstart": "return false"
    }
  }, [_c('div', {
    staticClass: "top"
  }), _c('div', {
    ref: "learningContent",
    staticClass: "content"
  }, [(_vm.configCards.length == 0 && _vm.isErrorCardShowConfig) ? _c('card', {
    attrs: {
      "config": _vm.emptyCard
    }
  }) : _vm._e(), _c('transition-group', {
    attrs: {
      "tag": "span",
      "name": "list",
      "leaveActiveClass": "animated zoomOut"
    },
    on: {
      "enter": _vm.cardEnterAnimation,
      "beforeEnter": _vm.cardBeforeEnterAnimation
    }
  }, [_vm._l((_vm.configCards), function(card, index) {
    return [_c('div', {
      key: card.onlineClassId ? card.onlineClassId : card.cardType,
      staticClass: "learn-c",
      class: index % 2 == 0 ? 'learning-card-up' : 'learning-card-down',
      style: ({
        left: card.left + 'px'
      }),
      attrs: {
        "data-index": index
      }
    }, [(card.cardType === 102) ? _c('escalate-card', {
      attrs: {
        "config": card,
        "petImgSrc": _vm.petImgSrc
      }
    }) : (card.cardType === 104) ? _c('trial-card', {
      attrs: {
        "config": card,
        "petImgSrc": _vm.petImgSrc
      }
    }) : (card.cardType === 101) ? _c('esl-card', {
      attrs: {
        "config": card,
        "petImgSrc": _vm.petImgSrc
      }
    }) : _c('card', {
      attrs: {
        "config": card,
        "petImgSrc": _vm.petImgSrc
      }
    })], 1)]
  })], 2)], 1)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-042adc70", module.exports)
  }
}

/***/ }),

/***/ "gQWd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_result_vue__ = __webpack_require__("Dlum");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_test_result_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_test_result_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookies_js__);
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      link: "#",
      testResultDialog: null
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default.a, testResult: __WEBPACK_IMPORTED_MODULE_1__components_test_result_vue___default.a
  },
  props: ['config'],
  computed: {},
  mounted: function mounted() {},

  methods: {
    linkFun: function linkFun() {
      var _this = this;

      //做CT
      if (this.config.doCt) {
        sa.track('learning_click', { 'click_id': 'pc_learning_homepage_ct_start' });
        //ct:normal newCT:
        switch (this.config.ctType) {
          case "normal":
            this.$router.push("/test_work");
            break;
          case "new":
            __WEBPACK_IMPORTED_MODULE_3_axios__["default"].get('/rest/learninggw/api/pc/homepage/getStudentCtStartExam', {
              params: {
                studentId: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId")
              }
            }).then(function (res) {
              if (res.data.code == 200 && res.data.data.ctEnable) {
                _this.$router.push("/test_work");
              } else {
                _this.$showToast("没有权限，请联系您的班主任老师，谢谢！");
              }
            });
            break;
          case "lexile":
            window.location.href = this.config.ctBeginAddr + "&back_url=" + encodeURIComponent(document.location.href); //@back_url 用于作业端返回
            break;
        }
      } else {
        //查看报告
        if (this.config.ctType == "normal") {
          var TestResult = __WEBPACK_IMPORTED_MODULE_2_vue__["default"].extend(__WEBPACK_IMPORTED_MODULE_1__components_test_result_vue___default.a);
          var vm = new TestResult({ propsData: { contents: this.config.content, closeDialog: this.closeDialogFun } });
          this.testResultDialog = vm.$mount().$el;
          document.body.appendChild(this.testResultDialog);
          sa.track('learning_click', { 'click_id': 'pc_learning_homepage_ct_result_old' });
        } else {
          this.$router.push("/test_result/" + this.config.examUuid + "/0");
          sa.track('learning_click', { 'click_id': 'pc_learning_homepage_ct_result_new' });
        }
      }
    },
    closeDialogFun: function closeDialogFun() {
      document.body.removeChild(this.testResultDialog);
    }
  }
});

/***/ }),

/***/ "glY1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_vk_dialog_trial_vue__ = __webpack_require__("JkuT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_vk_dialog_trial_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_vk_dialog_trial_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__back_card_vue__ = __webpack_require__("0qy4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__back_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__back_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_progress_vue__ = __webpack_require__("aNdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_dragon_js__ = __webpack_require__("mYWi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_vk_slide_text_vue__ = __webpack_require__("RaiI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_vk_slide_text_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__common_vk_slide_text_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_plugins_Model__ = __webpack_require__("oHet");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var noImg = __webpack_require__("rOu3");


__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_9__common_plugins_Model__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isShowTrail: false,
      isInDragonClient: false,
      isSummerCamp: false,
      noImg: noImg,
      starBtn: {
        type: 'lg-hide',
        text: '',
        link: '#'
      },
      pps: [{
        name: "预习",
        state: "use" //disable:灰色 use：可预习 used：预习完
      }, {
        name: "上课",
        state: "use" //disable:灰色 use：可预习 used：预习完
      }, {
        name: "做作业",
        state: "disable" //disable:灰色 use：可预习 used：预习完
      }],
      //        HIDE(0,"不显示"),
      //        LOCK(1,"不可用"),
      //        UNLOCK(2, "可用"),
      //        FINISH_UNLOCK(3, "完成并继续可用"),
      //        FINISH_LOCK(4, "完成但不可用");
      backButtonState: ['hide', 'disable', 'enable', 'enable', 'disable']
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_2__common_vk_button_vue___default.a, vkProgress: __WEBPACK_IMPORTED_MODULE_6__components_progress_vue___default.a, backCard: __WEBPACK_IMPORTED_MODULE_4__back_card_vue___default.a, slideText: __WEBPACK_IMPORTED_MODULE_8__common_vk_slide_text_vue___default.a, dialogTrial: __WEBPACK_IMPORTED_MODULE_3__common_vk_dialog_trial_vue___default.a
  },
  props: ['config', 'currentPanelState'],
  watch: {
    config: function config(n, o) {
      this.initState();
      this.initBtn();
    }
  },
  computed: {},
  mounted: function mounted() {
    this.initState();
    this.initBtn();
  },

  methods: {
    initState: function initState() {
      //lessonStatus的所有取值：
      //UN_BOOKED(0,"未约"),
      //BOOKED(1, "已约，未开始"),               //11:30之前
      //IN_CLASS(2, "课程前30分钟至课程结束"),    //11：30 -- 12：30
      //OUT_CLASS(3, "已下课"),                 //12：30 -- 13：00
      //CLASS_OVER(4, "课程结束后30分钟"),       //13：00之后
      //CLASS_REPALY(5, "FINISHED & AS_SCHEDULED");     //课程状态变成FINISHED之后
      if (this.pps.length == 3) {
        if (this.config.preHomeworkButton > 2) {
          this.pps[0].state = "used";
        }
        if (this.config.classroomButton > 2) {
          this.pps[1].state = "used";
        }
        if (this.config.afterHomeworkButton > 1) {
          this.pps[2].state = "use";
        }
        if (this.config.afterHomeworkButton == 0) {
          this.pps.pop();
        }
      }
      //cardType为4 表示是公开课 公开课进度只有一个icon 5为其他课程 2：美国营队
      if ([2, 4, 5, 12].indexOf(this.config.cardType) > -1) {
        this.pps = [{
          name: "上课",
          state: "use"
        }];
        if (this.config.classroomButton > 2) {
          this.pps = [{
            name: "上课",
            state: "used"
          }];
        }
      }
      if ([11].indexOf(this.config.cardType) > -1) {
        this.pps[2].name = this.config.afterHomeworkButtonText;
      }

      if ([13].indexOf(this.config.cardType) > -1) {
        this.pps = [{
          name: "读绘本",
          state: "used"
        }, {
          name: "上课",
          state: "disable"
        }];
        if (this.config.bookStatus == 1) {
          this.pps[0].state = "used";
        }
        if (this.config.classroomButton > 2) {
          this.pps[1].state = "used";
        }
      }
    },
    starClick: function starClick() {
      var _this = this;

      //        CourseCardStatus
      //          PRE_CLASS(0, "预习状态"),
      //            ON_CLASS(1, "上课状态"),
      //            ON_HOMEWORK(2, "做作业状态"),
      //            AFTER_CLASS(3, "课程已经完成"),
      //            ON_RESULT(4, "查看结果状态");
      //查看结果状态，点击查看结果，跳转报告页面,注意是用 courseCardStatus 判断的
      if (this.config.courseCardStatus == 4) {
        __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/pc/homepage/getStudentTrailResult', {
          params: {
            studentId: __WEBPACK_IMPORTED_MODULE_5_cookies_js___default.a.get("studentId"),
            onlineClassId: this.config.onlineClassId
          }
        }).then(function (res) {
          if (res.data.data && res.data.data.hasTrialResult) {
            _this.$router.push("/test_result/0/" + _this.config.onlineClassId);
          } else {
            _this.$showToast("英语等级报告正在生成中，请稍后查看~");
          }
        }).catch(function (err) {
          _this.$showToast("英语等级报告正在生成中，请稍后查看~");
        });
        return;
      }
      //课程回放
      if ([5].indexOf(this.config.lessonStatus) > -1) {
        this.starBtn.link = "/router/learning/replay/major?onlineClassId=" + this.config.onlineClassId;
        if ([4, 13].indexOf(this.config.cardType) > -1) {
          this.starBtn.link = "/router/learning/replay/openclass?onlineClassId=" + this.config.onlineClassId;
        }
        this.courseReplay();
        return;
      }
      //进教室
      if ([2, 3].indexOf(this.config.lessonStatus) > -1) {
        this.starBtn.link = "/router/learning/classroom/major?onlineClassId=" + this.config.onlineClassId;
        //公开课 进教室
        if ([4, 13].indexOf(this.config.cardType) > -1) {
          switch (this.config.classType) {
            case "PUBLIC_CLASSROOM_RECORDED":
              //录播课进教室
              window.open("//" + window.location.host.replace(/lc/, 'www') + "/icvideo/?onlineClassId=" + this.config.onlineClassId);
              return;
            case "PUBLIC_CLASSROOM":
              //正常公开课进教室
              this.starBtn.link = "/router/learning/classroom/openclass?onlineClassId=" + this.config.onlineClassId;
              break;
          }
          this.starBtn.link = "/router/learning/classroom/openclass?onlineClassId=" + this.config.onlineClassId;
        }
        this.checkTrial();
        return;
      }
    },

    //Trial课超约判断
    checkTrial: function checkTrial() {
      var _this2 = this;

      if (this.config.courseId == 597767) {
        if (this.config.bookType != 0 && this.config.bookType != 2) {
          __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/pc/homepage/classroom/checkExcessClassAndAllotTeacher', {
            params: {
              studentId: __WEBPACK_IMPORTED_MODULE_5_cookies_js___default.a.get("studentId"),
              onlineClassId: this.config.onlineClassId
            }
          }).then(function (res) {
            if (res.data.code == 200) {
              _this2.trailToast();
            } else {
              //弹出toast
              _this2.$showToast('啊哦，教室创建失败，<br>建议联系约课老师重新安排哦');
            }
          }).catch(function (err) {
            _this2.$showToast('啊哦，教室创建失败，<br>建议联系约课老师重新安排哦');
          });
        } else {
          this.trailToast();
        }
      } else {
        this.enterClassRoom();
      }
    },
    trailToast: function trailToast() {
      var _this3 = this;

      this.$modelShow({
        model: __WEBPACK_IMPORTED_MODULE_3__common_vk_dialog_trial_vue___default.a,
        title: "为了确保试听效果，请您阅读如下注意事项并进行检查确认",
        buttonText: "知道了",
        enter: function enter() {
          _this3.$modelClose();
          _this3.enterClassRoom();
        },
        closeDialog: function closeDialog() {
          _this3.$modelClose();
        }
      });
    },

    //进教室 小恐龙判断
    enterClassRoom: function enterClassRoom() {
      var _this4 = this;

      if (__WEBPACK_IMPORTED_MODULE_7__utils_dragon_js__["a" /* default */].isOnDragonClient()) {
        //pc app进教室loading
        this.starBtn.type = "lg-loading";
        this.starBtn.text = "进入中";
        sa.track('learning_click', {
          'click_id': 'pc_learning_homepage_pcapp_btn_enter_classroom',
          'online_class_id': this.config.onlineClassId,
          'book_type': this.config.bookType
        });
        var isOpenClass = true;
        if ([4, 13].indexOf(this.config.cardType) > -1) {
          isOpenClass = true;
        } else {
          isOpenClass = false;
        }
        __WEBPACK_IMPORTED_MODULE_7__utils_dragon_js__["a" /* default */].goToClassRoomInDragon(this.config.onlineClassId, isOpenClass, function () {
          _this4.initBtn();
        });
      } else {
        sa.track('learning_click', {
          'click_id': 'pc_learning_homepage_btn_enter_classroom',
          'online_class_id': this.config.onlineClassId,
          'book_type': this.config.bookType
        });
        setTimeout(function () {
          window.open(_this4.starBtn.link);
        }, 200);
      }
    },

    //点击课程回放
    courseReplay: function courseReplay() {
      var _this5 = this;

      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_btn_replay',
        'online_class_id': this.config.onlineClassId
      });
      setTimeout(function () {
        window.open(_this5.starBtn.link);
      });
    },
    initBtn: function initBtn() {
      this.starBtn.type = "lg-" + this.backButtonState[this.config.classroomButton];
      this.starBtn.text = this.config.classroomButtonText;
      //卡片正面查看报告
      if (this.config.courseCardStatus == 4) {
        this.starBtn.type = "lg-" + this.backButtonState[this.config.trialResultButton];
        this.starBtn.text = this.config.trialResultText;
      }
    },
    teacherErrorImg: function teacherErrorImg(e) {
      e.target.src = noImg;
    }
  }
});

/***/ }),

/***/ "gr9D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_progress_vue__ = __webpack_require__("aNdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__back_card_vue__ = __webpack_require__("0qy4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__back_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__back_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dragon_js__ = __webpack_require__("mYWi");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      toeflResultText: '',
      blackText: '',
      isFinishWork: false,
      homeworkRight: 0,
      homeworkLeft: 0,
      workBtn: {
        type: 'lg-hide',
        text: '',
        link: '#',
        isNew: false
      },
      pps: [{
        name: "预习",
        state: "use" //disable:灰色 use：可预习 used：预习完
      }, {
        name: "上课",
        state: "use" //disable:灰色 use：可预习 used：预习完
      }, {
        name: "做作业",
        state: "use" //disable:灰色 use：可预习 used：预习完
      }],
      //HIDE(0,"不显示"),
      //LOCK(1,"不可用"),
      //UNLOCK(2, "可用"),
      //FINISH_UNLOCK(3, "完成并继续可用"),
      //FINISH_LOCK(4, "完成但不可用");
      backButtonState: ['hide', 'disable', 'enable', 'enable', 'disable']
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue___default.a, vkProgress: __WEBPACK_IMPORTED_MODULE_2__components_progress_vue___default.a, backCard: __WEBPACK_IMPORTED_MODULE_3__back_card_vue___default.a
  },
  props: ['config', 'currentPanelState'],
  computed: {},
  watch: {
    config: function config(n, o) {
      this.initState();
      this.initBtnAndWorkState();
    }
  },
  mounted: function mounted() {
    this.initState();
    this.initBtnAndWorkState();
  },

  methods: {
    goHomework: function goHomework() {
      this.$getWorkUrl(this.config, this, this.config.courseCardStatus === 0 ? 'PRE' : 'AFTER', 'homepage_btn_homework');
    },
    initState: function initState() {
      if (this.config.preHomeworkButton > 2) {
        this.pps[0].state = "used";
      }
      if (this.config.classroomButton > 2) {
        this.pps[1].state = "used";
      }
      if (this.config.afterHomeworkButton > 2) {
        this.pps[2].state = "used";
      }
      if (this.config.afterHomeworkButton == 0) {
        this.pps = [{
          name: "预习",
          state: this.pps[0].state //disable:灰色 use：可预习 used：预习完
        }, {
          name: "上课",
          state: this.pps[1].state //disable:灰色 use：可预习 used：预习完
        }];
      }
    },
    initBtnAndWorkState: function initBtnAndWorkState() {
      //校验curriculumVersion
      this.workBtn.type = "lg-" + this.backButtonState[this.config.afterHomeworkButton];
      this.workBtn.text = this.config.afterHomeworkButtonText;

      //是否完成作业了
      if (this.config.afterHomeworkStatus == 0) {
        this.isFinishWork = false;
      }
      if (this.config.afterHomeworkStatus == 1) {
        this.isFinishWork = true;
      }
      this.homeworkRight = this.config.afterHomeworkRight;
      this.homeworkLeft = this.config.afterHomeworkTotal - this.config.afterHomeworkRight;

      /*
      * @courseCardStatus 枚举
      * pre: 0 //预习状态
      * on: 1 //上课状态
      * onHomeWork: 2 //做作业状态
      * after: 3 //课程已经完成
      */

      //小学托福
      if ([14].indexOf(this.config.cardType) > -1) {

        if ([0].indexOf(this.config.courseCardStatus) > -1) {
          //小学托福课前作业
          this.blackText = '预习成绩';
          this.toeflResultText = this.config.preHomeworResultText;
          this.pps[1].state = "disable";
          this.pps[2].state = "disable";
          this.workBtn.type = "lg-" + this.backButtonState[this.config.preHomeworkButton];
          this.workBtn.text = this.config.preHomeworkButtonText;
        }

        if ([2].indexOf(this.config.courseCardStatus) > -1) {
          //小学托福课后作业
          this.blackText = '作业正确率';
          this.toeflResultText = this.config.afterHomeworkResultText;
          this.workBtn.type = "lg-" + this.backButtonState[this.config.afterHomeworkButton];
          this.workBtn.text = this.config.afterHomeworkButtonText;
        }
        return;
      }

      //夏令营托福 课前作业
      if ([3].indexOf(this.config.cardType) > -1 && [0].indexOf(this.config.courseCardStatus) > -1) {
        this.pps[1].state = "disable";
        this.pps[2].state = "disable";
        //是否完成作业了
        if (this.config.preHomeworkStatus == 0) {
          this.isFinishWork = false;
        }
        if (this.config.preHomeworkStatus == 1) {
          this.isFinishWork = true;
        }
        this.workBtn.type = "lg-" + this.backButtonState[this.config.preHomeworkButton];
        this.workBtn.text = this.config.preHomeworkButtonText;
        this.homeworkRight = this.config.preHomeworkRight;
        this.homeworkLeft = this.config.preHomeworkTotal - this.config.preHomeworkRight;
      }
      //夏令营托福 课后作业
      if ([3].indexOf(this.config.cardType) > -1 && [2].indexOf(this.config.courseCardStatus) > -1) {
        this.workBtn.type = "lg-" + this.backButtonState[this.config.afterHomeworkButton];
        this.workBtn.text = this.config.afterHomeworkButtonText;
      }
      //ktv
      if ([11].indexOf(this.config.cardType) > -1) {
        if ([2].indexOf(this.config.courseCardStatus) > -1) {
          this.workBtn.type = "lg-" + this.backButtonState[this.config.afterHomeworkButton];
          this.workBtn.text = this.config.afterHomeworkButtonText;
        }
      }
    }
  }
});

/***/ }),

/***/ "hF8I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cookies_js__);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: {
    cardConfig: {
      type: Object,
      default: function _default() {
        return {
          colorText: 0,
          colorTitle: "成绩",
          status: 0
        };
      }
    }
  },
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "hFKB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_plugins_VideoModel__ = __webpack_require__("cbuu");
//
//
//
//
//
//



var noImg = __webpack_require__("fueH");
var projectBg = __webpack_require__("Xx4y");

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2__common_plugins_VideoModel__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      projectBg: projectBg,
      videoConfig: {
        videoSrc: "",
        autoPlay: true,
        materialId: "1",
        source: "",
        title: "指导视频"
      },
      //HIDE(0,"不显示"),
      //LOCK(1,"不可用"),
      //UNLOCK(2, "可用"),
      //FINISH_UNLOCK(3, "完成并继续可用"),
      //FINISH_LOCK(4, "完成但不可用");
      backButtonState: ['hide', 'disable', 'enable', 'enable', 'disable']
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue___default.a
  },
  props: ['config'],
  computed: {},
  created: function created() {
    this.videoConfig.videoSrc = this.config.url;
    if (this.config.cardType == 7) {
      this.videoConfig.source = "kid_guide_video";
    }
    if (this.config.cardType == 8) {
      this.videoConfig.source = "parent_guide_video";
    }
    if (this.config.cardType == 10) {
      this.config.viewButton = 2;
      this.config.viewButtonText = "查看";
    }
    this.videoConfig.title = this.config.name;
  },

  methods: {
    clickVideo: function clickVideo() {
      if (this.config.cardType == 10) {
        sa.track('learning_click', {
          'click_id': 'pc_learning_homepage_project_demo'
        });
        this.$router.push("/video/project/" + this.config.unitId);
        return;
      }
      this.$videoModelShow(this.videoConfig);
    },
    errorImg: function errorImg(e) {
      e.target.src = noImg;
    }
  }
});

/***/ }),

/***/ "hTAC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_velocity_animate__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      animationEnter: false,
      animationOut: false,
      timeout: null
    };
  },
  props: ['text', 'isAutoSlide'],
  components: {},
  computed: {},
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timeout);
  },
  mounted: function mounted() {
    this.initData();
  },

  methods: {
    initData: function initData() {
      var _this = this;

      if (this.isAutoSlide) {
        this.timeout = setTimeout(function () {
          if (_this.$refs.textInner) {
            var textWidth = _this.$refs.textInner.scrollWidth - _this.$refs.textInner.clientWidth;
            _this.isVelocity = __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(_this.$refs.textInner, { marginLeft: -textWidth }, {
              container: _this.$refs.textInner, duration: 3000, loop: true, mobileHA: false
            });
          }
        }, 2000);
      }
    },
    textEnter: function textEnter() {
      var _this2 = this;

      if (!this.animationEnter && !this.isAutoSlide) {
        this.animationEnter = true;
        if (this.$refs.textInner) {
          var textWidth = this.$refs.textInner.scrollWidth - this.$refs.textInner.clientWidth;
          __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(this.$refs.textInner, { marginLeft: -textWidth }, {
            container: this.$refs.textInner, duration: 1000, mobileHA: false,
            complete: function complete() {
              _this2.animationEnter = false;
            }
          });
        }
      }
    },
    textOut: function textOut() {
      var _this3 = this;

      if (!this.animationOut && !this.isAutoSlide) {
        this.animationOut = true;
        __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(this.$refs.textInner, { marginLeft: 0 }, {
          container: this.$refs.textInner, duration: 1000, mobileHA: false,
          complete: function complete() {
            _this3.animationOut = false;
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "hfWq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hwX5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/boy_3-ce0bc6b3e577ce7c599240a83175079a.png";

/***/ }),

/***/ "i175":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star-content"
  }, [_c('transition-group', {
    attrs: {
      "enter-active-class": "animated fadeInDown"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.currentPanelState == 'face' || _vm.currentPanelState == 'open'),
      expression: "currentPanelState=='face'||currentPanelState=='open'"
    }],
    key: "1",
    staticClass: "panel-face"
  }, [_c('div', {
    staticClass: "star-teacher-img",
    class: _vm.isSummerCamp ? 'star-teacher-img-summer' : ''
  }, [_c('img', {
    attrs: {
      "src": _vm.config.teacherAvatar ? _vm.config.teacherAvatar + '?imageView2/2/w/70/h/70' : _vm.noImg
    },
    on: {
      "error": _vm.teacherErrorImg
    }
  })]), _c('div', {
    staticClass: "star-teacher-name"
  }, [_c('slide-text', {
    staticClass: "lesson",
    attrs: {
      "text": _vm.config.teacherName,
      "isAutoSlide": true
    }
  })], 1), _c('div', {
    staticClass: "star-stars"
  }, [_vm._l((_vm.config.stars), function(star) {
    return [_c('div', {
      staticClass: "icon-star-enable"
    })]
  }), _vm._l(((5 - _vm.config.stars)), function(star) {
    return [_c('img', {
      attrs: {
        "src": __webpack_require__("OTJh")
      }
    })]
  })], 2), _c('vk-btn', {
    staticClass: "star-btn",
    attrs: {
      "type": _vm.starBtn.type,
      "text": _vm.starBtn.text,
      "isNewTab": false,
      "link": _vm.starBtn.link,
      "clickFun": _vm.starClick
    }
  }), _c('vk-progress', {
    ref: "vkProgress",
    attrs: {
      "pps": _vm.pps
    }
  })], 1), (_vm.currentPanelState == 'back') ? _c('back-card', {
    key: "2",
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39f34434", module.exports)
  }
}

/***/ }),

/***/ "jDxO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jVUf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jtnA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/card_yes_enable-513899ee5b93e59b0edcd9b057de8bed.png";

/***/ }),

/***/ "kd7J":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Nd22")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("CNzm")
/* template */
var __vue_template__ = __webpack_require__("Y/0N")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fc8909da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/index_bg.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index_bg.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc8909da", Component.options)
  } else {
    hotAPI.reload("data-v-fc8909da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "kqT0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isHaveNewImpel: false, //是否有新宝箱
      isShowNewTaskText: false,
      isHaveThreeImpel: false,
      isHaveOneImpel: false,
      hasPd: false,
      pdFirst: true
    };
  },
  activated: function activated() {
    //刷新能量站入口状态
    this.hotActivityPageEntryStatus();
    this.showPd();
    this.getPdFirst();
  },

  beforeDestroy: function beforeDestroy() {
    this.isHaveNewImpel = false;
    //恢复新任务提醒相关参数
    this.isShowNewTaskText = false;
    this.isHaveThreeImpel = false;
    this.isHaveOneImpel = false;
  },
  methods: {
    showPd: function showPd() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/activity/api/activity/user/activity/entrance', {}).then(function (res) {
        if (res.data.code === 0 && res.data.data) {
          _this.hasPd = true;
        }
      });
    },
    goPd: function goPd(e) {
      if (e.target.className == 'icon-cup') {
        this.$router.push("/competition_arena");
        if (this.pdFirst) {
          this.iknow();
        }
      }
    },
    iknow: function iknow() {
      this.pdFirst = false;
      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].post('/rest/activity/api/activity/user/activity/setActivityStudentRulesRecordAgreePad', {}).then(function (res) {});
    },
    getPdFirst: function getPdFirst() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/activity/api/activity/user/activity/getActivityStudentRulesRecordPad', {}).then(function (res) {
        if (!res.data.data) {
          _this2.pdFirst = true;
        } else {
          _this2.pdFirst = false;
        }
      });
    },
    checkImpelsNumber: function checkImpelsNumber() {
      var _this3 = this;

      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/pc/magic/treasureBox/getTreasureBoxEntranceStatusByStudentId', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get('studentId')
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          //如果有三个宝箱未打开
          if (res.data.data.atLeastThreeClose) {
            _this3.isHaveThreeImpel = true;
            _this3.impelEntryAnimation();
          } else if (res.data.data.atLeastOneClose) {
            //如果一个到三个宝箱未打开
            _this3.isHaveOneImpel = true;
            _this3.impelEntryAnimation();
          } else {
            _this3.impelEntryAnimation();
          }
        }
      }).catch(function (err) {
        _this3.isHaveThreeImpel = true;
        _this3.impelEntryAnimation();
      });
    },

    // 能量站入口状态逻辑
    // 查询是否有需要提示的定向激励新任务
    hotActivityPageEntryStatus: function hotActivityPageEntryStatus() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/point/activity/appoint/task/hasWaitSignUpAndNeedToastTask', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code === 200 && res.data.data.code === 200 && res.data.data.data) {
          _this4.isShowNewTaskText = true;
          _this4.impelEntryAnimation();
        } else {
          //刷新宝石入口状态
          _this4.checkNewImpels();
        }
      }).catch(function () {
        _this4.checkNewImpels();
      });
    },

    //宝石入场动画
    impelEntryAnimation: function impelEntryAnimation() {
      var _this5 = this;

      this.$nextTick(function () {
        Velocity(_this5.$refs.impel_btn, {
          opacity: 1,
          translateX: 110
        }, {
          duration: 800,
          easing: 'spring'
        });
      });
    },
    checkNewImpels: function checkNewImpels() {
      var _this6 = this;

      __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/learninggw/api/pc/magic/treasureBox/hasClosedTreasureBoxByStudentId', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200 && res.data.data == true) {
          _this6.isHaveNewImpel = true;
        }
        _this6.checkImpelsNumber();
      });
    },

    //显示宝箱弹窗
    showImpel: function showImpel() {
      //显示宝箱弹窗
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_enter_impelbox_page'
      });
      this.$playSound("click");
      this.$router.push('/hot_activity');
    }
  }
});

/***/ }),

/***/ "krJv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_plugins_Model__ = __webpack_require__("oHet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_it_test_dialog_vue__ = __webpack_require__("2Bd/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_it_test_dialog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_it_test_dialog_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_untils_js__ = __webpack_require__("b43k");
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2__common_plugins_Model__["a" /* default */]);

var noImg = __webpack_require__("fueH");
var projectBg = __webpack_require__("Xx4y");
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      localStorageKey: 'home_it_test_msg_box_count_' + __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId")
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_1__common_vk_button_vue___default.a
  },
  props: ['config'],
  computed: {},
  mounted: function mounted() {
    if (this.config.showMessageBox) {
      if (__WEBPACK_IMPORTED_MODULE_5__utils_untils_js__["e" /* localStorageUtil */].get(this.localStorageKey)) {
        var count = parseInt(__WEBPACK_IMPORTED_MODULE_5__utils_untils_js__["e" /* localStorageUtil */].get(this.localStorageKey));
        if (count < this.config.messageMaxAlertTimes) {
          this.showMessageBox();
          __WEBPACK_IMPORTED_MODULE_5__utils_untils_js__["e" /* localStorageUtil */].set(this.localStorageKey, count + 1);
        }
      } else {
        this.showMessageBox();
        __WEBPACK_IMPORTED_MODULE_5__utils_untils_js__["e" /* localStorageUtil */].set(this.localStorageKey, 1);
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_5__utils_untils_js__["e" /* localStorageUtil */].del(this.localStorageKey);
    }
  },

  methods: {
    showMessageBox: function showMessageBox() {
      var _this = this;

      //弹窗!
      this.$modelShow({
        model: __WEBPACK_IMPORTED_MODULE_3__components_it_test_dialog_vue___default.a,
        title: this.config.messageTitle,
        text: this.config.messageText,
        btnText: this.config.buttonText,
        enter: function enter() {
          _this.$modelClose();
          sa.track('learning_click', { 'click_id': 'pc_learning_it_test_dialog' });
          window.open(_this.config.jumpUrl);
        },
        closeDialog: function closeDialog() {
          _this.$modelClose();
        }
      });
    },
    clickItTest: function clickItTest() {
      sa.track('learning_click', { 'click_id': 'pc_learning_it_test_card' });
      window.open(this.config.jumpUrl);
    }
  }
});

/***/ }),

/***/ "lLYD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lVuj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lxsw":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("jVUf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("nX/O")
/* template */
var __vue_template__ = __webpack_require__("D0wG")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76e156da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_number.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_number.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76e156da", Component.options)
  } else {
    hotAPI.reload("data-v-76e156da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "m92C":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/help@2x-74b519b497dd1f57853553d2623f4a2a.png";

/***/ }),

/***/ "mSL3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mX2x":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "test-con"
  }, [(_vm.config.doOrResult) ? _c('div', {
    staticClass: "test-start"
  }) : _vm._e(), (!_vm.config.doOrResult) ? _c('div', {
    staticClass: "test-finish"
  }) : _vm._e(), _c('div', {
    staticClass: "tc-title"
  }, [_vm._v(_vm._s(_vm.config.desc))]), (!_vm.config.doOrResult) ? _c('vk-btn', {
    staticClass: "tc-btn",
    attrs: {
      "type": "lg-enable",
      "text": _vm.config.button,
      "clickFun": _vm.linkFun
    }
  }) : _vm._e(), (_vm.config.doOrResult) ? _c('vk-btn', {
    staticClass: "tc-btn",
    attrs: {
      "type": "lg-enable",
      "text": _vm.config.button,
      "link": _vm.config.ctBeginAddr,
      "isNewTab": true
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-826fb0b4", module.exports)
  }
}

/***/ }),

/***/ "mYWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);


function goToClassRoomInDragon(onlineClassId, isOpenCourse, callBackFun) {
  var dragonClientUA = navigator.userAgent.match(/vipkid\/\d+(\.\d+)*/i);
  //灰度
  __WEBPACK_IMPORTED_MODULE_0_axios__["default"].get('/rest/vanguard/api/service/client/classroom/getRoomUrl', {
    params: {
      onlineClassId: onlineClassId,
      studentId: __WEBPACK_IMPORTED_MODULE_1_cookies_js___default.a.get("studentId"),
      version: dragonClientUA ? dragonClientUA[0].split('/')[1] : '0'
    }
  }).then(function (res) {
    try {
      if (res.data.data.roomType == 'NA') {
        window.__bridge.openClass(onlineClassId, res.data.data.supplierCode);
        if (callBackFun) {
          callBackFun();
        }
      } else {
        flashClassRoom(isOpenCourse, callBackFun, onlineClassId);
      }
    } catch (e) {
      flashClassRoom(isOpenCourse, callBackFun, onlineClassId);
    }
  }).catch(function (err) {
    flashClassRoom(isOpenCourse, callBackFun, onlineClassId);
  });
}

function isOnDragonClient() {
  if (navigator.userAgent.toLowerCase().match(/vipkid/i)) {
    return true;
  } else {
    return false;
  }
}
function flashClassRoom(isOpenCourse, callBack, onlineClassId) {
  if (isOpenCourse) {
    window.location.href = '/router/learning/classroom/openclass?onlineClassId=' + onlineClassId;
  } else {
    window.location.href = '/router/learning/classroom/major?onlineClassId=' + onlineClassId;
  }
  if (callBack) {
    callBack();
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  isOnDragonClient: isOnDragonClient,
  goToClassRoomInDragon: goToClassRoomInDragon
});

/***/ }),

/***/ "mhXp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nRI9":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "esl-card"
  }, [(_vm.config.isBlink) ? _c('div', {
    staticClass: "esl-card-light"
  }) : _vm._e(), (_vm.config.isBlink) ? _c('img', {
    staticClass: "pet-img",
    attrs: {
      "src": _vm.petImgSrc
    }
  }) : _vm._e(), _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "lesson-name"
  }, [_vm._v(_vm._s(_vm.config.mainTitle))]), _c('div', {
    staticClass: "date"
  }, [_c('span', {
    staticClass: "week"
  }, [_vm._v(_vm._s(_vm.weekTime()))]), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.dateTime()))])]), _c('span', {
    staticClass: "video-name"
  }, [_vm._v(_vm._s(_vm.config.aiCourseCard.mainTitle))]), _c('div', {
    ref: "hand",
    staticClass: "hand"
  }, [_c('div', {
    staticClass: "h-black"
  }), _c('div', {
    ref: "handLine",
    staticClass: "h-line"
  }), _c('div', {
    ref: "cardHand",
    staticClass: "h-circle icon-hand-circle",
    on: {
      "click": _vm.handClick,
      "mouseenter": _vm.handHover
    }
  })])]), _c('div', {
    staticClass: "live-course",
    style: ({
      backgroundColor: _vm.currentPanelState == 'face' ? '#ffffff' : '#6ad3c6'
    })
  }, [_c('transition-group', {
    attrs: {
      "enter-active-class": "animated fadeInDown"
    }
  }, [(_vm.currentPanelState == 'face') ? _c('div', {
    key: "1",
    staticClass: "front-face"
  }, [_c('div', {
    staticClass: "mid"
  }, [(_vm.config.cardStyle == 'pre_video') ? [_c('img', {
    staticClass: "pre-video-img",
    class: {
      'video-img-disable': _vm.config.aiCourseCard.imageInfo.status == _vm.workStatus.undone
    },
    attrs: {
      "src": _vm.config.aiCourseCard.imageInfo.imgUrl
    }
  })] : _vm._e(), (_vm.config.cardStyle == 'classroom') ? _c('classroom', {
    attrs: {
      "classInfo": _vm.config.classInfo
    }
  }) : _vm._e(), (_vm.config.cardStyle == 'flash_card') ? _c('flash-card', {
    attrs: {
      "cardConfig": _vm.config.homeworkInfo
    }
  }) : _vm._e(), (_vm.config.cardStyle == 'homework') ? _c('homework', {
    attrs: {
      "cardConfig": _vm.config.homeworkInfo
    }
  }) : _vm._e()], 2), _c('vk-btn', {
    staticClass: "star-btn",
    attrs: {
      "type": _vm.classBtn,
      "text": _vm.config.bottomButton.buttonText,
      "clickFun": _vm.buttonClick
    }
  }), _c('div', {
    staticClass: "progress"
  }, [_c('vk-progress', {
    attrs: {
      "pps": _vm.pps
    }
  })], 1)], 1) : _vm._e(), (_vm.currentPanelState == 'back') ? _c('div', {
    key: "2",
    staticClass: "back-face"
  }, [_c('back-card', {
    attrs: {
      "config": _vm.config
    }
  })], 1) : _vm._e()])], 1), _c('div', {
    staticClass: "record-course"
  }, [_c('img', {
    staticClass: "video-img",
    class: {
      'video-img-disable': _vm.config.aiCourseCard.imageInfo.status == _vm.workStatus.undone
    },
    attrs: {
      "src": _vm.config.aiCourseCard.imageInfo.imageUrl
    }
  }), _c('vk-btn', {
    attrs: {
      "type": _vm.videoBtn,
      "text": _vm.config.aiCourseCard.bottomButton.buttonText,
      "clickFun": _vm.videoClick,
      "alertText": "直播课结束后才可查看哦~"
    }
  }), _c('div', {
    staticClass: "video-progress"
  }, [_c('vk-progress', {
    attrs: {
      "pps": _vm.videoPps
    }
  })], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-56ce17f8", module.exports)
  }
}

/***/ }),

/***/ "nX/O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      numbers: []
    };
  },
  props: {
    number: {
      type: String,
      required: true,
      default: "0"
    },
    type: {
      type: String,
      required: false,
      default: "yellow"
    }
  },
  components: {},
  computed: {},
  watch: {
    number: function number() {
      this.numberSplit();
    }
  },
  mounted: function mounted() {
    this.numberSplit();
  },

  methods: {
    numberSplit: function numberSplit() {
      var _this = this;

      var numbers = this.number.split('');
      var index = numbers.indexOf(".");
      if (index > -1) {
        numbers[index] = 11;
      }
      for (var i = 0; i < numbers.length - 1; i++) {
        this.numbers.push(0);
      }
      setTimeout(function () {
        _this.numbers = numbers;
      }, 200);
    }
  }
});

/***/ }),

/***/ "nxfj":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "videoContent",
    staticClass: "video-content",
    class: this.state.fullScreen ? 'content-full-screen' : ''
  }, [_c('div', {
    staticClass: "video-panel",
    on: {
      "mouseenter": function($event) {
        _vm.video.soundShow = false
      }
    }
  }, [_c('div', {
    staticClass: "video-mask"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.video.show == 1),
      expression: "video.show==1"
    }],
    staticClass: "video-net-error"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("2Dpi")
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.video.show == 1),
      expression: "video.show==1"
    }],
    staticClass: "video-net-info"
  }, [_vm._v("网络连接好像有点问题，是否重新尝试？")]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.video.show == 1),
      expression: "video.show==1"
    }],
    staticClass: "video-btn-reload",
    on: {
      "click": _vm.reload
    }
  }, [_vm._v("刷新重试")])]), _c('video', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.video.show != 1),
      expression: "video.show!=1"
    }],
    ref: "vkVideo",
    staticClass: "video-player",
    class: this.state.fullScreen ? 'video-full-screen' : '',
    attrs: {
      "preload": "auto",
      "src": _vm.videoSrc
    },
    on: {
      "error": _vm.error,
      "ended": _vm.playEnd,
      "timeupdate": _vm.timeLine,
      "waiting": _vm.videoWaiting,
      "loadedmetadata": _vm.loadedMetaData,
      "canplay": _vm.canPlay
    }
  }), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.video.show == 0),
      expression: "video.show==0"
    }],
    staticClass: "video-loading"
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.video.show != 1 && _vm.video.fullConsole),
      expression: "video.show!=1&&video.fullConsole"
    }],
    ref: "videoConsole",
    staticClass: "video-console",
    class: this.state.fullScreen ? 'video-console-full' : '',
    on: {
      "mouseenter": function($event) {
        _vm.video.soundShow = false
      }
    }
  }, [_c('div', {
    staticClass: "video-btn",
    class: _vm.state.playBtnState,
    on: {
      "click": function($event) {
        _vm.play()
      }
    }
  }), _c('div', {
    staticClass: "video-time-start"
  }, [_vm._v(_vm._s(_vm.video.timeStart))]), _c('div', {
    ref: "vtimeLine",
    staticClass: "video-time-line",
    on: {
      "click": function($event) {
        _vm.clickTimeLine($event)
      },
      "mouseenter": function($event) {
        _vm.video.soundShow = false
      }
    }
  }, [_c('div', {
    ref: "timeOver",
    staticClass: "vsl-over"
  }), _c('div', {
    ref: "timeLine",
    staticClass: "vsl-line"
  }, [_c('div', {
    ref: "timeLoading",
    staticClass: "vsl-loading"
  }), _c('div', {
    ref: "timeBtn",
    staticClass: "vsl-cricle animated pulse",
    on: {
      "mousedown": function($event) {
        _vm.scrollTimeStart($event)
      }
    }
  })])]), _c('div', {
    staticClass: "video-btn-full-screen video-btn",
    class: this.state.fullScreen ? 'video-btn-small-screen' : 'video-btn-full-screen',
    on: {
      "click": function($event) {
        _vm.fullScreen()
      }
    }
  }), _c('div', {
    staticClass: "video-btn-sound",
    on: {
      "mouseleave": function($event) {
        _vm.video.soundShow = false
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.video.soundShow),
      expression: "video.soundShow"
    }],
    ref: "soundLine",
    staticClass: "video-sound-line"
  }, [_c('div', {
    ref: "soundBtn",
    staticClass: "video-sound-cricle",
    on: {
      "mousedown": function($event) {
        _vm.scrollSound($event)
      }
    }
  }), _c('div', {
    ref: "soundOver",
    staticClass: "video-sound-over"
  })]), _c('div', {
    staticClass: "video-sound-muted video-btn",
    class: _vm.state.soundBtnState,
    on: {
      "click": function($event) {
        _vm.audioMuted()
      },
      "mouseenter": function($event) {
        _vm.video.soundShow = true
      }
    }
  })]), _c('div', {
    staticClass: "video-time-end"
  }, [_vm._v(_vm._s(_vm.video.timeEnd))])])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4fcb2e0c", module.exports)
  }
}

/***/ }),

/***/ "oHet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by lihongbin on 2017/8/7.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue) {
    var tpl = null;
    var vm = null;
    var el = null;
    Vue.prototype.$modelShow = function (config) {
      tpl = Vue.extend(config.model);
      if (vm == null) {
        vm = new tpl({
          propsData: {
            config: config
          }
        });
        el = vm.$mount().$el;
        document.body.appendChild(el);
      }
    };
    Vue.prototype.$modelClose = function () {
      document.body.removeChild(el);
      vm = null;
    };
  }
});

/***/ }),

/***/ "oRoz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var pad = function pad(val) {
  val = Math.floor(val);
  if (val < 10) {
    return '0' + val;
  }
  return val + '';
};
var timeParse = function timeParse(sec) {
  var min = 0;
  min = Math.floor(sec / 60);
  sec = sec - min * 60;
  return pad(min) + ':' + pad(sec);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      $video: null,
      video: {
        //播放按钮状态
        timeEnd: "00:00",
        timeStart: "00:00",
        vol: 0.5,
        show: 0, //0:loading 1:net error 2:player
        fullConsole: true,
        sto: null, //定时关闭状态
        soundShow: false
      },
      state: {
        playBtnState: "play",
        fullScreen: false,
        soundBtnState: "invalid",
        isCompleted: false,
        isPlayed: false,
        timeLineChanging: false
      }
    };
  },
  mounted: function mounted() {
    //初始化video
    this.$video = this.$refs.vkVideo;
    if (!this.$video.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"')) {
      alert("浏览器不支持该视频，可以更换浏览器为谷歌浏览器");
    }
  },

  props: {
    videoPauseTriger: {
      type: Number,
      required: false
    },
    autoPlay: {
      type: Boolean,
      required: false,
      default: false
    },
    videoSrc: {
      type: String,
      required: false,
      default: ""
    },
    source: {
      type: String,
      required: true,
      default: "this"
    },
    materialId: {
      type: String,
      required: true,
      default: ""
    },
    //视频播放结束事件 默认重新播放
    playEndAction: {
      type: Function,
      required: false,
      default: function _default() {}
    }
  },
  watch: {
    //切换视频时
    videoSrc: function videoSrc(n, o) {
      if (n) {
        this.state.playBtnState = "play";
        this.video.show = 0;
        this.state.isCompleted = false;
        this.state.isPlayed = false;
        if (!this.autoPlay) {
          this.backStart();
        }
      } else {
        this.video.show = 0;
      }
    },
    videoPauseTriger: function videoPauseTriger(n) {
      this.pauseVideo();
    }
  },
  components: {},
  methods: {
    vsmHover: function vsmHover() {
      this.video.soundShow = true;
    },

    //加载完元数据了的时候
    loadedMetaData: function loadedMetaData() {
      this.video.timeEnd = timeParse(this.$video.duration);
      this.setCurrentSound(this.video.vol);
    },
    canPlay: function canPlay() {
      if (this.autoPlay && this.state.playBtnState == "play") {
        this.play();
      }
      this.video.show = 2; //加载完成显示播放器
    },
    videoWaiting: function videoWaiting() {
      this.video.show = 0;
    },

    //播放结束
    playEnd: function playEnd() {
      this.state.playBtnState = "play";
      this.lineCurrentWidth(0);
      this.setCurrentTime(0);
      this.playEndAction();
    },
    pauseVideo: function pauseVideo() {
      this.$video.pause();
      this.state.playBtnState = "play";
    },

    //播放
    play: function play() {
      var _this = this;

      if (this.state.playBtnState == "play") {
        //解决safari不能自动播放的问题，在safari上就不自动播放了
        this.$video.play().catch(function (error) {
          _this.state.playBtnState = "play";
          _this.state.isPlayed = false;
          return;
        });
        this.state.playBtnState = "stop";
        //是否播放了，只记一次
        if (!this.state.isPlayed) {
          this.state.isPlayed = true;
          sa.track('learning_click', {
            'click_id': 'pc_learning_' + this.source + '_video_played',
            'material_id': Number(this.materialId)
          });
        }
        sa.track('learning_click', {
          'click_id': 'pc_learning_' + this.source + '_video_play',
          'material_id': Number(this.materialId)
        });
        return;
      }
      if (this.state.playBtnState == "stop") {
        this.$video.pause();
        this.state.playBtnState = "play";
        sa.track('learning_click', {
          'click_id': 'pc_learning_' + this.source + '_video_pause',
          'material_id': Number(this.materialId)
        });
        return;
      }
    },

    //刷新重试
    reload: function reload() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_' + this.source + '_video_reload',
        'material_id': Number(this.materialId)
      });
      window.location.reload();
    },
    consoleShow: function consoleShow(e) {
      var _this2 = this;

      this.video.fullConsole = true;
      clearTimeout(this.video.sto);
      this.video.sto = setTimeout(function () {
        _this2.video.fullConsole = false;
      }, 3000);
    },

    //全屏
    fullScreen: function fullScreen() {
      var _this3 = this;

      if (!this.state.fullScreen) {
        sa.track('learning_click', {
          'click_id': 'pc_learning_video_fullscreen'
        });
        var navigatorName = "Microsoft Internet Explorer";
        if (navigator.appName == navigatorName) {
          var WsShell = new ActiveXObject('WScript.Shell');
          WsShell.SendKeys('{F11}');
        } else {
          var de = this.$refs.videoContent;
          if (de.requestFullscreen) {
            de.requestFullscreen();
          } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
          } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
          } else if (de.msRequestFullscreen) {
            de.msRequestFullscreen();
          }
        }
        this.state.fullScreen = true;
        //监控屏幕变化，为了在用户点击esc时可以触发smallscreen
        setTimeout(function () {
          window.onresize = function () {
            if (_this3.state.fullScreen) {
              _this3.smallScreen();
            }
          };
        }, 1000);
        document.body.addEventListener("mousemove", this.consoleShow);
      } else {
        this.smallScreen();
      }
    },
    smallScreen: function smallScreen() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_video_smallscreen'
      });
      var navigatorName = "Microsoft Internet Explorer";
      if (navigator.appName == navigatorName) {
        var WsShell = new ActiveXObject('WScript.Shell');
        WsShell.SendKeys('{esc}');
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }

      clearTimeout(this.video.sto);
      document.body.removeEventListener("mousemove", this.consoleShow);
      this.video.fullConsole = true;
      this.state.fullScreen = false;
      window.onresize = null;
    },

    //点击进度条的快速跳转
    clickTimeLine: function clickTimeLine(e) {
      var timesX = e.clientX;
      var lineX = this.$refs.vtimeLine.getBoundingClientRect().left;
      var tl = timesX - lineX;
      var trtc = tl / (this.$refs.vtimeLine.clientWidth - 310);
      if (trtc > 1) {
        return;
      }
      this.$video.currentTime = this.$video.duration * trtc;
      this.lineCurrentWidth(trtc * 100);
    },


    //点击滑块拖动事件
    scrollTimeStart: function scrollTimeStart(e) {
      var _this4 = this;

      var timesX = 0;
      var w = 0,
          over,
          line;
      timesX = e.clientX;
      var timeOver = this.$refs.timeOver;
      var timeLine = this.$refs.timeLine;
      w = timeOver.clientWidth + timeLine.clientWidth;
      over = timeOver.style.width ? timeOver.style.width : 0;
      line = timeLine.style.width ? timeLine.style.width : 100;
      this.$refs.videoConsole.onmousemove = window.onmousemove = function (e) {
        var cx = (e.clientX - timesX) / w * 100;
        over = (over + "").replace("\%", "");
        line = (line + "").replace("\%", "");
        var ocx = parseInt(over) + cx;
        if (ocx > 0 && ocx < 100 || ocx == 0 || ocx == 100) {
          _this4.lineCurrentWidth(ocx);
          _this4.setCurrentTime(ocx);
        }
      };
      this.$refs.videoConsole.onmouseup = function () {
        _this4.$refs.videoConsole.onmousemove = null;
        window.onmousemove = null;
        _this4.$refs.videoConsole.onmouseup = null;
      };
      window.onmouseup = function () {
        _this4.$refs.videoConsole.onmousemove = null;
        window.onmousemove = null;
        window.onmouseup = null;
      };
    },

    //调节音量
    scrollSound: function scrollSound(e) {
      var _this5 = this;

      var y = e.clientY;
      var vol = this.video.vol;
      this.$refs.soundBtn.onmousemove = window.onmousemove = function (e) {
        var cy = (y - e.clientY) / 160;
        var ccy = cy + vol;
        if (ccy > 0 && ccy < 1) {
          _this5.setCurrentSound(ccy);
        }
      };
      this.$refs.soundLine.onmouseleave = function () {
        _this5.$refs.soundBtn.onmousemove = null;
        window.onmousemove = null;
      };

      this.$refs.videoConsole.onmouseenter = function () {
        _this5.$refs.soundBtn.onmousemove = null;
        window.onmousemove = null;
      };

      this.$refs.vtimeLine.onmouseenter = function () {
        _this5.$refs.soundBtn.onmousemove = null;
        window.onmousemove = null;
      };
      this.$refs.soundBtn.onmouseup = new Function('this.onmousemove=null');
      window.onmouseup = new Function('this.onmousemove=null');
    },

    //时间线改变 每秒刷一次 保证性能
    timeLine: function timeLine() {
      var _this6 = this;

      if (this.state.timeLineChanging) {
        return;
      }
      this.state.timeLineChanging = true;
      setTimeout(function () {
        _this6.state.timeLineChanging = false;
      }, 1000);
      this.video.show = 2; //加载完成显示播放器
      var percent = this.$video.currentTime / this.$video.duration * 100;
      this.lineCurrentWidth(percent);
    },

    //进度条各项宽度
    lineCurrentWidth: function lineCurrentWidth(percent) {
      if (this.$refs.timeOver == undefined || this.$refs.timeLine == undefined || percent > 100) {
        return;
      }
      //缓冲进度条
      var buffered = this.$video.buffered;
      var end = 0;
      if (buffered.length != 0) {
        end = buffered.end(buffered.length - 1);
      }

      this.$refs.timeOver.style.width = percent + "%";
      //缓冲条left
      this.$refs.timeLine.style.width = 100 - percent + "%";
      if (percent == 0) {
        this.$refs.timeLoading.style.width = 0;
      } else {
        if (this.$refs.timeLoading.clientWidth < this.$refs.timeLine.clientWidth) {
          //缓冲条宽度 end 缓冲位置计算有延迟，为了不让缓冲条越界，所以做了该限制
          this.$refs.timeLoading.style.width = end / this.$video.duration * (this.$refs.vtimeLine.clientWidth - 310) - this.$refs.timeOver.clientWidth + "px";
        } else {
          this.$refs.timeLoading.style.width = this.$refs.timeLine.clientWidth + "px";
        }
      }
      this.video.timeStart = timeParse(this.$video.currentTime);
      //90%完成率打点
      if (percent > 90 && !this.state.isCompleted) {
        this.state.isCompleted = true;
        sa.track('learning_click', {
          'click_id': 'pc_learning_' + this.source + '_video_completed',
          'material_id': Number(this.materialId)
        });
      }
    },

    //静音
    audioMuted: function audioMuted() {
      if (this.state.soundBtnState == "muted") {
        sa.track('learning_click', {
          'click_id': 'pc_learning_video_invalid'
        });
        this.state.soundBtnState = "invalid";
        this.$video.muted = false;
        this.video.soundShow = true;
        this.$video.volume = this.video.vol;
        if (this.$video.volume < 0.05) {
          this.$video.volume = 0.5;
        }
        this.setCurrentSound(this.$video.volume);
        return;
      }
      if (this.state.soundBtnState == "invalid") {
        sa.track('learning_click', {
          'click_id': 'pc_learning_video_muted'
        });
        this.state.soundBtnState = "muted";
        this.$video.muted = true;
        this.setCurrentSound(0);
        return;
      }
    },
    setCurrentTime: function setCurrentTime(percent) {
      if (percent != 0) {
        this.$video.currentTime = this.$video.duration * (percent / 100);
        this.video.timeStart = timeParse(this.$video.currentTime);
      } else {
        this.video.timeStart = timeParse(0);
      }
    },
    error: function error() {
      this.video.show = 1;
    },

    //设置当前声音
    setCurrentSound: function setCurrentSound(vol) {
      if (this.$refs.soundBtn == undefined) {
        return;
      }
      this.$refs.soundBtn.style.top = 160 * (1 - vol) + "px";
      this.$refs.soundOver.style.height = 160 * vol + "px";
      if (vol != 0) {
        this.$video.volume = vol;
        this.video.vol = vol;
      }
      // 滑动到底部时为静音
      if (vol < 0.05) {
        this.state.soundBtnState = "muted";
        this.$video.muted = true;
      } else {
        this.state.soundBtnState = "invalid";
        this.$video.muted = false;
      }
    },

    //回到刚开始
    backStart: function backStart() {
      this.setCurrentTime(0);
      this.lineCurrentWidth(0);
      this.$video.pause();
      this.state.playBtnState = "play";
    }
  }
});

/***/ }),

/***/ "p7SD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pmXC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__back_card_vue__ = __webpack_require__("0qy4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__back_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__back_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_progress_vue__ = __webpack_require__("aNdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookies_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//





var noImg = __webpack_require__("fueH");
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pps: [{
        name: "读绘本",
        state: "use" //disable:灰色 use：可预习 used：预习完
      }, {
        name: "上课",
        state: "disable" //disable:灰色 use：可预习 used：预习完
      }],
      //        HIDE(0,"不显示"),
      //        LOCK(1,"不可用"),
      //        UNLOCK(2, "可用"),
      //        FINISH_UNLOCK(3, "完成并继续可用"),
      //        FINISH_LOCK(4, "完成但不可用");
      backButtonState: ['hide', 'disable', 'enable', 'enable', 'disable']
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default.a, vkProgress: __WEBPACK_IMPORTED_MODULE_2__components_progress_vue___default.a, backCard: __WEBPACK_IMPORTED_MODULE_1__back_card_vue___default.a
  },
  props: ['config', 'currentPanelState'],
  computed: {},
  mounted: function mounted() {
    this.initState();
  },

  watch: {
    config: function config(n, o) {
      this.initState();
    }
  },
  methods: {
    initState: function initState() {
      if (this.config.bookStatus == 1) {
        this.pps[0].state = "used";
      }
      if (this.config.classroomButton > 2) {
        this.pps[1].state = "used";
      }
    },
    errorImg: function errorImg(e) {
      e.target.src = noImg;
    }
  }
});

/***/ }),

/***/ "q0M+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_velocity_animate__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isShowLeft: false,
      isShowRight: true
    };
  },

  components: {},
  props: ['config'],
  mounted: function mounted() {},

  methods: {
    close: function close() {
      this.$modelClose();
    },
    isShowFun: function isShowFun() {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
    rightBtn: function rightBtn() {
      this.isShowLeft = false;
      this.isShowRight = true;
      this.$refs.imgInner.style.marginLeft = "0px";
    },
    leftBtn: function leftBtn() {
      this.isShowLeft = true;
      this.isShowRight = false;
      this.$refs.imgInner.style.marginLeft = "-630px";
    }
  }
});

/***/ }),

/***/ "qRso":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qggl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: ['message', 'type'],
  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "qxey":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("wmYa")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("hFKB")
/* template */
var __vue_template__ = __webpack_require__("ZZf1")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7421abca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/video_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7421abca", Component.options)
  } else {
    hotAPI.reload("data-v-7421abca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "r0tt":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enterActiveClass": "animated fadeInUp",
      "leaveActiveClass": "animated fadeOutDown"
    }
  }, [_c('div', {
    ref: "sliTip",
    staticClass: "vk-tip",
    class: 'vk-tip-' + _vm.type
  }, [_vm._v(_vm._s(_vm.message)), _vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1fa5b2da", module.exports)
  }
}

/***/ }),

/***/ "rEL5":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "impel_btn",
    staticClass: "impel-btn"
  }, [(_vm.isHaveNewImpel) ? _c('div', {
    staticClass: "icon-impel-bg"
  }) : _vm._e(), (_vm.isHaveNewImpel && _vm.isHaveThreeImpel || _vm.isShowNewTaskText) ? _c('div', {
    staticClass: "icon-impel-new",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showImpel($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-impel-dragon",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showImpel($event)
      }
    }
  }), _c('div', {
    staticClass: "icon-impel-dragon-dialog"
  }, [_c('p', [_vm._v(_vm._s(_vm.isShowNewTaskText ? '有新任务了' : '领取能量石吧'))])])]) : _vm._e(), (_vm.isHaveNewImpel && _vm.isHaveOneImpel) ? _c('div', {
    staticClass: "icon-impel-new-one-impel"
  }) : _vm._e(), _c('div', {
    staticClass: "impel-package",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showImpel($event)
      }
    }
  }, [(_vm.isHaveNewImpel) ? _c('div', {
    staticClass: "icon-circle"
  }) : _vm._e(), _c('div', {
    staticClass: "icon-direction"
  }), _c('div', {
    staticClass: "icon-impel",
    class: {
      'icon-impel-animation': _vm.isHaveNewImpel
    }
  })]), (_vm.hasPd) ? _c('div', {
    staticClass: "impel-pd",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.goPd($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-light-3"
  }), _c('div', {
    staticClass: "icon-cup"
  }), _c('div', {
    staticClass: "star-big"
  }), _c('div', {
    staticClass: "star-small"
  }), (_vm.pdFirst) ? _c('div', {
    staticClass: "bubble-1"
  }, [_vm._v("快来参加比赛～上传自己的作品，与众多小伙伴PK吧！")]) : _vm._e(), (_vm.pdFirst) ? _c('div', {
    staticClass: "bubble-2",
    on: {
      "click": _vm.iknow
    }
  }, [_vm._v("知道了")]) : _vm._e()]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-578b465b", module.exports)
  }
}

/***/ }),

/***/ "rOu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/index/teacher_bg-5a981bc00f28eece5f10abc9ee7fcbf5.png";

/***/ }),

/***/ "rb49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rsyu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ry59":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("2vMv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("gQWd")
/* template */
var __vue_template__ = __webpack_require__("mX2x")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-826fb0b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/test_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-826fb0b4", Component.options)
  } else {
    hotAPI.reload("data-v-826fb0b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "sapW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tnpE":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("2IaS")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("FP70")
/* template */
var __vue_template__ = __webpack_require__("ZDmK")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9c302762"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/message_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] message_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c302762", Component.options)
  } else {
    hotAPI.reload("data-v-9c302762", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "uQa8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "udTv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isShowCloseBtn: false
    };
  },
  props: {
    config: {
      type: Object,
      default: {},
      required: true
    }
  },
  components: {},
  computed: {},
  mounted: function mounted() {},

  methods: {}
});

/***/ }),

/***/ "ui1H":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ujOd":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("wM/q")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("Tr3j")
/* template */
var __vue_template__ = __webpack_require__("eqf4")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cf5f96b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_toast.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_toast.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cf5f96b4", Component.options)
  } else {
    hotAPI.reload("data-v-cf5f96b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "ul+u":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-back"
  }, [_c('div', {
    staticClass: "circle circle-1"
  }), _c('div', {
    staticClass: "circle circle-2"
  }), _c('div', {
    staticClass: "circle circle-3"
  }), _c('div', {
    staticClass: "btns"
  }, [_vm._l((_vm.pbButtons), function(pbButton, index) {
    return [(pbButton.link != '0') ? _c('vk-btn', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.isBtnShow),
        expression: "isBtnShow"
      }],
      key: pbButton,
      staticClass: "animated fadeInDown pb-btn",
      style: ('animation-delay:' + (index * 100) / 1000 + 's'),
      attrs: {
        "type": 'white-line-' + pbButton.state,
        "text": pbButton.name,
        "link": pbButton.link,
        "isNewTab": pbButton.isNew,
        "clickId": pbButton.clickId,
        "clickFun": _vm.buttonClick(pbButton.link, pbButton.clickId)
      }
    }) : _vm._e(), (pbButton.link == '0') ? _c('vk-btn', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.isBtnShow),
        expression: "isBtnShow"
      }],
      staticClass: "animated fadeInDown pb-btn",
      style: ('animation-delay:' + (index * 100) / 1000 + 's'),
      attrs: {
        "type": 'white-line-' + pbButton.state,
        "text": pbButton.name,
        "link": pbButton.link,
        "isNewTab": pbButton.isNew,
        "clickId": pbButton.clickId,
        "clickFun": _vm.dragonButtonClick
      }
    }) : _vm._e()]
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-142a121e", module.exports)
  }
}

/***/ }),

/***/ "uz2i":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("OGmi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("RHXJ")
/* template */
var __vue_template__ = __webpack_require__("OTC9")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1655758b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/guide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] guide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1655758b", Component.options)
  } else {
    hotAPI.reload("data-v-1655758b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "vYEO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/avatar/girl_2-1fec5e8fa7de0179a045c29a0aac5b47.png";

/***/ }),

/***/ "vhlU":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "exCon",
    staticClass: "extension-con",
    on: {
      "scroll": _vm.listScrollListener
    }
  }, [(_vm.topShow) ? _c('div', {
    staticClass: "ec-btn-top",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.topClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-arrow-top"
  })]) : _vm._e(), (_vm.bottomShow) ? _c('div', {
    staticClass: "ec-btn-bottom",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.bottomClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-arrow-bottom"
  })]) : _vm._e(), _vm._l((_vm.config.newCard.mList), function(m, index) {
    return _c('div', {
      staticClass: "list-item animated fadeInRight",
      style: ({
        animationDuration: index * 0.5 + 's'
      }),
      on: {
        "click": function($event) {
          _vm.goToDetail(m)
        }
      }
    }, [_c('slide-text', {
      staticClass: "el-name",
      class: m.readStatus ? 'list-item-read' : '',
      attrs: {
        "text": m.showName
      }
    }), (m.itemType == 'video') ? _c('div', {
      staticClass: "icon icon-play"
    }) : _vm._e(), (m.itemType == 'book') ? _c('div', {
      staticClass: "icon icon-eye"
    }) : _vm._e()], 1)
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61472152", module.exports)
  }
}

/***/ }),

/***/ "vygL":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cards"
  }, [_c('div', {
    staticClass: "card-light",
    class: _vm.ui.cardBgLight
  }), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-top",
    class: _vm.ui.cardBg
  }, [_c('slide-text', {
    staticClass: "lesson",
    attrs: {
      "text": _vm.config.lessonName
    }
  }), ([0, 1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(_vm.config.cardType) > -1) ? _c('div', {
    staticClass: "date"
  }, [_c('span', {
    staticClass: "week"
  }, [_vm._v(_vm._s(_vm.weekTime()))]), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.dateTime()))])]) : _vm._e(), ([6, 7, 8, 10, 200].indexOf(_vm.config.cardType) > -1) ? _c('div', {
    staticClass: "lesson-name"
  }, [_vm._v(_vm._s(_vm.config.name))]) : _vm._e(), ([2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(_vm.config.cardType) > -1) ? _c('slide-text', {
    staticClass: "course-type-name",
    attrs: {
      "text": _vm.config.courseNameCn,
      "isAutoSlide": true
    }
  }) : _vm._e(), ([0, 3, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(this.config.cardType) > -1) ? _c('div', {
    ref: "hand",
    staticClass: "hand"
  }, [_c('div', {
    staticClass: "h-black"
  }), _c('div', {
    ref: "handLine",
    staticClass: "h-line",
    style: ({
      height: _vm.ui.cardHandTop + 'px'
    })
  }), _c('div', {
    ref: "cardHand",
    staticClass: "h-circle icon-hand-circle",
    style: ({
      top: _vm.ui.cardHandTop + 'px'
    }),
    on: {
      "click": _vm.handClick,
      "mouseenter": _vm.handHover,
      "mousedown": function($event) {
        _vm.handPull($event)
      }
    }
  })]) : _vm._e()], 1), _c('div', {
    staticClass: "card-content",
    class: ([3, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(_vm.config.cardType) > -1) ? 'card-content-' + _vm.ui.currentPanelState + '-star' : 'card-content-' + _vm.ui.currentPanelState
  }, [([13].indexOf(_vm.config.cardType) > -1 && [0].indexOf(_vm.config.courseCardStatus) > -1) ? _c('reader-card', {
    attrs: {
      "config": _vm.config,
      "currentPanelState": _vm.ui.currentPanelState
    }
  }) : _vm._e(), ([0, 11, 16].indexOf(_vm.config.cardType) > -1 && [0].indexOf(_vm.config.courseCardStatus) > -1) ? _c('pre-course', {
    attrs: {
      "config": _vm.config,
      "currentPanelState": _vm.ui.currentPanelState
    }
  }) : _vm._e(), ([15, 17, 18].indexOf(_vm.config.cardType) > -1 && [0, 2].indexOf(_vm.config.courseCardStatus) > -1) ? _c('after-course', {
    attrs: {
      "config": _vm.config,
      "currentPanelState": _vm.ui.currentPanelState
    }
  }) : _vm._e(), ([0].indexOf(_vm.config.cardType) > -1 && [1, 3].indexOf(_vm.config.courseCardStatus) > -1) ? _c('star', {
    attrs: {
      "config": _vm.config,
      "currentPanelState": _vm.ui.currentPanelState
    }
  }) : _vm._e(), ([0, 11, 16].indexOf(_vm.config.cardType) > -1 && [2].indexOf(_vm.config.courseCardStatus) > -1) ? _c('work', {
    attrs: {
      "config": _vm.config,
      "currentPanelState": _vm.ui.currentPanelState
    }
  }) : _vm._e(), ([1].indexOf(_vm.config.cardType) > -1) ? _c('extension', {
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e(), ([2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18].indexOf(_vm.config.cardType) > -1 && [1, 3, 4].indexOf(_vm.config.courseCardStatus) > -1) ? _c('star', {
    attrs: {
      "config": _vm.config,
      "currentPanelState": _vm.ui.currentPanelState
    }
  }) : _vm._e(), ([3, 14].indexOf(_vm.config.cardType) > -1 && [0, 2].indexOf(_vm.config.courseCardStatus) > -1) ? _c('work', {
    attrs: {
      "config": _vm.config,
      "currentPanelState": _vm.ui.currentPanelState
    }
  }) : _vm._e(), ([6].indexOf(_vm.config.cardType) > -1) ? _c('test', {
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e(), ([7, 8, 10].indexOf(_vm.config.cardType) > -1) ? _c('video-card', {
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e(), ([9].indexOf(_vm.config.cardType) > -1) ? _c('message', {
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e(), ([100].indexOf(_vm.config.cardType) > -1) ? _c('error', {
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e(), ([200].indexOf(_vm.config.cardType) > -1) ? _c('it-test', {
    attrs: {
      "config": _vm.config
    }
  }) : _vm._e()], 1)]), (_vm.isShowPet) ? _c('img', {
    staticClass: "pet-img",
    attrs: {
      "src": _vm.petImgSrc
    }
  }) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68bf3c28", module.exports)
  }
}

/***/ }),

/***/ "w/ak":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookies_js__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      timeouts: [],
      aircraftClassName: '',
      aircraftStartPointIndex: ''
    };
  },
  props: {
    imgConfig: {
      type: Object,
      required: false,
      default: {}
    }
  },
  mounted: function mounted() {
    this.aircraftMove();
    this.animationPet();
  },
  deactivated: function deactivated() {
    clearTimeout(this.timeouts);
  },

  methods: {
    aircraftMove: function aircraftMove() {
      var _this = this;

      var currentIndex = parseInt(Math.random() * 1000 % 4) + 1;
      if (this.aircraftStartPointIndex != currentIndex) {
        this.aircraftStartPointIndex = currentIndex;
        if (this.imgConfig.aircraftImgSrc) {
          if (this.imgConfig.aircraftImgDirection == 0) {
            this.aircraftClassName = 'start-point-' + currentIndex;
          } else {
            this.aircraftClassName = 'start-point-vertical-' + currentIndex;
          }
          this.timeouts = setTimeout(function () {
            _this.aircraftMove();
          }, 5500);
        }
      } else {
        this.aircraftMove();
      }
    },
    animationPet: function animationPet() {
      if (this.imgConfig.isShowPet) {
        if (this.imgConfig.petImgSrc) {
          var a = window.innerWidth + 100;
          __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(this.$refs.petWrap, { translateX: 0 - a, rotateZ: 360 }, {
            duration: 50000,
            easing: [0, 0, 1, 1],
            loop: true
          });
          __WEBPACK_IMPORTED_MODULE_0_velocity_animate___default.a(this.$refs.pet, { translateY: -100, rotateZ: 360 }, {
            duration: 20000,
            easing: [0, 0, 1, 1],
            loop: true
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "wM/q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wmYa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "x2x/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("Flb4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_untils__ = __webpack_require__("b43k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_dragon__ = __webpack_require__("mYWi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookies_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_vue__ = __webpack_require__("Waww");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index_body_vue__ = __webpack_require__("UQ7X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_index_body_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_index_body_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_cards_vue__ = __webpack_require__("5Ymm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_cards_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__card_cards_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_message_card_vue__ = __webpack_require__("tnpE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_message_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__card_message_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_simple_video_vue__ = __webpack_require__("e/6R");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_simple_video_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__video_simple_video_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index_bg_vue__ = __webpack_require__("kd7J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index_bg_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_index_bg_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_guide_vue__ = __webpack_require__("uz2i");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_guide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_guide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_unlock_card_vue__ = __webpack_require__("y1S0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_unlock_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_unlock_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_user_agreement_vue__ = __webpack_require__("Ycnf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_user_agreement_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__common_user_agreement_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_guide_model_vue__ = __webpack_require__("Kw/R");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_guide_model_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_guide_model_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_gift_animate_vue__ = __webpack_require__("SUdm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_gift_animate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_gift_animate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_impel_enter_vue__ = __webpack_require__("K94Y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_impel_enter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_impel_enter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_velocity_animate__ = __webpack_require__("9qgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_velocity_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_velocity_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_plugins_Loading__ = __webpack_require__("4uCU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_plugins_Toast__ = __webpack_require__("zDbP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_plugins_Model__ = __webpack_require__("oHet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_course_courseEnum__ = __webpack_require__("VDN5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_plugins_WorkEntrance__ = __webpack_require__("ehF8");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

























__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_22__common_plugins_WorkEntrance__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_20__common_plugins_Model__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_18__common_plugins_Loading__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_19__common_plugins_Toast__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isShowGiftAnimate: false,
      isBtnRightShow: false,
      isBtnLeftShow: false,
      isErrorCardShow: false,
      isHaveConfirmOrderFlag: false, //是否有七天后未确认的订单
      isHaveOneImpel: false,
      //卡的唯一标示
      cardId: 0,
      //新解锁卡
      newCard: {},
      newCardIsShow: false,
      isShowVideo: false,
      videoConfig: {},
      cardShow: false,
      cardChange: 0,
      userInfo: {},
      cards: [],
      //按照不同课程 类型分类
      cardTypes: {},
      isNoScroll: false,
      accessClassRoomCardMove: 0,
      currentScrollLeft: 0,
      isOrderAnimated: false,
      intervals: [],
      timeouts: [],
      isShowCards: false,
      isShowImpel: false,
      isShowGuidePage: false,
      impelRelatedId: "",
      headerIsShowEgg: false,
      isShowUpdate: false,
      giftConfig: {
        aircraftImgSrc: '',
        petImgSrc: '',
        aircraftImgDirection: '',
        isShowPet: true
      }
    };
  },
  components: {
    card: __WEBPACK_IMPORTED_MODULE_7__card_cards_vue___default.a,
    iHeader: __WEBPACK_IMPORTED_MODULE_5__components_header_vue___default.a,
    message: __WEBPACK_IMPORTED_MODULE_8__card_message_card_vue___default.a,
    simpleVideo: __WEBPACK_IMPORTED_MODULE_9__video_simple_video_vue___default.a,
    indexBg: __WEBPACK_IMPORTED_MODULE_10__components_index_bg_vue___default.a,
    guide: __WEBPACK_IMPORTED_MODULE_11__components_guide_vue___default.a,
    unlockCard: __WEBPACK_IMPORTED_MODULE_12__components_unlock_card_vue___default.a,
    iBody: __WEBPACK_IMPORTED_MODULE_6__components_index_body_vue___default.a,
    giftAnimate: __WEBPACK_IMPORTED_MODULE_15__components_gift_animate_vue___default.a,
    userAgreement: __WEBPACK_IMPORTED_MODULE_13__common_user_agreement_vue___default.a,
    impelEnter: __WEBPACK_IMPORTED_MODULE_16__components_impel_enter_vue___default.a
  },
  computed: {
    isShowSetting: function isShowSetting() {
      //如果是小恐龙显示设置
      return __WEBPACK_IMPORTED_MODULE_3__utils_dragon__["a" /* default */].isOnDragonClient();
    }
  },
  created: function created() {
    //cardType 存储器
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.values(__WEBPACK_IMPORTED_MODULE_21__common_course_courseEnum__["c" /* CARD_TYPE */])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var cardType = _step.value;

        this.cardTypes[cardType] = [];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    //强制10秒显示错误卡
    this.timeouts.push(setTimeout(function () {
      if (_this.cards.length == 0) {
        _this.isErrorCardShow = true;
      }
    }, 20000));
    this.isShowUpdateFun();
    this.initCard();
    this.initCardUI();
  },

  //返回首页
  activated: function activated() {
    var _this2 = this;

    this.$el.style.opacity = 0.3;
    this.getAircraftPetImg(); //获取宠物 飞船图片
    //刷新用户信息宝石
    this.userInfoData();
    this.timeouts.push(setTimeout(function () {
      _this2.$el.style.opacity = 1;
      _this2.refresh();
      _this2.$el.scrollLeft = _this2.currentScrollLeft;
    }, 300));
  },

  //离开首页
  deactivated: function deactivated() {
    this.leaveBefore();
  },

  watch: {
    //实时排序
    cardChange: function cardChange(n, o) {
      var tempCard = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.values(this.cardTypes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _card = _step2.value;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = _card[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var cardItem = _step3.value;

              tempCard.push(cardItem);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
        //排序
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      tempCard = tempCard.sort(this.sortNumber);
      //卡片位置绝对定位
      var leftPx = 0;
      for (var i = 0; i < tempCard.length; i++) {
        tempCard[i].left = leftPx;
        if (tempCard[i].cardType == 101) {
          leftPx += 540;
        } else {
          leftPx += 360;
        }
      }
      this.cards = tempCard;
      //右侧滑动按钮
      if (this.cards.length > 0 && this.cards[this.cards.length - 1].left - document.body.clientWidth > 0) {
        this.isBtnRightShow = true;
      }
      //复位
      this.restPosition();
    },
    //定位进教室
    accessClassRoomCardMove: function accessClassRoomCardMove(n, o) {
      __WEBPACK_IMPORTED_MODULE_17_velocity_animate___default.a(this.$el, "scroll", {
        axis: "x",
        container: this.$el,
        delay: 1000,
        duration: 1000, offset: n + "px", mobileHA: false,
        complete: function complete() {}
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.leaveBefore();
  },
  methods: {
    //PC app的window 2.0.0版本显示更新提示
    isShowUpdateFun: function isShowUpdateFun() {
      if (__WEBPACK_IMPORTED_MODULE_3__utils_dragon__["a" /* default */].isOnDragonClient()) {
        var dragonClientUA = navigator.userAgent.match(/vipkid\/\d+(\.\d+)*/i);
        var version = dragonClientUA[0].split("\/")[1];
        var isWindow = navigator.userAgent.indexOf("Windows") > -1;
        if (version == "2.0.0" && isWindow) {
          sa.track('learning_click', {
            'click_id': 'pc_learning_homepage_show_update_tip'
          });
          this.isShowUpdate = true;
        }
      }
      this.isShowUpdate = false;
    },

    //显示首页的展示的飞船宠物
    getAircraftPetImg: function getAircraftPetImg() {
      var _this3 = this;

      this.isShowGiftAnimate = false;
      __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('/rest/learninggw/api/pc/service/studentstar/getCurrentAirCraftAndPetByStudentId', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.data.currentAirCraftSrc != "" || res.data.data.currentPetSrc != "") {
          _this3.isShowGiftAnimate = true;
          _this3.giftConfig.aircraftImgSrc = res.data.data.currentAirCraftSrc;
          _this3.giftConfig.petImgSrc = res.data.data.currentPetSrc;
          _this3.giftConfig.aircraftImgDirection = res.data.data.aircraftDirection;
        }
      });
    },


    //初始化定位卡片
    initCardUI: function initCardUI() {
      var _this4 = this;

      this.timeouts.push(setTimeout(function () {
        _this4.isShowCards = true;
        _this4.restPosition();
      }, 1000));
    },


    //复位
    restPosition: function restPosition() {
      var _this5 = this;

      this.$nextTick(function () {
        var cardNum = _this5.initPositionAccessClassRoom();
        if (_this5.cards.length > 0 && _this5.cards[cardNum].left > window.innerWidth / 2) {
          _this5.accessClassRoomCardMove = _this5.cards[cardNum].left - window.innerWidth / 2 + 180;
        } else {
          _this5.accessClassRoomCardMove = 0;
        }
      });
    },


    //初始化除定时刷新以外的卡片
    initCard: function initCard() {
      __WEBPACK_IMPORTED_MODULE_1_axios__["default"].all([this.cardData('getMaterialCard'), this.cardData('getCTCard'), this.cardData('getVideoCard'), this.getProjectDemoEntryGreyState()]).then(__WEBPACK_IMPORTED_MODULE_1_axios__["default"].spread(function (acct, perms) {}));
    },

    // 定时刷新
    refresh: function refresh() {
      var _this6 = this;

      var cardTypes = ['getMajorCard', 'getSummerCard', 'getSummerSimpleCard', 'getOtherCard', 'getInfoCard', 'getOpenCard'];

      var _loop = function _loop() {
        var cardType = cardTypes[i];
        _this6.timeouts.push(setTimeout(function () {
          _this6.cardData(cardType);
          _this6.intervals.push(setInterval(function () {
            _this6.cardData(cardType);
          }, 50000));
        }, 1000 * (i + 1)));
      };

      for (var i = 0; i < cardTypes.length; i++) {
        _loop();
      }
    },

    //定位需要可以进教室和可预习的卡片
    initPositionAccessClassRoom: function initPositionAccessClassRoom() {
      for (var i = 0; i < this.cards.length; i++) {
        if ([101].indexOf(this.cards[i].cardType) > -1 && this.cards[i].bottomButton && this.cards[i].bottomButton.buttonText == "进教室") {
          return i;
        } else if (this.cards[i].classroomButtonText == "进教室" || [0, 2, 3, 4, 5].indexOf(this.cards[i].cardType) > -1 && this.cards[i].courseCardStatus == 0 && this.cards[i].preHomeworkButtonText == "预习") {
          if (this.cards[i].classroomButtonText == "进教室") {
            this.giftConfig.isShowPet = false;
          }
          return i;
        }
      }
      return 0;
    },

    //引导页关闭
    guideCloseFun: function guideCloseFun(isOut) {
      this.isShowGuidePage = false;
      this.isNoScroll = false;
      __WEBPACK_IMPORTED_MODULE_17_velocity_animate___default.a(this.$el, "scroll", {
        axis: "x",
        container: this.$el, duration: 500, offset: this.accessClassRoomCardMove
      });
      if (!isOut) {
        //modified by luomingzhong
        //this.autoShowImpel()
      }
    },

    //显示引导页弹出窗
    isForceShowGuide: function isForceShowGuide() {
      sa.track('learning_click', {
        'click_id': 'pc_learning_homepage_show_guide'
      });
      this.$playSound("click");
      this.$modelShow({ model: __WEBPACK_IMPORTED_MODULE_14__components_guide_model_vue___default.a, isShowImpelGuide: this.isShowImpel });
    },

    //是否显示宝箱引导页
    isShowGuide: function isShowGuide() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('/rest/learninggw/api/pc/homepage/showWelcome', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data.show) {
            _this7.timeouts.push(setTimeout(function () {
              _this7.isShowGuidePage = true;
              _this7.isNoScroll = true;
            }, 2000));
            return;
          }
        }
        //modified by luomingzhong
        //this.autoShowImpel()
      });
    },

    //用户信息
    userInfoData: function userInfoData() {
      var _this8 = this;

      return __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('/rest/learninggw/api/pc/homepage/getStudentInfo', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          _this8.userInfo = res.data.data;
          _this8.userInfo.isShow = true;
          __WEBPACK_IMPORTED_MODULE_2__utils_untils__["b" /* default */].setCookie("userName", res.data.data.studentName);
        }
      });
    },

    //卡片数据
    cardData: function cardData(type) {
      var _this9 = this;

      var params = void 0;
      if (type === 'getInfoCard') {
        //for it test
        params = {
          studentId: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId"),
          source: __WEBPACK_IMPORTED_MODULE_3__utils_dragon__["a" /* default */].isOnDragonClient() ? 2 : 1,
          deviceNum: __WEBPACK_IMPORTED_MODULE_3__utils_dragon__["a" /* default */].isOnDragonClient() ? navigator.userAgent.match(/vipkid\/\d(\.\d)+/i)[0] + '/' + __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId") : __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("deviceNum")
        };
      } else {
        params = {
          studentId: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId")
        };
      }
      return __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('/rest/learninggw/api/pc/homepage/' + type, { params: params }).then(function (res) {
        if (res.data.code == 200) {
          var resDatas = res.data.data;
          _this9.cardGenerator(resDatas, type);
        }
      }).catch(function (error) {});
    },

    //卡片解析
    cardGenerator: function cardGenerator(resDatas, type) {
      var _this10 = this;

      if (resDatas && resDatas.length != 0) {
        this.cardTypes[resDatas[0].cardType] = resDatas;
        //TODO 拓展触发解锁新卡片 有老卡就解锁新卡
        if (type == "getMaterialCard" && resDatas[0].oldCard) {
          this.newCard = resDatas[0];
          this.newCardIsShow = true;
          this.timeouts.push(setTimeout(function () {
            _this10.newCardIsShow = false;
          }, 5000));
        }
      } else {
        switch (type) {
          case 'getMajorCard':
            this.cardTypes[0] = [];
            break;
          case 'getSummerCard':
            this.cardTypes[3] = [];
            this.cardTypes[11] = [];
            break;
          case 'getSummerSimpleCard':
            this.cardTypes[2] = [];
            break;
          case 'getOtherCard':
            this.cardTypes[5] = [];
            break;
          case 'getInfoCard':
            this.cardTypes[9] = [];
            this.cardTypes[200] = [];
            break;
          case 'getOpenCard':
            this.cardTypes[4] = [];
            this.cardTypes[13] = [];
            break;
        }
      }
      this.cardChange++;
    },

    //卡片按时间排序 如果时间相同 则按照cardType排序
    sortNumber: function sortNumber(a, b) {
      if (a.scheduledDateTime - b.scheduledDateTime > 0) {
        return 1;
      }
      if (a.scheduledDateTime - b.scheduledDateTime < 0) {
        return -1;
      }
      if (a.scheduledDateTime - b.scheduledDateTime == 0) {
        if (a.cardType - b.cardType < 0) {
          return -1;
        }
        if (a.cardType - b.cardType > 0) {
          return 1;
        }
        if (a.cardType - b.cardType == 0) {
          return 0;
        }
      }
    },

    //滑动控制
    userScrollDown: function userScrollDown(e) {
      this.$el.scrollLeft += e.deltaY || e.detail * 5;
    },
    conScroll: function conScroll() {
      this.currentScrollLeft = this.$el.scrollLeft;
      if (this.$el.scrollLeft == 0) {
        this.isBtnLeftShow = false;
      } else {
        this.isBtnLeftShow = true;
      }
      if (this.$el.scrollLeft == this.$el.scrollWidth - window.innerWidth) {
        this.isBtnRightShow = false;
      } else {
        this.isBtnRightShow = true;
      }
    },
    getProjectDemoEntryGreyState: function getProjectDemoEntryGreyState() {
      var _this11 = this;

      __WEBPACK_IMPORTED_MODULE_1_axios__["default"].get('/rest/learninggw/api/pc/grey/getProjectDemoGrey', {
        params: {
          studentId: __WEBPACK_IMPORTED_MODULE_4_cookies_js___default.a.get("studentId")
        }
      }).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data) {
            _this11.cardData('getMajorProjectDemoCard');
          }
        } else {
          _this11.cardData('getMajorProjectDemoCard');
        }
      });
    },
    checkImpelAccess: function checkImpelAccess() {
      //新用户来做引导
      this.isShowGuide();
      this.isShowImpel = true;
    },
    rightBtnClick: function rightBtnClick() {
      __WEBPACK_IMPORTED_MODULE_17_velocity_animate___default.a(this.$el, "scroll", {
        axis: "x",
        container: this.$el, duration: 500, offset: 500
      });
      this.$playSound("click");
    },
    leftBtnClick: function leftBtnClick() {
      __WEBPACK_IMPORTED_MODULE_17_velocity_animate___default.a(this.$el, "scroll", {
        axis: "x",
        container: this.$el, duration: 500, offset: -500
      });
      this.$playSound("click");
    },
    leaveBefore: function leaveBefore() {
      //销毁所有setinterval clearTimeout
      for (var i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
      }
      for (var j = 0; j < this.intervals.length; j++) {
        clearInterval(this.intervals[j]);
      }
    },
    showSetting: function showSetting() {
      this.$playSound("click");
      this.$router.push("/setting");
    },
    reload: function reload() {
      window.location.reload();
    }
  }
});

/***/ }),

/***/ "xAQ9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xNDl":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("VVDu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("oRoz")
/* template */
var __vue_template__ = __webpack_require__("nxfj")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4fcb2e0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/common/vk_video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vk_video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fcb2e0c", Component.options)
  } else {
    hotAPI.reload("data-v-4fcb2e0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "xazr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_soundjs_0_6_2_min__ = __webpack_require__("e/iw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_soundjs_0_6_2_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_soundjs_0_6_2_min__);
/**
 * Created by lihongbin on 2017/8/7.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    var _this = this;

    var isLoaded = false;
    var isPlayed = true;

    function loadHandler(event) {
      isLoaded = true;
    }

    createjs.Sound.alternateExtensions = ["mp3", "wav"];
    createjs.Sound.on("fileload", loadHandler, this);
    for (var i = 0; i < options.length; i++) {
      createjs.Sound.registerSound(options[i].path, options[i].name);
    }
    //动态添加注册声音文件
    Vue.prototype.$soundPush = function (options) {
      try {
        for (var i = 0; i < options.length; i++) {
          createjs.Sound.registerSound(options[i].path, options[i].name);
        }
      } catch (err) {
        //eslint-disable-next-line no-console
      }
    };
    Vue.prototype.$playSound = function (key) {
      try {
        if (isLoaded && isPlayed) {
          isPlayed = false;
          var instance = createjs.Sound.play(key); // 发挥使用ID。也可以使用完整的源路径或event.src。
          instance.on("complete", function () {
            isPlayed = true;
          }, _this);
          instance.volume = 0.5;
        }
      } catch (err) {
        //eslint-disable-next-line no-console
        console.log(err);
      }
    };
  }
});

/***/ }),

/***/ "xpDb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/img/common/dino_modalface_happy-aa19f8f4cb39d3a103b6ee2a47f9d0ec.png";

/***/ }),

/***/ "xrTZ":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : typeof define === 'function' && define.amd
        ? define(factory) : factory(global)
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.4.9";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return global.Base64 }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "xu8o":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("C7+h")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("GKKX")
/* template */
var __vue_template__ = __webpack_require__("vhlU")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61472152"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/extension_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] extension_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61472152", Component.options)
  } else {
    hotAPI.reload("data-v-61472152", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "y1S0":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("87G5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("JwPB")
/* template */
var __vue_template__ = __webpack_require__("f+11")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-720934fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/unlock_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] unlock_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-720934fa", Component.options)
  } else {
    hotAPI.reload("data-v-720934fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "yMIl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yRwJ":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "learning-home",
    class: _vm.isNoScroll ? 'learning-home-no-scroll' : '',
    on: {
      "mousewheel": function($event) {
        _vm.userScrollDown($event)
      },
      "DOMMouseScroll": function($event) {
        _vm.userScrollDown($event)
      },
      "scroll": _vm.conScroll
    }
  }, [(_vm.isShowUpdate) ? _c('div', {
    staticClass: "update-tip animated zoomIn",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.isShowUpdate = false
      }
    }
  }, [_c('p', [_vm._v("亲爱的宝贝，有新版本哦")]), _c('p', [_vm._v("快到VIPKID.com.cn官网下载安装吧～")])]) : _vm._e(), _c('index-bg', {
    staticClass: "learning-bg"
  }), _c('impel-enter'), _c('div', {
    staticClass: "guide-light-btn icon-light",
    style: (_vm.isShowSetting ? 'right:175px;bottom:47px' : ''),
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.isForceShowGuide($event)
      }
    }
  }), (_vm.isShowSetting) ? _c('div', {
    staticClass: "setting-btn icon-setting",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showSetting($event)
      }
    }
  }) : _vm._e(), (_vm.isShowSetting) ? _c('div', {
    staticClass: "reload-btn icon-reload",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.reload($event)
      }
    }
  }) : _vm._e(), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isBtnLeftShow),
      expression: "isBtnLeftShow"
    }],
    staticClass: "lb-btn-left",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.leftBtnClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-arrow-left"
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isBtnRightShow),
      expression: "isBtnRightShow"
    }],
    staticClass: "lb-btn-right",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.rightBtnClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "icon-arrow-right"
  })]), _c('guide', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowGuidePage),
      expression: "isShowGuidePage"
    }],
    on: {
      "guideClose": _vm.guideCloseFun
    }
  }), (_vm.isShowVideo) ? _c('simple-video', {
    staticClass: "sm-video",
    attrs: {
      "videoConfig": _vm.videoConfig
    }
  }) : _vm._e(), (_vm.newCardIsShow) ? _c('div', {
    staticClass: "uncard",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.newCardIsShow = false
      }
    }
  }, [_c('unlock-card', {
    attrs: {
      "unlockCard": _vm.newCard
    }
  })], 1) : _vm._e(), _c('i-header', {
    attrs: {
      "userInfo": _vm.userInfo
    }
  }), _c('iBody', {
    staticClass: "learning-body",
    attrs: {
      "configCards": _vm.cards,
      "isErrorCardShowConfig": _vm.isErrorCardShow,
      "petImgSrc": _vm.giftConfig.petImgSrc
    }
  }), (_vm.isShowGiftAnimate) ? _c('giftAnimate', {
    attrs: {
      "imgConfig": _vm.giftConfig
    }
  }) : _vm._e(), _c('userAgreement')], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c12ceba", module.exports)
  }
}

/***/ }),

/***/ "yX+B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__ = __webpack_require__("blqv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__back_card_vue__ = __webpack_require__("0qy4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__back_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__back_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_progress_vue__ = __webpack_require__("aNdD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js__ = __webpack_require__("wFBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookies_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookies_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var noImg = __webpack_require__("fueH");
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pps: [{
        name: "预习",
        state: "use" //disable:灰色 use：可预习 used：预习完
      }, {
        name: "上课",
        state: "disable" //disable:灰色 use：可预习 used：预习完
      }, {
        name: "做作业",
        state: "disable" //disable:灰色 use：可预习 used：预习完
      }],
      //        HIDE(0,"不显示"),
      //        LOCK(1,"不可用"),
      //        UNLOCK(2, "可用"),
      //        FINISH_UNLOCK(3, "完成并继续可用"),
      //        FINISH_LOCK(4, "完成但不可用");
      backButtonState: ['hide', 'disable', 'enable', 'enable', 'disable']
    };
  },
  components: {
    vkBtn: __WEBPACK_IMPORTED_MODULE_0__common_vk_button_vue___default.a, vkProgress: __WEBPACK_IMPORTED_MODULE_2__components_progress_vue___default.a, backCard: __WEBPACK_IMPORTED_MODULE_1__back_card_vue___default.a
  },
  props: ['config', 'currentPanelState'],
  computed: {},
  mounted: function mounted() {
    this.initState();
  },

  watch: {
    config: function config(n, o) {
      this.initState();
    }
  },
  methods: {
    goHomework: function goHomework() {
      this.$getWorkUrl(this.config, this, this.config.courseCardStatus === 0 ? 'PRE' : 'AFTER', 'homepage_btn_homework');
    },
    initState: function initState() {
      /*
      * 进度判断逻辑
      * @preHomeworkStatus @afterHomeworkButtonText 这俩字段决定课前课后进度状态是否实心(1实心，2空心)
      * @courseCardStatus 此字段如果为2,代表上课状态为实心
      */
      if (this.config.preHomeworkStatus == 1) {
        this.pps[0].state = "used";
      }
      if (this.config.afterHomeworkButton == 0) {
        this.pps.pop();
      }
      if ([11, 15, 17, 18].indexOf(this.config.cardType) > -1) {
        if (this.config.courseCardStatus == 2) {
          this.pps[1].state = "used";
          this.pps[2].state = "use";
        }
        if (this.config.afterHomeworkStatus == 1) {
          this.pps[2].state = "used";
        }
      }
      if ([15].indexOf(this.config.cardType) > -1) {
        this.pps[2].name = this.config.afterHomeworkScheduleText;
      }
    },
    errorImg: function errorImg(e) {
      e.target.src = noImg;
    }
  }
});

/***/ }),

/***/ "yk9G":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("aUZn")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("Hq1d")
/* template */
var __vue_template__ = __webpack_require__("YIvq")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5cc7501a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/components/student_info.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] student_info.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cc7501a", Component.options)
  } else {
    hotAPI.reload("data-v-5cc7501a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "z1rB":
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "enter-active-class": "animated bounceInDown",
      "leave-active-class": "animated bounceOutUp"
    }
  }, [_c('div', {
    staticClass: "honor-con",
    class: _vm.showClass
  }, [_c('div', {
    staticClass: "hc-panel-top"
  }), _c('div', {
    staticClass: "hc-panel"
  }, [_c('div', {
    staticClass: "hc-close icon-honor-close",
    on: {
      "click": _vm.close
    }
  }), _c('div', {
    staticClass: "hc-panel-in"
  }, [_c('div', {
    staticClass: "hc-title"
  }, [_vm._v("我的勋章")]), (_vm.netError) ? _c('net-error', {
    staticClass: "honor-net-error"
  }) : _vm._e(), (_vm.currentHonors.length == 0) ? _c('div', {
    staticClass: "no-honor"
  }, [_c('p', [_vm._v("还没有获得勋章哦～")]), _c('p', [_vm._v("完成Unit的学习就可以获得勋章啦～")])]) : _vm._e(), _c('transition', {
    attrs: {
      "enter-active-class": "animated pageIn",
      "leave-active-class": "animated pageOut"
    }
  }, [(_vm.currentHonors.length != 0) ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listShow),
      expression: "listShow"
    }],
    staticClass: "hc-list"
  }, _vm._l((_vm.currentHonors), function(honor, index) {
    return _c('div', {
      staticClass: "hcl-item animated zoomIn",
      style: ({
        animationDelay: index * 0.1 + 's'
      })
    }, [_c('img', {
      attrs: {
        "src": honor.name
      },
      on: {
        "error": _vm.errorImgFun
      }
    })])
  })) : _vm._e()])], 1), _c('div', {
    staticClass: "hc-circle",
    class: _vm.honorHandAnimated ? 'hand-hover' : ''
  }, [_c('div', {
    staticClass: "h-black"
  }), _c('div', {
    ref: "honorHandLine",
    staticClass: "h-line",
    style: ({
      height: _vm.honorHandTop + 'px'
    })
  }), _c('div', {
    ref: "honorHand",
    staticClass: "h-circle icon-honor-circle",
    style: ({
      top: _vm.honorHandTop + 'px'
    }),
    on: {
      "click": _vm.handClick,
      "mouseenter": _vm.honorHandHover,
      "mousedown": function($event) {
        _vm.honorHandPull($event)
      }
    }
  })])])])])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-574e7ff9", module.exports)
  }
}

/***/ }),

/***/ "zDbP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vk_toast_vue__ = __webpack_require__("ujOd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vk_toast_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vk_toast_vue__);
/**
 * Toast插件 by gaoyasong
 */


/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    var toastTemplate = Vue.extend(__WEBPACK_IMPORTED_MODULE_0__vk_toast_vue___default.a);
    Vue.prototype.$showToast = function (message, isHappy, time) {
      var tpl = new toastTemplate({
        propsData: {
          message: message,
          isHappy: isHappy
        }
      }).$mount().$el;

      document.body.appendChild(tpl);
      setTimeout(function () {
        document.body.removeChild(tpl);
      }, time ? time : 2500);
    };
  }
});

/***/ }),

/***/ "zSKq":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("AWg3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = __webpack_require__("gr9D")
/* template */
var __vue_template__ = __webpack_require__("C1Sa")
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a86ff7f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/card/work_card.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] work_card.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a86ff7f2", Component.options)
  } else {
    hotAPI.reload("data-v-a86ff7f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "zoHC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by lihongbin on 2017/7/25.
 * loading插件
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, options) {
    Vue.directive('errorImg', {
      bind: function bind(el, binding, vnode, oldVnode) {
        el.onerror = function () {
          el.src = binding.value;
        };
      }
    });
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=main.js.map