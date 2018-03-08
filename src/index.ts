import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { ModalService } from './modal-service';

export function configure(config: FrameworkConfiguration) {
    config.plugin(PLATFORM.moduleName('aurelia-dialog'));
}