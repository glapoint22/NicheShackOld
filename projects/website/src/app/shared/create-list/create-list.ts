import { Modal } from 'src/app/components/modal/modal';
import { Subject } from 'rxjs';

export class CreateList extends Modal {
    public onClose = new Subject<any>();
}
