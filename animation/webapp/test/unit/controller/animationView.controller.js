/*global QUnit*/

sap.ui.define([
	"animation/controller/animationView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("animationView Controller");

	QUnit.test("I should test the animationView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
