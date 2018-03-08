import { PLATFORM } from 'aurelia-framework';
import { ModalService } from './modal-service';
export function configure(config) {
    config.plugin(PLATFORM.moduleName('aurelia-dialog'));
}
export { ModalService };
//# sourceMappingURL=index.js.map