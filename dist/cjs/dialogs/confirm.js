"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_dialog_1 = require("aurelia-dialog");
var ConfirmModal = /** @class */ (function () {
    function ConfirmModal(controller) {
        this.controller = controller;
        this.buttons = new Map();
    }
    ConfirmModal.prototype.activate = function (model) {
        var _this = this;
        this.title = model.title;
        this.content = model.content;
        this.closeable = model.closeable === undefined || model.closeable === true;
        if (model.buttons) {
            if (model.buttons.ok) {
                model.buttons.ok.btnClass = model.buttons.ok.btnClass || 'btn-primary';
                if (!model.buttons.ok.action) {
                    model.buttons.ok.action = function (id) { return _this.controller.ok(id); };
                }
            }
            if (model.buttons.cancel) {
                model.buttons.cancel.btnClass = model.buttons.cancel.btnClass || 'btn-default';
                if (!model.buttons.cancel.action) {
                    model.buttons.cancel.action = function (id) { return _this.controller.cancel(id); };
                }
            }
            for (var id in model.buttons) {
                var button = model.buttons[id];
                button.action = button.action || nop;
                this.buttons.set(id, button);
            }
        }
    };
    ConfirmModal = __decorate([
        aurelia_framework_1.autoinject(),
        aurelia_framework_1.useView('./confirm.html'),
        __metadata("design:paramtypes", [aurelia_dialog_1.DialogController])
    ], ConfirmModal);
    return ConfirmModal;
}());
exports.ConfirmModal = ConfirmModal;
function nop() {
}
//# sourceMappingURL=confirm.js.map