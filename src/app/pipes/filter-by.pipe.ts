import { Pipe, PipeTransform } from '@angular/core';
import { WorkItem } from '../work-item';

@Pipe({
  name: 'filterBy',
  pure: false
})
export class FilterByPipe implements PipeTransform {

    filterBy:Array<string> = [];

    transform(array: Array<WorkItem>, args: Array<string>): any {

        if (array) {

            this.filterBy = args;

            let tempArray:Array<WorkItem> = array;
            let newArray:Array<WorkItem> = [];

            // console.log('FilterByPipe:',this.filterBy);

            if( this.filterBy.length > 0 )
            {
                this.filterBy.forEach( function (value:string)
                {
                    // Filter array
                    tempArray = array.filter(
                        function(item:WorkItem){
                            return item.type.includes( value );
                        }
                    );

                    // Combine arrays and get unique values only
                    newArray = [...new Set([...newArray ,...tempArray])];

                });

                array = newArray;
            }

            return array;
        }
    }

    public toggleFilterValues( filterBy:Array<string>, filterValue:string ): Array<string>
    {
        let array = filterBy;

        if( filterValue.length )
        {
            if( array.includes(filterValue) ){
                array.splice( array.indexOf(filterValue), 1);
            }else{
                array.unshift(filterValue);
            }
        }

        return array;
    }
}
