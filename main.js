/*jslint devel:true */

define(function (require, exports, module) {
	'use strict';
	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	LanguageManager.defineLanguage("dockerfile", {
		name: "Dockerfile",
		mode: "dockerfile",
		fileNames: ["Dockerfile"],
		lineComment: ["#"]
	});

	console.log("Dockerfile syntax highlighting extension loaded");
});
