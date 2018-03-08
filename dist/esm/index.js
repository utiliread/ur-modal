import { PLATFORM } from 'aurelia-framework';
export { ModalService } from './modal-service';
export function configure(config) {
    config.plugin(PLATFORM.moduleName('aurelia-dialog'));
}
//# sourceMappingURL=index.js.map