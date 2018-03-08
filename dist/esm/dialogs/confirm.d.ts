import { DialogController } from 'aurelia-dialog';
export declare class ConfirmModal {
    protected controller: DialogController;
    title: string;
    content: string;
    closeable: boolean;
    buttons: Map<string, ConfirmButton>;
    constructor(controller: DialogController);
    activate(model: ConfirmModel): void;
    click(id: string): void;
    close(): void;
}
export interface ConfirmModel {
    title: string;
    content: string;
    closeable?: boolean;
    buttons?: {
        [id: string]: ConfirmButton;
    } & {
        ok?: ConfirmButton | true;
        cancel?: ConfirmButton | true;
    };
}
export interface ConfirmButton {
    text?: string;
    btnClass?: string;
    cancels?: boolean;
}
