var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';
var ConfirmModal = /** @class */ (function () {
    function ConfirmModal(controller) {
        this.controller = controller;
        this.buttons = new Map();
    }
    ConfirmModal.prototype.activate = function (model) {
        this.title = model.title;
        this.content = model.content;
        this.closeable = model.closeable === undefined || model.closeable === true;
        if (model.buttons) {
            if (model.buttons.ok) {
                if (model.buttons.ok === true) {
                    model.buttons.ok = {};
                }
                model.buttons.ok.text = model.buttons.ok.text || 'OK';
                model.buttons.ok.btnClass = model.buttons.ok.btnClass || 'btn-primary';
            }
            if (model.buttons.cancel) {
                if (model.buttons.cancel === true) {
                    model.buttons.cancel = {};
                }
                model.buttons.cancel.text = model.buttons.cancel.text || 'Annulér';
                model.buttons.cancel.btnClass = model.buttons.cancel.btnClass || 'btn-default';
                model.buttons.cancel.cancels = true;
            }
            for (var id in model.buttons) {
                this.buttons.set(id, model.buttons[id]);
            }
        }
    };
    ConfirmModal.prototype.click = function (id) {
        var button = this.buttons.get(id);
        if (button.cancels === true) {
            this.controller.cancel(id);
        }
        else {
            this.controller.ok(id);
        }
    };
    ConfirmModal.prototype.close = function () {
        this.controller.cancel('close');
    };
    ConfirmModal = __decorate([
        autoinject(),
        __metadata("design:paramtypes", [DialogController])
    ], ConfirmModal);
    return ConfirmModal;
}());
export { ConfirmModal };
//# sourceMappingURL=confirm.js.map