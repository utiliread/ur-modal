"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var modal_service_1 = require("./modal-service");
exports.ModalService = modal_service_1.ModalService;
function configure(config) {
    config.plugin(aurelia_framework_1.PLATFORM.moduleName('aurelia-dialog'));
}
exports.configure = configure;
//# sourceMappingURL=index.js.map