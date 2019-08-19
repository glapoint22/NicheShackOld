import { Component, Input } from '@angular/core';
import { QueryParametersService } from 'projects/website/src/app/query-parameters.service';
import { FilterSelection } from '../filter-selection';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() caption: string;
  @Input() showContent: boolean;
  @Input() show: boolean;
  private separator: string = '^';

  constructor(public queryParametersService: QueryParametersService) { }

  onArrowClick() {
    if (!this.show) {
      this.show = true;
      window.setTimeout(() => {
        this.showContent = true;
      }, 1);
    } else {
      this.showContent = false;
    }
  }

  onTransitionEnd() {
    if (!this.showContent) this.show = false;
  }

  getFilterString(filterSelection: FilterSelection): string {
    let startString: string;
    let midString: string;
    let endString: string;
    let filterString: string = this.queryParametersService.queryParams.get('filter');

    //If there are any filters
    if (filterString) {
      //Search for the filter in the string
      let filterResult: RegExpExecArray = this.getFilterFromQueryParams(filterSelection.filterName);

      //If the filter was found within the filter string
      if (filterResult) {
        /* Split the filter string into 3 sections. The first two sections are the
        start and end of the filter string. */
        startString = filterString.slice(0, filterResult.index) + filterResult[1] + '|';
        endString = filterString.slice(filterResult.index + filterResult[0].length);

        //Split the results into an array
        let array = filterResult[2].split(this.separator);

        //Test to see if the option is a price range
        if (filterSelection.filterName == 'Price') {
          if (array[0] != filterSelection.option) {
            midString = filterSelection.option;
          } else {
            //Otherwise, remove the price range
            midString = '';
          }
        } else {
          //The option is not a price range
          let index = array.indexOf(filterSelection.option.toString());

          //If the option is not found, add it to the mid string
          if (index == -1) {
            midString = filterResult[2] + this.separator + filterSelection.option;
          } else {
            //The option was found, so remove it from the string
            array.splice(index, 1);
            midString = array.join(this.separator);
          }
        }


        //Combine all three strings together
        filterString = startString + midString + endString;

        //If the midstring is empty, this means there are no more options in this filter.
        //Remove this filter from the filter string
        if (midString === '') {
          filterString = filterString.replace(filterSelection.filterName + '||', '');
        }
      } else {
        //The filter was not found within the filter string so we add it here
        filterString += filterSelection.filterName + '|' + filterSelection.option + '|';
      }
    } else {
      //There are no filters in the filter string, so add the first one here
      filterString = filterSelection.filterName + '|' + filterSelection.option + '|';
    }

    return filterString;
  }



  getFilterFromQueryParams(filterName: string): RegExpExecArray {
    let regEx = new RegExp('(' + filterName + ')\\|([a-zA-Z0-9`~!@#$%^&*()\-_+={[}\\]\\:;"\'<,>.?/\\s]+)', 'g');
    return regEx.exec(this.queryParametersService.queryParams.get('filter'));
  }

  getFilterOptions(filterName: string) {
    let filterOptions: Array<string> = [];
    let filterString: string = this.queryParametersService.queryParams.get('filter');

    //If there are any filters
    if (filterString) {
      //See if the current filter is in the list
      let filter = this.getFilterFromQueryParams(filterName);

      //If the current filter is in the list
      if (filter) {
        filterOptions = filter[2].split(this.separator);
      }
    }
    return filterOptions;
  }

  getAddRemoveParams(filterString: string) {
    let params;

    // This is used to tell which parameters are to be added and which parameters are to be removed from the url
    if (filterString === '') {
      params = { add: [], remove: ['page', 'filter'] };
    } else {
      params = { add: [{ name: 'filter', value: filterString }], remove: ['page'] };
    }
    return params;
  }


  updateFilterParams(filterSelection: FilterSelection) {
    // Update the filter parameters in the URL
    let filterString: string = this.getFilterString(filterSelection);
    let addRemoveParams = this.getAddRemoveParams(filterString);

    this.queryParametersService.updateUrl('/search', addRemoveParams);
  }
}