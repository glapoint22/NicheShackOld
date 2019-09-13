import { Injectable } from '@angular/core';
import { QuickLook } from 'projects/website/src/app/shared/quick-look/quick-look';
import { MediaViewer } from 'projects/website/src/app/shared/media-viewer/media-viewer';
import { Modal } from 'src/app/components/modal/modal';
import { CreateList } from 'projects/website/src/app/shared/create-list/create-list';
import { ReportReview } from 'projects/website/src/app/shared/report-review/report-review';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public mediaViewer: MediaViewer = new MediaViewer();
  public quickLook: QuickLook = new QuickLook();
  public reportItem: Modal = new Modal();
  public addToList: Modal = new Modal();
  public createList: CreateList = new CreateList();
  public reportReview: ReportReview = new ReportReview();
  public shareList: Modal = new Modal();
  public manageList: Modal = new Modal();
  public deleteList: Modal = new Modal();
  public manageCollaborators: Modal = new Modal();
  public subscriptionForm: any = {};
}
