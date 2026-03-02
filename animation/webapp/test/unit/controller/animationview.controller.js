/*global QUnit*/

sap.ui.define([
	"animation/controller/animationview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("animationview Controller");

	QUnit.test("I should test the animationview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
