import { PLATFORM, autoinject } from 'aurelia-framework'

import { DialogController } from 'aurelia-dialog';

@autoinject()
export class ConfirmModal {
    title!: string;
    content!: string;
    closeable!: boolean;
    buttons: Map<string, ConfirmButton> = new Map<string, ConfirmButton>();

    constructor(protected controller: DialogController) {
    }

    activate(model: ConfirmModel) {
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

            for (let id in model.buttons) {
                this.buttons.set(id, model.buttons[id]);
            }
        }
    }
    
    click(id: string) {
        let button = this.buttons.get(id)!;

        if (button.cancels === true) {
            this.controller.cancel(id);
        }
        else {
            this.controller.ok(id);
        }
    }

    close() {
        this.controller.cancel('close');
    }
}

export interface ConfirmModel {
    title: string;
    content: string;
    closeable?: boolean;
    buttons?: { [id: string]: ConfirmButton } & {
        ok?: ConfirmButton | true;
        cancel?: ConfirmButton | true;
    };
}

export interface ConfirmButton {
    text?: string;
    btnClass?: string;
    cancels?: boolean;
}