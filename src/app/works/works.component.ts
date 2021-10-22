import { Component, OnInit } from '@angular/core';
import { WorksService } from './../services/works.service';
import { UtilService } from './../services/util.service';
import { FilterByPipe } from './../pipes/filter-by.pipe';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

    works: any;// = works.sort((a, b) => b.id - a.id);
    error: string | undefined;

    filterFields: Array<string> = [
        'website',
        'logo',
        'branding'
    ];
    filterField: Array<string> = [];

    sortField: string = 'id';
    sortDirection: string = 'desc';

    constructor(
        private worksService: WorksService,
        public utilService: UtilService
    ) { }

    ngOnInit(): void {
        this.worksService
            .getAllWorks()
            .subscribe(
                data => this.works = data,
                error => this.error= error.statusText
            );
    }

    clickToggleFilterValues( filterValue:string )
    {
        let filterPipe = new FilterByPipe;

        this.filterField = filterPipe.toggleFilterValues(
                this.filterField,
                filterValue
            );

        // return this.filterField;
    }

}
