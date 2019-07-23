import { Component, OnInit } from '@angular/core';
import { ListsComponent } from '../lists/lists.component';

@Component({
  selector: 'view-list',
  templateUrl: '../lists/lists.component.html',
  styleUrls: ['../lists/lists.component.scss']
})
export class ViewListComponent extends ListsComponent implements OnInit {

  ngOnInit() {
    this.ownerName = 'Gabe';
    this.title = this.ownerName + '\'s List';
    this.description = 'Check out ' + this.ownerName + '\'s list at NicheShack.com!';
    this.image = '/assets/List.png';
    super.ngOnInit();
  }

}
