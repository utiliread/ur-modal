import { DialogService } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class ModalService {
    constructor(private dialog: DialogService) {
    }

    public async open<T>(moduleId: string, model?: any) {
        let result = await this.dialog.open({
            viewModel: moduleId,
            model: model
        }).whenClosed();

        return {
            wasCancelled: result.wasCancelled,
            output: <T>result.output
        };
    }
}