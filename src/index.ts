import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

import { ConfirmModel } from './dialogs/confirm';
import { ModalService } from './modal-service';

export function configure(config: FrameworkConfiguration) {
    config.plugin(PLATFORM.moduleName('aurelia-dialog'));
}

export {
    ModalService,
    ConfirmModel
};