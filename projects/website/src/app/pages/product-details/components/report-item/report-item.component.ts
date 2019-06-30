import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.scss']
})
export class ReportItemComponent extends ModalComponent implements OnInit {
  public options: Array<any>;
  public selectedWhereOption: any;
  public selectedWhatOption: any;

  constructor(modalService: ModalService, router: Router) { super(modalService, router)}

  ngOnInit() {
    this.modalServiceObject = this.modalService.reportItem;
    this.isClosable = true;
    super.ngOnInit();

    this.options = [
      {
        name: 'Where is the issue?',
        value: '',
        options: [
          {
            name: 'What is the issue?',
            value: ''
          }
        ]
      },
      {
        name: 'Product Name',
        value: 'name',
        options: [
          {
            name: 'What is the issue?',
            value: ''
          },
          {
            name: 'Doesn\'t match with product description',
            value: 'not-match-description'
          },
          {
            name: 'Doesn\'t match with product image',
            value: 'not-match-image'
          },
          {
            name: 'Incorrect/Misleading information',
            value: 'incorrect-info'
          }
        ]
      },
      {
        name: 'Price',
        value: 'price',
        options: [
          {
            name: 'What is the issue?',
            value: ''
          },
          {
            name: 'Too high',
            value: 'too-high'
          },
          {
            name: 'Not correct',
            value: 'not-correct'
          },
          {
            name: 'Other',
            value: 'other'
          }
        ]
      },
      {
        name: 'Videos & Images',
        value: 'vid-imgs',
        options: [
          {
            name: 'What is the issue?',
            value: ''
          },
          {
            name: 'Different from product',
            value: 'not-match'
          },
          {
            name: 'Not enough',
            value: 'not-enough'
          },
          {
            name: 'Not clear',
            value: 'not-clear'
          },
          {
            name: 'Misleading',
            value: 'misleading'
          },
          {
            name: 'Other',
            value: 'other'
          }
        ]
      },
      {
        name: 'Product Description',
        value: 'desc',
        options: [
          {
            name: 'What is the issue?',
            value: ''
          },
          {
            name: 'Incorrect description',
            value: 'bad-desc'
          },
          {
            name: 'Too vague',
            value: 'vague'
          },
          {
            name: 'Misleading',
            value: 'misleading'
          },
          {
            name: 'Other',
            value: 'other'
          }
        ]
      },
      {
        name: 'Offensive Product',
        value: 'offensive',
        options: [
          {
            name: 'What is the issue?',
            value: ''
          },
          {
            name: 'Illegal product',
            value: 'illegal'
          },
          {
            name: 'Adult content',
            value: 'adult'
          },
          {
            name: 'Other',
            value: 'other'
          }
        ]
      },
      {
        name: 'Missing Product',
        value: 'missing',
        options: [
          {
            name: 'What is the issue?',
            value: ''
          },
          {
            name: 'Inactive product',
            value: 'inactive'
          },
          {
            name: 'Publisher\'s site is missing/down' ,
            value: 'site-down'
          }
        ]
      }
    ]

    this.selectedWhereOption = this.options[0];
    this.selectedWhatOption = this.options[0].options[0];

  }

}
