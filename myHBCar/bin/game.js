if ((typeof swan !== 'undefined') && (typeof swanGlobal !== 'undefined')) {
	require("swan-game-adapter.js");
	require("libs/laya.bdmini.js");
} else if (typeof wx !== "undefined") {
	require("weapp-adapter.js");
	require("laya.wxmini.js");

}
require("index.js");

