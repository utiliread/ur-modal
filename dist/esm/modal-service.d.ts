import { DialogService } from 'aurelia-dialog';
export declare class ModalService {
    private dialog;
    constructor(dialog: DialogService);
    open<T>(moduleId: string, model?: any): Promise<{
        wasCancelled: boolean;
        output: T;
    }>;
}
