import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  public sortOptions: Array<any>;
  public selectedSortOption: any = {};
  public title = 'Christmas List';
  public lists: Array<any> = [
    {
      title: 'Christmas List',
      description: 'This is the best list in the whole entire world!',
      totalItems: 2,
      selected: true,
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png'
    },
    {
      title: 'Wish List',
      description: 'These are the items I wish I could get',
      totalItems: 1,
      selected: false,
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png'
    }
  ];
  public products: Array<any> = [
    {
      title: 'Isometrics Mass',
      rating: 3,
      totalReviews: 222,
      minPrice: 10,
      maxPrice: 0,
      dateAdded: 'June 3, 2019',
      hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png'
    },
    {
      title: 'Muscle Building 101',
      rating: 5,
      totalReviews: 12,
      minPrice: 13.58,
      maxPrice: 20.22,
      dateAdded: 'July 13, 2019',
      hoplink: 'https://201behydk0sr8n2-f2jo9qcq9u.hop.clickbank.net/',
      image: 'e9a794bc40f14f709e6636aefbfe5d43.png'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.sortOptions = [
      {
        name: 'Added Date',
        value: 'added'
      },
      {
        name: 'Price: Low to High',
        value: 'price-asc'
      },
      {
        name: 'Price: High to Low',
        value: 'price-desc'
      },
      {
        name: 'Name',
        value: 'name'
      },
      {
        name: 'Rating',
        value: 'rating'
      }
    ];

    this.selectedSortOption = this.sortOptions[0];
  }
  

}
